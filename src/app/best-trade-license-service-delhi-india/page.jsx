import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.tradeLicense || {
  title: "Trade License Registration Services in India | Fintax Adviser",
  description: "Get Your Trade License Hassle-Free with Fintax Adviser. Expert consultation, 100% municipal compliance, and fast approval support across all states."
};

export default function TradeLicenseLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients",
    "Professional Compliance Experts",
    "Pan India Support"
  ];

  const faqs = [
    { q: "Is Trade License mandatory?", a: "In most municipalities, businesses operating commercial activities are required to obtain a Trade License." },
    { q: "Who issues a Trade License?", a: "Municipal Corporations, Municipal Councils, and Local Authorities issue Trade Licenses." },
    { q: "Can I apply online?", a: "Many municipal authorities now offer online application facilities." },
    { q: "How long does it take?", a: "Processing time varies depending on the local authority and business category." },
    { q: "Is Trade License renewable?", a: "Yes. Most Trade Licenses require periodic renewal as per municipal regulations." },
    { q: "Can startups apply?", a: "Yes. Startups and newly established businesses can obtain Trade Licenses." },
    { q: "Is GST required?", a: "GST requirements depend on the nature and turnover of the business." },
    { q: "Why choose Fintax Adviser?", a: "Professional assistance helps ensure accurate documentation, faster processing, and compliance with municipal regulations." }
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
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ LEGAL BUSINESS OPERATIONS · MUNICIPAL COMPLIANCE · FAST APPROVAL SUPPORT
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Trade License Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get Your Trade License Hassle-Free with Fintax Adviser - Your Compliance Partner. Quick & Efficient Service, guidance at every step, and 100% compliance with local laws.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
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
            Complete Guide to Trade License Registration Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for professional Trade License Registration services in India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides complete assistance for obtaining Trade Licenses for shops, businesses, offices, restaurants, manufacturers, traders, service providers, startups, and commercial establishments. A Trade License is a legal authorization issued by the local municipal authority that allows a business to operate within a specific jurisdiction while complying with local laws, public safety regulations, and business standards.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Types of Trade Licenses We Handle
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We provide expert support for all varieties of municipal trade authorizations across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Shop License</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Issued directly to retail businesses, trading storefronts, and commercial shops operating locally.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Industrial Trade License</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Strictly mandatory and required for all manufacturing operations, production setups, and industrial activities.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Food Establishment License</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Applicable across dining spaces including restaurants, hotels, cloud kitchens, processing units, and cafes.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Service Trade License</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Specifically tailored for fast-growing professionals, digital agencies, consultants, and diverse service providers.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Specialized Trade Licenses</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Certain complex industries may explicitly require extra municipal safety approvals based on operational scope.</p>
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
                Risks of Operating Without a Trade License
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Operating a commercial business workflow without a valid localized Trade License exposes your corporate setup to severe regulatory liabilities and government interventions.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Obtaining a Trade License helps avoid operational risks, guarantees smooth day-to-day work, and ensures compliance."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Monetary Penalties</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Substantial compounding fiscal fines imposed for unauthorized operations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Municipal Notices</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Legal and regulatory warnings requiring urgent explanations and immediate responses.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Closure Orders</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Enforced shutdowns or sealings of facilities by local government units.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Proceedings</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Protracted litigation and compliance lawsuits within municipal frameworks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Future Rejections</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">High risks of blacklisting or license rejection in future applications with municipal networks.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Trade License Registration
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A Trade License demonstrates that a business complies with local regulations and operates responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Legal Compliance</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Operate your business completely without regulatory intervention or municipal issues.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Business Credibility</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Build strong trust patterns among your customers, wholesale suppliers, and government authorities.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Avoid Penalties</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Prevent unexpected premium financial fines, standard warnings, and sealing orders.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Easier Approvals</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Extremely helpful while obtaining other critical core business registrations or government permissions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Better Banking Support</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Financial lending institutions and banks always prefer fully compliant businesses for loans.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Long-term Sustainability</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Ensures structural safety and seamless expansion without legal setbacks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs a Trade License?
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing comprehensive processing services across multiple business frameworks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm sm:text-sm font-bold text-slate-700">
            {['Shops & Retail Stores', 'Food Businesses', 'Restaurants & Cafes', 'Manufacturers & Industries', 'Offices & Service Providers', 'Clinics & Healthcare', 'Warehouses & Godowns', 'Trading Firms'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required and Process Grid */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Documents Required */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Documents Required
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Identity: Aadhaar Card & PAN Card",
                  "Address Proof: Electricity / Water Bill",
                  "Property Tax Receipt",
                  "Incorporation Certificate / Deed",
                  "Registered Rent Agreement",
                  "NOC from Property Owner",
                  "Business Activity Details",
                  "Premises Site Plan & Photos"
                ].map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Registration Process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Step-by-Step Execution
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Trade License Registration Process
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Step 1 - Consultation & Eligibility Check',
                  'Step 2 - Document Collection & Review',
                  'Step 3 - Application Form Preparation',
                  'Step 4 - Submission to Municipal Authority',
                  'Step 5 - Authority Verification & Inspection',
                  'Step 6 - Trade License Approval & Issuance'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
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
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}