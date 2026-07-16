import Link from "next/link";
import SchoolNav from "@/components/SchoolNav";
import { BookOpen, Users, MapPin, Phone, Mail, Clock, ChevronRight, Target, Moon, Home } from "lucide-react";

const ponpesNavSections = [
  { label: "Beranda", href: "/ponpes" },
  { label: "Profil", href: "/ponpes#profil" },
  { label: "Visi & Misi", href: "/ponpes#visi-misi" },
  { label: "Program Pendidikan", href: "/ponpes#program" },
  { label: "Kehidupan Santri", href: "/ponpes#kehidupan" },
  { label: "Fasilitas", href: "/ponpes#fasilitas" },
  { label: "Kontak", href: "/ponpes#kontak" },
  { label: "Daftar", href: "/register" },
];

export default function PonpesPage() {
  return (
    <div className="bg-white min-h-screen">
      <SchoolNav color="bg-green-900" schoolName="Ponpes Al-Muhajirin" basePath="/ponpes" sections={ponpesNavSections} />
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Moon size={16} /> Pondok Pesantren Al-Muhajirin
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di<br />Ponpes Al-Muhajirin
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Tempat kaderisasi ulama dan pemimpin umat dengan sistem pendidikan pesantren klasik yang dipadukan dengan pendekatan modern dan disiplin tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-white text-green-900 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg">
              Daftar Santri Baru
            </Link>
            <Link href="/ponpes#profil" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors">
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {[
              { label: "Santri Aktif", value: "600+" },
              { label: "Ustadz & Pengajar", value: "45" },
              { label: "Tahun Berdiri", value: "1978" },
              { label: "Alumni", value: "8.000+" },
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
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Sambutan Pengasuh Pondok</h2>
              <div className="text-green-700 font-semibold mb-6">KH. Muhammad Fathurrahman, Lc., M.A.</div>
              <p className="text-slate-600 leading-relaxed italic relative">
                <span className="text-4xl text-green-300 absolute -top-4 -left-4">"</span>
                Ahlan wa Sahlan. Pesantren adalah benteng terakhir pertahanan akidah dan akhlak umat. Kami berikhtiar mendidik para santri tidak hanya pandai mengaji, tetapi juga memiliki adab yang tinggi dan wawasan yang luas. Mari kita cetak generasi Robbani yang tangguh di era akhir zaman ini.
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
              <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">Profil Pondok Pesantren Al-Muhajirin</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pondok Pesantren Al-Muhajirin adalah lembaga pendidikan Islam dengan sistem asrama penuh (full boarding school) yang telah berdiri sejak 1978. Didirikan oleh KH. Abdullah Al-Muhajir, pesantren ini menjadi cikal bakal berkembangnya pendidikan Islam di kawasan Teluk Gong, Jakarta Utara.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Pondok pesantren ini menerapkan sistem salaf (tradisional) yang diperkaya dengan pendekatan khalaf (modern), sehingga para santri tidak hanya mahir dalam ilmu agama klasik, tetapi juga memiliki kecakapan dalam ilmu pengetahuan umum dan teknologi.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Pengasuh", value: "KH. Muhammad Fathurrahman, Lc., M.A." },
                  { label: "Sistem", value: "Full Boarding (Asrama Penuh)" },
                  { label: "Kurikulum", value: "Salaf & Khalaf Terpadu" },
                  { label: "Jenjang Santri", value: "Ula, Wustha, Ulya (Setara SD-SMA)" },
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
                { icon: <Moon size={28} />, title: "Full Boarding", desc: "Asrama putra & putri terpisah" },
                { icon: <BookOpen size={28} />, title: "Kitab Kuning", desc: "Kajian hadits, fiqh, tasawuf" },
                { icon: <Users size={28} />, title: "Pengajar Ulama", desc: "Alumni Timur Tengah & pesantren besar" },
                { icon: <Home size={28} />, title: "Lingkungan Islami", desc: "Pembiasaan ibadah 24 jam" },
              ].map((item, i) => (
                <div key={i} className="bg-green-50 rounded-2xl p-6 text-center">
                  <div className="text-green-700 flex justify-center mb-3">{item.icon}</div>
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
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Orientasi Pesantren</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Visi dan Misi</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-700 rounded-2xl flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Visi</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                "Menjadi pesantren unggulan pencetak ulama, intelektual Muslim, dan pemimpin umat yang berilmu luas, berjiwa ikhlas, dan bermanfaat bagi bangsa serta agama."
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-700 rounded-2xl flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Misi</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Menyelenggarakan pendidikan agama Islam yang mendalam dan komprehensif",
                  "Membentuk santri yang berakhlak mulia dan berdisiplin tinggi",
                  "Mengkaji dan mengembangkan kitab-kitab turats Islam klasik",
                  "Menanamkan jiwa kemandirian, kepemimpinan, dan wirausaha Islami",
                  "Mempersiapkan kader ulama dan da'i yang siap terjun ke masyarakat",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
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
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Kurikulum Pesantren</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Program Pendidikan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tahfidz Al-Quran", desc: "Program hafalan Al-Quran 30 juz dengan metode talaqqi dan musyafahah. Santri dibimbing secara individual sesuai kemampuan dan progres hafalan masing-masing.", icon: "📖" },
              { title: "Kajian Kitab Kuning", desc: "Pengajaran kitab-kitab klasik: Fathul Qarib, Riyadhus Shalihin, Bulughul Maram, Alfiyah Ibn Malik, Matan Jurumiyah, dan kitab-kitab tafsir pilihan.", icon: "📚" },
              { title: "Bahasa Arab Intensif", desc: "Wajib berbahasa Arab di lingkungan pesantren. Program muhadatsah harian, muhadharah mingguan, dan kompetisi bahasa Arab tahunan antar santri.", icon: "🗣️" },
              { title: "Ilmu Pengetahuan Umum", desc: "Mata pelajaran umum (Matematika, IPA, IPS, Bahasa Indonesia, Bahasa Inggris) untuk santri yang menempuh pendidikan formal MA/MTs di bawah yayasan.", icon: "🔬" },
              { title: "Fiqih Muamalah & Ibadah", desc: "Pembelajaran hukum Islam praktis yang mencakup ibadah mahdhah, muamalah, dan kehidupan sosial sehari-hari berdasarkan mazhab Syafi'i.", icon: "🕌" },
              { title: "Kewirausahaan Islami", desc: "Pelatihan jiwa kewirausahaan melalui unit-unit usaha pesantren: koperasi santri, pertanian, percetakan, dan keterampilan vokasi pilihan.", icon: "🌱" },
            ].map((p, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-green-800 rounded-2xl p-8 transition-all duration-300 cursor-default">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-slate-600 group-hover:text-green-100 transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="kehidupan" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Jadwal Harian</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Kehidupan Santri</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Setiap hari santri menjalani rutinitas yang terstruktur untuk membentuk kedisiplinan dan kebiasaan Islami.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { waktu: "03.30 - 04.30", kegiatan: "Qiyamul Lail & Shalat Tahajud Berjamaah" },
              { waktu: "04.30 - 05.30", kegiatan: "Shalat Subuh & Kajian Kitab Pagi" },
              { waktu: "05.30 - 06.30", kegiatan: "Olahraga Pagi & Persiapan KBM" },
              { waktu: "06.30 - 07.00", kegiatan: "Sarapan & Persiapan Belajar" },
              { waktu: "07.00 - 12.00", kegiatan: "Kegiatan Belajar Mengajar (Pelajaran Formal)" },
              { waktu: "12.00 - 13.30", kegiatan: "Shalat Dzuhur Berjamaah & Istirahat Siang" },
              { waktu: "13.30 - 15.30", kegiatan: "KBM Sore / Kajian Kitab Sore" },
              { waktu: "15.30 - 17.00", kegiatan: "Shalat Ashar Berjamaah & Muhadatsah" },
              { waktu: "17.00 - 18.30", kegiatan: "Kegiatan Bebas / Olahraga Sore" },
              { waktu: "18.30 - 19.30", kegiatan: "Shalat Maghrib Berjamaah & Ngaji Al-Quran" },
              { waktu: "19.30 - 20.30", kegiatan: "Shalat Isya Berjamaah & Makan Malam" },
              { waktu: "20.30 - 22.00", kegiatan: "Belajar Malam / Muhadharah" },
              { waktu: "22.00", kegiatan: "Istirahat Malam (Lampu Padam)" },
            ].map((jadwal, i) => (
              <div key={i} className="flex gap-6 bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                <div className="text-green-700 font-bold text-sm w-36 flex-shrink-0 pt-0.5">{jadwal.waktu}</div>
                <div className="text-slate-700">{jadwal.kegiatan}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="fasilitas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Penunjang Pendidikan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Fasilitas Pesantren</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Masjid Jami' Pesantren", "Asrama Putra", "Asrama Putri", "Dapur & Ruang Makan",
              "Perpustakaan Kitab", "Lab Komputer", "Lapangan Olahraga", "Koperasi Santri",
              "Klinik Kesehatan", "Aula Serba Guna", "Ruang Tahfidz", "Kamar Mandi Bersih",
              "Area WiFi Terbatas", "Ruang Tamu", "Pos Keamanan 24 Jam", "Warung Pesantren",
            ].map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4 text-center shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-3 h-3 bg-green-600 rounded-full mx-auto mb-3"></div>
                <span className="text-slate-700 font-medium text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Pimpinan Pesantren</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Jajaran Pengasuh</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { jabatan: "Pengasuh / Mudir Ma'had", nama: "KH. Muhammad Fathurrahman, Lc., M.A.", asal: "Alumni Universitas Al-Azhar, Mesir" },
              { jabatan: "Wakil Pengasuh Putra", nama: "Ust. H. Zainul Abidin, S.Pd.I.", asal: "Alumni Pesantren Lirboyo, Kediri" },
              { jabatan: "Wakil Pengasuh Putri", nama: "Nyai. Hj. Fatimah Azzahra, M.A.", asal: "Alumni Pesantren Al-Anwar, Rembang" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-green-700" />
                </div>
                <div className="text-green-700 text-sm font-semibold mb-1">{s.jabatan}</div>
                <div className="font-bold text-slate-800 text-sm mb-1">{s.nama}</div>
                <div className="text-slate-400 text-xs">{s.asal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">Tenaga Pendidik</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Dewan Asatidz (Guru)</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { nama: "Ustadz H. Badruddin", mapel: "Pengampu Nahwu Shorof" },
              { nama: "Ustadz M. Kholil", mapel: "Pengampu Tafsir Jalalain" },
              { nama: "Ustadzah Siti Maryam", mapel: "Pengampu Fiqih Wanita" },
              { nama: "Ustadz Abdul Somad", mapel: "Pengampu Hadits" },
              { nama: "Ustadz Ilham", mapel: "Pengampu Ilmu Tauhid" },
              { nama: "Ustadzah Fatimah", mapel: "Tahfidz Al-Quran" },
              { nama: "Ustadz Hasan", mapel: "Pengampu Tajwid" },
              { nama: "Ustadz Zaid", mapel: "Pembina Ekstrakurikuler" }
            ].map((t, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                  <Users size={40} className="text-slate-400 group-hover:text-green-700 transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">{t.nama}</h3>
                <p className="text-sm text-slate-500">{t.mapel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-green-900 to-green-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Titipkan Putra-Putri Anda</h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
            Mendaftarkan santri ke pesantren adalah investasi terbaik untuk dunia dan akhirat. Penerimaan santri baru dibuka setiap tahun.
          </p>
          <Link href="/register" className="inline-block px-8 py-4 bg-white text-green-900 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg">
            Formulir Pendaftaran Santri Baru
          </Link>
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
                { icon: <Mail size={20} />, label: "Email", value: "ponpes.almuhajirin@gmail.com" },
                { icon: <Clock size={20} />, label: "Jam Kunjungan", value: "Sabtu & Minggu, 08.00 - 12.00 WIB" },
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
            <div className="rounded-2xl overflow-hidden bg-slate-700" style={{ minHeight: "260px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1302153858405!2d106.7754642!3d-6.1291334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d00ce8a021b%3A0xc120db5e088707e4!2sPONDOK%20PESANTREN%20AL%20MUHAJIRIN%20TELUK%20GONG!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Ponpes Al-Muhajirin"
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
