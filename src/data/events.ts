/**
 * Research events for the gallery on the Research page. Add entries newest-first; an empty array
 * shows a placeholder. Put photographs in src/assets/events/ and import them here.
 *
 * `kind` keeps the role honest:
 *  - 'Presentation'  a talk or presentation I gave
 *  - 'Demonstration' a project demonstration or workshop session
 *  - 'Participation' attended or took part without presenting
 *
 * `photos`: the first is the lead image; up to two more are shown beside it.
 */
import ebdvfPresenting from '~/assets/events/ebdvf-2025-presenting.jpg';
import ebdvfGroup from '~/assets/events/ebdvf-2025-group.jpg';
import ebdvfPoster from '~/assets/events/ebdvf-2025-poster.jpg';
import presenting from '~/assets/events/future-ready-presenting.jpg';
import group from '~/assets/events/future-ready-group.jpg';
import panel from '~/assets/events/future-ready-panel.jpg';

export type EventKind = 'Presentation' | 'Demonstration' | 'Participation';

export interface EventPhoto { src: ImageMetadata; alt: string }

export interface ResearchEvent {
  title: string;
  /** Optional second line, e.g. the session title. */
  subtitle?: string;
  kind: EventKind;
  /** Left out until confirmed. */
  year?: number;
  location?: string;
  /** One or two sentences on my involvement. */
  involvement: string;
  photos: EventPhoto[];
  link?: { label: string; href: string };
}

export const events: ResearchEvent[] = [
  {
    title: 'European Big Data Value Forum 2025 (EBDVF)',
    subtitle: 'Shaping the Future of Extreme-scale Urban Mobility Data Analytics as a Service: The EMERALDS approach',
    kind: 'Presentation',
    year: 2025,
    location: 'Copenhagen, Denmark',
    involvement:
      'Speaker in the EMERALDS final-event session on 13 November, presenting ULB’s traffic estimation work to the project partners and the forum audience.',
    photos: [
      { src: ebdvfPresenting, alt: 'Presenting ULB’s York traffic estimation case to the session audience' },
      { src: ebdvfGroup, alt: 'The EMERALDS session speakers and partners in front of the title slide of the final event' },
      { src: ebdvfPoster, alt: 'Session poster listing the speakers of the EMERALDS session at EBDVF 2025' },
    ],
    link: { label: 'EBDVF 2025', href: 'https://ebdvf.eu' },
  },
  {
    title: 'Future-Ready: On-Demand Solutions with AI, Data, and Robotics',
    subtitle: 'From Extreme Data to AI Insights: The DataNexus Approach Across the Compute Continuum',
    kind: 'Presentation',
    involvement:
      'Presented the EMERALDS project in a joint session with the EXTRACT, Graph-Massivizer, NEARDATA and SYCLOPS projects, organized by AI on Demand and the Adra association.',
    photos: [
      { src: presenting, alt: 'Presenting the EMERALDS project goals at the lectern, with the other panelists seated behind' },
      { src: group, alt: 'The session speakers standing together on stage in front of the Future-Ready title slide' },
      { src: panel, alt: 'Panel on stage during the NEARDATA use cases slide' },
    ],
  },
];
