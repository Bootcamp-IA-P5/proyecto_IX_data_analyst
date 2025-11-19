import DashboardCard from "./DashboardCard";
import { FaHome, FaCity, FaStar, FaUsers, FaDollarSign } from "react-icons/fa";

function Overview({ theme = "dark" }) {
  const isDark = theme === "dark";
  const titleColor = isDark ? "" : "text-slate-900";

  return (
    <div>
      {/* Contenedor centrado para título + tarjetas */}
      <div className="max-w-6xl mx-auto">
        {/* Título principal tipo reporte */}
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-2 ${titleColor}`}
        >
          AIRBNB GLOBAL ANALYSIS
        </h1>
        <p className="mb-8 text-lg">
          London | Madrid | Milan | New York | Sydney
        </p>

        {/* Fila de tarjetas centrada y distribuida */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Cada tarjeta: ancho flexible pero con mínimo para no romperse */}
          <div className="flex-1 min-w-[220px] max-w-xs">
            <DashboardCard
              title="Anuncios Totales"
              value="208.452"
              icon={<FaHome size={22} className="text-white" />}
              theme={theme}
            />
          </div>

          <div className="flex-1 min-w-[220px] max-w-xs">
            <DashboardCard
              title="Citys Analysed"
              value="5"
              icon={<FaCity size={22} className="text-white" />}
              theme={theme}
            />
          </div>

          <div className="flex-1 min-w-[220px] max-w-xs">
            <DashboardCard
              title="Total Reviews"
              value="4 mill."
              icon={<FaStar size={22} className="text-white" />}
              theme={theme}
            />
          </div>

          <div className="flex-1 min-w-[220px] max-w-xs">
            <DashboardCard
              title="Unique Hosts"
              value="141,48 mil"
              icon={<FaUsers size={22} className="text-white" />}
              theme={theme}
            />
          </div>

          <div className="flex-1 min-w-[220px] max-w-xs">
            <DashboardCard
              title="Average Price"
              value="144,53 €"
              icon={<FaDollarSign size={22} className="text-white" />}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;