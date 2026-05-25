import Image from "next/image";
import BannerSection from "./components/home-components/BannerSection";
import TrustedSection from "./components/home-components/TrustedSection";
import ServiceSection from "./components/home-components/ServiceSection";
import ExperienceSection from "./components/home-components/ExperienceSection";
import TestemonialSection from "./components/home-components/TestemonialSection";

export default function Home() {
  return (
    <>
      <BannerSection />
      <TrustedSection />
      <ExperienceSection />
      <ServiceSection />
      <TestemonialSection />

    </>
  );
}
