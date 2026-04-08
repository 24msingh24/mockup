// ─── src/pages/WelcomePage.jsx ────────────────────────────────────────────────
import palette from "../styles/palette";

const sections = [
  { page: "Overview",      icon: "◉", desc: "Global production stats, trend charts, and regional share breakdown" },
  { page: "Production",    icon: "✦", desc: "Top producers by volume, country breakdown, and harvested area data" },
  { page: "Trade",         icon: "⇄", desc: "Export/import flows, continental share, and top trading nations" },
  { page: "Tabular View",  icon: "▤", desc: "Explore all 79 countries with sortable, searchable grouped table" },
];

export default function WelcomePage() {
  return (
    <div style={{ maxWidth: 640, padding: "20px 0" }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: palette.dark, marginBottom: 8 }}>Welcome 🍑</div>
      <div style={{ fontSize: 16, color: palette.muted, marginBottom: 28, lineHeight: 1.6 }}>
        A comprehensive dashboard exploring global peach production, trade flows, and market insights.
        Data sourced from FAOSTAT 2024.
      </div>
      {sections.map(item => (
        <div key={item.page} style={{ display: "flex", gap: 14, padding: "16px 0", borderBottom: `1px solid ${palette.border}` }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: palette.peachBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: palette.peach, flexShrink: 0 }}>
            {item.icon}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: palette.dark, marginBottom: 3 }}>{item.page}</div>
            <div style={{ fontSize: 13, color: palette.muted }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


// ─── src/pages/OverviewPage.jsx ───────────────────────────────────────────────
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import KpiCard from "../components/KpiCard";
import { TrendBadge } from "../components/TrendBadge";
import palette from "../styles/palette";
import { productionTrend, regionalShare } from "../data/peachData";

const trendTabs = ["Production", "Export Value", "Import Value", "Trade Balance"];

export default function OverviewPage() {
  const [trendView, setTrendView] = useState("Production");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* KPI Row */}
      <div style={{ display: "flex", gap: 14 }}>
        {/* Hero banner */}
        <div style={{ flex: "0 0 320px", borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 160, background: "linear-gradient(135deg, #5C2E10 0%, #8B4513 60%, #C8612A 100%)" }}>
          <div style={{ padding: "22px 24px", position: "relative", zIndex: 2 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 6 }}>
              Global Production · Tonnes
            </div>
            <div style={{ fontSize: 44, fontWeight: 800, color: "#fff", lineHeight: 1 }}>27.9M</div>
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
              <TrendBadge val={2.6} />
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>vs 2023</span>
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>#1 China · 17.6M t · 63% share</div>
            <div style={{ marginTop: 4, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>79 countries · FAOSTAT 2024</div>
          </div>
        </div>
        {/* 3 KPIs */}
        <div style={{ flex: 1, display: "flex", gap: 12 }}>
          <KpiCard label="Export Value"   value="$2.8B"   sub="▲ +6.6% vs 2023 · Spain leads $1.1B (39.9%)"     subColor={palette.green} />
          <KpiCard label="Import Value"   value="$3.0B"   sub="▲ +9.8% vs 2023 · Germany leads $445M (14.8%)"   subColor={palette.green} />
          <KpiCard label="Trade Balance"  value="-$0.2B"  sub="▼ -75.8% vs 2023 · 3.9M tons exported (7%)"      subColor={palette.red}   accent={palette.red} />
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: "flex", gap: 16 }}>
        {/* Trend chart */}
        <div style={{ flex: 2, background: palette.white, border: `1px solid ${palette.border}`, borderRadius: 16, padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, color: palette.peach, textTransform: "uppercase", letterSpacing: "0.08em" }}>✦ Production</span>
              <div style={{ fontSize: 20, fontWeight: 700, color: palette.dark, marginTop: 4 }}>14-Year Trend</div>
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 2 }}>Total tonnes produced per year</div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {trendTabs.map(t => (
                <button key={t} onClick={() => setTrendView(t)} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 8, border: `1px solid ${trendView === t ? palette.peach : palette.border}`, background: trendView === t ? palette.peach : "transparent", color: trendView === t ? "#fff" : palette.muted, cursor: "pointer", fontWeight: trendView === t ? 600 : 400 }}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "12px 0" }}>
            <TrendBadge val={36.8} />
            <span style={{ fontSize: 12, color: palette.muted }}>20.4M → 27.9M (2010–2024)</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={productionTrend} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: palette.muted }} axisLine={false} tickLine={false} />
              <YAxis domain={[18, 30]} tick={{ fontSize: 11, fill: palette.muted }} axisLine={false} tickLine={false} tickFormatter={v => `${v}M`} />
              <Tooltip formatter={v => [`${v}M tonnes`, "Production"]} contentStyle={{ borderRadius: 8, border: `1px solid ${palette.border}`, fontSize: 12 }} />
              <Line type="monotone" dataKey="val" stroke={palette.peach} strokeWidth={2.5}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  if (payload.year === "'10") return <circle key="low"  cx={cx} cy={cy} r={6} fill={palette.redBg}   stroke={palette.red}   strokeWidth={2} />;
                  if (payload.year === "'24") return <circle key="peak" cx={cx} cy={cy} r={6} fill={palette.greenBg} stroke={palette.green} strokeWidth={2} />;
                  return <circle key={payload.year} cx={cx} cy={cy} r={2.5} fill={palette.peach} />;
                }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
            <span style={{ fontSize: 11, color: palette.muted }}>● <span style={{ color: palette.green }}>Peak: 2024 (28M)</span></span>
            <span style={{ fontSize: 11, color: palette.muted }}>● <span style={{ color: palette.red }}>Low: 2010 (20M)</span></span>
          </div>
        </div>

        {/* Regional share */}
        <div style={{ flex: 1, background: palette.darkMid, borderRadius: 16, padding: "20px 22px", color: "#fff" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Regional Share</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>Output by continent</div>
          {regionalShare.map(r => (
            <div key={r.label} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{r.label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{r.val}%</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 6 }}>
                <div style={{ background: r.color, width: `${r.val}%`, height: "100%", borderRadius: 4 }} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 40, fontWeight: 800, color: palette.peach, textAlign: "center" }}>
            75% <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>Asia</span>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── src/pages/ProductionPage.jsx ─────────────────────────────────────────────
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import KpiCard from "../components/KpiCard";
import palette from "../styles/palette";
import { topProducers } from "../data/peachData";

export default function ProductionPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", gap: 14 }}>
        <KpiCard label="Total Production"  value="27.9M t" sub="▲ +2.6% vs 2023"          subColor={palette.green} />
        <KpiCard label="Top Producer"      value="China"   sub="17.6M t · 63% global share" />
        <KpiCard label="Countries Tracked" value="79"      sub="FAOSTAT 2024 data"          />
        <KpiCard label="Harvested Area"    value="1.4M ha" sub="▲ +1.2% vs 2023"          subColor={palette.green} />
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {/* Bar chart */}
        <div style={{ flex: 3, background: palette.white, border: `1px solid ${palette.border}`, borderRadius: 16, padding: "20px 24px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: palette.dark, marginBottom: 4 }}>Top Producers by Volume</div>
          <div style={{ fontSize: 12, color: palette.muted, marginBottom: 16 }}>Million tonnes — 2024</div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={topProducers} layout="vertical" margin={{ left: 20, right: 40, top: 0, bottom: 0 }}>
              <XAxis type="number" tick={{ fontSize: 11, fill: palette.muted }} axisLine={false} tickLine={false} tickFormatter={v => `${v}M`} />
              <YAxis type="category" dataKey="country" tick={{ fontSize: 12, fill: palette.dark }} axisLine={false} tickLine={false} width={60} />
              <Tooltip formatter={v => [`${v}M tonnes`]} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="val" radius={[0, 6, 6, 0]}>
                {topProducers.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? palette.peach : i < 3 ? palette.peachLight : palette.peachPale} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Share bars */}
        <div style={{ flex: 2, background: palette.white, border: `1px solid ${palette.border}`, borderRadius: 16, padding: "20px 24px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: palette.dark, marginBottom: 4 }}>Global Share Breakdown</div>
          <div style={{ fontSize: 12, color: palette.muted, marginBottom: 16 }}>% of world production</div>
          {topProducers.map((d, i) => (
            <div key={d.country} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                <span style={{ fontSize: 13 }}>{d.flag} {d.country}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? palette.peach : palette.dark }}>{d.share}%</span>
              </div>
              <div style={{ background: palette.peachPale, borderRadius: 4, height: 5 }}>
                <div style={{ background: i === 0 ? palette.peach : palette.peachLight, width: `${d.share}%`, height: "100%", borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ─── src/pages/TradePage.jsx ──────────────────────────────────────────────────
import { useState } from "react";
import KpiCard from "../components/KpiCard";
import { TrendBadge } from "../components/TrendBadge";
import palette from "../styles/palette";
import { exportShareByContinent, topExporters } from "../data/peachData";

export default function TradePage() {
  const [tradeFlow, setTradeFlow] = useState("Export");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <KpiCard label="Total Export Value" value="$2.79B"    sub="▲ +6.6% vs 2023 · 14y CAGR +2.0%"  subColor={palette.green} />
        <KpiCard label="Trade Penetration"  value="7%"        sub="2.0M of 27.9M tonnes produced"      />
        <KpiCard label="Top Exporter"       value="Spain 🇪🇸"  sub="$1.11B/year · 39.9% share"          />
        <KpiCard label="Trade Balance"      value="-$222.5M"  sub="▼ imports exceed exports"            subColor={palette.red} accent={palette.red} />
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {/* Insight hero */}
        <div style={{ flex: "0 0 260px", background: "linear-gradient(160deg, #5C2E10, #9B4F20)", borderRadius: 16, padding: "24px 22px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>◉ Key Insight</div>
          <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>Europe<br/>Exports</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>57.5% of global peach exports</div>
          <div style={{ fontSize: 32, fontWeight: 800, color: palette.peachLight, marginBottom: 12 }}>$1.6B</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>Spain, Italy &amp; Greece drive European dominance. Spain alone ships $1.11B.</div>
          <TrendBadge val={31.1} />
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>14-year growth</div>
        </div>

        {/* Export share bars */}
        <div style={{ flex: 2, background: palette.white, border: `1px solid ${palette.border}`, borderRadius: 16, padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.muted }}>Export Share by Continent</div>
              <div style={{ fontSize: 12, color: palette.muted, marginTop: 2 }}>Export vs import proportion per region</div>
            </div>
            <div style={{ display: "flex", gap: 4 }}>
              {["Export", "Import"].map(f => (
                <button key={f} onClick={() => setTradeFlow(f)} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, border: `1px solid ${tradeFlow === f ? palette.peach : palette.border}`, background: tradeFlow === f ? palette.peach : "transparent", color: tradeFlow === f ? "#fff" : palette.muted, cursor: "pointer" }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            {exportShareByContinent.map(d => {
              const pct = tradeFlow === "Export" ? d.export : d.import;
              return (
                <div key={d.region} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 13 }}>
                    <span style={{ color: palette.dark }}>{d.region}</span>
                    <span style={{ fontWeight: 600, color: palette.peach }}>{pct}%</span>
                  </div>
                  <div style={{ display: "flex", height: 22, borderRadius: 4, overflow: "hidden", background: palette.peachPale }}>
                    <div style={{ width: `${pct}%`, background: palette.peach, transition: "width 0.4s", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{pct}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            <span style={{ fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: palette.peach, display: "inline-block" }}></span> Export
            </span>
            <span style={{ fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: palette.peachPale, display: "inline-block" }}></span> Import
            </span>
          </div>
        </div>

        {/* Top exporters list */}
        <div style={{ flex: 1, background: palette.white, border: `1px solid ${palette.border}`, borderRadius: 16, padding: "20px 22px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.muted, marginBottom: 12 }}>Top 5 Exporters</div>
          {topExporters.map((e, i) => (
            <div key={e.country} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < 4 ? `1px solid ${palette.border}` : "none" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: palette.muted, minWidth: 16 }}>{i + 1}</span>
              <span style={{ fontSize: 16 }}>{e.flag}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: palette.dark }}>{e.country}</div>
                <div style={{ fontSize: 11, color: palette.muted }}>{e.share}% share</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: palette.peach }}>${e.value.toFixed(2)}B</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ─── src/pages/TabularPage.jsx ────────────────────────────────────────────────
import { useState } from "react";
import { StatusDot } from "../components/StatusDot";
import palette from "../styles/palette";
import { tabularData } from "../data/peachData";

const cols = ["production", "area", "yield_", "exportV", "importV", "balance", "share", "status"];
const colLabels = { production: "Production", area: "Area", yield_: "Yield", exportV: "Export $", importV: "Import $", balance: "Balance", share: "Global %", status: "Status" };

export default function TabularPage() {
  const [expanded, setExpanded] = useState({ Asia: true });
  const [sortCol, setSortCol]   = useState("production");
  const [search,  setSearch]    = useState("");

  const toggle = (r) => setExpanded(e => ({ ...e, [r]: !e[r] }));

  const filtered = tabularData.filter(r =>
    r.region.toLowerCase().includes(search.toLowerCase()) ||
    (r.children || []).some(c => c.country.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ background: palette.white, border: `1px solid ${palette.border}`, borderRadius: 16, padding: "20px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: palette.peach, textTransform: "uppercase", letterSpacing: "0.08em", background: palette.peachBg, padding: "3px 10px", borderRadius: 6 }}>
          ▤ Tabular View
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: palette.dark }}>Peach Data by Continent</div>
          <div style={{ fontSize: 12, color: palette.muted }}>Explore 79 countries · Search, group and sort freely</div>
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search country or region..." style={{ fontSize: 13, padding: "6px 12px", borderRadius: 8, border: `1px solid ${palette.border}`, outline: "none", width: 220 }} />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${palette.border}` }}>
              <th style={{ textAlign: "left", padding: "8px 12px", color: palette.muted, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>Country</th>
              {cols.map(c => (
                <th key={c} onClick={() => setSortCol(c)} style={{ textAlign: "right", padding: "8px 12px", color: sortCol === c ? palette.peach : palette.muted, fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {colLabels[c]} {sortCol === c ? "▼" : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <>
                <tr key={r.region} onClick={() => toggle(r.region)} style={{ cursor: "pointer", background: palette.peachBg, borderBottom: `1px solid ${palette.border}` }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700, color: palette.dark }}>
                    <span style={{ fontSize: 10, color: palette.peach, marginRight: 6 }}>{expanded[r.region] ? "▼" : "▶"}</span>
                    {r.region}
                  </td>
                  {cols.map(c => (
                    <td key={c} style={{ textAlign: "right", padding: "10px 12px", fontWeight: 600, color: c === "balance" ? (r.balance?.startsWith("+") ? palette.green : palette.red) : palette.dark }}>
                      {c === "status" ? <StatusDot status={r.status} /> : r[c]}
                    </td>
                  ))}
                </tr>
                {expanded[r.region] && (r.children || [])
                  .filter(ch => ch.country.toLowerCase().includes(search.toLowerCase()) || search === "")
                  .map((ch, i) => (
                    <tr key={ch.country} style={{ borderBottom: `1px solid ${palette.border}`, background: i % 2 === 0 ? palette.white : "#FDFAF8" }}>
                      <td style={{ padding: "8px 12px 8px 28px", color: palette.dark }}>{ch.country}</td>
                      {cols.map(c => (
                        <td key={c} style={{ textAlign: "right", padding: "8px 12px", color: c === "balance" ? (ch.balance?.startsWith("+") ? palette.green : palette.red) : c === "share" ? palette.muted : palette.dark }}>
                          {c === "status" ? <StatusDot status={ch.status} /> : ch[c]}
                        </td>
                      ))}
                    </tr>
                  ))
                }
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: palette.muted }}>Click continent row to expand/collapse · Click column header to sort</div>
    </div>
  );
}
