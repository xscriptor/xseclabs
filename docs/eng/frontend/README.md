# Frontend (Next.js + Tailwind CSS)

## Overview

- Framework: `Next.js 16` (App Router).
- UI: `Tailwind CSS 4` with `@import "tailwindcss"` in `app/globals.css`.
- Language: `JavaScript` with `JSX` for UI and `JS` for bridges/APIs.
- Design via CSS variables (`--bg`, `--surface`, `--text`) and theme selector using the `data-theme` attribute.
- Bilingual structure by subroute (`/` Spanish, `/en` English).

## Current Project Structure

- `app/layout.jsx` — Root layout, imports styles and navbar (`app/layout.tsx:1`, `app/layout.tsx:3`).
- `app/globals.css` — Global styles, Tailwind and color variables (`app/globals.css:1`).
- `app/page.jsx` — Spanish home with module cards (`app/page.tsx:1`).
- `app/en/page.jsx` — English home (`app/en/page.tsx:1`).
- `app/components/ModuleCard.jsx` — Reusable card (`app/components/ModuleCard.tsx:1`).
- `app/components/navbar/navbar.jsx` — Navigation bar with links, language and theme (`app/components/navbar/navbar.tsx:1`).
- `app/components/navbar/navlink.jsx` — Simple link (`app/components/navbar/navlink.tsx:1`).
- `tsconfig.json` — TS configuration with `strict` and `@/*` alias (`tsconfig.json:1`).
- `eslint.config.mjs` — Next lint rules (`eslint.config.mjs:1`).
- `package.json` — Scripts `dev`, `build`, `start`, `lint` (`package.json:5`).

## Recommended Organization (JSX/JS)

- `app/` (JSX)
  - Pages and layouts (`page.jsx`, `layout.jsx`).
  - Language routes: `app/page.jsx` (ES) and `app/en/page.jsx` (EN).
  - UI components close to pages: `app/components/**` (`.jsx`).
- `lib/` (JS)
  - Utilities and bridges: `lib/api.js`, `lib/storage.js`, `lib/routes.js`.
- `hooks/` (JS/JSX)
  - Hooks without JSX in `.js` (state/effects, logic).
  - Hooks that render or return JSX in `.jsx`.
- `public/` (assets)
  - Fonts, images and static assets: `public/fonts/**`, `public/img/**`.
- `styles/` (CSS)
  - Keep global styles in `app/globals.css`.
  - If needed, use `styles/tokens.css` for variables and `styles/utilities.css` for utilities.

Notes on JSX/JS:
- Prefer `JSX` for any visual interaction and components.
- Use `JS` for backend bridges (fetch, triggers, storage) and logic without JSX.
- Browser scripts live in `public/js`.

## Implemented vs. Planned

Implemented:
- Base layout and navbar with subroute language selector and theme selector (sun/moon).
- Module cards in ES/EN Home.
- CSS variables for light/dark theme and manual mode via `data-theme`.

Planned over time:
- Unified hooks
  - `useAuth` — session and token.
  - `useEntity` — generic entity CRUD.
  - `useVersions` — entity versioning.
  - `useActivity` — activity log.
- Central API client (`lib/api.js`)
  - `fetch` wrapper with base URL and error handling.
  - Response and payload typing.
- Internationalization
  - Keep subroutes `/` and `/en` for static compatibility.
  - Add a lightweight translation provider if texts grow.
- Common components
  - `Table`, `Form`, `Modal`, `Toast`.
  - Typed `Button` and `Input`.

## Static Deployment Compatibility (Hostinger)

Goal: generate static HTML and assets for traditional hosting.

- Static export
  - Configure `next.config.ts` with `output: 'export'`.
  - Build and export: `next build` → `out/` (upload to hosting).
  - Avoid server APIs (`app/api/**`, RSC accessing internal backend).
- Routes and language
  - Use fixed routes: `app/page.jsx` and `app/en/page.jsx` pre-rendered.
  - Avoid non-pre-generated dynamic routes.
- Data fetching
  - For dynamic data, use browser `fetch` in client components (`"use client"`).
  - Ensure CORS and absolute backend URLs.
  - Do not rely on `getServerSideProps` or server functions.
- Assets and paths
  - Reference statics from `public/` with absolute paths (`/fonts/...`).
  - Verify that routes generated in `out/` work without a Node proxy.
- Tailwind and styles
  - Keep `@import "tailwindcss"` in `app/globals.css` (v4).
  - CSS variables for theme avoid `dark:` dependency and work statically.

## Projected .js Files

- `next.config.ts`
  - Configuration for static export and asset adjustments.

- `postcss.config.js`
  - Enable the Tailwind v4 plugin.

- `public/js/theme-init.js`
  - Initializes theme before render to avoid color flash.
  - Recommended load in `app/layout.tsx` using `next/script` before interactive.

- `public/js/analytics.js` (optional)
  - Analytics integration (e.g., gtag). Loaded deferred.

- `scripts/sitemap.js` (optional)
  - `sitemap.xml` generation for static site.
  - Run before export to include `/` and `/en`.

### Extended list of .js files

- Project root
  - `next.config.ts`
  - `postcss.config.js`
  - `eslint.config.mjs`

- `public/js` (browser scripts)
  - `theme-init.js`
  - `analytics.js` (optional)
  - `gtag.js` (optional)
  - `error-tracking.js` (optional)
  - `perf-metrics.js` (optional)
  - `monitoring.js` (optional)
  - `locale-init.js` (optional)
  - `polyfills.js` (optional)

- `scripts` (build/export utilities)
  - `sitemap.js` (optional)
  - `generate-feed.js` (optional)
  - `preexport.js` (optional)
  - `postexport-fix-paths.js` (optional)
  - `verify-static-links.js` (optional)

## Where JS lives in this project

- Tooling configuration at root (`next.config.ts`, `postcss.config.js`, `eslint.config.mjs`).
- Browser scripts in `public/js` loaded with `next/script` or static `<script>` tags.
- Utility scripts for generation and verification in `scripts/`, executed before/after export.
- Avoid `.js` inside `app/**` for components or UI logic; use `TSX/TS`.

## Code Conventions

- Components: pure functions, typed props, avoid unnecessary global state.
- Styles: use CSS variables (`var(--bg)`, `var(--surface)`) and Tailwind utilities.
- Types: centralize in `lib/types.ts` and re-export from `index.ts` if needed.
- Alias: use `@/*` to import from root (configured in `tsconfig.json:28`).

## Suggested Roadmap

- Create `lib/api.ts` with configurable base URL and error handling.
- Implement `useAuth`, `useEntity`, `useVersions`, `useActivity` hooks (TS).
- Add common reusable components (table, form, modal).
- Configure `next.config.ts` with `output: 'export'` and test static build.
- Add light client integration tests (if applicable) and CI lint.

## Example file locations

- `app/components/navbar/navbar.jsx`
- `app/components/navbar/navlink.jsx`
- `app/components/ModuleCard.jsx`
- `app/globals.css`
- `app/layout.jsx`
- `app/page.jsx`
- `app/en/page.jsx`
- `public/js/theme-init.js`
- `public/js/analytics.js` (optional)
- `lib/api.js`
- `lib/types.js` (optional if using JSDoc typing)
- `lib/routes.js`
- `hooks/useAuth.js`
- `hooks/useEntity.js`
- `hooks/useVersions.js`
- `hooks/useActivity.js`
- `public/fonts/AnonymousPro-Regular.woff2`
