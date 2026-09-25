# Design system

Minimal, modern, premium. The site should feel calm and precise, like a good
inspection report: lots of space, few colours, confident type.

All tokens live in `src/index.css` under `@theme` and are available as
Tailwind classes (`text-ink`, `bg-surface`, `text-display`, `font-serif`, …).

## Colour

Neutrals carry the design and lean slightly cool so they sit well with the
navy; never use warm or yellow-tinted greys. Navy is the one brand accent, and amber appears
only inside the sample report to mark findings. Do not add colours; use these
tokens (never Tailwind's default palette such as `blue-700`).

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#000000` | Text, primary buttons, dark bands, footer |
| `paper` | `#ffffff` | Page background (pure white); text on dark |
| `surface` | `#f3f5f8` | Alternate section bands (faint blue-grey) |
| `hairline` | `#e3e7ed` | Borders and dividers |
| `stone` | `#5b6472` | Secondary text, blue-grey (6.0:1 on paper, 5.5:1 on surface) |
| `accent` | `#1f3a5f` | Navy: the serif accent word in headings, icons, ticks, focus ring |
| `accent-light` | `#d6dde8` | Navy tint: tick circles, "Good" pills, accent word on black |
| `caution` | `#8a5a12` | Amber, report findings only (Major pill, Minor text) |
| `caution-light` | `#f5ecda` | Amber tint, report findings only (Minor pill, finding note) |
| `ink-800` | `#1f242b` | Hover state for black buttons only |

Rules:

- Primary button is always `bg-ink text-paper`. Never fill a button with navy.
- Large dark areas are black (`ink`). Navy stays an accent: text, icons, small
  tints. No navy panels or cards.
- One navy accent per screen area: usually the serif word in the heading.
- On dark backgrounds use only three text strengths and one line strength:
  `text-paper` (headings), `text-paper/70` (body), `text-paper/55` (labels),
  `border-paper/15` (lines). Decorative grids use `rgb(255 255 255 / 0.08)`.

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
| `text-h1` | 36 → 60px | Closing CTA heading, page titles |
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
- Process cards: open cards (hairline outline, no fill). On hover a flat
  skyline (`Skyline` component) in two navy tints rises into the strip below
  the text; on touch screens it is always shown. No navy or black panels.
