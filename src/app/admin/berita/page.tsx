import { getSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminBeritaClient from "./AdminBeritaClient";

export const metadata = {
  title: "Manajemen Berita | Admin Al-Muhajirin",
};

export default async function AdminBeritaPage() {
  const session = await getSession();
  
  let query = supabase.from("news").select("*").order("published_at", { ascending: false });
  
  // Filter data berdasarkan role admin
  if (session?.role === "admin_ma") query = query.eq("institution", "ma");
  if (session?.role === "admin_mts") query = query.eq("institution", "mts");
  if (session?.role === "admin_ponpes") query = query.eq("institution", "ponpes");

  const { data: news, error } = await query;

  return (
    <AdminBeritaClient initialNews={news || []} author={session?.name || "Admin"} role={session?.role || "superadmin"} />
  );
}
