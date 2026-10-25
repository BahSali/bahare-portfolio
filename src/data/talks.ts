/** Talks, posters and conference presentations. Empty array renders a placeholder. */
export interface Talk {
  year: number;
  title: string;
  event: string;
  kind: 'Talk' | 'Poster' | 'Conference presentation';
  link?: string;
}

export const talks: Talk[] = [];
