/* 타사 대비 비교표 — 호버 인터랙션 */
const ComparisonSection = ({ tone, density }) => {
  const [hover, setHover] = React.useState(null);

  const rows = [
    {
      key: "target",
      label: "타겟",
      acute: "외부 자극에 의한 일시적 붉은기",
      chronic: "자극 없이도 늘 붉은 '만성 민감 피부'",
      hint: "타겟 자체가 다릅니다",
    },
    {
      key: "design",
      label: "임상 설계",
      acute: "인위적 자극 유도 후 회복 측정",
      chronic: "평상시 베이스라인 붉기 측정 (2주)",
      hint: "측정 방법론의 근본 차이",
    },
    {
      key: "mechanism",
      label: "핵심 기전",
      acute: "일시적 쿨링 및 표면 진정",
      chronic: "피부 민감도 저하 및 장벽 체질 개선",
      hint: "표면이 아닌 체질에 작용",
    },
    {
      key: "message",
      label: "메시지",
      acute: "\"즉각 진정\", \"소화기 크림\"",
      chronic: "\"근본 개선\", \"피부 보약 크림\"",
      hint: "비유 자체를 바꿉니다",
    },
  ];

  return (
    <div className="screen-block">
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── DIFFERENTIATION · 02
        </div>
        <h2 className="serif" style={{ fontSize: 26, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>
          왜 우리 제품은<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>다른 카테고리</em>에 속할까요.
        </h2>
        <p style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 14, marginBottom: 22, maxWidth: 360, lineHeight: 1.6 }}>
          아래 표는 인식 전환 장치입니다. 같은 '진정' 카테고리로 보이지 않도록 명확히 분리합니다.
        </p>

        {/* 비교표 */}
        <div style={{ border: "1px solid var(--line-2)", overflow: "hidden" }}>
          {/* 헤더 */}
          <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 1fr", borderBottom: "1px solid var(--line-2)", background: "var(--bg)" }}>
            <div className="mono" style={{ padding: "12px 10px", fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.1em" }}>구분</div>
            <div style={{ padding: "12px 12px", borderLeft: "1px solid var(--line-2)" }}>
              <div className="mono" style={{ fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.12em", marginBottom: 3 }}>OTHERS</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)" }}>일반 진정 크림</div>
              <div style={{ fontSize: 10.5, color: "var(--ink-3)", marginTop: 2 }}>급성 케어</div>
            </div>
            <div style={{ padding: "12px 12px", borderLeft: "1px solid var(--line-2)", background: "var(--accent)", color: "var(--paper)" }}>
              <div className="mono" style={{ fontSize: 9, opacity: 0.7, letterSpacing: "0.12em", marginBottom: 3 }}>TAE743</div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>우리 제품</div>
              <div style={{ fontSize: 10.5, opacity: 0.85, marginTop: 2 }}>만성 케어</div>
            </div>
          </div>

          {/* 행 */}
          {rows.map((row, i) => (
            <div
              key={row.key}
              onMouseEnter={() => setHover(row.key)}
              onMouseLeave={() => setHover(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 1fr 1fr",
                borderBottom: i < rows.length - 1 ? "1px solid var(--line)" : "none",
                background: hover === row.key ? "var(--paper)" : "transparent",
                transition: "background 0.18s",
                cursor: "default",
                position: "relative",
              }}
            >
              <div className="mono" style={{ padding: "14px 10px", fontSize: 10, color: "var(--ink-2)", letterSpacing: "0.06em", display: "flex", alignItems: "center" }}>
                {row.label}
              </div>
              <div style={{
                padding: "14px 12px",
                borderLeft: "1px solid var(--line)",
                fontSize: 12,
                color: hover === row.key ? "var(--ink-3)" : "var(--ink-2)",
                lineHeight: 1.5,
                textDecoration: hover === row.key ? "line-through" : "none",
                transition: "all 0.2s",
              }}>
                {row.acute}
              </div>
              <div style={{
                padding: "14px 12px",
                borderLeft: "1px solid var(--line)",
                fontSize: 12,
                color: hover === row.key ? "var(--accent)" : "var(--ink)",
                lineHeight: 1.5,
                fontWeight: hover === row.key ? 600 : 500,
                transition: "all 0.2s",
                background: hover === row.key ? "rgba(45, 71, 57, 0.04)" : "transparent",
              }}>
                {row.chronic}
              </div>
              {hover === row.key && (
                <div className="mono fade-in" style={{
                  position: "absolute",
                  right: 8,
                  top: -2,
                  fontSize: 9,
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  background: "var(--paper)",
                  padding: "2px 6px",
                  border: "1px solid var(--accent-soft)",
                }}>
                  ↳ {row.hint}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mono" style={{ marginTop: 12, fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
          [hover any row]
        </div>
      </div>
    </div>
  );
};

window.ComparisonSection = ComparisonSection;
