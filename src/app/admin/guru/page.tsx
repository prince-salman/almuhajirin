import { getSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { Plus, Edit2, Trash2 } from "lucide-react";

export const metadata = {
  title: "Data Guru | Admin Al-Muhajirin",
};

export default async function AdminGuruPage() {
  const session = await getSession();
  const role = session?.role;
  const institutionFilter = role === "admin_ma" ? "MA" : role === "admin_mts" ? "MTs" : role === "admin_ponpes" ? "Ponpes" : null;

  let query = supabase.from("teachers").select("*").order("sort_order", { ascending: true });
  
  if (institutionFilter) {
    query = query.eq("institution", institutionFilter);
  }

  const { data: teachers, error } = await query;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Manajemen Data Guru</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Kelola data staf pengajar {institutionFilter ? `untuk lembaga ${institutionFilter}` : "seluruh lembaga"}.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-sm transition-colors text-sm">
          <Plus size={18} /> Tambah Guru
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold">
                <th className="px-6 py-4">Nama Guru</th>
                <th className="px-6 py-4">Posisi</th>
                <th className="px-6 py-4">Lembaga</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {teachers && teachers.length > 0 ? (
                teachers.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800 dark:text-slate-200">{t.name}</div>
                      <div className="text-slate-500 text-xs">{t.subject || "-"}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{t.position}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {t.institution}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {t.is_active ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Aktif</span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">Nonaktif</span>
                      )}
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
                    Tidak ada data guru.
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
