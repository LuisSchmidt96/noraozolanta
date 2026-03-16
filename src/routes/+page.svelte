<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import hero_nora from '$lib/assets/images/hero_nora.webp';
	import oranges from '$lib/assets/images/oranges.webp';
	import circle_check from '$lib/assets/images/check-circle.svg';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import { openNewsletterModal } from '$lib/stores/newsletterModal.js';

	let { data } = $props();

	const offersHref = '/offers';
	const contactHref = '/contact';

	onMount(() => {
		AOS.init({ once: true, duration: 600, offset: 60 });
	});
</script>

<svelte:head>
	<title>Nora Ozolanta | Pārvar angļu valodas runāšanas bailes</title>
	<meta name="description" content="Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas strādā ar emocionālo un psiholoģisko pusi valodas apguvē. Sāc runāt angliski ar pārliecību." />
	<meta property="og:title" content="Nora Ozolanta | Pārvar angļu valodas runāšanas bailes" />
	<meta property="og:description" content="Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas strādā ar emocionālo un psiholoģisko pusi valodas apguvē. Sāc runāt angliski ar pārliecību." />
	<meta property="og:url" content="https://noraozolanta.com/" />
	<link rel="canonical" href="https://noraozolanta.com/" />
</svelte:head>

<!-- Hero -->
<section
	id="hero"
	class="container mx-auto flex flex-1 scroll-mt-16 flex-col justify-center pt-16 md:pt-0 px-4 md:text-left md:scroll-mt-0 md:my-0"
>
	<div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mx-auto">
		<div class="flex flex-col space-y-6 text-lg leading-relaxed md:w-1/2" data-aos="fade-up">
			<h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">
				Pārvari bailes un iegūsti pārliecību runājot angliski!
			</h1>
			<div class="flex flex-col gap-4">
				<p class="text-lg md:text-xl leading-relaxed text-black">
					Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas darbojas arī ar emocionālo un
					psiholoģisko pusi valodas mācībās.
				</p>
				<p class="text-lg md:text-xl leading-relaxed text-black">
					Šeit Tu vari trenēties drošā, atbalstošā vidē un tad runāšana beidzot nāk pati no sevis.
				</p>
			</div>
			<div class="flex flex-col gap-4 items-center md:items-start">
				<a
					href="https://subscribepage.io/programmaaugluvaloda"
					class="btn w-fit shadow-xl shadow-(--color-primary)/30 btn-primary text-white btn-md md:btn-xl border"
				>
					Iepazīsti programmu "Augļu valoda"
				</a>
				<button
					onclick={(e) => { e.stopPropagation(); openNewsletterModal(); }}
					class="btn btn-secondary w-fit shadow-xl text-black shadow-(--color-secondary)/30 btn-md md:btn-xl border"
				>
					Pieraksties jaunumiem
				</button>
			</div>
		</div>
		<img class="hidden md:block md:w-[30%] rounded-3xl" src={hero_nora} alt="Nora Ozolanta" />
		<div class="md:hidden hero-image-mobile hero-image-home"></div>
	</div>
</section>

<!-- Featured: Augļu valoda -->
<div class="bg-(--color-secondary)/70">
	<section
		id="featured"
		class="container w-full mx-auto flex flex-1 scroll-mt-16 flex-col justify-center gap-12 md:px-4 px-6 text-left md:scroll-mt-0 md:my-0 py-16 md:py-24"
	>
		<div
			class="flex items-center justify-center gap-16 text-black"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<img class="hidden md:block md:w-1/2 rounded-3xl" src={oranges} alt="Augļi" />
			<div class="flex flex-col space-y-6 text-lg md:text-xl leading-relaxed md:w-1/2">
				<div class="flex flex-col gap-4">
					<h2 class="h1">Programma Augļu valoda:</h2>
					<h3 class="h2">Valoda, kas nes augļus</h3>
				</div>
				<p>
					Angļu valodas apguve, kas dod reālus rezultātus — drošākais un efektīvākais veids, kā
					pārvarēt runāšanas bailes.
				</p>
				<div class="flex flex-col gap-4">
					<h4 class="h3 italic">Piemērota cilvēkiem, kuri:</h4>
					<ul class="list-disc list-inside space-y-2">
						<li>Sastings vai jūtas nedroši, runājot angliski</li>
						<li>Saprot gandrīz visu, bet vārdi pazūd, kad jāsāk runāt</li>
						<li>Necieš gramatikas uzdevumus</li>
						<li>Vēlas struktūru, kas neprasa vairāk par 2-3 stundām nedēļā</li>
						<li>Meklē cilvēcīgu, emocionāli atbalstošu pieeju</li>
					</ul>
				</div>
				<a
					href={offersHref}
					class="btn w-fit mt-4 btn-primary self-center md:self-auto shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
				>
					Iepazīt programmu
				</a>
			</div>
		</div>
	</section>
</div>

