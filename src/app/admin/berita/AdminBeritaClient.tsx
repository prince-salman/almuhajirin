"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X, Save } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminBeritaClient({ initialNews, author, role }: { initialNews: any[], author: string, role: string }) {
  const [news, setNews] = useState(initialNews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "Berita",
    status: "terbit",
    thumbnail_url: "",
    content: "",
    institution: role === "superadmin" ? "yayasan" : role.replace("admin_", "")
  });

  const handleOpenModal = (item?: any) => {
    if (item) {
      setFormData({
        id: item.id,
        title: item.title,
        category: item.category,
        status: item.status,
        thumbnail_url: item.thumbnail_url || "",
        content: item.content || "",
        institution: item.institution || "yayasan",
      });
    } else {
      setFormData({
        id: "",
        title: "",
        category: "Berita",
        status: "terbit",
        thumbnail_url: "",
        content: "",
        institution: role === "superadmin" ? "yayasan" : role.replace("admin_", "")
      });
    }
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) return;
    
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (!error) {
      setNews(news.filter(n => n.id !== id));
      router.refresh();
    } else {
      alert("Gagal menghapus berita");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      title: formData.title,
      category: formData.category,
      status: formData.status,
      thumbnail_url: formData.thumbnail_url,
      content: formData.content,
      author: author,
      institution: formData.institution,
      excerpt: formData.content.substring(0, 100) + '...',
      published_at: formData.status === 'terbit' ? new Date().toISOString() : null,
      slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    };

    let error;
    if (formData.id) {
      const res = await supabase.from("news").update(payload).eq("id", formData.id);
      error = res.error;
    } else {
      const res = await supabase.from("news").insert([payload]);
      error = res.error;
    }

    setIsSubmitting(false);

    if (error) {
      alert("Gagal menyimpan berita: " + error.message);
    } else {
      setIsModalOpen(false);
      // Reload page data
      const { data } = await supabase.from("news").select("*").order("published_at", { ascending: false });
      if (data) setNews(data);
      router.refresh();
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Manajemen Berita & Pengumuman</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Kelola publikasi artikel, pengumuman, dan kegiatan.
          </p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-sm transition-colors text-sm"
        >
          <Plus size={18} /> Tulis Berita
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold">
                <th className="px-6 py-4">Thumbnail</th>
                <th className="px-6 py-4 w-1/2">Judul Artikel</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {news && news.length > 0 ? (
                news.map((n) => (
                  <tr key={n.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4">
                      {n.thumbnail_url ? (
                        <img src={n.thumbnail_url} alt="thumb" className="w-16 h-12 object-cover rounded-lg" />
                      ) : (
                        <div className="w-16 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400">No Image</div>
                      )}
                    </td>
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
                    <td className="px-6 py-4 flex items-center justify-end gap-2">
                      <button onClick={() => handleOpenModal(n)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(n.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {formData.id ? "Edit Berita" : "Tulis Berita Baru"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <form id="beritaForm" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Thumbnail Gambar</label>
                  <ImageUploader 
                    value={formData.thumbnail_url} 
                    onChange={(url) => setFormData({...formData, thumbnail_url: url})} 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Judul Berita</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Masukkan judul berita..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Kategori</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="Berita">Berita</option>
                      <option value="Pengumuman">Pengumuman</option>
                      <option value="Kegiatan">Kegiatan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="terbit">Terbit (Publish)</option>
                      <option value="draft">Draft (Sembunyikan)</option>
                    </select>
                  </div>
                </div>
                
                {role === "superadmin" && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Lembaga</label>
                    <select
                      value={formData.institution}
                      onChange={(e) => setFormData({...formData, institution: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="yayasan">Yayasan (Pusat)</option>
                      <option value="ma">Madrasah Aliyah</option>
                      <option value="mts">Madrasah Tsanawiyah</option>
                      <option value="ponpes">Pondok Pesantren</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Konten</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    placeholder="Tulis isi berita di sini..."
                  />
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3 bg-slate-50 dark:bg-slate-800/50">
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                Batal
              </button>
              <button 
                type="submit" 
                form="beritaForm"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold shadow-sm transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Menyimpan..." : <><Save size={18} /> Simpan</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
