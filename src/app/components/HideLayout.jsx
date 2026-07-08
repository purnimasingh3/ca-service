"use client";
import { usePathname } from "next/navigation";
import Header from "./common/Header";
import Footer from "./common/Footer";

export default function HideLayout({ children }) {
  const pathname = usePathname();

  // Agar aapka landing page ka URL "/landingpage" hai
  // Agar aapka main homepage hi landing page hai, toh isko: pathname === "/" kar dena.
  const isLandingPage = pathname.startsWith("/landingpage");

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