import React from "react";
import { t } from "./theme";
import defaultData from "./data/diseaseOverview";
import { PageHeader, TabBar } from "./components/PageChrome";
import {
  DescriptionCard,
  EpidemiologyCard,
  StagesCard,
  SymptomsCard,
  RiskFactorsCard,
  GeographyCard,
  TreatmentCard,
  SourcesCard,
  DataCurrencyCard,
} from "./components/MainColumn";
import {
  InfographicCard,
  BiomarkerCard,
  UnmetNeedsCard,
  MortalityCostCard,
  AtAGlanceCard,
  CoverageCard,
} from "./components/RailColumn";

/**
 * Disease Overview page.
 *
 * `data` matches the JSON payload of query Q18 in disease_overview_schema.sql,
 * so in production you pass the API response straight through:
 *
 *   const { data } = useSWR(`/api/diseases/${slug}/overview`, fetcher);
 *   return <DiseaseOverviewPage data={data} />;
 */
export default function DiseaseOverviewPage({ data = defaultData }) {
  const [activeTab, setActiveTab] = React.useState(
    data.tabs.find((x) => x.active)?.label ?? data.tabs[0].label
  );
  const infographic = data.assets?.find((a) => a.assetKind === "overview_infographic");

  return (
    <div style={{ width: 1440, margin: "0 auto", background: t.surface, minHeight: "100vh", color: t.ink }}>
      <PageHeader disease={data.disease} />
      <TabBar tabs={data.tabs} activeTab={activeTab} onSelect={setActiveTab} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 460px", gap: 24, padding: "24px 32px 56px", background: t.canvas, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <DescriptionCard disease={data.disease} />
          <EpidemiologyCard
            metrics={data.metrics}
            metricsSourceLine={data.metricsSourceLine}
            ageBands={data.ageBands}
            segmentation={data.segmentation}
            epiNotes={data.epiNotes}
          />
          <StagesCard stages={data.stages} types={data.types} stagingSystem={data.stagingSystem} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
            <SymptomsCard symptoms={data.symptoms} />
            <RiskFactorsCard
              riskFactors={data.riskFactors}
              riskFactorNotes={data.riskFactorNotes}
              sourceLine={data.riskFactorSourceLine}
            />
          </div>
          <GeographyCard markets={data.markets} intro={data.geographyIntro} note={data.geographyNote} />
          <TreatmentCard treatments={data.treatments} />
          <SourcesCard sources={data.sources} verificationNote={data.verificationNote} />
          <DataCurrencyCard note={data.disease.dataCurrencyNote} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <InfographicCard asset={infographic} />
          <BiomarkerCard biomarkers={data.biomarkers} />
          <UnmetNeedsCard needs={data.unmetNeeds} />
          <MortalityCostCard items={data.mortalityAndCost} />
          <AtAGlanceCard facts={data.atAGlance} />
          <CoverageCard counts={data.coverage} />
        </div>
      </div>
    </div>
  );
}
