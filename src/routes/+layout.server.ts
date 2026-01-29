import { superValidate } from 'sveltekit-superforms';
import type { LayoutServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { newsletterSchema, waitlistSchema } from '$lib/schemas/schemas';

export const load = (async () => {
	const newsletterForm = await superValidate(zod4(newsletterSchema));
	const waitlistForm = await superValidate(zod4(waitlistSchema));
	return { newsletterForm, waitlistForm };
}) satisfies LayoutServerLoad;



