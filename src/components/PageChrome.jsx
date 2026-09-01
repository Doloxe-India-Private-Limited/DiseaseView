import React from "react";
import { t } from "../theme";
import { HoverButton } from "./primitives";

const actionBtn = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "9px 14px",
  border: `1px solid ${t.btnBorder}`,
  borderRadius: 8,
  background: t.surface,
  fontSize: 13.5,
  fontWeight: 600,
  color: t.ink,
};

export function PageHeader({ disease, actions = ["Search Fields", "Saved Searches", "Export"], onAction }) {
  return (
    <>
      <div style={{ padding: "14px 32px 0" }}>
        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: t.ink, textDecoration: "none" }}>
          ← Back to Diseases
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, padding: "16px 32px 0" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: "#e6f2ef", color: t.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, marginTop: 4 }}>
            D
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, letterSpacing: "-0.01em" }}>{disease.name}</h1>
            <div style={{ marginTop: 5, fontSize: 13, color: t.label, display: "flex", flexWrap: "wrap", gap: 14 }}>
              <span>Therapy area: {disease.therapyArea}</span>
              {disease.icd10Code && <span>ICD-10: {disease.icd10Code}</span>}
              {disease.aliases?.length > 0 && <span>Also known as: {disease.aliases.join(", ")}</span>}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flex: "none" }}>
          {actions.map((a) => (
            <HoverButton key={a} style={actionBtn} hover={{ borderColor: t.accent, color: t.accent }} onClick={() => onAction?.(a)}>
              {a}
            </HoverButton>
          ))}
        </div>
      </div>
    </>
  );
}

export function SearchBar({ placeholder = "Search drug names, sponsors, indications, NCT-style IDs...", value, onChange }) {
  return (
    <div style={{ padding: "16px 32px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", border: `1px solid ${t.fieldBorder}`, borderRadius: 9, background: t.surfaceAlt }}>
        <span style={{ color: t.placeholder, fontSize: 14 }}>⌕</span>
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 14, color: t.ink, fontFamily: "inherit" }}
        />
        <span style={{ fontSize: 11.5, color: t.placeholder, border: `1px solid ${t.fieldBorder}`, borderRadius: 5, padding: "2px 6px", background: t.surface }}>
          ⌘K
        </span>
      </div>
    </div>
  );
}

export function TabBar({ tabs, activeTab, onSelect, onAskAi }) {
  const [hovered, setHovered] = React.useState(null);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, padding: "14px 32px 0", borderBottom: `1px solid ${t.line}` }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 28 }}>
        {tabs.map((tab) => {
          const active = tab.label === activeTab;
          return (
            <div
              key={tab.label}
              onClick={() => onSelect?.(tab.label)}
              onMouseEnter={() => setHovered(tab.label)}
              onMouseLeave={() => setHovered(null)}
              style={{
                paddingBottom: 11,
                fontSize: 14.5,
                fontWeight: active ? 700 : 600,
                color: active || hovered === tab.label ? t.accent : t.muted,
                borderBottom: active ? `2.5px solid ${t.accent}` : "none",
                cursor: "pointer",
              }}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <HoverButton
        onClick={onAskAi}
        hover={{ background: t.accentDark }}
        style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9, padding: "8px 15px", border: "none", borderRadius: 20, background: t.accent, color: "#fff", fontSize: 13.5, fontWeight: 600 }}
      >
        ✦ Ask AI
      </HoverButton>
    </div>
  );
}
