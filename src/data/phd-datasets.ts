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
import bruEarlyErrors from '~/assets/phd/ds/brussels-early-errors.png';
import stibSample from '~/assets/phd/ds/brussels-stib-sample.png';
import busVsGoogle from '~/assets/phd/ds/brussels-bus-vs-google.png';
import studyArea from '~/assets/phd/ds/brussels-study-area.jpg';
import tableBus from '~/assets/phd/ds/brussels-table-bus.png';
import tableModel from '~/assets/phd/ds/brussels-table-model.png';
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

export interface DatasetSection {
  title: string;
  note?: string;
  figures: DatasetFigure[];
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
      { label: 'Source', value: 'MobiSpace project ([project number to be added])' },
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
    overview: [
      { label: 'Source', value: 'PeMSD4, collected by the California Department of Transportation (Caltrans). A preprocessed version is public.' },
      { label: 'Coverage', value: 'Highways in the San Francisco Bay Area' },
      { label: 'Period', value: 'January – February 2018' },
      { label: 'Size', value: '307 loop detectors, each measuring average speed, flow and occupancy. This research uses average speed.' },
      { label: 'Traffic', value: 'Over 80% of recorded speeds fall between 60 and 65 mph, which indicates mostly free-flowing traffic.' },
    ],
    purpose: [
      'Apply a range of graph neural network designs to the missing-value problem on a well-known dataset.',
      'Because the data come preprocessed, the focus stays on the imputation methods themselves.',
    ],
    sections: [
      {
        title: 'Data examples',
        figures: [
          {
            src: sanFranciscoHistogram,
            alt: 'Histogram of recorded speeds in the PeMSD4 dataset',
            caption: 'Distribution of recorded speeds: most readings are between 60 and 65 mph.',
          },
          {
            src: sanFranciscoDay,
            alt: 'Line chart of average speed over one day for one sensor',
            caption: 'Average speed over one day for one sensor.',
          },
        ],
      },
    ],
    paper: 'icdew-2024',
    missing: 'Results on this dataset are reported in the ICDEW ’24 ablation study; a result figure from it would be needed to show them here.',
  },
  {
    id: 'brussels',
    name: 'Brussels',
    kind: 'Public transit data · Belgium',
    role: 'The main research case study, combining STIB-MIVB bus observations with reference traffic data to develop and evaluate citywide traffic speed estimation.',
    card: { src: bruBusMap, alt: 'Map of the Brussels bus-line road network' },
    overview: [
      { label: 'Source', value: 'STIB-MIVB GTFS-Realtime bus data, accessed through the Brussels Mobility Twin platform' },
      { label: 'Reference', value: 'Google Routes API: traffic-aware travel times (driving mode), used as a proxy for general traffic, not as ground truth' },
      { label: 'Early study', value: '1,146 road segments and 442 intersections · June 2023 morning peaks, 30 days · 10-minute intervals' },
      { label: 'Neighbourhood study', value: '74 road segments in Ixelles and Etterbeek' },
      { label: 'Citywide study', value: '1,366 road segments · 68 bus lines · about 110 km² · six weeks of weekday mornings (07:00–13:00), Nov – Dec 2025, 15-minute intervals' },
    ],
    purpose: [
      'Early study: recover missing bus speeds on a large, complex network. Few buses run off-peak, so morning peaks were used.',
      'Neighbourhood study: test whether bus speeds reflect general traffic, and learn the mapping from bus speeds to overall traffic.',
      'Citywide study: scale that mapping to the whole network. The citywide map is the one shown in the Overview.',
    ],
    sections: [
      {
        title: 'Data sources',
        note: 'Related sources used together: the open bus data, the road segments between stops, and the Google reference.',
        figures: [
          {
            src: stibSample,
            alt: 'Sample tables: average bus speed per road segment and 15-minute interval, and the stops bounding each segment',
            caption: 'STIB-MIVB bus data. Top: average speed per segment and 15-minute interval, with blanks where no bus passed. Bottom: the stops that bound each segment.',
          },
          {
            src: busVsGoogle,
            alt: 'Line chart of bus-derived and Google-derived average speed over one day',
            caption: 'Bus-derived speeds (blue) and the Google-derived reference (orange) over one day. Buses follow the same rhythm but are noisier.',
          },
          {
            src: studyArea,
            alt: 'Map of the 74 road segments in Ixelles and Etterbeek',
            caption: 'Neighbourhood study area: 74 road segments in Ixelles and Etterbeek, mixing residential streets and traffic hubs.',
            crop: true,
          },
        ],
      },
      {
        title: 'Early study · missing data',
        figures: [
          {
            src: bruEarlyErrors,
            alt: 'Bar chart of the number of road segments by absolute error magnitude',
            caption: 'Absolute error of the model’s estimates on the 1,146-segment network, with 25% of values missing in one snapshot.',
          },
        ],
      },
      {
        title: 'Neighbourhood study · 74 segments',
        note: 'Errors are measured against the Google-derived reference. This is a separate experiment from the citywide one below.',
        figures: [
          {
            src: tableBus,
            alt: 'Table of per-segment errors for raw bus speeds against the Google reference, with a network total of 4.43 km/h MAE',
            caption: 'Raw bus speeds versus the reference: network MAE 4.43 km/h.',
          },
          {
            src: tableModel,
            alt: 'Table of per-segment errors for model estimates against the Google reference, with a network total of 2.44 km/h MAE',
            caption: 'Model estimates versus the reference: network MAE 2.44 km/h.',
          },
          {
            src: neighbourhoodSeries,
            alt: 'Line chart of bus-derived, Google-derived and model-derived speeds for one segment',
            caption: 'One segment with high bus density (Porte de Namur – Trône): bus-derived, Google-derived and model-derived speeds over a day.',
          },
        ],
      },
      {
        title: 'Citywide study · 1,366 segments',
        figures: [
          {
            src: maeDistribution,
            alt: 'Histogram of segment-level mean absolute error for model estimates and raw bus-derived speeds',
            caption: 'Segment-level error: model estimates (blue) against raw bus speeds (orange), both measured against the Google reference.',
          },
          {
            src: spatialError,
            alt: 'Map of segment-level error across Brussels with three circled areas of higher error',
            caption: 'Where errors are higher: warmer colours mean larger error. Circled areas: dense intersections around the EU quarter, and northern and southern access corridors.',
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
    overview: [
      { label: 'Project', value: 'EU Horizon Europe EMERALDS. York is presented as a final update of the project work.' },
      { label: 'Reference', value: 'Cariad connected-vehicle data from more than 25,000 devices' },
      { label: 'Probes', value: 'Buses: 214 vehicles across 63 bus lines' },
      { label: 'Period', value: '22 July – 12 August 2025, 07:00–22:00, 15-minute intervals' },
      { label: 'Size', value: '638 road segments' },
    ],
    purpose: [
      'Apply the bus-probe approach to a second city, with connected-vehicle speeds replacing the Google reference.',
      'These are separate data and results from the Brussels experiments and are not compared with them here.',
    ],
    sections: [
      {
        title: 'Data examples',
        note: 'Speeds from connected vehicles (Cariad) and from buses on two streets on 28 July.',
        figures: [
          {
            src: yorkMap,
            alt: 'Map of the York streets used in the case study',
            caption: 'The York streets in the study.',
            crop: true,
            position: 'center 30%',
          },
          {
            src: yorkSeries1,
            alt: 'Line chart of Cariad-derived and bus-derived speeds for one street over a day',
            caption: 'First street: connected-vehicle (blue) and bus-derived (orange) speeds follow similar patterns through the day.',
          },
          {
            src: yorkSeries2,
            alt: 'Line chart of Cariad-derived and bus-derived speeds for a second street over a day',
            caption: 'Second street: gaps appear where no observations were available.',
          },
        ],
      },
    ],
    missing: 'No quantitative results for York are in the supplied material; an error table or chart from the EMERALDS deliverable would be needed to show them.',
  },
];
