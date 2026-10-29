import portrait from '~/assets/bahare-portrait.jpg';

/**
 * Site-wide content. Anything set to `null` is rendered as a clearly marked
 * placeholder (or hidden) until the real value is added here.
 */
export const site = {
  name: 'Bahare Salehi',
  role: 'Data Scientist',
  subtitle: 'Machine Learning · Applied Research · Data Systems',
  affiliation: 'PhD Researcher · Université libre de Bruxelles',
  intro:
    'I work with machine learning, data analysis, and optimization, combining academic research with hands-on experience in enterprise databases and real-world data systems.',

  // While true, pages carry <meta name="robots" content="noindex">.
  // Remember to also replace public/robots.txt when launching.
  reviewMode: true,

  contact: {
    /**
     * Email addresses are stored reversed and base64-encoded so that neither the repository nor the built
     * HTML contains them in plain text. They are decoded in the visitor's browser when "Reveal" is clicked.
     * To change one: base64-encode the reversed address (e.g. `btoa([...addr].reverse().join(''))`).
     */
    emails: [
      { label: 'ULB', code: 'ZWIuYmx1QGVyYWhhYi5paGVsYXM=' },
      { label: 'Personal', code: 'bW9jLmxpYW1nQHJhYWhhYi5paGVsYXM=' },
    ] as { label: string; code: string }[],
    cvUrl: null as string | null, // e.g. '/cv/bahare-salehi-cv.pdf' (place the file in /public/cv/)
    linkedin: 'https://www.linkedin.com/in/bahare-salehi-b5765ab0/' as string | null,
    github: null as string | null,
    scholar: 'https://scholar.google.com/citations?user=nGRGWH8AAAAJ&hl=en&oi=ao' as string | null,
    orcid: 'https://orcid.org/0009-0006-4932-5481' as string | null,
  },

  // Portrait shown in the hero. Set `src` (a file in /src/assets or /public) to replace the placeholder.
  portrait: {
    src: portrait as ImageMetadata | string | null,
    alt: 'Portrait of Bahare Salehi',
    placeholderLabel: 'Portrait',
  },
};

export type Site = typeof site;
