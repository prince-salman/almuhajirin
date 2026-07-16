"use client";

import { FileDown, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function DownloadPage() {
  const categories = [
    {
      title: "Formulir Pendaftaran",
      files: [
        { name: "Formulir Pendaftaran MA", size: "1.2 MB", date: "Jan 2025" },
        { name: "Formulir Pendaftaran MTs", size: "1.1 MB", date: "Jan 2025" },
        { name: "Formulir Pendaftaran Ponpes", size: "1.3 MB", date: "Jan 2025" },
      ]
    },
    {
      title: "Brosur & Panduan",
      files: [
        { name: "Brosur PPDB 2025/2026", size: "4.5 MB", date: "Feb 2025" },
        { name: "Panduan Daftar Ulang", size: "800 KB", date: "Feb 2025" },
        { name: "Buku Panduan Tata Tertib Santri", size: "2.1 MB", date: "Agu 2024" },
      ]
    },
    {
      title: "Dokumen Lainnya",
      files: [
        { name: "Kalender Akademik 2025/2026", size: "1.5 MB", date: "Jul 2025" },
        { name: "Surat Izin Orang Tua", size: "150 KB", date: "Jan 2025" },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Area Unduhan</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Unduh berbagai dokumen resmi, formulir, dan brosur Yayasan Al-Muhajirin.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <FileText className="text-green-600" size={24} /> {cat.title}
              </h2>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {cat.files.map((file, j) => (
                    <div key={j} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-slate-700 dark:text-slate-300">{file.name}</h3>
                        <div className="flex gap-4 mt-1 text-xs text-slate-500 dark:text-slate-500">
                          <span>PDF Document</span>
                          <span>•</span>
                          <span>{file.size}</span>
                          <span>•</span>
                          <span>{file.date}</span>
                        </div>
                      </div>
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-sm font-bold">
                        <FileDown size={16} /> Unduh
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
