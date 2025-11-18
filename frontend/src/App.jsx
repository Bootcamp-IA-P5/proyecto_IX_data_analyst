import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import PriceAnalysis from "./components/PriceAnalysis";
import Availability from "./components/Availability";
import HostInsights from "./components/HostInsights";

function App() {
  const [view, setView] = useState("overview");
  const [theme, setTheme] = useState("dark"); // "dark" | "light"

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const renderView = () => {
    const commonProps = { theme };
    switch (view) {
      case "overview":
        return <Overview {...commonProps} />;
      case "price":
        return <PriceAnalysis {...commonProps} />;
      case "availability":
        return <Availability {...commonProps} />;
      case "host_insights":
        return <HostInsights {...commonProps} />;
      default:
        return <Overview {...commonProps} />;
    }
  };

  const isDark = theme === "dark";

  return (
    <div
      className={
        "flex min-h-screen font-sans " +
        (isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900")
      }
    >
      <Sidebar view={view} setView={setView} theme={theme} toggleTheme={toggleTheme} />

      <main className="flex-grow p-8 overflow-auto">
        {renderView()}
      </main>
    </div>
  );
}

export default App;