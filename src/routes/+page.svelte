<script lang="ts">
	let { data } = $props();
	import hero_nora from '$lib/assets/images/hero_nora.webp';
	import oranges from '$lib/assets/images/oranges.webp';
	import nora_yeah from '$lib/assets/images/nora_hmm.webp';
	import icon_quote from '$lib/assets/images/icon-quote.webp';
	import circle_check from '$lib/assets/images/check-circle.svg';
	import question from '$lib/assets/images/question.svg';
	import lightbulb from '$lib/assets/images/lightbulb.svg';

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
			<h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">
				Speak English with confidence. Without guilt.<br /> Without perfectionism.
			</h1>
			<div class="text-xl leading-relaxed text-black">
				A safe, supportive space for Latvian women to improve their English and build real speaking
				confidence — gently, calmly, and in a way that fits their life.
			</div>
			<div class="flex flex-col mt-8 gap-4">
				<a
					href="#contact"
					class="btn w-fit shadow-xl shadow-(--color-primary)/30 btn-primary text-white btn-xl"
				>
					Join the “Augļu valoda” Waitlist
				</a>
				<a
					href="#contact"
					class="btn btn-secondary w-fit shadow-xl text-black shadow-(--color-secondary)/30 btn-xl"
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
		<div class="flex items-center justify-center gap-16 text-black">
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
			<ul class="list-inside space-y-2 text-xl">
				<li class="flex gap-4 items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> why school-style language learning
					doesn’t work
				</li>
				<li class="flex gap-4 items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> how adults actually learn languages
					today
				</li>
				<li class="flex gap-4 items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> how to build speaking confidence
				</li>
				<li class="flex gap-4 items-center">
					<img src={circle_check} alt="CircleCheck" class="w-8" /> the psychological blocks that stop
					progress — and how to overcome them
				</li>
			</ul>
			<a
				href="#contact"
				class="btn w-fit mt-4 btn-primary shadow-xl shadow-(--color-primary)/30 btn-xl text-white"
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
		<div class="flex gap-12 w-3/4 justify-evenly">
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
			<TestimonialCard>
				<!-- Testimonial Text -->
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
		</div>
	</section>
</div>
<div class="">
	<section
		id="casestudies"
		class="container w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-left md:scroll-mt-0 py-32"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div class="flex flex-col items-start space-y-6 text-xl leading-relaxed text-black">
			<div class="flex gap-24">
				<img src={nora_yeah} alt="Nora Ozolanta" class="w-1/2 rounded-3xl" />
				<div class="flex flex-col gap-8 w-full">
					<h1 class="h1 text-black mb-4">Case Studies</h1>
					<div
						class="relative grid items-start h-full border border-[#EAECED] rounded-xl shadow-xl bg-white p-8"
					>
						<!-- <div class="flex justify-center items-center"> -->
						<!-- Testimonial Text -->
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
						<!-- </div> -->
					</div>
					<div
						class="relative grid items-start h-full border border-[#EAECED] rounded-xl shadow-xl bg-white p-8"
					>
						<div class="flex justify-between items-center">
							<!-- Testimonial Text -->
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
		class="container w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-left md:scroll-mt-0 md:my-0 my-20"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div class="flex flex-col items-start space-y-16 text-xl leading-relaxed text-black">
			<h1 class="h1">FAQ</h1>
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
</div>
<div class="bg-(--color-secondary)/70">
	<section
		id="leadmagnet"
		class="w-full mx-auto flex flex-1 scroll-mt-16 flex-col items-center justify-center gap-12 px-4 text-left md:scroll-mt-0 md:my-0 my-20"
	>
		<!-- <div class="flex items-center justify-center gap-16"> -->
		<!-- <img class="w-1/2 rounded-3xl" src={oranges} alt="" /> -->
		<div class="flex flex-col items-center space-y-6 text-xl leading-relaxed text-black">
			<h1 class="h1">Want a calmer, more human approach to learning English?</h1>
			<h3 class="h3">
				A weekly letter with honest, grounding insights about language, confidence, and life.
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
