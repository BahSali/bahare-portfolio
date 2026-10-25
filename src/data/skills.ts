/** Skills by category. Items are plain text (no ratings). Empty `items` renders a placeholder. */
export interface SkillGroup { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Machine learning', items: ['Machine learning', 'Spatiotemporal modeling'] },
  { title: 'Data analytics', items: ['Data science', 'Data analysis', 'Analytics'] },
  {
    title: 'Databases & enterprise systems',
    items: ['Enterprise databases', 'SQL', 'ERP systems', 'Business data'],
  },
  { title: 'Optimization', items: ['Optimization', 'Graph algorithms', 'Genetic algorithms'] },
  { title: 'Tools & languages', items: [] },
];
