/**
 * Selected projects. Titles come from the brief; everything else is a neutral
 * placeholder to be replaced. Fields left `null` render as marked placeholders.
 * `image.src` can point to a file in /src/assets (imported) or /public.
 */
export interface Project {
  slug: string;
  title: string;
  /** One neutral line describing the topic. Replace with the real summary. */
  summary: string;
  themes: string[];
  year: string | null;
  role: string | null;
  link: { label: string; href: string } | null;
  image: { src: string | null; alt: string; placeholderLabel: string };
}

export const projects: Project[] = [
  {
    slug: 'traffic-speed-estimation',
    title: 'Citywide Traffic Speed Estimation using public transit observations',
    summary:
      'Estimating traffic speeds across a whole city from observations collected by public transit vehicles.',
    themes: ['Spatiotemporal modeling', 'Machine learning'],
    year: null,
    role: null,
    link: null,
    image: {
      src: null,
      alt: 'Illustration for the traffic speed estimation project',
      placeholderLabel: 'Project image: speed estimation map or figure',
    },
  },
  {
    slug: 'traffic-analytics-platform',
    title: 'Interactive Traffic Analytics Platform',
    summary:
      'An interactive platform for exploring and analysing traffic data.',
    themes: ['Applied data science', 'Analytics'],
    year: null,
    role: null,
    link: null,
    image: {
      src: null,
      alt: 'Screenshot of the interactive traffic analytics platform',
      placeholderLabel: 'Project image: platform screenshot',
    },
  },
  {
    slug: 'network-optimization',
    title: 'Network Optimization and Graph Algorithms',
    summary:
      'Optimization and graph-algorithm work on network-structured problems.',
    themes: ['Optimization', 'Graph algorithms'],
    year: null,
    role: null,
    link: null,
    image: {
      src: null,
      alt: 'Figure from the network optimization project',
      placeholderLabel: 'Project image: network or graph figure',
    },
  },
];
