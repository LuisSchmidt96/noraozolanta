<script lang="ts">
	import hero_nora from '$lib/assets/images/hero_nora.webp';
	import oranges from '$lib/assets/images/oranges.webp';
	import nora_yeah from '$lib/assets/images/nora_hmm.webp';
	import circle_check from '$lib/assets/images/check-circle.svg';
	import question from '$lib/assets/images/question.svg';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import NewsletterPopup from '$lib/components/NewsletterPopup.svelte';

	let open = $state(false);

	let { data } = $props();
</script>

<!-- <div class="bg-(--color-background)"> -->
<section
	id="hero"
	class="container mx-auto flex flex-1 scroll-mt-16 flex-col justify-center pt-16 md:pt-0 px-4 md:text-left md:scroll-mt-0 md:my-0"
>
	<div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mx-auto">
		<div class="flex flex-col space-y-6 text-lg leading-relaxed md:w-1/2">
			<h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">
				Pārvari bailes un iegūsti pārliecību runājot angliski!
			</h1>
			<div class="flex flex-col gap-4">
				<div class="text-lg md:text-xl leading-relaxed text-black">
					Vienīgā angļu valodas pasniedzēja un koučs Latvijā, kas darbojas arī ar emocionālo un
					psiholoģisko pusi valodas mācībās.
				</div>
				<div class="text-lg md:text-xl leading-relaxed text-black">
					Šeit Tu vari trenēties drošā, atbalstošā vidē un tad runāšana beidzot nāk pati no sevis.
				</div>
			</div>
			<div class="flex flex-col gap-4 items-center md:items-start">
				<a
					href="https://subscribepage.io/programmaaugluvaloda"
					class="btn w-fit shadow-xl shadow-(--color-primary)/30 btn-primary text-white btn-md md:btn-xl border"
				>
					Iepazīsti programmu “Augļu valoda”
				</a>
				<button
					on:click|stopPropagation={() => (open = true)}
					class="btn btn-secondary w-fit shadow-xl text-black shadow-(--color-secondary)/30 btn-md md:btn-xl border"
				>
					Pieraksties jaunumiem
				</button>
			</div>
		</div>
		<img class="hidden md:block md:w-[30%] rounded-3xl" src={hero_nora} alt="" />
		<div class="md:hidden hero-image-mobile hero-image-home"></div>
	</div>
</section>
<!-- </div> -->
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
			<img class="hidden md:block md:w-1/2 rounded-3xl" src={oranges} />
			<!-- use:aos={'fade-up'} /> -->
			<div class="flex flex-col space-y-6 text-lg md:text-xl leading-relaxed md:w-1/2">
				<div class="flex flex-col gap-4">
					<h1 class="h1">Programma Augļu valoda:</h1>
					<h2 class="h2">Valoda, kas nes augļus</h2>
				</div>
				<p>
					Angļu valodas apguve, kas dod reālus rezultātus — drošākais un efektīvākais veids, kā
					pārvarēt runāšanas bailes.
				</p>
				<div class="flex flex-col gap-4">
					<h3 class="h3 italic">Piemērota cilvēkiem, kuri:</h3>
					<ul class="list-disc list-inside space-y-2">
						<li>sastindzina vai jūtas nedroši, runājot angliski</li>
						<li>saprot gandrīz visu, bet vārdi nenāk, kad jāsāk runāt</li>
						<li>ir noguruši no tradicionālām metodēm, kas nestrādā</li>
						<li>vēlas struktūru bez spiediena</li>
						<li>meklē cilvēcīgu, emocionāli atbalstošu pieeju</li>
					</ul>
				</div>
				<a
					href="#contact"
					class="btn w-fit mt-4 btn-primary self-center md:self-auto shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
				>
					Iepazīt programmu
				</a>
			</div>
		</div>
	</section>
