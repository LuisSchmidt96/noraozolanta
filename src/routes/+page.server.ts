import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { subscribeToWaitlist as subscribeToNewsletter } from '$lib/server/actions';
import { newsletterSchema } from '$lib/schemas/schemas';

export const load = (async () => {
	const form = await superValidate(zod4(newsletterSchema));

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		return subscribeToNewsletter(request);
	}
};
