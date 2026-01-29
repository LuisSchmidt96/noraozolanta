import type { Actions } from './$types';

import { subscribeToNewsletter, subscribeToWaitlist } from '$lib/server/actions';


export const actions: Actions = {
	waitlist: async ({ request }) => {
		return subscribeToWaitlist(request);
	},
	newsletter: async ({ request }) => {
		return subscribeToNewsletter(request);
	}
};