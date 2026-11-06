import { projects, type CardItem } from './projects';

/**
 * Card copy shared by the Home page and the Projects listing, in display order.
 * Project detail pages keep their own titles and text.
 */
const copy = [
  {
    slug: 'traffic-speed-estimation',
    label: 'PhD Research',
    title: 'Citywide Traffic Speed Estimation',
    summary: 'Developing machine learning methods to estimate citywide traffic speeds using real-world public transit data.',
    demoHash: '#application',
  },
  {
    slug: 'emeralds',
    label: 'Horizon Europe Project',
    title: 'EMERALDS — Urban Mobility Analytics',
    summary:
      'A European project developing an urban mobility management toolkit, with my contribution focused on higher-resolution traffic estimation across multiple cities.',
    demoHash: '#applications',
  },
  {
    slug: 'evolutionary-multi-objective-optimization',
    label: 'Research Visit · University of Passau',
    title: 'Runtime Analysis of Evolutionary Algorithms',
    summary: 'Investigating the efficiency and runtime behavior of evolutionary optimization algorithms.',
  },
  {
    slug: 'network-design-optimization',
    label: "Master's Thesis",
    title: 'Multi-Objective Road Network Design',
    summary: 'Developed an optimization method to improve road networks by balancing travel time and infrastructure costs.',
  },
  {
    slug: 'enterprise-data-erp',
    label: 'Industry Experience',
    title: 'ERP Process Analysis & Customization',
    summary: 'Analyzed business processes and adapted ERP workflows, forms, and reports to departmental needs.',
  },
  {
    slug: 'pseudo-well-seismic-inversion',
    label: 'Applied Research · RIPI',
    title: 'Pseudo-Well Generation from Seismic Data',
    summary: 'Developed an optimization method and desktop application to estimate underground rock properties from seismic data.',
  },
] as const;

export interface ProjectCardData extends CardItem {
  slug: string;
  /** Link to the demo on the project page; set only where a demo exists. */
  demoHref: string | null;
}

/** Card data for one project: link and image come from the project, wording from `copy`. */
const resolve = (c: (typeof copy)[number]): ProjectCardData => {
  const p = projects.find((x) => x.slug === c.slug)!;
  const hasDemo = !!(p.hasDemo || p.application);
  return {
    slug: c.slug,
    href: `/projects/${c.slug}`,
    label: c.label,
    title: c.title,
    summary: c.summary,
    image: p.cardImage ?? p.image,
    demoHref: hasDemo && 'demoHash' in c ? `/projects/${c.slug}${c.demoHash}` : null,
  };
};

export const projectCards: ProjectCardData[] = copy.map(resolve);
/** The first three cards are featured on the Home page. */
export const homeCards: ProjectCardData[] = projectCards.slice(0, 3);
