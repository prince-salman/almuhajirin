"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, BookOpen } from "lucide-react";

const categories = ["Semua", "Pengumuman", "Kegiatan", "Prestasi"];

const beritaData = [
  { id: 1, kategori: "Pengumuman", judul: "Jadwal Ujian Akhir Semester Genap Tahun Ajaran 2024/2025", tanggal: "10 Juli 2025", excerpt: "Seluruh siswa MA, MTs, dan santri Ponpes Al-Muhajirin diwajibkan hadir tepat waktu sesuai jadwal ujian yang telah ditetapkan." },
  { id: 2, kategori: "Kegiatan", judul: "PORSENI 2025: Ajang Bakat dan Sportivitas Santri Al-Muhajirin", tanggal: "5 Juli 2025", excerpt: "Pekan Olahraga dan Seni tahunan kembali digelar dengan berbagai cabang lomba menarik yang diikuti ratusan peserta dari ketiga lembaga." },
  { id: 3, kategori: "Prestasi", judul: "Siswa MA Al-Muhajirin Raih Juara 1 KSM Tingkat Provinsi DKI Jakarta", tanggal: "28 Juni 2025", excerpt: "Muhammad Rifki Hakim, siswa kelas XI MA, berhasil menyabet medali emas Kompetisi Sains Madrasah bidang Matematika tingkat Provinsi DKI." },
  { id: 4, kategori: "Pengumuman", judul: "Informasi Libur Idul Adha dan Jadwal Pemotongan Hewan Qurban", tanggal: "20 Juni 2025", excerpt: "Sekolah diliburkan selama 3 hari pada perayaan Idul Adha 1446 H. Kegiatan pemotongan hewan qurban akan dilaksanakan di lingkungan ponpes." },
  { id: 5, kategori: "Kegiatan", judul: "Wisuda Hafidz Al-Quran: 42 Santri Selesaikan Hafalan 30 Juz", tanggal: "15 Juni 2025", excerpt: "Yayasan Al-Muhajirin menggelar wisuda tahfidz dengan penuh khidmat. Sebanyak 42 santri resmi diwisuda setelah menyelesaikan hafalan 30 juz." },
  { id: 6, kategori: "Prestasi", judul: "Tim Debat Bahasa Arab MTs Juarai Kompetisi Tingkat Kota Jakarta Utara", tanggal: "8 Juni 2025", excerpt: "Tim debat bahasa Arab MTs Al-Muhajirin tampil memukau dan keluar sebagai juara pertama dalam kompetisi bergengsi antar madrasah se-Jakarta Utara." },
  { id: 7, kategori: "Kegiatan", judul: "Workshop Literasi Digital untuk Santri: Bijak Bermedsos", tanggal: "1 Juni 2025", excerpt: "Pesantren menyelenggarakan workshop literasi digital menghadirkan narasumber dari Kominfo untuk membekali santri penggunaan media sosial yang aman." },
  { id: 8, kategori: "Pengumuman", judul: "PPDB 2025/2026 Gelombang 2 Resmi Dibuka: Kuota Terbatas", tanggal: "25 Mei 2025", excerpt: "Pendaftaran Peserta Didik Baru Gelombang 2 untuk tahun ajaran 2025/2026 resmi dibuka. Segera daftarkan putra-putri Anda sebelum kuota habis." },
  { id: 9, kategori: "Kegiatan", judul: "Ziarah dan Studi Tour Kelas XII MA ke Pesantren Tebuireng Jombang", tanggal: "18 Mei 2025", excerpt: "Siswa kelas XII MA melaksanakan kegiatan ziarah dan studi tour ke Pesantren Tebuireng dan beberapa pesantren besar di Jombang, Jawa Timur." },
];

export default function BeritaPage() {
  const [active, setActive] = useState("Semua");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = active === "Semua" ? beritaData : beritaData.filter((b) => b.kategori === active);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-green-800 text-white py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Informasi Terkini</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Berita & Pengumuman</h1>
          <p className="text-green-100 mt-4 max-w-xl mx-auto">Ikuti terus informasi dan kabar terbaru dari Yayasan Al-Muhajirin.</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setPage(1); }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                active === cat ? "bg-green-700 text-white shadow-md" : "bg-green-50 text-green-700 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <BookOpen size={40} className="text-green-400" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className={`text-xs px-3 py-1 rounded-full font-semibold self-start mb-3 ${
                  b.kategori === "Pengumuman" ? "bg-yellow-100 text-yellow-700" :
                  b.kategori === "Prestasi" ? "bg-green-100 text-green-700" :
                  "bg-slate-100 text-slate-600"
                }`}>{b.kategori}</span>
                <h2 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">{b.judul}</h2>
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <Calendar size={12} />
                  {b.tanggal}
                </div>
                <p className="text-slate-500 text-sm line-clamp-3 flex-1">{b.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Baca Selengkapnya <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium disabled:opacity-40 hover:bg-green-200 transition-colors"
            >
              Sebelumnya
            </button>
            <span className="px-5 py-2 rounded-full bg-green-700 text-white font-medium">{page} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium disabled:opacity-40 hover:bg-green-200 transition-colors"
            >
              Berikutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
