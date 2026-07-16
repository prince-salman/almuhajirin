"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const alumni = [
  { nama: "Dr. H. Fathurrahman, M.A.", angkatan: "1995", profesi: "Dosen IAIN Jakarta & Pengurus MUI Pusat", inisial: "F" },
  { nama: "Ir. Ahmad Zainuddin, M.T.", angkatan: "1999", profesi: "Kepala Dinas Pekerjaan Umum DKI Jakarta", inisial: "A" },
  { nama: "Hj. Nurul Fatimah, S.Pd.I.", angkatan: "2002", profesi: "Kepala Sekolah SDIT Terpadu di Bekasi", inisial: "N" },
  { nama: "Ustadz Muhammad Rizky", angkatan: "2005", profesi: "Da'i Nasional & Penulis Buku Islam Populer", inisial: "M" },
  { nama: "dr. Salimah Hakim, Sp.A.", angkatan: "2008", profesi: "Dokter Spesialis Anak di RSUD Koja Jakarta", inisial: "S" },
  { nama: "Rifki Anwar, S.Kom.", angkatan: "2012", profesi: "Software Engineer di Perusahaan Startup Fintech", inisial: "R" },
];

const testimonials = [
  { nama: "Ahmad Fauzan", angkatan: "2018", kutipan: "Al-Muhajirin bukan sekadar sekolah, tapi rumah kedua yang membentuk karakter dan kepribadian saya. Ilmu yang saya dapat di sini menjadi modal terkuat dalam menjalani kehidupan." },
  { nama: "Siti Rahmawati", angkatan: "2020", kutipan: "Saya bangga menjadi alumni Al-Muhajirin. Pesantren ini mengajarkan saya kemandirian, disiplin, dan keberanian. Tiga nilai yang kini selalu saya pegang teguh." },
  { nama: "Hasan Basri", angkatan: "2015", kutipan: "Para guru dan ustadz di sini bukan hanya mengajar ilmu, tapi mendidik akhlak. Saya bersyukur pernah belajar di lingkungan yang penuh dengan keberkahan ini." },
];

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Jaringan Alumni</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Alumni Al-Muhajirin</h1>
          <p className="text-green-100 mt-4 max-w-xl mx-auto">Ribuan alumni kami tersebar di berbagai bidang dan profesi, membawa manfaat bagi masyarakat luas.</p>
        </motion.div>
      </section>

      <section className="bg-green-700 py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-8">
          {[
            { end: 17000, label: "Total Alumni", suffix: "+" },
            { end: 85, label: "Berkarir Aktif", suffix: "%" },
            { end: 72, label: "Lanjut ke PTN/PTKIN", suffix: "%" },
          ].map((s, i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-5">
              <AnimatedCounter end={s.end} label={s.label} suffix={s.suffix} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Tokoh Alumni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Alumni Terkemuka</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {alumni.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all p-6 text-center"
              >
                <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {a.inisial}
                </div>
                <h3 className="font-bold text-slate-800">{a.nama}</h3>
                <div className="text-green-600 text-sm font-medium mb-2">Angkatan {a.angkatan}</div>
                <p className="text-slate-500 text-sm">{a.profesi}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Kata Alumni</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-green-100 relative"
              >
                <div className="text-5xl text-green-200 absolute top-4 right-6 font-serif">"</div>
                <p className="text-slate-600 italic leading-relaxed mb-6">{t.kutipan}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.nama[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t.nama}</div>
                    <div className="text-green-600 text-xs">Alumni {t.angkatan}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Users size={48} className="mx-auto mb-6 text-green-300" />
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan Komunitas Alumni</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">Terhubung kembali dengan sesama alumni, berbagi pengalaman, dan berkontribusi untuk kemajuan almamater.</p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg"
          >
            Hubungi Panitia Alumni
          </a>
        </motion.div>
      </section>
    </div>
  );
}
