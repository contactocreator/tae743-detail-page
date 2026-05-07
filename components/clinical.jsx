/* 임상 데이터 시각화 — 라인 차트 애니메이션 */
const ClinicalSection = ({ tone, density }) => {
  const [tab, setTab] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);

  React.useEffect(() => { setAnimKey(k => k + 1); }, [tab]);

  const tabs = [
    { id: 0, label: "베이스라인 a*", short: "DATA 01" },
    { id: 1, label: "사용자 만족도", short: "DATA 02" },
    { id: 2, label: "타겟 적합성", short: "DATA 03" },
  ];

  return (
    <div className="screen-block" style={{ background: "var(--paper)" }}>
      <div style={{ padding: "44px 28px 32px" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--rose)", letterSpacing: "0.18em", marginBottom: 14 }}>
          ── CLINICAL DATA · 03
        </div>
        <h2 className="serif" style={{ fontSize: 26, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>
          숫자가 아니라,<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>당신의 평소 피부</em>입니다.
        </h2>
        <p style={{ fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 22, maxWidth: 360 }}>
          자극을 주지 않은 평소 피부 상태에서 측정된 '진짜' 개선 수치.
          <span className="mono" style={{ fontSize: 10.5, color: "var(--rose)", marginLeft: 4 }}>p&lt;.001</span>
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--line-2)", marginBottom: 0 }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "10px 14px 11px",
                fontSize: 11.5,
                color: tab === t.id ? "var(--ink)" : "var(--ink-3)",
                fontWeight: tab === t.id ? 600 : 400,
                borderBottom: tab === t.id ? "2px solid var(--ink)" : "2px solid transparent",
                marginBottom: -1,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span className="mono" style={{ fontSize: 9, opacity: 0.6, marginRight: 6, letterSpacing: "0.1em" }}>{t.short}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ padding: "24px 0 8px", minHeight: 280 }}>
          {tab === 0 && <BaselineChart key={animKey} />}
          {tab === 1 && <SatisfactionChart key={animKey} />}
          {tab === 2 && <TargetFitChart key={animKey} />}
        </div>
      </div>
    </div>
  );
};

const BaselineChart = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const W = 320, H = 200, P = { l: 44, r: 18, t: 14, b: 36 };
  const days = [0, 7, 14];
  const values = [18.68, 18.10, 17.57];
  const yMin = 17.0, yMax = 19.0;

  const xFor = d => P.l + (d / 14) * (W - P.l - P.r);
  const yFor = v => P.t + (1 - (v - yMin) / (yMax - yMin)) * (H - P.t - P.b);

  // path through 3 points
  const points = days.map((d, i) => [xFor(d), yFor(values[i])]);
  const fullPath = `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]} L ${points[2][0]} ${points[2][1]}`;

  // animated reveal: clip via stroke-dasharray
  const pathLen = 320; // approx
  const dashOffset = pathLen * (1 - progress);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18 }}>
      <div style={{ background: "var(--bg)", border: "1px solid var(--line)", padding: "18px 14px 12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <div>
            <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.14em" }}>
              BASELINE a* (REDNESS)
            </div>
            <div className="serif" style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 2 }}>14일간 평소 붉기 측정</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 26, fontWeight: 600, color: "var(--rose)", letterSpacing: "-0.02em" }}>
              −{(5.94 * progress).toFixed(2)}<span style={{ fontSize: 14, marginLeft: 1 }}>%</span>
            </div>
            <div className="mono" style={{ fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.1em" }}>D14 vs D0</div>
          </div>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block" }}>
          {/* y-axis grid */}
          {[17, 17.5, 18, 18.5, 19].map(v => (
            <g key={v}>
              <line x1={P.l} x2={W - P.r} y1={yFor(v)} y2={yFor(v)} stroke="var(--line)" strokeWidth="0.5" strokeDasharray="2 3" />
              <text x={P.l - 6} y={yFor(v) + 3} textAnchor="end" className="mono" fontSize="9" fill="var(--ink-3)">{v.toFixed(1)}</text>
            </g>
          ))}

          {/* x-axis labels */}
          {days.map(d => (
            <g key={d}>
              <line x1={xFor(d)} x2={xFor(d)} y1={H - P.b} y2={H - P.b + 4} stroke="var(--line-2)" strokeWidth="0.8" />
              <text x={xFor(d)} y={H - P.b + 16} textAnchor="middle" className="mono" fontSize="9.5" fill="var(--ink-2)">D{d}</text>
            </g>
          ))}

          {/* baseline reference */}
          <line x1={P.l} x2={W - P.r} y1={yFor(values[0])} y2={yFor(values[0])} stroke="var(--ink-3)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
          <text x={W - P.r - 4} y={yFor(values[0]) - 4} textAnchor="end" className="mono" fontSize="8.5" fill="var(--ink-3)" opacity="0.7">baseline 18.68</text>

          {/* area fill */}
          <path
            d={`${fullPath} L ${xFor(14)} ${H - P.b} L ${xFor(0)} ${H - P.b} Z`}
            fill="var(--rose)"
            opacity={0.08 * progress}
          />

          {/* line */}
          <path
            d={fullPath}
            fill="none"
            stroke="var(--rose)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLen}
            strokeDashoffset={dashOffset}
          />

          {/* points */}
          {points.map(([x, y], i) => {
            const show = progress > i / 2;
            return show ? (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="var(--paper)" stroke="var(--rose)" strokeWidth="1.6" />
                <text x={x} y={y - 10} textAnchor="middle" className="mono" fontSize="9.5" fill="var(--ink)" fontWeight="600">
                  {values[i]}
                </text>
              </g>
            ) : null;
          })}

          {/* arrow at end */}
          {progress > 0.95 && (
            <g className="fade-in">
              <text x={xFor(14) - 6} y={yFor(values[2]) + 22} textAnchor="end" className="mono" fontSize="9" fill="var(--rose)" fontWeight="600">
                ↘ −5.94%
              </text>
            </g>
          )}
        </svg>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <Stat label="측정 기간" value="14 DAYS" />
        <Stat label="유의 수준" value="p<.001" />
        <Stat label="피험자" value="N=25" />
      </div>
    </div>
  );
};