</div>
<div class="bg-(--color-primary)/30">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 md:px-4 px-6 text-left md:scroll-mt-0 md:my-0 py-16 md:py-24"
		data-aos="fade-up"
		data-aos-delay="100"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div
			class="flex flex-col items-center text-center md:text-left space-y-6 text-lg md:text-xl leading-relaxed text-black"
		>
			<h1 class="h1 text-center">Bezmaksas e-grāmata:</h1>
			<h1 class="h2 md:h1 text-center">
				“Kā mūsdienu latviešu sievietes var efektīvi apgūt angļu valodu”
			</h1>
			<p>
				Angļu valodas apguve, kas dod reālus rezultātus — drošākais un efektīvākais veids, kā
				pārvarēt runāšanas bailes.
			</p>
			<h3 class="h3 italic">Šajā ceļvedī Tu uzzināsi:</h3>
			<ul class="list-inside space-y-4 text-lg md:text-xl">
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> kāpēc skolas tipa valodas mācīšanās
					nestrādā
				</li>
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> kā pieaugušie patiesībā apgūst valodas
					mūsdienās today
				</li>
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> kā veidot pārliecību runājot
				</li>
				<li class="flex gap-4 text-start items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> kādi psiholoģiskie bloki kavē progresu
					— un kā tos pārvarēt
				</li>
			</ul>
			<a
				href="#contact"
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
			>
				Saņemt bezmaksas e-grāmatu
			</a>
		</div>
		<!-- </div> -->
	</section>
</div>
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
			<h1 class="h1 text-center">Dalībnieču rezultāti no programmas</h1>
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

					<!-- Name -->
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

					<!-- Name -->
					<div>
						<p class="font-semibold">Dalībniece I.</p>
					</div>
				</TestimonialCard>
				<TestimonialCard>
					<!-- Testimonial Text -->
					<div class="space-y-4 text-gray-800 leading-relaxed">
						<p><strong>Uzsākot programmu:</strong></p>

						<p>
							Ja ir iespēja netunāt, tad nerunāšu. Sajūta, ka nav pietiekams vārdu krājums, vai
							nevaru atsaukt atmiņā “īstos” vārdus tieši tad, kad tie visvairāk nepieciešami.
						</p>

						<p><strong>Nobeidzot programmu:</strong></p>

						<p>(info sekos)</p>
					</div>

					<!-- Name -->
					<div>
						<p class="font-semibold">Dalībniece E.</p>
					</div>
				</TestimonialCard>
			</div>
		</div>
	</section>
