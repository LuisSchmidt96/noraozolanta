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
	<meta name="description" content="Nora Ozolanta — angļu valodas pasniedzēja Latvijā. Palīdz pārvarēt runāšanas bailes un sākt runāt angliski ar pārliecību." />
	<meta name="keywords" content="angļu valoda, valodu apguve, runāšanas barjeras, angļu valodas kurss latvija, angļu valoda tiešsaistē, valodu treneris" />
	<meta name="author" content="Nora Ozolanta" />
	<!-- Open Graph -->
	<meta property="og:site_name" content="Nora Ozolanta" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Nora Ozolanta | Angļu valodas pasniedzēja" />
	<meta property="og:description" content="Nora Ozolanta — angļu valodas pasniedzēja Latvijā. Palīdz pārvarēt runāšanas bailes un sākt runāt angliski ar pārliecību." />
	<meta property="og:image" content="https://noraozolanta.com/og-image.webp" />
	<meta property="og:locale" content="lv_LV" />
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Nora Ozolanta | Angļu valodas pasniedzēja" />
	<meta name="twitter:description" content="Nora Ozolanta — angļu valodas pasniedzēja Latvijā. Palīdz pārvarēt runāšanas bailes un sākt runāt angliski ar pārliecību." />
	<meta name="twitter:image" content="https://noraozolanta.com/og-image.webp" />
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<script type="application/ld+json">{JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Nora Ozolanta",
		"jobTitle": "Angļu valodas pasniedzēja",
		"description": "Angļu valodas pasniedzēja un koučs Latvijā, kas palīdz pārvarēt runāšanas bailes un sākt runāt angliski ar pārliecību.",
		"url": "https://noraozolanta.com",
		"image": "https://noraozolanta.com/og-image.webp",
		"email": "contact@noraozolanta.com",
		"knowsAbout": ["angļu valoda", "valodu apguve", "runāšanas barjeras", "koučings"],
		"sameAs": [
			"https://www.instagram.com/nora.ozolanta",
			"https://www.facebook.com/nora.ozolanta",
			"https://www.linkedin.com/in/nora-ozolanta"
		]
	})}</script>
</svelte:head>

<div class="relative flex min-h-screen flex-col bg-white">
	<Navbar {data} />
	<main class="flex-1 lg:mt-(--header-height)">
		{@render children()}
	</main>
	<Footer />

</div>