const SatisfactionChart = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1200;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 2.5);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [
    { label: "피부 불편감 개선", sub: "민감함·당김", val: 100 },
    { label: "피부 컨디션 개선", sub: "전반적 만족도", val: 100 },
    { label: "이상반응 발생", sub: "임상 기간 중", val: 0, inverse: true },
  ];

  return (
    <div>
      <div className="mono" style={{ fontSize: 9.5, color: "var(--rose)", letterSpacing: "0.14em", marginBottom: 4 }}>
        TRIPLE CROWN
      </div>
      <div className="serif" style={{ fontSize: 14, color: "var(--ink)", marginBottom: 18 }}>
        사용자 만족도 — 100% / 100% / 0건
      </div>
      <div style={{ display: "grid", gap: 14 }}>
        {items.map((it, i) => {
          const display = (it.val * progress) | 0;
          return (
            <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--line)", padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink)" }}>{it.label}</div>
                  <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-3)", letterSpacing: "0.08em", marginTop: 2 }}>{it.sub}</div>
                </div>
                <div className="mono" style={{ fontSize: 22, fontWeight: 600, color: it.inverse ? "var(--accent)" : "var(--rose)", letterSpacing: "-0.02em" }}>
                  {display}{it.inverse ? "건" : "%"}
                </div>
              </div>
              <div style={{ height: 3, background: "var(--line)", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: it.inverse ? `${(1 - progress) * 100}%` : `${progress * 100}%`,
                  background: it.inverse ? "var(--accent)" : "var(--rose)",
                  transition: "none",
                }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TargetFitChart = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1000;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      setProgress(1 - Math.pow(1 - t, 2));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const sz = 140;
  const r = sz / 2 - 8;
  const c = 2 * Math.PI * r;

  return (
    <div>
      <div className="mono" style={{ fontSize: 9.5, color: "var(--rose)", letterSpacing: "0.14em", marginBottom: 4 }}>
        TARGET FIT
      </div>
      <div className="serif" style={{ fontSize: 14, color: "var(--ink)", marginBottom: 18 }}>
        피험자 전원 '건성 피부'
      </div>

      <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
        <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`}>
          <circle cx={sz/2} cy={sz/2} r={r} fill="none" stroke="var(--line)" strokeWidth="6" />
          <circle
            cx={sz/2} cy={sz/2} r={r}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="6"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - progress)}
            transform={`rotate(-90 ${sz/2} ${sz/2})`}
            strokeLinecap="round"
          />
          <text x={sz/2} y={sz/2 + 4} textAnchor="middle" className="mono" fontSize="22" fontWeight="600" fill="var(--ink)">
            {(progress * 100) | 0}%
          </text>
          <text x={sz/2} y={sz/2 + 22} textAnchor="middle" className="mono" fontSize="8.5" fill="var(--ink-3)" letterSpacing="2">
            DRY SKIN
          </text>
        </svg>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, color: "var(--ink)", lineHeight: 1.55, marginBottom: 12 }}>
            만성 홍조와 <strong style={{ color: "var(--accent)" }}>건조함을 동시에 겪는 타겟</strong>에게 직접 소구.
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-2)", lineHeight: 1.6 }}>
            "당신의 피부 상태로 검증된 데이터"라는 메시지가 가능합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div style={{ flex: 1, background: "var(--bg)", border: "1px solid var(--line)", padding: "10px 12px" }}>
    <div className="mono" style={{ fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.12em", marginBottom: 4 }}>{label}</div>
    <div className="mono" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{value}</div>
  </div>
);

window.ClinicalSection = ClinicalSection;
