export default function MiniBarChart({ series, color = "var(--primary)", emptyLabel = "Sin actividad" }) {
  const values = Array.isArray(series) ? series.slice(0, 7) : new Array(7).fill(0);
  const max = Math.max(1, ...values);
  const allZero = values.every((v) => v === 0);
  return (
    <div className="flex flex-col">
      {allZero && <div className="text-[11px] text-[color:var(--text-secondary)] mb-1">{emptyLabel}</div>}
      <div className="flex items-end gap-1 h-20">
        {values.map((v, i) => (
          <div
            key={i}
            className="w-2.5 rounded-sm"
            style={{ height: `${Math.round((v / max) * 80)}px`, background: v === 0 ? "var(--surface-muted)" : color }}
          />
        ))}
      </div>
    </div>
  );
}
