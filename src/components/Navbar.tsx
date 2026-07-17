"use client";

import Link from "next/link";
import { BookOpen, Menu, X, ChevronDown, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";

const lembagaLinks = [
  { name: "Madrasah Aliyah", href: "/ma" },
  { name: "Madrasah Tsanawiyah", href: "/mts" },
  { name: "Pondok Pesantren", href: "/ponpes" },
];

const infoLinks = [
  { name: "Berita & Pengumuman", href: "/berita" },
  { name: "Galeri Foto", href: "/galeri" },
  { name: "Galeri Video", href: "/galeri-video" },
  { name: "Prestasi", href: "/prestasi" },
  { name: "Alumni", href: "/alumni" },
  { name: "FAQ", href: "/faq" },
];

const layananLinks = [
  { name: "Kurikulum", href: "/kurikulum" },
  { name: "Kalender Akademik", href: "/kalender-akademik" },
  { name: "Download Area", href: "/download" },
  { name: "Unit Usaha / Koperasi", href: "/koperasi" },
  { name: "Donasi & Wakaf", href: "/donasi" },
  { name: "Mitra Kerjasama", href: "/mitra" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lembagaOpen, setLembagaOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const lembagaRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const layananRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (lembagaRef.current && !lembagaRef.current.contains(e.target as Node)) setLembagaOpen(false);
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) setInfoOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="text-green-600 w-7 h-7" />
            <Link href="/" className="font-bold text-lg text-slate-800 tracking-tight">
              Al-Muhajirin
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/") && pathname === "/" ? "text-green-700 bg-green-50" : "text-slate-600 hover:text-green-600 hover:bg-slate-50"}`}
            >
              Beranda
            </Link>

            <div ref={lembagaRef} className="relative">
              <button
                onClick={() => { setLembagaOpen(!lembagaOpen); setInfoOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-slate-50 transition-colors"
              >
                Lembaga <ChevronDown size={14} className={`transition-transform ${lembagaOpen ? "rotate-180" : ""}`} />
              </button>
              {lembagaOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {lembagaLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setLembagaOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${isActive(l.href) ? "text-green-700 bg-green-50" : "text-slate-700 hover:text-green-600 hover:bg-slate-50"}`}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div ref={infoRef} className="relative">
              <button
                onClick={() => { setInfoOpen(!infoOpen); setLembagaOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-slate-50 transition-colors"
              >
                Informasi <ChevronDown size={14} className={`transition-transform ${infoOpen ? "rotate-180" : ""}`} />
              </button>
              {infoOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {infoLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setInfoOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${isActive(l.href) ? "text-green-700 bg-green-50" : "text-slate-700 hover:text-green-600 hover:bg-slate-50"}`}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            
            <div ref={layananRef} className="relative">
              <button
                onClick={() => { setLayananOpen(!layananOpen); setLembagaOpen(false); setInfoOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-slate-50 transition-colors"
              >
                Akademik & Layanan <ChevronDown size={14} className={`transition-transform ${layananOpen ? "rotate-180" : ""}`} />
              </button>
              {layananOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {layananLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setLayananOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${isActive(l.href) ? "text-green-700 bg-green-50" : "text-slate-700 hover:text-green-600 hover:bg-slate-50"}`}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/ppdb"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive("/ppdb") ? "text-green-700 bg-green-50" : "text-slate-600 hover:text-green-600 hover:bg-slate-50"}`}
            >
              PPDB
            </Link>

            <Link
              href="/register"
              className="ml-2 px-5 py-2 bg-green-700 hover:bg-green-800 text-white text-sm font-bold rounded-full transition-all shadow-sm hover:shadow-green-700/20"
            >
              Daftar Sekarang
            </Link>

            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none" aria-label="Search">
                <Search size={18} />
              </button>
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none" aria-label="Search">
              <Search size={18} />
            </button>
            <ThemeToggle />
            <button
              className="text-slate-600 dark:text-slate-300 hover:text-green-600 focus:outline-none p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-y-auto max-h-[80vh]">
          <div className="px-4 pt-3 pb-5 space-y-1">
            <Link href="/" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Beranda</Link>
            
            <div className="px-3 py-1.5 mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Lembaga</div>
            {lembagaLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block px-3 py-2.5 pl-6 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>{l.name}</Link>
            ))}

            <div className="px-3 py-1.5 mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Informasi</div>
            {infoLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block px-3 py-2.5 pl-6 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>{l.name}</Link>
            ))}

            <div className="px-3 py-1.5 mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Akademik & Layanan</div>
            {layananLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block px-3 py-2.5 pl-6 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>{l.name}</Link>
            ))}

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
              <Link href="/ppdb" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>PPDB</Link>
              <Link href="/register" className="block mt-2 px-4 py-3 bg-green-700 text-white text-sm font-bold rounded-xl text-center hover:bg-green-800 transition-colors" onClick={() => setIsOpen(false)}>Daftar Sekarang</Link>
            </div>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
