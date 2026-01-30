<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/fruits_favicon.jpg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { initHeadroom } from '$lib/utils/headroom';
	// import AOS from 'aos';

	let { children, data } = $props();

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
	<title>Nora Ozolanta | Angļu valodas pasniedzēja</title>
	<meta name="description" content="Nora Ozolanta - angļu valodas pasniedzēja, kas palīdz pārvarēt runāšanas barjeras un sasniegt valodu apguves mērķus." />
	<meta name="keywords" content="angļu valoda, valodu apguve, runāšanas barjeras, valodu mācīšana, valodu kurss, valodu treneris, valodu konsultācijas, valodu nodarbības, valodu prakse, valodu padomi" />
	<meta name="author" content="Nora Ozolanta" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

<div class="relative flex min-h-screen flex-col bg-white">
	<Navbar {data} />
	<main class="flex-1 lg:mt-(--header-height)">
		{@render children()}
	</main>
	<Footer />

</div>
