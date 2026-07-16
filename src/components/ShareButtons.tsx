"use client";

import { Share2, Link as LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ShareButtons({ title, text }: { title: string, text?: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleShare = (platform: string) => {
    let shareUrl = "";
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    
    switch (platform) {
      case "wa":
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
      case "fb":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link disalin ke clipboard!");
        return;
    }
    
    if (shareUrl) window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
        <Share2 size={16} /> Bagikan:
      </span>
      <button onClick={() => handleShare("wa")} className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </button>
      <button onClick={() => handleShare("copy")} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-600 hover:text-white transition-colors">
        <LinkIcon size={14} />
      </button>
    </div>
  );
}
