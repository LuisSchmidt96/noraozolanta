export function clickOutside(node: HTMLElement, callback: () => void) {
	// the node has been mounted in the DOM

	window.addEventListener('click', handleClick);
	function handleClick(e: Event) {
		if (node && !node.contains(e.target as Node) && !e.defaultPrevented) {
			callback();
		}
	}

	return {
		destroy() {
			// the node has been removed from the DOM
			window.removeEventListener('click', handleClick);
		}
	};
}
