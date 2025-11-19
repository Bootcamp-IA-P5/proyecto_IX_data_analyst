import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const availabilityData = [
  { day: "Lun", bookings: 400 },
  { day: "Mar", bookings: 300 },
  { day: "Mié", bookings: 500 },
  { day: "Jue", bookings: 450 },
  { day: "Vie", bookings: 700 },
  { day: "Sáb", bookings: 800 },
  { day: "Dom", bookings: 750 },
];

function Availability({ theme = "dark" }) {
  const isDark = theme === "dark";
  const panelBg = isDark ? "bg-slate-800" : "bg-white";
  const titleColor = isDark ? "" : "text-slate-900";
  const axisColor = isDark ? "#d4d4d4" : "#4b5563";

  return (
    <div>
      <h1
        className={`text-4xl md:text-5xl font-extrabold mb-2 ${titleColor}`}
      >
        Availability / Booking Trends
      </h1>
      <p className="mb-8 text-lg">
        Precio vs actividad de reseñas por ciudad (inspirado en el reporte del
        equipo).
      </p>

      <div className={`${panelBg} p-6 rounded-2xl shadow-lg`}>
        <ResponsiveContainer width="100%" height={420}>
          <LineChart data={availabilityData}>
            <XAxis
              dataKey="day"
              stroke={axisColor}
              tick={{ fontSize: 14 }}
            />
            <YAxis
              stroke={axisColor}
              tick={{ fontSize: 12 }}
              label={{
                value: "Bookings per Day",
                angle: -90,
                position: "insideLeft",
                fill: axisColor,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#111827" : "#f9fafb",
                border: "none",
              }}
              labelStyle={{
                color: isDark ? "#e5e7eb" : "#111827",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="bookings"
              stroke="#22c55e"
              name="Bookings per Day"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Availability;