<!-- Lead magnet: e-grāmata -->
<div class="bg-(--color-primary)/30">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 md:px-4 px-6 text-left md:scroll-mt-0 md:my-0 py-16 md:py-24"
		data-aos="fade-up"
		data-aos-delay="100"
	>
		<div class="flex flex-col items-center text-center space-y-6 text-lg md:text-xl leading-relaxed text-black">
			<h2 class="h1 text-center">Bezmaksas e-grāmata:</h2>
			<h3 class="h2 text-center">
				"Kā mūsdienu latviešu sievietes var efektīvi apgūt angļu valodu"
			</h3>
			<p>
				Angļu valodas apguve, kas dod reālus rezultātus — drošākais un efektīvākais veids, kā
				pārvarēt runāšanas bailes.
			</p>
			<h4 class="h3 italic">Šajā ceļvedī Tu uzzināsi:</h4>
			<ul class="list-inside space-y-4 text-lg md:text-xl">
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="" class="w-8 shrink-0" /> kāpēc skolas tipa valodas mācīšanās
					nestrādā
				</li>
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="" class="w-8 shrink-0" /> kā pieaugušie patiesībā apgūst valodas
					mūsdienās
				</li>
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="" class="w-8 shrink-0" /> kā veidot pārliecību runājot
				</li>
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="" class="w-8 shrink-0" /> kādi psiholoģiskie bloki kavē progresu
					— un kā tos pārvarēt
				</li>
			</ul>
			<a
				href={contactHref}
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
			>
				Saņemt bezmaksas e-grāmatu
			</a>
		</div>
	</section>
</div>

<!-- Testimonials -->
<div class="bg-(--color-background)">
	<section
		id="testimonials"
		class="w-full text-black mx-auto md:px-4 px-6 text-left md:scroll-mt-0 md:my-0 py-16 md:py-24"
	>
		<div
			class="flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 md:gap-16"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-offset="100"
		>
			<h2 class="h1 text-center">Dalībnieču rezultāti no programmas</h2>
			<div class="grid md:grid-cols-3 gap-12 md:w-3/4 justify-evenly">
				<TestimonialCard>
					<div class="space-y-4 text-gray-800 leading-relaxed">
						<p><strong>Uzsākot programmu:</strong></p>
						<p>
							Manas domas latviski skrien ātrāk par paralēlajām domām atrast pareizos vārdus, lai to
							pateiktu angliski. Beigās nepasaku neko vai sāku minstināties. Runa ir par valodu,
							kāda man nepieciešama darbā, jo ikdienas angļu valoda ceļojumos vai uz ielas man
							nerada šķēršļus.
						</p>
						<p>
							Es jūtu, ka beidzot TAS ir jāizdara, jo pārāk ilgi esmu iestrēgusi sajūtā, ka mana
							anglu valoda nav piemerota darba sarunām manā darbā un šis beidzot ir jāatrisina.
						</p>
						<p><strong>Nobeidzot programmu:</strong></p>
						<p>
							Es jūtos pārsteigta par progresu, jo es nevaru sevi atpazīt, kāda biju programmas
							sākumā (es nevarēju psiholoģiski parunāt angliski) un kā ir beigās, kad varu ar Noru
							veselu stundu norunāt tikai angliski. Apbrīnojami!
						</p>
					</div>
					<div>
						<p class="font-semibold">Dalībniece E.</p>
					</div>
				</TestimonialCard>
				<TestimonialCard>
					<div class="space-y-4 text-gray-800 leading-relaxed">
						<p><strong>Uzsākot programmu:</strong></p>
						<p>Jūtos diezgan nepārliecināti, trūkst treniņu, bieži aizmirstas vārdi.</p>
						<p>
							Gaidas - protams, ka uzlabot savas angļu valodas zināšanas, justies pārliecinātāk
							runājot ar citiem, nebaidīties kļūdīties.
						</p>
						<p><strong>Nobeidzot programmu:</strong></p>
						<p>
							Esmu atgriezusies no komandējuma un tas noritēja ļoti veiksmīgi, par ko es Tev esmu
							ļoti pateicīga.
						</p>
						<p>
							Es nebaidījos uzdot jautājumus, kad tie radās, un nebaidījos uzsākt sarunas pat
							ikdienišķās situācijās sabiedriskās vietās. Arī mani kolēģi, tostarp kolēģi Turcijā,
							dažreiz aizmirsu vārdus angļu valodā, un tajos brīžos es atcerējos Tevi un to, cik
							bieži Tu teici, cik tas ir normāli, mēs esam tikai cilvēki, un tā nav mūsu dzimtā
							valoda.
						</p>
					</div>
					<div>
						<p class="font-semibold">Dalībniece I.</p>
					</div>
				</TestimonialCard>
				<TestimonialCard>
					<div class="space-y-4 text-gray-800 leading-relaxed">
						<p>
							Man personīgi šī programma kļuva par būtisku profesionālu atbalstu brīdī, kad man
							angļu valodu vajadzēja sākt lietot aktīvi – gan darbā, gan karjeras vajadzībām. Šodien
							spēju pārliecinoši runāt par visdažādākajām tēmām savā ikdienā, sarunās un
							profesionālajā vidē. Individuālais mācību process man deva fantastiskus rīkus, kas
							mani atbalsta arī pēc programmas noslēguma. Šī programma ir būtiski cēlusi manu
							pārliecību un izmainījusi veidu, kā ikdienā lietoju angļu valodu.
						</p>
						<p><strong>Dalībniece Madara</strong></p>
					</div>
				</TestimonialCard>
			</div>
		</div>
	</section>
</div>

<!-- Newsletter CTA -->
<div class="bg-(--color-secondary)/70">
	<section
		id="newsletter"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-center md:scroll-mt-0 py-20"
	>
		<div
			class="flex flex-col items-center space-y-6 text-lg md:text-xl leading-relaxed text-black"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<h2 class="h1">Vai vēlies mierīgāku, cilvēcīgāku pieeju angļu valodas apguvei?</h2>
			<h3 class="h3">
				Iknedēļas vēstule ar godīgām, piezemētām atziņām par valodu, pārliecību un dzīvi.
			</h3>
			<button
				onclick={(e) => { e.stopPropagation(); openNewsletterModal(); }}
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
			>
				Pievienoties jaunumu vēstulei
			</button>
		</div>
	</section>
</div>