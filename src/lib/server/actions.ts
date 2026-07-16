import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { env } from '$env/dynamic/private';
import MailerLite, { type CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs';
import { contactSchema, newsletterSchema, waitlistSchema } from '$lib/schemas/schemas';
import nodemailer from 'nodemailer';
import { checkIfActiveSubscriber, createOrUpdateSubscriber } from './mailerlite';

function normalize(s: string) {
	return s.trim().replace(/\s+/g, ' ');
}

const mailerlite = new MailerLite({
	api_key: env.MAILERLITE_API_KEY
});

const transporter = nodemailer.createTransport({
	host: env.MAILERSEND_SMTP_HOST,
	port: Number(env.MAILERSEND_SMTP_PORT),
	secure: false,
	requireTLS: true,
	// logger: true,
	// debug: true,
	auth: {
		user: env.MAILERSEND_SMTP_USER,
		pass: env.MAILERSEND_SMTP_PASSWORD
	}
});
// await transporter.verify();
export async function sendContactEmail(args: {
	to: string;
	from: string;
	replyTo: string;
	subject: string;
	text: string;
}) {
	return transporter.sendMail({
		to: args.to,
		from: args.from,
		replyTo: args.replyTo,
		subject: args.subject,
		text: args.text
	});
}

export async function submitContactForm(
	request: Request
	// getClientAddress: () => string | undefined
) {
	const fd = await request.formData();

	// Honeypot: always return success-looking response
	const hp = String(fd.get('company') ?? '').trim();
	const form = await superValidate(fd, zod4(contactSchema)); // keep UI consistent

	if (hp) {
		return message(form, {
			status: 'success',
			text: 'Ziņojums nosūtīts! Paldies — sazināsimies drīzumā.'
		});
	}

	if (!form.valid) return fail(400, { form });
	console.log('form:', form.data);
	// Optional: sanitize input
	const clean = {
		name: normalize(form.data.name),
		email: normalize(form.data.email).toLowerCase(),
		message: form.data.message.trim(),
		marketingConsent: !!form.data.marketingConsent
	};
	console.log('Cleaned form data:', clean);
	// Send mail (you can abstract this into a service)
	try {
		console.log(transporter);
		await sendContactEmail({
			to: env.CONTACT_INBOX_EMAIL, // your client’s inbox
			from: `Website Contact <${env.CONTACT_FROM_EMAIL}>`, // e.g. contact@client.tld
			replyTo: clean.email, // user email
			subject: `New inquiry from ${clean.name}`,
			text: `Name: ${clean.name}
Email: ${clean.email}

Message:
${clean.message}
`
		});
	} catch (err) {
		console.error('SMTP send failed:', err);
		return message(form, {
			status: 'error',
			text: 'Kaut kas nogāja greizi! Mēģini vēlreiz vēlāk.'
		});
	} // const privacyInfo = `Datenschutz-Einwilligung:\nZustimmung: ${form.data.privacy ? 'Ja' : 'Nein'}\nZeitpunkt: ${consent_timestamp ?? 'Nicht übermittelt'}\nIP-Adresse: ${ip ?? 'Nicht verfügbar'}`;

	if (clean.marketingConsent) {
		console.log('creating subscriber');
		const res = await checkIfActiveSubscriber(clean.email);

		if (!res.ok) {
			// log full detail, show generic text
			console.error('MailerLite error:', res.status, res.detail);
			return message(form, {
				status: 'error',
				text: 'Kaut kas nogāja greizi! Mēģini vēlreiz vēlāk.'
			});
		}

		const status = res.ok && res.data.isActive ? undefined : 'unconfirmed';

		const res2 = await createOrUpdateSubscriber({
			email: clean.email,
			name: clean.name,
			groupIds: [env.GROUP_ID_NEWSLETTER],
			status: status
		});

		if (!res2.ok) {
			// IMPORTANT: don’t fail the contact form; they already contacted you successfully
			console.error('MailerLite opt-in failed:', res2.status, res2.detail);
			return message(form, {
				status: 'success',
				text: 'Ziņojums nosūtīts. (Piezīme: jaunumu saņemšanu neizdevās aktivizēt — lūdzu, pamēģini vēlreiz vēlāk.)'
			});
		}

		return message(form, {
			status: 'success',
			text: 'Ziņojums nosūtīts! Paldies — pārbaudiet e-pastu, lai apstiprinātu jaunumu saņemšanu.'
		});
	}
}

export async function subscribeToNewsletter(request: Request) {
	const form = await superValidate(request, zod4(newsletterSchema));

	// return message(form, {
	// 	status: 'success',
	// 	text: 'Paldies! Tu esi veiksmīgi pievienojies waitlist-am!'
	// });
	if (!form.valid) {
		// Return { form } and things will just work.
		return fail(400, { form });
	}

	const res = await createOrUpdateSubscriber({
		email: form.data.email,
		name: form.data.name,
		groupIds: [env.GROUP_ID_NEWSLETTER],
		status: 'unconfirmed' // only here, because this is consent/DOI flow
	});

	if (!res.ok) {
		// log full detail, show generic text
		console.error('MailerLite error:', res.status, res.detail);
		return message(form, {
			status: 'error',
			text: 'Kaut kas nogāja greizi! Mēģini vēlreiz vēlāk.'
		});
	}

	return message(form, {
		status: 'success',
		text: 'Pārbaudi savu e-pastu, lai apstiprinātu pierakstīšanos jaunumu vēstulei.'
	});
}

export async function subscribeToWaitlist(request: Request) {
	const form = await superValidate(request, zod4(waitlistSchema));
	console.log(form);
	// return message(form, {
	// 	status: 'success',
	// 	text: 'Ziņojums nosūtīts! Paldies — pārbaudiet e-pastu, lai apstiprinātu jaunumu saņemšanu.'
	// });
	if (!form.valid) {
		// Return { form } and things will just work.
		return fail(400, { form });
	}

	const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

	const params = {
		email: form.data.email,
		fields: {
			name: form.data.name
		},
		groups: [env.GROUP_ID_WAITLIST], // TODO: change to actual group id
		// status: 'unconfirmed', // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
		subscribed_at: timestamp // yyyy-MM-dd HH:mm:ss
	};
	// TODO: Do something with the validated form.data
	mailerlite.subscribers
		.createOrUpdate(params as CreateOrUpdateSubscriberParams)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			if (error.response)
				return message(form, {
					status: 'error',
					text: 'Kaut kas nogāja greizi! Mēģini vēlreiz vēlāk.'
				});
		});

	// Return the form with a status message
	return message(form, {
		status: 'success',
		text: 'Paldies! Tava vieta gaidītāju sarakstā ir rezervēta.'
	});
}
