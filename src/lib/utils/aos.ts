// src/lib/actions/aos.ts

export interface AOSOptions {
  once?: boolean;       // animate only the first time it appears
  offset?: number;      // optional viewport margin
}

export function aos(node: HTMLElement, animation: string, options: AOSOptions = {}) {
  const once = options.once ?? false;
  const offset = options.offset ?? 0;

  function update() {
    const rect = node.getBoundingClientRect();
    const viewportBottom = window.innerHeight - offset;

    const isVisible = rect.top < viewportBottom;

    if (isVisible) {
      node.classList.add('aos-animate');
      if (animation) {
        node.setAttribute('data-aos', animation);
      }
    } else if (!once) {
      node.classList.remove('aos-animate');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  update(); // run once on mount

  return {
    destroy() {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    },
    update(newOptions: AOSOptions) {
      // allow reactive param updates
      if (newOptions.once !== undefined) options.once = newOptions.once;
      if (newOptions.offset !== undefined) options.offset = newOptions.offset;
    }
  };
}

