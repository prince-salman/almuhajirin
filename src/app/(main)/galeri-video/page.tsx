"use client";

import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { useState } from "react";

export default function GaleriVideoPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: "M7lc1UVf-VE", title: "Profil Yayasan Pendidikan Islam Al-Muhajirin", category: "Profil" },
    { id: "t0Q2otsqC4I", title: "Kegiatan PORSENI Santri 2024", category: "Kegiatan" },
    { id: "1vYNYn-s25I", title: "Kajian Rutin Kitab Kuning Bersama Pengasuh", category: "Pengajian" },
    { id: "QhBnZ6NPOY0", title: "Wisuda & Pelepasan Siswa Kelas Akhir 2024", category: "Acara" },
    { id: "J7U3L5_QxIM", title: "Fasilitas & Lingkungan Pondok Pesantren", category: "Fasilitas" },
    { id: "C0DPdy98e4c", title: "Muhadharah (Latihan Pidato 3 Bahasa)", category: "Kegiatan" }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Galeri Video</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Saksikan berbagai cuplikan kegiatan, fasilitas, dan dokumentasi menarik lainnya.
          </p>
        </div>

        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setActiveVideo(null)}>
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm group cursor-pointer"
              onClick={() => setActiveVideo(vid.id)}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play size={24} />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {vid.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {vid.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
          >
            <Video size={20} /> Kunjungi YouTube Kami
          </a>
        </div>
      </div>
    </div>
  );
}