</div>
<!-- <div class="">
	<section
		id="casestudies"
		class="container w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 md:px-4 px-6 text-left md:scroll-mt-0 md:my-0 py-16 md:py-24"
	>
		<div
			class="flex flex-col items-center md:items-start space-y-6 text-lg md:text-xl leading-relaxed text-black"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-offset="100"
		>
			<div class="flex justify-center md:gap-24">
				<img
					src={nora_yeah}
					alt="Nora Ozolanta"
					class="hidden md:block rounded-3xl max-h-[700px]"
				/>
				<div class="flex flex-col gap-8 items-center md:w-1/2">
					<h1 class="h1 text-black mb-4">Case Studies</h1>
					<div
						class="relative grid items-start h-full border border-[#EAECED] rounded-xl shadow-xl bg-white p-8"
					>
						<div class="space-y-4 text-gray-800 leading-relaxed flex flex-col h-full">
							<p>
								<strong>Agnese, 42 — From “I freeze in meetings” to “I speak freely at work”</strong
								>
							</p>

							<ul class="list-disc list-inside flex flex-col gap-2">
								<li>Started around A2-B1</li>
								<li>Strong speaking anxiety</li>
								<li>After 3 months: joins discussions confidently</li>
							</ul>
						</div>
					</div>
					<div
						class="relative grid items-start h-full border border-[#EAECED] rounded-xl shadow-xl bg-white p-8"
					>
						<div class="flex justify-between items-center">
							<div class="space-y-4 text-gray-800 leading-relaxed flex flex-col h-full">
								<p>
									<strong
										>Agnese, 42 — From “I freeze in meetings” to “I speak freely at work”</strong
									>
								</p>

								<ul class="list-disc list-inside flex flex-col gap-2">
									<li>Started around A2-B1</li>
									<li>Strong speaking anxiety</li>
									<li>After 3 months: joins discussions confidently</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<div class="bg-(--color-primary)/70">
	<section
		id="faq"
		class="container w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 md:px-4 px-6 text-left md:scroll-mt-0 md:my-0 py-16 md:py-24"
	>
		<div
			class="flex flex-col items-center md:items-start space-y-12 md:space-y-16 text-lg md:text-xl leading-relaxed text-black"
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-offset="100"
		>
			<h1 class="h1 text-center md:text-left">FAQ</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-36">
				<div class="space-y-4">
					<h3 class="h3 flex gap-4 items-center">
						<img src={question} alt="CircleCheck" class="w-8" />
						<div>Do I need a specific English level?</div>
					</h3>
					<p class="flex gap-4 items-center">
						<img src={circle_check} alt="CircleCheck" class="w-8" /> No. The method is built around your
						goals, not CEFR levels.
					</p>
				</div>
				<div class="space-y-4">
					<h3 class="h3 flex gap-4 items-center">
						<img src={question} alt="CircleCheck" class="w-8" />
						<div>Do I need a specific English level?</div>
					</h3>
					<p class="flex gap-4 items-center">
						<img src={circle_check} alt="CircleCheck" class="w-8" /> No. The method is built around your
						goals, not CEFR levels.
					</p>
				</div>
				<div class="space-y-4">
					<h3 class="h3 flex gap-4 items-center">
						<img src={question} alt="CircleCheck" class="w-8" />
						<div>Do I need a specific English level?</div>
					</h3>
					<p class="flex gap-4 items-center">
						<img src={circle_check} alt="CircleCheck" class="w-8" /> No. The method is built around your
						goals, not CEFR levels.
					</p>
				</div>
				<div class="space-y-4">
					<h3 class="h3 flex gap-4 items-center">
						<img src={question} alt="CircleCheck" class="w-8" />
						<div>Do I need a specific English level?</div>
					</h3>
					<p class="flex gap-4 items-center">
						<img src={circle_check} alt="CircleCheck" class="w-8" /> No. The method is built around your
						goals, not CEFR levels.
					</p>
				</div>
				<div class="space-y-4">
					<h3 class="h3 flex gap-4 items-center">
						<img src={question} alt="CircleCheck" class="w-8" />
						<div>Do I need a specific English level?</div>
					</h3>
					<p class="flex gap-4 items-center">
						<img src={circle_check} alt="CircleCheck" class="w-8" /> No. The method is built around your
						goals, not CEFR levels.
					</p>
				</div>
				<div class="space-y-4">
					<h3 class="h3 flex gap-4 items-center">
						<img src={question} alt="CircleCheck" class="w-8" />
						<div>Do I need a specific English level?</div>
					</h3>
					<p class="flex gap-4 items-center">
						<img src={circle_check} alt="CircleCheck" class="w-8" /> No. The method is built around your
						goals, not CEFR levels.
					</p>
				</div>
			</div>
		</div>
	</section>
</div> -->
<div class="bg-(--color-secondary)/70">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-center md:scroll-mt-0 py-20"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div
			class="flex flex-col items-center space-y-6 text-lg md:text-xl leading-relaxed text-black"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<h1 class="h1">Vai vēlies mierīgāku, cilvēcīgāku pieeju angļu valodas apguvei?</h1>
			<h3 class="h3">
				Iknedēļas vēstule ar godīgām, piezemētām atziņām par valodu, pārliecību un dzīvi.
			</h3>
			<button
				on:click|stopPropagation={() => (open = true)}
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white border"
			>
				Pievienoties jaunumu vēstulei
			</button>
		</div>
		<!-- </div> -->
	</section>
</div>
<NewsletterPopup bind:open {data} />
