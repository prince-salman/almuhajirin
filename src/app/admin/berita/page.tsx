import { getSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { Plus, Edit2, Trash2 } from "lucide-react";

export const metadata = {
  title: "Manajemen Berita | Admin Al-Muhajirin",
};

export default async function AdminBeritaPage() {
  const session = await getSession();

  // Ambil data berita, urutkan berdasarkan tanggal publikasi
  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Manajemen Berita & Pengumuman</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Kelola publikasi artikel, pengumuman, dan kegiatan.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-sm transition-colors text-sm">
          <Plus size={18} /> Tulis Berita
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold">
                <th className="px-6 py-4 w-1/2">Judul Artikel</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Tanggal Publikasi</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {news && news.length > 0 ? (
                news.map((n) => (
                  <tr key={n.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{n.title}</div>
                      <div className="text-slate-500 text-xs mt-1">Oleh: {n.author}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                        {n.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {n.status === 'terbit' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Terbit</span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Draft</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {new Date(n.published_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </td>
                    <td className="px-6 py-4 flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                    Belum ada artikel berita.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
