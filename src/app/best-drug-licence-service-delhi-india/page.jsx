import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.drugLicence || {
  title: "Best Drug License Registration Consultant in Delhi India | Fintax Adviser",
  description: "Get Drug License for your Pharmacy, Medical Store, Wholesale, Manufacturing or Distribution Business with expert guidance from Fintax Adviser.",
};

export default function PremiumDrugLicenseLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "Expert CA & Compliance Team",
    "500+ Happy Clients Served",
    "Fast | Reliable | 100% Compliant",
  ];

  const faqs = [
    { q: "Is a Drug License mandatory for a medical store?", a: "Yes, a valid Drug License is a mandatory requirement to sell medicines legally." },
    { q: "Who issues a Drug License?", a: "The State Drug Control Department or Drug Licensing Authority issues Drug Licenses." },
    { q: "Can I apply for both Retail and Wholesale Drug Licenses?", a: "Yes, businesses can apply for both licenses subject to eligibility parameters and applicable structural regulations." },
    { q: "Is a registered pharmacist required?", a: "For most retail pharmacy operations, a qualified registered pharmacist is generally required." },
    { q: "How long does the registration process take?", a: "The processing timeline depends entirely on document readiness, premises layout planning, and specific department approval procedures." },
    { q: "Can online pharmacies obtain a Drug License?", a: "Yes, online medicine businesses must strictly comply with applicable licensing requirements and standard guidelines." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ FAST | RELIABLE | 100% COMPLIANT
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Best Drug License
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  CA Firm in Delhi India
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get Your Drug License for your Pharmacy, Medical Store, Wholesale, Manufacturing, or Distribution Business with professional end-to-end guidance from Fintax Adviser.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Quick Contact */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Trusted Partner for Business Compliance & Drug License Services
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-4">
            <p>
              Looking for professional Drug License Registration services in India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides complete assistance for obtaining Drug Licenses for wholesalers, retailers, pharmacies, medical stores, hospitals, clinics, distributors, and pharmaceutical businesses across India.
            </p>
            <p>
              A Drug License is a mandatory approval issued by the State Drug Control Department under the <strong className="text-slate-900 font-medium">Drugs and Cosmetics Act, 1940</strong>, for businesses involved in the manufacture, sale, distribution, storage, or import of medicines and pharmaceutical products.
            </p>
            <p>
              With 12+ Years of Experience and 500+ Happy Clients Served, Fintax Adviser offers reliable and hassle-free Drug License Registration services for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">What is a Drug License?</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A Drug License is a legal authorization issued by the Drug Control Authority that permits businesses to sell, stock, distribute, manufacture, or import pharmaceutical products and medicines.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Obtaining a valid Drug License ensures compliance with Indian pharmaceutical regulations and helps businesses operate legally in the healthcare sector.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-[#071c3d]">Your License to Safe Business</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-base sm:text-lg text-slate-600">
                Operating without this standard certification can yield severe legal constraints. Ensure smooth workflows and continuous operational legitimacy with our fast filing architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Licenses Provided Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Drug Licenses We Provide
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Comprehensive end-to-end categorization services tailored precisely to your corporate operational footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* License 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Retail Drug License (RDL)</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Required for medical stores, pharmacies, and retail medicine sellers interacting with primary end-consumers.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Medical Store • Pharmacy</span>
            </div>

            {/* License 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wholesale Drug License (WDL)</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Required for large-scale wholesale distributors, B2B networks, and structural pharmaceutical suppliers.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Distributors • Suppliers</span>
            </div>

            {/* License 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Manufacturing Drug License</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Required for physical corporate businesses manufacturing active proprietary medicines and complex pharmaceutical goods.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Factories • Production</span>
            </div>

            {/* License 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Import Drug License</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Required legally for importing foreign drugs, global medicines, and raw health components into Indian boundaries.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Global Importers</span>
            </div>

            {/* License 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Loan License</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Issued for entities using a licensed manufacturer's facility to produce pharmacy materials without owning physical factory premises.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Contract Manufacturing</span>
            </div>

            {/* License 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Restricted Drug License</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Issued for retail or specialized entities dealing exclusively with precise custom categories or formulations of medicines.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Specialized Products</span>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-slate-100 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl">
                Why is Drug License Registration Important?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Operating a medical venture requires highly strict systematic alignments. Missing compliance protocols can cause sudden transactional stops and severe structural department audits.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-sm font-semibold text-blue-600 leading-relaxed">
                  "Build legal authenticity, protect consumer safety parameters, and unlock active access to multi-state pharmaceutical procurement systems safely."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Legal Compliance", desc: "Operate your pharmacy or pharmaceutical business completely within the boundaries of the law." },
                { title: "Business Credibility", desc: "Build instant trust among customers, corporate suppliers, hospitals, and medical healthcare institutions." },
                { title: "Sale of Medicines", desc: "Obtain the mandatory legal structural verification required for distributing prescription and non-prescription formulas." },
                { title: "Regulatory Approval", desc: "Ensure persistent compliance loops configured directly to State Drug Control Department regulations." },
                { title: "Business Expansion", desc: "A mandatory core asset required for distributors, retail networks, and modern online medicine delivery entities." }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 border border-slate-200 bg-slate-200 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-base uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-md text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Who Needs a Drug License Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Needs a Drug License?
            </h2>
            <p className="text-sm sm:text-base text-slate-500">Providing precision compliance management fit for diverse organizational scopes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-base font-bold text-slate-700">
            {[
              "Medical Stores", "Retail Pharmacies", "Wholesale Drug Distributors", 
              "Pharmaceutical Companies", "Hospitals & Clinics", "Diagnostic Centers", 
              "Healthcare Product Suppliers", "Online Pharmacy Businesses", 
              "Importers & Exporters of Medicines"
            ].map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-500 transition-colors flex items-center justify-center">
                <span className="text-blue-700 block text-base md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for Drug License Registration
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A comprehensive checklist required to establish clean department verifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Business Docs</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-start gap-2">✔ Proprietorship / Partnership / LLP / Company Registration Proof</li>
                <li className="flex items-center gap-2">✔ PAN Card</li>
                <li className="flex items-center gap-2">✔ GST Registration</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Address Proof</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-center gap-2">✔ Electricity Bill</li>
                <li className="flex items-start gap-2">✔ Rent Agreement or Ownership Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Pharmacist Docs</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-start gap-2">✔ Registered Pharmacist Certificate</li>
                <li className="flex items-start gap-2">✔ Educational Qualification Certificates</li>
                <li className="flex items-start gap-2">✔ Appointment Letter (if applicable)</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Identity & Premises</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-center gap-2">✔ Aadhaar & PAN Card</li>
                <li className="flex items-center gap-2">✔ Passport Size Photos</li>
                <li className="flex items-center gap-2">✔ Layout Plan</li>
                <li className="flex items-center gap-2">✔ Premises Information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Simple Process Blueprint
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A structured, 6-step workflow designed for optimal approval speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { step: 1, title: "Consultation", desc: "Assessment of business requirements and license category allocation." },
              { step: 2, title: "Document Verify", desc: "Collection, deep structural checking, and validation of records." },
              { step: 3, title: "Application Filing", desc: "Precise drafting and submission of Drug License forms on portals." },
              { step: 4, title: "Department Review", desc: "Rigorous review and active space inspection by the Drug Control Authority." },
              { step: 5, title: "Approval", desc: "Official issuance of your functional Drug License documentation." },
              { step: 6, title: "Compliance Support", desc: "Ongoing regulatory backing, advice, and updates for legal clarity." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Benefits of Drug License Registration</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Legal Authorization to Sell Medicines",
              "Improved Business Credibility",
              "Regulatory Compliance",
              "Access to Pharmaceutical Supply Chains",
              "Business Expansion Opportunities",
              "Eligibility for Government Tenders & Contracts",
              "Increased Customer Trust",
              "Smooth Operations in Healthcare Industry"
            ].map((benefit, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-lg">✓</span>
                <span className="text-slate-800 text-base font-semibold leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Trust Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-500 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years of Experience",
                  "500+ Happy Clients",
                  "Expert Compliance Team",
                  "Fast Processing Layouts",
                  "Affordable Pricing Metrics",
                  "Pan India Online Services"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-slate-200 border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-base font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-md text-blue-500 leading-relaxed pt-4 border-t border-slate-800 max-w-lg">
                Trusted by pharmacies, distribution houses, and pharmaceutical companies across India. Backed by expert tax compliance specialists and operational managers providing dedicated corporate consultation.
              </p>
            </div>

            {/* Right Column: Address & Quick Summary Information Card */}
            <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20 inline-block">
                  Corporate Hub
                </span>
                <h3 className="text-2xl font-black text-white mt-3">Fintax Adviser Network</h3>
              </div>
              <div className="space-y-4 text-base text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Our Office Location</span>
                  <span className="font-bold text-white">Delhi, India</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Core Strategy Focus</span>
                  <span className="font-bold text-white">Tax Compliance | Growth Blueprint</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400 font-medium">Operational Scope</span>
                  <span className="font-bold text-white">Pan-India Virtual Processing</span>
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Your Trusted Partner for Business Compliance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}