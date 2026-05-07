/* 타겟 페르소나 정의 — 추가 섹션 (만성 홍조 고객 페인 포인트) */
const PersonaSection = ({ tone, density }) => {
  const pains = [
    { quote: "진정 크림 발랐을 때만 잠깐 가라앉아요.", tag: "일시성에 대한 불만" },
    { quote: "민낯으로 거울 봤을 때 이미 빨개요.", tag: "베이스라인 자각" },
    { quote: "예민한 피부라더니, 결국 그냥 이렇게 살아야 되나요?", tag: "체념" },
    { quote: "성분 좋다는 건 다 써봤어요.", tag: "회의감" },
  ];

  return (
    <div className="screen-block">
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--rose)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── WHO IS SHE
        </div>
        <h2 className="serif" style={{ fontSize: 28, lineHeight: 1.2, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 8 }}>
          그녀는 이미<br />
          <em style={{ fontStyle: "italic", color: "var(--rose)" }}>여러 번 실망</em>했습니다.
        </h2>
        <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.65, marginTop: 14, maxWidth: 360 }}>
          만성 홍조 고객은 '진정'이라는 단어에 익숙합니다.
          그래서 또 다른 진정 제품의 광고는 그녀에게 닿지 않습니다.
          우리는 그녀가 한 번도 들어본 적 없는 단어를 꺼내야 합니다 — <strong style={{ color: "var(--ink)" }}>"베이스라인"</strong>.
        </p>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          {pains.map((p, i) => (
            <div key={i} style={{
              padding: "14px 16px",
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderLeft: "2px solid var(--rose-soft)",
            }}>
              <div className="mono" style={{ fontSize: 9.5, color: "var(--rose)", letterSpacing: "0.12em", marginBottom: 6 }}>
                {String(i+1).padStart(2,'0')} · {p.tag}
              </div>
              <div style={{ fontSize: 13, color: "var(--ink)", fontStyle: "italic", lineHeight: 1.55 }}>
                "{p.quote}"
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, padding: "18px 20px", background: "var(--ink)", color: "var(--paper)" }}>
          <div className="mono" style={{ fontSize: 9.5, opacity: 0.6, letterSpacing: "0.18em", marginBottom: 8 }}>
            INSIGHT
          </div>
          <div className="serif" style={{ fontSize: 17, lineHeight: 1.4, fontWeight: 400 }}>
            그녀는 '진정'이 아닌, <em style={{ color: "var(--rose-soft)" }}>'근본'</em>을 찾고 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

window.PersonaSection = PersonaSection;
