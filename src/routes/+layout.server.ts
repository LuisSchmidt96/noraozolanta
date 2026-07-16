import { superValidate } from 'sveltekit-superforms';
import type { LayoutServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { newsletterSchema, waitlistSchema } from '$lib/schemas/schemas';

export const load = (async () => {
	const newsletterForm = await superValidate(zod4(newsletterSchema), { id: 'newsletter' });
	const waitlistForm = await superValidate(zod4(waitlistSchema), { id: 'waitlist' });
	const footerNewsletterForm = await superValidate(zod4(newsletterSchema), {
		id: 'newsletter-footer'
	});
	return { newsletterForm, waitlistForm, footerNewsletterForm };
}) satisfies LayoutServerLoad;
