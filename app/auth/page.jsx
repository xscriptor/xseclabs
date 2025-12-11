"use client";
import { useAuth } from "../../hooks/useAuth";

export default function AuthPage() {
  const { authenticated, login, logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Auth</h1>
      <p className="mb-4">Estado: {authenticated ? "Autenticado" : "No autenticado"}</p>
      <div className="flex gap-2">
        <button
          className="rounded bg-black px-3 py-2 text-white"
          onClick={() => login("dummy-token")}
        >
          Login
        </button>
        <button
          className="rounded border px-3 py-2"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
