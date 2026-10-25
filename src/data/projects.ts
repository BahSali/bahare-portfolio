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
import networkCard from '~/assets/phd/network-card.jpg';
import speedSeriesFrequency from '~/assets/phd/speed-series-frequency.png';

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
  /** Demonstration video; place the file under /public/media and set `src` (e.g. '/media/app-demo.mp4'). */
  video: { src: string; poster: ImageMetadata | string | null; type: string; label: string } | null;
  features: { title: string; text: string }[];
  /** Screenshots are shown only when `src` is set; with no video, the first is the large main visual. */
  screenshots: ImageRef[];
}

/** A figure taken from the research material, with its caption. `src: null` renders a placeholder. */
export interface Figure { src: ImageMetadata | null; alt: string; caption: string; placeholderLabel: string }

/** Optional long-form case study; when present the detail page uses the case-study layout. */
export interface ProjectStory {
  overview: string[];
  facts: { value: string; label: string }[];
  /** Stages of one research project, shown as a compact timeline. `publications` are publication slugs. */
  journey: { title: string; text: string; scale: string; publications: string[]; status?: 'ongoing' }[];
  methodology: string;
  dataAreas: { title: string; points: string[]; tools?: string }[];
  /** Scope statement shown under the data areas. */
  dataNote: string;
  /** Technologies by category: `core` is used extensively, `additional` was worked with or explored. */
  toolkit: { category: string; core: string[]; additional: string[]; todo?: string }[];
  networkFigure: Figure;
  architectureFigure: Figure;
  /** Active or exploratory work: never presented as completed or published. */
  currentResearch: { title: string; status: string; points: string[]; example?: Figure }[];
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
  /** Image for overview cards (Home); falls back to `image`. */
  cardImage?: ImageRef;
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
    // Add a { label, href } code link here only once a public repository has been approved.
    links: [],
    publications: ['icdew-2024', 'sigspatial-2025', 'sigspatial-2026', 'urban-ai-2026'],
    image: {
      src: citywideNetwork,
      alt: 'Map of the 1,366 road segments of the Brussels study network',
      placeholderLabel: 'Project image',
    },
    cardImage: {
      src: networkCard,
      alt: 'Network of bus-served road segments across Brussels',
      placeholderLabel: 'Card image',
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
        {
          title: 'Ongoing research',
          text: 'Frequency-domain modeling and foundation models for traffic estimation.',
          scale: 'Active and exploratory, not yet published',
          publications: [],
          status: 'ongoing',
        },
      ],
      methodology:
        'The task is framed as a spatiotemporal mapping from bus-derived speed series to overall traffic speeds on the road graph. An encoder combines temporal convolution and attention with attention-weighted graph convolution across neighbouring segments, and a gated dual-branch decoder separates the broader traffic pattern from local deviations.',
      dataAreas: [
        {
          title: 'Historical traffic & temporal patterns',
          points: [
            'Historical traffic datasets from several regions (Rotterdam, Thessaloniki, San Francisco Bay Area, Brussels), used for missing-data recovery.',
            'Temporal pattern analysis: recent history, daily and weekly patterns, and similar historical days as model inputs.',
          ],
          tools: 'Python',
        },
        {
          title: 'Real-time feeds & timestamped data',
          points: [
            'STIB-MIVB GTFS-Realtime bus positions and speeds, accessed through the Brussels Mobility Twin platform.',
            'Timestamped observations collected and processed as research data.',
          ],
          tools: 'GTFS-Realtime',
        },
        {
          title: 'Geospatial data & road networks',
          points: [
            'A road graph built from the bus network: 1,366 segments between consecutive bus stops.',
            'Spatial matching of bus observations to road segments, and inspection of networks and results on maps.',
          ],
          tools: 'QGIS · GeoJSON · SQL/PostGIS',
        },
        {
          title: 'Collection, cleaning & alignment',
          points: [
            'Aggregating observations into 15-minute intervals and aligning bus-derived and reference series on the same windows.',
            'Integrating the sources into one segment-level dataset with chronological training, validation and test splits.',
          ],
          tools: 'Python',
        },
        {
          title: 'Reference data & API constraints',
          points: [
            'Google Routes API integration: traffic-aware travel times (driving mode) for each segment, with waypoints keeping routes on the bus roadway. Used as reference data, not ground truth.',
            'Usage-based pricing limited collection, so sampling was a decision: six weeks, weekdays 07:00 to 13:00, every 15 minutes.',
          ],
          tools: 'Google Routes API',
        },
        {
          title: 'Modeling, evaluation & applications',
          points: [
            'Spatiotemporal GCNN with temporal and spatial attention, compared against LSTM, temporal CNN, DCRNN and Graph WaveNet baselines and evaluated with MAE, RMSE and DTW.',
            'An interactive application for exploring and evaluating the estimates.',
          ],
          tools: 'Python · PyTorch · Streamlit',
        },
      ],
      dataNote:
        'Working with real-time feeds here means collecting and processing timestamped observations for research. It is not a production real-time monitoring service.',
      toolkit: [
        {
          category: 'Programming & Data Processing',
          core: ['Python'],
          additional: ['NumPy', 'SciPy', 'PyWavelets (spectral analysis, exploratory)'],
        },
        {
          category: 'Machine Learning & Deep Learning',
          core: ['PyTorch'],
          additional: [
            'TensorFlow',
            'MXNet',
            'Benchmarked: ARIMA, LSTM, temporal CNN, DCRNN, Graph WaveNet',
            'Pretrained and foundation models (exploratory)',
          ],
        },
        {
          category: 'Databases & Data Systems',
          core: ['SQL', 'PostGIS'],
          additional: ['Parquet'],
        },
        {
          category: 'Geospatial Analysis',
          core: ['QGIS', 'GeoJSON', 'Road-network graphs and spatial matching'],
          additional: [],
        },
        {
          category: 'Data Sources & APIs',
          core: ['STIB-MIVB GTFS-Realtime', 'Brussels Mobility Twin', 'Google Routes API'],
          additional: [
            'Waze jam data (exploratory)',
            'Historical loop-detector and road-segment datasets (Rotterdam, Thessaloniki, San Francisco Bay Area)',
          ],
        },
        {
          category: 'Visualization & Applications',
          core: ['Streamlit'],
          additional: ['Tableau', 'OpenStreetMap basemaps'],
        },
        {
          category: 'Development Tools',
          core: ['GitHub'],
          additional: [],
          todo: 'Other development tools to be added',
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
      currentResearch: [
        {
          title: 'Frequency-domain modeling',
          status: 'Active research',
          points: [
            'Investigating how bus-derived and reference traffic speeds relate across temporal frequencies.',
            'Exploring spectral decomposition and frequency-aware model architectures.',
            'Early experiments with an evolving decoder formulation. Results are preliminary and not published.',
          ],
          example: {
            src: speedSeriesFrequency,
            alt: 'Bus-derived and Google-derived speeds for one road segment: time series, FFT amplitude and low-pass view',
            caption: 'Example road segment, from the 2026 annual presentation: bus-derived and Google-derived speeds over time (top), their FFT amplitudes (middle) and a low-pass view (bottom). In this example the series align more closely once fast fluctuations are removed.',
            placeholderLabel: 'Figure: frequency-domain example',
          },
        },
        {
          title: 'Foundation models',
          status: 'Exploratory',
          points: [
            'Exploring whether pretrained and foundation models can support traffic estimation.',
            'Early-stage, with no results reported here.',
          ],
        },
      ],
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
      ],
    },
    application: {
      title: 'Interactive Traffic Analytics Platform',
      summary: 'A Streamlit application for exploring and evaluating citywide traffic estimates.',
      demoUrl: null,
      video: null,
      features: [
        { title: 'Map-based comparison', text: 'Compare traffic estimates across road segments on a map.' },
        { title: 'Model evaluation', text: 'Evaluate estimates against the reference data.' },
        { title: 'Travel-time analysis', text: 'Analyse travel times derived from the estimates.' },
      ],
      screenshots: [
        { src: null, alt: 'Main view of the Streamlit analytics platform', placeholderLabel: 'Demo video: application walkthrough' },
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
  image: p.cardImage ?? p.image,
});
