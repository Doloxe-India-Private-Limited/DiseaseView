import React from "react";
import { t } from "../theme";
import { Card, Eyebrow, InfoBox } from "./primitives";

export function InfographicCard({ asset, onDownload }) {
  if (!asset) return null;
  return (
    <Card
      title="Disease overview infographic"
      headStyle={{ padding: "13px 16px" }}
      aside={
        <a href={asset.storageUrl} download onClick={onDownload} style={{ fontSize: 12.5, fontWeight: 600, color: t.link, textDecoration: "none" }}>
          Download
        </a>
      }
      bodyStyle={{ padding: 12 }}
    >
      <img
        src={asset.storageUrl}
        alt={asset.altText}
        style={{ display: "block", width: "100%", height: "auto", border: `1px solid ${t.line}`, borderRadius: 6, background: t.surface }}
      />
    </Card>
  );
}

export function BiomarkerCard({ biomarkers }) {
  return (
    <Card title="Diagnosis & biomarkers" headStyle={{ justifyContent: "flex-start" }} bodyStyle={{ padding: "16px 18px 18px" }}>
      <div style={{ fontSize: 12.5, fontWeight: 700, color: t.accent, marginBottom: 12 }}>{biomarkers.intro}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
        {biomarkers.domains.map((d) => (
          <InfoBox key={d.domainCode} heading={null}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: t.ink }}>
              {d.domainCode} — {d.domainName}
            </div>
            <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.55, color: t.muted }}>{d.description}</div>
          </InfoBox>
        ))}
      </div>
      <p style={{ margin: "12px 0 0", fontSize: 13, lineHeight: 1.6, color: t.body }}>{biomarkers.closing}</p>
    </Card>
  );
}

export function UnmetNeedsCard({ needs }) {
  return (
    <Card title="Unmet needs" headStyle={{ justifyContent: "flex-start" }} bodyStyle={{ padding: "14px 18px 18px", display: "grid", gridTemplateColumns: "1fr", gap: 11 }}>
      {needs.map((need, i) => (
        <div key={i} style={{ display: "flex", gap: 10 }}>
          <span style={{ flex: "none", width: 20, height: 20, borderRadius: 5, background: t.accentTint, color: t.accent, fontSize: 11.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {i + 1}
          </span>
          <span style={{ fontSize: 13.5, lineHeight: 1.55, color: t.body }}>{need}</span>
        </div>
      ))}
    </Card>
  );
}

export function MortalityCostCard({ items }) {
  return (
    <Card title="Mortality & cost" headStyle={{ padding: "13px 16px", justifyContent: "flex-start" }} bodyStyle={{ padding: "13px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <div key={item.valueDisplay} style={i > 0 ? { borderTop: `1px solid ${t.lineFaint}`, paddingTop: 11 } : undefined}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{item.valueDisplay}</div>
          <div style={{ fontSize: 12.5, color: t.muted, lineHeight: 1.5, marginTop: 3 }}>{item.footnote}</div>
        </div>
      ))}
    </Card>
  );
}

export function AtAGlanceCard({ facts }) {
  return (
    <Card title="At a glance" headStyle={{ padding: "13px 16px", justifyContent: "flex-start" }} bodyStyle={{ padding: "13px 16px", display: "flex", flexDirection: "column", gap: 11 }}>
      {facts.map((f) => (
        <div key={f.label}>
          <div style={{ fontSize: 11.5, color: t.label }}>{f.label}</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 2 }}>{f.valueText}</div>
        </div>
      ))}
    </Card>
  );
}

export function CoverageCard({ counts, onOpen }) {
  if (!counts?.length) return null;
  const labels = {
    drugs: "Drugs",
    companies: "Companies",
    clinical_trials: "Clinical trials",
    news_deals: "News & deals",
    pipeline_drugs: "Drugs in development",
  };
  return (
    <Card title="Coverage in database" headStyle={{ padding: "13px 16px", justifyContent: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {counts.map((c, i) => (
          <a
            key={c.entity}
            href="#"
            onClick={() => onOpen?.(c.entity)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderBottom: i === counts.length - 1 ? "none" : `1px solid ${t.lineFaint}`,
              color: t.ink,
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: 13.5 }}>{labels[c.entity] ?? c.entity}</span>
            <span style={{ fontSize: 15, fontWeight: 700 }}>{c.countValue.toLocaleString()}</span>
          </a>
        ))}
      </div>
    </Card>
  );
}

export { Eyebrow };
