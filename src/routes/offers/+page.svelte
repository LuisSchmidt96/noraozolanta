<script lang="ts">
	import { openWaitlistModal } from '$lib/stores/waitlistModal.js';
</script>

<svelte:head>
	<title>Piedāvājumi | Nora Ozolanta</title>
	<meta
		name="description"
		content="No bezmaksas materiāliem līdz programmai “Augļu valoda” — atrodi sev piemērotāko soli ceļā uz drošu angļu valodu."
	/>
	<meta property="og:title" content="Piedāvājumi | Nora Ozolanta" />
	<meta
		property="og:description"
		content="No bezmaksas materiāliem līdz programmai “Augļu valoda” — atrodi sev piemērotāko soli ceļā uz drošu angļu valodu."
	/>
	<meta property="og:url" content="https://noraozolanta.com/offers" />
	<link rel="canonical" href="https://noraozolanta.com/offers" />
</svelte:head>

<!-- Piedāvājumi · Offer Ladder (Split Studio variant) -->
<section class="container mx-auto px-4 pt-12 pb-24 md:pt-20">
	<header class="max-w-prose">
		<h1 class="text-4xl font-bold md:text-5xl/[1.1]">Piedāvājumi</h1>
		<p class="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-2">
			No bezmaksas materiāliem līdz programmai “Augļu valoda” — izvēlies soli, kas atbilst Tavam šī
			brīža mērķim.
		</p>
	</header>

	<div class="mt-12 border-t border-rule">
		<!-- 1 · Essential Phrases for Work -->
		<article
			class="grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">Essential Phrases for Work</h2>
				<p class="mt-2 text-ink-2">Bezmaksas PDF ar noderīgām darba frāzēm.</p>
				<p class="mt-4">
					<a
						href="https://preview.mailerlite.io/forms/1213635/166529348001597189/share"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cta">Saņemt PDF →</a
					>
				</p>
			</div>
			<p class="font-medium md:text-right">Bezmaksas</p>
		</article>

		<!-- 2 · Self-Talk Freebie -->
		<article
			class="grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">Self-Talk Freebie</h2>
				<p class="mt-2 text-ink-2">Bezmaksas resurss par pašrunu, runājot angliski.</p>
				<p class="mt-4">
					<a
						href="https://self-talk-freebie.subscribepage.io"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cta">Saņemt →</a
					>
				</p>
			</div>
			<p class="font-medium md:text-right">Bezmaksas</p>
		</article>

		<!-- 3 · My English Roadmap Session -->
		<article
			class="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">My English Roadmap Session</h2>
				<p class="mt-2 text-ink-2">
					Strukturēta sesija, kuras rezultāts ir skaidrs virziens nākamajiem 2–3 mēnešiem.
				</p>
				<div class="mt-5">
					<a
						href="https://tidycal.com/noraozolanta/myenglishroadmapsession"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline">Pieteikties sesijai</a
					>
				</div>
			</div>
			<p class="font-medium md:text-right">27 €</p>
		</article>

		<!-- 4 · Speak Freely Club -->
		<article
			class="grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">Speak Freely Club</h2>
				<p class="mt-2 text-ink-2">
					Strukturēts klubs regulārai runāšanas praksei atbalstošā vidē.
				</p>
				<div class="mt-5">
					<a
						href="https://dvay2t.subscribepage.io"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline">Uzzināt vairāk</a
					>
				</div>
			</div>
		</article>

		<!-- 5 · Programma “Augļu valoda” · flagship -->
		<article
			class="-mx-4 grid gap-4 bg-paper-2 px-4 py-10 md:-mx-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 md:px-6 md:py-12"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-3xl font-semibold md:text-4xl">Programma “Augļu valoda”</h2>
				<p class="mt-2 font-display text-lg text-ink-2 md:text-xl">
					Valoda, kas nes <span class="mark-amber">augļus</span>
				</p>
				<p class="mt-3 text-lg leading-relaxed">
					Transformējoša 3 mēnešu programma sievietēm, kuras ir gatavas pārstāt baidīties runāt
					angļu valodā.
				</p>
				<div class="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
					<a
						href="https://subscribepage.io/programmaaugluvaloda"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary">Apskatīt programmu</a
					>
					<button
						type="button"
						onclick={(e) => {
							e.stopPropagation();
							openWaitlistModal();
						}}
						class="btn btn-outline"
					>
						Rezervēt vietu
					</button>
				</div>
			</div>
		</article>

		<!-- 6 · 12 nodarbību 1:1 paka -->
		<article
			class="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">12 nodarbību 1:1 paka</h2>
				<p class="mt-2 text-ink-2">Individuālas 1:1 nodarbības — 12 nodarbību paka.</p>
				<div class="mt-5">
					<a
						href="https://tidycal.com/noraozolanta/konsultacija"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline">Pieteikties sarunai</a
					>
				</div>
			</div>
			<p class="font-medium md:text-right">600 €</p>
		</article>
	</div>
</section>
