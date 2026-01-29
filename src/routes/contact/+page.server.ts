import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { submitContactForm, subscribeToNewsletter, subscribeToWaitlist } from '$lib/server/actions';
import { contactSchema } from '$lib/schemas/schemas';

export const load = (async () => {
	const form = await superValidate(zod4(contactSchema), { id: 'contact' });

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	contact: async ({ request }) => {
		return submitContactForm(request);
	},
	newsletter: async ({ request }) => {
		return subscribeToNewsletter(request);
	},
	waitlist: async ({ request }) => {
		return subscribeToWaitlist(request);
	}
};
