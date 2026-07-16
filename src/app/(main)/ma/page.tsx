import Link from "next/link";
import SchoolNav from "@/components/SchoolNav";
import { supabase } from "@/lib/supabase";
import { BookOpen, Users, Award, MapPin, Phone, Mail, Clock, ChevronRight, GraduationCap, Building2, Target } from "lucide-react";

export const revalidate = 0;

const maNavSections = [
  { label: "Beranda", href: "/ma" },
  { label: "Profil", href: "/ma#profil" },
  { label: "Visi & Misi", href: "/ma#visi-misi" },
  { label: "Program Unggulan", href: "/ma#program" },
  { label: "Fasilitas", href: "/ma#fasilitas" },
  { label: "Ekstrakurikuler", href: "/ma#ekskul" },
  { label: "Kegiatan", href: "/ma#kegiatan" },
  { label: "Kontak", href: "/ma#kontak" },
  { label: "Daftar", href: "/register" },
];

const dummyActivities = [
  { id: "1", title: "Pekan Olahraga dan Seni (PORSENI) 2026", description: "Kegiatan tahunan yang mempertandingkan berbagai cabang olahraga dan seni antar kelas untuk mengasah bakat dan sportivitas santri.", slug: "porseni-2026", created_at: new Date().toISOString() },
  { id: "2", title: "Kajian Kitab Kuning Bersama Pengasuh", description: "Dokumentasi kegiatan rutin mingguan kajian kitab kuning tingkat tinggi bagi santri kelas akhir Madrasah Aliyah.", slug: "kajian-kitab-kuning", created_at: new Date().toISOString() },
  { id: "3", title: "Upacara Peringatan Hari Santri Nasional", description: "Rangkaian acara upacara bendera dan pawai obor memperingati Hari Santri Nasional.", slug: "hari-santri-nasional", created_at: new Date().toISOString() },
];

