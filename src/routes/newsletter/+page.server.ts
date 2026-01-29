import { subscribeToNewsletter, subscribeToWaitlist } from '$lib/server/actions';
import type { Actions } from './$types';

export const actions: Actions = {
	newsletter: async ({ request }) => {
		return subscribeToNewsletter(request);
	},
	waitlist: async ({ request }) => {
		return subscribeToWaitlist(request);
	}
};
