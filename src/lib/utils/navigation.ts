export function goToAnchor(e: MouseEvent) {
	const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
	if (!href) return;

	const url = new URL(href, window.location.origin);

	if (window.location.pathname !== url.pathname) return;

	// console.log('Navigating to', href);
	e.preventDefault();

	if (url.hash) {
		const el = document.querySelector(url.hash);
        const isMobile = window.innerWidth <= 768;
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: isMobile ? 'start' : 'center' });
		}
	} else {
		// kein Hash -> nach oben
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
