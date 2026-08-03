<script lang="ts">
	import type { PageProps } from './$types';

	import nora from '$lib/assets/images/nora.webp';
	import { openNewsletterModal } from '$lib/stores/newsletterModal';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Par mani | Nora Ozolanta</title>
	<meta
		name="description"
		content="Iepazīsti Noru — angļu valodas pasniedzēju ar 8+ gadu pieredzi, kas strādā ar runāšanas barjerām un palīdz cilvēkiem sākt runāt bez bailēm un perfekcionisma."
	/>
	<meta property="og:title" content="Par mani | Nora Ozolanta" />
	<meta
		property="og:description"
		content="Iepazīsti Noru — angļu valodas pasniedzēju ar 8+ gadu pieredzi, kas strādā ar runāšanas barjerām un palīdz cilvēkiem sākt runāt bez bailēm un perfekcionisma."
	/>
	<meta property="og:url" content="https://noraozolanta.com/about" />
	<link rel="canonical" href="https://noraozolanta.com/about" />
</svelte:head>

<!-- Letter · H5 letter hero · salutation + prose + quiet photo + sign-off -->
<section class="container mx-auto px-4 pt-14 pb-24 md:pt-24 md:pb-32">
	<div class="mx-auto grid max-w-4xl gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-16">
		<div class="flex max-w-[58ch] flex-col gap-6 text-lg leading-relaxed">
			<h1 class="text-4xl font-bold md:text-5xl">Čau!</h1>
			<p>
				Mani sauc Nora un esmu angļu valodas pasniedzēja un koučs, kas palīdz cilvēkiem kā tev
				beidzot runāt brīvi angliski.
			</p>
			<p>
				Vai nu tas nozīmē sagatovties prezentācijai angliski, koferencei vai vienkārši uzlabot savu
				valodu, lai vari strādāt labākā, starptautiskā uzņēmumā, ar šo visu es jau palīdzu sievietēm
				8+ gadu gājumā.
			</p>
			<p>
				Es ticu, ka valodu var apgūt citādi: ar skaidru mērķi, nervu sistēmai un smadzenēm draudzīgā
				veidā + ar reālu plānu, kas strādā tev. Arī tad, ja iepriekšējās metodes nav palīdzējušas.
			</p>
			<p class="font-display text-2xl">— Nora</p>
			<p class="mt-4 text-base text-ink-2">
				P.S. Reizi nedēļā rakstu vēstuli par valodu, pārliecību un dzīvi —
				<button
					type="button"
					onclick={(e) => {
						e.stopPropagation();
						openNewsletterModal();
					}}
					class="link-cta cursor-pointer border-none bg-transparent p-0 text-base"
				>
					pieraksties →
				</button>
			</p>
		</div>
		<figure class="md:pt-16">
			<img
				src={nora}
				alt="Nora Ozolanta"
				width="613"
				height="815"
				fetchpriority="high"
				class="mx-auto w-full max-w-xs rounded-(--radius-card) md:max-w-none"
			/>
		</figure>
	</div>
</section>
