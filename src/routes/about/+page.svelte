<script lang="ts">
	import type { PageProps } from './$types';

	import nora from '$lib/assets/images/nora.webp';
	import plant from '$lib/assets/images/plant.svg';
	import graduation_cap from '$lib/assets/images/graduation-cap.svg';

	let { data }: PageProps = $props();
</script>

<section
	id="hero"
	class="container mx-auto flex flex-1 scroll-mt-16 flex-col justify-center px-4 text-left md:scroll-mt-0 md:my-0 mt-20"
>
	<div class="flex flex-col md:flex-row items-center justify-center gap-12 gap-x-24">
		<div class="flex flex-col space-y-6 text-lg leading-relaxed md:w-1/3">
			<h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">Kas es tāda esmu?</h1>
			<div class="text-black">
				Čau! Ja vēl neesam pazīstamas/i, mani sauc Nora. Es esmu angļu valodas pasniedzēja, kas
				strādā ar runāšanas barjerām un palīdz cilvēkiem beidzot sākt runāt — bez bailēm,
				kaunsajūtas vai perfekcionisma. Es ticu, ka valodu var apgūt citādi: ar skaidru mērķi, drošu
				vidi un reālu plānu, kas strādā arī tad, ja iepriekšējās metodes nav palīdzējušas.
			</div>
		</div>
		<img class="hidden md:block rounded-3xl max-h-[600px]" src={nora} alt="" />
		<div class="md:hidden hero-image-mobile hero-image-about"></div>
	</div>
</section>
<div class="bg-(--color-primary)/30">
	<section
		id="story-philosophy"
		class="container mx-auto items-center flex gap-x-12 flex-row flex-1 scroll-mt-16 justify-evenly px-4 text-left py-16 md:scroll-mt-0 md:my-0"
	>
		<div class="flex mx-auto flex-col md:flex-row gap-x-16 gap-y-8 justify-evenly text-lg md:text-xl">
			<div class="flex flex-col gap-4 md:w-1/2">
				<h1 class="h1 md:text-5xl/tight font-bold">Kas man ir svarīgi darbā</h1>
				<ul class="text-black gap-4 flex flex-col">
					<li class="flex items-center gap-4">
						<img src={plant} alt="Flower" class="w-8" /> droša, atbalstoša vide
					</li>
					<li class="flex items-center gap-4">
						<img src={plant} alt="Flower" class="w-8" /> vieta, kur kļūdīties ir normāli un pat jautri
					</li>
					<li class="flex items-center gap-4">
						<img src={plant} alt="Flower" class="w-8" /> pārliecība svarīgāka par perfekciju
					</li>
					<li class="flex items-center gap-4">
						<img src={plant} alt="Flower" class="w-8" /> cilvēcīga pieeja bez spiediena
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-4">
				<h1 class="h1 md:text-5xl/tight font-bold">Pieredze un uzticamība</h1>
				<ul class="text-black gap-4 flex flex-col">
					<li class="flex items-center gap-4">
						<img src={graduation_cap} alt="Flower" class="w-8" /> vairāk nekā 8 gadu pieredze angļu valodas
						mācīšanā
					</li>
					<li class="flex items-center gap-4">
						<img src={graduation_cap} alt="Flower" class="w-8" /> darbs ar 100+ klientiem
					</li>
					<li class="flex items-center gap-4">
						<img src={graduation_cap} alt="Flower" class="w-8" /> 4 no 4 dalībniecēm manā jaunākajā programmā
						ir ļoti apmierinātas ar rezultātu
					</li>
				</ul>
			</div>
		</div>
	</section>
</div>
<div class="bg-(--color-secondary)/70">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-left md:scroll-mt-0 md:my-0 py-16"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div
			class="flex flex-col text-center items-center space-y-6 text-xl leading-relaxed text-black"
		>
			<h1 class="h1">My Mission</h1>
			<h3 class="h3">
				To help Latvian women speak English with confidence, clarity, and self-respect — not fear.
			</h3>
			<a
				href="#contact"
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
			>
				Join the Newsletter
			</a>
		</div>
		<!-- </div> -->
	</section>
</div>
