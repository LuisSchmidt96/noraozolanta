<script lang="ts">
	import type { PageProps } from './$types';
	import nora_laptop_fruits from '$lib/assets/images/nora_laptop_fruits.webp';
	import { superForm } from 'sveltekit-superforms';
	import { Mail, Linkedin, Instagram, Facebook } from 'lucide-svelte';
	let { data }: PageProps = $props();

	const { form, errors, message, enhance, delayed } = superForm(data.form);
</script>

<svelte:head>
	<title>Kontakti | Nora Ozolanta</title>
	<meta
		name="description"
		content="Sazinies ar Noru — e-pasts, sociālie tīkli vai bezmaksas konsultācija Zoom. Atbildi var sagaidīt 24–48 stundu laikā."
	/>
	<meta property="og:title" content="Kontakti | Nora Ozolanta" />
	<meta
		property="og:description"
		content="Sazinies ar Noru — e-pasts, sociālie tīkli vai bezmaksas konsultācija Zoom. Atbildi var sagaidīt 24–48 stundu laikā."
	/>
	<meta property="og:url" content="https://noraozolanta.com/contact" />
	<link rel="canonical" href="https://noraozolanta.com/contact" />
</svelte:head>

<div class="bg-paper-2">
	<section class="container mx-auto grid gap-12 px-4 py-14 md:grid-cols-2 md:gap-16 md:py-20">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-3">
				<h1 class="text-4xl font-bold md:text-5xl">Kontakti</h1>
				<p class="text-lg text-ink-2 md:text-xl">Ir jautājums? Droši uzraksti man ziņu.</p>
			</div>
			<ul class="flex list-none flex-col gap-4 p-0 text-lg">
				<li>
					<a
						href="mailto:contact@noraozolanta.com"
						class="inline-flex items-center gap-3 hover:underline"
					>
						<Mail size={24} class="shrink-0 text-accent" aria-hidden="true" />
						contact@noraozolanta.com
					</a>
				</li>
				<li>
					<a
						href="https://wa.me/37129901290"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 hover:underline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="22 22 212 212"
							class="shrink-0 text-accent"
							aria-label="WhatsApp"
							><path
								d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
							></path></svg
						>
						<span class="whitespace-nowrap">+371 29901290</span>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/nora.ozolanta/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 hover:underline"
					>
						<Instagram size={24} class="shrink-0 text-accent" aria-hidden="true" />
						instagram.com/nora.ozolanta
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/nora.ozolanta"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 hover:underline"
					>
						<Facebook size={24} class="shrink-0 text-accent" aria-hidden="true" />
						facebook.com/nora.ozolanta
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/nora-ozolanta/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 hover:underline"
					>
						<Linkedin size={24} class="shrink-0 text-accent" aria-hidden="true" />
						linkedin.com/in/nora-ozolanta
					</a>
				</li>
			</ul>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<h2 class="font-display text-2xl font-semibold md:text-3xl">
					Vēlies kaut ko pajautāt “pa kluso”?
				</h2>
				<p class="text-ink-2">Droši uzraksti man ziņu — atbildēšu personīgi.</p>
			</div>
			{#if $message?.status === 'success'}
				<p class="font-display text-2xl font-semibold" role="status">{$message.text}</p>
			{:else}
				<form method="post" action="?/contact" use:enhance class="flex flex-col gap-4">
					<div class="flex flex-col gap-1">
						<label for="contact-name" class="text-sm font-medium">Vārds</label>
						<input
							id="contact-name"
							type="text"
							class="input"
							name="name"
							required
							aria-required="true"
							aria-invalid={$errors.name ? 'true' : undefined}
							bind:value={$form.name}
						/>
						<p class="min-h-5 text-sm text-error">
							{$errors.name ?? ''}
						</p>
					</div>
					<div class="flex flex-col gap-1">
						<label for="contact-email" class="text-sm font-medium">E-pasts</label>
						<input
							id="contact-email"
							type="email"
							class="input"
							name="email"
							required
							aria-required="true"
							aria-invalid={$errors.email ? 'true' : undefined}
							bind:value={$form.email}
						/>
						<p class="min-h-5 text-sm text-error">
							{$errors.email ?? ''}
						</p>
					</div>
					<div class="flex flex-col gap-1">
						<label for="contact-message" class="text-sm font-medium"
							>Par ko Tu vēlētos parunāt?</label
						>
						<textarea
							id="contact-message"
							class="input min-h-32"
							name="message"
							rows="5"
							required
							aria-required="true"
							aria-invalid={$errors.message ? 'true' : undefined}
							bind:value={$form.message}
						></textarea>
						<p class="min-h-5 text-sm text-error">
							{$errors.message ?? ''}
						</p>
					</div>
					<div class="flex items-center gap-3">
						<input
							type="checkbox"
							class="checkbox"
							id="marketingConsent"
							name="marketingConsent"
							bind:checked={$form.marketingConsent}
						/>
						<label for="marketingConsent">Vēlos saņemt jaunumus e-pastā (pēc izvēles)</label>
					</div>
					{#if $message?.status === 'error'}
						<p class="text-sm text-error" role="alert">{$message.text}</p>
					{/if}
					<button type="submit" class="btn btn-primary mt-1 w-fit" disabled={$delayed}>
						{$delayed ? 'Sūta…' : 'Nosūtīt ziņu'}
					</button>

					<!-- Honeypot -->
					<div
						class="absolute top-auto left-[-10000px] h-px w-px overflow-hidden"
						aria-hidden="true"
					>
						<label for="company">Company</label>
						<input
							id="company"
							name="company"
							type="text"
							tabindex="-1"
							autocomplete="off"
							value=""
						/>
					</div>
				</form>
			{/if}
		</div>
	</section>
</div>

<!-- Zoom konsultācija · diptych reversed -->
<section class="container mx-auto px-4 py-16 md:py-24">
	<div class="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
		<img
			src={nora_laptop_fruits}
			alt="Nora pie datora"
			width="1024"
			height="1536"
			loading="lazy"
			class="mx-auto w-full max-w-xs rounded-(--radius-card) md:max-w-sm"
		/>
		<div class="flex max-w-xl flex-col gap-5">
			<h2 class="font-display text-2xl font-semibold md:text-3xl">
				Vai varbūt vēlies pieteikties bezmaksas Zoom konsultācijai, lai saprastu, kā varam
				sadarboties?
			</h2>
			<a
				href="https://tidycal.com/noraozolanta/konsultacija"
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline w-fit"
			>
				Pieteikties zvanam
			</a>
		</div>
	</div>
</section>
