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
      'Developing and evaluating machine learning models, from classical approaches to deep learning, with a focus on spatiotemporal prediction.',
    keywords: ['Python', 'scikit-learn', 'PyTorch', 'TensorFlow', 'Graph Neural Networks'],
  },
  {
    title: 'Data Processing & Feature Engineering',
    description:
      'Cleaning, integrating, and transforming data from databases, APIs, and geospatial sources into model-ready datasets.',
    keywords: ['SQL', 'Pandas', 'Feature Engineering', 'Geospatial Data'],
  },
  {
    title: 'Statistical Analysis & Model Evaluation',
    description:
      'Applying statistical methods, hypothesis testing, and error analysis to investigate data patterns, compare models, and assess predictive performance.',
    keywords: ['Correlation', 'Regression', 'Hypothesis Testing', 'Time-Series Analysis'],
  },
];