export default async function MAPage() {
  let activities: any[] = [];

  if (true) {
    try {
      const { data } = await supabase.from("activities").select("*").order("created_at", { ascending: false });
      if (data) activities = data;
    } catch (e) {
      console.error(e);
    }
  }

  if (activities.length === 0) activities = dummyActivities;

  return (
    <div className="bg-white min-h-screen">
      <SchoolNav color="bg-green-800" schoolName="MA Al-Muhajirin" basePath="/ma" sections={maNavSections} />
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap size={16} /> Madrasah Aliyah Al-Muhajirin
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di<br />MA Al-Muhajirin
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Mencetak generasi muda yang unggul secara akademik, berkarakter Islami, dan siap menghadapi tantangan global dengan landasan iman yang kuat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg">
              Daftar Sekarang
            </Link>
            <Link href="/ma#profil" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors">
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { label: "Siswa Aktif", value: "450+" },
              { label: "Tenaga Pendidik", value: "32" },
              { label: "Tahun Berdiri", value: "1985" },
              { label: "Lulusan", value: "5.000+" },
            ].map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-green-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center border border-green-100">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-green-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
              <Users size={80} className="text-green-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Sambutan Kepala Madrasah</h2>
              <div className="text-green-600 font-semibold mb-6">Drs. H. Ahmad Fauzi, M.Pd.</div>
              <p className="text-slate-600 leading-relaxed italic relative">
                <span className="text-4xl text-green-300 absolute -top-4 -left-4">"</span>
                Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di website resmi MA Al-Muhajirin. Kami berkomitmen untuk terus memberikan pelayanan pendidikan terbaik yang memadukan keunggulan akademik dan nilai-nilai kepesantrenan. Semoga melalui platform ini, tali silaturahmi dan informasi dapat terjalin dengan lebih baik.
                <span className="text-4xl text-green-300 absolute -bottom-4">"</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="profil" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Profil Madrasah Aliyah Al-Muhajirin</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Madrasah Aliyah Al-Muhajirin adalah lembaga pendidikan Islam setingkat SMA yang bernaung di bawah Yayasan Al-Muhajirin. Berdiri sejak tahun 1985, madrasah ini telah menjadi pilihan utama para orang tua yang menginginkan pendidikan berkualitas bagi putra-putri mereka.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Kami menggabungkan kurikulum nasional Kementerian Agama RI dengan kurikulum kepesantrenan yang mencakup pembelajaran kitab kuning, tahfidz Al-Quran, dan penguatan akidah-akhlak.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Status Akreditasi", value: "A (Sangat Baik)" },
                  { label: "NPSN", value: "20179642" },
                  { label: "Jenjang", value: "Madrasah Aliyah (Setara SMA)" },
                  { label: "Sistem", value: "Reguler & Pesantren Terpadu" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ChevronRight size={18} className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700"><strong>{item.label}:</strong> {item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BookOpen size={28} />, title: "Kurikulum Terpadu", desc: "Nasional + Kepesantrenan" },
                { icon: <Award size={28} />, title: "Akreditasi A", desc: "Kementerian Agama RI" },
                { icon: <Users size={28} />, title: "Guru Kompeten", desc: "S1 & S2 bersertifikat" },
                { icon: <Building2 size={28} />, title: "Fasilitas Modern", desc: "Lab, Perpustakaan, Masjid" },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 rounded-2xl p-6 text-center">
                  <div className="text-green-600 flex justify-center mb-3">{item.icon}</div>
                  <div className="font-bold text-slate-800 text-sm">{item.title}</div>
                  <div className="text-slate-500 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="visi-misi" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Orientasi Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Visi dan Misi</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Visi</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                "Terwujudnya insan yang beriman, bertaqwa, berilmu, dan berakhlakul karimah serta mampu bersaing di era global."
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Misi</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Menyelenggarakan pendidikan Islam yang berkualitas dan integratif",
                  "Menumbuhkan kesadaran beragama yang mendalam pada setiap peserta didik",
                  "Mengembangkan potensi akademik, seni, dan olahraga siswa secara optimal",
                  "Membangun kemitraan dengan orang tua dan masyarakat untuk pendidikan holistik",
                  "Menghasilkan lulusan yang kompetitif di jenjang pendidikan tinggi",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-slate-600">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="program" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Keistimewaan Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Program Unggulan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tahfidz Al-Quran", desc: "Program hafalan Al-Quran terstruktur dengan target minimal 3 juz selama 3 tahun pendidikan, dibimbing oleh hafidz/hafidzah bersertifikat.", icon: "📖" },
              { title: "Kajian Kitab Kuning", desc: "Pembelajaran kitab-kitab klasik Islam (salaf) seperti Ta'lim Muta'allim, Jurumiyah, dan Fiqh Mu'amalah sebagai fondasi keilmuan agama.", icon: "📚" },
              { title: "Program Bahasa Arab & Inggris", desc: "Penguatan dua bahasa internasional dengan metode komunikatif. Siswa wajib berbicara Arab/Inggris di lingkungan madrasah.", icon: "🗣️" },
              { title: "Kelas Olimpiade Sains", desc: "Persiapan intensif untuk Kompetisi Sains Madrasah (KSM) tingkat Kabupaten, Provinsi, hingga Nasional di berbagai bidang studi.", icon: "🔬" },
              { title: "Karya Tulis Ilmiah (KTI)", desc: "Pelatihan penelitian ilmiah sederhana yang membiasakan siswa berpikir kritis, sistematis, dan terampil menulis karya tulis ilmiah.", icon: "✍️" },
              { title: "Bimbingan Masuk PTN/PTKIN", desc: "Bimbingan belajar intensif persiapan SNBP/SNBT dan ujian masuk PTN/PTKIN bagi siswa kelas XII mulai semester ganjil.", icon: "🎓" },
            ].map((p, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-green-600 rounded-2xl p-8 transition-all duration-300 cursor-default">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-slate-600 group-hover:text-green-100 transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="fasilitas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Penunjang Belajar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Fasilitas Kami</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Masjid Madrasah", "Laboratorium IPA", "Laboratorium Komputer", "Perpustakaan Digital",
              "Ruang Multimedia", "Lapangan Olahraga", "Kantin Sehat", "UKS (Kesehatan)",
              "Aula Serba Guna", "Ruang BK", "Asrama Siswa", "Area WiFi Gratis",
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3"></div>
                <span className="text-slate-700 font-medium text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="ekskul" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Pengembangan Diri</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Ekstrakurikuler</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Pramuka", icon: "⛺" },
              { name: "Futsal", icon: "⚽" },
              { name: "Bola Voli", icon: "🏐" },
              { name: "Basket", icon: "🏀" },
              { name: "Marawis / Hadroh", icon: "🥁" },
              { name: "Seni Kaligrafi", icon: "✒️" },
              { name: "Tilawah Al-Quran", icon: "🎙️" },
              { name: "Debat Bahasa Arab", icon: "🗣️" },
              { name: "PMR", icon: "🩹" },
              { name: "Jurnalistik", icon: "📰" },
              { name: "Teater", icon: "🎭" },
              { name: "OSIS", icon: "🏛️" },
            ].map((e, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 hover:bg-green-50 transition-colors">
                <span className="text-2xl">{e.icon}</span>
                <span className="font-medium text-slate-700 text-sm">{e.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Pimpinan Madrasah</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Struktur Kepemimpinan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { jabatan: "Kepala Madrasah", nama: "Drs. H. Ahmad Fauzi, M.Pd.", nip: "NIP. 196801011990031002" },
              { jabatan: "Wakil Kepala Kurikulum", nama: "Hj. Siti Rahayu, S.Ag., M.Pd.", nip: "NIP. 197005221997032001" },
              { jabatan: "Wakil Kepala Kesiswaan", nama: "Moh. Syaifuddin, S.Pd.", nip: "NIP. 197803252003121005" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-green-600" />
                </div>
                <div className="text-green-600 text-sm font-semibold mb-1">{s.jabatan}</div>
                <div className="font-bold text-slate-800">{s.nama}</div>
                <div className="text-slate-400 text-xs mt-1">{s.nip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Tenaga Pendidik</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Dewan Guru</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <Users size={40} className="text-slate-400 group-hover:text-green-600 transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">Nama Guru {i}</h3>
                <p className="text-sm text-slate-500">Guru Mata Pelajaran</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="kegiatan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Dokumentasi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Kegiatan Terkini</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Link key={activity.id} href={`/ma/activities/${activity.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden flex items-center justify-center">
                  <BookOpen size={40} className="text-green-400" />
                  <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">{activity.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">{activity.description}</p>
                  <span className="text-green-600 font-semibold text-sm flex items-center gap-1">Lihat Detail <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabung Bersama Kami</h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Pendaftaran Peserta Didik Baru (PPDB) MA Al-Muhajirin dibuka setiap tahun. Segera daftarkan putra-putri Anda dan raih masa depan yang gemilang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-white text-green-800 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg">
              Formulir Pendaftaran Online
            </Link>
          </div>
          <p className="text-green-300 text-sm mt-6">Informasi lebih lanjut: hubungi nomor di bawah ini</p>
        </div>
      </section>
      <section id="kontak" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Kontak & Lokasi</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: <MapPin size={20} />, label: "Alamat", value: "Jl. Teluk Gong Raya No. 1, Penjaringan, Jakarta Utara 14450" },
                { icon: <Phone size={20} />, label: "Telepon", value: "(021) 6619-XXX" },
                { icon: <Mail size={20} />, label: "Email", value: "ma.almuhajirin@gmail.com" },
                { icon: <Clock size={20} />, label: "Jam Operasional", value: "Senin - Sabtu, 07.00 - 15.00 WIB" },
              ].map((c, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-green-400 mt-0.5 flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-slate-400 text-sm">{c.label}</div>
                    <div className="text-white font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-64 md:h-auto bg-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1302153858405!2d106.7754642!3d-6.1291334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d00ce8a021b%3A0xc120db5e088707e4!2sPONDOK%20PESANTREN%20AL%20MUHAJIRIN%20TELUK%20GONG!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi MA Al-Muhajirin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-900 border-t border-slate-800 py-4 text-center text-slate-500 text-sm">
        <Link href="/" className="hover:text-white transition-colors">Kembali ke Beranda Yayasan Al-Muhajirin</Link>
      </div>
    </div>
  );
}
