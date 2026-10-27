/**
 * Professional and research-project experience for the timeline (see education.ts for the
 * date conventions). Add further roles or collaborations as new entries.
 */
import type { TimelineBase } from '~/lib/timeline';
import { emeralds } from './emeralds';

export interface ExperienceEntry extends TimelineBase {
  title: string;
  organization: string | null;
  role: string | null;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'passau',
    lane: 'research',
    order: 55,
    title: 'Visiting Researcher',
    organization: 'Universität Passau, Germany',
    role: null,
    start: '2022-05',
    end: '2023-03',
    summary: 'Research collaboration on the runtime analysis of evolutionary algorithms.',
    topics: ['Evolutionary algorithms', 'Multi-objective optimization'],
    projects: [],
    href: '/projects/evolutionary-multi-objective-optimization',
  },
  {
    id: 'ripi',
    lane: 'research',
    order: 45,
    title: 'Research Engineer',
    organization: 'Research Institute of Petroleum Industry (RIPI), Tehran, Iran',
    role: null,
    start: '2020-01',
    end: '2022-07',
    summary: null,
    topics: [],
    projects: [],
  },
  {
    id: 'enterprise-data',
    lane: 'industry',
    order: 40,
    title: 'ERP Support and Customization Specialist',
    organization: 'Farabard Sakht Dalin Co. (Farassan subsidiary)',
    role: 'Full-time',
    start: '2019-09',
    end: '2022-04',
    summary:
      'Professional experience with enterprise databases, SQL and ERP systems, business data and business processes.',
    topics: [],
    projects: [],
    anchor: 'timeline-industry',
    href: '/projects/enterprise-data-erp',
  },
  {
    id: 'teaching-assistant',
    lane: 'education',
    order: 20,
    title: 'Teaching Assistant',
    organization: 'Shiraz University',
    role: null,
    start: '2017',
    end: '2019',
    summary: 'Computer Laboratory (undergraduate, June 2019); Software Engineering Laboratory (undergraduate, two semesters from June 2018).',
    topics: [],
    projects: [],
  },
  {
    id: 'emeralds',
    lane: 'research',
    order: 60,
    title: emeralds.fullTitle,
    organization: 'EU Horizon Europe',
    role: null,
    start: null,
    end: null,
    sortAs: '2023-04',
    summary: emeralds.body,
    topics: [],
    projects: [emeralds.relatedProject],
    anchor: 'timeline-emeralds',
    href: emeralds.href,
  },
];
