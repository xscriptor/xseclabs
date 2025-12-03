"use client";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description: string;
};

export default function ModuleCard({ href, title, description }: Props) {
  return (
    <Link href={href} className="block rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}

