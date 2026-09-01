export const t = {
  accent: "#0e6b5e",
  accentDark: "#0a564c",
  accentDeep: "#0b4f45",
  accentTint: "#eaf4f2",
  accentTintBorder: "#d3e7e3",
  barMid: "#2f8b7d",
  barLight: "#5aa79b",
  ink: "#1f2937",
  body: "#374151",
  muted: "#4b5563",
  label: "#6b7280",
  soft: "#8b959d",
  faint: "#98a2ab",
  placeholder: "#9aa5ae",
  line: "#e3e8ec",
  lineSoft: "#eef1f3",
  lineFaint: "#f2f5f6",
  fieldBorder: "#e0e5e9",
  btnBorder: "#d5dbe0",
  surface: "#fff",
  surfaceAlt: "#f8fafb",
  canvas: "#f6f8f9",
  warnBg: "#fdf6f1",
  warnBorder: "#f0d9c9",
  warnInk: "#a15a2a",
  warnBody: "#6b4526",
  link: "#1a73c8",
};

export const card = {
  background: t.surface,
  border: `1px solid ${t.line}`,
  borderRadius: 10,
};

export const cardHead = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 18px",
  borderBottom: `1px solid ${t.lineSoft}`,
};

export const h2 = { margin: 0, fontSize: 15, fontWeight: 700 };

export const eyebrow = {
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: ".05em",
  textTransform: "uppercase",
  color: t.label,
};

export const th = {
  padding: "10px 18px",
  fontSize: 11.5,
  fontWeight: 700,
  letterSpacing: ".05em",
  textTransform: "uppercase",
  color: t.label,
  borderBottom: `1px solid ${t.lineSoft}`,
};

export const td = {
  padding: "11px 18px",
  borderBottom: `1px solid ${t.lineFaint}`,
  color: t.muted,
  lineHeight: 1.55,
  verticalAlign: "top",
};
