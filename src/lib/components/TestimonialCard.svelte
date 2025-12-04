<script lang="ts">
	import icon_quote from '$lib/assets/images/icon-quote.webp';
</script>

<div class="relative grid items-start h-full border shadow-xl border-[#EAECED] rounded-xl bg-white p-8">
	<div class="flex flex-col space-y-6">
		<!-- Quote Icon -->
		<div class="flex">
			<img src={icon_quote} alt="" class="w-10 h-10" />
		</div>

		<!-- Testimonial Text -->
		<slot></slot>
	</div>
</div>
