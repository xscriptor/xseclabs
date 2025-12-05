import ModuleCard from "./components/ModuleCard";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">xSecLabs</h1>
      <p className="mb-6 text-gray-700">Plataforma segura y modular</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ModuleCard href="/auth" title="Auth" description="Módulo común de sesión" />
        <ModuleCard href="/dashboard" title="Dashboard" description="Panel base reutilizable" />
        <ModuleCard href="/files" title="Files" description="Contenidos y configuración" />
        <ModuleCard href="/versions" title="Versions" description="Versionado de entidades" />
        <ModuleCard href="/activity" title="Activity" description="Registro universal" />
        <ModuleCard href="/settings" title="Settings" description="Configuración global" />
      </div>
    </div>
  );
}
