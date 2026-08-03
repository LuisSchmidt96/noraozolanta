<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Instagram } from 'lucide-svelte';

	let { form: formData } = $props();

	const { form, enhance, message, delayed } = superForm(formData);
</script>

<!-- Ft7 Newsletter-first · knobs: layout=split · submit=filled · privacy-line=yes -->
<footer id="newsletter" class="border-t border-rule bg-paper-2">
	<div
		class="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-[3fr_2fr] md:items-start md:gap-16"
	>
		<div class="max-w-2xl">
			{#if $message?.status === 'success'}
				<p class="font-display text-2xl font-semibold">Paldies!</p>
				<p class="mt-2 text-ink-2">{$message.text}</p>
			{:else}
				<h2 class="font-display text-2xl font-semibold tracking-tight">Mana misija:</h2>
				<p class="mt-2 text-ink-2">
					Palīdzēt latvietēm runāt brīvi angļu valodā. Vēlies uzzināt vairāk? Tad droši vari...
				</p>
				<form method="post" action="?/newsletter" use:enhance class="mt-5">
					<div class="flex flex-col gap-3 sm:flex-row">
						<button type="submit" class="btn btn-primary" disabled={$delayed}>
							{$delayed ? 'Sūta…' : 'Pieteikties epastiem no Noras '}
						</button>
						<input
							id="footer-name"
							type="text"
							name="name"
							class="input sm:max-w-44"
							placeholder="Vārds"
							required
							aria-required="true"
							aria-label="Vārds"
							bind:value={$form.name}
						/>
						<input
							type="email"
							name="email"
							class="input"
							placeholder="E-pasts"
							required
							aria-required="true"
							aria-label="E-pasta adrese"
							bind:value={$form.email}
						/>
					</div>
					{#if $message?.status === 'error'}
						<p class="mt-3 text-sm text-error" role="alert">
							{$message.text}
						</p>
					{/if}
					<p class="mt-3 text-sm text-ink-2">
						Vari atteikties jebkurā brīdī. <a href="/privatuma-politika" class="underline"
							>Privātuma politika</a
						>
					</p>
				</form>
			{/if}
		</div>

		<div class="flex flex-col gap-3 text-sm text-ink-2 md:items-end md:text-right">
			<a href="/" class="font-display text-lg font-semibold text-ink no-underline">Nora Ozolanta</a>
			<nav aria-label="Juridiskā informācija" class="flex flex-wrap gap-x-5 gap-y-1 md:justify-end">
				<a href="/rekviziti" class="whitespace-nowrap hover:underline">Rekvizīti</a>
				<a href="/privatuma-politika" class="whitespace-nowrap hover:underline"
					>Privātuma politika</a
				>
				<a href="/sikdatnes" class="whitespace-nowrap hover:underline">Sīkdatņu politika</a>
			</nav>
			<a
				href="https://www.instagram.com/nora.ozolanta/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram — nora.ozolanta"
				class="mt-1 inline-flex w-fit items-center gap-2 hover:text-ink md:self-end"
			>
				<Instagram size={20} aria-hidden="true" />
				<span>nora.ozolanta</span>
			</a>
			<p>© 2026 Nora Ozolanta</p>
		</div>
	</div>
</footer>
