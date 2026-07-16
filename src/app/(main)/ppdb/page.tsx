"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import ShareButtons from "@/components/ShareButtons";

function Countdown() {
  const target = new Date("2025-08-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-8">
      {[
        { label: "Hari", val: timeLeft.d },
        { label: "Jam", val: timeLeft.h },
        { label: "Menit", val: timeLeft.m },
        { label: "Detik", val: timeLeft.s },
      ].map((t) => (
        <div key={t.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center min-w-[80px]">
          <div className="text-3xl font-bold">{String(t.val).padStart(2, "0")}</div>
          <div className="text-green-200 text-xs mt-1">{t.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function PPDBPage() {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-24 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Penerimaan Siswa Baru</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">PPDB 2025/2026</h1>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white p-3 rounded-2xl shadow-xl">
              <QRCodeSVG value={pageUrl || "https://almuhajirin.sch.id/ppdb"} size={120} level="M" fgColor="#15803d" />
            </div>
          </div>
          
          <p className="text-green-100 mt-4 max-w-xl mx-auto text-lg">Pendaftaran Gelombang 2 sedang berlangsung. Segera daftarkan putra-putri Anda!</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-green-300 mb-8">
            <Clock size={16} />
            <span className="text-sm">Penutupan Gelombang 2: 31 Agustus 2025</span>
          </div>
          <Countdown />
          
          <div className="flex justify-center mt-12 bg-black/20 backdrop-blur-sm w-fit mx-auto px-6 py-3 rounded-full">
            <ShareButtons title="Info PPDB Al-Muhajirin 2025/2026" />
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Alur Pendaftaran</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />
            <div className="space-y-8">
              {[
                { n: "01", title: "Memilih Lembaga", desc: "Tentukan lembaga yang sesuai: MA (setara SMA), MTs (setara SMP), atau Pondok Pesantren." },
                { n: "02", title: "Mengisi Formulir Online", desc: "Isi formulir pendaftaran di halaman /register dengan data lengkap dan benar." },
                { n: "03", title: "Menyerahkan Berkas", desc: "Bawa berkas fisik ke sekretariat pendaftaran: foto, rapor, akta lahir, kartu keluarga." },
                { n: "04", title: "Mengikuti Seleksi", desc: "Ikuti tes masuk: tes baca tulis Al-Quran, tes akademik, dan wawancara." },
                { n: "05", title: "Registrasi Ulang", desc: "Calon siswa yang dinyatakan lolos melakukan daftar ulang dan pembayaran awal." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm z-10">
                    {step.n}
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 flex-1">
                    <h3 className="font-bold text-slate-800 mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Jadwal PPDB</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Gelombang</th>
                  <th className="px-6 py-4 text-left font-semibold">Periode</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="text-slate-500">
                  <td className="px-6 py-4 font-medium">Gelombang 1</td>
                  <td className="px-6 py-4">1 Maret - 31 Mei 2025</td>
                  <td className="px-6 py-4"><span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-sm font-medium">Sudah Tutup</span></td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-bold text-green-700">Gelombang 2</td>
                  <td className="px-6 py-4 font-medium">1 Juni - 31 Agustus 2025</td>
                  <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Sedang Berjalan</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-500">Gelombang 3</td>
                  <td className="px-6 py-4 text-slate-400">1 - 30 September 2025</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Akan Datang</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Syarat Pendaftaran</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { lembaga: "Madrasah Aliyah (MA)", syarat: ["Lulusan SMP/MTs sederajat", "Nilai rata-rata rapor min. 75", "Foto 3x4 sebanyak 4 lembar", "Fotokopi KK & Akta Lahir", "Fotokopi Ijazah & SHUN", "Surat keterangan berkelakuan baik", "Tes baca tulis Al-Quran"] },
              { lembaga: "Madrasah Tsanawiyah (MTs)", syarat: ["Lulusan SD/MI sederajat", "Nilai rata-rata rapor min. 70", "Foto 3x4 sebanyak 4 lembar", "Fotokopi KK & Akta Lahir", "Fotokopi Ijazah & SHUN", "Tes baca tulis Al-Quran & Iqra", "Surat izin orang tua"] },
              { lembaga: "Pondok Pesantren", syarat: ["Lulusan SD/MI atau SMP/MTs", "Sehat jasmani & rohani", "Foto 3x4 sebanyak 6 lembar", "Fotokopi KK & Akta Lahir", "Surat keterangan sehat dari dokter", "Tes baca Al-Quran (Iqra minimal jilid 4)", "Wawancara orang tua & calon santri"] },
            ].map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <h3 className="font-bold text-green-700 mb-6">{l.lembaga}</h3>
                <ul className="space-y-3">
                  {l.syarat.map((s, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Informasi Biaya</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Jenis Biaya</th>
                  <th className="px-6 py-4 text-center">MA</th>
                  <th className="px-6 py-4 text-center">MTs</th>
                  <th className="px-6 py-4 text-center">Ponpes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700">Biaya Pendaftaran</td>
                  <td className="px-6 py-4 text-center">Rp 200.000</td>
                  <td className="px-6 py-4 text-center">Rp 200.000</td>
                  <td className="px-6 py-4 text-center">Rp 250.000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-700">Uang Pangkal</td>
                  <td className="px-6 py-4 text-center">Rp 3.500.000</td>
                  <td className="px-6 py-4 text-center">Rp 3.000.000</td>
                  <td className="px-6 py-4 text-center">Rp 4.000.000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-slate-700">SPP / Bulan</td>
                  <td className="px-6 py-4 text-center">Rp 450.000</td>
                  <td className="px-6 py-4 text-center">Rp 400.000</td>
                  <td className="px-6 py-4 text-center">Rp 650.000</td>
                </tr>
              </tbody>
            </table>
            <p className="text-slate-400 text-xs mt-3 text-center">Biaya dapat berubah sewaktu-waktu. Hubungi sekretariat untuk informasi terbaru.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Program Beasiswa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { judul: "Beasiswa Hafidz Quran", desc: "Diberikan kepada calon siswa yang telah hafal minimal 5 juz Al-Quran. Potongan biaya hingga 75% dari uang pangkal.", syarat: "Hafal minimal 5 juz, dibuktikan dengan sertifikat atau tes langsung." },
              { judul: "Beasiswa Prestasi Akademik", desc: "Diberikan kepada lulusan terbaik SD/MI/SMP/MTs dengan nilai rata-rata rapor di atas 90.", syarat: "Rapor semester terakhir dengan rata-rata minimal 90, rekomendasi kepala sekolah asal." },
              { judul: "Beasiswa Yatim & Dhuafa", desc: "Diberikan kepada calon siswa dari keluarga kurang mampu atau yatim piatu. Bebas biaya pendidikan selama 1 tahun.", syarat: "Surat keterangan tidak mampu dari RT/RW/Kelurahan, surat keterangan yatim dari KUA." },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-green-50 rounded-2xl p-8 border border-green-100"
              >
                <h3 className="font-bold text-green-800 text-lg mb-3">{b.judul}</h3>
                <p className="text-slate-600 text-sm mb-4">{b.desc}</p>
                <div className="bg-white rounded-xl p-4 text-xs text-slate-500">
                  <strong className="text-slate-700 block mb-1">Syarat:</strong>
                  {b.syarat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 text-center mb-12">Kata Mereka Tentang Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bpk. Rahmat Hidayat", role: "Wali Murid MA", text: "Alhamdulillah, sejak anak saya sekolah di MA Al-Muhajirin, hafalan Qurannya semakin lancar dan prestasinya meningkat tajam." },
              { name: "Ibu Nuraini", role: "Wali Murid MTs", text: "Sistem pendidikannya sangat seimbang antara agama dan umum. Guru-gurunya sangat perhatian kepada perkembangan siswa." },
              { name: "Fathurrahman", role: "Alumni Ponpes (Angkatan 2020)", text: "Pondok Pesantren Al-Muhajirin memberikan pondasi agama yang sangat kuat bagi saya saat melanjutkan studi ke perguruan tinggi di Mesir." },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm relative"
              >
                <div className="absolute top-8 left-8 text-green-200 dark:text-green-900/50">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.976C16.411 14.976 14.017 14.976 14.017 11.232C14.017 7.488 17.029 3 22 3L24 6.744C24 6.744 20.394 6.744 20.394 11.232C20.394 15.72 17.623 21 17.623 21H14.017ZM3.017 21L5.411 14.976C5.411 14.976 3.017 14.976 3.017 11.232C3.017 7.488 6.029 3 11 3L13 6.744C13 6.744 9.394 6.744 9.394 11.232C9.394 15.72 6.623 21 6.623 21H3.017Z" />
                  </svg>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 relative z-10 italic pl-6 mt-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-700 dark:text-green-300 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Siap Bergabung?</h2>
          <p className="text-green-100 mb-10 max-w-xl mx-auto">Kuota terbatas! Segera lengkapi pendaftaran Anda sebelum batas waktu tutup.</p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-green-800 font-bold rounded-full hover:bg-green-50 transition-colors shadow-xl text-lg"
          >
            Daftar Sekarang <ArrowRight size={22} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
