import React from "react";
import { t, card, cardHead, h2 } from "../theme";

export function Card({ title, aside, children, headStyle, bodyStyle, style }) {
  return (
    <section style={{ ...card, ...style }}>
      {(title || aside) && (
        <header style={{ ...cardHead, ...headStyle }}>
          {title && <h2 style={h2}>{title}</h2>}
          {aside}
        </header>
      )}
      {children && <div style={bodyStyle}>{children}</div>}
    </section>
  );
}

export function SourceLine({ children }) {
  return <span style={{ fontSize: 11.5, color: t.soft }}>{children}</span>;
}

export function Eyebrow({ children, color = t.label, style }) {
  return (
    <div
      style={{
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: ".05em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function HoverButton({ children, hover, style, ...rest }) {
  const [on, setOn] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      style={{ cursor: "pointer", ...style, ...(on ? hover : null) }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Chip({ children, tone = "neutral" }) {
  const tones = {
    neutral: { color: t.body, border: `1px solid ${t.line}`, background: "transparent" },
    accent: { color: t.accent, border: `1px solid ${t.accentTintBorder}`, background: t.accentTint },
  };
  return (
    <span style={{ fontSize: 12.5, borderRadius: 14, padding: "4px 10px", ...tones[tone] }}>
      {children}
    </span>
  );
}

export function InfoBox({ heading, children, tone = "neutral" }) {
  const tones = {
    neutral: { border: `1px solid ${t.line}`, background: t.surfaceAlt, headColor: t.label, bodyColor: t.body },
    accent: { border: `1px solid ${t.accentTintBorder}`, background: t.accentTint, headColor: t.accent, bodyColor: t.accentDeep },
    warn: { border: `1px solid ${t.warnBorder}`, background: t.warnBg, headColor: t.warnInk, bodyColor: t.warnBody },
  };
  const s = tones[tone];
  return (
    <div style={{ border: s.border, background: s.background, borderRadius: 8, padding: "12px 13px" }}>
      {heading && <Eyebrow color={s.headColor}>{heading}</Eyebrow>}
      <div style={{ marginTop: 5, fontSize: 13, lineHeight: 1.55, color: s.bodyColor }}>{children}</div>
    </div>
  );
}

export function BarRow({ label, valueDisplay, pct }) {
  const fill = pct >= 90 ? t.accent : pct >= 35 ? t.barMid : t.barLight;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "74px 1fr 48px", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 12.5, color: t.muted }}>{label}</span>
      <span style={{ height: 14, background: t.lineSoft, borderRadius: 3, overflow: "hidden" }}>
        <span style={{ display: "block", height: 14, width: `${pct}%`, background: fill, borderRadius: 3 }} />
      </span>
      <span style={{ fontSize: 12.5, fontWeight: 600, textAlign: "right" }}>{valueDisplay}</span>
    </div>
  );
}
