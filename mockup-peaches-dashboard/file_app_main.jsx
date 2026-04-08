// ─── src/App.jsx ──────────────────────────────────────────────────────────────
import { useState } from "react";
import Sidebar        from "./components/Sidebar";
import Header         from "./components/Header";
import WelcomePage    from "./pages/WelcomePage";
import OverviewPage   from "./pages/OverviewPage";
import ProductionPage from "./pages/ProductionPage";
import TradePage      from "./pages/TradePage";
import TabularPage    from "./pages/TabularPage";
import palette        from "./styles/palette";

const pages = {
  welcome:    <WelcomePage />,
  overview:   <OverviewPage />,
  production: <ProductionPage />,
  trade:      <TradePage />,
  tabular:    <TabularPage />,
};

export default function App() {
  const [page,   setPage]   = useState("overview");
  const [year,   setYear]   = useState("2024");
  const [region, setRegion] = useState("All");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: palette.cream, fontFamily: "system-ui, sans-serif" }}>
      <Sidebar page={page} setPage={setPage} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Header
          page={page}
          year={year}   setYear={setYear}
          region={region} setRegion={setRegion}
        />
        <div style={{ flex: 1, padding: "24px 32px", overflowY: "auto" }}>
          {pages[page]}
        </div>
      </div>
    </div>
  );
}


// ─── src/main.jsx ─────────────────────────────────────────────────────────────
import React    from "react";
import ReactDOM from "react-dom/client";
import App      from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
