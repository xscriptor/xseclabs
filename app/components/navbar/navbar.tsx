"use client";
import { useState } from "react";
import NavLink from "./navlink";
import {useRouter, usePathname} from 'next/navigation';

const linksEs = [
  { href: "/", title: "Inicio" },
  { href: "/auth", title: "Sesión" },
  { href: "/dashboard", title: "Panel" },
  { href: "/files", title: "Archivos" },
  { href: "/versions", title: "Versiones" },
  { href: "/activity", title: "Actividad" },
  { href: "/settings", title: "Ajustes" },
];

const linksEn = [
  { href: "/en", title: "Home" },
  { href: "/en/auth", title: "Auth" },
  { href: "/en/dashboard", title: "Dashboard" },
  { href: "/en/files", title: "Files" },
  { href: "/en/versions", title: "Versions" },
  { href: "/en/activity", title: "Activity" },
  { href: "/en/settings", title: "Settings" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const inEnglish = pathname?.startsWith('/en');
  const links = inEnglish ? linksEn : linksEs;
  const switchLocale = (locale: 'es'|'en') => {
    const current = pathname || '/';
    if (locale === 'en') {
      const target = current.startsWith('/en') ? current : (current === '/' ? '/en' : `/en${current}`);
      router.replace(target);
    } else {
      const target = current.startsWith('/en') ? (current.replace(/^\/en/, '') || '/') : current;
      router.replace(target || '/');
    }
    setOpen(false);
  };

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--surface)] border-b border-black/10 backdrop-blur">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
          <div className="text-sm font-semibold">xSecLabs</div>
          <button
            aria-label="Menu"
            className="rounded-md border px-3 py-1"
            onClick={() => setOpen((v) => !v)}
          >
            {inEnglish ? 'Language' : 'Idioma'}
          </button>
        </div>
        {open && (
          <div className="px-4 pb-4">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} title={l.title} onClick={() => setOpen(false)} />
              ))}
              <div className="mt-2 flex gap-2">
                <button className="btn border px-2" onClick={() => switchLocale('es')}>Esp</button>
                <button className="btn border px-2" onClick={() => switchLocale('en')}>Eng</button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div className="hidden md:flex fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
        <nav className="flex items-center gap-2 rounded-full border border-black/10 bg-[var(--surface)] px-3 py-2 shadow-lg">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} title={l.title} />
          ))}
          <div className="ml-2 flex gap-2">
            <button className="btn border px-2" onClick={() => switchLocale('es')}>Esp</button>
            <button className="btn border px-2" onClick={() => switchLocale('en')}>Eng</button>
          </div>
        </nav>
      </div>
    </>
  );
}
