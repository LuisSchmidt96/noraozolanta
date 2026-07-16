<script>
	import Popup from './Popup.svelte';
	import { superForm } from 'sveltekit-superforms';

	let { form, open = $bindable() } = $props();

	const {
		form: waitlistForm,
		enhance: waitlistEnhance,
		message: waitlistMessage,
		delayed: waitlistDelayed
	} = superForm(form);
</script>

<Popup bind:open>
	{#if $waitlistMessage?.status === 'success'}
		<p class="pr-8 font-display text-2xl font-semibold" role="status">
			{$waitlistMessage.text}
		</p>
	{:else}
		<div class="flex flex-col gap-4">
			<h2 class="pr-8 font-display text-2xl font-semibold">Rezervēt vietu programmā</h2>
			<p>
				Jā, man šis interesē. Labprāt saņemšu jaunumus un informāciju saistībā ar šo, kā arī gribu
				sev rezervēt vietu! (droši varēsi jebkurā brīdī pārdomāt, ja kas)
			</p>
			<form method="post" action="?/waitlist" use:waitlistEnhance class="flex flex-col gap-4">
				<div class="flex flex-col gap-1">
					<label for="waitlist-name" class="text-sm font-medium">Vārds</label>
					<input
						id="waitlist-name"
						type="text"
						required
						aria-required="true"
						class="input"
						name="name"
						bind:value={$waitlistForm.name}
					/>
				</div>
				<div class="flex flex-col gap-1">
					<label for="waitlist-email" class="text-sm font-medium">E-pasts</label>
					<input
						id="waitlist-email"
						type="email"
						required
						aria-required="true"
						class="input"
						name="email"
						bind:value={$waitlistForm.email}
					/>
				</div>
				{#if $waitlistMessage?.status === 'error'}
					<p class="text-sm text-error" role="alert">{$waitlistMessage.text}</p>
				{/if}
				<button type="submit" class="btn btn-primary mt-1" disabled={$waitlistDelayed}>
					{$waitlistDelayed ? 'Sūta…' : 'Rezervēt vietu'}
				</button>
			</form>
		</div>
	{/if}
</Popup>
