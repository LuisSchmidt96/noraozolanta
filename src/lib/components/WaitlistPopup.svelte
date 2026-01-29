<script>
	import { Spinner } from 'flowbite-svelte';
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
	{#if $waitlistDelayed}
		<Spinner class="mx-auto h-12 w-12 fill-primary-600" />
	{:else if $waitlistMessage?.status === 'success'}
		<h3 class="mb-2 text-4xl font-extrabold tracking-tight md:text-3xl">
			Paldies! Tu esi veiksmīgi pievienojusies waitlist-am!
		</h3>
	{:else}<div class="flex flex-col gap-4 text-black">
			<h2 class="h2">Pievienoties waitlist-am</h2>
			<p>
				Jā, man šis interesē. Labprāt saņemšu jaunumus un informāciju saistībā ar šo, kā arī gribu
				sev rezervēt vietu! (droši varēsi jebkurā brīdī pārdomāt, ja kas)
			</p>
			<form method="post" action="?/waitlist" use:waitlistEnhance class="flex flex-col gap-4">
				<input
					type="text"
					aria-required="true"
					class="input text-lg py-4"
					placeholder="Vārds"
					name="name"
					bind:value={$waitlistForm.name}
				/>
				<input
					type="email"
					aria-required="true"
					class="input text-lg py-4"
					placeholder="E-pasts"
					name="email"
					bind:value={$waitlistForm.email}
				/>
				<button type="submit" class="btn btn-primary btn-lg border text-white py-4"
					>Pievienoties</button
				>
			</form>
		</div>
	{/if}
</Popup>
