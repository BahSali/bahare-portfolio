# Bahare Salehi, portfolio

Astro + TypeScript + Tailwind CSS (v4). Fully static; no backend or database.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check Astro/TS files |

## Where content lives (`src/data/`)

- `site.ts`: name, role, intro, contact/CV/profile links, portrait, `reviewMode`
- `projects.ts`: the selected projects (text, themes, links, images)
- `emeralds.ts`: EMERALDS section
- `expertise.ts`: the three expertise areas
- `publications.ts`: publications (empty = placeholder rows shown)
- `nav.ts`: navigation

Any value left as `null` renders as a dashed, bracketed `[placeholder]`.
Images: put files in `src/assets/`, import them in the data file, and set `image.src`
(or use a `/public` path string). Placeholder blocks disappear automatically.

## Components (`src/components/`)

`Header`, `Footer`, `Container`, `SectionHeading`, `ProjectFeature`, `ImagePlaceholder`,
`ContactLinks`, `Placeholder`, `PlaceholderPage`.

## Deployment (GitHub Pages)

The site is built and published by `.github/workflows/deploy.yml` on every push to `main`.
It is served at https://bahsali.github.io/bahare-portfolio/.

- `astro.config.mjs` sets `site` and `base` (`/bahare-portfolio`) only for the GitHub Actions build, so
  `npm run dev` and a plain `npm run build` still use `/`.
- Root-relative links (`/projects/...`, `/media/...`) are prefixed with the base path after the build.
- To check the production build locally: `GITHUB_ACTIONS=true npm run build && GITHUB_ACTIONS=true npm run preview`,
  then open http://localhost:4321/bahare-portfolio/.

Before a public launch: set `reviewMode: false` in `src/data/site.ts` (removes the `noindex` tag) and
replace `public/robots.txt`. With a custom domain, set `site` to the domain and `base` to `/`.
