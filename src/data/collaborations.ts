/**
 * Research collaborations listed on the Research page. `href` points to the page with details
 * (use an internal path). Project-based research (e.g. University of Passau) is listed
 * automatically from projects.ts, so it is not repeated here.
 */
import { emeralds } from './emeralds';

export interface Collaboration {
  name: string;
  description: string | null;
  href: string;
  cta: string;
}

export const collaborations: Collaboration[] = [
  {
    name: emeralds.fullTitle,
    description: 'Research collaboration within the EU Horizon Europe programme.',
    href: emeralds.href,
    cta: 'View project',
  },
];
