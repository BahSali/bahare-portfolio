/**
 * Education. Feeds the Journey timeline, the Research summaries and the About page.
 * `order` sets sequence on the timeline while dates are missing (lower = earlier);
 * once every timeline entry has a `start`, the timeline switches to true chronology.
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
    id: 'undergraduate',
    lane: 'education',
    order: 10,
    title: "Bachelor's studies",
    institution: 'Shiraz, Iran',
    thesis: 'Computer Software Engineering',
    start: '2010-10',
    end: '2014-10',
    summary: 'Computer Software Engineering.',
    topics: [],
    projects: [],
  },
  {
    id: 'masters',
    lane: 'education',
    order: 30,
    title: "Master's studies",
    institution: 'Shiraz University',
    achievement: 'Graduated 2nd in the M.Sc. cohort (by GPA).',
    thesis: 'Computer Software Engineering · Thesis in network optimization',
    start: '2016-09',
    end: '2019-02',
    summary: 'Computer Software Engineering.',
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
    start: '2023-04',
    end: 'present',
    summary: 'Citywide traffic speed estimation from public transit buses.',
    topics: ['Machine learning', 'Spatiotemporal modeling', 'Optimization', 'Data science'],
    projects: ['traffic-speed-estimation'],
  },
];
