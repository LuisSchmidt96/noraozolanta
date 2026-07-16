<script lang="ts">
	import hero_nora from '$lib/assets/images/hero_nora.webp';
	import oranges from '$lib/assets/images/oranges.webp';
	import ebook_nora from '$lib/assets/images/ebook_nora.webp';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import { openNewsletterModal } from '$lib/stores/newsletterModal.js';
	import { Check } from 'lucide-svelte';

	let { data } = $props();

	const offersHref = '/offers';
	const contactHref = '/contact';
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
				Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas darbojas arī ar emocionālo un
				psiholoģisko pusi valodas mācībās.
			</p>
			<p class="max-w-[60ch] text-lg leading-relaxed md:text-xl">
				Šeit Tu vari trenēties drošā, atbalstošā vidē un tad runāšana beidzot nāk pati no sevis.
			</p>
			<div class="mt-2 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
				<a href="https://subscribepage.io/programmaaugluvaloda" class="btn btn-primary btn-lg">
					Apskatīt programmu
				</a>
				<button
					onclick={(e) => {
						e.stopPropagation();
						openNewsletterModal();
					}}
					class="link-cta cursor-pointer border-none bg-transparent p-0 text-lg"
				>
					Pieraksties jaunumiem →
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

<!-- Programma · diptych reversed, paper-2 band -->
<div class="bg-paper-2">
	<section id="featured" class="container mx-auto px-4 py-14 md:py-20">
		<div class="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
			<img
				src={oranges}
				alt="Apelsīni — programmas “Augļu valoda” simbols"
				width="1886"
				height="1256"
				loading="lazy"
				class="w-full rounded-(--radius-card)"
			/>
			<div class="flex max-w-2xl flex-col gap-5">
				<div>
					<h2 class="text-3xl font-semibold md:text-4xl">Programma “Augļu valoda”</h2>
					<p class="mt-2 font-display text-xl text-ink-2 md:text-2xl">
						Valoda, kas nes <span class="mark-amber">augļus</span>
					</p>
				</div>
				<p class="max-w-[60ch] text-lg leading-relaxed">
					Angļu valodas apguve, kas dod reālus rezultātus — drošākais un efektīvākais veids, kā
					pārvarēt runāšanas bailes.
				</p>
				<div class="flex flex-col gap-3">
					<p class="font-medium">Piemērota cilvēkiem, kuri:</p>
					<ul class="list-inside list-disc space-y-2 text-lg">
						<li>Sastings vai jūtas nedroši, runājot angliski</li>
						<li>Saprot gandrīz visu, bet vārdi pazūd, kad jāsāk runāt</li>
						<li>Necieš gramatikas uzdevumus</li>
						<li>Vēlas struktūru, kas neprasa vairāk par 2–3 stundām nedēļā</li>
						<li>Meklē cilvēcīgu, emocionāli atbalstošu pieeju</li>
					</ul>
				</div>
				<a href={offersHref} class="btn btn-outline mt-2 w-fit">Iepazīt programmu</a>
			</div>
		</div>
	</section>
</div>

<!-- E-grāmata · diptych, amber tint band -->
<div class="bg-paper-amber">
	<section id="leadmagnet" class="container mx-auto px-4 py-16 md:py-24">
		<div class="grid items-center gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
			<div class="flex max-w-2xl flex-col gap-5">
				<div>
					<h2 class="text-3xl font-semibold md:text-4xl">Bezmaksas e-grāmata</h2>
					<p class="mt-2 font-display text-xl text-ink-2 md:text-2xl">
						“Kā mūsdienu latviešu sievietes var efektīvi apgūt angļu valodu”
					</p>
				</div>
				<p class="max-w-[60ch] text-lg leading-relaxed">Šajā ceļvedī Tu uzzināsi:</p>
				<ul class="space-y-3 text-lg">
					<li class="flex items-start gap-3">
						<Check class="mt-1 shrink-0 text-accent" size={22} aria-hidden="true" />
						kāpēc skolas tipa valodas mācīšanās nestrādā
					</li>
					<li class="flex items-start gap-3">
						<Check class="mt-1 shrink-0 text-accent" size={22} aria-hidden="true" />
						kā pieaugušie patiesībā apgūst valodas mūsdienās
					</li>
					<li class="flex items-start gap-3">
						<Check class="mt-1 shrink-0 text-accent" size={22} aria-hidden="true" />
						kā veidot pārliecību runājot
					</li>
					<li class="flex items-start gap-3">
						<Check class="mt-1 shrink-0 text-accent" size={22} aria-hidden="true" />
						kādi psiholoģiskie bloki kavē progresu — un kā tos pārvarēt
					</li>
				</ul>
				<a href={contactHref} class="btn btn-primary mt-2 w-fit">Saņemt e-grāmatu</a>
			</div>
			<img
				src={ebook_nora}
				alt="E-grāmatas vāks"
				width="1365"
				height="2048"
				loading="lazy"
				class="mx-auto w-full max-w-xs rounded-(--radius-card) md:max-w-sm"
			/>
		</div>
	</section>
</div>

<!-- Dalībnieču rezultāti · lead quote + two before/after cards -->
<section id="testimonials" class="container mx-auto px-4 py-16 md:py-28">
	<h2 class="text-3xl font-semibold md:text-4xl">Dalībnieču rezultāti no programmas</h2>

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
