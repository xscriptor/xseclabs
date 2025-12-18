import StatCard from "./StatCard";
import MiniBarChart from "./MiniBarChart";
import MiniDonutChart from "./MiniDonutChart";

export default function PanelWidgets({
  logbookSeries = null,
  labsSeries = null,
  toolsSeries = null,
  notesSeries = null,
  projectsSeries = null,
  totals = null,
  labels = null,
}) {
  const safeTotals = totals || {
    logbook: null,
    labs: null,
    tools: null,
    notes: null,
    projects: null,
  };

  const defaultLabels = {
    logbook: "Bitácora",
    labs: "Laboratorios",
    tools: "Herramientas",
    notes: "Apuntes",
    projects: "Proyectos",
    summary: "Resumen",
    total: "Total",
    empty: {
      logbook: "Sin actividad en Bitácora",
      labs: "Sin actividad en Laboratorios",
      tools: "Sin actividad en Herramientas",
      notes: "Sin actividad en Apuntes",
      projects: "Sin actividad en Proyectos",
    },
  };
  const l = labels || defaultLabels;

  const colors = {
    logbook: "var(--aqua)",
    labs: "var(--purple)",
    tools: "var(--success)",
    notes: "var(--link)",
    projects: "var(--aqua)",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="card rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{l.logbook}</div>
          <StatCard title="Registros" value={safeTotals.logbook} subtitle={l.total} color={colors.logbook} />
        </div>
        <div className="mt-3">
          <MiniBarChart series={Array.isArray(logbookSeries) ? logbookSeries : null} color={colors.logbook} emptyLabel={l.empty.logbook} />
        </div>
      </div>

      <div className="card rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{l.labs}</div>
          <StatCard title="Registros" value={safeTotals.labs} subtitle={l.total} color={colors.labs} />
        </div>
        <div className="mt-3">
          <MiniBarChart series={Array.isArray(labsSeries) ? labsSeries : null} color={colors.labs} emptyLabel={l.empty.labs} />
        </div>
      </div>

      <div className="card rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{l.tools}</div>
          <StatCard title="Registros" value={safeTotals.tools} subtitle={l.total} color={colors.tools} />
        </div>
        <div className="mt-3">
          <MiniBarChart series={Array.isArray(toolsSeries) ? toolsSeries : null} color={colors.tools} emptyLabel={l.empty.tools} />
        </div>
      </div>

      <div className="card rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{l.notes}</div>
          <StatCard title="Registros" value={safeTotals.notes} subtitle={l.total} color={colors.notes} />
        </div>
        <div className="mt-3">
          <MiniBarChart series={Array.isArray(notesSeries) ? notesSeries : null} color={colors.notes} emptyLabel={l.empty.notes} />
        </div>
      </div>

      <div className="card rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{l.projects}</div>
          <StatCard title="Registros" value={safeTotals.projects} subtitle={l.total} color={colors.projects} />
        </div>
        <div className="mt-3">
          <MiniBarChart series={Array.isArray(projectsSeries) ? projectsSeries : null} color={colors.projects} emptyLabel={l.empty.projects} />
        </div>
      </div>

      <div className="card rounded-lg p-4">
        <div className="font-semibold">{l.summary}</div>
        <div className="mt-3 grid grid-cols-3 gap-4">
          <MiniDonutChart value={safeTotals.logbook} total={null} color={colors.logbook} label={l.logbook} />
          <MiniDonutChart value={safeTotals.labs} total={null} color={colors.labs} label={l.labs} />
          <MiniDonutChart value={safeTotals.tools} total={null} color={colors.tools} label={l.tools} />
          <MiniDonutChart value={safeTotals.notes} total={null} color={colors.notes} label={l.notes} />
          <MiniDonutChart value={safeTotals.projects} total={null} color={colors.projects} label={l.projects} />
        </div>
      </div>
    </div>
  );
}
