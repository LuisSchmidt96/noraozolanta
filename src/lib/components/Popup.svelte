<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';
	import { fade } from 'svelte/transition';
	import { X } from 'lucide-svelte';
	let { children, open = $bindable(), closeOnOutsideClick = true } = $props();

	function handleOutsideClick() {
		if (open && closeOnOutsideClick) open = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (open && e.key === 'Escape') open = false;
	}

	function focusPanel(node: HTMLElement) {
		node.focus();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-(--z-modal) grid place-items-center bg-ink/60 p-4"
	>
		<div
			use:clickOutside={handleOutsideClick}
			use:focusPanel
			role="dialog"
			aria-modal="true"
			tabindex="-1"
			class="popup-panel relative w-full max-w-lg rounded-(--radius-card) bg-paper p-6 text-ink"
		>
			<button
				class="absolute top-4 right-4 rounded p-2 text-ink-2 hover:text-ink"
				onclick={() => (open = false)}
				aria-label="Aizvērt"
			>
				<X size={22} aria-hidden="true" />
			</button>
			{@render children?.()}
		</div>
	</div>
{/if}

<style>
	.popup-panel {
		animation: popup-in var(--dur-short) var(--ease-out);
	}
	@keyframes popup-in {
		from {
			opacity: 0;
			transform: scale(0.97);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.popup-panel {
			animation: none;
		}
	}
</style>
