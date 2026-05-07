/* TAE743 상세페이지 — 협업 주석 사이드바 */

const AnnotationSidebar = () => {
  const blocks = [
    {
      sec: "01 · HERO",
      items: [
        { tag: "GOAL", text: "3초 안에 카테고리 전환. 진정 크림 패밀리에서 빠져나오는 첫 신호." },
        { tag: "COPY", text: "헤드라인은 통찰형(A)을 기본 채택. 데이터형(B)·경험형(C)은 광고 소재로 활용 예정." },
        { tag: "VISUAL", text: "키비주얼은 자극적 컬러 금지. 베이지·올리브 톤으로 절제된 인상." },
      ],
    },
    {
      sec: "02 · HOOK",
      items: [
        { tag: "INTERACTION", text: "체크리스트 인터랙션은 자기 진단을 통해 '내 얘기'로 전환시키는 장치." },
        { tag: "COPY", text: "고객의 실제 발화를 그대로 차용 — 회의감을 정면으로 인정." },
      ],
    },
    {
      sec: "03 · INSIGHT",
      items: [
        { tag: "STRATEGY", text: "응급 진통제 vs 체질 개선 — 카테고리 자체를 분리하는 핵심 장치." },
        { tag: "VISUAL", text: "좌(스파이크) vs 우(우하향) 다이어그램으로 두 패턴을 직관적으로 대비." },
      ],
    },
    {
      sec: "04 · REFRAME",
      items: [
        { tag: "VOCABULARY", text: "'베이스라인'을 사전 형식으로 처음 정의. 이후 임상 섹션에서 회수." },
        { tag: "DESIGN", text: "딥 그린 풀 블리드로 시각적 챕터 분기점 형성." },
      ],
    },
    {
      sec: "05 · CLINICAL 01",
      items: [
        { tag: "DATA", text: "스크롤 도달 시 차트 0부터 애니메이션. '진행 중인 변화'를 체감." },
        { tag: "LEGAL", text: "p<.001 표기와 시험기관·N수 표기 의무. 본문 하단 각주 처리." },
      ],
    },
    {
      sec: "06 · CLINICAL 02",
      items: [
        { tag: "DATA", text: "트리플 크라운: 100/100/0건. 안전성을 '없음=0건'이라는 역방향 시각화로 표현." },
      ],
    },
    {
      sec: "07 · CLINICAL 03",
      items: [
        { tag: "TARGET", text: "건성 100% 도넛 차트. 만성 홍조+건조 동반 고객의 자기인식과 정확히 매칭." },
      ],
    },
    {
      sec: "08 · COMPARISON",
      items: [
        { tag: "INTERACTION", text: "행 호버 시 OTHERS 측 텍스트에 취소선 — 시각적 부정." },
        { tag: "RISK", text: "'일반 진정 크림'은 일반명만 사용. 특정 브랜드 비교 광고 금지." },
      ],
    },
    {
      sec: "09 · INGREDIENT",
      items: [
        { tag: "NARRATIVE", text: "감태 서식 환경(파도·자외선·고염분) ↔ 고객 피부 환경(자극·홍조·건조) 평행 구조." },
        { tag: "VISUAL", text: "풀 블리드 오션 비주얼로 챕터 호흡. 실제 감태 필드 사진으로 교체 발주." },
      ],
    },
    {
      sec: "10 · TECH",
      items: [
        { tag: "LEGAL · CRITICAL", text: "엑소좀은 '전달 기술'로만 서술. '치료/회복/재생' 단어 사용 금지." },
        { tag: "FOOTNOTE", text: "각주에 '의약품적 효능 의미하지 않음' 명시 의무." },
      ],
    },
    {
      sec: "11 · HOW TO",
      items: [
        { tag: "COPY", text: "'14일의 꾸준함'으로 베이스라인 메시지를 사용 습관에 다시 연결." },
        { tag: "VISUAL", text: "텍스처 컷은 별도 발주. 그린 톤 베이스로 제품 컨셉과 통일." },
      ],
    },
    {
      sec: "12 · CTA",
      items: [
        { tag: "COMMERCE", text: "정기구독 −15% 옵션으로 '베이스라인은 꾸준함' 메시지를 가격 구조로 강화." },
        { tag: "COPY", text: "마지막 카피는 미래시제 — 구매가 곧 베이스라인 변화의 시작점." },
      ],
    },
  ];

  return (
    <div className="anno-col">
      <div style={{ marginBottom: 22, paddingBottom: 14, borderBottom: "1px solid rgba(250,247,241,0.18)" }}>
        <div className="mono" style={{ fontSize: 9.5, color: "var(--moss-pale)", letterSpacing: "0.22em", marginBottom: 6, fontWeight: 600 }}>
          → PLANNING NOTES
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--paper)", letterSpacing: "-0.01em", marginBottom: 4 }}>
          기획 의도 주석
        </div>
        <div style={{ fontSize: 11, color: "rgba(250,247,241,0.55)", lineHeight: 1.55 }}>
          좌측 상세페이지 시안과 위치를<br />맞춰 읽으세요.
        </div>
      </div>

      {blocks.map((block, i) => (
        <div key={i}>
          <div className="anno-section-tag">{block.sec}</div>
          {block.items.map((item, j) => (
            <div key={j} className="anno-card">
              <div className="anno-tag">{item.tag}</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      ))}

      <div style={{
        marginTop: 32,
        padding: "16px 18px",
        background: "var(--moss)",
        color: "var(--paper)",
      }}>
        <div className="mono" style={{ fontSize: 9, opacity: 0.7, letterSpacing: "0.2em", marginBottom: 8 }}>
          ── ONE-LINE
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.55, fontWeight: 500 }}>
          '일시적 소방수'가 아니라
          <strong style={{ display: "block", marginTop: 4 }}>평소 붉은기 수치를 낮추는 체질 개선 솔루션</strong>
          으로 포지셔닝.
        </div>
      </div>
    </div>
  );
};

window.AnnotationSidebar = AnnotationSidebar;
