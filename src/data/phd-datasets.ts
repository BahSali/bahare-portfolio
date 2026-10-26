/**
 * Case studies for the Data section of the PhD project page.
 * Every figure comes from the author's research material (papers, annual presentations, progress report).
 * Add or edit entries here; the gallery and the detail panels are generated from this list.
 */
import rotterdamMap from '~/assets/phd/ds/rotterdam-map.jpg';
import rotterdamHeatmap from '~/assets/phd/ds/rotterdam-heatmap.png';
import rotterdamEstimation from '~/assets/phd/ds/rotterdam-estimation.png';
import thessalonikiMap from '~/assets/phd/ds/thessaloniki-map.jpg';
import thessalonikiTrends from '~/assets/phd/ds/thessaloniki-trends.png';
import thessalonikiEstimation from '~/assets/phd/ds/thessaloniki-estimation.png';
import sanFranciscoMap from '~/assets/phd/ds/sanfrancisco-map.jpg';
import sanFranciscoHistogram from '~/assets/phd/ds/sanfrancisco-histogram.png';
import sanFranciscoDay from '~/assets/phd/ds/sanfrancisco-sensor-day.png';
import bruBusMap from '~/assets/phd/ds/brussels-bru-bus-map.jpg';
import stibSample from '~/assets/phd/ds/brussels-stib-sample.png';
import busVsGoogle from '~/assets/phd/ds/brussels-bus-vs-google.png';
import citywideNetwork from '~/assets/phd/citywide-network.jpg';
import studyArea from '~/assets/phd/ds/brussels-study-area.jpg';
import neighbourhoodSeries from '~/assets/phd/ds/brussels-neighbourhood-series.png';
import maeDistribution from '~/assets/phd/ds/brussels-mae-distribution.png';
import spatialError from '~/assets/phd/ds/brussels-spatial-error.jpg';
import yorkMap from '~/assets/phd/ds/york-map.jpg';
import yorkSeries1 from '~/assets/phd/ds/york-series-1.png';
import yorkSeries2 from '~/assets/phd/ds/york-series-2.png';

export interface DatasetFigure {
  src: ImageMetadata;
  alt: string;
  caption: string;
  /** Spans the full width of the figure grid (wide charts and heatmaps). */
  wide?: boolean;
  /** Show the whole figure on white instead of cropping to fill. Charts and tables always do. */
  crop?: boolean;
  /** CSS object-position when cropped. */
  position?: string;
}

export interface DatasetGroup {
  title: string;
  /** Short study description shown beside a single figure. */
  note?: string;
  figures: DatasetFigure[];
}

export interface DatasetSection {
  title: string;
  note?: string;
  figures: DatasetFigure[];
  /** Optional separate groups (e.g. two studies) shown one after the other inside a tab. */
  groups?: DatasetGroup[];
  /** Source note with an external link, shown below the figures. */
  sourceNote?: { before: string; linkText: string; href: string; after?: string };
}

export interface Dataset {
  id: string;
  name: string;
  /** Small label above the name. */
  kind: string;
  /** One short sentence: the dataset's role in the research. */
  role: string;
  /** Turns this phrase inside `role` into a link. */
  roleLink?: { text: string; href: string };
  card: { src: ImageMetadata; alt: string; position?: string };
  /** Cleaner panel layout: stacked metadata, full-width figures with captions below. */
  refined?: boolean;
  /** Heading for the purpose list (default: Purpose and experiments). */
  purposeTitle?: string;
  /** Verified facts: source, coverage, period, statistics. */
  overview: { label: string; value: string }[];
  /** Short bullets: purpose and experiments. */
  purpose: string[];
  sections: DatasetSection[];
  /** Optional pointer to the publication reporting the results (slug in publications.ts). */
  paper?: string;
  /** Several related publications (slugs in publications.ts). */
  papers?: string[];
  /** Shown when the material lacks a figure that would be expected here. */
  missing?: string;
}

