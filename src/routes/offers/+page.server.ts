import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import MailerLite, { type CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
	api_key: env.MAILERLITE_API_KEY
});

const schema = z.object({
	name: z.string().min(1),
	email: z.email()
});

export const load = (async () => {
	const form = await superValidate(zod4(schema));

	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(schema));
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
			groups: [env.GROUP_ID_TESTWAITLIST],
			status: 'unconfirmed', // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
			subscribed_at: timestamp // yyyy-MM-dd HH:mm:ss
		};
		// TODO: Do something with the validated form.data
		// mailerlite.subscribers
		// 	.createOrUpdate(params as CreateOrUpdateSubscriberParams)
		// 	.then((response) => {
		// 		console.log(response.data);
		// 	})
		// 	.catch((error) => {
		// 		if (error.response)
		// 			return message(form, {
		// 				status: 'error',
		// 				text: 'Kaut kas nogāja greizi! Mēģini vēlreiz vēlāk.'
		// 			});
		// 	});

		// Return the form with a status message
		return message(form, {
			status: 'success',
			text: 'Paldies! Tu esi veiksmīgi pievienojies waitlist-am!'
		});
	}
};
