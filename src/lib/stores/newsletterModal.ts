import { writable } from 'svelte/store';

export const newsletterModalOpen = writable(false);

export function openNewsletterModal() {
  newsletterModalOpen.set(true);
}

export function closeNewsletterModal() {
  newsletterModalOpen.set(false);
}
