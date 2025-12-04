<script>
	import { goToAnchor } from '$lib/utils/navigation';

	// No JS needed for static footer
</script>

<footer
	class="md:relative sticky bottom-0 z-50 border-t border-primary-300 bg-surface-100 py-4 text-primary-900"
>
	<div
		class="container mx-auto flex flex-col items-center justify-between gap-4 bg-surface-100 px-4 md:flex-row"
	>
		<a
			href="https://www.instagram.com/nora.ozolanta/"
			target="_blank"
			rel="noopener noreferrer"
			class="hover:opacity-70"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="#000000"
				viewBox="0 0 256 256"
				><path
					d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
				></path></svg
			>
		</a>
		<!-- <div class="flex flex-col items-center gap-4 gap-y-8 bg-surface-100 md:flex-row">
			<span class="text-lg font-bold">© 2025 CYBERSCHMIDT</span>
			<nav class="flex gap-4 text-base">
				<a href="/impressum" class="hover:underline">Impressum</a>
				<a href="/datenschutz" data-sveltekit-noscroll class="hover:underline">Datenschutz</a>
				<a href="/#contact" on:click={goToAnchor} class="hover:underline" data-sveltekit-keepfocus
					>Kontakt</a
				>
			</nav>
		</div>
		<div class="flex items-center gap-2 pb-4 text-sm md:pb-0">
			<span>Mit ❤️ gemacht für alle Generationen</span>
		</div> -->
	</div>
</footer>
