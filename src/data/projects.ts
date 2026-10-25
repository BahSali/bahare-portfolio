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
import networkCard from '~/assets/phd/network-card.jpg';
import dataRotterdam from '~/assets/phd/data-rotterdam.jpg';
import dataThessaloniki from '~/assets/phd/data-thessaloniki.jpg';
import dataSanFrancisco from '~/assets/phd/data-sanfrancisco.jpg';
import dataBrusselsEarly from '~/assets/phd/data-brussels-early.jpg';
import dataStudyArea from '~/assets/phd/data-study-area.jpg';
import dataStibSample from '~/assets/phd/data-stib-sample.png';
import dataBusVsReference from '~/assets/phd/data-bus-vs-reference.png';

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

/** A figure in the Data section. `meta` is a short factual line (size, period, resolution). */
export interface DataFigure {
  title: string;
  src: ImageMetadata | null;
  alt: string;
  /** What the data represents and why it matters, in plain language. */
  text: string;
  meta: string;
  /** Show the whole image on white (tables, charts) rather than cropped to fill. */
  fit?: boolean;
}

/** Optional long-form case study; when present the detail page uses the case-study layout. */
export interface ProjectStory {
  overview: string[];
  /** Silent looping animation shown beside the overview (files in /public/media). */
  overviewMedia?: { src: string; still: string; width: number; height: number; alt: string; caption: string };
  facts: { value: string; label: string }[];
  /** Stages of one research project, shown as a compact timeline. `publications` are publication slugs. */
  journey: {
    title: string;
    text: string;
    /** Condensed text used when the journey is laid out in a single row. */
    short: string;
    /** Secondary details such as case studies. */
    details: { label: string; text: string }[];
    /** Related publications: `slug` links to the Research page. */
    papers: { label: string; slug: string }[];
    /** Short feature list, shown as plain text. */
    features?: string;
    /** Topics under active investigation (stage still in progress). */
    topics?: string[];
    status?: 'ongoing';
  }[];
  /** Introductory sentence for the Data section. */
  dataIntro: string;
  /** Data section groups; each item is a real figure with a plain-language explanation. */
  dataGroups: { title: string; note?: string; items: DataFigure[] }[];
  /** Methods & Technologies: the actual workflow. `core` = used extensively, `explored` = worked with or explored. */
  workflow: { title: string; text: string; core: string[]; explored: string[] }[];
  /** Short scope note shown under the workflow. */
  workflowNote: string;
  architectureFigure: Figure;
  /** Active or exploratory work, never presented as completed or published. */
  currentResearch: { title: string; text: string }[];
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
    period: 'April 2023 – present',
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
        "Understanding traffic conditions across an entire city requires reliable and continuous data, yet collecting such information remains expensive and often incomplete. Fixed sensors provide limited coverage, while commercial data sources, despite their broader reach, can be costly or difficult to access.",
        "This research explores how existing, accessible data sources can support citywide traffic monitoring. It begins by recovering missing observations from incomplete traffic datasets and extends to estimating conditions on roads without direct measurements, using spatial and temporal relationships across the network.",
        "Working with real-world transportation datasets, the research investigates how machine learning can transform publicly available bus observations, particularly from Brussels' STIB network, into estimates of general road traffic speeds.",
      ],
      overviewMedia: {
        src: '/media/overview-network.gif',
        still: '/media/overview-network-still.jpg',
        width: 480,
        height: 320,
        alt: 'Animated map zooming from the whole Brussels bus network down to individual roads',
        caption: 'Case study of Brussels: road segments are shown as dark lines and bus stops as red points.',
      },
      facts: [
        { value: 'Brussels', label: 'Belgium · Urban road network' },
        { value: '≈110 km²', label: 'Study area coverage' },
        { value: 'GTFS-RT', label: 'STIB-MIVB bus observations' },
      ],
      journey: [
        {
          title: 'Missing Traffic Data Imputation',
          short: 'Recovering missing traffic observations with spatiotemporal models and neural architectures.',
          text: 'Investigating different spatiotemporal models and NN architectures to recover missing traffic observations.',
          details: [{ label: 'Case studies', text: 'Brussels bus network, Rotterdam highways, Thessaloniki urban network, and San Francisco Bay Area.' }],
          papers: [{ label: "ICDEW '24", slug: 'icdew-2024' }],
        },
        {
          title: 'Buses as Traffic Probes',
          short: 'Evaluating public transit buses as moving sensors of general road traffic speeds.',
          text: 'Introducing and evaluating the use of public transit buses as moving sensors for estimating general road traffic speeds.',
          details: [{ label: 'Case study', text: '74 road segments in Ixelles and Etterbeek, Brussels.' }],
          papers: [{ label: "ACM SIGSPATIAL '25", slug: 'sigspatial-2025' }],
        },
        {
          title: 'Citywide Traffic Estimation',
          short: 'Scaling to a whole urban network with an attention-enhanced GCNN, a dual-branch decoder and trend–residual decomposition.',
          text: 'Scaling traffic estimation to an entire urban network by developing an attention-enhanced GCNN with a dual-branch decoder. Trend–residual decomposition is incorporated to help the model better learn the multi-level relationships between bus-derived speeds and general traffic conditions.',
          details: [{ label: 'Case study', text: 'Brussels transportation network including 1,366 road segments.' }],
          papers: [
            { label: "ACM SIGSPATIAL '26", slug: 'sigspatial-2026' },
            { label: "UrbanAI '26", slug: 'urban-ai-2026' },
          ],
        },
        {
          title: 'Interactive Traffic Analytics',
          short: 'A real-time application that estimates and visualizes current traffic from live bus observations and a model trained on historical data.',
          text: 'Developing a real-time application to estimate and visualize current traffic conditions using live bus observations and a machine learning model trained on historical data.',
          details: [],
          papers: [],
          features: 'Interactive maps · Model comparison · Travel-time analysis',
        },
        {
          title: 'Transferability & Model Adaptation',
          short: 'Transferring learned patterns to other cities and updating models with less new reference data.',
          text: 'Investigating how learned traffic patterns can be transferred to other cities and how existing models can be updated with less dependence on newly collected reference data.',
          details: [],
          papers: [],
          topics: ['Frequency-domain modeling', 'Foundation models', 'Cross-city generalization'],
          status: 'ongoing',
        },
      ],
      dataIntro:
        'Real traffic data from four regions, plus open bus data and a commercial traffic service used as a reference.',
      dataGroups: [
        {
          title: 'Historical traffic datasets',
          note: 'Road sensors record how fast vehicles move. Where records have gaps, the research tests how well the missing values can be recovered.',
          items: [
            {
              title: 'Rotterdam highways',
              src: dataRotterdam,
              alt: 'Map of loop-detector locations along the Rotterdam highways',
              text: 'Sensors in the road count vehicles and measure speed every minute. Some detectors have almost no history, which makes gaps hard to fill.',
              meta: '206 detectors · Apr 2022 – May 2023',
            },
            {
              title: 'Thessaloniki',
              src: dataThessaloniki,
              alt: 'Map of the Thessaloniki road network with the study segments highlighted',
              text: 'An urban network where patterns over time matter more than neighbouring roads when estimating missing values.',
              meta: '189 road segments · Jan – Jun 2023',
              fit: true,
            },
            {
              title: 'San Francisco Bay Area',
              src: dataSanFrancisco,
              alt: 'Map of highway sensor locations in the San Francisco Bay Area',
              text: 'PeMSD4, a public benchmark from the California Department of Transportation that researchers widely use to compare methods.',
              meta: '307 sensors · Jan – Feb 2018',
            },
            {
              title: 'Brussels bus network',
              src: dataBrusselsEarly,
              alt: 'Map of the Brussels bus-line road network used in the early study',
              text: 'Bus trajectories instead of fixed sensors: can moving vehicles replace point measurements? Data from the Brussels Mobility Twin platform.',
              meta: '1,146 road segments · June 2023 mornings',
            },
          ],
        },
        {
          title: 'Buses and reference data in Brussels',
          note: 'The citywide network of 1,366 road segments is the map shown in the Overview.',
          items: [
            {
              title: 'Neighbourhood study area',
              src: dataStudyArea,
              alt: 'Map of the 74 road segments studied in Ixelles and Etterbeek, Brussels',
              text: 'A first test of whether bus speeds reflect general traffic, on streets that mix residential areas and busy junctions.',
              meta: '74 road segments · Ixelles and Etterbeek',
            },
            {
              title: 'Bus observations (STIB-MIVB)',
              src: dataStibSample,
              alt: 'Sample table of processed bus observations with line, direction, point, speed, count and time',
              text: 'Public transit buses publish their live position and speed as open data. Each row averages the observations for one point and time interval.',
              meta: 'GTFS-Realtime · 15-minute intervals',
              fit: true,
            },
            {
              title: 'Google Routes reference data',
              src: dataBusVsReference,
              alt: 'Line chart of bus-derived and Google-derived average speed over one day',
              text: 'Traffic-aware travel times serve as a reference for general traffic. Bus speeds (blue) follow the same daily rhythm as the reference (orange) but are noisier. The reference is a proxy, not ground truth.',
              meta: 'Usage-based pricing limits how much can be collected',
              fit: true,
            },
          ],
        },
      ],
      workflow: [
        {
          title: 'Data preparation and alignment',
          text: 'Bus observations, reference speeds and historical records are cleaned, matched in time and put on a shared 15-minute grid.',
          core: ['Python', 'GTFS-Realtime', 'Google Routes API'],
          explored: ['Parquet', 'Waze jam data'],
        },
        {
          title: 'Geospatial processing',
          text: 'Road segments between bus stops form a network. Observations are matched to segments and checked on maps.',
          core: ['QGIS', 'GeoJSON', 'SQL', 'PostGIS'],
          explored: ['OpenStreetMap basemaps'],
        },
        {
          title: 'Machine learning and model development',
          text: 'A graph neural network learns how bus speeds relate to general traffic, using attention to focus on the most informative times and roads.',
          core: ['PyTorch'],
          explored: ['TensorFlow', 'MXNet', 'NumPy', 'SciPy', 'PyWavelets', 'Foundation models'],
        },
        {
          title: 'Evaluation and visualization',
          text: 'Estimates are compared with the reference and with baseline models (LSTM, CNN, DCRNN, Graph WaveNet), then explored in an interactive app.',
          core: ['Streamlit'],
          explored: ['Tableau'],
        },
      ],
      workflowNote:
        'Working with real-time feeds here means collecting and processing timestamped observations for research. It is not a production monitoring service. Throughout: Python and GitHub.',
      architectureFigure: {
        src: modelArchitecture,
        alt: 'Model architecture: spatiotemporal encoder followed by a dual-branch decoder',
        caption: 'Model overview: historical feature construction, a spatiotemporal block (temporal CNN with attention, then attention and GCNN over the road graph), and a decoder with base and residual branches.',
        placeholderLabel: 'Figure: model architecture',
      },
      currentResearch: [
        {
          title: 'Transferability',
          text: 'Investigating how learned traffic patterns can be transferred to other cities.',
        },
        {
          title: 'Frequency-domain modeling',
          text: 'Relating bus-derived and reference speeds across temporal frequencies, with spectral decomposition and frequency-aware architectures. Early experiments, not yet published.',
        },
        {
          title: 'Less new reference data',
          text: 'Updating existing models with less dependence on newly collected reference data.',
        },
      ],
    },
    application: {
      title: 'Interactive Traffic Analytics Platform',
      summary: 'A Streamlit application for exploring and evaluating citywide traffic estimates.',
      demoUrl: null,
      video: {
        src: '/media/app-demo.mp4',
        poster: '/media/app-demo-poster.jpg',
        type: 'video/mp4',
        label: 'Narrated walkthrough of the application',
      },
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
