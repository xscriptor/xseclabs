export default function StatCard({ title, value, subtitle, color = "var(--link)" }) {
  const v = typeof value === "number" ? value : null;
  return (
    <div className="card rounded-lg p-3 min-w-[160px]">
      {subtitle && <div className="text-[11px] text-[color:var(--text-secondary)] mb-1">{subtitle}</div>}
      <div className="flex items-baseline justify-between">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-lg font-bold" style={{ color }}>{v ?? 0}</div>
      </div>
    </div>
  );
}
