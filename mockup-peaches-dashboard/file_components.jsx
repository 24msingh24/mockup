// ─── src/components/KpiCard.jsx ──────────────────────────────────────────────
import palette from "../styles/palette";

export default function KpiCard({ label, value, sub, subColor, accent }) {
  return (
    <div style={{
      background: palette.white,
      border: `1px solid ${palette.border}`,
      borderRadius: 14,
      padding: "18px 22px",
      flex: 1,
      minWidth: 130,
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: palette.muted, textTransform: "uppercase", marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: accent || palette.dark, lineHeight: 1.1, marginBottom: 6 }}>
        {value}
      </div>
      {sub && (
        <div style={{ fontSize: 12, color: subColor || palette.muted }}>{sub}</div>
      )}
    </div>
  );
}


// ─── src/components/TrendBadge.jsx ───────────────────────────────────────────
import palette from "../styles/palette";

export function TrendBadge({ val }) {
  const up = val >= 0;
  return (
    <span style={{
      background: up ? palette.greenBg : palette.redBg,
      color: up ? palette.green : palette.red,
      fontSize: 11,
      fontWeight: 600,
      borderRadius: 20,
      padding: "2px 8px",
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
    }}>
      {up ? "▲" : "▼"} {Math.abs(val)}%
    </span>
  );
}


// ─── src/components/StatusDot.jsx ────────────────────────────────────────────
import palette from "../styles/palette";

export function StatusDot({ status }) {
  const color = status === "Healthy" ? palette.green : "#E08C00";
  return <span style={{ color, fontSize: 12 }}>● {status}</span>;
}


// ─── src/components/Sidebar.jsx ──────────────────────────────────────────────
import palette from "../styles/palette";

const navItems = [
  { id: "welcome",    label: "Welcome",      icon: "⭐" },
  { id: "overview",   label: "Overview",     icon: "◉"  },
  { id: "production", label: "Production",   icon: "✦"  },
  { id: "trade",      label: "Trade",        icon: "⇄"  },
  { id: "tabular",    label: "Tabular View", icon: "▤"  },
];

export default function Sidebar({ page, setPage }) {
  return (
    <div style={{
      width: 220,
      background: palette.dark,
      display: "flex",
      flexDirection: "column",
      padding: "24px 0",
      flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "0 20px 28px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
          Global Insights
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.peach, marginTop: 2 }}>Peaches</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>2024 Report</div>
      </div>

      {/* Nav links */}
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        {navItems.map(n => (
          <button
            key={n.id}
            onClick={() => setPage(n.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "9px 12px",
              borderRadius: 10,
              border: "none",
              background: page === n.id ? palette.peach : "transparent",
              color: page === n.id ? "#fff" : "rgba(255,255,255,0.55)",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: page === n.id ? 600 : 400,
              marginBottom: 2,
              textAlign: "left",
            }}
          >
            <span style={{ fontSize: 14 }}>{n.icon}</span> {n.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Data: FAOSTAT 2024</div>
      </div>
    </div>
  );
}


// ─── src/components/Header.jsx ───────────────────────────────────────────────
import palette from "../styles/palette";

const titles = {
  welcome:    { h: "Welcome",               sub: "Global Peach Analytics · FAOSTAT 2024"     },
  overview:   { h: "The World of Peaches",  sub: "Production · Trade · Global Insights"       },
  production: { h: "Who Grows",             sub: "Volume · Area · Yield"                      },
  trade:      { h: "Who Trades",            sub: "Export · Import · Trade Balance"             },
  tabular:    { h: "Tabular View",          sub: "Production · Trade · Build your own view"   },
};

export default function Header({ page, year, setYear, region, setRegion }) {
  return (
    <>
      <div style={{
        background: palette.white,
        borderBottom: `1px solid ${palette.border}`,
        padding: "18px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: palette.dark }}>
            {titles[page]?.h}
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: 13, color: palette.muted }}>
            {titles[page]?.sub}
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 10, color: palette.muted, fontWeight: 600, marginBottom: 3 }}>📅 Year</div>
            <select value={year} onChange={e => setYear(e.target.value)} style={{ padding: "5px 28px 5px 10px", borderRadius: 8, border: `1px solid ${palette.border}`, fontSize: 13, color: palette.dark, background: palette.white, cursor: "pointer" }}>
              {["2024","2023","2022","2021","2020"].map(y => <option key={y}>{y}</option>)}
            </select>
          </div>
          <div>
            <div style={{ fontSize: 10, color: palette.muted, fontWeight: 600, marginBottom: 3 }}>📍 Region</div>
            <select value={region} onChange={e => setRegion(e.target.value)} style={{ padding: "5px 28px 5px 10px", borderRadius: 8, border: `1px solid ${palette.border}`, fontSize: 13, color: palette.dark, background: palette.white, cursor: "pointer" }}>
              {["All","Asia","Europe","Americas","Africa","Oceania"].map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div style={{ borderTop: `3px solid ${palette.peach}` }} />
    </>
  );
}
