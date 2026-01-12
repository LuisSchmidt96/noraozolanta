<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';
	import { tick } from 'svelte';

	let { children, open = $bindable() } = $props();

	let armed = false;

	$effect(() => {
		console.log('Popup open state changed:', open);
		if (!open) {
			armed = false;
			return;
		}

		armed = false;

		(async () => {
			await tick(); // wartet bis DOM gerendert ist
			armed = true; // erst jetzt Outside-Clicks erlauben
		})();
	});

	function handleOutsideClick() {
		if (!open || !armed) return;
		console.log('Closing popup due to outside click');
		open = false;
	}

	// $effect(() => {
	// 	if (open) {
	// 		initialized = true;
	// 	}
	// });
</script>

{#if open}
	<div class="fixed inset-0 bg-black/60 flex items-center justify-center z-9999">
		<div
			use:clickOutside={handleOutsideClick}
			class="bg-white p-6 rounded-xl max-w-lg w-full relative text-black"
		>
			{@render children?.()}
		</div>
	</div>
{/if}
