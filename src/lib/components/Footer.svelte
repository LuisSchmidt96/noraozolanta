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
		<div class="flex flex-col items-center gap-4 gap-y-8 bg-surface-100 md:flex-row">
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
		</div>
	</div>
</footer>
