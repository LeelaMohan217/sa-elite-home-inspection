# Design system

Minimal, modern, premium. The site should feel calm and precise, like a good
inspection report: lots of space, few colours, confident type.

All tokens live in `src/index.css` under `@theme` and are available as
Tailwind classes (`text-ink`, `bg-surface`, `text-display`, `font-serif`, …).

## Fonts

| Role | Family | Use |
| --- | --- | --- |
| Sans (everything) | **Geist** (variable, 100–900) | Headings, body, UI, numbers |
| Serif accent | **Instrument Serif** italic | One or two words per heading, never a full sentence |

Both are self-hosted through `@fontsource` (imported in `src/main.jsx`), so
there is no request to Google Fonts.

## Colour

Warm monochrome with one accent. Black and off-white carry the design; the
accent is used sparingly.

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#111110` | Text, primary buttons, logo |
| `ink-800` | `#2b2a27` | Hover on ink surfaces |
| `paper` | `#fafaf8` | Page background |
| `surface` | `#f2f1ed` | Cards, alternating sections |
| `stone` | `#6b6a65` | Secondary text (5.1:1 on paper) |
| `hairline` | `#e5e3dd` | Borders, dividers |
| `accent` | `#1f3a5f` | Serif accent words, links, focus rings, small dots |
| `accent-dark` | `#142840` | Dark feature sections |
| `accent-light` | `#d6dde8` | Tints behind accent content |

Rules:

- Primary button is always `bg-ink text-paper`. Do not use the accent for buttons.
- Use Tailwind's default palette (`blue-700` etc.) nowhere; add a token instead.
- At most one accent element per screen area.

## Type scale

Fluid sizes, 375px → 1440px viewport.

| Class | Size | Line height | Tracking | Weight | Use |
| --- | --- | --- | --- | --- | --- |
| `text-display` | 44 → 84px | 1.02 | -0.04em | 500 | Home hero headline only |
| `text-h1` | 36 → 60px | 1.05 | -0.035em | 500 | Page titles |
| `text-h2` | 30 → 48px | 1.1 | -0.03em | 500 | Section titles |
| `text-h3` | 22px | 1.3 | -0.015em | 500 | Card titles |
| `text-lead` | 17 → 20px | 1.6 | — | 400 | Intro paragraph under a heading |
| `text-base` | 16px | 1.65 | — | 400 | Body |
| `text-eyebrow` | 12px | 1 | 0.16em | 500, uppercase | Label above a heading |

Rules:

- Headings are weight 500 (`font-medium`), never bold. Size and tight tracking
  carry the hierarchy.
- Secondary text is `text-stone`, not reduced-opacity ink.
- Keep paragraphs to `max-w-xl`–`max-w-2xl`; use `text-balance` on headings and
  `text-pretty` on paragraphs.

## Shape, space and motion

- Buttons and pills: `rounded-full`. Cards: `rounded-2xl` with a `hairline`
  border, no heavy shadows.
- Section padding: `py-24` on desktop, `py-16` on mobile. Horizontal gutter
  `px-5 sm:px-8 lg:px-10`, content width `max-w-7xl`.
- Motion: short fade-up on enter (`y: 14`, 0.7s, ease `[0.16, 1, 0.3, 1]`),
  staggered by 80ms. No bouncing, no parallax.
