<script>
	import { Spinner } from 'flowbite-svelte';
	import Popup from './Popup.svelte';
	import { superForm } from 'sveltekit-superforms';

	let { form, open = $bindable() } = $props();

	const { form: newsletterForm, enhance: newsletterEnhance, message: newsletterMessage, delayed: newsletterDelayed } = superForm(form);
</script>

<Popup bind:open>
	{#if $newsletterDelayed}
		<Spinner class="mx-auto h-12 w-12 fill-primary-600" />
	{:else if $newsletterMessage?.status === 'success'}
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
			<form method="post" action="?/newsletter" use:newsletterEnhance class="flex flex-col gap-4">
				<input
					type="text"
					aria-required="true"
					class="input text-lg py-4"
					placeholder="Vārds"
					name="name"
					bind:value={$newsletterForm.name}
				/>
				<input
					type="email"
					aria-required="true"
					class="input text-lg py-4"
					placeholder="E-pasts"
					name="email"
					bind:value={$newsletterForm.email}
				/>
				<button type="submit" class="btn btn-primary btn-lg border text-white py-4"
					>Pievienoties</button
				>
			</form>
		</div>
	{/if}
</Popup>
