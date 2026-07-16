import { getSession } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminBeritaClient from "./AdminBeritaClient";

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
    <AdminBeritaClient initialNews={news || []} author={session?.name || "Admin"} />
  );
}
