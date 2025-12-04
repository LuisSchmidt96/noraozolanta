<script lang="ts">
	import { goToAnchor } from '$lib/utils/navigation';

	let menuOpen = false;
	const links = [
		{ name: 'Sākums', top: true, href: '/' },
		{ name: 'Piedāvājumi', href: '/#about' },
		{ name: 'Par mani', href: '/#services' },
		{ name: 'Kontakti', href: '/#contact' }
	];
</script>

<header class="md:relative sticky top-0 z-50">
	<nav class="flex h-full border-b border-white bg-black text-lg">
		<div class="container mx-auto flex items-center justify-between px-4 text-white">
			<div class="text-2xl font-bold">
				<h1>Nora Ozolanta</h1>
			</div>
			<button
				class="block cursor-pointer border-none bg-none text-3xl md:hidden"
				on:click={() => (menuOpen = !menuOpen)}
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
				<a href="/#contact" class="btn w-fit btn-lg border">Pievienoties gaidītāju sarakstam</a>
			</ul>
		</div>
		{#if menuOpen}
			<ul
				class="absolute top-16 right-0 z-10 flex flex-col gap-4 rounded border border-surface-200 bg-surface-100 py-4 shadow-lg md:hidden"
			>
				{#each links as link}
					<li class="w-full h-full text-center">
						<a
							href={link.href}
							on:click={(e) => {
								menuOpen = false;
								goToAnchor(e);
							}}
							class="btn rounded px-8 py-2 text-primary-700 no-underline transition hover:bg-primary-100 focus:bg-primary-100"
							data-sveltekit-keepfocus
						>
							{link.name}
						</a>
					</li>
				{/each}
				<button type="button" class="border-none bg-none text-3xl md:hidden"
					>Pievienoties gaidītāju sarakstam</button
				>
			</ul>
		{/if}
	</nav>
</header>
