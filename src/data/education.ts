/**
 * Education. Feeds the Journey timeline, the Research summaries and the About page.
 * `start`/`end` are 'YYYY' or 'YYYY-MM'; `end: 'present'` for ongoing. Use null while unknown.
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
    id: 'masters',
    lane: 'education',
    order: 30,
    title: "Master's degree, Computer Software Engineering",
    institution: 'Shiraz University',
    thesis: 'Thesis on multi-objective optimization of urban road networks',
    start: '2016-09',
    end: '2019-02',
    summary: null,
    topics: ['Optimization', 'Graph algorithms'],
    projects: ['network-design-optimization'],
  },
  {
    id: 'phd',
    lane: 'education',
    order: 50,
    title: 'PhD, Computer Engineering',
    institution: 'Université libre de Bruxelles',
    thesis: null,
    start: '2023-04',
    end: 'present',
    summary:
      'Estimating citywide traffic speeds from public transit bus observations, from missing-data recovery to a gated dual-branch GCNN and an interactive analytics tool.',
    topics: ['Machine learning', 'Spatiotemporal modeling', 'Optimization', 'Data science'],
    projects: ['traffic-speed-estimation'],
  },
];
