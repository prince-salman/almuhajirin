"use client";

import { CalendarDays, Download, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function KalenderAkademik() {
  const events = [
    { bulan: "Juli 2025", kegiatan: ["Awal Tahun Pelajaran 2025/2026", "Masa Ta'aruf Siswa Madrasah (Matsama)"] },
    { bulan: "Agustus 2025", kegiatan: ["Peringatan HUT RI ke-80", "Lomba Antar Kelas (Classmeet)"] },
    { bulan: "September 2025", kegiatan: ["Penilaian Tengah Semester (PTS) Ganjil", "Peringatan Maulid Nabi Muhammad SAW"] },
    { bulan: "Oktober 2025", kegiatan: ["Hari Santri Nasional", "Pekan Olahraga dan Seni (Porseni)"] },
    { bulan: "November 2025", kegiatan: ["Hari Pahlawan", "Penilaian Akhir Semester (PAS) Ganjil"] },
    { bulan: "Desember 2025", kegiatan: ["Pembagian Rapor Semester Ganjil", "Libur Semester Ganjil"] }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Kalender Akademik</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Tahun Pelajaran 2025/2026 (Semester Ganjil)</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-xl p-4 mb-8 flex gap-3 text-blue-800 dark:text-blue-300">
          <Info className="flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm">Jadwal dapat berubah sewaktu-waktu menyesuaikan dengan edaran dari Kementerian Agama Republik Indonesia.</p>
        </div>

        <div className="space-y-6">
          {events.map((item, i) => (
            <motion.div
              key={item.bulan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              <div className="md:w-48 flex-shrink-0 flex items-center gap-2 text-green-700 dark:text-green-500 font-bold text-lg">
                <CalendarDays size={20} />
                {item.bulan}
              </div>
              <ul className="flex-1 space-y-2">
                {item.kegiatan.map((k, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-slate-300 font-medium">
            <Download size={18} /> Unduh Format PDF
          </button>
        </div>
      </div>
    </div>
  );
}
