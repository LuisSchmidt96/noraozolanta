<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Spinner } from 'flowbite-svelte';
	import Popup from '$lib/components/Popup.svelte';

	let open = $state(false);

	const showForm = () => {
		open = true;
		console.log('Opening form modal');
	};

	const closeForm = () => {
		console.log('Closing');
		open = false;
	};

	let { data } = $props();
	const { form, errors, message, enhance, delayed } = superForm(data.form);
</script>

<section class="relative overflow-hidden h-screen">
	<div
		class="parallax parallax-orange relative z-10 flex h-[700px] w-full items-center justify-center bg-cover bg-center bg-fixed"
	>
		<!-- <div class="absolute inset-0 bg-black/40"></div> -->
		<div class="relative z-10 flex flex-col items-center justify-center text-center text-white">
			<h1 class="h1 mb-4 text-7xl font-extrabold text-white">Auglu Valoda</h1>
			<p class="mb-6 text-lg">
				A transformational 3-month program for women ready to stop being afraid of speaking English.
			</p>
			<div class="flex gap-4">
				<a
					href="https://subscribepage.io/programmaaugluvaloda"
					class="btn btn-xl btn-secondary border text-black">Check out the Offer</a
				>
				<a class="ml-onclick-form btn btn-xl btn-primary border" href="" onclick={showForm}
					>Join the Waitlist</a
				>
				<!-- <a class="ml-onclick-form" href="javascript:void(0)" onclick="ml('show', 'wgy7oS', true)">Click here to show form</a> -->
				<!-- <a
				class="ml-onclick-form"
				href="javascript:void(0)"
					on:click|preventDefault={() => ml('show', 'wgy7oS', true)}>Click here to show form</a
					> -->
			</div>
		</div>
	</div>
</section>
<!-- <button class="absolute top-4 right-4" onclick={closeForm} aria-label="Close"
	><img src={x_circle} alt="x" /></button
> -->
<!-- {#if open} -->
<Popup bind:open>
	{#if $delayed}
		<Spinner class="mx-auto h-12 w-12 fill-primary-600" />
	{:else if $message?.status === 'success'}
		<h3 class="mb-2 text-4xl font-extrabold tracking-tight md:text-3xl">
			Paldies! Tu esi veiksmīgi pievienojusies waitlist-am!
		</h3>
	{:else}<div class="flex flex-col gap-4 text-black">
			<h2 class="h2">Pievienoties waitlist-am</h2>
			<p>
				Jā, man šis interesē. Labprāt saņemšu jaunumus un informāciju saistībā ar šo, kā arī gribu
				sev rezervēt vietu! (droši varēsi jebkurā brīdī pārdomāt, ja kas)
			</p>
			<form method="post" use:enhance class="flex flex-col gap-4">
				<input
					type="text"
					aria-required="true"
					class="input text-lg py-4"
					placeholder="Vārds"
					name="name"
					bind:value={$form.name}
				/>
				<input
					type="email"
					aria-required="true"
					class="input text-lg py-4"
					placeholder="E-pasts"
					name="email"
					bind:value={$form.email}
				/>
				<button type="submit" class="btn btn-primary btn-lg border text-white py-4"
					>Pievienoties</button
				>
			</form>
		</div>
	{/if}
</Popup>
<!-- {/if} -->
