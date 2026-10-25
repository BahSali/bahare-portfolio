import type { ImageRef } from './projects';

/** Single source for the EMERALDS section (Experience page, timeline, Home card, Research). */
export const emeralds = {
  title: 'EMERALDS',
  fullTitle: 'EU Horizon Europe EMERALDS',
  eyebrow: 'European research collaboration · Horizon Europe',
  /** Keep to what can be stated factually; extend once the details are confirmed. */
  body: 'Participation in the EU Horizon Europe EMERALDS project.',
  /** How this work relates to the PhD research. */
  relation:
    'The technical work is closely related to my PhD research, adapted and evaluated with other datasets.',
  relatedProject: 'traffic-speed-estimation',
  /** What the involvement emphasizes. */
  focus: [
    'Working in an international, multi-partner research project',
    'Applying research to new datasets and project requirements',
    'Team collaboration and technical reporting',
    'Presentations, speaking engagements and dissemination activities',
  ],
  /** Presentation photos, posters and similar material. Set `src` to replace a placeholder. */
  gallery: [
    { src: null, alt: 'Presentation at an EMERALDS event', placeholderLabel: 'Presentation photo' },
    { src: null, alt: 'EMERALDS poster', placeholderLabel: 'Poster' },
    { src: null, alt: 'EMERALDS project material', placeholderLabel: 'Project photo or deliverable' },
  ] as ImageRef[],
  /** Official project page. */
  link: null as { label: string; href: string } | null,
  /** Selected public deliverables: { label, href }. */
  deliverables: [] as { label: string; href: string }[],
  /** Card image for the Home "Selected Work" grid. */
  image: {
    src: null,
    alt: 'EMERALDS project',
    placeholderLabel: 'Project image: presentation or poster',
  } as ImageRef,
  homeLabel: 'Horizon Europe project',
  href: '/experience#emeralds',
};
