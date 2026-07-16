<script lang="ts">
	import oranges from '$lib/assets/images/oranges.webp';
	import { openWaitlistModal } from '$lib/stores/waitlistModal.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>Programma "Augļu valoda" | Nora Ozolanta</title>
	<meta
		name="description"
		content="3 mēnešu programma angļu valodas runāšanas baižu pārvarēšanai. Droša, cilvēcīga pieeja, kas dod reālus rezultātus."
	/>
	<meta property="og:title" content="Programma &quot;Augļu valoda&quot; | Nora Ozolanta" />
	<meta
		property="og:description"
		content="3 mēnešu programma angļu valodas runāšanas baižu pārvarēšanai. Droša, cilvēcīga pieeja, kas dod reālus rezultātus."
	/>
	<meta property="og:url" content="https://noraozolanta.com/offers" />
	<link rel="canonical" href="https://noraozolanta.com/offers" />
</svelte:head>

<!-- Programma · H2 split diptych 6/6 -->
<section class="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-28">
	<div class="grid items-center gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:gap-16">
		<div class="flex max-w-xl flex-col gap-6">
			<div>
				<h1 class="text-4xl font-bold md:text-5xl/[1.1]">Augļu valoda</h1>
				<p class="mt-3 font-display text-xl text-ink-2 md:text-2xl">
					Valoda, kas nes <span class="mark-amber">augļus</span>
				</p>
			</div>
			<p class="max-w-[55ch] text-lg leading-relaxed md:text-xl">
				Transformējoša 3 mēnešu programma sievietēm, kuras ir gatavas pārstāt baidīties runāt angļu
				valodā.
			</p>
			<div class="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
				<a href="https://subscribepage.io/programmaaugluvaloda" class="btn btn-primary btn-lg">
					Apskatīt piedāvājumu
				</a>
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
			<p class="mt-2 text-ink-2">
				Nezini, vai programma Tev derēs?
				<a
					href="https://tidycal.com/noraozolanta/konsultacija"
					target="_blank"
					rel="noopener noreferrer"
					class="link-cta">Piesakies bezmaksas Zoom konsultācijai →</a
				>
			</p>
		</div>
		<img
			src={oranges}
			alt="Apelsīni — programmas “Augļu valoda” simbols"
			width="1886"
			height="1256"
			fetchpriority="high"
			class="w-full rounded-(--radius-card)"
		/>
	</div>
</section>
