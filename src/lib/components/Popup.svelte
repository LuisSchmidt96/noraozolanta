<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';
	import { fade } from 'svelte/transition';
	import x from '$lib/assets/images/x.svg';
	let { children, open = $bindable(), closeOnOutsideClick = true } = $props();

	function handleOutsideClick() {
		if (open && closeOnOutsideClick) open = false;
	}
</script>

{#if open}
	<div transition:fade={{ duration: 200 }} class="fixed inset-0 bg-black/60 flex items-center justify-center z-9999">
		<div
			use:clickOutside={handleOutsideClick}
			class="bg-white p-6 rounded-xl max-w-lg w-full relative text-black"
		>
				<button class="absolute top-6 right-6" onclick={() => open = false}><img src={x} alt="" /></button>
			{@render children?.()}
		</div>
	</div>
{/if}
