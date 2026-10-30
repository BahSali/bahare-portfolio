import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// GitHub Pages serves this repository at https://bahsali.github.io/bahare-portfolio/.
// The base path is applied only for the GitHub Actions build, so local development stays at "/".
const onPages = process.env.GITHUB_ACTIONS === 'true';
const site = 'https://bahsali.github.io';
const base = onPages ? '/bahare-portfolio' : '/';

/**
 * Root-relative links ("/projects/…", "/media/…", "/favicon.svg") are written throughout the pages and
 * data files. After the build, prefix them with the base path so they also resolve under /bahare-portfolio/.
 * Astro's own asset URLs (/_astro/…) already include the base and are left alone.
 */
function prefixBase() {
  return {
    name: 'prefix-base-path',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (base === '/') return;
        const root = fileURLToPath(dir);
        const pattern = new RegExp(`((?:href|src|srcset|poster|action)=["'])/(?!/|${base.slice(1)}/)`, 'g');
        const walk = async (d) => {
          for (const entry of await readdir(d, { withFileTypes: true })) {
            const p = join(d, entry.name);
            if (entry.isDirectory()) await walk(p);
            else if (entry.name.endsWith('.html')) {
              const html = await readFile(p, 'utf8');
              const out = html.replace(pattern, `$1${base}/`);
              if (out !== html) await writeFile(p, out);
            }
          }
        };
        await walk(root);
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  redirects: { '/experience': base === '/' ? '/journey' : `${base}/journey` },
  integrations: [prefixBase()],
  vite: {
    plugins: [tailwindcss()],
  },
});
