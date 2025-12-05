export type HeadroomState = 'pinned' | 'unpinned';

export interface HeadroomOptions {
  offset?: number; // px from top before header starts hiding
}

export function initHeadroom(
  header: HTMLElement,
  options: HeadroomOptions = {}
) {
  const offset = options.offset ?? 80;
  let lastY = window.scrollY;
  let state: HeadroomState = 'pinned';

  const updateHeader = () => {
    const y = window.scrollY;
    const scrollingDown = y > lastY;
    const nearTop = y <= offset;

    if (nearTop) {
      if (state !== 'pinned') {
        header.classList.remove('headroom--unpinned');
        header.classList.add('headroom--pinned');
        state = 'pinned';
      }
    } else if (scrollingDown && state !== 'unpinned') {
      header.classList.remove('headroom--pinned');
      header.classList.add('headroom--unpinned');
      state = 'unpinned';
    } else if (!scrollingDown && state !== 'pinned') {
      header.classList.remove('headroom--unpinned');
      header.classList.add('headroom--pinned');
      state = 'pinned';
    }

    lastY = y;
  };

  window.addEventListener('scroll', updateHeader, { passive: true });

  // run once on init so it's correct if page loads scrolled
  updateHeader();

  // return cleanup so caller can unsubscribe
  return () => {
    window.removeEventListener('scroll', updateHeader);
  };
}