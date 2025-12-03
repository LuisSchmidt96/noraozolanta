<script lang="ts">
	let { data } = $props();
	import hero_nora from '$lib/assets/images/hero_nora.webp';
	import oranges from '$lib/assets/images/oranges.webp';
	import ebook_nora from '$lib/assets/images/ebook_nora.webp';
	import icon_quote from '$lib/assets/images/icon-quote.webp';

	import { CircleCheck } from 'lucide-svelte';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	// import { Quote } from 'lucide-svelte';
</script>

<!-- <div class="bg-(--color-background)"> -->
<section
	id="hero"
	class="container mx-auto flex flex-1 scroll-mt-16 flex-col justify-center px-4 text-left md:scroll-mt-0 md:my-0 my-20"
>
	<div class="flex items-center justify-center gap-16">
		<div class="flex flex-col space-y-6 text-lg leading-relaxed md:w-1/2">
			<h1 class="h1 mb-8 text-4xl font-extrabold tracking-tight md:text-5xl/tight">
				Speak English with confidence. Without guilt.<br /> Without perfectionism.
			</h1>
			<p>
				A safe, supportive space for Latvian women to improve their English and build real speaking
				confidence — gently, calmly, and in a way that fits their life.
			</p>
			<div class="flex flex-col mt-8 gap-4">
				<a
					href="#contact"
					class="btn w-fit shadow-xl shadow-(--color-primary)/30 btn-primary text-white btn-xl"
				>
					Join the “Augļu valoda” Waitlist
				</a>
				<a
					href="#contact"
					class="btn btn-secondary w-fit shadow-xl text-(--color-fifth) shadow-(--color-secondary)/30 btn-xl"
				>
					Download the Free Guide
				</a>
			</div>
		</div>
		<img class="w-[30%] rounded-3xl" src={hero_nora} alt="" />
	</div>
</section>
<!-- </div> -->
<div class="bg-(--color-secondary)/70">
	<section
		id="featured"
		class="container w-full mx-auto flex flex-1 scroll-mt-16 flex-col justify-center gap-12 px-4 text-left md:scroll-mt-0 md:my-0 my-20"
	>
		<div class="flex items-center justify-center gap-16">
			<img class="w-1/2 rounded-3xl" src={oranges} alt="" />
			<div class="flex flex-col space-y-6 text-xl leading-relaxed md:w-1/2">
				<h1 class="h1">“Augļu valoda” Program</h1>
				<p>
					English learning that brings real results — the safest and most effective way to remove
					speaking fear.
				</p>
				<h3 class="h3 italic">Perfect for women who:</h3>
				<ul class="list-disc list-inside space-y-2">
					<li>Feel insecure when speaking English</li>
					<li>freeze or overthink before speaking</li>
					<li>Are tired of traditional language learning methods that don’t work</li>
					<li>want structure without pressure</li>
					<li>want a human, emotionally supportive approach</li>
				</ul>
				<a
					href="#contact"
					class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white"
				>
					Explore the Program
				</a>
			</div>
		</div>
	</section>
</div>
<div class="bg-(--color-primary)/30">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-left md:scroll-mt-0 md:my-0 my-20"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div class="flex flex-col items-center space-y-6 text-xl leading-relaxed text-black">
			<h1 class="h1">Free eBook:</h1>
			<h1 class="h1">"How Modern Latvian Women Can Learn English Effectively"</h1>
			<p>
				English learning that brings real results — the safest and most effective way to remove
				speaking fear.
			</p>
			<h3 class="h3 italic">Inside the guide you’ll learn:</h3>
			<ul class="list-disc list-inside space-y-2 text-xl">
				<li>why school-style language learning doesn’t work</li>
				<li>how adults actually learn languages today</li>
				<li>how to build speaking confidence</li>
				<li>the psychological blocks that stop progress — and how to overcome them</li>
			</ul>
			<a
				href="#contact"
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-green-900/30 btn-xl text-white"
			>
				Get the Free eBook
			</a>
		</div>
		<!-- </div> -->
	</section>
</div>
<div class="bg-(--color-background)">
	<section
		id="testimonials"
		class="w-full py-36 text-black mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-16 px-4 text-left md:scroll-mt-0 md:my-0 my-20"
	>
		<h1 class="h1">Testimonials</h1>
		<div class="flex gap-16 w-2/3 justify-evenly">
			<TestimonialCard>
				<div class="space-y-4 text-gray-800 leading-relaxed">
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
				</div>

				<!-- Name -->
				<div>
					<p class="font-semibold">Dalībniece E.</p>
				</div>
			</TestimonialCard>
			<TestimonialCard>
				<div class="space-y-4 text-gray-800 leading-relaxed">
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
				</div>

				<!-- Name -->
				<div>
					<p class="font-semibold">Dalībniece E.</p>
				</div>
			</TestimonialCard>
			<div class="relative grid items-start h-full border border-[#EAECED] rounded-xl bg-white p-8">
				<div class="flex flex-col space-y-6">
					<!-- Quote Icon -->
					<div class="flex">
						<img src={icon_quote} alt="" class="w-10 h-10" />
					</div>

					<!-- Testimonial Text -->
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
				</div>
			</div>
		</div>
	</section>
</div>
