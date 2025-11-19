import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const sampleData = [
    { city: "sydney", avgPrice: 207.78 },
    { city: "ny", avgPrice: 152.76 },
    { city: "madrid", avgPrice: 129.34 },
    { city: "london", avgPrice: 122.38 },
    { city: "milan", avgPrice: 115.1 },
  ];
  
  function PriceAnalysis({ theme = "dark" }) {
    const isDark = theme === "dark";
    const panelBg = isDark ? "bg-slate-800" : "bg-white";
    const titleColor = isDark ? "" : "text-slate-900";
    const axisColor = isDark ? "#d4d4d4" : "#4b5563";
  
    return (
      <div>
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-2 ${titleColor}`}
        >
          CITY COMPARISON
        </h1>
        <p className="mb-8 text-lg">
          Precio Promedio por city (muestra simplificada del reporte)
        </p>
  
        <div className={`${panelBg} p-6 rounded-2xl shadow-lg`}>
          {/* IMPORTANTE: El contenedor padre de ResponsiveContainer debe tener altura */}
          <div style={{ width: "100%", height: 420 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sampleData}>
                <XAxis
                  dataKey="city"
                  stroke={axisColor}
                  tick={{ fontSize: 14, textTransform: "capitalize" }}
                />
                <YAxis
                  stroke={axisColor}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "Precio Promedio (€)",
                    angle: -90,
                    position: "insideLeft",
                    fill: axisColor,
                  }}
                />
                <Tooltip
                  formatter={(value) => [`€ ${value.toFixed(2)}`, "Precio Promedio"]}
                  contentStyle={{
                    backgroundColor: isDark ? "#111827" : "#f9fafb",
                    border: "none",
                  }}
                  labelStyle={{
                    color: isDark ? "#e5e7eb" : "#111827",
                    textTransform: "capitalize",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="avgPrice"
                  fill="#6366f1"
                  name="Precio Promedio (€)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
  
  export default PriceAnalysis;