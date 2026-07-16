import { getSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { Users, FileText, UserPlus, Award } from "lucide-react";

export const metadata = {
  title: "Dashboard Admin | Al-Muhajirin",
};

export default async function AdminDashboard() {
  const session = await getSession();
  const role = session?.role;

  // Supabase filter query based on role
  const institutionFilter = role === "admin_ma" ? "MA" : role === "admin_mts" ? "MTs" : role === "admin_ponpes" ? "Ponpes" : null;

  // Fetch counts
  let ppdbQuery = supabase.from("registrations").select("id", { count: "exact", head: true });
  let teachersQuery = supabase.from("teachers").select("id", { count: "exact", head: true });
  let newsQuery = supabase.from("news").select("id", { count: "exact", head: true });
  let achievementsQuery = supabase.from("achievements").select("id", { count: "exact", head: true });

  if (institutionFilter) {
    ppdbQuery = ppdbQuery.eq("institution", institutionFilter);
    teachersQuery = teachersQuery.eq("institution", institutionFilter);
    achievementsQuery = achievementsQuery.eq("institution", institutionFilter);
    // News is global or specific? For now assume global if no institution column in news table.
  }

  const [ppdb, teachers, news, achievements] = await Promise.all([
    ppdbQuery,
    teachersQuery,
    newsQuery,
    achievementsQuery
  ]);

  const stats = [
    { title: "Total Pendaftar PPDB", value: ppdb.count || 0, icon: <UserPlus size={24} className="text-blue-500" />, bg: "bg-blue-50" },
    { title: "Total Guru", value: teachers.count || 0, icon: <Users size={24} className="text-green-500" />, bg: "bg-green-50" },
    { title: "Total Berita", value: news.count || 0, icon: <FileText size={24} className="text-purple-500" />, bg: "bg-purple-50" },
    { title: "Total Prestasi", value: achievements.count || 0, icon: <Award size={24} className="text-orange-500" />, bg: "bg-orange-50" },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "Selamat Pagi";
    if (hour < 15) return "Selamat Siang";
    if (hour < 18) return "Selamat Sore";
    return "Selamat Malam";
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">{getGreeting()}, {session?.name}!</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Selamat datang di panel admin {institutionFilter ? institutionFilter : "Yayasan Al-Muhajirin"}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl ${stat.bg} dark:bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Informasi Sistem</h2>
        <div className="prose prose-sm dark:prose-invert">
          <p>
            Anda login sebagai <strong>{session?.role}</strong>. 
            {institutionFilter ? (
              <span> Anda hanya memiliki akses untuk mengelola data milik <strong>{institutionFilter}</strong>.</span>
            ) : (
              <span> Anda memiliki akses penuh ke seluruh pengaturan lembaga (MA, MTs, Ponpes).</span>
            )}
          </p>
          <ul>
            <li>Gunakan menu di sebelah kiri untuk menavigasi halaman manajemen.</li>
            <li>Perubahan data akan langsung terlihat di website publik.</li>
            <li>Pastikan Anda selalu <em>Logout</em> setelah selesai menggunakan panel admin.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
