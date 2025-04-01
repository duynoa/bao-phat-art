import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-gray-50">
      <Header />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
  );
} 