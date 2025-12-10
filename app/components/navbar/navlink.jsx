"use client";
import Link from "next/link";

export default function NavLink({ href, title, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-sm font-medium"
    >
      {title}
    </Link>
  );
}
