export default function MiniDonutChart({ value, total, color = "var(--success)", label }) {
  const v = typeof value === "number" ? value : 0;
  const t = typeof total === "number" && total > 0 ? total : 0;
  const pct = t > 0 ? Math.min(100, Math.round((v / t) * 100)) : 0;
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dash = (pct / 100) * circumference;
  const empty = t === 0;
  return (
    <div className="flex flex-col items-center">
      {label && <div className="text-[11px] text-[color:var(--text-secondary)] mb-1">{label}</div>}
      <div className="relative w-20 h-20">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={radius} fill="none" stroke="var(--surface-muted)" strokeWidth="8" />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
          {empty ? "0%" : `${pct}%`}
        </div>
      </div>
    </div>
  );
}
