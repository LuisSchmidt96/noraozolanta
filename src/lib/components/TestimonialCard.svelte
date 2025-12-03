<script lang="ts">
	import icon_quote from '$lib/assets/images/icon-quote.webp';
</script>

<div class="relative grid items-start h-full border border-[#EAECED] rounded-xl bg-white p-8">
	<div class="flex flex-col space-y-6">
		<!-- Quote Icon -->
		<div class="flex">
			<img src={icon_quote} alt="" class="w-10 h-10" />
		</div>

		<!-- Testimonial Text -->
		<slot>
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
			</div></slot
		>
	</div>
</div>
