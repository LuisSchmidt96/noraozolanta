import type { Actions } from './$types';
import {
	subscribeToWaitlist as subscribeToNewsletter,
	subscribeToWaitlist
} from '$lib/server/actions';

export const actions: Actions = {
	newsletter: async ({ request }) => {
		return subscribeToNewsletter(request);
	},
	waitlist: async ({ request }) => {
		return subscribeToWaitlist(request);
	}
};
