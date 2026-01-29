<script lang="ts">
	import { goToAnchor } from '$lib/utils/navigation';
	import WaitlistPopup from './WaitlistPopup.svelte';
	import { waitlistModalOpen } from '$lib/stores/waitlistModal';
	import NewsletterPopup from './NewsletterPopup.svelte';
	import { newsletterModalOpen } from '$lib/stores/newsletterModal';
	import { clickOutside } from '$lib/utils/clickOutside';

	let menuOpen = $state(false);
	const links = [
		{ name: 'Sākums', top: true, href: '/' },
		{ name: 'Piedāvājumi', href: '/offers' },
		{ name: 'Par mani', href: '/about' },
		{ name: 'Kontakti', href: '/contact' }
	];

	let { data } = $props();
</script>

<!-- md:relative sticky top-0 z-50 -->
<header class="nav site-header headroom flex h-full border-b border-white bg-black text-lg">
	<!-- <nav class="flex h-full border-b border-white bg-black text-lg"> -->
	<div class="container mx-auto flex items-center justify-between px-4 text-white">
		<div class="text-2xl font-bold">
			<h1>Nora Ozolanta</h1>
		</div>
		<button
			class="block cursor-pointer border-none bg-none text-3xl md:hidden"
			on:click|stopPropagation={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-align-justify-icon lucide-align-justify"
				><path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" /></svg
			>
		</button>
		<ul class="m-0 hidden list-none gap-8 p-0 md:flex justify-end items-center">
			{#each links as link}
				<li class="flex">
					<!-- {@html '<a href="/#contact">Link B</a>'} -->
					<!-- <button type="button" on:click={() => goto(link.href, { keepFocus: true })}
							>{link.name}</button
						> -->
					<a
						href={link.href}
						on:click={goToAnchor}
						class="rounded-lg px-4 py-2 no-underline transition"
						data-sveltekit-keepfocus
					>
						{link.name}
					</a>
				</li>
			{/each}
			<li class="flex">
				<button
					on:click|stopPropagation={() => waitlistModalOpen.set(true)}
					class="btn w-fit text-md lg:text-xl py-4 px-5 border my-2"
					>Pievienoties gaidītāju sarakstam</button
				>
			</li>
		</ul>
	</div>
	{#if menuOpen}
		<ul
			use:clickOutside={() => {
				console.log('clickoutside');
				menuOpen = false;
			}}
			class="absolute w-full top-20 bg-black text-white right-0 z-10 flex flex-col gap-8 rounded-b-xl border border-surface-200 py-6 px-8 shadow-lg md:hidden"
		>
			{#each links as link}
				<li class="w-full h-full text-center text-xl">
					<a
						href={link.href}
						on:click|stopPropagation={(e) => {
							menuOpen = false;
							goToAnchor(e);
						}}
						class="rounded px-8 py-2 no-underline transition hover:bg-primary-100 focus:bg-primary-100"
						data-sveltekit-keepfocus
					>
						{link.name}
					</a>
				</li>
			{/each}
			<button
				type="button"
				class="btn text-xl lg:text-xl py-4 px-5 border my-2"
				on:click|stopPropagation={() => {
					menuOpen = false;
					waitlistModalOpen.set(true);
				}}>Pievienoties gaidītāju sarakstam</button
			>
		</ul>
	{/if}
	<!-- </nav> -->
</header>
<WaitlistPopup bind:open={$waitlistModalOpen} form={data.waitlistForm} />
<NewsletterPopup bind:open={$newsletterModalOpen} form={data.newsletterForm} />
