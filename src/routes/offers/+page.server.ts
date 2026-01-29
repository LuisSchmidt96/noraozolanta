import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { subscribeToWaitlist } from '$lib/server/actions';

const schema = z.object({
	name: z.string().min(1),
	email: z.email()
});

export const load = (async () => {
	const form = await superValidate(zod4(schema));

	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	waitlist: async ({ request }) => {
		return subscribeToWaitlist(request);
	}
};
