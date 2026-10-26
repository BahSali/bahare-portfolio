/**
 * Education. Feeds the Experience timeline, the Research summaries and the About page.
 * `order` sets sequence on the timeline while dates are missing (lower = earlier);
 * once every timeline entry has a `start`, the timeline switches to true chronology.
 * `start`/`end` are years; `end: 'present'` for ongoing. Use null while unknown.
 */
import type { TimelineBase } from '~/lib/timeline';

export interface EducationEntry extends TimelineBase {
  /** Degree or programme, e.g. "PhD in …". */
  title: string;
  institution: string | null;
  /** Thesis or main research topic, if any. */
  thesis: string | null;
}

export const education: EducationEntry[] = [
  {
    id: 'undergraduate',
    lane: 'education',
    order: 10,
    title: 'Undergraduate studies',
    institution: null,
    thesis: null,
    start: null,
    end: null,
    summary: null,
    topics: [],
    projects: [],
  },
  {
    id: 'masters',
    lane: 'education',
    order: 30,
    title: "Master's studies",
    institution: null,
    thesis: "Master's thesis in network optimization",
    start: null,
    end: null,
    summary: null,
    topics: ['Optimization', 'Graph algorithms'],
    projects: ['network-design-optimization'],
  },
  {
    id: 'phd',
    lane: 'education',
    order: 50,
    title: 'PhD research',
    institution: 'Université libre de Bruxelles',
    thesis: null,
    start: null,
    end: 'present',
    summary:
      'Estimating citywide traffic speeds from public transit bus observations, from missing-data recovery to a gated dual-branch GCNN and an interactive analytics tool.',
    topics: ['Machine learning', 'Spatiotemporal modeling', 'Optimization', 'Data science'],
    projects: ['traffic-speed-estimation'],
  },
];
