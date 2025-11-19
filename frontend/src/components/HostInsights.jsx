import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const hostData = [
  { name: "Regular Hosts", value: 800 },
  { name: "Superhosts", value: 400 },
];

const COLORS = ["#6366f1", "#3b82f6"];

function HostInsights({ theme = "dark" }) {
  const isDark = theme === "dark";
  const panelBg = isDark ? "bg-slate-800" : "bg-white";
  const titleColor = isDark ? "" : "text-slate-900";

  return (
    <div>
      <h1
        className={`text-4xl md:text-5xl font-extrabold mb-2 ${titleColor}`}
      >
        Host Insights
      </h1>
      <p className="mb-8 text-lg">
        Distribución de tipos de host (Regular vs Superhost), inspirado en la
        sección de &quot;% Hosts Profesionales&quot; del reporte del equipo.
      </p>

      <div
        className={`${panelBg} p-6 rounded-2xl shadow-lg flex items-center justify-center`}
      >
        <ResponsiveContainer width="60%" height={420}>
          <PieChart>
            <Pie
              data={hostData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
            >
              {hostData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [
                `${value} hosts`,
                name === "Regular Hosts" ? "Regular Hosts" : "Superhosts",
              ]}
              contentStyle={{
                backgroundColor: isDark ? "#111827" : "#f9fafb",
                border: "none",
              }}
              labelStyle={{
                color: isDark ? "#e5e7eb" : "#111827",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default HostInsights;