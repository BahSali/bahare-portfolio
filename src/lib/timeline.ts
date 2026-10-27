import { education } from '~/data/education';
import { experience } from '~/data/experience';
import { projects } from '~/data/projects';

export type Lane = 'education' | 'industry' | 'research';

export const lanes: { id: Lane; label: string }[] = [
  { id: 'education', label: 'Education' },
  { id: 'industry', label: 'Industry' },
  { id: 'research', label: 'Research & collaborations' },
];

/** Fields shared by every timeline entry. */
export interface TimelineBase {
  id: string;
  lane: Lane;
  order: number;
  /** 'YYYY' or 'YYYY-MM'. */
  start: string | null;
  end: string | 'present' | null;
  summary: string | null;
  /** Short academic or professional distinction, shown under the organization. */
  achievement?: string;
  topics: string[];
  /** Project slugs related to this entry. */
  projects: string[];
  highlight?: boolean;
  /** Anchor id for the timeline entry itself (defaults to `id`). */
  anchor?: string;
  /** Link to a dedicated section with more detail. */
  href?: string;
}

export interface TimelineItem extends TimelineBase {
  title: string;
  /** Institution or organization; null renders a placeholder. */
  org: string | null;
  detail: string | null;
  related: { slug: string; title: string }[];
}

const toItem = (e: TimelineBase, title: string, org: string | null, detail: string | null): TimelineItem => ({
  ...e,
  title,
  org,
  detail,
  related: e.projects.flatMap((slug) => {
    const p = projects.find((x) => x.slug === slug);
    return p ? [{ slug, title: p.title }] : [];
  }),
});

const all: TimelineItem[] = [
  ...education.map((e) => toItem(e, e.title, e.institution, e.thesis)),
  ...experience.map((e) => toItem(e, e.title, e.organization, e.role)),
];

/** True when every entry has a start year, so overlapping periods can be drawn to scale. */
export const isDated = all.every((i) => i.start !== null);

export const timelineItems: TimelineItem[] = [...all].sort((a, b) =>
  isDated ? (yearOf(a.start!) - yearOf(b.start!)) || a.order - b.order : a.order - b.order,
);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmt = (d: string) => {
  const [y, m] = d.split('-');
  return m ? `${months[Number(m) - 1]} ${y}` : y;
};
export const yearOf = (d: string) => Number(d.slice(0, 4));

export function formatPeriod(i: Pick<TimelineBase, 'start' | 'end'>): string | null {
  if (i.start === null) return null;
  if (i.end === 'present') return `${fmt(i.start)} – Present`;
  if (i.end === null || i.end === i.start) return fmt(i.start);
  return `${fmt(i.start)} – ${fmt(i.end)}`;
}
