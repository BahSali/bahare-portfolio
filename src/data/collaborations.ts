/** Research collaborations. Empty array renders a placeholder. */
export interface Collaboration {
  name: string;
  description: string | null;
  link?: string;
}

export const collaborations: Collaboration[] = [];
