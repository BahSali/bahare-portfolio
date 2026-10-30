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
  /** Short venue label for compact lists. */
  shortVenue?: string;
  /** Original-language title, when `title` is a translated display title. */
  originalTitle?: string;
}

export const publications: Publication[] = [
  {
    slug: 'rines-2024',
    year: 2024,
    title: 'Estimating elastic properties of sediments by pseudo-wells generation utilizing simulated annealing optimization method',
    authors: 'Nasser Keshavarz Faraj Khah, Bahare Salehi, Pooria Kianoush, Shahab Varkouhi',
    venue: 'Results in Earth Sciences, 2024, 2, 100024',
    shortVenue: 'Results Earth Sci.',
    type: 'journal',
    projects: ['pseudo-well-seismic-inversion'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.rines.2024.100024' }],
  },
  {
    slug: 'model-cards-2026',
    year: 2026,
    title: 'Spatiotemporal Model Cards Enabling Future-Proof GeoAI Systems',
    authors:
      'Anita Graser, Anahid Wachsenegger, Christos Doulkeridis, George Theodoropoulos, Bahare Salehi, Melitta Dragaschnig, Stathis Antoniou, Yannis Theodoridis',
    venue: 'ACM Transactions on Spatial Algorithms and Systems, 12(2), Article 9, pp. 1–39, 7 May 2026',
    shortVenue: 'ACM TSAS',
    type: 'journal',
    projects: ['emeralds'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3809183' }],
  },
  {
    slug: 'icee-2019',
    year: 2019,
    title: 'Improving Urban Traffic Network Structure Using a Conditional Gradient Approach',
    originalTitle: 'بهبود ساختار شبکه ترافیک شهری با رویکرد گرادیان کاهش یافته شرطی',
    authors: 'Bahare Salehi, Seyed Mohammad Reza Moosavi',
    venue: 'ICEE 2019, 27th Iranian Conference on Electrical Engineering',
    type: 'conference',
    projects: ['network-design-optimization'],
  },
  {
    slug: 'gecco-2023',
    year: 2023,
    title: 'Analysing the Robustness of NSGA-II under Noise',
    authors: 'Duc-Cuong Dang, Andre Opris, Bahare Salehi, Dirk Sudholt',
    venue: "GECCO '23, Lisbon, Portugal, 15–19 July 2023",
    type: 'conference',
    projects: ['evolutionary-multi-objective-optimization'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3583131.3590421' }],
  },
  {
    slug: 'aaai-2023',
    year: 2023,
    title: 'A Proof That Using Crossover Can Guarantee Exponential Speed-Ups in Evolutionary Multi-Objective Optimisation',
    authors: 'Duc-Cuong Dang, Andre Opris, Bahare Salehi, Dirk Sudholt',
    venue: 'AAAI-23, Thirty-Seventh AAAI Conference on Artificial Intelligence',
    type: 'conference',
    projects: ['evolutionary-multi-objective-optimization'],
  },
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
    featured: false,
    projects: ['traffic-speed-estimation'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3849742.3856071' }],
  },
  {
    slug: 'sigspatial-2025',
    year: 2025,
    title: 'Estimating Urban Traffic Using Public Transit Buses as Probes',
    authors: 'Bahare Salehi, Mahmoud Sakr',
    venue: "ACM SIGSPATIAL '25, 33rd ACM International Conference on Advances in Geographic Information Systems, pp. 477–487, 12 December 2025",
    shortVenue: "ACM SIGSPATIAL '25",
    type: 'conference',
    featured: true,
    projects: ['traffic-speed-estimation'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3748636.3762759' }],
  },
  {
    slug: 'icdew-2024',
    year: 2024,
    title: 'Experimental Probing of Graph Convolutional Neural Networks Architectures for Traffic Analysis',
    authors: 'Bahare Salehi, Mahmoud Sakr',
    venue: "ICDEW '24, 40th IEEE International Conference on Data Engineering Workshops, 13–16 May 2024",
    shortVenue: "ICDEW '24",
    type: 'conference',
    projects: ['traffic-speed-estimation'],
    links: [{ label: 'DOI', href: 'https://doi.org/10.1109/ICDEW61823.2024.00009' }],
  },
];
