import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://almuhajirin.sch.id";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ma`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/mts`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ponpes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ppdb`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/register`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/berita`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/galeri`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/prestasi`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/alumni`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
