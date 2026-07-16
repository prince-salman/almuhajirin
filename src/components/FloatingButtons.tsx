"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <a
        href="https://wa.me/6288219618682"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle size={20} />
        <span className="text-sm font-semibold hidden sm:block">Hubungi Kami</span>
      </a>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
