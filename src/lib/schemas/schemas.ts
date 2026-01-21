import z from "zod";

export const waitlistSchema = z.object({
	name: z.string().min(1),
	email: z.email()
});

export const newsletterSchema = z.object({
	name: z.string().min(1),
	email: z.email(),
});

export const contactSchema = z.object({
	name: z.string().min(1),
	email: z.email(),
    message: z.string().min(1).max(1000)
});