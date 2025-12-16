 "use client";
 import Link from "next/link";
 
 export default function NavLink({ href, onClick, children, ariaLabel, label }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative p-2 rounded-md transition-colors duration-150 hover:bg-[var(--surface-muted)]"
      aria-label={ariaLabel}
    >
      {children}
      <span
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-7 px-2 py-0.5 text-xs font-medium rounded bg-[var(--surface)] text-[color:var(--text)] border border-black/10 shadow opacity-0 scale-90 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 hidden md:block"
      >
        {label || ariaLabel}
      </span>
    </Link>
  );
}
