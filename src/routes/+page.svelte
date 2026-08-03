<script lang="ts">
	import hero_nora from '$lib/assets/images/hero_nora.webp';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import { openNewsletterModal } from '$lib/stores/newsletterModal.js';
</script>

<svelte:head>
	<title>Nora Ozolanta | Pārvar angļu valodas runāšanas bailes</title>
	<meta
		name="description"
		content="Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas strādā ar emocionālo un psiholoģisko pusi valodas apguvē. Sāc runāt angliski ar pārliecību."
	/>
	<meta property="og:title" content="Nora Ozolanta | Pārvar angļu valodas runāšanas bailes" />
	<meta
		property="og:description"
		content="Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas strādā ar emocionālo un psiholoģisko pusi valodas apguvē. Sāc runāt angliski ar pārliecību."
	/>
	<meta property="og:url" content="https://noraozolanta.com/" />
	<link rel="canonical" href="https://noraozolanta.com/" />
</svelte:head>

<!-- Hero · H2 split diptych 7/5, left-biased -->
<section id="hero" class="container mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-24">
	<div class="grid items-center gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
		<div class="flex max-w-2xl flex-col gap-6">
			<h1 class="text-4xl font-bold md:text-5xl/[1.1]">
				Pārvari bailes un iegūsti pārliecību <span class="mark-amber">runājot angliski</span>!
			</h1>
			<p class="max-w-[60ch] text-lg leading-relaxed md:text-xl">
				Viena no top angļu valodas pasniedzējām un koučiem Latvijā, kas darbojas arī emocionālo un
				psiholoģisko pusi valodas mācībās.
			</p>
			<p class="max-w-[60ch] text-lg leading-relaxed md:text-xl">
				Šeit Tu vari trenēties drošā, atbalstošā vidē un tad runāšana beidzot nāk pati no sevis.
			</p>
			<div class="mt-2 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
				<a
					href="https://subscribepage.io/programmaaugluvaloda"
					class="btn btn-primary btn-lg btn-wrap"
				>
					Pieteikties epastiem par to, kā beidzot justies brīvi angliski
				</a>
				<button
					onclick={(e) => {
						e.stopPropagation();
						openNewsletterModal();
					}}
					class="link-cta cursor-pointer border-none bg-transparent p-0 text-lg"
				>
					Apskatīt piedāvājumus un cenas →
				</button>
			</div>
		</div>
		<img
			src={hero_nora}
			alt="Nora Ozolanta"
			width="1365"
			height="2048"
			fetchpriority="high"
			class="mx-auto w-full max-w-sm rounded-(--radius-card) md:max-w-none"
		/>
	</div>
</section>

<!-- Dalībnieču rezultāti · lead quote + two before/after cards -->
<section id="testimonials" class="container mx-auto px-4 py-16 md:py-28">
	<h2 class="text-3xl font-semibold md:text-4xl">Atsauksmes no klientēm</h2>

	<figure class="mt-10 max-w-3xl">
		<blockquote class="border-l-2 border-accent-2 pl-6 text-lg leading-relaxed md:text-xl">
			<p>
				Man personīgi šī programma kļuva par būtisku profesionālu atbalstu brīdī, kad man angļu
				valodu vajadzēja sākt lietot aktīvi – gan darbā, gan karjeras vajadzībām. Šodien spēju
				pārliecinoši runāt par visdažādākajām tēmām savā ikdienā, sarunās un profesionālajā vidē.
				Individuālais mācību process man deva fantastiskus rīkus, kas mani atbalsta arī pēc
				programmas noslēguma. Šī programma ir būtiski cēlusi manu pārliecību un izmainījusi veidu,
				kā ikdienā lietoju angļu valodu.
			</p>
		</blockquote>
		<figcaption class="mt-4 pl-6 font-semibold">— Dalībniece Madara</figcaption>
	</figure>

	<div class="mt-14 grid gap-8 md:grid-cols-2 lg:gap-12">
		<TestimonialCard>
			<div class="space-y-4 leading-relaxed">
				<p><strong>Uzsākot programmu:</strong></p>
				<p>
					Manas domas latviski skrien ātrāk par paralēlajām domām atrast pareizos vārdus, lai to
					pateiktu angliski. Beigās nepasaku neko vai sāku minstināties. Runa ir par valodu, kāda
					man nepieciešama darbā, jo ikdienas angļu valoda ceļojumos vai uz ielas man nerada
					šķēršļus.
				</p>
				<p>
					Es jūtu, ka beidzot TAS ir jāizdara, jo pārāk ilgi esmu iestrēgusi sajūtā, ka mana anglu
					valoda nav piemerota darba sarunām manā darbā un šis beidzot ir jāatrisina.
				</p>
				<p><strong>Nobeidzot programmu:</strong></p>
				<p>
					Es jūtos pārsteigta par progresu, jo es nevaru sevi atpazīt, kāda biju programmas sākumā
					(es nevarēju psiholoģiski parunāt angliski) un kā ir beigās, kad varu ar Noru veselu
					stundu norunāt tikai angliski. Apbrīnojami!
				</p>
				<p class="font-semibold">— Dalībniece E.</p>
			</div>
		</TestimonialCard>
		<TestimonialCard>
			<div class="space-y-4 leading-relaxed">
				<p><strong>Uzsākot programmu:</strong></p>
				<p>Jūtos diezgan nepārliecināti, trūkst treniņu, bieži aizmirstas vārdi.</p>
				<p>
					Gaidas — protams, ka uzlabot savas angļu valodas zināšanas, justies pārliecinātāk runājot
					ar citiem, nebaidīties kļūdīties.
				</p>
				<p><strong>Nobeidzot programmu:</strong></p>
				<p>
					Esmu atgriezusies no komandējuma un tas noritēja ļoti veiksmīgi, par ko es Tev esmu ļoti
					pateicīga.
				</p>
				<p>
					Es nebaidījos uzdot jautājumus, kad tie radās, un nebaidījos uzsākt sarunas pat
					ikdienišķās situācijās sabiedriskās vietās. Arī mani kolēģi, tostarp kolēģi Turcijā,
					dažreiz aizmirsu vārdus angļu valodā, un tajos brīžos es atcerējos Tevi un to, cik bieži
					Tu teici, cik tas ir normāli, mēs esam tikai cilvēki, un tā nav mūsu dzimtā valoda.
				</p>
				<p class="font-semibold">— Dalībniece I.</p>
			</div>
		</TestimonialCard>
	</div>
</section>
