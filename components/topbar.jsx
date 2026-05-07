const TopBar = ({ density, tone, onTogglePanel }) => {
  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(245, 241, 236, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--line-2)",
      padding: "12px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{
          width: 28, height: 28,
          background: "var(--ink)",
          borderRadius: 4,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--paper)",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}>743</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" }}>
            TAE743 상세페이지 기획안 <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>v1.0</span>
          </div>
          <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", marginTop: 2 }}>
            CHRONIC ROSACEA CARE · WORKING DOCUMENT
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 11 }} className="mono">
        <Tag>DESIGN</Tag>
        <Tag>COPY</Tag>
        <Tag>MARKETING</Tag>
        <div style={{ width: 1, height: 20, background: "var(--line-2)" }}></div>
        <span style={{ color: "var(--ink-3)" }}>DENSITY</span>
        <span style={{ color: "var(--ink)", fontWeight: 600 }}>{density === "summary" ? "SUMMARY" : "DETAILED"}</span>
        <span style={{ color: "var(--ink-3)" }}>·</span>
        <span style={{ color: "var(--ink-3)" }}>TONE</span>
        <span style={{ color: "var(--ink)", fontWeight: 600 }}>{tone.toUpperCase()}</span>
      </div>
    </div>
  );
};

const Tag = ({ children }) => (
  <span style={{
    fontSize: 9.5,
    letterSpacing: "0.12em",
    color: "var(--ink-2)",
    padding: "3px 7px",
    border: "1px solid var(--line-2)",
    borderRadius: 2,
  }}>{children}</span>
);

window.TopBar = TopBar;
