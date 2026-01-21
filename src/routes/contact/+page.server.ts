import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { submitContactForm } from '$lib/server/actions';
import { contactSchema } from '$lib/schemas/schemas';

export const load = (async () => {
	const form = await superValidate(zod4(contactSchema));

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		return submitContactForm(request);
	}
};
