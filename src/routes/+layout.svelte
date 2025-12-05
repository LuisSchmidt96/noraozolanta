<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { initHeadroom } from '$lib/utils/headroom';
	// import AOS from 'aos';

	let { children } = $props();

	onMount(() => {
		// AOS.init({ once: true,
		// 	duration: 600
		// });

		let header = document.querySelector('header');
		if (!header) return;

		initHeadroom(header);
		// AOS.init({
		// 	once: true,
		// 	duration: 600
		// });

	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<div class="relative flex min-h-screen flex-col bg-white">
	<Navbar />
	<main class="flex-1 md:mt-(--header-height)">
		{@render children()}
	</main>
	<Footer />
</div>
