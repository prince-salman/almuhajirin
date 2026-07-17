"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Send, UserCheck, BookOpen, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import CountdownTimer from "@/components/CountdownTimer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative w-full h-[620px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 to-slate-900/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-green-300 text-sm font-medium mb-6 border border-white/10">
            YAYASAN AL-MUHAJIRIN TARBIYAH ISLAMIYAH (YALTIS)
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Mendidik Generasi<br />
            <span className="text-green-400">Unggul dan Berakhlaqul Karimah</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Membangun generasi cerdas, beriman, dan bermanfaat bagi bangsa melalui pendidikan Islam terpadu sejak 1978.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ppdb"
              className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
              Info PPDB 2026/2027 <ArrowRight size={20} />
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Daftar Sekarang
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="bg-white dark:bg-slate-950 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountdownTimer targetDate="2026-08-01T00:00:00" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Lembaga Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Pilih Jenjang Pendidikan</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              Tiga lembaga pendidikan terpadu di bawah satu atap yayasan, menjamin kesinambungan pendidikan putra-putri Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "MA Al-Muhajirin", link: "/ma", desc: "Madrasah Aliyah berfokus pada keunggulan akademik dan pendalaman ilmu agama setingkat SMA.", image: "/logoma.png" },
              { title: "MTs Al-Muhajirin", link: "/mts", desc: "Madrasah Tsanawiyah yang mengintegrasikan kurikulum nasional dan pesantren setingkat SMP.", image: "/logomts.png" },
              { title: "Pondok Pesantren", link: "/ponpes", desc: "Pusat kaderisasi ulama dan pemimpin dengan sistem asrama penuh dan kurikulum salaf-khalaf.", image: "/logoponpes.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link
                  href={item.link}
                  className="group flex flex-col items-center bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 h-full"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center p-2">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center">{item.title}</h3>
                  <p className="text-slate-600 text-center flex-1">{item.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Selengkapnya <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-green-200 font-semibold text-sm uppercase tracking-widest">Pencapaian Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Dalam Angka</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { end: 1430, label: "Total Siswa & Santri", suffix: "+" },
              { end: 105, label: "Guru & Ustadz", suffix: "+" },
              { end: 1978, label: "Tahun Berdiri", suffix: "" },
              { end: 17000, label: "Alumni", suffix: "+" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-2xl p-6"
              >
                <AnimatedCounter end={s.end} label={s.label} suffix={s.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Sejarah Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">Perjalanan Panjang Yayasan Al-Muhajirin</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Yayasan Al-Muhajirin lahir dari semangat para ulama dan tokoh masyarakat di kawasan Teluk Gong, Jakarta Utara, untuk menyediakan pendidikan Islam berkualitas bagi masyarakat sekitar. Dirintis sejak akhir 1970-an, yayasan ini kini telah menjadi salah satu institusi pendidikan Islam terkemuka di Jakarta.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Dengan semangat <em>tafaqquh fiddin</em> (memperdalam ilmu agama) yang dipadukan dengan kecakapan akademik modern, ribuan alumni yayasan ini kini tersebar di berbagai profesi dan bidang kehidupan, membawa manfaat bagi masyarakat luas.
              </p>
              <Link
                href="/ppdb"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition-colors"
              >
                Lihat Info PPDB <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                { tahun: "1978", judul: "Pondok Pesantren Berdiri", desc: "KH. Abdullah Al-Muhajir mendirikan pondok pesantren sebagai cikal bakal yayasan." },
                { tahun: "1985", judul: "Madrasah Aliyah Didirikan", desc: "Untuk memenuhi kebutuhan pendidikan formal tingkat atas bagi santri dan masyarakat sekitar." },
                { tahun: "1990", judul: "Madrasah Tsanawiyah Dibuka", desc: "Melengkapi jenjang pendidikan sehingga tersedia layanan dari SMP hingga SMA setara." },
                { tahun: "2010+", judul: "Era Modernisasi", desc: "Pengembangan fasilitas, kurikulum, dan teknologi pendidikan secara berkelanjutan." },
              ].map((m, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-700 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight px-1">
                    {m.tahun}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{m.judul}</div>
                    <div className="text-slate-500 text-sm mt-1">{m.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Cara Mendaftar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Alur Pendaftaran</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle size={32} />, step: "1", title: "Pilih Lembaga", desc: "Pilih MA, MTs, atau Pondok Pesantren sesuai jenjang yang diinginkan." },
              { icon: <FileText size={32} />, step: "2", title: "Isi Formulir", desc: "Lengkapi formulir pendaftaran online dengan data yang benar." },
              { icon: <Send size={32} />, step: "3", title: "Verifikasi Berkas", desc: "Serahkan berkas fisik dan ikuti tes seleksi yang dijadwalkan." },
              { icon: <UserCheck size={32} />, step: "4", title: "Daftar Resmi", desc: "Lakukan registrasi ulang dan pembayaran untuk menjadi siswa resmi." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 mx-auto mb-4 relative">
                  {s.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-700 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-green-700/30"
            >
              Daftar Sekarang <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Kata Mereka</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Testimoni Orang Tua & Alumni</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nama: "Bpk. H. Rusdi Hakim", peran: "Orang Tua Siswa MA", kutipan: "Alhamdulillah, putra saya mengalami perubahan yang luar biasa sejak masuk di sini. Akhlaknya membaik, prestasinya meningkat, dan yang paling membanggakan adalah semangatnya untuk mengaji semakin tinggi." },
              { nama: "Ibu Siti Maryam", peran: "Orang Tua Santri Ponpes", kutipan: "Awalnya khawatir melepas anak masuk pesantren, tapi sekarang justru bersyukur. Para ustadz sangat perhatian, fasilitas bersih, dan komunikasi dengan orang tua sangat terjaga dengan baik." },
              { nama: "Ahmad Fauzan", peran: "Alumni MA 2018", kutipan: "Ilmu agama yang saya dapat di sini menjadi bekal berharga. Sekarang saya kuliah di UIN Jakarta dan aktif di berbagai kegiatan kemahasiswaan. Terima kasih Al-Muhajirin!" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-green-50 rounded-2xl p-8 border border-green-100 relative"
              >
                <div className="text-5xl text-green-300 absolute top-4 right-6 font-serif leading-none">"</div>
                <p className="text-slate-600 leading-relaxed italic mb-6 relative z-10">{t.kutipan}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.nama[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">{t.nama}</div>
                    <div className="text-green-600 text-xs">{t.peran}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Bergabung Bersama Kami?</h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Investasikan masa depan putra-putri Anda di lembaga pendidikan Islam yang terpercaya. PPDB 2025/2026 masih dibuka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ppdb"
              className="px-8 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg"
            >
              Info Lengkap PPDB
            </Link>
            <Link
              href="/register"
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition-colors border border-green-500"
            >
              Daftar Sekarang
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
