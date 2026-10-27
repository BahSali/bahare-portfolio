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
import archBaseline from '~/assets/phd/arch-baseline.png';
import archAttention from '~/assets/phd/arch-attention.png';
import nsgaIllustration from '~/assets/phd/nsga2-illustration.png';
import mscNetwork from '~/assets/phd/msc-network.png';
import mscFrankWolfe from '~/assets/phd/msc-frankwolfe.png';
import mscBraess from '~/assets/phd/msc-braess.png';
import mscSolution from '~/assets/phd/msc-solution.png';
import mscLoop from '~/assets/phd/msc-loop.png';
import mscCard from '~/assets/phd/msc-card.png';
import mscPareto from '~/assets/phd/msc-pareto.png';
import yorkMap from '~/assets/phd/ds/york-map.jpg';
import passauFig from '~/assets/phd/passau-fig2.png';
import archSpectral from '~/assets/phd/arch-spectral.png';
import modelArchitecture from '~/assets/phd/arch-dual-branch.png';
import networkCard from '~/assets/phd/network-card.jpg';
import { phdDatasets, type Dataset } from './phd-datasets';

export type ProjectCategory = 'phd' | 'collaboration' | 'thesis' | 'applied' | 'eu-project' | 'industry';
export type ProjectTier = 'lead' | 'standard';

export const categoryLabels: Record<ProjectCategory, string> = {
  phd: 'PhD research',
  collaboration: 'University of Passau',
  thesis: "Master's thesis",
  applied: 'Earlier applied research',
  'eu-project': 'Horizon Europe project',
  industry: 'Industry',
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
  /** Data section case studies (see phd-datasets.ts). */
  datasets: Dataset[];
  /** Technical Work & Expertise: competency areas. `ongoing` lists research directions, not established results. */
  workflow: { title: string; text: string; ongoing?: string; core: string[]; explored: string[] }[];
  workflowNote?: string;
  /** Model development: one entry per architecture, shown with an image selector (the one marked `default` opens first). */
  architectures: { id: string; label: string; fullName: string; venue: string; paper: string; src: ImageMetadata; alt: string; approach: string; focus: string; default?: boolean; ongoing?: boolean }[];
}

export interface BriefFigure { src: ImageMetadata; alt: string; caption: string; /** Longer explanation shown under the caption. */ note?: string; /** Full-size URL, resolved on the page for the lightbox. */ big?: string }
/** Building blocks for a `brief` page laid out as titled sections with figures beside the text. */
export type BriefBlock =
  | { kind: 'text'; lead?: string; paragraphs: string[]; /** Compact figure size. */ small?: boolean; /** Explanatory row under the text and figure, with its own figure. */ notes?: { title?: string; paragraphs: string[]; figure?: BriefFigure }; figure?: BriefFigure; figureFirst?: boolean }
  | { kind: 'columns'; items: { label: string; text: string; /** Text with inline links; replaces `text` when set. */ parts?: (string | { text: string; href?: string; /** Title of the explanation item the info icon opens. */ info?: string })[]; /** Expandable explanation under the text. */ details?: { summary: string; items: { title: string; text: string; /** Second paragraph. */ more?: string; figure?: BriefFigure }[]; figure?: BriefFigure } }[] }
  | { kind: 'rows'; items: { label: string; text: string }[] }
  | { kind: 'publications' };
