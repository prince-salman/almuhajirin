"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, GraduationCap, Library } from "lucide-react";

export default function KurikulumPage() {
  const kurikulumData = [
    {
      title: "Kurikulum Nasional (Kemenag & Kemdikbud)",
      icon: <GraduationCap size={32} className="text-green-600" />,
      items: ["Matematika", "Bahasa Indonesia", "Bahasa Inggris", "Ilmu Pengetahuan Alam", "Ilmu Pengetahuan Sosial", "Pendidikan Kewarganegaraan"]
    },
    {
      title: "Kurikulum Pesantren (Kepesantrenan)",
      icon: <BookOpen size={32} className="text-green-600" />,
      items: ["Al-Quran Hadits", "Akidah Akhlak", "Fiqih", "Sejarah Kebudayaan Islam", "Bahasa Arab", "Tahfidzul Quran"]
    },
    {
      title: "Program Ekstrakurikuler & Unggulan",
      icon: <Library size={32} className="text-green-600" />,
      items: ["Pramuka & PMR", "Kajian Kitab Kuning", "Muhadatsah (Percakapan Arab/Inggris)", "Seni Hadroh & Kaligrafi", "Latihan Pidato (Muhadharah)"]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Struktur Kurikulum</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Yayasan Al-Muhajirin memadukan kurikulum pendidikan nasional dengan kurikulum kepesantrenan untuk mencetak generasi yang unggul dalam IPTEK dan kokoh dalam IMTAQ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {kurikulumData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 min-h-[56px]">{section.title}</h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
