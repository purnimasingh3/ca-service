"use client";

import { usePathname } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function HideLayout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname.startsWith("/landingpage/");

  return (
    <>
      {!hideLayout && <Header />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}