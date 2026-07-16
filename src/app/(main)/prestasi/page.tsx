"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const categories = ["Semua", "Akademik", "Olahraga", "Seni", "Agama"];

const prestasi = [
  { id: 1, lomba: "Kompetisi Sains Madrasah (KSM)", juara: "Juara 1", tingkat: "Provinsi", tahun: "2025", siswa: "Muhammad Rifki Hakim", kategori: "Akademik" },
  { id: 2, lomba: "Tilawah Al-Quran Remaja", juara: "Juara 2", tingkat: "Kota Jakarta Utara", tahun: "2025", siswa: "Siti Aisyah Rahma", kategori: "Agama" },
  { id: 3, lomba: "Futsal Antar Madrasah", juara: "Juara 1", tingkat: "Kota Jakarta Utara", tahun: "2025", siswa: "Tim Futsal MA", kategori: "Olahraga" },
  { id: 4, lomba: "Debat Bahasa Arab", juara: "Juara 1", tingkat: "Kota Jakarta Utara", tahun: "2025", siswa: "Tim Debat MTs", kategori: "Akademik" },
  { id: 5, lomba: "Kaligrafi Hiasan Mushaf", juara: "Juara 3", tingkat: "Nasional", tahun: "2024", siswa: "Nadia Khoirun Nisa", kategori: "Seni" },
  { id: 6, lomba: "Hafalan Quran 30 Juz", juara: "Peserta Terbaik", tingkat: "Nasional", tahun: "2024", siswa: "Ahmad Fauzan", kategori: "Agama" },
  { id: 7, lomba: "Olimpiade Matematika", juara: "Juara 2", tingkat: "Provinsi", tahun: "2024", siswa: "Rizky Ramadhan", kategori: "Akademik" },
  { id: 8, lomba: "Bola Voli Pelajar Putri", juara: "Juara 2", tingkat: "Kota Jakarta Utara", tahun: "2024", siswa: "Tim Voli Putri MTs", kategori: "Olahraga" },
  { id: 9, lomba: "Karya Tulis Ilmiah Remaja", juara: "Juara 1", tingkat: "Provinsi", tahun: "2024", siswa: "Dinda Aulia Fitri", kategori: "Akademik" },
  { id: 10, lomba: "Festival Marawis Islami", juara: "Juara 1", tingkat: "Kota Jakarta Utara", tahun: "2023", siswa: "Grup Marawis Al-Muhajirin", kategori: "Seni" },
  { id: 11, lomba: "Lari 100m Pelajar", juara: "Juara 3", tingkat: "Provinsi", tahun: "2023", siswa: "Fahmi Aldiansyah", kategori: "Olahraga" },
  { id: 12, lomba: "Ceramah Agama Islam Remaja", juara: "Juara 2", tingkat: "Kota Jakarta Utara", tahun: "2023", siswa: "Salman Al-Farisi", kategori: "Agama" },
];

const tingkatColor: Record<string, string> = {
  Nasional: "bg-green-700 text-white",
  Provinsi: "bg-green-600 text-white",
  "Kota Jakarta Utara": "bg-green-100 text-green-800",
};

export default function PrestasiPage() {
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? prestasi : prestasi.filter((p) => p.kategori === active);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Kebanggaan Kami</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Prestasi Siswa</h1>
          <p className="text-green-100 mt-4 max-w-xl mx-auto">Rekam jejak prestasi gemilang yang diraih siswa-siswi Al-Muhajirin di berbagai bidang.</p>
        </motion.div>
      </section>

      <section className="bg-green-700 py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { end: 127, label: "Total Prestasi", suffix: "+" },
            { end: 23, label: "Tingkat Nasional", suffix: "" },
            { end: 45, label: "Tingkat Provinsi", suffix: "" },
            { end: 59, label: "Tingkat Kota", suffix: "" },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-5">
              <AnimatedCounter end={s.end} label={s.label} suffix={s.suffix} />
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                active === cat ? "bg-green-700 text-white shadow-md" : "bg-green-50 text-green-700 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Trophy size={24} className="text-green-700" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${tingkatColor[p.tingkat] || "bg-slate-100 text-slate-600"}`}>
                    {p.tingkat}
                  </span>
                  <span className="text-xs text-slate-400">{p.tahun}</span>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{p.lomba}</h3>
              <div className="text-green-600 font-semibold text-sm mb-2">{p.juara}</div>
              <div className="text-slate-500 text-xs">{p.siswa}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
