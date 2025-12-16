export default function ActivityHeatmap({ data, total }) {
  const weeks = 53;
  const days = 7;
  const grid = [];

  for (let i = 0; i < weeks * days; i++) {
    const level = null;
    grid.push(level);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)`, gridTemplateRows: `repeat(${days}, 1fr)`, gap: 3, width: "fit-content" }}>
        {grid.map((lvl, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-sm ${lvl === 1 ? "bg-[var(--aqua)]" : lvl === 2 ? "bg-[var(--link)]" : lvl === 3 ? "bg-[var(--purple)]" : lvl === 4 ? "bg-[var(--success)]" : lvl === 5 ? "bg-[var(--warning)]" : lvl === 6 ? "bg-[var(--primary)]" : "bg-[#ebedf0]"}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-600">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-[#ebedf0]" />
        <div className="w-3 h-3 rounded-sm bg-[var(--aqua)]" />
        <div className="w-3 h-3 rounded-sm bg-[var(--link)]" />
        <div className="w-3 h-3 rounded-sm bg-[var(--purple)]" />
        <div className="w-3 h-3 rounded-sm bg-[var(--success)]" />
        <div className="w-3 h-3 rounded-sm bg-[var(--warning)]" />
        <div className="w-3 h-3 rounded-sm bg-[var(--primary)]" />
        <span>More</span>
        <span className="ml-2">Total: {total ?? 0}</span>
      </div>
    </div>
  );
}
