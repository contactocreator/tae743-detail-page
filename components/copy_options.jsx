/* 메인 카피 후보 A/B/C — 동등 비교 */
const CopyOptionsSection = ({ tone, density }) => {
  const [active, setActive] = React.useState("A");

  const copies = {
    A: {
      type: "통찰형",
      en: "INSIGHT",
      hook: "체질에 대한 자각을 흔드는",
      headline: "아무것도 안 해도 붉다면,\n그건 자극이 아니라\n'체질'입니다.",
      strength: "고정관념 전환. 회의감 있는 고객의 시선을 멈추게 함.",
      risk: "'체질'이 의약품적 인상을 줄 수 있음 (법무 검토 필요).",
      tone: "차분한 의문형",
    },
    B: {
      type: "데이터형",
      en: "DATA",
      hook: "임상 수치로 신뢰를 만드는",
      headline: "2주 후, 당신이 기억하는\n피부의 기본값(a*)이\n달라집니다.",
      strength: "임상 결과를 직접 인용. p<.001 신뢰감과 결합.",
      risk: "'a*'라는 전문 용어 진입장벽. 보조 설명 필수.",
      tone: "정밀한 약속형",
    },
    C: {
      type: "경험형",
      en: "EXPERIENCE",
      hook: "기존 실패의 이유를 짚어주는",
      headline: "진정 크림을 써도\n그때뿐이었던 이유,\n'베이스라인'을 놓쳤기\n때문입니다.",
      strength: "고객의 과거 경험과 직접 연결. 공감 진입.",
      risk: "타사 제품 비방으로 읽힐 수 있어 톤 조절 필요.",
      tone: "공감하며 짚는",
    },
  };

  return (
    <div className="screen-block" style={{ background: "var(--paper)" }}>
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── HEADLINE OPTIONS · 05
        </div>
        <h2 className="serif" style={{ fontSize: 26, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>
          메인 카피 3안.<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>같은 진실, 다른 입구.</em>
        </h2>
        <p style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 22, maxWidth: 360 }}>
          세 카피는 서로 우열이 아닌, 도달하려는 고객의 정서 진입점이 다릅니다.
        </p>

        {/* 탭 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 18 }}>
          {Object.keys(copies).map(k => (
            <button
              key={k}
              onClick={() => setActive(k)}
              style={{
                padding: "10px 8px",
                background: active === k ? "var(--ink)" : "var(--bg)",
                color: active === k ? "var(--paper)" : "var(--ink-2)",
                border: "1px solid",
                borderColor: active === k ? "var(--ink)" : "var(--line-2)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.02em",
                transition: "all 0.18s",
                cursor: "pointer",
              }}
            >
              <div className="mono" style={{ fontSize: 9, opacity: 0.6, marginBottom: 2, letterSpacing: "0.14em" }}>TYPE {k}</div>
              {copies[k].type}
            </button>
          ))}
        </div>

        {/* 활성 카피 */}
        <div className="fade-in" key={active} style={{
          background: "var(--paper)",
          border: "1px solid var(--line-2)",
          padding: "26px 22px",
          marginBottom: 16,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
            <div className="mono" style={{ fontSize: 9.5, color: "var(--rose)", letterSpacing: "0.16em" }}>
              {copies[active].en} APPROACH
            </div>
            <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.1em" }}>
              {copies[active].tone}
            </div>
          </div>

          <div className="serif" style={{
            fontSize: 22,
            lineHeight: 1.32,
            fontWeight: 500,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            whiteSpace: "pre-line",
            marginBottom: 22,
          }}>
            {copies[active].headline}
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div className="mono" style={{ fontSize: 9.5, color: "var(--accent)", letterSpacing: "0.14em", minWidth: 60, paddingTop: 1 }}>
                STRENGTH
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.55 }}>{copies[active].strength}</div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div className="mono" style={{ fontSize: 9.5, color: "var(--rose)", letterSpacing: "0.14em", minWidth: 60, paddingTop: 1 }}>
                RISK
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.55 }}>{copies[active].risk}</div>
            </div>
          </div>
        </div>

        {/* 비교 미니뷰 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {Object.entries(copies).map(([k, c]) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              style={{
                background: active === k ? "var(--accent)" : "var(--bg)",
                color: active === k ? "var(--paper)" : "var(--ink-2)",
                border: "1px solid",
                borderColor: active === k ? "var(--accent)" : "var(--line)",
                padding: "12px 10px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.18s",
                minHeight: 90,
              }}
            >
              <div className="mono" style={{ fontSize: 8.5, opacity: 0.7, letterSpacing: "0.12em", marginBottom: 4 }}>
                TYPE {k}
              </div>
              <div className="serif" style={{ fontSize: 11, lineHeight: 1.4, fontWeight: 500, whiteSpace: "pre-line" }}>
                {c.headline.split('\n')[0]}…
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

window.CopyOptionsSection = CopyOptionsSection;
