"use client";

import { usePathname } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function HideLayout({ children }) {
  const pathname = usePathname();

  const isBlog =
    pathname === "/blogs" ||
    pathname.startsWith("/blogs/");

  return (
    <>
      {!isBlog && <Header />}

      {children}

      {!isBlog && <Footer />}
    </>
  );
}