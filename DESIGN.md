# Design system

Minimal, modern, premium. The site should feel calm and precise, like a good
inspection report: lots of space, few colours, confident type.

All tokens live in `src/index.css` under `@theme` and are available as
Tailwind classes (`text-ink`, `bg-surface`, `text-display`, `font-serif`, …).

## Colour

Light and airy throughout: near-black text on white, one bright blue accent,
and a soft lavender-to-aqua glow on large surfaces. No large dark areas
anywhere. Amber appears only inside the sample report to mark findings. Do
not add colours; use these tokens (never Tailwind's default palette such as
`blue-700`).

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#0b1220` | Headings and body text |
| `paper` | `#ffffff` | Page background; text on blue buttons |
| `surface` | `#f5f8ff` | Alternate section bands, inner cards |
| `hairline` | `#e3e9f4` | Borders and dividers |
| `stone` | `#56606e` | Secondary text (6.4:1 on paper, 6.0:1 on surface) |
| `accent` | `#155dee` | Blue: primary buttons, the serif accent word, icons, ticks, focus |
| `accent-hover` | `#0f4bc6` | Hover state for blue buttons |
| `accent-light` | `#dfe9fd` | Pale blue tint: tick circles, "Good" pills, hover washes |
| `lavender` | `#d2e0fd` | Glow colour (left) |
| `aqua` | `#d6f7ff` | Glow colour (right) |
| `caution` | `#8a5a12` | Amber, report findings only (Major pill, Minor text) |
| `caution-light` | `#f5ecda` | Amber tint, report findings only |

Rules:

- Primary button: `bg-accent text-paper shadow-button`. Secondary: white with
  a hairline border. Use the shared `Button` component.
- Large surfaces (page headers, the footer panel, a featured card) use the
  `bg-glow` utility: lavender from the left, aqua from the right, over white.
- No black or dark panels. Photos may carry a dark fade for legible text.
- One blue accent per screen area: usually the serif word in the heading.

## Typography

Two families, two weights.

| Family | Weights | Use |
| --- | --- | --- |
| Geist (variable) | 400 body, 500 headings/UI | Everything |
| Instrument Serif italic | 400 | One accent word per heading; the testimonial quote |

Self-hosted via `@fontsource` (imported in `src/main.jsx`).

### Size scale (8 steps)

| Class | Size | Use |
| --- | --- | --- |
| `text-display` | 44 → 84px | Home hero headline only |
| `text-h1` | 36 → 60px | Footer CTA heading, page titles |
| `text-h2` | 30 → 48px | Section headings, testimonial quote |
| `text-h3` | 22px | Card titles, hero stat numbers |
| `text-base sm:text-[17px]` | 16 → 17px | Lead paragraphs and body copy |
| `text-[15px]` | 15px | Card and list text, FAQ answers |
| `text-sm` | 14px | Small UI text, captions, notes |
| `text-xs` / `text-eyebrow` | 12px | Labels, uppercase eyebrows, pills |

Headings are weight 500, never bold. Secondary text is `text-stone`, not
reduced-opacity ink. Use `text-balance` on headings and `text-pretty` on
paragraphs; keep paragraphs to `max-w-xl`/`max-w-2xl`.

## Shape, space and motion

- Buttons: one size everywhere, 40px tall (`h-10 px-5 text-sm font-medium`),
  matching the navbar button. Use the shared `Button` component.
- Buttons and pills: `rounded-full`. Cards: `rounded-2xl` (16px). Large
  panels such as the closing CTA: `rounded-3xl` (24px). Small inner elements
  (a note inside a card): `rounded-lg`. No heavy shadows.
- Section padding: `py-24` on desktop, `py-16` on mobile. Horizontal gutter
  `px-5 sm:px-8 lg:px-10`, content width `max-w-7xl`.
- Motion: short fade-up on enter (`y: 14`, 0.7s, ease `[0.16, 1, 0.3, 1]`),
  staggered by 80ms. No bouncing, no parallax.
- Process cards: open cards (hairline outline, no fill), text at the bottom.
  On hover the text lifts first, then a flat
  skyline (`Skyline` component) in two pale blue tints rises into the strip below
  the text; on touch screens it is always shown.
