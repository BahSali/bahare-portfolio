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

## Cloudflare Pages (not deployed yet)

Build command `npm run build`, output directory `dist`. Before launch:
set `reviewMode: false` in `site.ts`, replace `public/robots.txt`, and add `site:` in `astro.config.mjs`.
