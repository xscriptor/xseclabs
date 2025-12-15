import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Login</h1>
      <p className="mb-6 text-gray-700">
        Accede para usar la bitácora privada de ciberseguridad.
      </p>
      <div className="mt-4 flex gap-3">
        <Link href="/panel" className="rounded bg-black px-3 py-2 text-white">
          Ir al panel
        </Link>
        <Link href="/ajustes" className="rounded border px-3 py-2">
          Configuración
        </Link>
      </div>
    </div>
  );
}
