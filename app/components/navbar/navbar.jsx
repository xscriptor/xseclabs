"use client";
import { useState, useEffect } from "react";
import NavLink from "./navlink";
import LoginIcon from "./icons/LoginIcon";
import PanelIcon from "./icons/PanelIcon";
import LogbookIcon from "./icons/LogbookIcon";
import LabsIcon from "./icons/LabsIcon";
import ToolsIcon from "./icons/ToolsIcon";
import NotesIcon from "./icons/NotesIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import SettingsIcon from "./icons/SettingsIcon";
import HomeIcon from "./icons/HomeIcon";
import { useRouter, usePathname } from "next/navigation";

const linksEs = [
  { href: "/", title: "Login" },
  { href: "/panel", title: "Panel" },
  { href: "/bitacora", title: "Bitácora" },
  { href: "/laboratorios", title: "Laboratorios" },
  { href: "/herramientas", title: "Herramientas" },
  { href: "/apuntes", title: "Apuntes" },
  { href: "/proyectos", title: "Proyectos" },
  { href: "/ajustes", title: "Ajustes" },
];

const linksEn = [
  { href: "/en", title: "Login" },
  { href: "/en/dashboard", title: "Dashboard" },
  { href: "/en/logbook", title: "Logbook" },
  { href: "/en/labs", title: "Labs" },
  { href: "/en/tools", title: "Tools" },
  { href: "/en/notes", title: "Notes" },
  { href: "/en/projects", title: "Projects" },
  { href: "/en/settings", title: "Settings" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const router = useRouter();
  const pathname = usePathname();
  const inEnglish = pathname?.startsWith("/en");
  const links = inEnglish ? linksEn : linksEs;

  const switchLocale = (locale) => {
    const current = pathname || "/";
    const esToEn = {
      "": "",
      panel: "dashboard",
      bitacora: "logbook",
      laboratorios: "labs",
      herramientas: "tools",
      apuntes: "notes",
      proyectos: "projects",
      ajustes: "settings",
      sesion: "auth",
      actividad: "activity",
      versiones: "versions",
    };
    const enToEs = {
      "": "",
      dashboard: "panel",
      logbook: "bitacora",
      labs: "laboratorios",
      tools: "herramientas",
      notes: "apuntes",
      projects: "proyectos",
      settings: "ajustes",
      auth: "sesion",
      activity: "actividad",
      versions: "versiones",
    };
    if (locale === "en") {
      if (current === "/") {
        router.replace("/en");
      } else if (current.startsWith("/en")) {
        router.replace(current);
      } else {
        const parts = current.split("/").filter(Boolean);
        const first = parts[0] || "";
        const mapped = esToEn[first] ?? first;
        const rest = parts.slice(1).join("/");
        const target = `/en${mapped ? `/${mapped}` : ""}${rest ? `/${rest}` : ""}`;
        router.replace(target);
      }
    } else {
      if (current === "/en" || current === "/en/") {
        router.replace("/");
      } else if (current.startsWith("/en")) {
        const parts = current.replace(/^\/en\/?/, "").split("/").filter(Boolean);
        const first = parts[0] || "";
        const mapped = enToEs[first] ?? first;
        const rest = parts.slice(1).join("/");
        const target = `/${mapped}${rest ? `/${rest}` : ""}` || "/";
        router.replace(target);
      } else {
        router.replace(current || "/");
      }
    }
    setOpen(false);
  };

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "dark" ? "dark" : stored === "light" ? "light" : prefersDark ? "dark" : "light";
    setTheme(initial);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--surface)] border-b border-black/10 backdrop-blur">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
          <div className="text-sm font-semibold">xSecLabs</div>
          <div className="flex items-center gap-2">
            <button aria-label="Menu" className="rounded-md border px-3 py-1" onClick={() => setOpen((v) => !v)}>
              {inEnglish ? "Language" : "Idioma"}
            </button>
            <button aria-label={inEnglish ? "Theme" : "Tema"} className="p-2" onClick={toggleTheme}>
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {open && (
          <div className="px-4 pb-4">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.href.endsWith("/panel") || l.href === "/panel" || l.href.endsWith("/dashboard") ? (
                    <PanelIcon />
                  ) : l.href.endsWith("/bitacora") || l.href.endsWith("/logbook") ? (
                    <LogbookIcon />
                  ) : l.href.endsWith("/laboratorios") || l.href.endsWith("/labs") ? (
                    <LabsIcon />
                  ) : l.href.endsWith("/herramientas") || l.href.endsWith("/tools") ? (
                    <ToolsIcon />
                  ) : l.href.endsWith("/apuntes") || l.href.endsWith("/notes") ? (
                    <NotesIcon />
                  ) : l.href.endsWith("/proyectos") || l.href.endsWith("/projects") ? (
                    <ProjectsIcon />
                  ) : l.href.endsWith("/ajustes") || l.href.endsWith("/settings") ? (
                    <SettingsIcon />
                  ) : (
                    <HomeIcon />
                  )}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-2">
                <button className="p-2 text-sm" onClick={() => switchLocale(inEnglish ? "es" : "en")}>
                  {inEnglish ? "Esp" : "Eng"}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <div className="hidden md:flex fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
        <nav className="flex items-center gap-2 rounded-full border border-black/10 bg-[var(--surface)] px-3 py-2 shadow-lg">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.href.endsWith("/panel") || l.href === "/panel" || l.href.endsWith("/dashboard") ? (
                <PanelIcon />
              ) : l.href.endsWith("/bitacora") || l.href.endsWith("/logbook") ? (
                <LogbookIcon />
              ) : l.href.endsWith("/laboratorios") || l.href.endsWith("/labs") ? (
                <LabsIcon />
              ) : l.href.endsWith("/herramientas") || l.href.endsWith("/tools") ? (
                <ToolsIcon />
              ) : l.href.endsWith("/apuntes") || l.href.endsWith("/notes") ? (
                <NotesIcon />
              ) : l.href.endsWith("/proyectos") || l.href.endsWith("/projects") ? (
                <ProjectsIcon />
              ) : l.href.endsWith("/ajustes") || l.href.endsWith("/settings") ? (
                <SettingsIcon />
              ) : (
                <HomeIcon />
              )}
            </NavLink>
          ))}
          <div className="ml-2 flex gap-2">
            <button className="p-2" onClick={toggleTheme} aria-label={inEnglish ? "Theme" : "Tema"}>
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button className="p-2 text-sm" onClick={() => switchLocale(inEnglish ? "es" : "en")}>
              {inEnglish ? "Esp" : "Eng"}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
