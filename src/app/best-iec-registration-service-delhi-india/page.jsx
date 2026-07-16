import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.iec;
export default function PremiumIECLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "100% DGFT Compliant",
    "Fast & Hassle-Free Process",
  ];
  const faqs = [
    { q: "What is IEC Registration?", a: "Import Export Code (IEC) is a unique 10-digit registration number issued by the Director General of Foreign Trade (DGFT), Ministry of Commerce, Government of India for tracking global trade." },
    { q: "Is IEC mandatory for an export business?", a: "Yes. Most commercial import and export activities crossing international borders legally require active IEC registration." },
    { q: "Who explicitly issues the Import Export Code?", a: "The code is officially managed and generated online by the Director General of Foreign Trade (DGFT)." },
    { q: "Can service exporters apply for IEC?", a: "Yes. Service providers or agencies receiving overseas client payments can obtain IEC to keep transactions legitimate." },
    { q: "Is IEC required for e-commerce exports?", a: "Yes, online merchants selling internationally through overseas storefront platforms require proper documentation." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Advanced Ambient UI Background Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                🌐 Global Opportunities · Start Import & Export Legally
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Import Export Code
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (IEC) Registration in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Your first step towards global business success. Issued by DGFT, Ministry of Commerce & Industry, Government of India. Expand internationally and reach new markets with confidence.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 text-center active:scale-95">
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
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Best IEC Registration Consultant in Delhi, India – Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your trusted partner for complete IEC Registration Services, DGFT Registration, Import Export License Registration, and international trade compliance solutions. If you are planning to start an import-export business, sell products internationally, export services, expand globally, or trade across borders, obtaining an Import Export Code (IEC) is one of the first legal requirements.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our IEC Registration Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              At Fintax Adviser, we provide complete digital end-to-end support to ensure effortless international trade compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">New IEC Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete digital onboarding and secure 10-digit identification setup across standard ministry guidelines.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Online Application</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DGFT Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Docs Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Application Filing</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Certificate Assistance</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">IEC Modification Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Need to update business information? We assist with making official structural changes quickly through official routes.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Address Changes</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Name</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Contact Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Director Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Bank Detail Changes</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Core Corrections</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Renewal & Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintain valid verification standing. Complete profile protection monitoring systematically year-on-year.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DGFT Compliance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profile Verification</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Documentation Management</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-funding" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why is IEC Registration Important for Businesses?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many entrepreneurs want to expand internationally but ignore legal requirements. Import Export Code serves as the ultimate legal identity mandatory for crossing trade borders safely.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Without IEC Registration, businesses face critical hurdles in custom checkpoints, foreign pay processing, and global banking setups."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Start Legally</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Fulfill mandatory government guidelines to start importing or exporting commercial goods seamlessly.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Expand Globally</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Gain unhindered access to showcase, market, and sell products in lucrative international markets.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Receive Foreign Payments</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Clear overseas multi-currency incoming business capital safely without corporate account freezes.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Smooth Customs Clearance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensure rapid cross-border tracking verification through custom data ports with zero friction.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Access Government Benefits & Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Claim lucrative export promotion benefits and incentive schemes. Build instant trust with international buyers who prefer strictly compliant businesses.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Required Matrix Section */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for IEC Registration
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Our experts verify all files meticulously to avoid any application rejection or processing delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">For Proprietorship</h3>
              <ul className="text-slate-700 text-sm space-y-2 font-medium">
                <li className="flex items-center gap-2">📌 PAN Card</li>
                <li className="flex items-center gap-2">📌 Aadhaar Card</li>
                <li className="flex items-center gap-2">📌 Address Proof</li>
                <li className="flex items-center gap-2">📌 Bank Details</li>
                <li className="flex items-center gap-2">📌 Mobile & Email ID</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">For Companies & LLPs</h3>
              <ul className="text-slate-700 text-sm space-y-2 font-medium">
                <li className="flex items-center gap-2">🏢 Incorporation Certificate</li>
                <li className="flex items-center gap-2">🏢 Company PAN Card</li>
                <li className="flex items-center gap-2">🏢 MOA & AOA Layouts</li>
                <li className="flex items-center gap-2">🏢 Director IDs & Proofs</li>
                <li className="flex items-center gap-2">🏢 Bank Certificate / Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-4">For Partnership Firms</h3>
              <ul className="text-slate-700 text-sm space-y-2 font-medium">
                <li className="flex items-center gap-2">🤝 Partnership Deed</li>
                <li className="flex items-center gap-2">🤝 Firm PAN Card</li>
                <li className="flex items-center gap-2">🤝 Registered Address Proof</li>
                <li className="flex items-center gap-2">🤝 Partner Details & IDs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Import Export Code Registration?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We assist across diverse industrial sectors with expert trade strategies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Manufacturers', 'Import Businesses', 'Export Companies', 'E-commerce Exporters', 'Service Providers', 'Wholesalers', 'Food Export Units', 'Handicraft Businesses'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Import Export Code Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-stage blueprint engineered to get your venture globally authorized.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Consultation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Understanding specific business goals and operational activities.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Verification</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Assembling and meticulously checking core entity documentation.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">DGFT Filing</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Preparing and digitally submitting applications on the portal.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">DGFT Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">The department reviews submitted applications and credentials.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative sm:col-span-2 md:col-span-1">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Issuance</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">10-digit number generated and safe global export guidance provided.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-blue-50 text-slate-900 border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser as Your IEC Consultant?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Clients Successfully Served",
                  "Expert DGFT Portal Support",
                  "Affordable Service Packages",
                  "Quick Digital Processing",
                  "Dedicated Export Consultants"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-200 max-w-md">
                We help businesses move smoothly from domestic marketplaces over to international legal success models.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration Support',
                  'FSSAI Registration Setup',
                  'PAN & TAN Applications',
                  'PF & ESI Registration',
                  'Labour Law Compliance',
                  'Trademark Protection Filings',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping Services'
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
      <section id="faqs" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}