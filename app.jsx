/* TAE743 상세페이지 기획안 — 메인 앱 */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "detailed",
  "tone": "clinical",
  "showAnnotations": true
}/*EDITMODE-END*/;

// Tone color presets — applied to CSS variables
const TONE_PRESETS = {
  clinical: { accent: "#2D4739", rose: "#4A7A5C", bg: "#F5F1EC", paper: "#FAF7F4", ink: "#1A1817" },
  derma:    { accent: "#5C7A4E", rose: "#4A7A5C", bg: "#F4ECE0", paper: "#FAF4E8", ink: "#2A211A" },
  modern:   { accent: "#1F2937", rose: "#3F7A5A", bg: "#F0EFEC", paper: "#FFFFFF", ink: "#0F1419" },
  scientific: { accent: "#1F3A52", rose: "#3D7A60", bg: "#EEF1F4", paper: "#F8FAFC", ink: "#0F1F2E" },
};

const App = () => {
  const [density, setDensity] = React.useState(TWEAK_DEFAULTS.density);
  const [tone, setTone] = React.useState(TWEAK_DEFAULTS.tone);
  const [showAnnotations, setShowAnnotations] = React.useState(TWEAK_DEFAULTS.showAnnotations);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  const persist = (key, value) => {
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
  };

  // Apply tone to CSS variables
  React.useEffect(() => {
    const preset = TONE_PRESETS[tone] || TONE_PRESETS.clinical;
    const root = document.documentElement;
    Object.entries(preset).forEach(([k, v]) => {
      root.style.setProperty(`--${k}`, v);
    });
  }, [tone]);

  // Edit mode protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === "__activate_edit_mode") setTweaksOpen(true);
      if (t === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const set = {
    density: (v) => { setDensity(v); persist("density", v); },
    tone: (v) => { setTone(v); persist("tone", v); },
    showAnnotations: (v) => { setShowAnnotations(v); persist("showAnnotations", v); },
  };

  return (
    <div>
      <TopBar density={density} tone={tone} />

      <div style={{
        display: "grid",
        gridTemplateColumns: showAnnotations ? "minmax(380px, 460px) minmax(280px, 360px)" : "minmax(380px, 520px)",
        gap: showAnnotations ? 28 : 0,
        maxWidth: showAnnotations ? 900 : 560,
        margin: "0 auto",
        padding: "32px 28px 64px",
        alignItems: "start",
      }}>
        {/* LEFT: 실제 상세페이지 시안 (모바일 가로폭 시뮬레이션) */}
        <div style={{
          background: "var(--paper)",
          border: "1px solid var(--line-2)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04)",
          overflow: "hidden",
          position: "sticky",
          top: 0,
        }}>
          <BrowserChromeBar />
          <HeroBlock density={density} />
          <PersonaSection tone={tone} density={density} />
          <StrategySection tone={tone} density={density} />
          <ComparisonSection tone={tone} density={density} />
          <ClinicalSection tone={tone} density={density} />
          <IngredientSection tone={tone} density={density} />
          <CopyOptionsSection tone={tone} density={density} />
          <ActionItemsSection tone={tone} density={density} />
        </div>

        {/* RIGHT: 기획 의도 주석 (협업툴 스타일) */}
        {showAnnotations && (
          <div style={{ paddingTop: 0 }}>
            <AnnotationStream density={density} />
          </div>
        )}
      </div>

      {tweaksOpen && (
        <TweaksPanel
          density={density} setDensity={set.density}
          tone={tone} setTone={set.tone}
          showAnnotations={showAnnotations} setShowAnnotations={set.showAnnotations}
          onClose={() => {
            setTweaksOpen(false);
            window.parent?.postMessage({ type: "__edit_mode_dismissed" }, "*");
          }}
        />
      )}
    </div>
  );
};

const BrowserChromeBar = () => (
  <div style={{
    background: "var(--bg)",
    borderBottom: "1px solid var(--line-2)",
    padding: "10px 14px",
    display: "flex",
    alignItems: "center",
    gap: 10,
  }}>
    <div style={{ display: "flex", gap: 5 }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#A8C9B5" }}></span>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#C7D6B8" }}></span>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#B8C7B0" }}></span>
    </div>
    <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.06em", marginLeft: 8 }}>
      tae743.com / product / skin-vitality-gamtae-exosome-cream
    </div>
    <div className="mono" style={{ marginLeft: "auto", fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.12em" }}>
      DETAIL PAGE v1
    </div>
  </div>
);

const HeroBlock = ({ density }) => {
  return (
    <div style={{ position: "relative" }}>
      {/* Hero 이미지 영역 (placeholder) */}
      <div style={{
        height: 420,
        background: "linear-gradient(180deg, #F8F2EC 0%, #F0E6DD 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
          <defs>
            <pattern id="herostripe" patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="14" stroke="#E0D4C4" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#herostripe)" />
        </svg>

        {/* placeholder note */}
        <div style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "rgba(255,255,255,0.85)",
          padding: "5px 10px",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          color: "var(--ink-3)",
          letterSpacing: "0.12em",
          border: "1px solid var(--line-2)",
        }}>
          [ HERO IMAGE · PRODUCT SHOT ]
        </div>

        {/* 텍스트 오버레이 */}
        <div style={{
          position: "absolute",
          left: 28,
          right: 28,
          bottom: 28,
        }}>
          <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-2)", letterSpacing: "0.22em", marginBottom: 12, fontWeight: 600 }}>
            TAE743
          </div>
          <div className="serif" style={{
            fontSize: 30,
            lineHeight: 1.18,
            fontWeight: 500,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            marginBottom: 14,
          }}>
            아무것도 안 해도 붉다면,<br />
            그건 <em style={{ fontStyle: "italic", color: "var(--accent)" }}>자극이 아니라</em><br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>'체질'</em>입니다.
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 340 }}>
            Skin Vitality Gamtae Exosome Cream<br />
            <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)" }}>Chronic Rosacea Care · 50ml</span>
          </div>
        </div>
      </div>

      {/* 서브 카피 띠 */}
      <div style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "14px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 18,
      }}>
        <div style={{ fontSize: 11.5, lineHeight: 1.5 }}>
          <span className="mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: "0.14em", marginRight: 8 }}>14D</span>
          베이스라인 a*값 <strong style={{ color: "var(--rose-soft)" }}>−5.94%</strong>
        </div>
        <div style={{ fontSize: 11.5, lineHeight: 1.5 }}>
          <span className="mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: "0.14em", marginRight: 8 }}>SAT</span>
          만족도 <strong style={{ color: "var(--rose-soft)" }}>100%</strong>
        </div>
        <div style={{ fontSize: 11.5, lineHeight: 1.5 }}>
          <span className="mono" style={{ fontSize: 10, opacity: 0.5, letterSpacing: "0.14em", marginRight: 8 }}>p</span>
          <strong style={{ color: "var(--rose-soft)" }}>&lt;.001</strong>
        </div>
      </div>
    </div>
  );
};

