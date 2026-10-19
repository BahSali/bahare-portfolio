/**
 * Add real publications here. While this array is empty, the Home page shows
 * three clearly marked placeholder rows instead.
 */
export interface Publication {
  year: string;
  title: string;
  authors: string;
  venue: string;
  link?: string;
}

export const publications: Publication[] = [];
