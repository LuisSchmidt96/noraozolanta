<script lang="ts">
	import type { PageProps } from './$types';
	import nora_laptop from '$lib/assets/images/nora_laptop.webp';
	import { superForm } from 'sveltekit-superforms';
	import { Spinner } from 'flowbite-svelte';
	import envelope from '$lib/assets/images/envelope.svg';
	import facebook_logo from '$lib/assets/images/facebook-logo.svg';
	import whatsapp_logo from '$lib/assets/images/whatsapp-logo.svg';
	import instagram_logo from '$lib/assets/images/instagram-logo.svg';
	import linkedin_logo from '$lib/assets/images/linkedin-logo.svg';
	let { data }: PageProps = $props();

	const { form, errors, message, enhance, delayed } = superForm(data.form);
</script>

<div class=" bg-(--color-primary)/30">
	<section class="container mx-auto flex flex-col md:flex-row px-4 gap-x-12 space-y-8 md:space-y-0">
		<div class="flex flex-col space-y-12 md:w-1/2 mt-24 text-black">
			<div class="flex flex-col space-y-4">
				<h1 class="h1 font-bold tracking-tight md:text-5xl/tight">Kontakti</h1>
				<p class="h3">Ir jautājums? Droši uzraksti man ziņu.</p>
			</div>
			<div class="flex flex-col space-y-4">
				<a
					href="mailto:contact@noraozolanta.com"
					class="flex space-x-4 items-center text-xl md:text-2xl w-fit"
					><img src={envelope} alt="envelope" class="h-10 w-10 md:h-16 md:w-16" />
					<div class="">contact@noraozolanta.com</div></a
				>
				<div class="flex space-x-4 items-center text-xl md:text-2xl w-fit">
					<img src={whatsapp_logo} alt="WhatsApp Logo" class="h-10 w-10 md:h-16 md:w-16" />
					<div class="">+371 12345678</div>
				</div>
				<a
					href="https://www.linkedin.com/in/nora-ozolanta/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex space-x-4 items-center text-xl md:text-2xl w-fit"
				>
					<img src={linkedin_logo} alt="Linkedin Logo" class="h-10 w-10 md:h-16 md:w-16" />
					<div class="">linkedin.com/in/nora-ozolanta/</div>
				</a>
				<a
					href="https://www.instagram.com/nora.ozolanta/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex space-x-4 items-center text-xl md:text-2xl w-fit"
				>
					<img src={instagram_logo} alt="Instagram Logo" class="h-10 w-10 md:h-16 md:w-16" />
					<div class="">instagram.com/nora.ozolanta</div>
				</a>
				<a
					href="https://www.facebook.com/nora.ozolanta"
					target="_blank"
					rel="noopener noreferrer"
					class="flex space-x-4 items-center text-xl md:text-2xl w-fit"
				>
					<img src={facebook_logo} alt="Facebook Logo" class="h-10 w-10 md:h-16 md:w-16" />
					<div class="">facebook.com/nora.ozolanta</div>
				</a>
			</div>
		</div>
		<div class="flex flex-col space-y-6 md:w-1/2 text-lg my-auto text-black py-16 md:py-0">
			<form method="post" use:enhance class="max-w-[600px] flex flex-col gap-8">
				<!-- <h1 class="h1 mb-8 font-bold tracking-tight md:text-5xl/tight">Kontakti</h1> -->
				<div class="flex flex-col space-y-4">
					<div class="h2">Vēlies kaut ko pajautāt “pa kluso”?</div>
					<div class="h4">Droši uzraksti man ziņu — atbildēšu personīgi.</div>
				</div>
				{#if $delayed}
					<Spinner class="mx-auto h-12 w-12 fill-primary-600" />
				{:else if $message?.status === 'success'}
					<h3 class="mb-2 text-4xl font-extrabold tracking-tight md:text-3xl">
						Paldies! Tu esi veiksmīgi pievienojusies waitlist-am!
					</h3>
				{:else}
					<div class="flex flex-col gap-4">
						<input
							type="text"
							aria-required="true"
							class="input text-lg py-4 bg-white placeholder:text-gray-600"
							placeholder="Vārds"
							name="name"
							required
							bind:value={$form.name}
						/>
						<input
							type="email"
							aria-required="true"
							class="input text-lg py-4 bg-white placeholder:text-gray-600"
							placeholder="E-pasts"
							name="email"
							required
							bind:value={$form.email}
						/>
						<textarea
							aria-required="true"
							class="input text-lg py-4 bg-white placeholder:text-gray-600"
							placeholder="Par ko Tu vēlētos parunāt?"
							name="message"
							required
							bind:value={$form.message}
						/>
						<div class="flex items-center space-x-4">
							<input
								type="checkbox"
								class="checkbox bg-white"
								id="marketingConsent"
								name="marketingConsent"
								bind:checked={$form.marketingConsent}
							/>
							<label for="marketingConsent" class="text-lg"
								>Vēlos saņemt jaunumus e-pastā (pēc izvēles)</label
							>
						</div>
						<button type="submit" class="btn btn-primary btn-md mt-2">Nosūtīt ziņu</button>

						<!-- Honeypot -->
						<div
							class="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
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
					</div>
				{/if}
			</form>
		</div>
		<!-- </div> -->
	</section>
</div>
<section
	class="container mx-auto flex flex-col md:flex-row mt-24 mb-24 md:mb-0 px-4"
	data-aos="fade-up"
	data-aos-delay="100"
>
	<div class="flex flex-col md:flex-row gap-x-20 justify-center w-full text-black">
		<!-- <div class="flex flex-col w-1/3 gap-6 md:mt-28">
			<h2 class="h2">
				Vai varbūt vēlies pieteikties bezmaksas zvanam, lai saprastu, cik labi šī programma derēs
				Tev?
			</h2>

			<a
				href="https://tidycal.com/noraozolanta/konsultacija"
				type="button"
				class="btn btn-primary btn-lg border text-white py-4">Sütīt</a
			>
		</div> -->
		<div class="hidden md:w-1/3 md:flex justify-end">
			<img src={nora_laptop} alt="" class="rounded-xl max-h-[700px]" />
		</div>
		<div class="flex flex-col md:w-1/3 gap-6 md:mt-28">
			<h2 class="h2">
				Vai varbūt vēlies pieteikties bezmaksas zvanam, lai saprastu, cik labi šī programma derēs
				Tev?
			</h2>
			<h2 class="h4">Spied šeit, lai pieteiktos bezmaksas zvanam!</h2>
			<a
				href="https://tidycal.com/noraozolanta/konsultacija"
				type="button"
				class="btn btn-primary btn-md border text-white py-4">Sütīt</a
			>
		</div>
	</div>
</section>
