import PanelWidgets from "../../components/panel/PanelWidgets";

export default function DashboardEn() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Reusable base panel.</p>
      <div className="mt-6">
        <PanelWidgets
          labels={{
            logbook: "Logbook",
            labs: "Labs",
            tools: "Tools",
            notes: "Notes",
            projects: "Projects",
            summary: "Summary",
            total: "Total",
            empty: {
              logbook: "No activity in Logbook",
              labs: "No activity in Labs",
              tools: "No activity in Tools",
              notes: "No activity in Notes",
              projects: "No activity in Projects",
            },
          }}
        />
      </div>
    </div>
  );
}
