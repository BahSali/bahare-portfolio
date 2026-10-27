import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output (the default) is what Cloudflare Pages serves.
// Once the production domain is known, add `site: 'https://…'` for canonical URLs and a sitemap.
export default defineConfig({
  redirects: { '/experience': '/journey' },
  vite: {
    plugins: [tailwindcss()],
  },
});
