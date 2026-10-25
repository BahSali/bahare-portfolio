/**
 * Research projects. Add, remove or reorder entries freely; pages are generated from this list.
 *
 * - `tier`: 'lead' gets the prominent block on /projects; 'standard' entries form the gallery below it.
 * - `homeFeatured` selects entries for the Home "Selected Work" cards (EMERALDS is added from emeralds.ts).
 * - Fields left `null` / `[]` render as clearly marked placeholders on the detail page.
 * - `publications` lists publication slugs (see publications.ts) for cross-linking.
 * - `application` adds an "Interactive Application" section (screenshots + demo link) to the detail page.
 */
export type ProjectCategory = 'phd' | 'collaboration' | 'thesis' | 'applied';
export type ProjectTier = 'lead' | 'standard';

export const categoryLabels: Record<ProjectCategory, string> = {
  phd: 'PhD research',
  collaboration: 'University of Passau',
  thesis: "Master's thesis",
  applied: 'Earlier applied research',
};

export interface Link { label: string; href: string }
export interface ImageRef { src: ImageMetadata | string | null; alt: string; placeholderLabel: string }

export interface ProjectApplication {
  title: string;
  summary: string;
  demoUrl: string | null;
  screenshots: ImageRef[];
}

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
  overview: string | null;
  methodology: string | null;
  contribution: string | null;
  technologies: string[];
  results: string | null;
  publications: string[];
  links: Link[];
  image: ImageRef;
  application?: ProjectApplication;
}

const empty: Pick<
  Project,
  'period' | 'role' | 'overview' | 'methodology' | 'contribution' | 'technologies' | 'results' | 'publications' | 'links'
> = {
  period: null,
  role: null,
  overview: null,
  methodology: null,
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
    title: 'Citywide Traffic Speed Estimation',
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
    application: {
      title: 'Interactive Traffic Analytics Platform',
      summary: 'An interactive application for exploring and analysing traffic data.',
      demoUrl: null,
      screenshots: [
        { src: null, alt: 'Main view of the analytics platform', placeholderLabel: 'Screenshot: main view' },
        { src: null, alt: 'Second view of the analytics platform', placeholderLabel: 'Screenshot: detail view' },
        { src: null, alt: 'Third view of the analytics platform', placeholderLabel: 'Screenshot: analysis view' },
      ],
    },
  },
  {
    ...empty,
    slug: 'evolutionary-multi-objective-optimization',
    title: 'Evolutionary Multi-Objective Optimization',
    category: 'collaboration',
    tier: 'standard',
    homeFeatured: true,
    summary: 'Research with the University of Passau on evolutionary multi-objective optimization, including NSGA-II.',
    image: {
      src: null,
      alt: 'Figure from the evolutionary multi-objective optimization research',
      placeholderLabel: 'Project image: figure',
    },
  },
  {
    ...empty,
    slug: 'network-design-optimization',
    title: 'Network Design Optimization',
    category: 'thesis',
    tier: 'standard',
    homeFeatured: false,
    summary: "Master's thesis research on network design, graph algorithms and optimization.",
    image: {
      src: null,
      alt: 'Figure from the network design optimization thesis',
      placeholderLabel: 'Project image: network or graph figure',
    },
  },
  {
    ...empty,
    slug: 'artificial-well-hydrocarbon-research',
    title: 'Artificial Well / Hydrocarbon Research',
    category: 'applied',
    tier: 'standard',
    homeFeatured: false,
    summary: 'Earlier applied research involving computational methods and optimization.',
    image: {
      src: null,
      alt: 'Figure from the artificial well and hydrocarbon research',
      placeholderLabel: 'Project image: figure',
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Shape shared by every overview card (projects and experience items). */
export interface CardItem {
  href: string;
  label: string;
  title: string;
  summary: string;
  image: ImageRef;
  /** Link text, defaults to 'View project'. */
  cta?: string;
}

export const projectCard = (p: Project): CardItem => ({
  href: `/projects/${p.slug}`,
  label: categoryLabels[p.category],
  title: p.title,
  summary: p.summary,
  image: p.image,
});
