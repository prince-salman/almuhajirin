"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem("banner-closed");
    if (!closed) setVisible(true);
  }, []);

  const close = () => {
    sessionStorage.setItem("banner-closed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-green-700 text-white text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
      <span className="text-center">
        PPDB 2025/2026 Sudah Dibuka! Daftar Sekarang Sebelum Kuota Penuh.
      </span>
      <Link
        href="/register"
        className="flex-shrink-0 bg-white text-green-700 font-bold px-3 py-1 rounded-full text-xs hover:bg-green-50 transition-colors"
      >
        Daftar
      </Link>
      <button
        onClick={close}
        className="absolute right-4 text-white/70 hover:text-white transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
