import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.isiCertification;

export default function ISICertificationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Across India",
    "Expert Core Technical Team",
    "End-to-End BIS Assistance",
  ];

  const faqs = [
    { q: "Is ISI Certification mandatory for all products?", a: "No. Certification requirements depend on the specific product category and applicable BIS regulations." },
    { q: "Who issues ISI Certification?", a: "The Bureau of Indian Standards (BIS) is the sole statutory authority responsible for issuing ISI Certification." },
    { q: "Can startups apply for ISI Certification?", a: "Yes. Eligible manufacturers, including startups and MSMEs, can apply to achieve a quality benchmark." },
    { q: "Does certification require product testing?", a: "Many product categories explicitly require sample testing through BIS-approved laboratories." },
    { q: "How long does the certification process take?", a: "The timeline depends on product category compliance parameters, testing procedures, factory inspection routines, and regulatory review protocols." },
    { q: "Can foreign manufacturers obtain BIS certification?", a: "Yes, foreign production setups can attain compliance certifications subject to applicable BIS structural schemes." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ QUALITY ASSURED · STANDARDS CERTIFIED · TRUST DELIVERED
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                ISI Certification
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Registration Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                ISI Certification by Bureau of Indian Standards (BIS) is a hallmark of quality, safety, and reliability. It ensures your products comply with Indian Standards and are accepted across the Indian market.
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
            Get BIS ISI Certification for Your Products with Expert Guidance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Manufacturing quality products is important, but demonstrating compliance with Indian quality standards is equally essential. <strong className="text-blue-600 font-semibold">ISI Certification</strong> helps manufacturers establish product reliability, meet statutory regulatory requirements, and build deep customer trust across consumer frameworks. Fintax Adviser assists startups, MSMEs, and established industrial entities across India handling diverse manufacturing pipelines.
          </p>
        </div>
      </section>

      {/* Product Category Spectrum */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-slate-900">Products Commonly Covered Under ISI Certification</h3>
            <p className="text-slate-500 text-xs mt-1">Various product categories require absolute statutory BIS marks depending on government quality control orders (QCOs):</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs font-bold text-slate-700">
            {[
              'Electrical Appliances', 'Switches & Sockets', 'Cables & Wires', 
              'Steel Products', 'Cement Products', 'Packaged Drinking Water', 
              'LPG Equipment', 'Household Goods', 'Construction Materials', 'Industrial Equipment'
            ].map((prod) => (
              <div key={prod} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-blue-500 transition-colors flex items-center justify-center">
                {prod}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process Steps */}
      <section id="process" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              ISI Certification Registration Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Navigating technical quality standards efficiently requires systematic compliance workflows:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Product Assessment", text: "Identifying applicable Indian Standard (IS) frameworks and exact testing/certification parameters." },
              { step: "02", title: "Documentation Review", text: "Collection, mapping, and precise verification of core corporate business and factory records." },
              { step: "03", title: "Application Preparation", text: "Compiling and filing formal documentation portals directly within the Bureau of Indian Standards framework." },
              { step: "04", title: "Product Testing", text: "Routing physical product test samples through designated and approved BIS-recognized laboratory networks." },
              { step: "05", title: "Factory Evaluation", text: "On-site physical inspection, system assessment, and verification of production processes by official BIS inspectors." },
              { step: "06", title: "Certification Approval", text: "Granting of the prestigious ISI Mark authorization license after successful validation of all compliance records." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section id="advantages" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why ISI Certification Matters for Businesses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Today's consumers and government authorities expect products to meet established safety and quality benchmarks. The ISI mark acts as an uncompromised competitive differentiator.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "MARK OF QUALITY · TRUSTED NATIONWIDE · BETTER QUALITY BETTER TOMORROW"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Legal Compliance", desc: "Meets mandatory statutory BIS obligations for notified items smoothly." },
                { title: "Consumer Trust", desc: "Builds long-term market confidence with verified performance metrics." },
                { title: "Market Advantage", desc: "Improves corporate brand positioning and commercial buyer acceptance paths." },
                { title: "Business Growth", desc: "Unlocks enterprise scale, opening up vendor enrollment lines seamlessly." },
                { title: "Procurement Access", desc: "Facilitates seamless entry into major profitable government procurement tenders." },
                { title: "Risk Mitigation", desc: "Reduces regulatory and quality non-compliance operational liabilities." }
              ].map((item, i) => (
                <div key={i} className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Target Segments Matrix */}
      <section className="py-20 bg-sky-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Can Apply for ISI Certification?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing quality framework mapping across all configurations of industrial manufacturing units:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-xs font-bold text-slate-700">
            {[
              'Domestic Manufacturers', 'MSMEs & Tiny Units', 'Industrial Startups',
              'Private Limited Companies', 'LLPs & Partnerships', 'Export-Oriented Units'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Documents & Value Split Container */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Documents Matrix Checklist */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Documents Required Checklist
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "PAN Card & GST Registration Details",
                  "Company Incorporation Certificate (COI)",
                  "Valid Factory License Approvals",
                  "Detailed Manufacturing Process Flowchart",
                  "Plant Capacity & Machinery Specifications",
                  "Technical Product Design Documentations",
                  "In-house Quality Control Lab Procedures",
                  "Authorized Signatory Identification Proofs",
                  "Existing Product Test Reports (if applicable)"
                ].map((doc) => (
                  <div key={doc} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Why Business Assistance Matters */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Expert Execution
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Why Businesses Choose Professional Assistance
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Obtaining an authentic ISI Certification involves navigating precise technical standards, strict factory testing procedures, and complex legal document mappings. Engaging professional support protects you from:
                </p>
              </div>

              <div className="space-y-3 text-xs font-semibold text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:bg-red-50/40 transition-colors">❌ Complex Standard Interpretation Errors</div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:bg-red-50/40 transition-colors">❌ Application Rejection due to Flawed Documentation Layouts</div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:bg-red-50/40 transition-colors">❌ Prolonged Testing Loop Delays & Lab Coordination Bottlenecks</div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 hover:bg-red-50/40 transition-colors">❌ Unpreparedness and Failures During Official BIS Factory Inspections</div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed mt-4 pt-4 border-t border-slate-100 text-center font-medium">
                Fintax Adviser provides end-to-end certification assistance with full industry knowledge, transparent processes, and Pan-India tracking.
              </p>
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