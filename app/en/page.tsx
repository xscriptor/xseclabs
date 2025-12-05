import ModuleCard from "../components/ModuleCard";

export default function HomeEn() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">xSecLabs</h1>
      <p className="mb-6 text-gray-700">Secure and modular platform</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ModuleCard href="/en/auth" title="Auth" description="Common session module" />
        <ModuleCard href="/en/dashboard" title="Dashboard" description="Reusable base panel" />
        <ModuleCard href="/en/files" title="Files" description="Content and configuration" />
        <ModuleCard href="/en/versions" title="Versions" description="Entity versioning" />
        <ModuleCard href="/en/activity" title="Activity" description="Universal log" />
        <ModuleCard href="/en/settings" title="Settings" description="Global configuration" />
      </div>
    </div>
  );
}

