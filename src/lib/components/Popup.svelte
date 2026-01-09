<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';

	let { children, clickoutside, open = $bindable() } = $props();
 
	function handleOutsideClick() {
		console.log('test');
		if (open) {
			clickoutside();
		}
	}
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