/* === 우측 주석 스트림 === */
const AnnotationStream = ({ density }) => {
  return (
    <div>
      <StickyHeader text="기획 의도 주석" sub="LEFT 시안과 위치를 맞춰 읽으세요" />

      {/* HERO */}
      <BlockHeader num="00" title="HERO" />
      <Annotation label="POSITIONING" intent="첫 화면에서 카테고리 인식을 끊는다" color="strategy" density={density}>
        보이자마자 '진정 크림 또 하나'로 분류되지 않도록,
        '체질'이라는 단어를 헤드라인에 정면 배치.
        제품 컷은 후순위 — 먼저 인식 전환.
      </Annotation>
      <Annotation label="VISUAL · TODO" intent="제품 컷 + 모델 디테일 컷 발주" color="default" density={density}>
        톤은 자극적이지 않은 베이지·아이보리 베이스. 붉기 강조 의도 절대 금지.
      </Annotation>

      {/* PERSONA */}
      <BlockHeader num="00.5" title="WHO IS SHE — 페르소나" />
      <Annotation label="PURPOSE" intent="고객이 '내 얘기다'라고 멈추는 지점" color="copy" density={density}>
        만성 홍조 고객은 진정 광고에 면역이 생긴 상태.
        그들의 실제 발화('민낯으로 거울 봤을 때 이미 빨개요')를 인용해 회의감 자체를 인정한다.
      </Annotation>
      <Annotation label="COPYWRITING" intent='끝맺음에 "베이스라인" 단어 첫 등장' color="copy" density={density}>
        새로운 단어를 처음 던지는 위치. 이후 임상 섹션에서 다시 회수된다.
      </Annotation>

      {/* STRATEGY */}
      <BlockHeader num="01" title="CORE STRATEGY" />
      <Annotation label="STRATEGY" intent="응급 진통제 vs 체질 개선 — 인식 분리" color="strategy" density={density}>
        탭 인터랙션은 의도적으로 두 카테고리가 '겹치지 않음'을 시각화.
        고객이 직접 토글하며 차이를 인지하도록 설계.
      </Annotation>
      <Annotation label="DESIGN" intent="활성 카드는 항상 우측(우리 제품)" color="default" density={density}>
        시선 방향 = 진행 방향. 좌→우 흐름이 '과거에서 현재로'를 암시.
      </Annotation>

      {/* COMPARISON */}
      <BlockHeader num="02" title="DIFFERENTIATION TABLE" />
      <Annotation label="HOVER" intent="행 호버 시 OTHERS 측 텍스트 취소선" color="strategy" density={density}>
        고객이 호버할 때마다 "이건 우리가 아니다"라는 시각적 부정.
        Hint 라벨로 행마다 차별화 포인트 한 줄 요약.
      </Annotation>
      <Annotation label="RISK" intent="비교광고 규제 검토 필요" color="data" density={density}>
        '일반 진정 크림'은 일반명 표현으로 처리. 특정 브랜드 지칭 금지.
      </Annotation>

      {/* CLINICAL */}
      <BlockHeader num="03" title="CLINICAL DATA" />
      <Annotation label="DATA · 01" intent="베이스라인 a* 5.94% 감소" color="data" density={density}>
        0일(18.68) → 14일(17.57) 우하향 라인.
        탭 전환 시 차트는 매번 0부터 다시 그려져 '진행 중인 변화'를 체감하게 한다.
      </Annotation>
      <Annotation label="DATA · 02" intent="트리플 크라운: 100/100/0" color="data" density={density}>
        2개 만족도 100%와 이상반응 0건을 같은 레벨에서 표현.
        안전성을 '없음 = 0건'이라는 역방향 막대로 시각화.
      </Annotation>
      <Annotation label="DATA · 03" intent="피험자 전원 건성 = 타겟 일치" color="data" density={density}>
        만성 홍조 + 건조 동반 고객의 자기인식과 정확히 매칭되는 설계임을 강조.
      </Annotation>
      <Annotation label="LEGAL" intent="p<.001 표기 위치 검토" color="data" density={density}>
        과학적 표현은 본문이 아닌 보조 라벨에 배치. 의약품 효능 오인 회피.
      </Annotation>

      {/* INGREDIENT */}
      <BlockHeader num="04" title="INGREDIENT STORY" />
      <Annotation label="NARRATIVE" intent='"극한 환경 → 보호 능력" 메타포' color="strategy" density={density}>
        감태의 서식 환경(파도·자외선·고염분)을
        고객의 피부 환경(자극·홍조·건조)과 평행하게 묘사.
      </Annotation>
      <Annotation label="LEGAL · CRITICAL" intent="엑소좀은 '전달 기술'로만 서술" color="data" density={density}>
        '치료' '회복' '재생' 단어 사용 금지.
        '신호 전달체' '깊이 전달' 등 메커니즘 중심 표현으로 통일.
      </Annotation>

      {/* COPY OPTIONS */}
      <BlockHeader num="05" title="HEADLINE OPTIONS" />
      <Annotation label="COPY · A" intent="통찰형 — 의문에서 시작" color="copy" density={density}>
        가장 인지 충격이 큼. 단, '체질' 단어가 의약품 인상을 줄 수 있어 법무 확인 필요.
      </Annotation>
      <Annotation label="COPY · B" intent="데이터형 — 약속에서 시작" color="copy" density={density}>
        임상 섹션과 직접 연결. a* 용어는 본문 첫 줄에 풀어서 설명 필수.
      </Annotation>
      <Annotation label="COPY · C" intent="경험형 — 공감에서 시작" color="copy" density={density}>
        고객의 과거 실패 경험을 정면으로 호출. 톤이 너무 단정적이지 않게 조율.
      </Annotation>

      {/* ACTION */}
      <BlockHeader num="06" title="ACTION ITEMS" />
      <Annotation label="WORKFLOW" intent="3개 직군 동시 착수" color="strategy" density={density}>
        디자인·카피·법무를 병렬 트랙으로 진행.
        법무 검토는 카피 확정 전 단계에 일정 확보 필수.
      </Annotation>
    </div>
  );
};

const StickyHeader = ({ text, sub }) => (
  <div style={{
    paddingBottom: 14,
    marginBottom: 18,
    borderBottom: "1px solid var(--line-2)",
  }}>
    <div className="mono" style={{ fontSize: 9.5, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 6 }}>
      → ANNOTATIONS
    </div>
    <div className="serif" style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.01em", marginBottom: 4 }}>
      {text}
    </div>
    <div style={{ fontSize: 10.5, color: "var(--ink-3)" }}>{sub}</div>
  </div>
);

const BlockHeader = ({ num, title }) => (
  <div style={{
    display: "flex",
    alignItems: "baseline",
    gap: 12,
    marginTop: 22,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: "1px dashed var(--line-2)",
  }}>
    <div className="mono" style={{ fontSize: 10, color: "var(--rose)", letterSpacing: "0.14em", fontWeight: 600 }}>
      {num}
    </div>
    <div style={{ fontSize: 11.5, fontWeight: 600, color: "var(--ink)", letterSpacing: "0.02em" }}>
      {title}
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
