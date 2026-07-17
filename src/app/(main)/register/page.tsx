"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

import { toast } from "sonner";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      student_name: formData.get("student_name") as string,
      institution: `${formData.get("institution")} - ${formData.get("boarding")}`,
      phone_number: formData.get("phone_number") as string,
      address: formData.get("address") as string,
    };

    const { error } = await supabase.from("registrations").insert([data]);

    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      console.error(error);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    }
    
    setLoading(false);
  }

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-green-600 px-8 py-10 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Pendaftaran Online</h1>
            <p className="text-green-100">Silakan isi formulir di bawah ini dengan data yang benar.</p>
          </div>
          
          <div className="p-8">
            {success ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center">
                <h3 className="text-xl font-bold mb-2">Pendaftaran Berhasil!</h3>
                <p>Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                  Daftar Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="student_name" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap Siswa</label>
                  <input 
                    type="text" 
                    id="student_name" 
                    name="student_name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <label className="block text-sm font-bold text-slate-800 mb-4">Pilih Pendidikan Formal :</label>
                  
                  <div className="space-y-3 mb-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="institution" value="MTs" required className="w-5 h-5 accent-blue-600 text-blue-600 border-slate-300 focus:ring-blue-500" />
                      <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">MTs (setingkat SMP)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="institution" value="MA" required className="w-5 h-5 accent-blue-600 text-blue-600 border-slate-300 focus:ring-blue-500" />
                      <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">MA (Setingkat SMA)</span>
                    </label>
                  </div>

                  <div className="w-full h-px bg-slate-100 mb-6"></div>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="boarding" value="Sekalian mondok" defaultChecked className="w-5 h-5 accent-blue-600 text-blue-600 border-slate-300 focus:ring-blue-500" />
                      <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">Sekalian mondok</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="boarding" value="Tidak sekalian mondok" className="w-5 h-5 accent-blue-600 text-blue-600 border-slate-300 focus:ring-blue-500" />
                      <span className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors">Tidak sekalian mondok</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon/WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone_number" 
                    name="phone_number" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    placeholder="Contoh: 08123456789"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">Alamat Lengkap</label>
                  <textarea 
                    id="address" 
                    name="address" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none"
                    placeholder="Masukkan alamat lengkap"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Memproses..." : "Kirim Pendaftaran"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
