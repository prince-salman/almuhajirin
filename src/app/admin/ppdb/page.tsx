import { getSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { Check, X, Eye } from "lucide-react";

export const metadata = {
  title: "Manajemen PPDB | Admin Al-Muhajirin",
};

export default async function AdminPPDBPage() {
  const session = await getSession();
  const role = session?.role;
  const institutionFilter = role === "admin_ma" ? "MA" : role === "admin_mts" ? "MTs" : role === "admin_ponpes" ? "Ponpes" : null;

  let query = supabase.from("registrations").select("*").order("created_at", { ascending: false });
  
  if (institutionFilter) {
    query = query.eq("institution", institutionFilter);
  }

  const { data: regs, error } = await query;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Data Pendaftar PPDB</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Kelola data calon siswa baru {institutionFilter ? `lembaga ${institutionFilter}` : "semua lembaga"}.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold">
                <th className="px-6 py-4">Nama Pendaftar</th>
                <th className="px-6 py-4">Lembaga</th>
                <th className="px-6 py-4">Kontak (WA)</th>
                <th className="px-6 py-4">Tanggal Daftar</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {regs && regs.length > 0 ? (
                regs.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800 dark:text-slate-200">{r.student_name}</div>
                      <div className="text-slate-500 text-xs">Asal: {r.previous_school || "-"}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {r.institution}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{r.phone_number}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {new Date(r.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-6 py-4">
                      {r.status === 'diterima' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Diterima</span>}
                      {r.status === 'ditolak' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Ditolak</span>}
                      {r.status === 'diverifikasi' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Diverifikasi</span>}
                      {r.status === 'menunggu' && <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">Menunggu</span>}
                    </td>
                    <td className="px-6 py-4 flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20" title="Detail">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20" title="Terima">
                        <Check size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20" title="Tolak">
                        <X size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                    Belum ada data pendaftar.
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
