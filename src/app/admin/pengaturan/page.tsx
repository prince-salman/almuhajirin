import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Save } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Pengaturan Web | Admin Al-Muhajirin",
};

export default async function AdminSettingsPage() {
  const session = await getSession();
  
  if (session?.role !== "superadmin") {
    redirect("/admin/dashboard");
  }

  const { data: settings } = await supabase.from("site_settings").select("*").eq("id", 1).single();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Pengaturan Website</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Konfigurasi informasi kontak, SEO, dan teks beranda.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-6">
          <form className="space-y-8">
            {/* Kontak Umum */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Informasi Kontak</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Telepon Utama</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.phone || "(021) 6619-XXX"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">WhatsApp / HP</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.whatsapp || "6281234567890"} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Alamat Lengkap</label>
                  <textarea rows={2} className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.address || "Jl. Teluk Gong Raya No. 1, Penjaringan, Jakarta Utara 14450"}></textarea>
                </div>
              </div>
            </div>

            {/* Pengaturan PPDB */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Status PPDB</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Status</label>
                  <select className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.ppdb_is_open ? "1" : "0"}>
                    <option value="1">Buka</option>
                    <option value="0">Tutup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Batas Akhir (Gelombang Saat Ini)</label>
                  <input type="date" className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.ppdb_wave2_close || "2026-08-31"} />
                </div>
              </div>
            </div>

            {/* Teks Hero */}
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Teks Beranda</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Judul Utama (Hero)</label>
                  <input type="text" className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.hero_title || "Mendidik Generasi Unggul dan Berakhlak"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sub-judul (Hero)</label>
                  <textarea rows={2} className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800" defaultValue={settings?.hero_subtitle || ""}></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
              <button type="button" className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-sm">
                <Save size={18} /> Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
