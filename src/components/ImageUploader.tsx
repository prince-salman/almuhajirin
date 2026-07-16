"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";

interface Props {
  value: string;
  onChange: (url: string) => void;
  bucket?: string;
}

export default function ImageUploader({ value, onChange, bucket = "public_images" }: Props) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setError("");
      const file = e.target.files?.[0];
      if (!file) return;

      if (file.size > 5 * 1024 * 1024) {
        setError("Ukuran file maksimal 5MB");
        return;
      }

      setIsUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, { cacheControl: '3600', upsert: false });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      onChange(publicUrl);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Gagal mengunggah gambar");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full">
      {value ? (
        <div className="relative w-full aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="relative w-full aspect-video bg-slate-50 dark:bg-slate-800/50 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex flex-col items-center justify-center gap-2 group">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
          ) : (
            <Upload className="w-8 h-8 text-slate-400 group-hover:text-green-500 transition-colors" />
          )}
          <div className="text-sm text-slate-500 font-medium">
            {isUploading ? "Mengunggah..." : "Klik atau seret gambar ke sini"}
          </div>
          <div className="text-xs text-slate-400">PNG, JPG, WEBP maks 5MB</div>
        </div>
      )}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
}