export const phdDatasets: Dataset[] = [
  {
    id: 'rotterdam',
    name: 'Rotterdam Highways',
    kind: 'Highway traffic sensors · Netherlands',
    role: 'Historical traffic sensor data used to investigate missing-value recovery across highway networks and different data availability conditions.',
    card: { src: rotterdamMap, alt: 'Map of loop-detector locations along the Rotterdam highways' },
    refined: true,
    overview: [
      { label: 'Source', value: 'Dutch National Road Traffic Data Portal (NDW), provided as a use case (UC) of the EMERALDS project.' },
      { label: 'Coverage', value: 'Highway network around Rotterdam, monitored by 206 loop detectors.' },
      { label: 'Period', value: 'April 2022 – May 2023, 1-minute intervals.' },
      { label: 'Dataset size', value: '206 detectors, 544,320 time steps.' },
      { label: 'Measurements', value: 'Traffic speed and flow, recorded per lane and aggregated at detector level.' },
    ],
    purposeTitle: 'Research focus',
    purpose: [
      'Evaluating how graph-based models reconstruct missing traffic speeds, particularly when observations from individual detectors are unavailable for extended periods.',
    ],
    sections: [
      {
        title: 'Data example',
        figures: [
          {
            src: rotterdamHeatmap,
            alt: 'Map of selected detectors and a heatmap of their recorded speeds over time, with blank areas for missing data',
            caption: 'Selected road detectors and their recorded speeds over time. White gaps indicate missing observations, including extended periods without data.',
            wide: true,
          },
        ],
      },
      {
        title: 'Results',
        figures: [
          {
            src: rotterdamEstimation,
            alt: 'Two heatmaps of detector speeds over time: observed speeds with missing values and model-reconstructed speeds',
            caption: 'Observed traffic speeds with missing values (left) and model-reconstructed speeds (right) for a 3,000-time-step excerpt, not the full dataset. Each row represents a detector and each column a time step.',
            wide: true,
          },
        ],
      },
    ],
  },
  {
    id: 'thessaloniki',
    name: 'Thessaloniki',
    kind: 'Urban traffic data · Greece',
    role: 'Urban road traffic data used to evaluate spatiotemporal learning methods and recover missing observations across streets.',
    card: { src: thessalonikiMap, alt: 'Map of the Thessaloniki street network with the study segments highlighted' },
    overview: [
      { label: 'Source', value: 'MobiSpaces project, EU Horizon Europe (Grant Agreement ID 101070279).' },
      { label: 'Coverage', value: 'City streets in Thessaloniki' },
      { label: 'Period', value: 'January – June 2023, 15-minute measurements' },
      { label: 'Size', value: '189 road segments, grouped into 28 roads' },
    ],
    purpose: [
      'The dataset was provided as street metadata without spatial connectivity between streets. I map-matched the streets to OpenStreetMap and built the adjacency matrix (green links on the map).',
      'Neighbouring segments can follow clearly different speed trends over the same period, so temporal dynamics may be more informative than spatial proximity alone.',
    ],
    sections: [
      {
        title: 'Data example',
        figures: [
          {
            src: thessalonikiTrends,
            alt: 'Line chart of speeds over time for four neighbouring road segments',
            caption: 'Four neighbouring segments follow different speed trends over the same period, despite being close together.',
          },
        ],
      },
      {
        title: 'Result',
        note: 'Further refinement of the road connections and of how spatial and temporal dependencies interact is needed to improve the model here.',
        figures: [
          {
            src: thessalonikiEstimation,
            alt: 'Heatmaps of speeds for 30 selected road segments over 50 time steps: input with missing values and estimates',
            caption: 'Input with missing values and the model’s estimate for 30 selected road segments over 50 time steps.',
            crop: false,
          },
        ],
      },
    ],
  },
  {
    id: 'sanfrancisco',
    name: 'San Francisco Bay Area',
    kind: 'Highway traffic sensors · United States',
    role: 'Public highway sensor data used to benchmark missing traffic speed estimation methods on a large-scale transportation network.',
    card: { src: sanFranciscoMap, alt: 'Map of highway sensor locations in the San Francisco Bay Area' },
    refined: true,
    overview: [
      { label: 'Source', value: 'PeMSD4, a publicly available traffic benchmark derived from California Department of Transportation (Caltrans) sensor data.' },
      { label: 'Coverage', value: 'Highway traffic sensors in the San Francisco Bay Area.' },
      { label: 'Period', value: 'January–February 2018.' },
      { label: 'Dataset', value: '307 traffic sensors recording speed, flow, and occupancy. This study uses average traffic speed.' },
    ],
    purposeTitle: 'Research focus',
    purpose: [
      'Using a widely adopted traffic benchmark to evaluate graph neural network architectures for missing speed data imputation and compare their performance under a common experimental setting.',
    ],
    sections: [
      {
        title: 'Data examples',
        figures: [
          {
            src: sanFranciscoHistogram,
            alt: 'Histogram of recorded speeds in the PeMSD4 dataset',
            caption: 'Distribution of recorded traffic speeds across the dataset.',
          },
          {
            src: sanFranciscoDay,
            alt: 'Line chart of average speed over one day for one sensor',
            caption: 'Example of speed variations recorded by a single sensor over one day.',
          },
        ],
      },
    ],
    paper: 'icdew-2024',
  },
  {
    id: 'brussels',
    name: 'Brussels',
    kind: 'Public transit data · Belgium',
    role: 'The main research case study, combining STIB-MIVB bus observations with reference traffic data to develop and evaluate citywide traffic speed estimation.',
    card: { src: bruBusMap, alt: 'Map of the Brussels bus-line road network' },
    refined: true,
    overview: [
      { label: 'Source', value: 'STIB-MIVB GTFS-Realtime bus observations, accessed through the Brussels Mobility Twin API.' },
      { label: 'Reference', value: 'Google Routes API, using traffic-aware driving estimates as a comparison reference, not ground truth.' },
      { label: 'Coverage', value: '74 segments in Ixelles and Etterbeek for the neighbourhood study; 1,366 segments across 68 bus lines for the citywide study.' },
      { label: 'Period', value: 'November–December 2025, weekday mornings, 15-minute intervals (citywide study).' },
    ],
    purposeTitle: 'Research focus',
    purpose: [
      'Using public transit buses as moving traffic sensors to estimate road traffic speeds, from a neighbourhood-scale experiment to a larger urban network.',
    ],
    papers: ['sigspatial-2026', 'urban-ai-2026', 'sigspatial-2025', 'icdew-2024'],
    sections: [
      {
        title: 'Data example',
        figures: [
          {
            src: stibSample,
            alt: 'Sample tables: average bus speed per road segment and 15-minute interval, and the stops bounding each segment',
            caption: 'STIB-MIVB bus data: average speed per segment and 15-minute interval (blank where no bus passed), and the stops bounding each segment.',
          },
          {
            src: busVsGoogle,
            alt: 'Line chart of bus-derived and Google-derived average speed over one day',
            caption: 'Bus-derived speeds (blue) and the Google-derived reference (orange) over one day.',
          },
          {
            src: studyArea,
            alt: 'Map of the 74 road segments in Ixelles and Etterbeek',
            caption: 'Neighbourhood study: 74 road segments in Ixelles and Etterbeek.',
            crop: true,
          },
          {
            src: citywideNetwork,
            alt: 'Map of the 1,366 road segments of the Brussels study network with a zoomed inset',
            caption: 'Citywide study: 1,366 road segments between consecutive bus stops across Brussels.',
          },
        ],
        sourceNote: {
          before: 'STIB-MIVB real-time bus observations were accessed through the ',
          linkText: 'Brussels Mobility Twin',
          href: 'https://mobilitytwin.brussels',
          after: ' API.',
        },
      },
      {
        title: 'Results',
        figures: [],
        groups: [
          {
            title: 'Neighbourhood study · 74 segments',
            note: 'Bus-derived and model-estimated speeds are compared with the Google-derived reference, for one segment with high bus density (Porte de Namur – Trône).',
            figures: [
              {
                src: neighbourhoodSeries,
                alt: 'Line chart of bus-derived, Google-derived and model-derived speeds for one segment',
                caption: 'Bus-derived, Google-derived and model-derived speeds over one day. Across the 74 segments, mean absolute error against the reference falls from 4.43 km/h (bus-derived) to 2.44 km/h (model).',
              },
            ],
          },
          {
            title: 'Citywide study · 1,366 segments',
            figures: [
              {
                src: maeDistribution,
                alt: 'Histogram of segment-level mean absolute error for model estimates and raw bus-derived speeds',
                caption: 'Segment-level error of model estimates (blue) and raw bus-derived speeds (orange), both measured against the Google-derived reference.',
              },
              {
                src: spatialError,
                alt: 'Map of segment-level error across Brussels with three circled areas of higher error',
                caption: 'Spatial distribution of the error: warmer colours mean larger error. Circled areas mark higher-error clusters.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'york',
    name: 'York',
    kind: 'Connected-vehicle data · United Kingdom',
    role: 'Connected-vehicle data from York, provided through the EMERALDS project and used to evaluate the transferability of traffic estimation methods to another city.',
    roleLink: { text: 'EMERALDS project', href: '/experience#emeralds' },
    card: { src: yorkMap, alt: 'Map of the York streets in the EMERALDS case study', position: 'center 30%' },
    refined: true,
    overview: [
      { label: 'Source', value: 'EU Horizon Europe EMERALDS project; bus observations and connected-vehicle data from Cariad (more than 25,000 devices).' },
      { label: 'Reference', value: 'Cariad connected-vehicle speeds, used as the comparison reference instead of Google.' },
      { label: 'Coverage', value: '638 road segments in York, with buses: 214 vehicles across 63 bus lines.' },
      { label: 'Period', value: '22 July – 12 August 2025, 07:00–22:00, 15-minute intervals.' },
    ],
    purposeTitle: 'Research focus',
    purpose: [
      'Applying the bus-probe approach to a second city, with connected-vehicle speeds as the reference, to evaluate how well the method transfers beyond Brussels.',
    ],
    sections: [
      {
        title: 'Data example',
        figures: [],
        groups: [
          {
            title: '',
            note: 'The 638 road segments of the York case study are shown in black. Bus observations and connected-vehicle reference speeds are matched to these segments in 15-minute intervals.',
            figures: [
              {
                src: yorkMap,
                alt: 'Map of the York streets used in the case study',
                caption: 'The York streets in the study.',
              },
            ],
          },
        ],
      },
      {
        title: 'Results',
        note: 'Connected-vehicle (Cariad) and bus-derived speeds for two streets on 28 July. No quantitative error results for York are included here yet.',
        figures: [
          {
            src: yorkSeries1,
            alt: 'Line chart of Cariad-derived and bus-derived speeds for one street over a day',
            caption: 'First street: connected-vehicle (blue) and bus-derived (orange) speeds through the day.',
          },
          {
            src: yorkSeries2,
            alt: 'Line chart of Cariad-derived and bus-derived speeds for a second street over a day',
            caption: 'Second street: gaps appear where no observations were available.',
          },
        ],
      },
    ],
  },
];
