import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.factoryLicense;

export default function FactoryLicenseLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "Expert Compliance Team",
    "Pan India Services",
  ];

  const faqs = [
    { q: "Is Factory License mandatory?", a: "It depends on the nature of manufacturing activities, workforce size, and applicable state regulations." },
    { q: "Who issues Factory Licenses?", a: "Generally, the Factory Inspectorate or Labour Department of the respective state government." },
    { q: "Can a factory operate without a license?", a: "Operating without required approvals may result in penalties and legal action." },
    { q: "Is factory inspection required?", a: "Many cases involve inspection before approval, subject to applicable regulations." },
    { q: "How long does it take to obtain a Factory License?", a: "The timeline depends on documentation, state-specific requirements, and approval procedures." },
    { q: "Can Factory Licenses be renewed?", a: "Yes, renewal requirements vary according to applicable state regulations." },
    { q: "Why choose professional assistance?", a: "Professional support helps ensure proper documentation, compliance, and smoother approval processes." }
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
                ⚡ SAFE WORKPLACE · LEGAL OPERATION · STRONGER BUSINESS
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Factory License
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Registration Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get your Factory License and operate your manufacturing business legally with complete compliance under the Factories Act. 
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
            Factory License Registration Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Starting or operating a manufacturing unit in India often requires compliance with various labor, safety, and industrial regulations. One of the most important approvals is the <strong className="text-blue-600 font-semibold">Factory License</strong>, which helps ensure worker safety, legal compliance, and smooth business operations. Fintax Adviser provides professional corporate compliance assistance for manufacturers, industrial units, processing plants, production facilities, warehouses, and factories across India.
          </p>
        </div>
      </section>

      {/* Overview Matrix Section */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What is a Factory License?</h3>
              <p className="text-blue-700 text-md leading-relaxed mb-4">
                A Factory License is a legal authorization issued by the concerned State Labour Department or Factory Inspectorate under the applicable Factories laws. It is generally required for manufacturing units where power-driven machinery or specific thresholds of workforces are deployed to drive manufacturing activity.
              </p>
              <ul className="space-y-2 text-sm font-semibold text-slate-600">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Manufacturing activities carried out using power with prescribed worker limits.</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Manufacturing activities carried out without power with prescribed worker limits.</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Industrial operations involving complex production processes.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Core Regulatory Objectives</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The absolute core purpose of licensing infrastructure under the Factories Act frameworks centers around managing structured parameters inside physical facility workspaces:
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-slate-500">
                <span className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">🔒 Employee Safety</span>
                <span className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">🏥 Workplace Health Standards</span>
                <span className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">⚙️ Industrial Compliance</span>
                <span className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">🌱 Environmental Responsibility</span>
                <span className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 col-span-2 text-center">🛡️ Proper Working Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="who-needs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Who Needs a Factory License?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Factory License registration may be applicable across multiple diversified manufacturing categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manufacturing Units", desc: "Production and processing facilities layout workflows." },
              { title: "Industrial Plants", desc: "Factories engaged structurally in heavy industrial operations." },
              { title: "Food Processing Units", desc: "Businesses involved in commercial food manufacturing & packaging." },
              { title: "Engineering & Fabrication", desc: "Industrial machinery assembly line setups and fabrication units." },
              { title: "Chemical Manufacturing", desc: "Units handling industrial chemical elements & production lines." },
              { title: "Textile & Garment Factories", desc: "Mass manufacturing facilities stationed in the textile sector." },
              { title: "Packaging Units", desc: "Businesses involved directly in mass packing and labeling operations." },
              { title: "Large Warehousing Operations", desc: "Where manufacturing or processing activities are actively undertaken." }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Factory License Registration Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "Step 1", title: "Business Assessment", desc: "Review of factory operations and licensing requirements." },
              { step: "Step 2", title: "Documentation", desc: "Collection and verification of necessary state documents." },
              { step: "Step 3", title: "Application Prep", desc: "Preparation of the customized Factory License application layout." },
              { step: "Step 4", title: "Government Filing", desc: "Submission with the concerned state structural authority." },
              { step: "Step 5", title: "Site Inspection", desc: "Site inspection by the relevant department inspectorate if applicable." },
              { step: "Step 6", title: "License Approval", desc: "Factory License issuance after successful system verification." }
            ].map((p, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-xl text-center flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase">{p.step}</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-3 mb-1.5">{p.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-important" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Factory License Registration is Important
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A Factory License helps businesses operate legally and avoid regulatory issues. Failing to adhere to compliance structures compromises industrial workflows and exposes systems to massive legal hazards.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "BUILD COMPLIANCE · PROTECT WORKERS · GROW CONFIDENTLY"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Authorization</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Allows eligible manufacturing units to operate as per applicable regulations without friction.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Worker Safety</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Ensures strict adherence to workplace health and prescribed safety standards layout metrics.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Avoid Penalties</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevents costly fines, immediate factory notices, and legal complications arising from non-compliance.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Credibility</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Builds unshakeable trust with corporate government authorities, customers, investors, and vendors.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Easier Expansion & Industrial Growth</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Facilitates seamless approvals for downstream corporate business growth and continuous industrial system expansion.</p>
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
              Benefits of Factory License Registration
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Secure an operational pathway that satisfies institutional compliance filters nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Compliance with Industrial Laws</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Operate completely within the statutory legal framework established by the Labour Department blueprints.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Enhanced Worker Safety</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Rigorous implementation of prescribed state safety standards preserves overall structural human resource capital.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Improved Business Reputation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Demonstrates a firm, authentic corporate commitment to valid legal frameworks and ethical plant operations.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Easier Regulatory Inspections</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Maintain neat, verified compliance records and official approvals to pass spontaneous auditor checkups smoothly.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Better Business Opportunities</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Become highly preferred by institutional buyers, global procurement ecosystems, and large corporate houses.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Smooth Operational Management</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Drastically reduces everyday exposure to localized administrative shutdowns or costly legal enforcement interruptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Documents & Ecosystem Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Documents Required */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Documents Required for Registration
                </h2>
                <p className="text-slate-600 text-xs">The required checklist components vary marginally depending on individual state rules and the specific factory baseline:</p>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Business Registration (COI / Deed)",
                  "Identity & Address Proofs (PAN/Aadhaar)",
                  "Factory Premises Ownership Documents",
                  "Lease / Registered Rent Agreements",
                  "Site Plan & Detailed Factory Layout",
                  "Building & Machinery Layout Plans",
                  "Electricity & Water Utility Connections",
                  "Employee Count & Shift Information",
                  "Fire Safety Approvals / NOC Docs"
                ].map((doc) => (
                  <div key={doc} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">✓</div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Extended Compliance Ecosystem Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Industrial Ecosystem
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Common Compliance Requirements for Factories
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">Beyond basic licensing protocols, operational manufacturing installations require ongoing structural upkeep across integrated regulatory domains:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Labour Law Registrations',
                  'Professional Tax Registration',
                  'ESI Registration Frameworks',
                  'EPF Allocation Management',
                  'Fire Safety Compliance Audits',
                  'Pollution Control Approvals (CTO/CTE)',
                  'Local Trade License Alignment',
                  'Building Safety Structural Certificates'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                    {srv}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">Why Choose Fintax Adviser?</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  We render end-to-end assistance encompassing expert licensing paperwork alignment, affordable transparent service packages, fast processing pipelines, and ongoing structural compliance support across all Indian states.
                </p>
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