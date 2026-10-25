/**
 * Publications. Add real entries here; newest-first grouping is automatic.
 * While the array is empty, pages show clearly marked placeholders.
 * `projects` lists project slugs (see projects.ts) for cross-linking.
 * `featured: true` shows the entry in the Home page selection (keep to 2–3).
 */
export type PublicationType = 'journal' | 'conference' | 'preprint' | 'thesis' | 'other';

export const publicationTypeLabels: Record<PublicationType, string> = {
  journal: 'Journal article',
  conference: 'Conference paper',
  preprint: 'Preprint',
  thesis: 'Thesis',
  other: 'Other',
};

export interface Publication {
  slug: string;
  year: number;
  title: string;
  /** null renders a placeholder. */
  authors: string | null;
  venue: string;
  type: PublicationType;
  featured?: boolean;
  projects?: string[];
  links?: { label: string; href: string }[];
}

export const publications: Publication[] = [
  {
    slug: 'sigspatial-2026',
    year: 2026,
    title: 'Spatiotemporal Citywide Traffic Speed Estimation via Public Transit Bus Probes',
    authors: 'Bahare Salehi, Mahmoud Sakr',
    venue: "ACM SIGSPATIAL '26, Riverside, CA, USA, 3–6 November 2026",
    type: 'conference',
    featured: true,
    projects: ['traffic-speed-estimation'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3841645.3844200' }],
  },
  {
    slug: 'urban-ai-2026',
    year: 2026,
    title: 'High-Resolution Citywide Traffic Speed Estimation from Bus Probe Observations with a Gated Dual-Branch GCNN',
    authors: 'Bahare Salehi, Mahmoud Sakr',
    venue: "Urban-AI '26, Riverside, CA, USA, 3–6 November 2026",
    type: 'conference',
    featured: true,
    projects: ['traffic-speed-estimation'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3849742.3856071' }],
  },
  {
    slug: 'sigspatial-2025',
    year: 2025,
    title: 'Estimating Urban Traffic Using Public Transit Buses as Probes',
    authors: null,
    venue: "ACM SIGSPATIAL '25",
    type: 'conference',
    featured: true,
    projects: ['traffic-speed-estimation'],
  },
  {
    slug: 'icdew-2024',
    year: 2024,
    title: 'Experimental Probing of Graph Convolutional Neural Networks Architectures for Traffic Analysis',
    authors: null,
    venue: "ICDEW '24",
    type: 'conference',
    projects: ['traffic-speed-estimation'],
  },
];
