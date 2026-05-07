/* TAE743 상세페이지 — 메인 앱 + Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "viewMode": "page",
  "deviceWidth": 1000
}/*EDITMODE-END*/;

const App = () => {
  const [viewMode, setViewMode] = React.useState(TWEAK_DEFAULTS.viewMode); // "page" | "annotated"
  const [deviceWidth, setDeviceWidth] = React.useState(TWEAK_DEFAULTS.deviceWidth);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  const persist = (key, value) => {
    window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
  };

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

  const PageContent = () => (
    <div className="page-frame" style={{ maxWidth: deviceWidth }}>
      {/* mock browser bar */}
      <div style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--line-2)",
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <div style={{ display: "flex", gap: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#A8C9B5" }}></span>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C7D6B8" }}></span>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#B8C7B0" }}></span>
        </div>
        <div className="mono" style={{ fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.04em", marginLeft: 6 }}>
          tae743.com / product / skin-vitality-gamtae-exosome-cream
        </div>
      </div>

      <HeroSection />
      <HookSection />
      <InsightSection />
      <InterludeSection />
      <ReframeSection />
      <ReviewSection />
      <Clinical01Section />
      <Clinical02Section />
      <Clinical03Section />
      <ComparisonTable />
      <IngredientSection />
      <TechSection />
      <HowToSection />
      <CTASection />
      <BrandSection />
      <InfoSection />
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", padding: "32px 24px 80px", background: "#1A1A18" }}>
      {/* Top toolbar */}
      <div style={{
        maxWidth: 880,
        margin: "0 auto 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "var(--paper)",
      }}>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--moss-pale)", marginBottom: 4 }}>
            TAE743 · DETAIL PAGE
          </div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>
            상세페이지 시안 v1.0
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <ModeBtn active={viewMode === "page"} onClick={() => { setViewMode("page"); persist("viewMode", "page"); }}>PAGE</ModeBtn>
          <ModeBtn active={viewMode === "annotated"} onClick={() => { setViewMode("annotated"); persist("viewMode", "annotated"); }}>+ NOTES</ModeBtn>
        </div>
      </div>

      {viewMode === "annotated" ? (
        <div className="annotation-frame">
          <PageContent />
          <AnnotationSidebar />
        </div>
      ) : (
        <PageContent />
      )}

      {tweaksOpen && (
        <TweaksPanel
          viewMode={viewMode}
          setViewMode={(v) => { setViewMode(v); persist("viewMode", v); }}
          deviceWidth={deviceWidth}
          setDeviceWidth={(v) => { setDeviceWidth(v); persist("deviceWidth", v); }}
          onClose={() => {
            setTweaksOpen(false);
            window.parent?.postMessage({ type: "__edit_mode_dismissed" }, "*");
          }}
        />
      )}
    </div>
  );
};

const ModeBtn = ({ active, onClick, children }) => (
  <button onClick={onClick} className="mono" style={{
    padding: "8px 14px",
    fontSize: 10,
    letterSpacing: "0.18em",
    fontWeight: 700,
    background: active ? "var(--paper)" : "transparent",
    color: active ? "var(--ink)" : "var(--paper)",
    border: "1px solid",
    borderColor: active ? "var(--paper)" : "rgba(250,247,241,0.3)",
    cursor: "pointer",
    transition: "all 0.18s",
  }}>
    {children}
  </button>
);

const TweaksPanel = ({ viewMode, setViewMode, deviceWidth, setDeviceWidth, onClose }) => {
  return (
    <div style={{
      position: "fixed",
      right: 24,
      bottom: 24,
      width: 280,
      background: "var(--paper)",
      border: "1px solid var(--ink)",
      boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
      zIndex: 200,
      fontSize: 12,
    }}>
      <div style={{
        padding: "10px 14px",
        background: "var(--ink)",
        color: "var(--paper)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.22em", fontWeight: 700 }}>TWEAKS</div>
        <button onClick={onClose} style={{ color: "var(--paper)", fontSize: 14, lineHeight: 1, padding: 0 }}>×</button>
      </div>

      <div style={{ padding: "14px 14px 16px" }}>
        <Row label="VIEW MODE" hint="페이지 / 주석 함께">
          <div style={{ display: "flex", gap: 4 }}>
            {[["page", "페이지"], ["annotated", "+ 주석"]].map(([k, l]) => (
              <button key={k} onClick={() => setViewMode(k)}
                style={{
                  flex: 1, padding: "7px 8px", fontSize: 11,
                  border: "1px solid", borderColor: viewMode === k ? "var(--ink)" : "var(--line-2)",
                  background: viewMode === k ? "var(--ink)" : "var(--paper)",
                  color: viewMode === k ? "var(--paper)" : "var(--ink-2)",
                  fontWeight: viewMode === k ? 700 : 500, cursor: "pointer",
                }}>{l}</button>
            ))}
          </div>
        </Row>

        <Row label="DEVICE WIDTH" hint={`${deviceWidth}px`}>
          <input type="range" min="480" max="1200" step="20" value={deviceWidth}
            onChange={(e) => setDeviceWidth(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--green)" }} />
          <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--ink-3)", marginTop: 4 }}>
            <span>480 mobile</span><span>1200 desktop</span>
          </div>
        </Row>

        <div className="mono" style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--line)", fontSize: 9, color: "var(--ink-3)", letterSpacing: "0.1em", lineHeight: 1.6 }}>
          상단 PAGE / + NOTES 버튼으로도<br/>전환할 수 있습니다.
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, hint, children }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
      <div className="mono" style={{ fontSize: 9.5, color: "var(--ink)", letterSpacing: "0.14em", fontWeight: 700 }}>{label}</div>
      <div style={{ fontSize: 10, color: "var(--ink-3)" }}>{hint}</div>
    </div>
    {children}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
