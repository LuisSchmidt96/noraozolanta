<script>
	import Popup from './Popup.svelte';
	import { superForm } from 'sveltekit-superforms';

	let { form, open = $bindable() } = $props();

	const {
		form: newsletterForm,
		enhance: newsletterEnhance,
		message: newsletterMessage,
		delayed: newsletterDelayed
	} = superForm(form);
</script>

<Popup bind:open>
	{#if $newsletterMessage?.status === 'success'}
		<p class="pr-8 font-display text-2xl font-semibold" role="status">
			{$newsletterMessage.text}
		</p>
	{:else}
		<div class="flex flex-col gap-4">
			<h2 class="pr-8 font-display text-2xl font-semibold">Pievienoties jaunumu vēstulei</h2>
			<p>
				Jā, vēlos saņemt mierīgu, iedvesmojošu vēstuli par angļu valodas apguvi, pārliecību un
				personīgo izaugsmi. Dalīšos ar domām, pieredzi un praktiskiem ieteikumiem. (No vēstules vari
				atteikties jebkurā brīdī.)
			</p>
			<form method="post" action="?/newsletter" use:newsletterEnhance class="flex flex-col gap-4">
				<div class="flex flex-col gap-1">
					<label for="newsletter-name" class="text-sm font-medium">Vārds</label>
					<input
						id="newsletter-name"
						type="text"
						required
						aria-required="true"
						class="input"
						name="name"
						bind:value={$newsletterForm.name}
					/>
				</div>
				<div class="flex flex-col gap-1">
					<label for="newsletter-email" class="text-sm font-medium">E-pasts</label>
					<input
						id="newsletter-email"
						type="email"
						required
						aria-required="true"
						class="input"
						name="email"
						bind:value={$newsletterForm.email}
					/>
				</div>
				{#if $newsletterMessage?.status === 'error'}
					<p class="text-sm text-error" role="alert">{$newsletterMessage.text}</p>
				{/if}
				<button type="submit" class="btn btn-primary mt-1" disabled={$newsletterDelayed}>
					{$newsletterDelayed ? 'Sūta…' : 'Pievienoties'}
				</button>
			</form>
		</div>
	{/if}
</Popup>
