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

		<!-- 2 · Self-Talk Video -->
		<article
			class="grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">Self-Talk Video</h2>
				<p class="mt-2 text-ink-2">Bezmaksas resurss, kas parāda, kā trenēties jebkur un jebkad.</p>
				<p class="mt-4">
					<a
						href="https://self-talk-freebie.subscribepage.io"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cta">Saņemt video →</a
					>
				</p>
			</div>
			<p class="font-medium md:text-right">Bezmaksas</p>
		</article>

		<!-- 2.5 · Webinar -->
		<article
			class="grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">
					Vebināra "Vocabulary Workshop" ieraksts
				</h2>
				<p class="mt-2 text-ink-2">
					Ieraksts no vebināra par to, kā mācīties vārdiņus smadznēm draudzīgā veidā.
				</p>
				<p class="mt-4">
					<a
						href="https://preview.mailerlite.io/forms/1213635/162621411069789648/share"
						target="_blank"
						rel="noopener noreferrer"
						class="link-cta">Saņemt ierakstu →</a
					>
				</p>
			</div>
			<p class="font-medium md:text-right">Bezmaksas</p>
		</article>
		<!-- 3 · My English Learning Plan -->
		<article
			class="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">My English Learning Plan</h2>
				<p class="mt-2 text-ink-2">
					Strukturēta sesija, kuras rezultāts ir skaidrs virziens nākamajiem 2–3 mēnešiem.
				</p>
				<div class="mt-5">
					<a
						href="https://tidycal.com/noraozolanta/myenglishlearningplan"
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
				<h2 class="font-display text-2xl font-semibold md:text-3xl">
					Sarunvalodas grupa Speak Freely Club
				</h2>
				<p class="mt-2 text-ink-2">
					Tava sporta zāle angļu valodai, drošā un jautrā vidē, kur trenēt valodu ir viegli.
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
			<p class="font-medium md:text-right">
				200 € kopā par kārtu (3 mēneši)<br />vai<br />75 € mēnesī
			</p>
		</article>
		<article
			class="grid gap-4 border-b border-rule py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">
					Drīzumā: video kurss "Get Ready for Your Presentation"
				</h2>

				<div class="mt-5">
					<a
						href="https://docs.google.com/document/d/117wDiZQYpJWMlwSECnHNRjyqjNhkb6y2TyRC95MewKI/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-outline">Pieteikties waitlistam</a
					>
				</div>
			</div>
			<p class="font-medium md:text-right">?</p>
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
					Transformējoša 3 mēnešu programma sievietēm, kuras ir gatavas pārvarēt savu runāšanas
					bloku angļu valodā.
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
			<p class="font-medium md:text-right">
				591 € kopā<br />vai<br />197 € mēnesī
			</p>
		</article>

		<!-- 6 · 12 nodarbību 1:1 paka -->
		<article
			class="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
		>
			<div class="max-w-[60ch]">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">12 nodarbību paka</h2>
				<p class="mt-2 text-ink-2">
					Individuālas 1:1 nodarbības, 12 nodarbību paka jeb 3 mēnešu paka (nodarbības 1x nedēļā, 60
					min).
				</p>
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
