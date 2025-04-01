"use client";

import Navbar from "@/components/NavbarAdmin";
import Sidebar from "@/components/SidebarAdmin";
import { useState } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-[200px]" : "ml-20"
        }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
