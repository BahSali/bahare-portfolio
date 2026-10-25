/**
 * Projects. Add, remove or reorder entries freely; pages are generated from this list.
 *
 * - `tier` sets visual weight on /projects: 'lead' (large), 'standard' (medium), 'minor' (compact row).
 * - `homeFeatured` selects the 2–3 projects shown on the Home page.
 * - Any field left `null` / `[]` renders as a clearly marked placeholder on the detail page.
 * - `publications` lists publication slugs (see publications.ts) for cross-linking.
 */
export type ProjectCategory = 'phd' | 'application' | 'thesis' | 'earlier';
export type ProjectTier = 'lead' | 'standard' | 'minor';

export const categoryLabels: Record<ProjectCategory, string> = {
  phd: 'PhD research',
  application: 'Applied analytics',
  thesis: "Master's thesis",
  earlier: 'Earlier research',
};

export interface Link { label: string; href: string }

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tier: ProjectTier;
  homeFeatured: boolean;
  /** One neutral line. Replace with the real summary. */
  summary: string;
  period: string | null;
  role: string | null;
  problem: string | null;
  approach: string | null;
  contribution: string | null;
  technologies: string[];
  results: string | null;
  publications: string[];
  links: Link[];
  image: { src: ImageMetadata | string | null; alt: string; placeholderLabel: string };
}

const empty: Pick<
  Project,
  'period' | 'role' | 'problem' | 'approach' | 'contribution' | 'technologies' | 'results' | 'publications' | 'links'
> = {
  period: null,
  role: null,
  problem: null,
  approach: null,
  contribution: null,
  technologies: [],
  results: null,
  publications: [],
  links: [],
};

export const projects: Project[] = [
  {
    ...empty,
    slug: 'traffic-speed-estimation',
    title: 'Citywide Traffic Speed Estimation using public transit observations',
    category: 'phd',
    tier: 'lead',
    homeFeatured: true,
    summary:
      'Estimating traffic speeds across a whole city from observations collected by public transit vehicles.',
    image: {
      src: null,
      alt: 'Illustration for the traffic speed estimation project',
      placeholderLabel: 'Project image: speed estimation map or figure',
    },
  },
  {
    ...empty,
    slug: 'traffic-analytics-platform',
    title: 'Interactive Traffic Analytics Platform',
    category: 'application',
    tier: 'lead',
    homeFeatured: true,
    summary: 'An interactive application for exploring and analysing traffic data.',
    image: {
      src: null,
      alt: 'Screenshot of the interactive traffic analytics platform',
      placeholderLabel: 'Project image: platform screenshot',
    },
  },
  {
    ...empty,
    slug: 'network-optimization',
    title: 'Network Optimization and Graph Algorithms',
    category: 'thesis',
    tier: 'standard',
    homeFeatured: true,
    summary: "Master's thesis work on optimization and graph algorithms for network problems.",
    image: {
      src: null,
      alt: 'Figure from the network optimization project',
      placeholderLabel: 'Project image: network or graph figure',
    },
  },
  {
    ...empty,
    slug: 'genetic-algorithms-artificial-wells',
    title: 'Genetic Algorithms and Artificial Well Problems',
    category: 'earlier',
    tier: 'minor',
    homeFeatured: false,
    summary: 'Earlier research involving genetic algorithms and artificial well problems.',
    image: {
      src: null,
      alt: 'Figure from the genetic algorithms research',
      placeholderLabel: 'Project image: figure',
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
