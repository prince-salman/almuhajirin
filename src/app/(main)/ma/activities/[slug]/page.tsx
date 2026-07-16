import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const revalidate = 0;

export default async function ActivityDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let activity = null;
  let mediaItems: any[] = [];

  if (true) {
    try {
      const { data: act } = await supabase
        .from('activities')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (act) {
        activity = act;
        const { data: mItems } = await supabase
          .from('activity_media')
          .select('*')
          .eq('activity_id', activity.id);
        if (mItems) mediaItems = mItems;
      }
    } catch (e) {
      console.error("Supabase not connected", e);
    }
  }
  if (!activity) {
    if (slug === 'porseni-2026') {
      activity = { id: "1", title: "Pekan Olahraga dan Seni (PORSENI) 2026", description: "Kegiatan tahunan yang mempertandingkan berbagai cabang olahraga dan seni antar kelas untuk mengasah bakat dan sportivitas santri. Acara ini berlangsung meriah selama satu pekan." };
      mediaItems = [
        { id: "m1", media_type: "image", media_url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop" },
        { id: "m2", media_type: "image", media_url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop" }
      ];
    } else if (slug === 'kajian-kitab-kuning') {
      activity = { id: "2", title: "Kajian Kitab Kuning Bersama Pengasuh", description: "Dokumentasi kegiatan rutin mingguan kajian kitab kuning tingkat tinggi bagi santri kelas akhir Madrasah Aliyah." };
      mediaItems = [
        { id: "m3", media_type: "image", media_url: "https://images.unsplash.com/photo-1590400595304-45e0f760e5aa?q=80&w=800&auto=format&fit=crop" }
      ];
    } else if (slug === 'hari-santri-nasional') {
      activity = { id: "3", title: "Upacara Peringatan Hari Santri Nasional", description: "Rangkaian acara upacara bendera dan pawai obor memperingati Hari Santri Nasional." };
      mediaItems = [];
    }
  }

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Kegiatan tidak ditemukan</h1>
          <Link href="/ma" className="text-green-600 hover:underline">Kembali ke halaman MA</Link>
        </div>
      </div>
    );
  }

  const images = mediaItems?.filter(m => m.media_type === 'image') || [];
  const videos = mediaItems?.filter(m => m.media_type === 'video') || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ma" className="inline-flex items-center text-slate-500 hover:text-green-600 mb-6 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" /> Kembali ke Daftar Kegiatan
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{activity.title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">{activity.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">📸</span>
              Galeri Foto
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map(img => (
                <div key={img.id} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.media_url} alt="Dokumentasi" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {videos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">🎥</span>
              Video Dokumentasi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map(vid => (
                <div key={vid.id} className="rounded-2xl overflow-hidden shadow-md bg-black aspect-video flex items-center justify-center">
                  <iframe 
                    src={vid.media_url} 
                    className="w-full h-full"
                    allowFullScreen
                    title="Video Dokumentasi"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {images.length === 0 && videos.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
            <p className="text-slate-500 text-lg">Belum ada dokumentasi media untuk kegiatan ini.</p>
          </div>
        )}

      </div>
    </div>
  );
}
