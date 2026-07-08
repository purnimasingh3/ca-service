"use client";
import { usePathname } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function HideLayout({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/landingpage")|| pathname === "/thank-you";

  return (
    <>
   
      {!isLandingPage && <Header />}

      <main className="flex-grow">
        {children}
      </main>

     
      {!isLandingPage && <Footer />}
    </>
  );
}