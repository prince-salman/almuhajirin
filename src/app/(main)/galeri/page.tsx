"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, X } from "lucide-react";

const categories = ["Semua", "Kegiatan", "Fasilitas", "Prestasi"];

const photos = [
  { id: 1, title: "PORSENI 2025", category: "Kegiatan" },
  { id: 2, title: "Laboratorium IPA", category: "Fasilitas" },
  { id: 3, title: "Juara Olimpiade Matematika", category: "Prestasi" },
  { id: 4, title: "Kajian Kitab Kuning", category: "Kegiatan" },
  { id: 5, title: "Masjid Yayasan", category: "Fasilitas" },
  { id: 6, title: "Juara Tilawah Tingkat Kota", category: "Prestasi" },
  { id: 7, title: "Upacara Hari Santri", category: "Kegiatan" },
  { id: 8, title: "Perpustakaan Digital", category: "Fasilitas" },
  { id: 9, title: "Wisuda Hafidz 2025", category: "Prestasi" },
  { id: 10, title: "Outbound Siswa MA", category: "Kegiatan" },
  { id: 11, title: "Lapangan Olahraga", category: "Fasilitas" },
  { id: 12, title: "Juara Debat Bahasa Arab", category: "Prestasi" },
];

export default function GaleriPage() {
  const [active, setActive] = useState("Semua");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = active === "Semua" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Dokumentasi</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Galeri Foto</h1>
          <p className="text-green-100 mt-4 max-w-xl mx-auto">Momen berharga dari berbagai kegiatan, fasilitas, dan prestasi Al-Muhajirin.</p>
        </motion.div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
              onClick={() => setSelected(photo.id)}
            >
              <div className="h-48 bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <ImageIcon size={40} className="text-green-400" />
              </div>
              <div className="p-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">{photo.category}</span>
                <h3 className="font-semibold text-slate-800 mt-2 text-sm">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-80 bg-green-100 flex items-center justify-center">
              <ImageIcon size={80} className="text-green-300" />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800">{photos.find((p) => p.id === selected)?.title}</h3>
                <span className="text-sm text-green-600">{photos.find((p) => p.id === selected)?.category}</span>
              </div>
              <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-slate-800 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
