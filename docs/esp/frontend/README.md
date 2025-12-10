# Frontend (Next.js + Tailwind CSS)

## Visión general

- Framework: `Next.js 16` (App Router).
- UI: `Tailwind CSS 4` con `@import "tailwindcss"` en `app/globals.css`.
- Lenguaje: `JavaScript` con `JSX` para UI y `JS` para puentes/APIs.
- Diseño por variables CSS (`--bg`, `--surface`, `--text`) y selector de tema por atributo `data-theme`.
- Estructura bilingüe por subruta (`/` español, `/en` inglés).

## Estructura actual del proyecto

- `app/layout.jsx` — Layout raíz, importa estilos y navbar (`app/layout.tsx:1`, `app/layout.tsx:3`).
- `app/globals.css` — Estilos globales, Tailwind y variables de color (`app/globals.css:1`).
- `app/page.jsx` — Home en español con tarjetas de módulos (`app/page.tsx:1`).
- `app/en/page.jsx` — Home en inglés (`app/en/page.tsx:1`).
- `app/components/ModuleCard.jsx` — Card reutilizable (`app/components/ModuleCard.tsx:1`).
- `app/components/navbar/navbar.jsx` — Barra de navegación con enlaces, idioma y tema (`app/components/navbar/navbar.tsx:1`).
- `app/components/navbar/navlink.jsx` — Link sencillo (`app/components/navbar/navlink.tsx:1`).
- `tsconfig.json` — Configuración TS con `strict` y alias `@/*` (`tsconfig.json:1`).
- `eslint.config.mjs` — Lint con reglas de Next (`eslint.config.mjs:1`).
- `package.json` — Scripts `dev`, `build`, `start`, `lint` (`package.json:5`).

## Organización recomendada (JSX/JS)

- `app/` (JSX)
  - Páginas y layouts (`page.jsx`, `layout.jsx`).
  - Rutas por idioma: `app/page.jsx` (ES) y `app/en/page.jsx` (EN).
  - Componentes UI cercanos a páginas: `app/components/**` (`.jsx`).
- `lib/` (JS)
  - Utilidades y puentes: `lib/api.js`, `lib/storage.js`, `lib/routes.js`.
- `hooks/` (JS/JSX)
  - Hooks sin JSX en `.js` (estado/efectos, lógica).
  - Hooks con render o retorno JSX en `.jsx`.
- `public/` (assets)
  - Fuentes, imágenes y estáticos: `public/fonts/**`, `public/img/**`.
- `styles/` (CSS)
  - Estilos globales se mantienen en `app/globals.css`.
  - Si se requiere separar, usar `styles/tokens.css` para variables y `styles/utilities.css` para utilidades.

Notas sobre JSX/JS:
- Preferir `JSX` para cualquier interacción visual y componentes.
- Usar `JS` para puentes con backend (fetch, triggers, storage) y lógica sin JSX.
- Scripts de navegador viven en `public/js`.

## Lo implementado vs. lo planificable

Implementado:
- Layout base y navbar con selector de idioma por subruta y selector de tema (sol/luna).
- Tarjetas de módulos en Home ES/EN.
- Variables CSS para tema claro/oscuro y modo manual con `data-theme`.

Planificable en el tiempo:
- Hooks unificados
  - `useAuth` — sesión y token.
  - `useEntity` — CRUD genérico de entidades.
  - `useVersions` — versiones por entidad.
  - `useActivity` — registro de actividad.
- Cliente API central (`lib/api.js`)
  - Wrapper `fetch` con base URL y gestión de errores.
  - Tipado de respuestas y cuerpos.
- Internacionalización
  - Mantener subrutas `/` y `/en` para compatibilidad estática.
  - Añadir proveedor ligero de traducciones si crecen los textos.
- Componentes comunes
  - `Table`, `Form`, `Modal`, `Toast`.
  - `Button` y `Input` tipados.

## Compatibilidad para despliegue estático (Hostinger)

Objetivo: generar HTML estático y assets para hosting tradicional.

 - Exportación estática
  - Configurar `next.config.ts` con `output: 'export'`.
  - Construir y exportar: `next build` → `out/` (se sube al hosting).
  - Evitar APIs de servidor (`app/api/**`, RSC con acceso a backend interno).
