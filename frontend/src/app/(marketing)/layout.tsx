import { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      {/* Public website navbar */}

      <Navbar />

      {/* Current page */}

      {children}

      {/* Public website footer */}

      <Footer />
    </>
  );
}