## **Estilos globales (`app/globals.css`)**

### Resumen
- Se importa Tailwind con `@import "tailwindcss"` para utilidades y preflight.
- Se define la tipografía local `Anonymous Pro` con `@font-face`.
- Se establecen variables CSS de color para tema claro/oscuro.
- Se incluyen utilidades de UI: `html, body`, `.btn` y variantes, `.card`, `.muted`.

### Fuente
- `font-family`: `"Anonymous Pro"`.
- `src`: `"/fonts/AnonymousPro-Regular.woff2"` (servida desde `public/fonts`).
- `font-weight`: `400`.
- `font-style`: `normal`.
- `font-display`: `swap`.

Uso:

```css
/* Aplicar la fuente globalmente (opcional) */
html, body {
  font-family: "Anonymous Pro", sans-serif;
}

/* O en un componente específico */
.title {
  font-family: "Anonymous Pro", sans-serif;
}
```

### Variables de color (tema claro)
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

### Modo oscuro (`prefers-color-scheme: dark`)
- `--bg`: `#0F0F14`
- `--surface`: `#1B1B21`
- `--surface-muted`: `#1B1B21`
- `--text`: `#FFFFFF`
- `--text-secondary`: `#B5B5C3`
- Acentos (`--primary`, `--success`, `--warning`, `--aqua`, `--link`, `--purple`) se mantienen.

### Estilos globales
- `html, body`: `background-color: var(--bg)`, `color: var(--text)`.

### Utilidades de UI
- `.btn`: base con `display: inline-flex`, centrado, `padding: 0.5rem 0.75rem`, `border-radius: 0.375rem`, `font-weight: 600`.
- Variantes:
  - `.btn-primary`: fondo `var(--primary)`, texto blanco.
  - `.btn-success`: fondo `var(--success)`, texto `#0F0F14`.
  - `.btn-warning`: fondo `var(--warning)`, texto `#171717`.
  - `.btn-aqua`: fondo `var(--aqua)`, texto `#0F0F14`.
  - `.btn-link`: color `var(--link)`.
  - `.btn-purple`: fondo `var(--purple)`, texto blanco.

Ejemplo:

```html
<button class="btn btn-primary">Acción</button>
<button class="btn btn-success">Confirmar</button>
<a class="btn btn-link" href="#">Ver más</a>
```

### Superficie y tarjeta
- `.card`: fondo `var(--surface)`, borde `1px solid rgba(0,0,0,0.06)`.

### Texto secundario
- `.muted`: color `var(--text-secondary)`.

### Notas
- `globals.css` se importa en `app/layout.tsx`, por lo que aplica a toda la app.
- Los recursos estáticos se sirven desde `public`, de ahí que la fuente se referencie como `"/fonts/AnonymousPro-Regular.woff2"`.
