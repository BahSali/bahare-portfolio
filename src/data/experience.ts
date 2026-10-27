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
    start: null,
    end: null,
    summary:
      'Professional experience with enterprise databases, SQL and ERP systems, business data and business processes.',
    topics: ['Enterprise databases', 'SQL', 'ERP systems', 'Business processes', 'Business data'],
    projects: [],
    anchor: 'timeline-industry',
    href: '/projects/enterprise-data-erp',
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
    summary: emeralds.body,
    topics: [],
    projects: [emeralds.relatedProject],
    anchor: 'timeline-emeralds',
    href: emeralds.href,
    highlight: true,
  },
];
