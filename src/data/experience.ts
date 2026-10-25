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
    title: 'Enterprise databases and ERP systems',
    organization: null,
    role: null,
    start: null,
    end: null,
    summary:
      'Industrial experience with enterprise databases, SQL and ERP systems, working with business data.',
    topics: ['Enterprise databases', 'SQL', 'ERP systems', 'Business data'],
    projects: [],
  },
  {
    id: 'emeralds',
    lane: 'research',
    order: 60,
    title: emeralds.title,
    organization: 'EU Horizon Europe',
    role: null,
    start: null,
    end: null,
    summary: emeralds.body,
    topics: [],
    projects: [],
    highlight: true,
  },
];
