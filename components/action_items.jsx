/* 향후 실행 과제 + 한 줄 요약 */
const ActionItemsSection = ({ tone, density }) => {
  const items = [
    { team: "DESIGN", color: "var(--accent)", title: "임상 그래프 + 비교표 시안 확정", detail: "0일→14일 라인 차트, 4행 비교표 최종 디자인" },
    { team: "COPY", color: "var(--rose)", title: "타겟 톤앤매너 유지", detail: "차분하고 신뢰감 있는 톤. 회의감을 자극하지 않게." },
    { team: "LEGAL", color: "var(--warn)", title: "엑소좀 효능 표현 검토", detail: "'치료' 오인 문구 배제, '전달 기술' 중심 서술 확인" },
  ];

  return (
    <div className="screen-block">
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── ACTION ITEMS · 06
        </div>
        <h2 className="serif" style={{ fontSize: 24, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 22 }}>
          다음으로 해야 할 일.
        </h2>

        <div style={{ display: "grid", gap: 1, background: "var(--line-2)", border: "1px solid var(--line-2)" }}>
          {items.map((it, i) => (
            <div key={i} style={{ background: "var(--bg)", padding: "16px 18px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div className="mono" style={{
                fontSize: 9,
                letterSpacing: "0.16em",
                color: it.color,
                fontWeight: 600,
                minWidth: 56,
                paddingTop: 2,
              }}>
                {it.team}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>
                  {it.title}
                </div>
                <div style={{ fontSize: 11.5, color: "var(--ink-2)", lineHeight: 1.5 }}>
                  {it.detail}
                </div>
              </div>
              <div style={{
                width: 14, height: 14,
                border: "1px solid var(--line-2)",
                background: "var(--paper)",
                flexShrink: 0,
                marginTop: 1,
              }}></div>
            </div>
          ))}
        </div>

        {/* 한 줄 요약 */}
        <div style={{
          marginTop: 32,
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "26px 22px",
          position: "relative",
        }}>
          <div className="mono" style={{ fontSize: 9.5, opacity: 0.6, letterSpacing: "0.18em", marginBottom: 10 }}>
            ── ONE-LINE SUMMARY
          </div>
          <div className="serif" style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 400 }}>
            우리 제품은 <em style={{ color: "var(--rose-soft)", fontStyle: "italic" }}>'일시적 소방수'가 아니라</em> 평소 붉은기 수치(Baseline) 자체를 낮추는 <em style={{ color: "var(--rose-soft)", fontStyle: "italic" }}>'피부 체질 개선 솔루션'</em>으로 포지셔닝하여, 기존 진정 제품에 실망한 만성 홍조 시장을 공략합니다.
          </div>
        </div>

        <div className="mono" style={{ marginTop: 28, fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.14em", textAlign: "center" }}>
          — END · TAE743 PLANNING DOC v1.0 —
        </div>
      </div>
    </div>
  );
};

window.ActionItemsSection = ActionItemsSection;
