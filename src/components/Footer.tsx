import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-green-400 w-6 h-6" />
              <span className="text-white font-bold text-lg">Al-Muhajirin</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Yayasan Pendidikan Islam Al-Muhajirin mendidik generasi unggul yang cerdas, beriman, dan berakhlakul karimah sejak 1978.
            </p>
            <div className="flex gap-3">
              {["FB", "IG", "YT", "WA"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-green-700 text-slate-400 hover:text-white rounded-lg flex items-center justify-center text-xs font-bold transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Lembaga</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Madrasah Aliyah", href: "/ma" },
                { label: "Madrasah Tsanawiyah", href: "/mts" },
                { label: "Pondok Pesantren", href: "/ponpes" },
                { label: "Info PPDB", href: "/ppdb" },
                { label: "Pendaftaran Online", href: "/register" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-green-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Informasi</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Berita & Pengumuman", href: "/berita" },
                { label: "Galeri Foto", href: "/galeri" },
                { label: "Prestasi", href: "/prestasi" },
                { label: "Alumni", href: "/alumni" },
                { label: "FAQ", href: "/faq" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-green-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Kontak</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Jl. B6 Tlk. Gong No.01, RT.7/RW.13, Pejagalan, Kecamatan Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14450</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-green-500 flex-shrink-0" />
                <span>088219618682</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-green-500 flex-shrink-0" />
                <span>info@almuhajirin.sch.id</span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-green-500 flex-shrink-0" />
                <span>Senin - Sabtu, 07.00 - 15.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 mb-16 md:mb-0 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Yayasan Al-Muhajirin. Seluruh hak cipta dilindungi.</p>
      </div>

      {/* Sticky Bottom Contact Bar (Mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-green-700 text-white z-40 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:088219618682" className="flex-1 py-3 flex items-center justify-center gap-2 border-r border-green-600 font-medium text-sm">
          <Phone size={16} /> Telepon
        </a>
        <a href="https://wa.me/6288219618682" className="flex-1 py-3 flex items-center justify-center gap-2 font-medium text-sm">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> WhatsApp
        </a>
      </div>
    </footer>
  );
}
