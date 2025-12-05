<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	let header: HTMLElement | null = null;

	onMount(() => {
		let lastY = window.scrollY;
		let state: 'pinned' | 'unpinned' = 'pinned';
		const offset = 80;

		const updateHeader = () => {
			const y = window.scrollY;
			const scrollingDown = y > lastY;
			const nearTop = y <= offset;
			header = document.querySelector('header');
			if (!header) return;

			if (nearTop) {
				if (state !== 'pinned') {
					header.classList.remove('headroom--unpinned');
					header.classList.add('headroom--pinned');
					state = 'pinned';
				}
			} else if (scrollingDown && state !== 'unpinned') {
				header.classList.remove('headroom--pinned');
				header.classList.add('headroom--unpinned');
				state = 'unpinned';
			} else if (!scrollingDown && state !== 'pinned') {
				header.classList.remove('headroom--unpinned');
				header.classList.add('headroom--pinned');
				state = 'pinned';
			}

			lastY = y;
		};

		window.addEventListener('scroll', updateHeader, { passive: true });

		return () => {
			window.removeEventListener('scroll', updateHeader);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative flex min-h-screen flex-col bg-white">
	<Navbar />
	<main class="flex-1 mt-(--header-height)">
		{@render children()}
	</main>
	<Footer />
</div>
