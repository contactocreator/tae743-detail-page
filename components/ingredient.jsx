/* 성분 스토리텔링 — 감태 + 엑소좀 */
const IngredientSection = ({ tone, density }) => {
  return (
    <div className="screen-block">
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── INGREDIENT STORY · 04
        </div>
        <h2 className="serif" style={{ fontSize: 26, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>
          극한에서 살아남는 것들이,<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>당신을 지킵니다.</em>
        </h2>

        {/* 감태 */}
        <div style={{ marginTop: 28 }}>
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #2D4739 0%, #4A6857 100%)",
            color: "var(--paper)",
            padding: "28px 22px",
            overflow: "hidden",
            minHeight: 200,
          }}>
            {/* placeholder pattern */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 400 200" preserveAspectRatio="none">
              <defs>
                <pattern id="wavept" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 Q 15 10 30 20 T 60 20" fill="none" stroke="white" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wavept)" />
            </svg>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="mono" style={{ fontSize: 9.5, opacity: 0.7, letterSpacing: "0.18em", marginBottom: 10 }}>
                01 — RAW MATERIAL
              </div>
              <div className="serif" style={{ fontSize: 24, fontWeight: 500, marginBottom: 4, letterSpacing: "-0.01em" }}>
                제주 감태
              </div>
              <div className="mono" style={{ fontSize: 10, opacity: 0.7, marginBottom: 14 }}>
                Ecklonia cava · Phlorotannin
              </div>
              <p style={{ fontSize: 12.5, lineHeight: 1.65, opacity: 0.92, maxWidth: 320 }}>
                거친 파도, 고염분, 강한 자외선 속에서 스스로를 보호하는 폴리페놀 성분.
                <br /><br />
                <em style={{ fontStyle: "italic", opacity: 0.9 }}>
                  "극한 환경에서 살아남는 생명력이<br />
                  예민해진 당신의 피부를 지킵니다."
                </em>
              </p>
            </div>
          </div>

          {/* 이미지 플레이스홀더 */}
          <div style={{
            marginTop: 1,
            background: "var(--bg)",
            border: "1px dashed var(--line-2)",
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <defs>
                <pattern id="stripe" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="var(--line-2)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stripe)" opacity="0.35" />
            </svg>
            <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.16em", position: "relative", zIndex: 1, background: "var(--bg)", padding: "4px 10px" }}>
              [ JEJU OCEAN · GAMTAE FIELD IMAGE ]
            </div>
          </div>
        </div>

        {/* 엑소좀 */}
        <div style={{ marginTop: 24 }}>
          <div style={{
            background: "var(--paper)",
            border: "1px solid var(--line-2)",
            padding: "24px 22px",
          }}>
            <div className="mono" style={{ fontSize: 9.5, color: "var(--rose)", letterSpacing: "0.18em", marginBottom: 10 }}>
              02 — DELIVERY TECH
            </div>
            <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: "var(--ink)", marginBottom: 4, letterSpacing: "-0.01em" }}>
              엑소좀 전달 기술
            </div>
            <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)", marginBottom: 16 }}>
              Exosome · Signal Carrier
            </div>

            {/* 시각화: 작은 다이어그램 */}
            <svg viewBox="0 0 280 80" style={{ width: "100%", display: "block", marginBottom: 14 }}>
              <line x1="20" y1="40" x2="260" y2="40" stroke="var(--line-2)" strokeWidth="0.5" strokeDasharray="2 3" />
              <text x="20" y="20" className="mono" fontSize="8.5" fill="var(--ink-3)" letterSpacing="1">SURFACE</text>
              <text x="260" y="20" textAnchor="end" className="mono" fontSize="8.5" fill="var(--ink-3)" letterSpacing="1">DEEP LAYER</text>
              {[40, 80, 120, 160, 200, 240].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy="40" r={4 + i*0.3} fill="none" stroke="var(--rose)" strokeWidth="1" opacity={0.4 + i*0.1} />
                  <circle cx={x} cy="40" r={1.5} fill="var(--rose)" opacity={0.5 + i*0.08} />
                </g>
              ))}
              <text x="140" y="68" textAnchor="middle" className="mono" fontSize="8" fill="var(--ink-3)" letterSpacing="1">→ SIGNAL CARRIER</text>
            </svg>

            <p style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.65 }}>
              단순 도포가 아닌, 유효 성분을 피부 깊숙이 전달하는 신호 전달체 원리 활용.
            </p>
            <p style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.55, marginTop: 12, fontWeight: 600, fontFamily: "'Pretendard', sans-serif" }}>
              "겉도는 진정이 아니라, 피부 속 깊이 안정감을 전달합니다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

window.IngredientSection = IngredientSection;
