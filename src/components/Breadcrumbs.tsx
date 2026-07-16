"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path);
  
  return (
    <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 flex items-center transition-colors">
            <Home size={14} className="mr-1" /> Beranda
          </Link>
          
          {paths.map((path, index) => {
            const href = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;
            const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

            return (
              <div key={href} className="flex items-center">
                <ChevronRight size={14} className="mx-2 text-slate-300 dark:text-slate-600 flex-shrink-0" />
                {isLast ? (
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{label}</span>
                ) : (
                  <Link href={href} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    {label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
