<script lang="ts">
	import type { PageProps } from './$types';

	import nora from '$lib/assets/images/nora.webp';
	import plant from '$lib/assets/images/plant.svg';
	import graduation_cap from '$lib/assets/images/graduation-cap.svg';

	let { data }: PageProps = $props();
</script>

<section
	id="hero"
	class="container mx-auto flex flex-1 scroll-mt-16 flex-col justify-center px-4 text-left md:scroll-mt-0 md:my-0 my-20"
>
	<div class="flex items-center justify-center gap-12 gap-x-24">
		<div class="flex flex-col space-y-6 text-lg leading-relaxed md:w-1/3">
			<h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">Kas es tāda esmu?</h1>
			<div class="text-black">
				Čau! Ja neesam vēl pazīstamas/i, tad mani sauc Nora, es esmu angļu valodas pasniedzēja, kas
				strādā ar runāšanas barjeru problēmām un kas ir gatava mest veco valodas mācīšanās modeli
				vējā un darīt to tā, kā tas patiešām strādā: ar konkrētu valodas apgūšanas mērķi un
				detalizētu plānu, kā to sasniegt 3 mēnešu laikā. Manī uzliesmo tāds prieks, kad redzu, ka
				cilvēkiem patīk tas, ko viņi dara un es varu viņiem palīdzēt tikt tur, kur viņiem ir jābūt!
			</div>
		</div>
		<img class="rounded-3xl max-h-[600px]" src={nora} alt="" />
	</div>
</section>
<div class="bg-(--color-primary)/30">
	<section
		id="story-philosophy"
		class="container mx-auto items-center flex gap-x-12 flex-row flex-1 scroll-mt-16 justify-evenly px-4 text-left py-24 md:scroll-mt-0 md:my-0 my-20"
	>
		<div class="flex flex-col gap-4">
			<h1 class="h1 md:text-5xl/tight font-bold">Mans stāsts</h1>
			<ul class="text-black gap-4 flex flex-col">
				<li class="flex items-center gap-4 text-lg">
					<img src={graduation_cap} alt="Flower" class="w-8" /> safety > perfection
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={graduation_cap} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={graduation_cap} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={graduation_cap} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={graduation_cap} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h1 class="h1 md:text-5xl/tight font-bold">My Teaching Philosophy</h1>
			<ul class="text-black gap-4 flex flex-col">
				<li class="flex items-center gap-4 text-lg">
					<img src={plant} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={plant} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={plant} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={plant} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
				<li class="flex items-center gap-4 text-lg">
					<img src={plant} alt="Flower" class="w-8" /> 8+ years teaching English
				</li>
			</ul>
		</div>
	</section>
</div>
<div class="bg-(--color-secondary)/70">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-left md:scroll-mt-0 md:my-0 my-20"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div class="flex flex-col items-center space-y-6 text-xl leading-relaxed text-black">
			<h1 class="h1">My Mission</h1>
			<h3 class="h3">
				To help Latvian women speak English with confidence, clarity, and self-respect — not fear.
			</h3>
			<a
				href="#contact"
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white"
			>
				Join the Newsletter
			</a>
		</div>
		<!-- </div> -->
	</section>
</div>
