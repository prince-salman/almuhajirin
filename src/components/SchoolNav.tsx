"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface SchoolNavProps {
  color: string;
  schoolName: string;
  basePath: string;
  sections: { label: string; href: string }[];
}

export default function SchoolNav({ color, schoolName, basePath, sections }: SchoolNavProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`${color} text-white sticky top-0 z-50 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href={basePath} className="font-bold text-lg tracking-tight truncate">
            {schoolName}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="text-sm font-medium opacity-90 hover:opacity-100 hover:underline transition-opacity">
                {s.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20 px-4 pb-4 pt-2 flex flex-col gap-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="text-sm font-medium opacity-90" onClick={() => setOpen(false)}>
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
