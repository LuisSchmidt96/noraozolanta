# Design — Nora Ozolanta

A locked design system for this app. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre

editorial — warm, story-led personal brand. Not SaaS, not atmospheric. Motion is
default-off; stillness is part of the voice.

## Macrostructure family

- Marketing pages (`/`, `/offers`): **Split Studio** — alternating text/photo
  diptychs, direction flips per section, real photography carries the proof side.
  Hero archetype: H2 Split diptych (7/5 or 5/7). `/offers` now uses an **Offer
  Ladder** variant within Split Studio — stacked hairline-ruled rows ordered
  free → paid, purely typographic (no cards-in-cards). Allowance: `/offers` may
  move to **Narrative Workflow** once real program-phase content (module list,
  weekly rhythm) is supplied — do not invent phases before then.
- Content pages (`/about`): **Letter** — first-person, ≤ 60ch measure, salutation
  display, sign-off, no buttons in the fold. Hero archetype: H5 Letter hero.
- Legal pages (`/privatuma-politika`, `/sikdatnes`, `/rekviziti`): **Long
  Document** — retheme-only for now; structure preserved as shipped.

## Theme — "Augļu dārzs" (custom, anchored on existing brand)

- `--color-paper` oklch(97.5% 0.012 100) — warm cream, never pure white
- `--color-paper-2` oklch(94% 0.022 100) — deeper cream section band
- `--color-paper-amber` oklch(95.5% 0.05 92) — soft amber tint band (lead magnet)
- `--color-ink` oklch(24% 0.03 156) — near-black forest green
- `--color-ink-2` oklch(42% 0.035 152) — muted green-grey (secondary text)
- `--color-rule` oklch(86% 0.02 110) — hairlines
- `--color-accent` oklch(40% 0.075 156) — brand forest green (from #224932)
- `--color-accent-ink` oklch(97.5% 0.012 100) — text on accent fills
- `--color-accent-2` oklch(86% 0.16 86) — brand amber (#ffc83f): underlines,
  highlights, small marks only. Never a text colour, never a large fill.
- `--color-focus` oklch(52% 0.13 70) — deep ochre focus ring

Accent discipline: green fills appear only on the single primary CTA per view;
amber appears as drawn underlines / small squares, ≤ 3% of any viewport.

## Typography

- Display: 'Playfair Display Variable', weight 600–700, style **normal — italic
  headers are banned**. Tracking −0.02em.
- Body: 'Inter Variable', weight 400 (500 for labels). NOTE: the family name has
  a space — `'InterVariable'` silently falls back to system sans.
- No third face. Wordmark is Playfair (same as display) — Letter/editorial
  collapse is intentional.
- Hero headlines ≤ 50 chars target; cap `clamp(2.25rem, 4vw + 1rem, 4rem)`.
- Body measure ≤ 65ch, line-height 1.6.

## Spacing

Tailwind's 4-pt scale via utilities. Section rhythm is deliberately uneven:
hero py-16/py-20, mid-bands py-14–py-20, closing sections py-24. Never equal
padding on every band.

## Motion

- Easings: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-in:
cubic-bezier(0.7, 0, 0.84, 0)`; durations `--dur-micro: 120ms`, `--dur-short:
220ms`, `--dur-long: 420ms`.
- Reveal pattern: **none**. No AOS, no scroll-triggered fades. Content is there.
- Reduced-motion fallback: all transitions ≤ 150ms opacity-only; smooth scroll
  only under `prefers-reduced-motion: no-preference`.

## Microinteractions stance

- Silent success; toasts/messages for failures and async effects only.
- Button hover: background deepen + 1px lift (220ms ease-out); active: press back.
- Focus rings: 2px `--color-focus`, 2px offset, instant, on every interactive
  element. Never animated in.
- Modals: fade+scale 0.97→1, 220ms; Escape closes; `role="dialog"`.

## CTA voice

- Primary CTA: solid `--color-accent` fill, `--color-accent-ink` text, radius
  10px, weight 600, one per view, label is a verb phrase, single line at 320px.
- Secondary CTA: outlined chip — 1px `--color-accent` border, transparent fill,
  same geometry. Tertiary: typographic link with amber underline + →.
- No glow shadows, no `filter: brightness()` hovers.

## Per-page allowances

- Marketing pages: real photography only (the existing Nora/fruit library).
  No stock, no generated illustration, no re-drawn chrome.
- Letter page: one quiet inline photograph maximum.
- Legal pages: typography only.

## What pages MUST share

- The wordmark (Playfair 600, "Nora Ozolanta") in the N6 masthead nav.
- Ft7 newsletter-first footer.
- The palette above; the display + body fonts; the CTA voice.
- Testimonial voice: real quotes, real attributions, typographic " mark —
  no invented metrics, ever.

## What pages MAY differ on

- Macrostructure within the family (Split Studio ↔ Narrative Workflow for
  marketing once content exists).
- Diptych direction, band tint (paper / paper-2 / paper-amber), section rhythm.

## Exports

### tokens.css

```css
:root {
	--color-paper: oklch(97.5% 0.012 100);
	--color-paper-2: oklch(94% 0.022 100);
	--color-paper-amber: oklch(95.5% 0.05 92);
	--color-ink: oklch(24% 0.03 156);
	--color-ink-2: oklch(42% 0.035 152);
	--color-rule: oklch(86% 0.02 110);
	--color-accent: oklch(40% 0.075 156);
	--color-accent-ink: oklch(97.5% 0.012 100);
	--color-accent-2: oklch(86% 0.16 86);
	--color-focus: oklch(52% 0.13 70);

	--font-display: 'Playfair Display Variable', Georgia, serif;
	--font-body: 'Inter Variable', system-ui, sans-serif;

	--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
	--ease-in: cubic-bezier(0.7, 0, 0.84, 0);
	--dur-micro: 120ms;
	--dur-short: 220ms;
	--dur-long: 420ms;

	--radius-btn: 10px;
	--radius-card: 14px;
	--radius-input: 10px;
}
```

### Tailwind v4 `@theme`

```css
@theme {
	--color-paper: oklch(97.5% 0.012 100);
	--color-paper-2: oklch(94% 0.022 100);
	--color-paper-amber: oklch(95.5% 0.05 92);
	--color-ink: oklch(24% 0.03 156);
	--color-ink-2: oklch(42% 0.035 152);
	--color-rule: oklch(86% 0.02 110);
	--color-accent: oklch(40% 0.075 156);
	--color-accent-ink: oklch(97.5% 0.012 100);
	--color-accent-2: oklch(86% 0.16 86);
	--color-focus: oklch(52% 0.13 70);
	--font-display: 'Playfair Display Variable', Georgia, serif;
	--font-body: 'Inter Variable', system-ui, sans-serif;
}
```

### DTCG `tokens.json`

```json
{
	"color": {
		"paper": { "$value": "oklch(97.5% 0.012 100)", "$type": "color" },
		"ink": { "$value": "oklch(24% 0.03 156)", "$type": "color" },
		"accent": { "$value": "oklch(40% 0.075 156)", "$type": "color" },
		"accent-2": { "$value": "oklch(86% 0.16 86)", "$type": "color" },
		"focus": { "$value": "oklch(52% 0.13 70)", "$type": "color" }
	},
	"font": {
		"display": { "$value": "Playfair Display Variable", "$type": "fontFamily" },
		"body": { "$value": "Inter Variable", "$type": "fontFamily" }
	}
}
```

### shadcn/ui CSS variables

```css
:root {
	--background: 97.5% 0.012 100;
	--foreground: 24% 0.03 156;
	--primary: 40% 0.075 156;
	--primary-foreground: 97.5% 0.012 100;
	--muted: 86% 0.02 110;
	--muted-foreground: 42% 0.035 152;
	--border: 86% 0.02 110;
	--input: 86% 0.02 110;
	--ring: 52% 0.13 70;
	--radius: 10px;
}
```
