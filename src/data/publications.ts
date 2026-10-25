/**
 * Publications. Add real entries here; newest-first grouping is automatic.
 * While the array is empty, pages show clearly marked placeholders.
 * `projects` lists project slugs (see projects.ts) for cross-linking.
 * `featured: true` shows the entry in the Home page selection (keep to 2–3).
 */
export type PublicationType = 'journal' | 'conference' | 'preprint' | 'thesis' | 'other';

export const publicationTypeLabels: Record<PublicationType, string> = {
  journal: 'Journal article',
  conference: 'Conference paper',
  preprint: 'Preprint',
  thesis: 'Thesis',
  other: 'Other',
};

export interface Publication {
  slug: string;
  year: number;
  title: string;
  authors: string;
  venue: string;
  type: PublicationType;
  featured?: boolean;
  projects?: string[];
  links?: { label: string; href: string }[];
}

export const publications: Publication[] = [];
