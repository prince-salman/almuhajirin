"use client";

import { motion } from "framer-motion";
import { Heart, Building, BookOpen, Utensils, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function DonasiPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const programs = [
    { id: "bangunan", title: "Pembangunan Asrama", icon: <Building size={32} />, desc: "Bantu kami menyelesaikan pembangunan asrama putra yang baru untuk menampung lebih banyak santri.", target: "Rp 500.000.000", terkumpul: "Rp 120.500.000", rek: "BSI 7123456789 a.n. Yayasan Al-Muhajirin (Pembangunan)" },
    { id: "beasiswa", title: "Beasiswa Yatim", icon: <BookOpen size={32} />, desc: "Dukungan pendidikan untuk anak-anak yatim dan dhuafa agar dapat terus bersekolah dan mondok.", target: "Rp 100.000.000", terkumpul: "Rp 45.000.000", rek: "BSI 7123456790 a.n. Yayasan Al-Muhajirin (Yatim)" },
    { id: "pangan", title: "Sedekah Pangan Santri", icon: <Utensils size={32} />, desc: "Bantuan operasional dapur umum pesantren untuk mensuplai makanan bergizi bagi para santri penghafal Quran.", target: "Rp 50.000.000", terkumpul: "Rp 21.000.000", rek: "BSI 7123456791 a.n. Yayasan Al-Muhajirin (Pangan)" }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-full mb-6">
            <Heart size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Donasi & Wakaf</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            "Perumpamaan orang-orang yang menafkahkan hartanya di jalan Allah adalah serupa dengan sebutir benih yang menumbuhkan tujuh bulir, pada tiap-tiap bulir seratus biji." (QS. Al-Baqarah: 261)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="text-green-600 mb-6">{prog.icon}</div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{prog.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{prog.desc}</p>
                
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-slate-500">Terkumpul</span>
                  <span className="text-green-600">{prog.terkumpul}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
                <div className="text-right text-xs text-slate-400">Target: {prog.target}</div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 border-t border-green-100 dark:border-green-900/50">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-semibold uppercase tracking-wider">Rekening Donasi</p>
                <div className="font-mono text-sm text-slate-800 dark:text-slate-200 mb-3">{prog.rek}</div>
                <button
                  onClick={() => copyToClipboard(prog.rek.split(" ")[1], prog.id)}
                  className="w-full py-2 bg-white dark:bg-slate-800 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm font-bold flex items-center justify-center gap-2 hover:bg-green-100 transition-colors"
                >
                  {copied === prog.id ? <><Check size={16} /> Disalin!</> : <><Copy size={16} /> Salin No. Rekening</>}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
