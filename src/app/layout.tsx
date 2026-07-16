import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/components/Providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yayasan Al-Muhajirin | MA, MTs & Pondok Pesantren Jakarta",
    template: "%s | Al-Muhajirin",
  },
  description: "Yayasan Pendidikan Islam Al-Muhajirin menyediakan pendidikan berkualitas melalui Madrasah Aliyah, Madrasah Tsanawiyah, dan Pondok Pesantren di Jakarta Utara sejak 1978.",
  keywords: ["madrasah aliyah", "madrasah tsanawiyah", "pondok pesantren", "Al-Muhajirin", "Jakarta Utara", "pendidikan Islam", "PPDB"],
  authors: [{ name: "Yayasan Al-Muhajirin" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://almuhajirin.sch.id",
    siteName: "Yayasan Al-Muhajirin",
    title: "Yayasan Al-Muhajirin | MA, MTs & Pondok Pesantren Jakarta",
    description: "Pendidikan Islam berkualitas yang memadukan kurikulum nasional dan kepesantrenan di Jakarta Utara sejak 1978.",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Yayasan Al-Muhajirin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Al-Muhajirin",
    description: "Pendidikan Islam terpadu: MA, MTs & Pondok Pesantren Jakarta Utara.",
    images: ["/hero.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Yayasan Al-Muhajirin",
  "url": "https://almuhajirin.sch.id",
  "logo": "https://almuhajirin.sch.id/favicon.ico",
  "description": "Yayasan Pendidikan Islam Al-Muhajirin (MA, MTs, Pondok Pesantren)",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Teluk Gong Raya No. 1, Penjaringan",
    "addressLocality": "Jakarta Utara",
    "postalCode": "14450",
    "addressCountry": "ID"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <Providers>
          <NextTopLoader color="#16a34a" height={3} showSpinner={false} />
          {children}
          <Toaster position="top-right" richColors theme="system" />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
