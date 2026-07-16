"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, FileText, Award, Settings, LogOut, Menu, X, Database } from "lucide-react";
import { useState } from "react";

export default function AdminSidebar({ role, name }: { role: string; name: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={20} />, roles: ["superadmin", "admin_ma", "admin_mts", "admin_ponpes"] },
    { name: "Manajemen PPDB", href: "/admin/ppdb", icon: <Database size={20} />, roles: ["superadmin", "admin_ma", "admin_mts", "admin_ponpes"] },
    { name: "Data Guru", href: "/admin/guru", icon: <Users size={20} />, roles: ["superadmin", "admin_ma", "admin_mts", "admin_ponpes"] },
    { name: "Berita & Info", href: "/admin/berita", icon: <FileText size={20} />, roles: ["superadmin", "admin_ma", "admin_mts", "admin_ponpes"] },
    { name: "Prestasi", href: "/admin/prestasi", icon: <Award size={20} />, roles: ["superadmin", "admin_ma", "admin_mts", "admin_ponpes"] },
    { name: "Pengaturan Web", href: "/admin/pengaturan", icon: <Settings size={20} />, roles: ["superadmin"] },
  ];

  const filteredMenu = menuItems.filter((item) => item.roles.includes(role));

  const roleLabels: Record<string, string> = {
    superadmin: "Admin Pusat",
    admin_ma: "Admin MA",
    admin_mts: "Admin MTs",
    admin_ponpes: "Admin Ponpes"
  };

  return (
    <>
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-green-700 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-40 transform transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-bold text-xl text-slate-800 dark:text-white">Panel Admin</h2>
          <div className="mt-2 text-sm text-slate-500 flex flex-col">
            <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
            <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs w-fit">{roleLabels[role] || role}</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {filteredMenu.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800 hover:text-green-600 dark:hover:text-green-400"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 rounded-lg text-sm font-bold transition-colors"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
      
      {/* Overlay mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
