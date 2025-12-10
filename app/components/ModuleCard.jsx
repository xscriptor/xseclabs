"use client";
import Link from "next/link";

export default function ModuleCard({ href, title, description }) {
  return (
    <Link href={href} className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}
