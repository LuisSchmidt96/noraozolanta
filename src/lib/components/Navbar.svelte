<script lang="ts">
	import { page } from '$app/state';
	import { goToAnchor } from '$lib/utils/navigation';
	import WaitlistPopup from './WaitlistPopup.svelte';
	import { waitlistModalOpen } from '$lib/stores/waitlistModal';
	import NewsletterPopup from './NewsletterPopup.svelte';
	import { newsletterModalOpen } from '$lib/stores/newsletterModal';
	import { clickOutside } from '$lib/utils/clickOutside';

	let menuOpen = $state(false);
	const links = [
		{ name: 'Sākums', href: '/' },
		{ name: 'Piedāvājumi', href: '/offers' },
		{ name: 'Par mani', href: '/about' },
		{ name: 'Kontakti', href: '/contact' }
	];

	let { data } = $props();

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<!-- N6 Newspaper masthead · knobs: issue-line=none · wordmark=2xl · rule=double -->
<header class="bg-paper">
	<div class="container mx-auto px-4 pt-6 pb-0 text-center">
		<div class="flex items-center justify-between md:block">
			<a
				href="/"
				class="font-display text-3xl font-semibold tracking-tight text-ink no-underline md:text-4xl"
			>
				Nora Ozolanta
			</a>
			<button
				class="block cursor-pointer border-none bg-transparent p-2 md:hidden"
				onclick={(e) => {
					e.stopPropagation();
					menuOpen = !menuOpen;
				}}
				aria-label="Atvērt izvēlni"
				aria-expanded={menuOpen}
				aria-controls="mast-menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg
				>
			</button>
		</div>

		<nav class="mt-3 hidden md:block" aria-label="Galvenā navigācija">
			<ul class="m-0 inline-flex list-none items-center gap-8 p-0">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							onclick={goToAnchor}
							class="whitespace-nowrap py-2 text-ink no-underline transition-colors duration-150 hover:text-accent"
							class:mast-active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
							data-sveltekit-keepfocus
						>
							{link.name}
						</a>
					</li>
				{/each}
				<li>
					<button
						onclick={(e) => {
							e.stopPropagation();
							newsletterModalOpen.set(true);
						}}
						class="btn btn-outline"
					>
						Pieraksties jaunumiem
					</button>
				</li>
			</ul>
		</nav>
	</div>
	<div class="mast-rule mt-4" aria-hidden="true"></div>

	{#if menuOpen}
		<nav
			id="mast-menu"
			aria-label="Galvenā navigācija"
			use:clickOutside={() => {
				menuOpen = false;
			}}
			class="border-b border-rule bg-paper px-6 py-6 md:hidden"
		>
			<ul class="m-0 flex list-none flex-col gap-5 p-0 text-center text-lg">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							onclick={(e) => {
								e.stopPropagation();
								menuOpen = false;
								goToAnchor(e);
							}}
							class="block py-1 text-ink no-underline"
							class:mast-active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
							data-sveltekit-keepfocus
						>
							{link.name}
						</a>
					</li>
				{/each}
				<li>
					<button
						type="button"
						class="btn btn-outline w-full"
						onclick={(e) => {
							e.stopPropagation();
							menuOpen = false;
							newsletterModalOpen.set(true);
						}}
					>
						Pieraksties jaunumiem
					</button>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<WaitlistPopup bind:open={$waitlistModalOpen} form={data.waitlistForm} />
<NewsletterPopup bind:open={$newsletterModalOpen} form={data.newsletterForm} />

<style>
	.mast-rule {
		border-top: 1px solid var(--color-rule);
		border-bottom: 1px solid var(--color-rule);
		height: 4px;
	}
	.mast-active {
		text-decoration: underline;
		text-decoration-color: var(--color-accent-2);
		text-decoration-thickness: 2px;
		text-underline-offset: 6px;
	}
</style>
