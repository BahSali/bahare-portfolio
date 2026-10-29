/**
 * Professional and research-project experience for the timeline (see education.ts for the
 * date and `order` conventions). Add further roles or collaborations as new entries.
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
    id: 'enterprise-data',
    lane: 'industry',
    order: 40,
    title: 'Enterprise Databases & ERP',
    organization: null,
    role: null,
    start: '2019-09',
    end: '2022-04',
    summary: 'Enterprise databases, SQL and ERP systems.',
    topics: ['Enterprise databases', 'SQL', 'ERP systems', 'Business processes', 'Business data'],
    projects: [],
    anchor: 'timeline-industry',
    href: '/projects/enterprise-data-erp',
  },
  {
    id: 'passau',
    lane: 'research',
    order: 48,
    title: 'Visiting Researcher',
    organization: 'University of Passau, Germany',
    role: null,
    start: '2022-05',
    end: '2023-03',
    summary: 'Runtime analysis of evolutionary algorithms.',
    topics: ['Evolutionary algorithms', 'Multi-objective optimization'],
    projects: ['evolutionary-multi-objective-optimization'],
  },
  {
    id: 'ripi',
    lane: 'research',
    order: 45,
    title: 'Researcher',
    organization: 'Research Institute of Petroleum Industry (RIPI), Iran',
    role: null,
    start: '2020-01',
    end: '2022-07',
    summary: 'Seismic inversion with Simulated Annealing.',
    topics: ['Numerical optimization', 'Seismic inversion', 'Scientific computing'],
    projects: ['pseudo-well-seismic-inversion'],
  },
  {
    id: 'teaching-assistant',
    lane: 'education',
    order: 35,
    title: 'Teaching Assistant',
    organization: 'Shiraz University',
    role: null,
    start: '2017',
    end: '2019',
    summary: 'Computer and Software Engineering laboratories.',
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
    start: '2023-04',
    end: '2025-12',
    summary: emeralds.body,
    topics: [],
    projects: [emeralds.relatedProject],
    anchor: 'timeline-emeralds',
    href: emeralds.href,
    highlight: true,
  },
];
