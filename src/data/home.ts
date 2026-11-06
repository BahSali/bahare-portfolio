/** Copy used only on the Home page, so the Projects and project pages keep their own wording. */
export const homeIntro =
  'I develop and evaluate machine learning methods for complex, real-world data, with a focus on spatiotemporal modeling and predictive analytics.';

/** Featured work in display order. Links and images come from the project data. */
export const homeWork = [
  {
    slug: 'traffic-speed-estimation',
    label: 'PhD Research',
    title: 'Citywide Traffic Speed Estimation',
    summary:
      'Developing and evaluating machine learning methods to estimate citywide traffic speeds from public transit observations.',
  },
  {
    slug: 'emeralds',
    label: 'Horizon Europe Project',
    title: 'EMERALDS',
    summary:
      'Applied mobility-data research within a European project, including my work on high-resolution traffic estimation.',
  },
  {
    slug: 'evolutionary-multi-objective-optimization',
    label: 'University of Passau',
    title: 'Runtime Analysis of Evolutionary Algorithms',
    summary:
      'Computational experiments and analysis of evolutionary optimization algorithms, from my earlier research experience.',
  },
] as const;
