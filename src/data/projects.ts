/**
 * Research projects. Add, remove or reorder entries freely; pages are generated from this list.
 *
 * - `tier`: 'lead' gets the prominent block on /projects; 'standard' entries form the gallery below it.
 * - `homeFeatured` selects entries for the Home "Selected Work" cards (EMERALDS is added from emeralds.ts).
 * - Fields left `null` / `[]` render as clearly marked placeholders on the detail page.
 * - `publications` lists publication slugs (see publications.ts) for cross-linking.
 * - `application` adds an "Interactive Application" section (screenshots + demo link) to the detail page.
 */
import citywideNetwork from '~/assets/phd/citywide-network.jpg';
import modelArchitecture from '~/assets/phd/model-architecture.png';
import maeDistribution from '~/assets/phd/mae-distribution.png';
import spatialError from '~/assets/phd/spatial-error.jpg';

export type ProjectCategory = 'phd' | 'collaboration' | 'thesis' | 'applied';
export type ProjectTier = 'lead' | 'standard';

export const categoryLabels: Record<ProjectCategory, string> = {
  phd: 'PhD research',
  collaboration: 'University of Passau',
  thesis: "Master's thesis",
  applied: 'Earlier applied research',
};

export interface Link { label: string; href: string }
export interface ImageRef { src: ImageMetadata | string | null; alt: string; placeholderLabel: string }

export interface ProjectApplication {
  title: string;
  summary: string;
  /** Shown only when an accessible URL is provided. */
  demoUrl: string | null;
  features: { title: string; text: string }[];
  /** First entry is the large screenshot; the second is an optional secondary one. */
  screenshots: ImageRef[];
}

/** A figure taken from the research material, with its caption. `src: null` renders a placeholder. */
export interface Figure { src: ImageMetadata | null; alt: string; caption: string; placeholderLabel: string }

/** Optional long-form case study; when present the detail page uses the case-study layout. */
export interface ProjectStory {
  overview: string[];
  facts: { value: string; label: string }[];
  /** Stages of one research project, shown as a compact timeline. `publications` are publication slugs. */
  journey: { title: string; text: string; scale: string; publications: string[] }[];
  methodology: string;
  dataGroups: { title: string; items: { name: string; context: string }[] }[];
  networkFigure: Figure;
  architectureFigure: Figure;
  /** Each finding comes from a different experiment; `scope` states which one. */
  findings: { value: string; claim: string; scope: string }[];
  errorFigures: Figure[];
  limitations: string[];
  /** Exploratory or in-progress work, not yet results. */
  nextSteps: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tier: ProjectTier;
  homeFeatured: boolean;
  /** One neutral line. Replace with the real summary. */
  summary: string;
  period: string | null;
  role: string | null;
  overview: string | null;
  methodology: string | null;
  /** Research or professional contributions; empty renders a placeholder. */
  contributions: string[];
  technologies: string[];
  results: string | null;
  publications: string[];
  links: Link[];
  image: ImageRef;
  /** Overrides on the detail page only. */
  eyebrow?: string;
  headline?: string;
  subtitle?: string;
  story?: ProjectStory;
  application?: ProjectApplication;
}

const empty: Pick<
  Project,
  'period' | 'role' | 'overview' | 'methodology' | 'contributions' | 'technologies' | 'results' | 'publications' | 'links'
> = {
  period: null,
  role: null,
  overview: null,
  methodology: null,
  contributions: [],
  technologies: [],
  results: null,
  publications: [],
  links: [],
};

