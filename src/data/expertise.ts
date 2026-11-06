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
      'Developing and evaluating machine learning and deep learning models, with experience in spatiotemporal prediction and graph neural networks.',
    keywords: ['Python', 'PyTorch', 'TensorFlow', 'GNNs', 'Time-Series Modeling'],
  },
  {
    title: 'Data Processing & Integration',
    description:
      'Preparing, transforming, and integrating data from heterogeneous sources, including databases, APIs, and geospatial datasets.',
    keywords: ['Python', 'SQL', 'Pandas', 'Data Integration', 'APIs'],
  },
  {
    title: 'Experimentation & Applied Development',
    description:
      'Designing experiments, benchmarking models, and developing interactive tools to evaluate and communicate data-driven solutions.',
    keywords: ['Model Evaluation', 'Benchmarking', 'Streamlit', 'Git'],
  },
];
