"use client";

import { motion } from "framer-motion";
import { Store, ShoppingBag, Coffee, Book } from "lucide-react";

export default function KoperasiPage() {
  const units = [
    { title: "Kopontren (Koperasi Pondok Pesantren)", icon: <Store size={32} />, desc: "Menyediakan kebutuhan sehari-hari santri, mulai dari sabun, pasta gigi, hingga perlengkapan asrama lainnya dengan harga terjangkau." },
    { title: "Toko Kitab & Alat Tulis", icon: <Book size={32} />, desc: "Menyediakan berbagai macam kitab kuning, Al-Quran, buku pelajaran, dan perlengkapan alat tulis sekolah." },
    { title: "Seragam & Atribut", icon: <ShoppingBag size={32} />, desc: "Pusat penyediaan seragam sekolah (MA & MTs), seragam pesantren, jas almamater, dan atribut pelengkap lainnya." },
    { title: "Kantin Sehat", icon: <Coffee size={32} />, desc: "Kantin yang dikelola dengan standar kebersihan tinggi, menyediakan makanan dan minuman halal nan bergizi bagi siswa/santri." }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Unit Usaha & Koperasi</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Yayasan Al-Muhajirin berupaya mandiri secara ekonomi dan memenuhi kebutuhan warga sekolah melalui berbagai unit usaha yang dikelola secara profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex gap-6"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                {unit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{unit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{unit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
