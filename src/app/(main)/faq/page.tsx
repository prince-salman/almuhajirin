"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const allFaq = [
  { id: 1, cat: "PPDB", q: "Kapan pendaftaran dibuka?", a: "PPDB dibuka dalam 3 gelombang. Gelombang 2 saat ini sedang berlangsung hingga 31 Agustus 2025. Kunjungi halaman PPDB untuk informasi lengkap." },
  { id: 2, cat: "PPDB", q: "Apakah ada tes seleksi masuk?", a: "Ya. Terdapat tes baca tulis Al-Quran, tes kemampuan akademik (Matematika & Bahasa Indonesia), dan wawancara singkat bersama calon siswa dan orang tua." },
  { id: 3, cat: "PPDB", q: "Apakah bisa mendaftar lebih dari satu lembaga sekaligus?", a: "Tidak bisa. Calon siswa hanya dapat mendaftar ke salah satu lembaga (MA, MTs, atau Ponpes) dalam satu periode PPDB." },
  { id: 4, cat: "Biaya", q: "Berapa total biaya yang harus disiapkan?", a: "Biaya terdiri dari biaya pendaftaran (Rp 200.000-250.000), uang pangkal (Rp 3-4 juta), dan SPP bulanan (Rp 400.000-650.000) tergantung lembaga. Kunjungi halaman PPDB untuk detail." },
  { id: 5, cat: "Biaya", q: "Apakah ada program beasiswa?", a: "Ya. Tersedia 3 jenis beasiswa: Hafidz Quran (min. 5 juz), Prestasi Akademik (rata-rata rapor >90), dan Yatim/Dhuafa. Beasiswa dapat menanggung hingga 100% biaya pendidikan." },
  { id: 6, cat: "Biaya", q: "Apakah ada cicilan untuk uang pangkal?", a: "Tersedia opsi pembayaran cicilan uang pangkal yang dapat dikonsultasikan langsung dengan pihak administrasi keuangan sekolah." },
  { id: 7, cat: "Akademik", q: "Kurikulum apa yang digunakan?", a: "Kami menggunakan kurikulum Kementerian Agama RI yang dipadukan dengan kurikulum kepesantrenan. Merdeka Belajar diterapkan di MA dan MTs, sementara Ponpes menggunakan kurikulum salaf-khalaf." },
  { id: 8, cat: "Akademik", q: "Apakah ada program tahfidz Al-Quran?", a: "Ya. Program tahfidz adalah keunggulan utama kami. MA menargetkan 3 juz, MTs 2 juz, dan Ponpes menargetkan hafalan 30 juz penuh dengan bimbingan intensif." },
  { id: 9, cat: "Akademik", q: "Apakah lulusan diterima di PTN?", a: "Alhamdulillah, setiap tahun rata-rata 70% lebih lulusan MA kami diterima di berbagai PTN/PTKIN favorit seperti UI, UNPAD, IPB, UIN, dan kampus lainnya." },
  { id: 10, cat: "Asrama", q: "Apakah wajib tinggal di asrama?", a: "Untuk Pondok Pesantren, tinggal di asrama adalah wajib. Untuk MA dan MTs, terdapat pilihan reguler (tidak tinggal di asrama) atau sistem semi-pesantren (opsional)." },
  { id: 11, cat: "Asrama", q: "Bagaimana pengaturan kunjungan orang tua?", a: "Untuk santri Ponpes, kunjungan diperbolehkan setiap hari Sabtu dan Minggu pukul 08.00-17.00 WIB. Hari kerja tidak diperkenankan kecuali untuk kepentingan mendesak dengan izin pengasuh." },
  { id: 12, cat: "Asrama", q: "Apakah santri diperbolehkan membawa HP?", a: "Santri Ponpes tidak diperkenankan membawa HP pribadi demi menjaga fokus belajar. Komunikasi dilakukan melalui telepon asrama yang tersedia 24 jam." },
  { id: 13, cat: "Umum", q: "Di mana lokasi Al-Muhajirin?", a: "Yayasan Al-Muhajirin berlokasi di Jl. Teluk Gong Raya No. 1, Penjaringan, Jakarta Utara 14450. Dapat dicapai dengan kendaraan pribadi maupun angkutan umum." },
  { id: 14, cat: "Umum", q: "Bagaimana cara menghubungi pihak sekolah?", a: "Anda dapat menghubungi kami melalui telepon (021) 6619-XXX, email almuhajirin@gmail.com, atau datang langsung ke kantor sekretariat pada hari kerja pukul 08.00-15.00 WIB." },
  { id: 15, cat: "Umum", q: "Apakah ada open house atau hari informasi?", a: "Ya. Open House diselenggarakan setiap awal periode PPDB. Pantau terus website dan media sosial resmi kami untuk jadwal terbaru." },
];

const cats = ["Semua", "PPDB", "Biaya", "Akademik", "Asrama", "Umum"];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState("Semua");

  const filtered = cat === "Semua" ? allFaq : allFaq.filter((f) => f.cat === cat);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Bantuan & Info</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-green-100 mt-4 max-w-xl mx-auto">Temukan jawaban atas pertanyaan umum seputar Al-Muhajirin di bawah ini.</p>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => { setCat(c); setOpen(null); }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                cat === c ? "bg-green-700 text-white shadow-md" : "bg-green-50 text-green-700 hover:bg-green-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border border-slate-100 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-green-50 transition-colors"
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${open === faq.id ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center border border-green-100">
          <MessageCircle size={40} className="text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">Masih Ada Pertanyaan?</h3>
          <p className="text-slate-500 mb-6">Tim kami siap membantu Anda melalui berbagai saluran komunikasi yang tersedia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors"
            >
              Hubungi via WhatsApp
            </a>
            <Link href="/register" className="px-6 py-3 bg-white text-green-700 font-bold rounded-full border border-green-200 hover:bg-green-50 transition-colors">
              Formulir Pendaftaran
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
