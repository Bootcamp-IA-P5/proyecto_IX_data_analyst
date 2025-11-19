import {
    FaTachometerAlt,
    FaChartBar,
    FaCalendarCheck,
    FaUserTie,
    FaMoon,
    FaSun,
  } from "react-icons/fa";
  
  function Sidebar({ view, setView, theme, toggleTheme }) {
    const isDark = theme === "dark";
  
    const baseStyle =
      "w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-200 text-sm";
    const activeStyle = isDark
      ? "bg-blue-600 text-white"
      : "bg-blue-600 text-white";
    const inactiveStyle = isDark
      ? "hover:bg-gray-700 text-gray-300"
      : "hover:bg-slate-200 text-slate-700";
  
    const sidebarBg = isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900";
    const borderColor = isDark ? "border-slate-800" : "border-slate-200";
  
    return (
      <aside
        className={
          "w-64 h-screen p-6 flex flex-col shadow-2xl border-r " +
          sidebarBg +
          " " +
          borderColor
        }
      >
        {/* Top: título + toggle de tema */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">Global Analysis</h1>
          <button
            onClick={toggleTheme}
            className={
              "w-10 h-10 flex items-center justify-center rounded-full border text-xs transition-colors " +
              (isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-slate-100 border-slate-300 hover:bg-slate-200")
            }
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
  
        <nav>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setView("overview")}
                className={`${baseStyle} ${
                  view === "overview" ? activeStyle : inactiveStyle
                }`}
              >
                <FaTachometerAlt className="mr-3" />
                Overview
              </button>
            </li>
  
            <li>
              <button
                onClick={() => setView("price")}
                className={`${baseStyle} ${
                  view === "price" ? activeStyle : inactiveStyle
                }`}
              >
                <FaChartBar className="mr-3" />
                Price Analysis
              </button>
            </li>
  
            <li>
              <button
                onClick={() => setView("availability")}
                className={`${baseStyle} ${
                  view === "availability" ? activeStyle : inactiveStyle
                }`}
              >
                <FaCalendarCheck className="mr-3" />
                Availability
              </button>
            </li>
  
            <li>
              <button
                onClick={() => setView("host_insights")}
                className={`${baseStyle} ${
                  view === "host_insights" ? activeStyle : inactiveStyle
                }`}
              >
                <FaUserTie className="mr-3" />
                Host Insights
              </button>
            </li>
          </ul>
        </nav>
  
        <footer className="mt-auto text-center text-xs text-gray-500">
          <p>Project XI - 2025</p>
          <p>Data Analyst Bootcamp</p>
        </footer>
      </aside>
    );
  }
  
  export default Sidebar;