import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-gray-50">
      <Header />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
