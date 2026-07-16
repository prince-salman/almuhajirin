import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import SplashScreen from "@/components/SplashScreen";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <SplashScreen />
      <AnnouncementBanner />
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
