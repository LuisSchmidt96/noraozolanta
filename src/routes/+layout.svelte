<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { initHeadroom } from '$lib/utils/headroom';
	// import AOS from 'aos';
	import { PreviewMode, VisualEditing } from '@sanity/sveltekit';
	import type { LayoutProps } from './$types';

	const { children, data }: LayoutProps = $props();
	const { previewEnabled } = data;

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
	<!-- MailerLite Universal -->
	<script>
		(function (w, d, e, u, f, l, n) {
			((w[f] =
				w[f] ||
				function () {
					(w[f].q = w[f].q || []).push(arguments);
				}),
				(l = d.createElement(e)),
				(l.async = 1),
				(l.src = u),
				(n = d.getElementsByTagName(e)[0]),
				n.parentNode.insertBefore(l, n));
		})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
		ml('account', '1213635');
	</script>
	<!-- End MailerLite Universal -->
</svelte:head>

<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		<div class="relative flex min-h-screen flex-col bg-white">
			<Navbar />
			<main class="flex-1 md:mt-(--header-height)">
				{@render children()}
			</main>
			<Footer />
		</div>
	</VisualEditing>
</PreviewMode>
