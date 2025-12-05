"use client";
import Link from "next/link";
// Traducción manual: utilizaremos labels por props sin provider

type Props = {
  href: string;
  title: string;
  onClick?: () => void;
};

export default function NavLink({ href, title, onClick }: Props) {
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
