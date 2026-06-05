import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

// Updated metadata pointer for Foreign Subsidiary services
export const metadata = servicesMetadata.foreignSubsidiary;

export default function ForeignSubsidiaryLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "100% Compliant with Indian Laws",
    "Transparent Pricing - No Hidden Charges",
  ];

  const KEY_FEATURES = [
    "Separate Legal Entity",
    "Foreign Ownership Allowed",
    "Limited Liability Protection",
    "Access to Indian Markets",
    "Eligible for FDI Investment",
    "Independent Operations in India",
    "Enhanced Business Credibility"
  ];

  const BENEFITS = [
    { title: "100% Foreign Ownership", desc: "Foreign investors can own up to 100% equity in many industries under the automatic route." },
    { title: "Separate Legal Identity", desc: "The subsidiary operates independently from the foreign parent company with limited liability protection." },
    { title: "Access to India's Economy", desc: "Capitalize on India's rapidly expanding market, huge potential, and endless localized growth." },
    { title: "Increased Brand Presence", desc: "A registered subsidiary significantly improves market credibility, trust, and consumer confidence." },
    { title: "Easy Capital Repatriation", desc: "Clean and structured capital repatriation pathways following clear FDI and FEMA frameworks." },
    { title: "Long Term Sustainability", desc: "Establish deep local operations, build native infrastructure, and scale cross-border workflows easily." }
  ];

  const PROCESS_STEPS = [
    { num: "01", title: "Consultation & FDI Assessment", desc: "Comprehensive review of planned business activity and foreign investment eligibility pathways." },
    { num: "02", title: "Document Collection", desc: "Verification, apostilling/legalization of foreign parent company declarations and director KYC." },
    { num: "03", title: "DSC & DIN Application", desc: "Obtaining required Digital Signature Certificates and Director Identification Numbers for all board members." },
    { num: "04", title: "Name Reservation", desc: "Structuring and submission of the proposed corporate names for formal approval from the MCA." },
    { num: "05", title: "Incorporation Filing", desc: "Drafting and filing SPICe+ forms alongside Memorandum (MOA) and Articles of Association (AOA)." },
    { num: "06", title: "Certificate of Incorporation", desc: "Formal review by corporate registrars followed by official issuance of the legal business certificate." },
    { num: "07", title: "PAN, TAN, GST & Compliance Setup", desc: "Completion of post-incorporation tax registrations, bank account openings, and capital remittance reporting." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Advanced Ambient UI Background Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Expand Globally · Grow Locally · India Your Next Destination
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Foreign Subsidiary
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Company Registration CA Firm in Delhi India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Establish your Foreign Subsidiary in India and unlock limitless opportunities in one of the world's fastest growing economies. Your Business. Our Expertise. We Make It Happen.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Supported Countries Footer Element inside Hero */}
              <div className="pt-6 text-center lg:text-left border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Trusted by Businesses Across</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start text-sm font-bold text-slate-600">
                  <span>USA</span>•<span>UK</span>•<span>UAE</span>•<span>SINGAPORE</span>•<span>AUSTRALIA</span>•<span>CANADA</span>•<span>GERMANY</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white text-center px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Expert Support Now
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
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Expert Foreign Subsidiary Registration Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the <strong className="text-blue-600 font-semibold">Best Foreign Subsidiary Company Registration CA Firm in Delhi India</strong>? 
            Fintax Adviser provides complete structural configuration setups for overseas businesses, multinational corporations, foreign investors, startups, and international organizations planning to establish their presence in India. 
            A Foreign Subsidiary Company is an Indian company in which a foreign corporation owns more than 50% of the shareholding, operating as a separate legal entity while remaining securely controlled by the foreign parent setup.
          </p>
        </div>
      </section>

      {/* Features Tracker Layout */}
      <section className="py-12 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">Key Structural Features</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-center text-xs sm:text-sm font-bold text-slate-700">
            {KEY_FEATURES.map((feature) => (
              <div key={feature} className="px-5 py-3.5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                ✨ {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Registration Step-by-Step */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our End-to-End Registration Framework
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive legal, tax, FEMA, RBI, and MCA filing operations executed seamlessly by specialized corporate advisory teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance / Document Requirements Section */}
      <section id="documentation" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column Text details */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Required Documentation Matrix
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To guarantee fully compliant setups, the Ministry of Corporate Affairs (MCA) and RBI regulatory laws require authenticated global tracking records from both the corporate entity and foreign directors.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "All foreign corporate documents and identity certificates must be properly apostilled or legalized in their home country prior to submission within India."
                </p>
              </div>
            </div>

            {/* Right Column Structured Boxes */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Parent Company Files</h4>
                <ul className="text-xs text-slate-600 mt-2 space-y-1.5 list-disc list-inside">
                  <li>Certificate of Incorporation</li>
                  <li>Memorandum & Articles of Association</li>
                  <li>Official Board Resolution</li>
                  <li>Complete Shareholding Details</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Director Verification</h4>
                <ul className="text-xs text-slate-600 mt-2 space-y-1.5 list-disc list-inside">
                  <li>Valid Global Passport copy</li>
                  <li>International Address Proof files</li>
                  <li>Recent Passport Photographs</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Indian Registered Office</h4>
                <ul className="text-xs text-slate-600 mt-2 space-y-1.5 list-disc list-inside">
                  <li>Formal Rent Agreement copy</li>
                  <li>Recent Utility Bill (Electricity/Water)</li>
                  <li>NOC from Property Owner</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Business Specifics</h4>
                <ul className="text-xs text-slate-600 mt-2 space-y-1.5 list-disc list-inside">
                  <li>Proposed Company Names</li>
                  <li>Detailed Business Activity Summaries</li>
                  <li>Planned Capital Structure Layouts</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="benefits" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Establishing an Indian Subsidiary
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Capitalize on regional frameworks while retaining cross-border control mechanisms safely under automatic routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{benefit.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ideal Structural Pathways For
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing tailored corporate initialization across global sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Foreign Corporations', 'International Startups', 'Technology (IT/SaaS) Companies', 'Manufacturing Businesses', 'Trading & Import-Export', 'Global Consulting Firms'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 flex items-center justify-center transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served Globally",
                  "Expert In-House CA & Compliance Team",
                  "Complete FDI & FEMA Support Lifecycle",
                  "100% Pan India Compliant Operations",
                  "Completely Transparent Pricing Matrix"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our multidisciplinary international corporate wing structures your operations safely around Foreign Direct Investment rules, handling RBI notifications seamlessly.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Services Offered by Fintax Adviser
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Foreign Subsidiary Registration',
                  'FDI Advisory Services',
                  'DSC & DIN Registration',
                  'Company Name Approval',
                  'PAN & TAN Registration',
                  'GST Registration Setup',
                  'FEMA Compliance Management',
                  'Annual ROC Compliance & Filings',
                  'Tax & Regulatory Advisory'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    {srv}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Can a foreign company own 100% of an Indian subsidiary?", a: "Yes, in many sectors under the automatic FDI route, foreign companies can own 100% equity subject to applicable sector regulations." },
              { q: "Is RBI approval required for setting up a foreign subsidiary?", a: "It depends completely on the business sector and the specific FDI route applicable. Most standard sectors fall under the automatic route requiring simple post-facto intimate reporting rather than prior approval." },
              { q: "How long does the foreign subsidiary registration take?", a: "Generally, the verification, name setup, and final incorporation take between 10-20 working days depending on how quickly international documents are apostilled." },
              { q: "Can foreign nationals become directors in the Indian company?", a: "Yes. Foreign nationals can act as directors subject to obtaining a valid DIN and maintaining compliance, provided at least one director on the board is a resident of India." },
              { q: "What is the ultimate advantage of an Indian foreign subsidiary?", a: "It sets up an entirely separate legal entity with limited liability protection and grants clear, direct operational access to target India's rapidly growing consumer economy." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-base">{faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}