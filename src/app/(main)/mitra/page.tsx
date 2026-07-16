"use client";

import { motion } from "framer-motion";
import { Handshake, Building2, GraduationCap, Globe } from "lucide-react";

export default function MitraPage() {
  const mitraList = [
    { name: "Kementerian Agama RI", type: "Instansi Pemerintah", icon: <Building2 size={24} /> },
    { name: "Universitas Islam Negeri (UIN) Jakarta", type: "Perguruan Tinggi", icon: <GraduationCap size={24} /> },
    { name: "Lembaga Amil Zakat Nasional", type: "Lembaga Sosial", icon: <Handshake size={24} /> },
    { name: "Pusat Studi Bahasa Arab (LIPIA)", type: "Lembaga Bahasa", icon: <Globe size={24} /> },
    { name: "Ikatan Alumni Al-Muhajirin", type: "Organisasi", icon: <Handshake size={24} /> },
    { name: "Klinik & Puskesmas Setempat", type: "Kesehatan", icon: <Building2 size={24} /> }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Mitra & Kerjasama</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Kami menjalin sinergi dengan berbagai instansi dan lembaga untuk meningkatkan mutu pendidikan dan memperluas jaringan kebermanfaatan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mitraList.map((mitra, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                {mitra.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 leading-tight">{mitra.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{mitra.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-green-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Handshake size={200} className="transform translate-x-1/4 -translate-y-1/4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Peluang Kerjasama</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto relative z-10">
            Kami membuka pintu kerjasama di bidang pendidikan, sosial, keagamaan, dan pengembangan sarana prasarana. Mari bersinergi membangun generasi unggul.
          </p>
          <a
            href="mailto:info@almuhajirin.sch.id"
            className="inline-block bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors relative z-10"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
