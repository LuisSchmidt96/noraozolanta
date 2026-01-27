<script>
	import { Spinner } from 'flowbite-svelte';
	import Popup from './Popup.svelte';
	import { superForm } from 'sveltekit-superforms';

	let { data, open = $bindable() } = $props();

	const { form, enhance, errors, message, delayed } = superForm(data.form);
</script>

<Popup bind:open>
	{#if $delayed}
		<Spinner class="mx-auto h-12 w-12 fill-primary-600" />
	{:else if $message?.status === 'success'}
		<h3 class="mb-2 text-4xl font-extrabold tracking-tight md:text-3xl">
			Paldies! Prieks Tevi redzēt jaunumu vēstulē.
		</h3>
	{:else}<div class="flex flex-col gap-4 text-black">
			<h2 class="h2">Pievienoties jaunumu vēstulei</h2>
			<p>
				Jā, vēlos saņemt mierīgu, iedvesmojošu vēstuli par angļu valodas apguvi, pārliecību un
				personīgo izaugsmi. Dalīšos ar domām, pieredzi un praktiskiem ieteikumiem. (No vēstules vari
				atteikties jebkurā brīdī.)
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
