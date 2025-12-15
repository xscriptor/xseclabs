import Link from "next/link";

export default function HomeEn() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Login</h1>
      <p className="mb-6 text-gray-700">
        Sign in to use the private cybersecurity logbook.
      </p>
      <div className="mt-4 flex gap-3">
        <Link href="/en/dashboard" className="rounded bg-black px-3 py-2 text-white">
          Go to dashboard
        </Link>
        <Link href="/en/settings" className="rounded border px-3 py-2">
          Settings
        </Link>
      </div>
    </div>
  );
}
