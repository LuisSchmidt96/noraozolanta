import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { env } from '$env/dynamic/private';
import MailerLite, { type CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs';
import { contactSchema, newsletterSchema, waitlistSchema } from '$lib/schemas/schemas';
import DOMPurify from 'isomorphic-dompurify';

const mailerlite = new MailerLite({
	api_key: env.MAILERLITE_API_KEY
});

export async function submitContactForm(
	request: Request,
	// getClientAddress: () => string | undefined
) {
	const form = await superValidate(request, zod4(contactSchema));
	console.log(form);

	if (!form.valid) {
		// Return { form } and things will just work.
		return fail(400, { form });
	}
	if (!form.valid) return fail(400, { form });

	// Optional: sanitize input
	const clean = {
		name: DOMPurify.sanitize(form.data.name),
		email: DOMPurify.sanitize(form.data.email),
		nachricht: DOMPurify.sanitize(form.data.message)
	};
	console.log('Cleaned form data:', clean);
	// Send mail (you can abstract this into a service)
	// const transporter = nodemailer.createTransport({
	// 	host: SMTP_SERVER,
	// 	port: Number(SMTP_PORT),
	// 	secure: false,
	// 	requireTLS: true,
	// 	auth: {
	// 		user: CONTACT_MAIL,
	// 		pass: CONTACT_MAIL_SMTP_TOKEN
	// 	}
	// });

	// const ip = getClientAddress();
	// const consent_timestamp = new Date().toISOString();
	// const privacyInfo = `Datenschutz-Einwilligung:\nZustimmung: ${form.data.privacy ? 'Ja' : 'Nein'}\nZeitpunkt: ${consent_timestamp ?? 'Nicht übermittelt'}\nIP-Adresse: ${ip ?? 'Nicht verfügbar'}`;

	try {
		// await transporter.sendMail({
		// 	from: `"Contact Form" <${CONTACT_MAIL}>`,
		// 	to: CONTACT_MAIL,
		// 	subject: `Neue Nachricht von ${clean.name}`,
		// 	text: `${clean.nachricht}\n\nKontakt: ${clean.email}\n\n${privacyInfo}`
		// });
	} catch (error) {
		console.error(error);
		return {
			form,
			error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
		};
	}
}

export async function subscribeToNewsletter(request: Request) {
	const form = await superValidate(request, zod4(newsletterSchema));
	// console.log(form);

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
		groups: [env.GROUP_ID_NEWSLETTER], // TODO: change to actual group id
		status: 'unconfirmed', // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
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
		text: 'Paldies! Tu esi veiksmīgi pievienojies waitlist-am!'
	});
}

export async function subscribeToWaitlist(request: Request) {
	const form = await superValidate(request, zod4(waitlistSchema));
	// console.log(form);

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
		groups: [env.GROUP_ID_TESTWAITLIST], // TODO: change to actual group id
		status: 'unconfirmed', // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
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
		text: 'Paldies! Tu esi veiksmīgi pievienojies waitlist-am!'
	});
}
