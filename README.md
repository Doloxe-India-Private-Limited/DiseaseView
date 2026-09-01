# Disease Overview — React

React port of the Alzheimer's Disease Overview mockup.

## Run

```bash
cd react
npm install
npm run dev
```

Copy the infographic to `react/public/assets/Alzheimer_s_Disease_Overview_2026.png`
(the path referenced by `assets[0].storageUrl` in the data file).

## Files

```
src/
  main.jsx                    mount
  global.css                  body reset + link colors
  theme.js                    color tokens and shared style objects
  DiseaseOverviewPage.jsx     page layout: header, tabs, 1fr/460px two-column grid
  data/diseaseOverview.js     page data — same shape as SQL query Q18
  components/
    primitives.jsx            Card, InfoBox, Chip, BarRow, HoverButton, Eyebrow
    PageChrome.jsx            PageHeader, SearchBar, TabBar
    MainColumn.jsx            description, epidemiology, stages, symptoms,
                              risk factors, geography, treatment, sources
    RailColumn.jsx            infographic, biomarkers, unmet needs,
                              mortality & cost, at a glance, coverage counts
```

## Wiring to the database

`data/diseaseOverview.js` mirrors the JSON document returned by query **Q18** in
`disease_overview_schema.sql`. To go live, drop the import and pass the API
response in:

```jsx
const { data, isLoading } = useSWR(`/api/diseases/${slug}/overview`, fetcher);
if (isLoading) return <Skeleton />;
return <DiseaseOverviewPage data={data} />;
```

Field names map 1:1 (camelCase in JS, snake_case in SQL): `metrics[].valueDisplay`
← `disease_metric.value_display`, `ageBands[].valueNumeric` ←
`disease_population_segment.value_numeric`, and so on.

Notes on two behaviors that are data-driven rather than hardcoded:

- Bar widths in `EpidemiologyCard` are computed from `valueNumeric` relative to
  the largest band, matching the `bar_pct` window function in Q5.
- `SymptomsCard` splits on `isRedFlag`: `false` rows render as the list, the
  `true` row renders the amber next-step callout.

## Styling

Inline style objects with tokens in `theme.js`, no CSS framework. Swap `theme.js`
for your design-system tokens (or replace the style objects with CSS modules /
Tailwind classes) without touching component structure.
