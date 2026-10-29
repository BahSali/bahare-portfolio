/**
 * Research events for the gallery on the Research page. Add entries newest-first; an empty array
 * shows a placeholder. Put photographs in src/assets/events/ and import them here.
 *
 * `kind` keeps the role honest:
 *  - 'Presentation'  a talk or presentation I gave
 *  - 'Demonstration' a project demonstration or workshop session
 *  - 'Participation' attended or took part without presenting
 */
export type EventKind = 'Presentation' | 'Demonstration' | 'Participation';

export interface ResearchEvent {
  title: string;
  kind: EventKind;
  year: number;
  location: string;
  /** One or two sentences on my involvement. */
  involvement: string;
  /** Photograph; null renders a neutral frame. */
  photo: ImageMetadata | null;
  alt: string;
  link?: { label: string; href: string };
}

export const events: ResearchEvent[] = [];
