import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import AdminSidebar from "@/components/AdminSidebar";

export const metadata = {
  title: "Panel Admin | Al-Muhajirin",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // Jika tidak ada session dan ini bukan rute /admin/login, redirect (walau middleware juga sudah handle)
  if (!session) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
      <AdminSidebar role={session.role} name={session.name} />
      <main className="flex-1 p-4 md:p-8 md:ml-64 w-full">
        {children}
      </main>
    </div>
  );
}
