export interface ExpertiseArea {
  title: string;
  description: string;
  /** Tools and methods shown as a quiet line under the description. */
  keywords: string[];
}

export const expertise: ExpertiseArea[] = [
  {
    title: 'Machine Learning & Predictive Modeling',
    description:
      'Developing and evaluating classical and deep learning models for spatiotemporal and real-world prediction tasks.',
    keywords: ['Python', 'scikit-learn', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'Data Processing & Feature Engineering',
    description:
      'Cleaning and integrating data from databases, APIs, and geospatial sources to prepare model-ready datasets.',
    keywords: ['SQL', 'Pandas', 'QGIS', 'Geospatial Data'],
  },
  {
    title: 'Statistical Analysis & Model Evaluation',
    description:
      'Using statistical methods and error analysis to explore data, test hypotheses, and evaluate predictive models.',
    keywords: ['Correlation', 'Regression', 'Hypothesis Testing', 'Time-Series Analysis'],
  },
];