- Rutas e idioma
- Usar rutas fijas: `app/page.jsx` y `app/en/page.jsx` pre-renderizadas.
  - Evitar rutas dinámicas no pre-generadas.
- Data fetching
  - Para datos dinámicos, usar `fetch` del navegador en componentes cliente (`"use client"`).
  - Asegurar CORS y URL absolutas del backend.
  - No depender de `getServerSideProps` ni de funciones de servidor.
- Assets y paths
  - Referenciar estáticos desde `public/` con paths absolutos (`/fonts/...`).
  - Verificar que las rutas generadas en `out/` funcionan sin proxy Node.
- Tailwind y estilos
  - Mantener `@import "tailwindcss"` en `app/globals.css` (v4).
  - Variables CSS para tema evitan dependencia de clases `dark:` y funcionan estáticamente.

## Archivos .js proyectados

- `next.config.ts`
  - Configuración para exportación estática y ajustes de assets.

- `postcss.config.js`
  - Activar el plugin de Tailwind v4.

- `public/js/theme-init.js`
  - Inicializa el tema antes del render para evitar “flash” de colores.
  - Carga recomendada en `app/layout.tsx` usando `next/script` con estrategia antes de interactivo.

- `public/js/analytics.js` (opcional)
  - Integración con analítica (por ejemplo, gtag). Se carga de forma diferida.

- `scripts/sitemap.js` (opcional)
  - Generación de `sitemap.xml` para sitio estático.
  - Puede ejecutarse antes de exportar para incluir `/` y `/en`.

### Listado ampliado de archivos .js

- Raíz del proyecto
  - `next.config.ts`
  - `postcss.config.js`
  - `eslint.config.mjs`

- `public/js` (scripts de navegador)
  - `theme-init.js`
  - `analytics.js` (opcional)
  - `gtag.js` (opcional)
  - `error-tracking.js` (opcional)
  - `perf-metrics.js` (opcional)
  - `monitoring.js` (opcional)
  - `locale-init.js` (opcional)
  - `polyfills.js` (opcional)

- `scripts` (utilidades de build/export)
  - `sitemap.js` (opcional)
  - `generate-feed.js` (opcional)
  - `preexport.js` (opcional)
  - `postexport-fix-paths.js` (opcional)
  - `verify-static-links.js` (opcional)

## Ubicación del JS en este proyecto

- Configuración de herramienta en la raíz (`next.config.ts`, `postcss.config.js`, `eslint.config.mjs`).
- Scripts de navegador en `public/js` y cargados con `next/script` o etiquetas `<script>` estáticas.
- Scripts de utilidades para generación y verificación en `scripts/` ejecutados antes/después de la exportación.
- Evitar `.js` dentro de `app/**` para componentes o lógica de UI; usar `TSX/TS`.

## Convenciones de código

- Componentes: funciones puras, props tipados, evitar estados globales sin necesidad.
- Estilos: usar variables CSS (`var(--bg)`, `var(--surface)`) y utilidades Tailwind.
- Tipos: centralizar en `lib/types.ts` y reexportar desde `index.ts` si es necesario.
- Alias: usar `@/*` para importar desde raíz (configurado en `tsconfig.json:28`).

## Roadmap sugerido

- Crear `lib/api.ts` con base URL configurable y manejo de errores.
- Implementar hooks `useAuth`, `useEntity`, `useVersions`, `useActivity` (TS).
- Añadir componentes comunes (tabla, formulario, modal) reutilizables.
- Configurar `next.config.ts` con `output: 'export'` y probar build estático.
- Añadir pruebas de integración ligeras en cliente (si procede) y lint tipo CI.

## Ejemplos de ubicación de archivos

- `app/components/navbar/navbar.jsx`
- `app/components/navbar/navlink.jsx`
- `app/components/ModuleCard.jsx`
- `app/globals.css`
- `app/layout.jsx`
- `app/page.jsx`
- `app/en/page.jsx`
- `public/js/theme-init.js`
- `public/js/analytics.js` (opcional)
- `lib/api.js`
- `lib/types.js` (opcional si se desea tipado por JSDoc)
- `lib/routes.js`
- `hooks/useAuth.js`
- `hooks/useEntity.js`
- `hooks/useVersions.js`
- `hooks/useActivity.js`
- `public/fonts/AnonymousPro-Regular.woff2`
