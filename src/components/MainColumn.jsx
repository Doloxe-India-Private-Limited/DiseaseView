import React from "react";
import { t, th, td } from "../theme";
import { Card, SourceLine, Eyebrow, Chip, InfoBox, BarRow } from "./primitives";

export function DescriptionCard({ disease }) {
  return (
    <Card title="Disease description" aside={<SourceLine>{disease.descriptionSourceLine}</SourceLine>} bodyStyle={{ padding: "16px 18px 18px" }}>
      <p style={{ margin: "0 0 14px", fontSize: 14.5, lineHeight: 1.65, color: t.ink, textWrap: "pretty" }}>{disease.summary}</p>
      {disease.pathologyNote && (
        <div style={{ borderTop: `1px solid ${t.lineSoft}`, paddingTop: 14 }}>
          <Eyebrow style={{ marginBottom: 8 }}>Pathology & clinical significance</Eyebrow>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: t.body, textWrap: "pretty" }}>{disease.pathologyNote}</p>
        </div>
      )}
    </Card>
  );
}

export function EpidemiologyCard({ metrics, metricsSourceLine, ageBands, segmentation, epiNotes }) {
  const maxBand = Math.max(...ageBands.map((b) => b.valueNumeric));
  return (
    <Card title="Prevalence & incidence" aside={<SourceLine>{metricsSourceLine}</SourceLine>}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${metrics.length},1fr)` }}>
        {metrics.map((m, i) => (
          <div key={m.metricKey} style={{ padding: "16px 18px", borderRight: i < metrics.length - 1 ? `1px solid ${t.lineSoft}` : "none" }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, color: t.label }}>{m.label}</div>
            <div style={{ marginTop: 6, fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em" }}>{m.valueDisplay}</div>
            <div style={{ marginTop: 3, fontSize: 11.5, color: t.soft }}>{m.footnote}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: `1px solid ${t.lineSoft}` }}>
        <div style={{ padding: "16px 18px", borderRight: `1px solid ${t.lineSoft}` }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>US prevalence by age band</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ageBands.map((b) => (
              <BarRow key={b.segmentLabel} label={b.segmentLabel} valueDisplay={b.valueDisplay} pct={Math.round((b.valueNumeric / maxBand) * 100)} />
            ))}
          </div>
          <div style={{ marginTop: 18, borderTop: `1px solid ${t.lineSoft}`, paddingTop: 14 }}>
            <Eyebrow style={{ marginBottom: 9 }}>Population segmentation</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 13, color: t.body, lineHeight: 1.5 }}>
              {segmentation.map((s) => (
                <div key={s.label}>
                  <span style={{ fontWeight: 600 }}>{s.label} —</span> {s.narrative}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: "16px 18px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Incidence & population impact</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {epiNotes.map((n) => (
              <InfoBox key={n.noteKind} heading={n.heading} tone={n.highlight ? "accent" : "neutral"}>
                {n.body}
              </InfoBox>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function StagesCard({ stages, types, stagingSystem }) {
  return (
    <Card title="Disease stages" aside={<SourceLine>{stagingSystem}</SourceLine>}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
        <thead>
          <tr style={{ background: t.surfaceAlt, textAlign: "left" }}>
            <th style={{ ...th, width: 250 }}>Stage</th>
            <th style={th}>Defining features</th>
          </tr>
        </thead>
        <tbody>
          {stages.map((s, i) => {
            const last = i === stages.length - 1;
            return (
              <tr key={s.stageOrder}>
                <td style={{ ...td, borderBottom: last ? "none" : td.borderBottom, color: t.ink, fontWeight: 600 }}>{s.stageName}</td>
                <td style={{ ...td, borderBottom: last ? "none" : td.borderBottom }}>{s.definingFeatures}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ padding: "14px 18px", borderTop: `1px solid ${t.lineSoft}` }}>
        <Eyebrow style={{ marginBottom: 11 }}>Clinical & etiological types</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {types.map((ty) => (
            <div key={ty.typeName} style={{ border: `1px solid ${t.line}`, borderRadius: 8, padding: "12px 13px" }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.4 }}>{ty.typeName}</div>
              <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, color: t.accent }}>{ty.shareLabel}</div>
              <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: t.muted }}>{ty.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function SymptomsCard({ symptoms }) {
  const list = symptoms.filter((s) => !s.isRedFlag);
  const redFlag = symptoms.find((s) => s.isRedFlag);
  return (
    <Card title="Signs & symptoms" headStyle={{ justifyContent: "flex-start" }} bodyStyle={{ padding: "14px 18px 16px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 13.5, color: t.body, lineHeight: 1.5 }}>
        {list.map((s) => (
          <div key={s.symptomText}>{s.symptomText}</div>
        ))}
      </div>
      {redFlag && (
        <div style={{ marginTop: 14 }}>
          <InfoBox heading="Red flag → next step" tone="warn">
            {redFlag.symptomText}
          </InfoBox>
        </div>
      )}
    </Card>
  );
}

export function RiskFactorsCard({ riskFactors, riskFactorNotes, sourceLine }) {
  const fixed = riskFactors.filter((r) => r.category === "non_modifiable");
  const modifiable = riskFactors.filter((r) => r.category === "modifiable");
  return (
    <Card title="Risk factors" headStyle={{ justifyContent: "flex-start" }} bodyStyle={{ padding: "14px 18px 16px" }}>
      <Eyebrow style={{ marginBottom: 8 }}>Non-modifiable</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 13.5, color: t.body, lineHeight: 1.5, marginBottom: 16 }}>
        {fixed.map((r) => (
          <div key={r.label}>
            {r.label}
            {r.detail ? ` (${r.detail})` : ""}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 9 }}>
        <Eyebrow>Modifiable</Eyebrow>
        {riskFactorNotes?.modifiable && (
          <div style={{ fontSize: 11.5, fontWeight: 700, color: t.accent }}>{riskFactorNotes.modifiable}</div>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {modifiable.map((r) => (
          <Chip key={r.label}>{r.label}</Chip>
        ))}
      </div>
      {sourceLine && <div style={{ marginTop: 11, fontSize: 11.5, color: t.soft }}>{sourceLine}</div>}
    </Card>
  );
}

export function GeographyCard({ markets, intro, note }) {
  return (
    <Card title="Epidemiology by geography" aside={<SourceLine>{note}</SourceLine>}>
      <div style={{ padding: "14px 18px 0" }}>
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: t.body, textWrap: "pretty" }}>{intro}</p>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, marginTop: 14 }}>
        <thead>
          <tr style={{ background: t.surfaceAlt, textAlign: "left" }}>
            <th style={{ ...th, borderTop: `1px solid ${t.lineSoft}`, width: 210 }}>Market</th>
            <th style={{ ...th, padding: "10px 12px", borderTop: `1px solid ${t.lineSoft}`, width: 290 }}>Population affected</th>
            <th style={{ ...th, borderTop: `1px solid ${t.lineSoft}` }}>Key observation</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((m, i) => {
            const border = i === markets.length - 1 ? "none" : td.borderBottom;
            return (
              <tr key={m.marketName}>
                <td style={{ ...td, borderBottom: border, color: t.ink, fontWeight: 600 }}>{m.marketName}</td>
                <td style={{ ...td, padding: "11px 12px", borderBottom: border, lineHeight: 1.5 }}>{m.populationAffected}</td>
                <td style={{ ...td, borderBottom: border, lineHeight: 1.5 }}>{m.keyObservation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export function TreatmentCard({ treatments, onOpenDrugs }) {
  return (
    <Card
      title="Treatment landscape"
      aside={
        <a href="#" onClick={onOpenDrugs} style={{ fontSize: 12.5, fontWeight: 600, color: t.link, textDecoration: "none" }}>
          Open in Drugs →
        </a>
      }
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
        <thead>
          <tr style={{ background: t.surfaceAlt, textAlign: "left" }}>
            <th style={{ ...th, width: 280 }}>Modality</th>
            <th style={{ ...th, padding: "10px 12px" }}>Description</th>
            <th style={{ ...th, width: 150 }}>Stage of disease</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((tr, i) => {
            const border = i === treatments.length - 1 ? "none" : td.borderBottom;
            return (
              <tr key={tr.modality}>
                <td style={{ ...td, borderBottom: border, color: t.ink, fontWeight: 600 }}>{tr.modality}</td>
                <td style={{ ...td, padding: "11px 12px", borderBottom: border, lineHeight: 1.5 }}>
                  {tr.descriptionParts
                    ? tr.descriptionParts.map((p, j) =>
                        p.href ? (
                          <a key={j} href={p.href} style={{ color: t.link, textDecoration: "none" }}>
                            {p.text}
                          </a>
                        ) : (
                          <React.Fragment key={j}>{p.text}</React.Fragment>
                        )
                      )
                    : tr.description}
                </td>
                <td style={{ ...td, borderBottom: border }}>{tr.stageOfDisease}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export function SourcesCard({ sources, verificationNote }) {
  return (
    <Card title="Guidelines & sources" headStyle={{ justifyContent: "flex-start" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "14px 18px", borderRight: `1px solid ${t.lineSoft}`, display: "flex", flexDirection: "column", gap: 11 }}>
          {sources.map((s) => (
            <div key={s.title}>
              <a href={s.url} style={{ fontSize: 13.5, fontWeight: 600, color: t.link, textDecoration: "none" }}>
                {s.title}
              </a>
              <div style={{ fontSize: 12, color: t.soft, marginTop: 2 }}>{s.meta}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "14px 18px" }}>
          <Eyebrow style={{ marginBottom: 7 }}>Verification note</Eyebrow>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: t.muted }}>{verificationNote}</p>
        </div>
      </div>
    </Card>
  );
}

export function DataCurrencyCard({ note }) {
  return (
    <div style={{ background: t.surfaceAlt, border: `1px solid ${t.line}`, borderRadius: 10, padding: "14px 16px" }}>
      <Eyebrow>Data currency</Eyebrow>
      <div style={{ fontSize: 13, color: t.muted, marginTop: 7, lineHeight: 1.55 }}>{note}</div>
      <a href="#" style={{ display: "inline-block", marginTop: 10, fontSize: 12.5, fontWeight: 600, color: t.link, textDecoration: "none" }}>
        Report a data issue
      </a>
    </div>
  );
}
