export interface ExpertiseArea {
  title: string;
  description: string;
  /** Topics named in the brief; extend as content develops. */
  topics: string[];
  /** Where to read more. */
  href: string;
  hrefLabel: string;
}

export const expertise: ExpertiseArea[] = [
  {
    title: 'Machine Learning & Research',
    description:
      'Learning methods for spatiotemporal data, together with optimization and graph-based approaches.',
    topics: ['Machine learning', 'Spatiotemporal modeling', 'Optimization'],
    href: '/research',
    hrefLabel: 'Research',
  },
  {
    title: 'Data Engineering & Enterprise Systems',
    description:
      'Industrial experience with enterprise databases and ERP systems.',
    topics: ['Enterprise databases', 'ERP systems'],
    href: '/experience',
    hrefLabel: 'Experience',
  },
  {
    title: 'Applied Data Science & Analytics',
    description:
      'Turning data into analysis and tools that serve real-world applications.',
    topics: ['Data science', 'Analytics'],
    href: '/projects',
    hrefLabel: 'Projects',
  },
];
