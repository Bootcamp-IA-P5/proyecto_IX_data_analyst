function DashboardCard({ title, value, icon, theme = "dark" }) {
  const isDark = theme === "dark";
  const cardBg = isDark ? "bg-slate-800" : "bg-white";
  const textMuted = isDark ? "text-gray-300" : "text-slate-500";

  return (
    <div
      className={`${cardBg} px-8 py-6 rounded-2xl shadow-lg flex items-center h-full`}
    >
      <div className="flex items-center justify-center bg-blue-600 w-16 h-16 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div className="ml-6">
        <p className={`${textMuted} text-sm mb-1`}>{title}</p>
        <p className="text-3xl font-extrabold leading-tight">{value}</p>
      </div>
    </div>
  );
}

export default DashboardCard;