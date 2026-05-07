/* Tweaks panel — 정보 밀도 + 톤 전환 */
const TweaksPanel = ({ density, setDensity, tone, setTone, showAnnotations, setShowAnnotations, onClose }) => {
  return (
    <div style={{
      position: "fixed",
      right: 24,
      bottom: 24,
      width: 280,
      background: "var(--paper)",
      border: "1px solid var(--ink)",
      boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
      zIndex: 200,
      fontSize: 12,
    }}>
      <div style={{
        padding: "10px 14px",
        background: "var(--ink)",
        color: "var(--paper)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", fontWeight: 600 }}>TWEAKS</div>
        <button onClick={onClose} style={{ color: "var(--paper)", fontSize: 14, lineHeight: 1, padding: 0 }}>×</button>
      </div>

      <div style={{ padding: "14px 14px 16px" }}>
        <TweakRow label="DENSITY" hint="요약 vs 상세">
          <div style={{ display: "flex", gap: 4 }}>
            {[["summary", "요약"], ["detailed", "상세"]].map(([k, l]) => (
              <button
                key={k}
                onClick={() => setDensity(k)}
                style={{
                  flex: 1,
                  padding: "7px 8px",
                  fontSize: 11,
                  border: "1px solid",
                  borderColor: density === k ? "var(--ink)" : "var(--line-2)",
                  background: density === k ? "var(--ink)" : "var(--paper)",
                  color: density === k ? "var(--paper)" : "var(--ink-2)",
                  fontWeight: density === k ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >{l}</button>
            ))}
          </div>
        </TweakRow>

        <TweakRow label="TONE" hint="문서 톤앤매너">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {[
              ["clinical", "의료 신뢰"],
              ["derma", "더마 따뜻"],
              ["modern", "모던 컨셉"],
              ["scientific", "사이언티픽"],
            ].map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTone(k)}
                style={{
                  padding: "7px 8px",
                  fontSize: 10.5,
                  border: "1px solid",
                  borderColor: tone === k ? "var(--accent)" : "var(--line-2)",
                  background: tone === k ? "var(--accent)" : "var(--paper)",
                  color: tone === k ? "var(--paper)" : "var(--ink-2)",
                  fontWeight: tone === k ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >{l}</button>
            ))}
          </div>
        </TweakRow>

        <TweakRow label="ANNOTATIONS" hint="우측 기획 의도 주석">
          <div style={{ display: "flex", gap: 4 }}>
            {[["true", "ON"], ["false", "OFF"]].map(([k, l]) => {
              const v = k === "true";
              return (
                <button
                  key={k}
                  onClick={() => setShowAnnotations(v)}
                  style={{
                    flex: 1,
                    padding: "7px 8px",
                    fontSize: 11,
                    border: "1px solid",
                    borderColor: showAnnotations === v ? "var(--ink)" : "var(--line-2)",
                    background: showAnnotations === v ? "var(--ink)" : "var(--paper)",
                    color: showAnnotations === v ? "var(--paper)" : "var(--ink-2)",
                    fontWeight: showAnnotations === v ? 600 : 400,
                    cursor: "pointer",
                  }}
                >{l}</button>
              );
            })}
          </div>
        </TweakRow>

        <div className="mono" style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--line)", fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.1em", lineHeight: 1.5 }}>
          [ESC] 또는 우상단 버튼으로<br />
          패널을 닫을 수 있습니다.
        </div>
      </div>
    </div>
  );
};

const TweakRow = ({ label, hint, children }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
      <div className="mono" style={{ fontSize: 9.5, color: "var(--ink)", letterSpacing: "0.14em", fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: 10, color: "var(--ink-3)" }}>{hint}</div>
    </div>
    {children}
  </div>
);

window.TweaksPanel = TweaksPanel;
