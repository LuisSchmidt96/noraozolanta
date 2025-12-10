<script lang="ts">
	let { data } = $props();
	import oranges from '$lib/assets/images/orange.webp';
	import { onMount } from 'svelte';

	let mlFn: any = null;

	onMount(() => {
		// only runs in browser; window exists here
		mlFn = (window as any).ml;
	});

	const showWaitlistForm = () => {
		mlFn?.('show', 'VHWyrq', true);
		console.log('Show waitlist form');
	};
</script>

<section class="relative overflow-hidden h-screen">
	<div
		class="parallax parallax-orange relative z-10 flex h-[700px] w-full items-center justify-center bg-cover bg-center bg-fixed"
	>
		<!-- <div class="absolute inset-0 bg-black/40"></div> -->
		<div class="relative z-10 flex flex-col items-center justify-center text-center text-white">
			<h1 class="h1 mb-4 text-7xl font-extrabold">Auglu Valoda</h1>
			<p class="mb-6 text-lg">
				A transformational 3-month program for women ready to stop being afraid of speaking English.
			</p>
			<div class="flex gap-4">
				<a
					href="https://subscribepage.io/programmaaugluvaloda"
					class="btn btn-xl btn-secondary border">Check out the Offer</a
				>
				<a
					class="ml-onclick-form btn btn-xl btn-primary border"
					href="#"
					on:click|preventDefault={showWaitlistForm}>Join the Waitlist</a
				>
			</div>
			<!-- <div class="ml-embedded" data-form="VHWyrq"></div> -->
		</div>
	</div>
</section>
