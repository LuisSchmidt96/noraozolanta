<script lang="ts">
	import type { PageProps } from './$types';
	import nora_laptop from '$lib/assets/images/nora_laptop.webp';
	import { superForm } from 'sveltekit-superforms';
	import { Spinner } from 'flowbite-svelte';
	let { data }: PageProps = $props();

	const { form, errors, message, enhance, delayed } = superForm(data.form);
</script>

<section class="container mx-auto flex flex-col md:flex-row my-12">
	<div class="flex flex-col md:flex-row gap-x-20 justify-center w-full text-black">
		<div class="flex flex-col w-1/3 gap-6 md:mt-28">
			<h2 class="h2">
				Vai varbūt vēlies pieteikties bezmaksas zvanam, lai saprastu, cik labi šī programma derēs
				Tev?
			</h2>
			<h3
				
					>ied 
				>eit , lai pieteiktos bezmaksas zva
			nah3</h3>
			<a href="https://tidycal.com/noraozolanta/konsultacija" type="button" class="btn btn-primary btn-lg border text-white py-4">Sütīt</>
		</div>
		<div class="w-1/3 flex justify-end">
			<img src={nora_laptop} alt="" class="rounded-xl max-h-[700px]" />
		</div>
		<div class="flex flex-col space-y-6 w-1/3 text-lg leading-relaxed md:mt-28">
			<form method="post" use:enhance class="max-w-[600px] flex flex-col gap-4">
				<!-- <h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">Kontakti</h1> -->
				<div class="text-xl">
					Ja vēlies "pa kluso" kaut ko pajautāt, tad droši uzraksti man ziņu šeit!
				</div>
				{#if $delayed}
					<Spinner class="mx-auto h-12 w-12 fill-primary-600" />
				{:else if $message?.status === 'success'}
					<h3 class="mb-2 text-4xl font-extrabold tracking-tight md:text-3xl">
						Paldies! Tu esi veiksmīgi pievienojusies waitlist-am!
					</h3>
				{:else}
					<div class="text-black flex flex-col gap-4">
						<input
							type="text"
							aria-required="true"
							class="input text-lg py-4"
							placeholder="Vārds"
							name="name"
							required
							bind:value={$form.name}
						/>
						<input
							type="email"
							aria-required="true"
							class="input text-lg py-4 {$errors.email ? 'border-red-500' : ''}"
							placeholder="E-pasts"
							name="email"
							required
							bind:value={$form.email}
						/>
						<textarea
							aria-required="true"
							class="input text-lg py-4"
							placeholder="Ko Tu gribētu pajautāt?"
							name="message"
							required
							bind:value={$form.message}
						/>
						<button type="submit" class="btn btn-primary btn-lg border text-white py-4"
							>Sūtīt</button
						>
					</div>
				{/if}
			</form>
		</div>
	</div>
</section>
