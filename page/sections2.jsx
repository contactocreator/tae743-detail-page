/* TAE743 상세페이지 — 섹션 4~12 */

const DETAIL_ASSETS = window.PAGE_ASSETS;

// 카드용 비교 그래프 SVG — 라인 드로잉 애니메이션 (무한 루프)
const SpikesGraph = () => (
  <svg viewBox="0 0 366 137" style={{ width: "100%", height: "auto", display: "block" }}>
    <line x1="14" y1="115" x2="352" y2="115" stroke="#7a8074" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
    <text x="14" y="131" fontSize="16" fill="#7a8074" letterSpacing="0.5" fontFamily="'IBM Plex Mono', monospace">SPIKES · TEMPORARY</text>
    <path
      className="anim-draw"
      style={{ "--len": 1100 }}
      d="M 14 115 L 70 115 L 84 30 L 98 115 L 160 115 L 174 38 L 188 115 L 250 115 L 264 50 L 278 115 L 352 115"
      fill="none"
      stroke="#3f4538"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

const BaselineGraph = () => (
  <svg viewBox="0 0 370 138" style={{ width: "100%", height: "auto", display: "block" }}>
    <line x1="14" y1="50" x2="356" y2="50" stroke="rgba(250,247,241,0.3)" strokeWidth="1" strokeDasharray="3 3" />
    <text x="14" y="34" fontSize="15" fill="rgba(250,247,241,0.5)" fontFamily="'IBM Plex Mono', monospace">DAY 0</text>
    <text x="356" y="124" textAnchor="end" fontSize="15" fill="rgba(250,247,241,0.7)" fontFamily="'IBM Plex Mono', monospace">DAY 14 ↘</text>
    <path
      className="anim-draw"
      style={{ "--len": 400 }}
      d="M 14 50 Q 110 60 200 80 T 356 110"
      fill="none"
      stroke="#a8c9b5"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <circle className="anim-dot" cx="14" cy="50" r="5" fill="#a8c9b5" />
    <circle className="anim-dot" cx="356" cy="110" r="5" fill="#a8c9b5" />
  </svg>
);

const ReframeSection = () => {
  // Figma 디자인 기준 (1:475, 1000×2771). 그래프는 SVG 정적 (기존 기조 유지).
  return (
    <section
      data-screen-label="04 Reframe"
      style={{
        position: "relative",
        width: 1000,
        background: "#FFFFFF",
        fontFamily: "'Pretendard', sans-serif",
        padding: "40px 59.15px 169px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 28.307,
      }}
    >
      {/* 헤드라인 */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: 881.7, height: 67, display: "flex", alignItems: "center", fontSize: 35, fontWeight: 700, letterSpacing: "-1.3731px", color: "#14160f", lineHeight: "67.008px" }}>
          제주 바다에서 찾은 붉은기/홍조 개선 성분
        </div>
        <div style={{ fontSize: 71, fontWeight: 700, letterSpacing: "-1.3731px", color: "#2d4739", lineHeight: "67.008px", whiteSpace: "nowrap" }}>
          110억 감태 엑소좀
        </div>
      </div>

      {/* 서브 카피 */}
      <div style={{ width: 803, padding: "7.901px 0 1.648px" }}>
        <p style={{ margin: 0, fontSize: 35, fontWeight: 700, color: "#3f4538", lineHeight: "52.073px" }}>{`피부 장벽을 다시 세우는 감태 엑소좀으로 `}</p>
        <p style={{ margin: 0, fontSize: 35, fontWeight: 700, color: "#3f4538", lineHeight: "52.073px" }}>평소 상태 자체의 붉은기를 안정시킵니다.</p>
      </div>

      {/* 다크 박스 — INDUSTRY SECRET */}
      <div style={{ background: "#14160f", padding: "66.755px 42.25px 46.475px", display: "flex", flexDirection: "column", gap: 23.237 }}>
        <div className="mono" style={{ fontSize: 20.069, fontWeight: 600, letterSpacing: "4.4151px", color: "#a8c9b5", lineHeight: "31.117px" }}>
          ─ INDUSTRY SECRET
        </div>
        <div style={{ fontSize: 40.138, fontWeight: 700, letterSpacing: "-0.8027px", color: "#FAF7F1", lineHeight: "56.193px" }}>
          그 누구도 보여주지 않았던 수치.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 45.028, paddingTop: 6.359 }}>
          <div>
            <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "rgba(250,247,241,0.78)", lineHeight: "45.313px" }}>
              지금까지 시중의 홍조·진정 제품은
            </p>
            <p style={{ margin: 0, fontSize: 27.462, lineHeight: "45.313px" }}>
              <span style={{ fontWeight: 700, color: "#FAF7F1" }}>"자극 후 얼마나 빨리 가라앉는가"</span>
              <span style={{ fontWeight: 400, color: "rgba(250,247,241,0.78)" }}>만 측정해 왔습니다.</span>
            </p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "rgba(250,247,241,0.78)", lineHeight: "45.313px" }}>
              TAE743는 다릅니다. 자극을 주지 않은 평소 피부에서
            </p>
            <p style={{ margin: 0, fontSize: 27.462, lineHeight: "45.313px" }}>
              <span style={{ fontWeight: 700, color: "#a8c9b5" }}>평소 붉기 수치 자체</span>
              <span style={{ fontWeight: 400, color: "rgba(250,247,241,0.78)" }}>가 얼마나 내려가는지를 직접 측정했습니다.</span>
            </p>
          </div>
        </div>
        <div style={{
          paddingTop: 42.228,
          borderTop: "2.112px solid rgba(250,247,241,0.15)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16.9,
          height: 154.551,
          boxSizing: "border-box",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8.45 }}>
            <div className="mono" style={{ fontSize: 17.956, letterSpacing: "3.2321px", color: "rgba(250,247,241,0.5)", lineHeight: "27.843px" }}>COMPETITORS</div>
            <div style={{ fontSize: 25.35, fontWeight: 400, color: "rgba(250,247,241,0.6)", lineHeight: "38.025px" }}>
              <p style={{ margin: 0 }}>자극 후 일시적</p>
              <p style={{ margin: 0 }}>진정 효과 측정</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8.45 }}>
            <div className="mono" style={{ fontSize: 17.956, letterSpacing: "3.2321px", color: "#a8c9b5", lineHeight: "27.843px" }}>TAE743</div>
            <div style={{ fontSize: 25.35, fontWeight: 600, color: "#FAF7F1", lineHeight: "38.025px" }}>
              <p style={{ margin: 0 }}>평소 피부 붉기</p>
              <p style={{ margin: 0 }}>수치 직접 측정</p>
            </div>
          </div>
        </div>
      </div>

      {/* 두 카드 비교 */}
      <img src="https://cdn.jsdelivr.net/gh/contactocreator/tae743-detail-assets@main/reframe.gif" alt="reframe-graphs" style={{ width: "100%", height: "auto", display: "block" }} />

      {/* WHY IT FEELS DIFFERENT — 엑소좀 사진 박스 (Figma: 큰 사진 하나 + 텍스트 박스) */}
      <div style={{
        border: "2.112px solid #e2ddd2",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* 엑소좀 사진 — 박스의 약 2/3 폭, 가운데 정렬 */}
        <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
          <img
            src={DETAIL_ASSETS.fgReframeExo}
            alt="감태 엑소좀 액"
            style={{
              width: "66%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
        {/* 텍스트 박스 */}
        <div style={{ width: "100%", background: "#ebebeb", padding: "31.688px 38.025px 33.821px", display: "flex", flexDirection: "column", gap: 15.03, boxSizing: "border-box" }}>
          <div className="mono" style={{ fontSize: 20.069, letterSpacing: "3.6124px", color: "#7a8074", lineHeight: "31.117px" }}>WHY IT FEELS DIFFERENT</div>
          <div style={{ fontSize: 31.688, fontWeight: 700, color: "#14160f", lineHeight: "49.116px" }}>
            <p style={{ margin: 0 }}>110억개의 나노사이즈 엑소좀이 감태 유효성분을</p>
            <p style={{ margin: 0 }}>깊숙이 전달해 피부를 원래 상태로 되돌려 줍니다.</p>
          </div>
        </div>
      </div>

      {/* TAKEAWAY */}
      <div style={{ borderTop: "2.112px solid #cfc9bb", borderBottom: "2.112px solid #cfc9bb", padding: "42.25px 0 44.362px", display: "flex", flexDirection: "column", gap: 19.118 }}>
        <div className="mono" style={{ fontSize: 20.069, letterSpacing: "4.0138px", color: "#7a8074", lineHeight: "31.117px" }}>TAKEAWAY</div>
        <div style={{ fontSize: 38.025, fontWeight: 700, letterSpacing: "-0.7605px", color: "#14160f", textAlign: "center", lineHeight: "55.136px" }}>
          <p style={{ margin: 0 }}>진정크림을 바꿔도 제자리였던 붉은기,</p>
          <p style={{ margin: 0 }}>
            <span>{`이제는 `}</span>
            <span style={{ color: "#2d4739" }}>평소 붉은기 기준점</span>
            <span>을 낮출 차례입니다.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

// Section 4-5 사이: 황금액 + 제품 풀블리드 비주얼 — Figma 1:474 (1000×1250)
const InterludeSection = () => (
  <section
    data-screen-label="04a Interlude"
    style={{
      position: "relative",
      width: 1000,
      overflow: "hidden",
      lineHeight: 0,
    }}
  >
    <img
      src={DETAIL_ASSETS.fgInterludeProduct}
      alt="제품 풀블리드 비주얼"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
      }}
    />
  </section>
);

// Section 5: 4주 사전 체험단 리뷰 — Figma 1:530 (1000×2782)
const ReviewSection = () => {
  const reviews = [
    {
      headline: ["붉은 피부가", "확실히 좋아졌습니다"],
      body: ["피부에 붉은 기가 예전보다 정돈되었어요.", "꾸준히 바르니 피부가 편안해져요."],
      images: [DETAIL_ASSETS.fgReview1a],
      imageRight: true,
    },
    {
      headline: ["건조하고 붉은 피부인데", "사용하기 좋아요!"],
      body: ["사용하고 나서 트러블이 덜 올라오고", "나더라도 금방 가라앉는 편이었어요."],
      images: [DETAIL_ASSETS.fgReview2],
      imageRight: false,
    },
    {
      headline: ["점점 피부가 강해지는 게", "느껴졌습니다"],
      body: ["피부가 예민해서 잘 붉어지곤 했는데", "발라보니 피부 톤이 정돈되는 느낌이예요."],
      images: [DETAIL_ASSETS.fgReview3],
      imageRight: true,
    },
    {
      headline: ["기능성이라 걱정했는데", "보습감이 충분해요"],
      body: ["무겁지 않은데도 하루 종일 당김이 덜했어요.", "답답하지 않아서 낮에도 쓰기 편했네요."],
      images: [DETAIL_ASSETS.fgReview4],
      imageRight: false,
    },
    {
      headline: ["건조하고 붉어서", "진정을 매일 찾았는데", "끈적임 없이 산뜻했어요"],
      body: ["화장 전 기초 마무리 단계에서 바르는데,", "끈적임이나 달라붙음 없이 보송해서 좋았습니다."],
      images: [DETAIL_ASSETS.fgReview5],
      imageRight: true,
    },
  ];

  return (
    <section
      data-screen-label="05 Reviews"
      style={{
        position: "relative",
        width: 1000,
        height: 2782,
        background: "#14352a",
        fontFamily: "'Pretendard', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 상단 카피 */}
      <div style={{ position: "absolute", top: 158.56, left: 224, fontSize: 35, fontWeight: 400, color: "#FFFFFF", lineHeight: "49.85px", whiteSpace: "nowrap" }}>
        만족도 100% TAE743 감태 엑소좀 크림
      </div>
      {/* 헤드라인 */}
      <div style={{ position: "absolute", top: 218.225, left: 0, width: 1000, textAlign: "center", fontSize: 71, fontWeight: 800, color: "#FFFFFF", lineHeight: "74.775px" }}>
        4주 사전 체험단 리뷰
      </div>

      {/* 5개 카드 */}
      <div style={{ position: "absolute", top: 358.92, left: 37.39, width: 864.067 }}>
        {reviews.map((rev, i) => (
          <div
            key={i}
            style={{
              height: 427.048,
              padding: 19.94,
              borderTop: i === 0 ? "1.662px solid #bbc5cc" : "none",
              borderBottom: "1.662px solid #bbc5cc",
              display: "flex",
              gap: 33.233,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: rev.imageRight ? "row" : "row-reverse",
              boxSizing: "border-box",
            }}
          >
            {/* 텍스트 영역 */}
            <div style={{ textAlign: "center", flex: "0 0 auto", maxWidth: 462 }}>
              {rev.headline.map((line, j) => (
                <p key={j} style={{ margin: 0, fontSize: 34.895, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, letterSpacing: "-1.0469px", whiteSpace: "nowrap" }}>
                  {j === 0 ? `“${line}` : line}
                  {j === rev.headline.length - 1 ? "”" : ""}
                </p>
              ))}
              <div style={{ height: 28 }} />
              {rev.body.map((line, j) => (
                <p key={j} style={{ margin: 0, fontSize: 16.617, fontWeight: 500, color: "#FFFFFF", lineHeight: 1.4, letterSpacing: "-0.5px" }}>
                  {line}
                </p>
              ))}
            </div>
            {/* 이미지 영역 */}
            <div style={{ display: "flex", gap: 12, flex: "0 0 auto" }}>
              {rev.images.map((src, j) => (
                <img
                  key={j}
                  src={src}
                  alt={`체험단 리뷰 사진 ${i + 1}`}
                  style={{
                    width: rev.images.length > 1 ? (j === 0 ? 240 : 150) : 326.374,
                    height: rev.images.length > 1 ? (j === 0 ? 296 : 90) : 398.8,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Clinical01Section = () => {
  // Figma 디자인 (1:557, 1000×2773). 무한 루프: 그리기 → 유지 → 되감기 → 반복 (5.25초 사이클).
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const cycleMs = 5250;
    const start = performance.now();
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const tick = (now) => {
      const phase = ((now - start) % cycleMs) / cycleMs;
      let p;
      if (phase <= 0.6) p = easeInOut(phase / 0.6);          // 0~60%: 그리기
      else if (phase <= 0.8) p = 1;                           // 60~80%: 유지
      else p = 1 - easeInOut((phase - 0.8) / 0.2);            // 80~100%: 되감기
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // SVG 차트 좌표 — Figma 824×471 비율
  const W = 824;
  const H = 471;
  const P = { l: 90, r: 50, t: 30, b: 100 };
  const days = [0, 7, 14];
  const values = [18.68, 18.10, 17.57];
  const yMin = 17.0;
  const yMax = 19.2;
  const xFor = (d) => P.l + (d / 14) * (W - P.l - P.r);
  const yFor = (v) => P.t + (1 - (v - yMin) / (yMax - yMin)) * (H - P.t - P.b);
  const points = days.map((d, i) => [xFor(d), yFor(values[i])]);
  const fullPath = `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]} L ${points[2][0]} ${points[2][1]}`;
  const pathLen = 1100;

  return (
    <section
      ref={ref}
      data-screen-label="06 Clinical 01"
      style={{
        position: "relative",
        width: 1000,
        background: "#FFFFFF",
        fontFamily: "'Pretendard', sans-serif",
        padding: "169px 59.15px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 28.307,
      }}
    >
      {/* 헤드라인 */}
      <div>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#14160f", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          그 누구도 보여주지 않았던 수치.
        </p>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#2d4739", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          14일 뒤, 평소 붉은기 -5.94%.
        </p>
      </div>

      {/* 서브 카피 + p<.001 */}
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ width: 757, fontSize: 27.462, fontWeight: 400, color: "#3f4538", lineHeight: "45.313px" }}>
          <p style={{ margin: 0 }}>자극을 주지 않은 평소 피부에서 측정한 평소 붉기 수치(a*) 변화입니다.</p>
          <p style={{ margin: 0 }}>{`"그때만 잠깐 좋아졌다"가 아니라, 실제 수치가 내려갔다는 뜻입니다.`}<span className="mono" style={{ marginLeft: 12, fontSize: 23.237, color: "#2d4739", letterSpacing: 0 }}>{`p<.001`}</span></p>
        </div>
      </div>

      {/* 차트 박스 */}
      <img src="https://cdn.jsdelivr.net/gh/contactocreator/tae743-detail-assets@main/clinical01.gif" alt="clinical01-chart" style={{ width: "100%", height: "auto", display: "block" }} />

      {/* VISUAL PROOF 박스 */}
      <div style={{ background: "#FFFFFF", border: "2.112px solid #e2ddd2", padding: "11.851px 2.112px 2.112px", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "31.688px 38.025px 0", display: "flex", flexDirection: "column", gap: 15.03 }}>
          <div className="mono" style={{ fontSize: 20.069, color: "#7a8074", letterSpacing: "3.6124px", lineHeight: "31.117px" }}>
            VISUAL PROOF
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 40, fontWeight: 700, color: "#14160f", lineHeight: "49.116px" }}>화장으로 가린 게 아닙니다.</p>
            <p style={{ margin: 0, fontSize: 40, fontWeight: 700, color: "#2d4739", lineHeight: "49.116px" }}>실사용 컷에서도 붉은기 변화가 보입니다.</p>
          </div>
        </div>
        <div style={{ padding: "43px 58.694px 88.04px", display: "flex", flexDirection: "column", alignItems: "center", gap: 44.02 }}>
          <div style={{ width: 793, fontSize: 22.01, fontWeight: 400, color: "#757b80", letterSpacing: "-0.6603px", lineHeight: 1.5 }}>
            <p style={{ margin: 0 }}>감태 엑소좀(소포체)과 플로로탄닌(추출물)의 듀얼 케어 포뮬라로</p>
            <p style={{ margin: 0 }}>실제 피부과에서 사용하는 고가의 스킨 부스터 성분을 아낌없이 고함량으로 넣었습니다.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 53.51, width: 792.527 }}>
            {/* 비교 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6.115, position: "relative" }}>
              <div style={{ border: "2.293px solid #000000", height: 53.51, padding: "6.115px 22.168px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 24.462, fontWeight: 500, color: "#000000", letterSpacing: "-0.4892px", lineHeight: 1.5 }}>붉은기 개선</span>
                <span style={{ fontSize: 24.462, fontWeight: 500, color: "#000000", letterSpacing: "-0.4892px", lineHeight: 1.5 }}>4주 체험단</span>
              </div>
              <div style={{ display: "flex", gap: 6.115, alignItems: "center" }}>
                <img src={DETAIL_ASSETS.fgClinicalBefore1} alt="" style={{ width: 394.444, height: 252.26, objectFit: "cover" }} />
                <img src={DETAIL_ASSETS.fgClinicalAfter1} alt="" style={{ width: 394.444, height: 252.26, objectFit: "cover" }} />
              </div>
              <img src={DETAIL_ASSETS.fgClinicalArrow} alt="" style={{ position: "absolute", left: 368.99, top: 158.14, width: 53.51, height: 53.51 }} />
            </div>
            {/* 비교 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6.115, position: "relative" }}>
              <div style={{ display: "flex", gap: 6.115, alignItems: "center" }}>
                <img src={DETAIL_ASSETS.fgClinicalBefore2} alt="" style={{ width: 394.444, height: 252.26, objectFit: "cover" }} />
                <img src={DETAIL_ASSETS.fgClinicalAfter2} alt="" style={{ width: 394.444, height: 252.26, objectFit: "cover" }} />
              </div>
              <img src={DETAIL_ASSETS.fgClinicalArrow} alt="" style={{ position: "absolute", left: 368.99, top: 99.78, width: 53.51, height: 53.51 }} />
            </div>
          </div>
        </div>
        <div style={{ padding: "0 38.025px 33.8px" }}>
          <p style={{ margin: 0, fontSize: 23.237, fontWeight: 400, color: "#7a8074", lineHeight: "37.18px" }}>
            * 4주 사용 컷 예시 이미지. 14일 임상 수치와는 별도의 실사용 시각 자료입니다.
          </p>
        </div>
      </div>

      {/* Footnote */}
      <div style={{ paddingTop: 1.268 }}>
        <p style={{ margin: 0, fontSize: 23.237, fontWeight: 400, color: "#7a8074", lineHeight: "37.18px" }}>
          * 인체적용시험 결과. 한국피부임상과학연구소. 2주(14일)간 1일 2회 사용.
        </p>
      </div>
    </section>
  );
};

const Stat = ({ label, value }) => (
  <div style={{ flex: 1, background: "var(--paper)", border: "1px solid var(--line)", padding: "10px 12px" }}>
    <div className="mono" style={{ fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.14em", marginBottom: 3 }}>{label}</div>
    <div className="mono" style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink)" }}>{value}</div>
  </div>
);

const Clinical02Section = () => {
  // Figma 디자인 (1:628, 1000×1386). 무한 루프: 그리기 → 유지 → 되감기 (5.25초 사이클).
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const cycleMs = 5250;
    const start = performance.now();
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const tick = (now) => {
      const phase = ((now - start) % cycleMs) / cycleMs;
      let p;
      if (phase <= 0.6) p = easeInOut(phase / 0.6);
      else if (phase <= 0.8) p = 1;
      else p = 1 - easeInOut((phase - 0.8) / 0.2);
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 임상 결과 — 카운트업/카운트다운 + 막대 동기화
  // 피부 불편감: 0% → 100%
  // 피부 컨디션: 0% → 100%
  // 이상반응: 9건 → 0건 (큰 수에서 내려옴), 막대도 90 → 0
  const items = [
    { label: "피부 불편감 개선", sub: "민감함 · 당김", from: 0, to: 100, suffix: "%", barFrom: 0, barTo: 100 },
    { label: "피부 컨디션 만족도", sub: "전반적 사용 만족", from: 0, to: 100, suffix: "%", barFrom: 0, barTo: 100 },
    { label: "이상반응", sub: "임상 기간 중", from: 9, to: 0, suffix: "건", barFrom: 90, barTo: 0 },
  ];

  return (
    <section
      ref={ref}
      data-screen-label="07 Clinical 02"
      style={{
        position: "relative",
        width: 1000,
        background: "linear-gradient(to right, #2d4739 0%, #6ead8b 100%)",
        fontFamily: "'Pretendard', sans-serif",
        padding: "169px 59.15px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 28.307,
      }}
    >
      {/* 헤드라인 */}
      <div>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#fef8f8", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          예민한 피부는 세게 누르는 게 아니라,
        </p>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#FFFFFF", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          무리 없이 내려가야 합니다.
        </p>
      </div>

      {/* 서브 카피 */}
      <div style={{ paddingTop: 1.268 }}>
        <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#FFFFFF", lineHeight: "45.313px" }}>좋다고 따갑다면 오래 못 갑니다.</p>
        <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#FFFFFF", lineHeight: "45.313px" }}>그래서 만족도 100%, 이상반응 0건이 중요합니다.</p>
      </div>

      {/* 3개 카드 */}
      <img src="https://cdn.jsdelivr.net/gh/contactocreator/tae743-detail-assets@main/clinical02.gif?v=slow15" alt="clinical02-bars" style={{ width: "100%", height: "auto", display: "block" }} />
    </section>
  );
};

const Clinical03Section = () => {
  // Figma 디자인 (1:666, 1000×916). 무한 루프: 그리기 → 유지 → 되감기 (5.25초 사이클).
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const cycleMs = 5250;
    const start = performance.now();
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const tick = (now) => {
      const phase = ((now - start) % cycleMs) / cycleMs;
      let p;
      if (phase <= 0.6) p = easeInOut(phase / 0.6);
      else if (phase <= 0.8) p = 1;
      else p = 1 - easeInOut((phase - 0.8) / 0.2);
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 도넛 차트 — Figma 338x338, stroke 8.45px, target 100%
  const sz = 338;
  const stroke = 8.45;
  const r = sz / 2 - stroke - 10;
  const c = 2 * Math.PI * r;
  const target = 1.0;
  const filled = progress * target;

  return (
    <section
      ref={ref}
      data-screen-label="08 Clinical 03"
      style={{
        position: "relative",
        width: 1000,
        background: "#FFFFFF",
        fontFamily: "'Pretendard', sans-serif",
        padding: "169px 59.15px 51px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 28.307,
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#2d4739", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          건조하고 예민한 피부 기준으로
        </p>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#2d4739", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          임상 데이터를 확보 하였습니다.
        </p>
      </div>
      <div style={{ paddingTop: 1.246 }}>
        <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#3f4538", lineHeight: "45.313px" }}>
          붉은기와 건조함이 같이 오는 조건을 기준으로 확인한 데이터입니다.
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 27.462, fontWeight: 400, color: "#3f4538", lineHeight: "45.313px" }}>
          지속적인 붉은기 진정은 얇아진 피부 장벽을 근본적으로 복구하고, 시도 때도 없이 올라오는 염증 경로를 차단하고, 자극으로 가속되는 피부 산화를 막아줘야 가능합니다.
        </p>
      </div>

      {/* 도넛 카드 */}
      <img src="https://cdn.jsdelivr.net/gh/contactocreator/tae743-detail-assets@main/clinical03.gif" alt="clinical03-donut" style={{ width: "100%", height: "auto", display: "block" }} />
    </section>
  );
};

const ComparisonTable = () => {
  // Figma 디자인 (1:679, 1000×1035). 자동 무한 롤링: 1.3초마다 다음 row hover.
  const [hover, setHover] = React.useState(null);
  const rows = [
    { key: "problem", label: "문제", a: "올라온 열감만 그때그때 식힘", b: "아무것도 안 해도 붉은 상태를 관리" },
    { key: "proof", label: "데이터", a: "자극 후 진정 여부 중심", b: "평소 붉은기 기준점 2주 측정" },
    { key: "after", label: "체감", a: "바를 때만 잠깐 편안함", b: "계속 쓸수록 다음날 덜 붉은 루틴" },
    { key: "fit", label: "대상", a: "누구에게나 무난한 진정 서사", b: "건조하고 예민한 피부 대상 임상" },
  ];

  React.useEffect(() => {
    let i = 0;
    setHover(rows[0].key);
    const id = setInterval(() => {
      i = (i + 1) % rows.length;
      setHover(rows[i].key);
    }, 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      data-screen-label="09 Comparison"
      style={{
        position: "relative",
        width: 1000,
        background: "#FFFFFF",
        fontFamily: "'Pretendard', sans-serif",
        padding: "0 59.15px 169px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 28.307,
      }}
    >
      <div>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
          <span style={{ color: "#14160f" }}>{`왜 진정/홍조 크림은 `}</span>
          <span style={{ color: "#2d4739" }}>바를 때뿐</span>
          <span style={{ color: "#14160f" }}>일까요.</span>
        </p>
      </div>
      <div style={{ paddingTop: 1.268 }}>
        <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#3f4538", lineHeight: "45.313px" }}>
          애초에 보는 문제가 다르기 때문입니다.
        </p>
      </div>

      <img src="https://cdn.jsdelivr.net/gh/contactocreator/tae743-detail-assets@main/comparison.gif" alt="comparison-table" style={{ width: "100%", height: "auto", display: "block" }} />
    </section>
  );
};

const IngredientSection = () => {
  // Figma 디자인 (1:727, 1000×1858). 다크 그린 배경 + 상단 이미지 영역.
  const facts = [
    { num: "01", label: "거친 환경에서 버틴 감태", detail: ["감태는 고염분과 강한 자외선, 거친 파도 환경에서 자생합니다.", "이 성장 과정에서 매우 우수한 천연 항산화 물질이 만들어집니다."] },
    {
      num: "02",
      label: "감태의 혈관 강화 성분을 엑소좀으로 깊숙이",
      detail: ["감태 유래 플로로탄닌이 혈관을 강화하고, 피부 산화 감소, 염증경로 억제하여", "피부장벽을 튼튼하고 본연의 피부로 되돌립니다."],
    },
    { num: "03", label: "붉은기 + 건조함 동시 고려", detail: "붉은기 진정과 피부 보습 장벽은 실제 효과가 있는 성분으로 반드시 동시에 잡아줘야 합니다." },
  ];

  return (
    <section
      data-screen-label="10 Ingredient"
      style={{
        position: "relative",
        width: 1000,
        background: "#1a2e22",
        color: "#FAF7F1",
        fontFamily: "'Pretendard', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 상단 이미지 영역 (높이 718px, 가로 잘림 효과) */}
      <div style={{ width: 1000, height: 718.25, overflow: "hidden", position: "relative" }}>
        <img
          src={DETAIL_ASSETS.fgIngredientBg}
          alt="감태 채취와 제품 컷"
          style={{
            position: "absolute",
            top: "5.49%",
            left: "-8.1%",
            width: "110.1%",
            height: "89.03%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: "69px 59.15px 169px", display: "flex", flexDirection: "column", gap: 28.307 }}>
        {/* 헤드라인 */}
        <div>
          <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#FAF7F1", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
            쉽게 붉어지는 피부 = 피부장벽 무너짐
          </p>
          <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
            <span style={{ color: "#a8c9b5" }}>피부의 힘을 키우는 성분</span>
            <span style={{ color: "#FAF7F1" }}>이 필요합니다.</span>
          </p>
        </div>

        {/* 3개 팩트 행 */}
        <div style={{ paddingTop: 22.392, paddingBottom: 30.843, display: "flex", flexDirection: "column", gap: 29.575 }}>
          {facts.map((f) => (
            <div key={f.num} style={{
              display: "flex",
              gap: 29.575,
              alignItems: "flex-start",
              paddingBottom: 27.462,
              borderBottom: "2.112px solid rgba(250,247,241,0.12)",
            }}>
              <div className="mono" style={{ fontSize: 23.237, fontWeight: 600, color: "#a8c9b5", letterSpacing: "2.3238px", lineHeight: "35.912px", paddingTop: 2.112, flexShrink: 0 }}>
                {f.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 35, fontWeight: 700, color: "#FAF7F1", lineHeight: "45.841px" }}>
                  {f.label}
                </div>
                <div style={{ marginTop: 7, fontSize: 25.35, fontWeight: 400, color: "#FAF7F1", opacity: 0.82, lineHeight: "39.292px" }}>
                  {Array.isArray(f.detail) ? f.detail.map((line, i) => <p key={i} style={{ margin: 0 }}>{line}</p>) : f.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 카피 박스 */}
        <div style={{
          border: "2.112px solid rgba(250,247,241,0.18)",
          padding: "42.25px 48.587px 44.362px",
          display: "flex",
          flexDirection: "column",
          gap: 14.576,
        }}>
          <div className="mono" style={{ fontSize: 20.069, fontWeight: 400, color: "#FAF7F1", opacity: 0.6, letterSpacing: "4.0138px", lineHeight: "31.117px" }}>
            ECKLONIA CAVA · PHLOROTANNIN · ROUTINE · TAE743
          </div>
          <div style={{ letterSpacing: "-0.338px" }}>
            <p style={{ margin: 0, fontSize: 33.8, fontWeight: 600, color: "#FAF7F1", lineHeight: "52.39px" }}>{`7일, 4주, 3개월 100일간의 루틴형성으로 `}</p>
            <p style={{ margin: 0, fontSize: 33.8, fontWeight: 600, lineHeight: "52.39px" }}>
              <span style={{ color: "#a8c9b5" }}>쉽게 흔들리지 않는 피부 리듬</span>
              <span style={{ color: "#FAF7F1" }}>을 쌓아 올립니다.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 피부 침투 시뮬레이션 차트 — 애니메이션 적용
// NON-EXOSOME (좌측): 큰 원이 표피 위에서 튕김 (각질층 못 뚫고 겉돔)
// TAE743 EXOSOME (우측): 위에서 진피까지 흘러 내려감 (각자 다른 delay)
const PenetrationChart = () => {
  // NON-EXOSOME — 표피 위 다양한 x 위치에서 튕기는 큰 원
  const leftDots = [
    { x: 6, size: 18, delay: 0,    dur: 1.6 },
    { x: 14, size: 22, delay: 0.4, dur: 1.9 },
    { x: 22, size: 16, delay: 0.8, dur: 1.4 },
    { x: 30, size: 24, delay: 0.2, dur: 2.1 },
    { x: 38, size: 18, delay: 0.6, dur: 1.7 },
    { x: 44, size: 20, delay: 1.0, dur: 1.8 },
  ];
  // TAE743 — 위에서 아래로 흘러 내림 (다양한 x, delay)
  const rightDots = [
    { x: 56, delay: 0,    dur: 4 },
    { x: 62, delay: 0.5,  dur: 4.5 },
    { x: 68, delay: 1.0,  dur: 4 },
    { x: 74, delay: 1.5,  dur: 4.3 },
    { x: 80, delay: 2.0,  dur: 4 },
    { x: 86, delay: 2.5,  dur: 4.6 },
    { x: 60, delay: 3.0,  dur: 4 },
    { x: 72, delay: 3.5,  dur: 4.2 },
    { x: 84, delay: 4.0,  dur: 4 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: 457.753, background: "#000000", overflow: "hidden" }}>
      {/* 4개 수평선 (피부층 구분) */}
      {[27.27, 35.45, 47.73, 65.91].map((top, i) => (
        <React.Fragment key={i}>
          <div style={{ position: "absolute", top: `${top}%`, left: 0, right: "50.5%", height: 1, background: "rgba(255,255,255,0.2)" }} />
          <div style={{ position: "absolute", top: `${top}%`, left: "50.5%", right: 0, height: 1, background: "rgba(255,255,255,0.2)" }} />
        </React.Fragment>
      ))}
      {/* 중앙 분할선 */}
      <div style={{ position: "absolute", top: "9.09%", bottom: "9.09%", left: "50%", width: 1, background: "rgba(255,255,255,0.15)" }} />
      {/* 좌측 라벨 */}
      <div style={{ position: "absolute", top: "12.27%", left: "2%", fontSize: 18.73, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif" }}>NON-EXOSOME</div>
      <div style={{ position: "absolute", top: "18.41%", left: "2%", fontSize: 15.61, color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>일반 크림</div>
      {/* 우측 라벨 */}
      <div style={{ position: "absolute", top: "12.27%", left: "52.5%", fontSize: 18.73, fontWeight: 700, color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif" }}>TAE743 EXOSOME</div>
      <div style={{ position: "absolute", top: "18.41%", left: "52.5%", fontSize: 15.61, color: "#7dff8a", fontFamily: "'Inter', sans-serif" }}>엑소좀</div>

      {/* NON-EXOSOME dots — 표피 위에서 띡띡 튕김 (step 애니메이션) */}
      {leftDots.map((d, i) => (
        <div
          key={`l${i}`}
          style={{
            position: "absolute",
            left: `${d.x}%`,
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 8px rgba(255,255,255,0.3)",
            animation: `nonExosomeBounce ${d.dur}s steps(1, end) infinite`,
            animationDelay: `${d.delay}s`,
            top: "24%",
          }}
        />
      ))}

      {/* TAE743 dots — 단계별 띡띡 침투 (step 애니메이션) */}
      {rightDots.map((d, i) => (
        <div
          key={`r${i}`}
          style={{
            position: "absolute",
            left: `${d.x}%`,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "#7dff8a",
            boxShadow: "0 0 12px rgba(125,255,138,0.6)",
            animation: `exosomeFall ${d.dur}s steps(1, end) infinite`,
            animationDelay: `${d.delay}s`,
            top: "-3%",
            opacity: 0,
          }}
        />
      ))}

      {/* 우측 라벨 4개 (표피/각질층/표피하부/진피) */}
      {[
        { top: "24.55%", label: "표피" },
        { top: "33.64%", label: "각질층" },
        { top: "45.91%", label: "표피하부" },
        { top: "64.09%", label: "진피" },
      ].map((lab, i) => (
        <div key={i} style={{ position: "absolute", top: lab.top, right: 12, fontSize: 13.52, color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
          {lab.label}
        </div>
      ))}
      {/* 하단 footnote */}
      <div style={{ position: "absolute", bottom: 8, left: 12, fontSize: 13.52, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>T+07 · STEP-MOTION SIMULATION</div>
      <div style={{ position: "absolute", bottom: 8, right: 12, fontSize: 13.52, color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>ILLUSTRATIVE</div>
    </div>
  );
};

const TechSection = () => {
  // Figma 디자인 (1:765, 1000×3702). 두 개의 비주얼 + 하단 큰 사진.
  return (
    <section
      data-screen-label="11 Tech"
      style={{
        position: "relative",
        width: 1000,
        background: "#FFFFFF",
        fontFamily: "'Pretendard', sans-serif",
      }}
    >
      <div style={{ padding: "169px 59.15px", display: "flex", flexDirection: "column", gap: 28.307 }}>
        {/* 헤드라인 */}
        <div>
          <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#14160f", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
            4세대 더마 코스메틱 성분 1등 엑소좀
          </p>
          <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#2d4739", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
            나노 크기로 작아진 110억개 유효 성분이
          </p>
          <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#2d4739", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>
            피부에 직접 들어갑니다.
          </p>
        </div>

        {/* 서브 카피 */}
        <div style={{ paddingTop: 9.696 }}>
          <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#3f4538", lineHeight: "45.313px" }}>좋은 성분도 겉돌면 체감이 약합니다.</p>
          <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#3f4538", lineHeight: "45.313px" }}>그래서 TAE743는 피부에 더 깊고 고르게 닿도록 전달 기술까지 함께 설계했습니다.</p>
        </div>

        {/* 비주얼 1: 엑소좀 vs 일반 크림 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 29.575, alignItems: "center", padding: "77.317px 38.025px 46.475px" }}>
          <div style={{ position: "relative", width: 542 }}>
            {/* 라벨들 */}
            <div style={{ position: "absolute", top: 0, left: 317.57, fontSize: 16.747, fontWeight: 500, color: "#1c5552", lineHeight: "21.532px", whiteSpace: "nowrap" }}>나노크기의 택배상자</div>
            <div style={{ position: "absolute", top: 51.62, left: 75.75, fontSize: 16.747, fontWeight: 400, color: "#1c5552", lineHeight: "21.532px", whiteSpace: "nowrap" }}>표피에서 튕겨져 나가는</div>
            <div style={{ position: "absolute", top: 73.67, left: 291.76, fontSize: 29.396, fontWeight: 500, color: "#1c5552", lineHeight: "37.795px", whiteSpace: "nowrap" }}>TAE743 엑소좀</div>
            <div style={{ position: "absolute", top: 147.34, left: 97.63, fontSize: 29.396, fontWeight: 400, color: "#1c5552", lineHeight: "37.795px", whiteSpace: "nowrap" }}>일반 크림</div>
            {/* 메인 이미지 */}
            <img src={DETAIL_ASSETS.fgTechExosome} alt="엑소좀 전달 비교 일러스트" style={{ width: 542, height: 401.17, marginTop: 220, objectFit: "cover", display: "block" }} />
          </div>

          {/* 인터러브 텍스트 */}
          <div style={{ width: "100%", borderTop: "2.112px solid #cfc9bb", paddingTop: 29.141 }}>
            <p style={{ margin: 0, fontSize: 35, fontWeight: 700, color: "#1c5552", lineHeight: "45.63px" }}>피부 겉에서 끝나는 케어가 아니라,</p>
            <p style={{ margin: 0, fontSize: 35, fontWeight: 700, color: "#1c5552", lineHeight: "45.63px" }}>도달 방식까지 계산해서 만들었습니다.</p>
          </div>
        </div>

        {/* 비주얼 2: 침투 시뮬레이션 차트 */}
        <div style={{ paddingTop: 9.717, display: "flex", flexDirection: "column", gap: 21.104 }}>
          <img src="https://cdn.jsdelivr.net/gh/contactocreator/tae743-detail-assets@main/tech.gif" alt="tech-penetration" style={{ width: "100%", height: "auto", display: "block" }} />
          <div>
            <p style={{ margin: 0, fontSize: 35, fontWeight: 700, color: "#000000", lineHeight: "49.116px" }}>비 엑소좀 크림 대비 더 넓게 분포되는 엑소좀은</p>
            <p style={{ margin: 0, fontSize: 35, fontWeight: 700, color: "#000000", lineHeight: "49.116px" }}>바늘이나 레이저 없이도 크림의 기능을 피부 깊숙히 전달합니다.</p>
          </div>
        </div>

        {/* 푸트노트 */}
        <div style={{ paddingTop: 1.246 }}>
          <p style={{ margin: 0, fontSize: 23.237, fontWeight: 400, color: "#7a8074", lineHeight: "37.18px" }}>
            * 본 표현은 유효성분 전달 기술에 대한 설명이며, 의약품적 효능을 의미하지 않습니다.
          </p>
        </div>
      </div>

      {/* 하단 큰 모델 사진 */}
      <div style={{ width: 999, height: 1332, position: "relative", overflow: "hidden" }}>
        <img src={DETAIL_ASSETS.fgTechModel} alt="제품 사용 모델 컷" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </section>
  );
};

const HowToSection = () => {
  // Figma 디자인 (1:792, 1000×4565). 다크 그린 그라데이션 + 펌프 가이드 + 사용법.
  const steps = [
    { n: "01", title: "1회 1펌프", detail: "과하게 바르는 대신 매일 빠짐없이 바르기 좋은 양입니다." },
    { n: "02", title: "양 볼 · 코 주변 먼저", detail: "평소 붉은기가 남는 부위부터 먼저 얇게 펴 발라주세요." },
    { n: "03", title: "아침 · 저녁 14일", detail: "2주를 채워야 '오늘 진정'이 아니라 '평소 붉은기' 변화가 보입니다." },
  ];
  const pumpFeatures = [
    { num: "01.", title: ["산화 방지,", "세균 노출 최소화"] },
    { num: "02.", title: ["불량없이 일정한", "토출량 유지(0.2g 기준)"] },
    { num: "03.", title: ["내부 빨대 없이 진공 압력으로", "내용물을 끌어 올리는 구조"] },
  ];

  return (
    <section
      data-screen-label="12 How to"
      style={{
        position: "relative",
        width: 1000,
        background: "linear-gradient(to right, #2d4739 0%, #6ead8b 100%)",
        fontFamily: "'Pretendard', sans-serif",
        color: "#FFFFFF",
        padding: "169px 59.15px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 28.307,
      }}
    >
      {/* 헤드라인 */}
      <div>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#FFFFFF", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>1회 1펌프, 아침저녁 14일.</p>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#FFFFFF", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>이 루틴이 결과를 만듭니다.</p>
      </div>

      {/* 서브 카피 */}
      <div style={{ paddingTop: 9.717 }}>
        <p style={{ margin: 0, fontSize: 27.462, fontWeight: 400, color: "#FFFFFF", lineHeight: "45.313px" }}>
          지긋지긋한 진정 관리, 해답은 꾸준한 루틴에 있습니다.
        </p>
      </div>

      {/* 인용 박스 (종이 텍스처 위 카피) */}
      <div style={{ position: "relative", width: "100%", height: 872 }}>
        <img src={DETAIL_ASSETS.fgHowToQuotePaper} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 472, objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 128.2, left: 60.46, width: 753.18, padding: "44.12px 83.28px", boxSizing: "border-box" }}>
          <p style={{ margin: 0, fontSize: 25.494, fontWeight: 700, color: "#2e5821", lineHeight: "36.421px" }}>{`"처음엔 양이 적은 것 같아서 걱정했는데,`}</p>
          <p style={{ margin: 0, fontSize: 25.494, fontWeight: 700, color: "#2e5821", lineHeight: "36.421px" }}>{`1 펌프만 짜도 얼굴 전체가 커버돼서 6~8주째 쓰고 있어요."`}</p>
          <p style={{ margin: 0, fontSize: 25.494, fontWeight: 700, color: "#2e5821", lineHeight: "36.421px" }}>— 실제 구매 고객 후기</p>
        </div>
        <div style={{ position: "absolute", top: 533.93, left: 0, width: 833 }}>
          <p style={{ margin: 0, fontSize: 40, fontWeight: 600, color: "#FFFFFF", lineHeight: "43.705px" }}>{`"1회 1-2펌프면 충분"`}</p>
          <p style={{ margin: 0, fontSize: 40, fontWeight: 600, color: "#FFFFFF", lineHeight: "43.705px" }}>{`초고농축 제형으로, 소량만으로 효과가 충분합니다.`}</p>
        </div>
        <div style={{ position: "absolute", top: 685.93, left: 0, width: 753, fontSize: 25.494, fontWeight: 400, color: "#FFFFFF", lineHeight: "36.421px" }}>
          {`화상치료부터 시작했던 프랑스 고급 크림의 기능성을 그대로 재현한 TAE743은 1일 사용비 약 600~750원 매일 아침 1~2펌프, 6~8주 사용 가능. 카페 아메리카노 한 잔의 ¹⁄₇ 가격으로 매일 피부 관리할 수 있습니다.`}
        </div>
      </div>

      {/* How to use. 헤드 */}
      <div style={{ position: "relative", width: "100%", height: 820 }}>
        <p style={{ margin: 0, position: "absolute", top: 0, left: 0, fontSize: 40, fontWeight: 700, color: "#FFFFFF", lineHeight: "67.008px", letterSpacing: "-1.3731px" }}>How to use.</p>
        <p style={{ margin: 0, position: "absolute", top: 107.51, left: 2.85, width: 753.18, fontSize: 25.494, fontWeight: 400, color: "#FFFFFF", lineHeight: "36.421px" }}>
          누른만큼 정량이 딱 나오는 펌프용기로 너무나 쉽게 사용하실 수 있습니다.
        </p>
        {/* 3 단계 행 — 위/아래 균등 여백 (위 30 + 카드 + 30 + 카드 + 30 + 카드 + 30) */}
        {[178, 392, 606].map((top, i) => {
          const s = steps[i];
          return (
            <div key={i} style={{
              position: "absolute",
              top,
              left: 0,
              right: 0,
              height: 180,
              background: "linear-gradient(to right, rgba(155,249,174,0.85) 0%, rgba(155,249,174,0.35) 60%, rgba(155,249,174,0.18) 100%)",
              borderLeft: "8px solid #9bf9ae",
              boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
              display: "flex",
              alignItems: "center",
              padding: "0 40px",
              boxSizing: "border-box",
            }}>
              <div className="mono" style={{ fontSize: 32, fontWeight: 700, letterSpacing: "3.6px", color: "#1a3a26", lineHeight: 1, flexShrink: 0, width: 100 }}>
                {s.n}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 34, fontWeight: 700, color: "#0f1f15", lineHeight: 1.3, letterSpacing: "-0.5px" }}>{s.title}</p>
                <p style={{ margin: "12px 0 0", fontSize: 26, fontWeight: 500, color: "#1a3a26", lineHeight: 1.5 }}>{s.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 펌프 큰 비주얼 + 3개 카드 */}
      <div style={{ position: "relative", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
        {/* 헤드라인 영역 */}
        <div style={{ paddingBottom: 40 }}>
          <p style={{ margin: 0, fontSize: 40, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>{`공기와 접촉없이 사용 가능한`}</p>
          <p style={{ margin: 0, fontSize: 40, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>2세대 에어리스 펌프</p>
          <div style={{ marginTop: 18, fontSize: 25, fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5, opacity: 0.92 }}>
            <p style={{ margin: 0 }}>고객분들의 소중한 피드백을 반영해 펌프 구조를 더욱 정밀하게 개선했습니다.</p>
            <p style={{ margin: 0 }}>보다 안정적인 진공 압력을 위해 펌프 헤드 재설계를 적용했습니다.</p>
          </div>
        </div>
        {/* 펌프 모델 사진 (카드는 사진에 이미 포함됨) */}
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src={DETAIL_ASSETS.fgHowToPumpModel}
            alt="펌프 사용 비주얼"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* DAILY PACKAGE 박스 */}
      <div style={{
        background: "#FAF7F1",
        border: "2.112px solid #e2ddd2",
        padding: "58.305px 40.137px 35.912px",
        display: "grid",
        gridTemplateColumns: "232.38px 1fr",
        gap: 33.8,
        height: 326.592,
        boxSizing: "border-box",
      }}>
        <div style={{ width: 232.375, height: 232.375, overflow: "hidden", position: "relative" }}>
          <img src={DETAIL_ASSETS.fgHowToProductPack} alt="제품 패키지" style={{ position: "absolute", top: "-12.5%", left: 0, width: "100%", height: "125%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11.196 }}>
          <div className="mono" style={{ fontSize: 20.069, fontWeight: 400, color: "#7a8074", letterSpacing: "3.211px", lineHeight: "31.117px" }}>
            DAILY PACKAGE
          </div>
          <div style={{ paddingTop: 5.704 }}>
            <p style={{ margin: 0, fontSize: 29.575, fontWeight: 700, color: "#14160f", lineHeight: "44.362px" }}>매일 쓰기 번거롭지 않도록,</p>
            <p style={{ margin: 0, fontSize: 29.575, fontWeight: 700, color: "#14160f", lineHeight: "44.362px" }}>루틴화하기 좋은 구조로 만들었습니다.</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 25.35, fontWeight: 400, color: "#3f4538", lineHeight: "39.292px" }}>2세대 에어리스 펌프로 끝까지 위생적이고 안정적으로</p>
            <p style={{ margin: 0, fontSize: 25.35, fontWeight: 400, color: "#3f4538", lineHeight: "39.292px" }}>사용할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  // Figma 디자인 (1:859, 1000×1854). 검정 배경 + 헤드라인 + 큰 제품 사진.
  return (
    <section
      data-screen-label="13 CTA"
      style={{
        position: "relative",
        width: 1000,
        height: 1854,
        background: "#14160f",
        color: "#FAF7F1",
        fontFamily: "'Pretendard', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 222.87, left: 59.15, right: 59.15, paddingTop: 7.098 }}>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#FAF7F1", lineHeight: "67.008px", letterSpacing: "-1.3731px", whiteSpace: "nowrap" }}>
          내일도 붉을 게 뻔하다면,
        </p>
        <p style={{ margin: 0, fontSize: 54.925, fontWeight: 700, color: "#a8c9b5", lineHeight: "67.008px", letterSpacing: "-1.3731px", whiteSpace: "nowrap" }}>
          오늘 루틴부터 바꾸세요.
        </p>
      </div>
      <div style={{ position: "absolute", top: 386.46, left: 59.15, right: 59.15, opacity: 0.8 }}>
        <p style={{ margin: 0, fontSize: 28.519, fontWeight: 400, color: "#FAF7F1", lineHeight: "45.63px", whiteSpace: "nowrap" }}>
          제품을 바꿔도 해결되지 않는 붉은기,
        </p>
        <p style={{ margin: 0, fontSize: 28.519, fontWeight: 400, color: "#FAF7F1", lineHeight: "45.63px", whiteSpace: "nowrap" }}>
          근본적인 원인에 제대로 투자할 때입니다.
        </p>
      </div>
      {/* 큰 제품 이미지 (1255px 높이는 디자인 기준이지만 섹션 1854에 맞춰 잘림) */}
      <img
        src={DETAIL_ASSETS.fgCtaProduct}
        alt="TAE743 제품 사진"
        style={{
          position: "absolute",
          top: 599.38,
          left: 0,
          width: 1000,
          height: 1255,
          objectFit: "cover",
          display: "block",
        }}
      />
    </section>
  );
};

// Section 14: 브랜드 메시지 — 한 장의 이미지로 통째 처리
const BrandSection = () => (
  <section
    data-screen-label="14 Brand"
    style={{ position: "relative", width: 1000, overflow: "hidden", lineHeight: 0 }}
  >
    <img
      src={DETAIL_ASSETS.fgBrandFull}
      alt="TAE743 — Longevity Beauty 브랜드 메시지"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  </section>
);

// Section 15: 제품 요약 정보 — Figma 1:897 (1000×1468)
const InfoSection = () => {
  return (
    <section
      data-screen-label="15 Info"
      style={{
        position: "relative",
        width: 1000,
        height: 1468,
        overflow: "hidden",
      }}
    >
      <img
        src={DETAIL_ASSETS.fgFrame71Info}
        alt="제품 요약 정보"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </section>
  );
};

window.InterludeSection = InterludeSection;
window.BrandSection = BrandSection;
window.InfoSection = InfoSection;
window.ReframeSection = ReframeSection;
window.Clinical01Section = Clinical01Section;
window.Clinical02Section = Clinical02Section;
window.Clinical03Section = Clinical03Section;
window.ComparisonTable = ComparisonTable;
window.IngredientSection = IngredientSection;
window.TechSection = TechSection;
window.HowToSection = HowToSection;
window.CTASection = CTASection;
