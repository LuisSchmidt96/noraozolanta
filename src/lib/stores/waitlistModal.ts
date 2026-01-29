import { writable } from 'svelte/store';

export const waitlistModalOpen = writable(false);

export function openWaitlistModal() {
	waitlistModalOpen.set(true);
}

export function closeWaitlistModal() {
	waitlistModalOpen.set(false);
}
