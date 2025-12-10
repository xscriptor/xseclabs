## **Global Styles (`app/globals.css`)**

### Overview
- Imports Tailwind via `@import "tailwindcss"` for utilities and preflight.
- Defines local typography `Anonymous Pro` with `@font-face`.
- Sets CSS color variables for light/dark themes.
- Includes UI utilities: `html, body`, `.btn` and variants, `.card`, `.muted`.

### Font
- `font-family`: `"Anonymous Pro"`.
- `src`: `"/fonts/AnonymousPro-Regular.woff2"` (served from `public/fonts`).
- `font-weight`: `400`.
- `font-style`: `normal`.
- `font-display`: `swap`.

Usage:

```css
/* Apply the font globally (optional) */
html, body {
  font-family: "Anonymous Pro", sans-serif;
}

/* Or in a specific component */
.title {
  font-family: "Anonymous Pro", sans-serif;
}
```

### Color variables (light theme)
- `--bg`: `#F3F3F5`
- `--surface`: `#FFFFFF`
- `--surface-muted`: `#ECECEC`
- `--text`: `#171717`
- `--text-secondary`: `#5C5C66`
- `--primary`: `#FF2FAE`
- `--success`: `#00DFA2`
- `--warning`: `#FFD32A`
- `--aqua`: `#00C9FF`
- `--link`: `#006EFF`
- `--purple`: `#8F2EFF`

### Dark mode (`prefers-color-scheme: dark`)
- `--bg`: `#0F0F14`
- `--surface`: `#1B1B21`
- `--surface-muted`: `#1B1B21`
- `--text`: `#FFFFFF`
- `--text-secondary`: `#B5B5C3`
- Accent variables (`--primary`, `--success`, `--warning`, `--aqua`, `--link`, `--purple`) remain.

### Global styles
- `html, body`: `background-color: var(--bg)`, `color: var(--text)`.

### UI utilities
- `.btn`: base with `display: inline-flex`, center alignment, `padding: 0.5rem 0.75rem`, `border-radius: 0.375rem`, `font-weight: 600`.
- Variants:
  - `.btn-primary`: background `var(--primary)`, white text.
  - `.btn-success`: background `var(--success)`, text `#0F0F14`.
  - `.btn-warning`: background `var(--warning)`, text `#171717`.
  - `.btn-aqua`: background `var(--aqua)`, text `#0F0F14`.
  - `.btn-link`: color `var(--link)`.
  - `.btn-purple`: background `var(--purple)`, white text.

Example:

```html
<button class="btn btn-primary">Action</button>
<button class="btn btn-success">Confirm</button>
<a class="btn btn-link" href="#">Learn more</a>
```

### Surface and card
- `.card`: background `var(--surface)`, border `1px solid rgba(0,0,0,0.06)`.

### Secondary text
- `.muted`: color `var(--text-secondary)`.

### Notes
- `globals.css` is imported in `app/layout.tsx`, so it applies across the app.
- Static assets are served from `public`, hence the font is referenced as `"/fonts/AnonymousPro-Regular.woff2"`.