export const projects: Project[] = [
  {
    ...empty,
    slug: 'traffic-speed-estimation',
    title: 'Citywide Traffic Speed Estimation',
    eyebrow: 'PhD Research | Université libre de Bruxelles',
    headline: 'From Incomplete Traffic Data to Citywide Traffic Estimation',
    subtitle: 'Machine Learning · Spatiotemporal Modeling · Real-World Data',
    category: 'phd',
    tier: 'lead',
    homeFeatured: true,
    summary:
      'Estimating traffic speeds across a whole city from observations collected by public transit vehicles.',
    role: 'PhD researcher',
    contributions: [
      'Enriching incomplete traffic observations through spatiotemporal patterns across multiple cities and varying levels of data availability.',
      'Introducing and validating public transit buses as probes for urban road-level traffic speed estimation.',
      'An attention-enhanced gated dual-branch GCNN for citywide traffic estimation.',
      'An open-access citywide dataset of GTFS-derived bus speeds at the road-segment level.',
    ],
    technologies: ['Python', 'PyTorch', 'GTFS-Realtime', 'Google Routes API', 'Streamlit'],
    links: [
      {
        label: 'Code on GitHub',
        href: 'https://github.com/BahSali/citywide-bus-probe-traffic-estimation',
      },
    ],
    publications: ['icdew-2024', 'sigspatial-2025', 'sigspatial-2026', 'urban-ai-2026'],
    image: {
      src: citywideNetwork,
      alt: 'Map of the 1,366 road segments of the Brussels study network',
      placeholderLabel: 'Project image',
    },
    story: {
      overview: [
        'Cities need continuous traffic monitoring, but fixed sensors cover few roads and commercial or probe data can be costly or restricted. Traffic observations are also often incomplete, with missing values on monitored roads and no data at all on others.',
        'This research began with recovering missing values in incomplete traffic data. It then turned to a broader question: can public transit buses, whose positions are openly published as GTFS-Realtime feeds, act as probes for estimating traffic across a whole city? The work moves from missing-data recovery, to relating bus speeds to general traffic, to a citywide model and an interactive tool for exploring its estimates. The results come from a research case study in Brussels.',
      ],
      facts: [
        { value: '1,366', label: 'road segments in the Brussels study network' },
        { value: '68', label: 'bus lines providing probe observations' },
        { value: '≈110 km²', label: 'of the urban area covered' },
        { value: '6 weeks', label: 'of weekday data, Nov–Dec 2025' },
      ],
      journey: [
        {
          title: 'Missing traffic data imputation',
          text: 'Investigating GCNN architectures and spatiotemporal missing-value estimation.',
          scale: 'Case studies in Rotterdam, Thessaloniki, San Francisco Bay Area and Brussels',
          publications: ['icdew-2024'],
        },
        {
          title: 'Buses as traffic probes',
          text: 'Formulating and evaluating the relationship between bus-derived speeds and general traffic conditions.',
          scale: 'Neighbourhood scale: 74 road segments in Ixelles and Etterbeek',
          publications: ['sigspatial-2025'],
        },
        {
          title: 'Citywide traffic estimation',
          text: 'Scaling the study to 1,366 road segments and developing the attention-enhanced gated dual-branch GCNN.',
          scale: 'Citywide scale: 1,366 road segments',
          publications: ['sigspatial-2026', 'urban-ai-2026'],
        },
        {
          title: 'Interactive analytics',
          text: 'Building a Streamlit application to visualize, compare, and evaluate traffic estimates.',
          scale: 'Streamlit application',
          publications: [],
        },
      ],
      methodology:
        'The task is framed as a spatiotemporal mapping from bus-derived speed series to overall traffic speeds on the road graph. An encoder combines temporal convolution and attention with attention-weighted graph convolution across neighbouring segments, and a gated dual-branch decoder separates the broader traffic pattern from local deviations.',
      dataGroups: [
        {
          title: 'Real-world data',
          items: [
            { name: 'STIB-MIVB GTFS-Realtime', context: 'bus positions and speeds from the Brussels transit operator, used as probe observations' },
            { name: 'Brussels Mobility Twin', context: 'the platform through which the feed was accessed' },
            { name: 'Google Routes API', context: 'traffic-aware speeds used as reference data for training and evaluation, not as ground truth' },
            { name: 'Road-network data', context: 'road segments between consecutive bus stops, forming the graph' },
            { name: 'Data preparation', context: 'matching observations to segments and aggregating them into 15-minute intervals' },
          ],
        },
        {
          title: 'Machine learning',
          items: [
            { name: 'Spatiotemporal modeling', context: 'mapping bus-derived speeds to overall traffic speeds over time and space' },
            { name: 'GCNNs', context: 'graph convolution across connected road segments' },
            { name: 'Attention mechanisms', context: 'temporal and spatial attention within the encoder' },
            { name: 'Model comparison', context: 'against LSTM, temporal CNN, DCRNN and Graph WaveNet baselines' },
            { name: 'Evaluation', context: 'MAE, RMSE and DTW against the reference series' },
          ],
        },
        {
          title: 'Geospatial tools and applications',
          items: [
            { name: 'Python', context: 'data processing and model implementation' },
            { name: 'SQL / PostGIS', context: 'storing and querying spatial data' },
            { name: 'QGIS', context: 'inspecting road networks and results on maps' },
            { name: 'GeoJSON', context: 'exchanging road geometries' },
            { name: 'Streamlit', context: 'the interactive analytics application' },
          ],
        },
      ],
      networkFigure: {
        src: citywideNetwork,
        alt: 'Map of the Brussels study network of 1,366 road segments, with a zoomed inset',
        caption: 'The citywide study network: 1,366 road segments between consecutive bus stops across Brussels. Map data © OpenStreetMap contributors.',
        placeholderLabel: 'Figure: study network map',
      },
      architectureFigure: {
        src: modelArchitecture,
        alt: 'Model architecture: spatiotemporal encoder followed by a dual-branch decoder',
        caption: 'Model overview: historical feature construction, a spatiotemporal block (temporal CNN with attention, then attention and GCNN over the road graph), and a decoder with base and residual branches.',
        placeholderLabel: 'Figure: model architecture',
      },
      findings: [
        {
          value: '1,366 segments',
          claim: 'The city-scale Brussels study covers 1,366 road segments, using six weeks of bus and reference data.',
          scope: 'Citywide study',
        },
        {
          value: '4.43 → 2.44 km/h',
          claim: 'Mean absolute error (MAE) of raw bus-derived speeds versus model estimates, relative to the Google-derived reference.',
          scope: 'Earlier neighbourhood-scale study, 74 segments. A separate experiment: it does not describe the citywide network.',
        },
        {
          value: '50 segments',
          claim: 'A separate evaluation on road segments without any direct bus observations, relying on temporal patterns and neighbouring bus-covered roads (MAE 1.79 km/h).',
          scope: 'Reported in the 2026 annual presentation',
        },
      ],
      errorFigures: [
        {
          src: maeDistribution,
          alt: 'Histogram of segment-level MAE for model estimates and raw bus-derived speeds',
          caption: 'Citywide study: segment-level MAE of model estimates versus raw bus-derived speeds, both evaluated against the Google-derived reference.',
          placeholderLabel: 'Figure: error distribution',
        },
        {
          src: spatialError,
          alt: 'Map of segment-level estimation error across Brussels with three circled higher-error clusters',
          caption: 'Citywide study: spatial distribution of estimation error. Warmer colours mean higher deviation from the reference; circled areas mark higher-error clusters (1: Schuman/EU quarter, dense intersections; 2: northern access corridors; 3: southern access corridors).',
          placeholderLabel: 'Figure: spatial error map',
        },
      ],
      limitations: [
        'Google Routes API speeds are a reference proxy for general traffic conditions, not ground truth.',
        'Errors are not uniform across the city: they tend to be higher in complex, highly variable traffic environments such as dense intersections.',
        'Reference data was collected on weekdays from 07:00 to 13:00, so other times of day are not evaluated.',
      ],
      nextSteps: [
        'Monitoring model performance and updating the model without full-city reference data (open challenge).',
        'Waze jam data as an additional source: spatial coverage is high but observations are sparse (exploratory).',
        'Frequency-domain (wavelet) decomposition of speed series as a possible refinement (exploratory).',
      ],
    },
    application: {
      title: 'Interactive Traffic Analytics Platform',
      summary: 'A Streamlit application for exploring and evaluating citywide traffic estimates.',
      demoUrl: null,
      features: [
        { title: 'Map-based comparison', text: 'Compare traffic estimates across road segments on a map.' },
        { title: 'Model evaluation', text: 'Evaluate estimates against the reference data.' },
        { title: 'Travel-time analysis', text: 'Analyse travel times derived from the estimates.' },
      ],
      screenshots: [
        { src: null, alt: 'Main view of the Streamlit analytics platform', placeholderLabel: 'Large screenshot: main application view' },
        { src: null, alt: 'Secondary view of the Streamlit analytics platform', placeholderLabel: 'Optional second screenshot' },
      ],
    },
  },
  {
    ...empty,
    slug: 'evolutionary-multi-objective-optimization',
    title: 'Evolutionary Multi-Objective Optimization',
    category: 'collaboration',
    tier: 'standard',
    homeFeatured: true,
    summary: 'Research with the University of Passau on evolutionary multi-objective optimization, including NSGA-II.',
    image: {
      src: null,
      alt: 'Figure from the evolutionary multi-objective optimization research',
      placeholderLabel: 'Project image: figure',
    },
  },
  {
    ...empty,
    slug: 'network-design-optimization',
    title: 'Network Design Optimization',
    category: 'thesis',
    tier: 'standard',
    homeFeatured: false,
    summary: "Master's thesis research on network design, graph algorithms and optimization.",
    image: {
      src: null,
      alt: 'Figure from the network design optimization thesis',
      placeholderLabel: 'Project image: network or graph figure',
    },
  },
  {
    ...empty,
    slug: 'artificial-well-hydrocarbon-research',
    title: 'Artificial Well / Hydrocarbon Research',
    category: 'applied',
    tier: 'standard',
    homeFeatured: false,
    summary: 'Earlier applied research involving computational methods and optimization.',
    image: {
      src: null,
      alt: 'Figure from the artificial well and hydrocarbon research',
      placeholderLabel: 'Project image: figure',
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Shape shared by every overview card (projects and experience items). */
export interface CardItem {
  href: string;
  label: string;
  title: string;
  summary: string;
  image: ImageRef;
  /** Link text, defaults to 'View project'. */
  cta?: string;
}

export const projectCard = (p: Project): CardItem => ({
  href: `/projects/${p.slug}`,
  label: categoryLabels[p.category],
  title: p.title,
  summary: p.summary,
  image: p.image,
});
