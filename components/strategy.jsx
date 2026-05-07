/* 핵심 전략 섹션 — 응급 진통제 vs 체질 개선 */
const StrategySection = ({ tone, density }) => {
  const [active, setActive] = React.useState("chronic"); // 'acute' | 'chronic'

  return (
    <div className="screen-block" style={{ background: "var(--paper)" }}>
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── CORE STRATEGY · 01
        </div>

        <h2 className="serif" style={{ fontSize: 30, lineHeight: 1.18, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>
          진통제가 아니라,<br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>체질을 바꿉니다.</em>
        </h2>

        <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.65, maxWidth: 380 }}>
          기존 진정 제품은 외부 자극 후 '일시적 완화'에만 머무릅니다.
          우리는 자극 없는 평소 상태의 <strong style={{ color: "var(--ink)" }}>붉기 자체</strong>를 낮추는,
          근본적인 체질 개선을 제안합니다.
        </p>

        {/* 대비 카드 */}
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--line-2)" }}>
          <button
            onClick={() => setActive("acute")}
            style={{
              padding: "20px 16px",
              textAlign: "left",
              background: active === "acute" ? "var(--bg)" : "transparent",
              borderRight: "1px solid var(--line-2)",
              transition: "all 0.25s",
              cursor: "pointer",
            }}
          >
            <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.12em", marginBottom: 8 }}>
              일반 진정 크림
            </div>
            <div className="serif" style={{ fontSize: 18, fontWeight: 500, color: "var(--ink-2)", marginBottom: 6, lineHeight: 1.3 }}>
              응급 진통제
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", lineHeight: 1.5 }}>
              자극이 일어났을 때<br/>
              잠시 가라앉히는
            </div>
          </button>
          <button
            onClick={() => setActive("chronic")}
            style={{
              padding: "20px 16px",
              textAlign: "left",
              background: active === "chronic" ? "var(--accent)" : "transparent",
              color: active === "chronic" ? "var(--paper)" : "var(--ink)",
              transition: "all 0.25s",
              cursor: "pointer",
            }}
          >
            <div className="mono" style={{ fontSize: 9.5, opacity: 0.7, letterSpacing: "0.12em", marginBottom: 8 }}>
              TAE743
            </div>
            <div className="serif" style={{ fontSize: 18, fontWeight: 500, marginBottom: 6, lineHeight: 1.3 }}>
              체질 개선
            </div>
            <div style={{ fontSize: 11, opacity: 0.85, lineHeight: 1.5 }}>
              자극 없는 평소 상태에서<br />
              붉기 자체를 낮추는
            </div>
          </button>
        </div>

        {/* 활성 카드 상세 */}
        <div style={{ marginTop: 18, padding: "18px 20px", background: "var(--bg)", border: "1px solid var(--line)", minHeight: 120 }}>
          {active === "chronic" ? (
            <div className="fade-in" key="chronic">
              <div className="mono" style={{ fontSize: 9.5, color: "var(--accent)", letterSpacing: "0.14em", marginBottom: 10 }}>
                OUR APPROACH
              </div>
              <div style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.6, marginBottom: 12 }}>
                자극을 주지 않은 <strong>평상시 베이스라인 붉기(a*)</strong>를 2주간 측정.
                피부 민감도 자체를 낮추고 장벽을 재구성합니다.
              </div>
              <div style={{ display: "flex", gap: 14, fontSize: 11, color: "var(--ink-2)" }}>
                <span>· 2주 임상</span>
                <span>· 베이스라인 측정</span>
                <span>· p&lt;.001</span>
              </div>
            </div>
          ) : (
            <div className="fade-in" key="acute">
              <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.14em", marginBottom: 10 }}>
                CONVENTIONAL
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 12 }}>
                인위적으로 열·UV 자극을 가한 후 회복 정도를 측정.
                광고는 자극적이나, 만성 홍조 고객의 일상은 다룰 수 없습니다.
              </div>
              <div style={{ display: "flex", gap: 14, fontSize: 11, color: "var(--ink-3)" }}>
                <span>· 자극 유도</span>
                <span>· 회복 측정</span>
                <span>· 일시적 완화</span>
              </div>
            </div>
          )}
        </div>

        {/* 슬로건 */}
        <div style={{ marginTop: 28, padding: "20px 0", borderTop: "1px solid var(--line-2)", borderBottom: "1px solid var(--line-2)" }}>
          <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.18em", marginBottom: 10 }}>
            SLOGAN — DRAFT
          </div>
          <div className="serif" style={{ fontSize: 18, lineHeight: 1.4, fontWeight: 400, color: "var(--ink)", letterSpacing: "-0.01em" }}>
            도포 후 진정에서 끝나지 않는,<br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>평소 피부 민감도를 낮추는</em><br />
            만성 홍조 케어
          </div>
        </div>
      </div>
    </div>
  );
};

window.StrategySection = StrategySection;
