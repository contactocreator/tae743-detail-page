/* Annotation component — 우측 기획 의도 주석 (포스트잇 스타일) */
const Annotation = ({ label, intent, children, color = "default", connectTo, density = "detailed" }) => {
  if (density === "summary" && !children) return null;
  const colors = {
    default: { bg: "var(--postit)", line: "var(--postit-line)", ink: "#5A4A1F" },
    strategy: { bg: "#E8EDE6", line: "#B8C7B0", ink: "#2D4739" },
    data: { bg: "#F0E5E1", line: "#D6B8B0", ink: "#7A3A30" },
    copy: { bg: "#EAE4DC", line: "#C7BEAE", ink: "#4A3F2F" },
  };
  const c = colors[color] || colors.default;
  return (
    <div style={{
      background: c.bg,
      borderLeft: `3px solid ${c.line}`,
      padding: "12px 14px",
      marginBottom: "10px",
      fontSize: "12px",
      lineHeight: 1.55,
      color: c.ink,
      position: "relative",
      borderRadius: "1px",
    }}>
      {label && (
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "9.5px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          opacity: 0.7,
          marginBottom: "6px",
          fontWeight: 600,
        }}>
          {label}
        </div>
      )}
      {intent && (
        <div style={{ fontWeight: 600, marginBottom: children ? "6px" : 0, fontSize: "12.5px" }}>
          {intent}
        </div>
      )}
      {children && density !== "summary" && (
        <div style={{ opacity: 0.85 }}>{children}</div>
      )}
    </div>
  );
};

const SectionHeader = ({ num, title, subtitle }) => (
  <div style={{
    display: "flex",
    alignItems: "baseline",
    gap: 14,
    marginBottom: 10,
    paddingBottom: 8,
    borderBottom: "1px solid var(--line-2)",
  }}>
    <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.1em", flexShrink: 0 }}>
      {num}
    </div>
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{title}</div>
      {subtitle && <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 2 }}>{subtitle}</div>}
    </div>
  </div>
);

window.Annotation = Annotation;
window.SectionHeader = SectionHeader;
