import type { CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs'; // adjust import to your SDK
import { env } from '$env/dynamic/private';
import MailerLite from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
	api_key: env.MAILERLITE_API_KEY
});

export type MLResult<T = unknown> =
	| { ok: true; data: T }
	| { ok: false; code: 'MAILERLITE'; status?: number; detail?: string };

function toMysqlTimestamp(d = new Date()) {
	// yyyy-MM-dd HH:mm:ss (your current formatting is fine)
	return d.toISOString().slice(0, 19).replace('T', ' ');
}

type ActiveCheck = { isActive: boolean };

export async function checkIfActiveSubscriber(email: string): Promise<MLResult<ActiveCheck>> {
	try {
		const res = await mailerlite.subscribers.find(email);

		const status = res.data?.data?.status; // adjust if your SDK shape differs
		return { ok: true, data: { isActive: status === 'active' } };

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		const status = err?.response?.status ?? err?.status;

		if (status === 404) {
			// not found is not an "error" for your use-case
			return { ok: true, data: { isActive: false } };
		}

		const detail =
			err?.response?.data?.message ??
			err?.response?.data?.error ??
			err?.message ??
			'MailerLite request failed';

		return { ok: false, code: 'MAILERLITE', status, detail };
	}
}

export async function createOrUpdateSubscriber(args: {
	email: string;
	name?: string;
	groupIds: string[];
	status?: 'active' | 'unsubscribed' | 'unconfirmed' | 'bounced' | 'junk';
	subscribedAt?: string;
}): Promise<MLResult> {
	const params: CreateOrUpdateSubscriberParams = {
		email: args.email,
		fields: {
			...(args.name ? { name: args.name } : {})
		},
		groups: args.groupIds,
		...(args.status ? { status: args.status } : {}),
		subscribed_at: args.subscribedAt ?? toMysqlTimestamp()
	};

	try {
		const res = await mailerlite.subscribers.createOrUpdate(params);
		return { ok: true, data: res.data };
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		// normalize axios-ish / fetch-ish errors
		const status = err?.response?.status ?? err?.status;
		const detail =
			err?.response?.data?.message ??
			err?.response?.data?.error ??
			err?.message ??
			'MailerLite request failed';

		return { ok: false, code: 'MAILERLITE', status, detail };
	}
}
