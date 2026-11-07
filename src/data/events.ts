/**
 * Research events for the gallery on the Research page. Add entries newest-first; an empty array
 * shows a placeholder. Put photographs in src/assets/events/ and import them here.
 *
 * `kind` keeps the role honest:
 *  - 'Presentation'  a talk or presentation I gave
 *  - 'Demonstration' a project demonstration or workshop session
 *  - 'Participation' attended or took part without presenting
 *  - 'Organization'  helped organize the event (committee member)
 *
 * `photos`: the first is the lead image; up to two more are shown beside it.
 */
import mdmGroup from '~/assets/events/mdm-2024-group.jpg';
import plenary from '~/assets/events/emeralds-plenary-delft-2023.jpg';
import ebdvfPresenting from '~/assets/events/ebdvf-2025-presenting.jpg';
import ebdvfGroup from '~/assets/events/ebdvf-2025-group.jpg';
import ebdvfPoster from '~/assets/events/ebdvf-2025-poster.jpg';
import presenting from '~/assets/events/future-ready-presenting.jpg';
import group from '~/assets/events/future-ready-group.jpg';
import panel from '~/assets/events/future-ready-panel.jpg';

export type EventKind = 'Presentation' | 'Demonstration' | 'Participation' | 'Organization' | 'Conference Organization' | 'Project Meetings';

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
    title: 'European Big Data Value Forum 2025',
    kind: 'Presentation',
    year: 2025,
    location: 'Copenhagen',
    involvement:
      'Presented ULB’s work on data fusion, compression, and traffic estimation during the EMERALDS final-event session at EBDVF 2025.',
    photos: [
      { src: ebdvfPresenting, alt: 'Presenting ULB’s York traffic estimation case to the session audience' },
      { src: ebdvfGroup, alt: 'The EMERALDS session speakers and partners in front of the title slide of the final event' },
      { src: ebdvfPoster, alt: 'Session poster listing the speakers of the EMERALDS session at EBDVF 2025' },
    ],
    link: { label: 'EBDVF 2025', href: 'https://ebdvf.eu' },
  },
  {
    title: 'Future-Ready: AI, Data and Robotics',
    kind: 'Presentation',
    year: 2025,
    location: 'Brussels',
    involvement:
      'Presented the EMERALDS project in a joint session on AI, data, and robotics alongside other European research projects.',
    photos: [
      { src: presenting, alt: 'Presenting the EMERALDS project goals at the lectern, with the other panelists seated behind' },
      { src: group, alt: 'The session speakers standing together on stage in front of the Future-Ready title slide' },
      { src: panel, alt: 'Panel on stage during the NEARDATA use cases slide' },
    ],
  },
  {
    title: 'IEEE MDM 2024',
    kind: 'Conference Organization',
    year: 2024,
    location: 'Brussels',
    involvement: 'Served as Local and Financial Organization Chair for IEEE MDM 2024 in Brussels.',
    photos: [
      { src: mdmGroup, alt: 'Group photo of the MDM 2024 participants on the Grand Place in Brussels' },
    ],
    link: { label: 'MDM 2024 website', href: 'https://mdm2024.github.io' },
  },
  {
    title: 'EMERALDS General Assembly Meetings',
    kind: 'Project Meetings',
    location: 'Europe',
    involvement:
      'Participated in EMERALDS General Assembly meetings, presenting ULB’s work and discussing project progress with consortium partners.',
    photos: [
      { src: plenary, alt: 'EMERALDS consortium members on a staircase next to the project roll-up banner at the second plenary meeting in Delft' },
    ],
  },
];