export interface BriefSection { id: string; title: string; blocks: BriefBlock[] }

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
  /** Short funding note shown as a tag on overview pages. */
  funding?: string;
  /** Short single-page write-up (overview, contribution, technical areas) instead of the generic template. */
  brief?: { overview: string[]; contribution: string[]; extra?: { title: string; lines: { label?: string; text: string }[] }[]; figures?: { src: ImageMetadata; alt: string; caption: string }[]; sections?: BriefSection[]; areaTitle: string; areas: string[]; figure?: { src: ImageMetadata | null; alt: string; caption: string; placeholderLabel: string } };
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
    funding: 'Funded under EMERALDS · Horizon Europe',
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
          details: [{ label: 'Case studies', text: 'Brussels transportation network including 1,366 road segments, and York (EMERALDS), with 638 road segments.' }],
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
        'Real-world case studies. Open one to see its source, figures and results.',
      datasets: phdDatasets,
      workflow: [
        {
          title: 'Data Engineering & Integration',
          text: 'Building datasets from heterogeneous sources: working with APIs, processing and aligning time-series observations, handling missing values and integrating traffic reference data. This includes data cleaning, validation, map matching and preparing model-ready data.',
          core: ['Python', 'Pandas', 'GTFS-Realtime', 'Google Routes API'],
          explored: [],
        },
        {
          title: 'Geospatial Analytics & Data Management',
          text: 'Constructing and analysing road networks, performing spatial operations, managing geographic databases and exploring spatial and temporal data.',
          core: ['PostgreSQL/PostGIS', 'SQL', 'QGIS', 'GeoJSON', 'Parquet', 'OpenStreetMap'],
          explored: [],
        },
        {
          title: 'Machine Learning & Model Development',
          text: 'Developing and comparing statistical and neural approaches for traffic estimation, with ARIMA, LSTM, temporal CNN, DCRNN and Graph WaveNet as baselines. I designed and implemented custom GCNN architectures, progressing from a baseline spatiotemporal network to attention-based models and a gated dual-branch design.',
          core: ['PyTorch (primary)', 'TensorFlow and MXNet (additional experience)'],
          explored: [],
        },
        {
          title: 'Frequency-Domain Modeling & Signal Analysis',
          text: 'Investigating traffic signals at different temporal frequencies to better understand complex and heterogeneous traffic behaviour across large urban networks. Exploring signal decomposition, Fourier and wavelet transforms, and frequency-aware neural architectures to distinguish broader traffic patterns from local variations.',
          ongoing: 'Active research: spectral analysis and decomposition approaches, and a frequency-aware architecture, are in early experiments.',
          core: ['NumPy', 'SciPy', 'PyWavelets'],
          explored: [],
        },
        {
          title: 'Experimentation & Model Evaluation',
          text: 'Designing comparative experiments and ablation studies, examining how model components contribute, and evaluating errors across road segments and time periods.',
          core: ['Evaluation metrics (e.g. MAE, RMSE, DTW)'],
          explored: [],
        },
        {
          title: 'Model Transfer, Adaptation & Foundation Models',
          text: 'Investigating how trained models can be transferred across cities and road networks, and updated with less newly collected reference data. The York case study within EMERALDS applies the approach to a second city.',
          ongoing: 'Active research: model transfer across cities, graph partitioning and adaptation strategies, and foundation models for traffic estimation, including TabPFN.',
          core: [],
          explored: [],
        },
        {
          title: 'Interactive Applications & Visualization',
          text: 'Building interactive applications to visualize traffic data and compare model predictions. Integrating multiple trained models into online demos, with secure API access and credential management.',
          core: ['Streamlit', 'Tableau', 'Git/GitHub'],
          explored: [],
        },
      ],
      architectures: [
        {
          id: 'baseline',
          label: 'Baseline GCNN',
          fullName: 'Baseline Spatiotemporal GCNN',
          venue: 'ICDEW 2024',
          paper: 'icdew-2024',
          src: archBaseline,
          alt: 'Baseline GCNN: three parallel sub-networks for hourly, daily and weekly patterns, each with a spatiotemporal block, fused into the output',
          approach: 'Designed for imputing missing traffic speed observations, using spatial and temporal relationships. Combines temporal and spatial convolutions over separate hourly, daily and weekly inputs.',
          focus: 'Investigating how different neural network components affect missing traffic speed reconstruction.',
        },
        {
          id: 'attention',
          label: 'Attention GCNN',
          fullName: 'Attention-based GCNN',
          venue: 'SIGSPATIAL 2025',
          paper: 'sigspatial-2025',
          src: archAttention,
          alt: 'Attention-based GCNN: embedding convolution, a spatiotemporal block with temporal and spatial attention, and an output head',
          approach: 'Designed for learning a mapping from bus-derived speed time series to general traffic speeds, represented by the reference data. Uses temporal and spatial attention.',
          focus: 'Estimating road traffic speeds from public transit data rather than relying on fixed traffic sensors.',
        },
        {
          id: 'dual-branch',
          label: 'Dual-Branch GCNN',
          fullName: 'Gated Dual-Branch GCNN',
          venue: '2026',
          paper: 'sigspatial-2026',
          src: modelArchitecture,
          alt: 'Gated dual-branch GCNN: feature construction, spatiotemporal block, and a decoder with base and residual branches combined by additive fusion',
          approach: 'Extends bus-to-reference estimation to a larger urban network, addressing more heterogeneous traffic patterns and local variations. A dual-branch decoder with adaptive gating separates broader patterns from local deviations.',
          focus: 'Bus-to-reference traffic estimation at citywide scale.',
          default: true,
        },
        {
          id: 'spectral',
          label: 'Spectral Network',
          fullName: 'Spectral Transfer Network',
          venue: 'Ongoing research',
          paper: '',
          src: archSpectral,
          alt: 'Spectral Transfer Network architecture: wavelet decomposition of bus speed into bands, per-band blocks with graph mixing and a transfer operator, coverage gate, and inverse wavelet transform',
          approach: 'Investigates frequency-domain decomposition and transfer mechanisms for the same citywide mapping problem, where temporal patterns, data coverage and traffic conditions are more complex.',
          focus: 'Bus-to-reference traffic estimation: separating broader trends from local fluctuations and handling varying bus-data coverage.',
          ongoing: true,
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
        { title: 'Synchronized maps', text: 'Explore traffic conditions and compare multiple models side by side.' },
        { title: 'Model performance', text: 'Compare predictions with reference data and examine estimation errors.' },
        { title: 'Travel-time analysis', text: 'Compare estimated travel times along selected routes.' },
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
    title: 'Runtime Analysis of Evolutionary Algorithms',
    eyebrow: 'Research collaboration · University of Passau, Germany',
    subtitle: 'Evolutionary Algorithms · Multi-Objective Optimization · Runtime Analysis',
    period: 'May 2022 – March 2023',
    role: 'Visiting Researcher',
    category: 'collaboration',
    tier: 'standard',
    homeFeatured: true,
    summary: 'Exploring the efficiency and robustness of evolutionary optimization algorithms through computational experiments.',
    publications: ['aaai-2023', 'gecco-2023'],
    brief: {
      overview: [
        "During a research stay at the University of Passau, I collaborated with Prof. Dirk Sudholt's research group on the analysis of evolutionary multi-objective optimization algorithms.",
        'We investigated how crossover and noise influence the runtime and robustness of NSGA-II and GSEMO. The work combined theoretical analysis with computational experiments and led to two publications at AAAI 2023 and GECCO 2023.',
      ],
      contribution: [
        'I implemented NSGA-II and GSEMO from scratch in Python, covering their main components, including selection, crossover, mutation, and population management.',
        'I developed and ran experiments to study algorithm performance under different conditions, analysed the results, and prepared figures for the publications. I also contributed to selected mathematical proofs.',
      ],
      areaTitle: 'Technical Skills',
      areas: ['Python', 'Multi-Objective Optimization', 'Evolutionary Algorithms', 'Algorithm Implementation', 'Experimental Evaluation', 'Runtime Analysis'],
      figure: {
        src: passauFig,
        alt: 'Number of Pareto-optimal points covered per generation by GSEMO and NSGA-II on two benchmark functions under noise',
        caption: 'Experiment from the GECCO 2023 paper: Pareto-optimal points covered per generation by GSEMO and NSGA-II under noise, for noise probability p.',
        placeholderLabel: 'Experiment figure',
      },
    },
    image: {
      src: nsgaIllustration,
      alt: 'Schematic illustration of non-dominated sorting in NSGA-II, with solutions ranked into successive Pareto fronts',
      placeholderLabel: 'Project image',
    },
  },
  {
    ...empty,
    slug: 'emeralds',
    title: 'EU Horizon Europe EMERALDS Project',
    category: 'eu-project',
    tier: 'standard',
    homeFeatured: true,
    eyebrow: 'European research collaboration · Horizon Europe',
    subtitle: 'Spatiotemporal Data · Traffic Estimation · Research Collaboration',
    summary: 'Participation in the EU Horizon Europe EMERALDS project, applying my PhD research to new datasets.',
    links: [{ label: 'Related PhD project →', href: '/projects/traffic-speed-estimation' }],
    brief: {
      overview: [
        'Participation in the EU Horizon Europe EMERALDS project. The technical work is closely related to my PhD research, adapted and evaluated with other datasets.',
        "My PhD research is supported by the EMERALDS project, funded by the European Union's Horizon Europe programme.",
      ],
      contribution: [],
      extra: [
        {
          title: 'Involvement',
          lines: [
            { text: 'Working in an international, multi-partner research project.' },
            { text: 'Applying research to new datasets and project requirements.' },
            { text: 'Team collaboration and technical reporting.' },
            { text: 'Presentations, speaking engagements and dissemination activities.' },
          ],
        },
        {
          title: 'Data',
          lines: [
            { label: 'York', text: 'Connected-vehicle data from York, provided through the project and used to evaluate how well traffic estimation methods transfer to another city.' },
            { label: 'Coverage', text: '638 road segments, with 214 buses across 63 bus lines; Cariad connected-vehicle speeds (more than 25,000 devices) serve as the reference.' },
          ],
        },
        {
          title: 'Project material',
          lines: [{ text: '[Presentations, posters and public deliverables to be added]' }],
        },
      ],
      areaTitle: 'Technical Areas',
      areas: ['Spatiotemporal Data', 'Traffic Estimation', 'Transferability Across Cities', 'Collaboration and Reporting', 'Dissemination'],
      figure: {
        src: yorkMap,
        alt: 'Map of the York streets in the EMERALDS case study',
        caption: 'York street network used in the EMERALDS case study.',
        placeholderLabel: 'Project image',
      },
    },
    image: {
      src: yorkMap,
      alt: 'Map of the York streets in the EMERALDS case study',
      placeholderLabel: 'Project image',
    },
  },
  {
    ...empty,
    slug: 'network-design-optimization',
    title: 'Multi-Objective Optimization of Urban Road Networks',
    category: 'thesis',
    tier: 'standard',
    eyebrow: "Master's thesis · Shiraz University, Iran",
    subtitle: 'Multi-Objective Optimization · Network Design · Traffic Modeling',
    period: 'September 2016 – February 2019',
    role: 'M.Sc. Researcher',
    homeFeatured: false,
    summary: 'How changes to road capacity affect traffic flow and travel times, using bi-level optimization and a multi-objective genetic algorithm.',
    publications: ['icee-2019'],
    brief: {
      overview: [],
      contribution: [],
      areaTitle: '',
      areas: [],
      sections: [
        {
          id: 'overview',
          title: 'Overview',
          blocks: [
            {
              kind: 'text',
              lead: 'How does changing road capacity affect traffic?',
              paragraphs: [
                'This research explores how changes in road capacity affect traffic flow and travel times across urban networks. It uses multi-objective optimization to identify road network configurations that balance total travel time and infrastructure costs.',
                "The problem follows a bi-level framework. The upper level determines which road lanes to add or remove, while the lower level models drivers' route choices and calculates the resulting traffic flows and travel times. These results guide the evaluation of different network configurations.",
              ],
              figure: {
                src: mscLoop,
                alt: 'Diagram of the bi-level loop: the upper level changes lane counts on candidate links, the lower level assigns traffic and returns link flows and travel times',
                caption: "Bi-level framework: the upper level changes the road, the lower level models drivers' response.",
              },
            },
          ],
        },
        {
          id: 'approach',
          title: 'Approach',
          blocks: [
            {
              kind: 'columns',
              items: [
                {
                  label: 'Traffic assignment',
                  text: 'The lower level models how changes in road capacity influence drivers’ route choices and, consequently, the distribution of traffic across the network. To capture these effects, the model uses User Equilibrium formulation to represent drivers’ routing behavior under different network configurations. The Frank–Wolfe algorithm is then applied to solve this traffic assignment problem and calculate the resulting traffic flows and travel times.',
                  parts: [
                    'The lower level models how changes in road capacity influence drivers’ route choices and, consequently, the distribution of traffic across the network. To capture these effects, the model uses ',
                    { text: 'User Equilibrium', info: 'User Equilibrium' },
                    ' formulation to represent drivers’ routing behavior under different network configurations. The ',
                    { text: 'Frank–Wolfe algorithm', info: 'Frank–Wolfe Algorithm' },
                    ' is then applied to solve this traffic assignment problem and calculate the resulting traffic flows and travel times.',
                  ],
                  details: {
                    summary: 'How traffic assignment works',
                    items: [
                      { title: 'User Equilibrium', text: 'User Equilibrium represents a traffic condition in which no driver can reduce their travel time by switching to another available route. In other words, traffic is distributed across the network so that drivers have no incentive to change their chosen routes.' },
                      { title: 'Frank–Wolfe Algorithm', text: 'The Frank–Wolfe algorithm is used to calculate this equilibrium. Starting from an initial distribution of traffic flows, it repeatedly identifies routes based on current travel times and updates the flows across the network. The process continues until the changes become sufficiently small, indicating convergence toward User Equilibrium.' },
                    ],
                    figure: {
                      src: mscFrankWolfe,
                      alt: 'Illustration of one Frank–Wolfe (conditional gradient) step toward a vertex of the feasible set',
                      caption: 'One Frank–Wolfe step. Illustration after Jaggi (2011).',
                      note: 'The bowl is the function being minimized, and the box D is the set of feasible solutions. At the current point x, the algorithm replaces the function with its tangent plane (the flat red surface), finds the point s in D that is lowest on this plane, and moves x part of the way toward s. In traffic assignment, x stands for the current link flows, and each step shifts some traffic onto the routes that are currently fastest.',
                    },
                  },
                },
                {
                  label: 'Network optimization',
                  text: "The upper level focuses on improving the road network by modifying its structure, specifically by adding or removing lanes on selected roads. Since each modification involves a cost, the goal is to balance minimizing total travel time with reducing infrastructure costs. A genetic algorithm is used to explore different combinations of these changes. Both lane additions and removals are considered, as increasing road capacity does not always improve traffic conditions, a phenomenon illustrated by Braess's paradox.",
                  parts: [
                    'The upper level focuses on improving the road network by modifying its structure, specifically by adding or removing lanes on selected roads. Since each modification involves a cost, the goal is to balance minimizing total travel time with reducing infrastructure costs. A ',
                    { text: 'genetic algorithm', info: 'Genetic Algorithm' },
                    ' is used to explore different combinations of these changes. Both lane additions and removals are considered, as increasing road capacity does not always improve traffic conditions, a phenomenon illustrated by ',
                    { text: "Braess's paradox", info: "Braess's Paradox" },
                    '.',
                  ],
                  details: {
                    summary: 'How network optimization works',
                    items: [
                      { title: 'Genetic Algorithm', text: 'A genetic algorithm searches for effective network configurations through an iterative optimization process. It maintains a population of potential solutions, each representing a particular combination of lane additions and removals. In each generation, solutions are evaluated based on travel time and infrastructure costs. Selection, crossover, and mutation are then used to produce new solutions and progressively improve the population.' },
                      { title: 'Pareto Front', text: 'The optimization considers two potentially conflicting objectives: minimizing total travel time and infrastructure costs. Improving traffic performance may require more expensive modifications, while lower-cost alternatives may offer smaller improvements. Rather than selecting a single solution, the algorithm seeks a set of non-dominated solutions, where improving one objective would require compromising the other. These solutions approximate the Pareto front, illustrating the trade-offs between traffic performance and infrastructure costs.' },
                      { title: 'Weighted P-Norm (WPN)', text: 'This research introduces a Weighted P-Norm (WPN) approach to improve how the genetic algorithm evaluates and selects solutions for the next generation. WPN considers how close each solution comes to the best values of travel time and infrastructure cost. Its performance was compared with NSGA-II, a widely used multi-objective genetic algorithm.' },
                      {
                        title: "Braess's Paradox",
                        text: 'Increasing road capacity does not always improve traffic conditions. Adding a road or lane can change drivers’ route choices in ways that increase congestion and overall travel time. This counterintuitive effect, known as Braess\'s paradox, highlights why removing lanes can sometimes improve network performance.',
                        figure: {
                          src: mscBraess,
                          alt: 'Four-node road network with a zero-cost shortcut between the two middle nodes, illustrating Braess paradox',
                          caption: "Textbook example: a new zero-cost link raises every driver's travel time from 65 to 80 minutes.",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'evaluation',
          title: 'Experimental Results',
          blocks: [
            {
              kind: 'text',
              small: true,
              paragraphs: [
                'The proposed approach was evaluated on benchmark transportation networks of different scales, including the well-established Sioux Falls network shown here. The experiments examined the quality of the solutions obtained under different road network configurations.',
              ],
              figure: {
                src: mscNetwork,
                alt: 'Sioux Falls benchmark network with 24 nodes and 76 numbered road links',
                caption: 'Sioux Falls benchmark network (24 nodes, 76 links).',
              },
            },
            {
              kind: 'text',
              figureFirst: true,
              paragraphs: [
                'The comparison with NSGA-II shows how the two algorithms perform in finding effective road network configurations. Each point in the figure represents a different combination of lane additions and removals, evaluated by its total travel time and modification cost. In the tested scenarios, WPN identified configurations with more favorable trade-offs between these objectives, particularly on the Sioux Falls network. Some of these configurations also involved removing lanes, highlighting that increasing road capacity is not always the most effective way to improve traffic conditions.',
              ],
              figure: {
                src: mscPareto,
                alt: 'Scatter plot of travel time against cost for Pareto solutions from NSGA-II (red triangles) and the WPN approach (green stars) on the Sioux Falls network',
                caption: 'Pareto solutions on Sioux Falls: NSGA-II (red) and WPN (green). Lower is better on both axes.',
              },
              notes: {
                paragraphs: [
                  'Each point on the Pareto chart represents a potential road network design. The figure illustrates how a single design is encoded as a sequence of cells, with each cell corresponding to a road. The cell value specifies the number of lanes to add (+), remove (−), or leave unchanged (0). Each design is then evaluated based on its total travel time, calculated through the lower-level traffic assignment model, and the associated infrastructure modification cost. These two values determine its position on the Pareto chart.',
                ],
                figure: {
                  src: mscSolution,
                  alt: 'A candidate design written as a row of numbers: 1, 0, ellipsis, minus 2, 2, minus 1, one value per candidate road',
                  caption: 'A candidate design from the thesis: lanes added (+) or removed (−) per road.',
                },
              },
            },
          ],
        },
        {
          id: 'experience',
          title: 'Technical Experience',
          blocks: [
            {
              kind: 'rows',
              items: [
                { label: 'Bi-level optimization', text: 'Formulating the network design problem and coupling it with a traffic assignment model.' },
                { label: 'Evolutionary algorithms', text: 'Implementing and tuning a genetic algorithm, with NSGA-II as the baseline.' },
                { label: 'Traffic assignment', text: 'Solving User Equilibrium with Frank–Wolfe in Python, with the assignments computed in parallel.' },
                { label: 'Experiments and evaluation', text: 'Running benchmark experiments and comparing Pareto sets against quality metrics and a known true Pareto front.' },
              ],
            },
          ],
        },
        {
          id: 'publication',
          title: 'Publication',
          blocks: [{ kind: 'publications' }],
        },
      ],
    },
    image: {
      src: mscCard,
      alt: 'Non-convex surface of total travel time as lane counts change on two candidate links',
      placeholderLabel: 'Project image',
    },
  },
  {
    ...empty,
    slug: 'enterprise-data-erp',
    title: 'Enterprise Databases and ERP Systems',
    category: 'industry',
    tier: 'standard',
    homeFeatured: false,
    eyebrow: 'Professional experience · Industry',
    subtitle: 'Enterprise Databases · SQL · ERP Systems',
    period: 'September 2019 – April 2022',
    role: 'ERP Support and Customization Specialist',
    summary: 'Professional experience with enterprise databases, SQL and ERP systems, business data and business processes.',
    brief: {
      overview: [
        'Professional experience with enterprise databases, SQL and ERP systems, working with business data and business processes.',
        'Full-time role at Farabard Sakht Dalin Co. (a Farassan subsidiary), Iran.',
        '[Systems, projects and responsibilities to be added]',
      ],
      contribution: [],
      areaTitle: 'Technical Skills',
      areas: ['Enterprise Databases', 'SQL', 'ERP Systems', 'Business Processes', 'Business Data'],
    },
    image: {
      src: null,
      alt: 'Enterprise data and ERP work',
      placeholderLabel: 'Project image',
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
