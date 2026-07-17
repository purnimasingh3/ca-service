import BannerSection from "./components/home-components/BannerSection";
import TrustedSection from "./components/home-components/TrustedSection";
import ServiceSection from "./components/home-components/ServiceSection";
import ExperienceSection from "./components/home-components/ExperienceSection";
import TestemonialSection from "./components/home-components/TestemonialSection";
import PopularOfferings from "./components/home-components/PopularOffering";
import ExperienceDesign from "./components/common/ExperienceDesign";
// import { FaWhatsapp } from 'react-icons/fa';
// import { Phone } from "lucide-react";
export default function Home() {
  return (
    <>
      <BannerSection />
      <TrustedSection />
      <PopularOfferings/>
      <ExperienceSection />
      <ExperienceDesign/>
      <ServiceSection />
      <TestemonialSection />

      {/* <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
        <a
          href="https://wa.me/+919990924477"
          target="_blank"
          rel="noreferrer"
          className="h-12 w-12 bg-emerald-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
        >
          <FaWhatsapp className="h-6 w-6 text-white " />
        </a>
        <a
          href="tel:+919990924477"
          className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
          title="Call Senior Advisor Desk"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div> */}

    </>
  );
}
