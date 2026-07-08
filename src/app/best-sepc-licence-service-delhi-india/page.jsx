import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.sepcRegistration || {
  title: "Professional SEPC Registration Services India | Fintax Adviser",
  description: "Get SEPC (Services Export Promotion Council) Registration for your service business with expert guidance from Fintax Adviser.",
};

export default function PremiumSEPCRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert Export Compliance Team",
    "500+ Happy Clients Served",
    "Fast | Reliable | 100% Virtual Support",
  ];

  const faqs = [
    { q: "What is SEPC?", a: "SEPC stands for Services Export Promotion Council, established to promote service exports from India." },
    { q: "Is SEPC Registration mandatory?", a: "It may not be mandatory for all service exporters, but it is highly beneficial for businesses engaged in international service exports." },
    { q: "Who can apply for SEPC Registration?", a: "Any eligible service provider or company exporting services from India can apply." },
    { q: "Is IEC required for SEPC Registration?", a: "Yes, an Import Export Code (IEC) is generally required." },
    { q: "How long does the registration process take?", a: "The timeline depends on document verification and approval by the concerned authority." },
    { q: "Can startups apply for SEPC Registration?", a: "Yes, startups and emerging service exporters can obtain SEPC membership." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-3 h-3 rounded-full bg-blue-600 animate-ping" />
                ⚡ RECOGNIZE • EXPORT • GROW GLOBALLY
              </span>

              <h1 className="text-3xl sm:text-3xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.2]">
                Professional SEPC
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-3">
                  Registration Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Your partner in service export success. Expand your services, access official promotion benefits, and explore global markets.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-5 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-md shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-700 text-md sm:text-md">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-6">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* HERO RIGHT PREMIUM FORM */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Intro Section */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-2xl sm:text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional SEPC Registration Assistance by Fintax Adviser
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-6">
            <p>
              Looking for reliable SEPC Registration Services in India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides complete assistance for obtaining SEPC (Services Export Promotion Council) Registration for service exporters, IT companies, digital marketing agencies, consultants, freelancers, education service providers, healthcare service providers, and other businesses engaged in exporting services.
            </p>
            <p>
              With 15+ Years of Experience and 500+ Happy Clients Served, Fintax Adviser offers professional support for SEPC registration and export compliance across India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-3xl font-bold text-slate-900">What is SEPC Registration?</h3>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                SEPC (Services Export Promotion Council) is an organization established by the Ministry of Commerce & Industry, Government of India, to promote the export of services from India.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                SEPC Registration helps service exporters obtain recognition and access various export promotion benefits, networking opportunities, international trade events, and government support schemes.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-2xl font-bold text-[#071c3d]">Your Gateway to Global Scale</h4>
              <div className="h-1.5 w-24 bg-blue-600 rounded"></div>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Connect with global clients seamlessly and ensure your enterprise benefits from official trade council updates and strategic insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-24 bg-slate-100 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-3xl lg:text-4xl">
                Benefits of SEPC Registration
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Accelerating trade credentials demands institutional alignment. Tap into active government promotion incentives reliably.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Export Recognition", desc: "Gain official structural recognition as a certified and registered Indian service exporter." },
                { title: "Global Opportunities", desc: "Access global markets through curated trade fairs, exhibitions, and premium buyer-seller events." },
                { title: "Government Support", desc: "Avail key structural benefits and export promotion initiatives announced by the Government." },
                { title: "Industry Networking", desc: "Connect directly with prominent industry leaders, global exporters, and corporate buyers." },
                { title: "Credibility Booster", desc: "Drastically enhance commercial validation levels among premium international clients." }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 border border-slate-200 bg-slate-200 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-md uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-base text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl lg:text-4xl">
              Who Can Apply for SEPC Registration?
            </h2>
            <p className="text-lg text-slate-500">Configured accurately for diverse modern digital and advisory domains.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center font-bold text-slate-700">
            {[
              "IT & Software Companies", "Digital Marketing Agencies", "BPO & KPO Companies",
              "Management Consultants", "Legal & Professional Providers", "Educational Institutions",
              "Healthcare Service Providers", "Architects & Engineers", "Financial Consultants",
              "Freelancers Exporting Services", "Startups & Service Businesses"
            ].map((title, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-500 transition-colors flex items-center justify-center">
                <span className="text-blue-700 block text-md md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl text-slate-900">
              Documents Required for SEPC Registration
            </h2>
            <p className="text-slate-600 text-lg">
              Keep these ready to process your council files smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Tax Proofs</h3>
              <ul className="text-slate-700 text-md space-y-3 font-medium">
                <li className="flex items-start gap-2">✔ Permanent PAN Card</li>
                <li className="flex items-start gap-2">✔ GST Registration copy</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Trade Codes</h3>
              <ul className="text-slate-700 text-md space-y-3 font-medium">
                <li className="flex items-start gap-2">✔ Import Export Code (IEC)</li>
                <li className="flex items-start gap-2">✔ Certificate of Incorporation</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Finance</h3>
              <ul className="text-slate-700 text-md space-y-3 font-medium">
                <li className="flex items-start gap-2">✔ Official Address Proof</li>
                <li className="flex items-start gap-2">✔ Cancelled Bank Cheque</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Profile</h3>
              <ul className="text-slate-700 text-md space-y-3 font-medium">
                <li className="flex items-start gap-2">✔ Comprehensive Business Profile</li>
                <li className="flex items-start gap-2">✔ Service Export Breakdown Metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              SEPC Registration Process Blueprint
            </h2>
            <p className="text-slate-600 text-lg">
              Structured step-by-step handling from collection to formal certificate delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 relative">
            {[
              { step: 1, title: "Consultation", desc: "Understanding operational tracks and checking criteria eligibility." },
              { step: 2, title: "Collection", desc: "Assembling and structural validation of files." },
              { step: 3, title: "Drafting", desc: "Careful preparation of the membership portal profile documentation." },
              { step: 4, title: "Submission", desc: "Formal filing on the official Services Export Promotion Council registry." },
              { step: 5, title: "Verification", desc: "Detailed administrative processing by council authorities." },
              { step: 6, title: "Issuance", desc: "Delivery of your approved SEPC Membership Certificate." }
            ].map((p) => (
              <div key={p.step} className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-md uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-md text-slate-500 ">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer */}
      <section className="py-24 bg-slate-100 text-white w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1.5 bg-blue-500 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years of Export Clearance Expertise",
                  "500+ Happy Corporate Clients Served",
                  "Dedicated Export Compliance Managers",
                  "Fast Architecture & Timeline Management",
                  "Affordable and Fixed Package Pricing",
                  "Pan India Support Architecture"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4 bg-slate-200 border border-slate-800 p-5 rounded-xl shadow-xs transition-colors">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/10 text-blue-500 font-bold text-base shrink-0">
                      ✓
                    </div>
                    <span className="text-md font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded border border-blue-500/20 inline-block">
                  Export Desk
                </span>
                <h3 className="text-3xl font-black text-white mt-3">Fintax Adviser Network</h3>
              </div>
              <div className="space-y-4 text-md text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Corporate Base</span>
                  <span className="font-bold text-white">Delhi, India</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Core Strategy Focus</span>
                  <span className="font-bold text-white">Export Logistics & Compliance Logistics</span>
                </div>
              </div>
              <div className="bg-slate-950 p-5 rounded-xl text-center border border-slate-800">
                <p className="text-sm uppercase font-bold text-slate-400 tracking-wider">Your Trusted Partner for Global Compliance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}