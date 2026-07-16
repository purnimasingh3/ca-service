import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.rocCompliance;

export default function ROCComplianceLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "Accurate & Reliable",
    "100% Legal Compliance",
  ];
  const faqs = [
    { q: "What is ROC Compliance?", a: "ROC Compliance refers to mandatory filings and legal obligations that companies must complete with the Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA)." },
    { q: "Is ROC filing mandatory for all companies?", a: "Yes, all registered corporate entities (including Private Limited, OPC, and Section 8 companies) must complete annual ROC compliance." },
    { q: "What happens if ROC filing is delayed?", a: "Delayed filing attracts additional fees, accumulating statutory penalties, legal notices, and risks of director disqualification." },
    { q: "What common forms are used in ROC filing?", a: "The foundational compliance forms include Form AOC-4 (for financial reporting), Form MGT-7 (Annual Return), Form DIR-3 KYC, and Form ADT-1." },
    { q: "Can Fintax Adviser handle long overdue or pending filings?", a: "Yes. We regularly assist corporate entities in analyzing, structuring, and cleanly submitting overdue and pending corporate filings." }
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
                ⚡ Stay Compliant · Stay Protected · Stay Ahead
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                ROC Compliance Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Complete ROC & MCA Filing Support for Your Company's Legal Compliance. Get timely and accurate ROC filing with expert assistance to eliminate compliance stress.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
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
            Professional ROC Compliance Consultant in Delhi, India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your reliable partner for complete ROC Compliance, Annual ROC Filing, MCA Compliance Services, and corporate secretarial support. Running a company does not end with registration. Every company registered under the Companies Act must maintain proper statutory compliance and file mandatory returns with the Registrar of Companies (ROC). Missing deadlines can result in penalties, notices, director disqualification, and legal complications.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our ROC Compliance Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive legal and secretarial solutions to ensure your firm stands perfectly aligned with MCA mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual ROC Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We handle complete annual financial and legal accounting reporting directly to the registry framework.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> AOC-4 Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MGT-7 Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Statements</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Director Reports</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Compliance Docs</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">DIR-3 KYC Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintain your active status and safeguard directors from systemic validation dropouts.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Director KYC Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DIN Update Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Verification Help</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Active Monitoring</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ADT-1 Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Streamlined administrative tracking for statutory auditor transitions and legal appointments.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Auditor Appointment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Document Prep</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MCA Submission</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Review</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Board Meetings & Secretarial</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end support keeping all standard backend meeting documentation flawless.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Resolution Drafting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Minutes Preparation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Statutory Registers</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Secretarial Records</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive corporate structural verification for secure yearly portfolio submissions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Preparation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MCA Form Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Status Tracking</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Director Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete legal mapping designed to minimize corporate governance risks and operational blocks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Active Status Holds</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Change Management</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Disqualification Defenses</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="importance" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why ROC Compliance is Important for Companies
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Proper ROC Compliance Services shield your firm from legal liability, structural penalties, and corporate governance downfalls. Staying fully compliant preserves market value and protects leadership.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Late filing may result in heavy additional fees, legal notices, and risks of partner disqualification. Prevention is always the smarter business asset strategy."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Avoid Heavy Penalties</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Keeps your enterprise isolated away from severe cumulative late filing fees.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Maintain Legal Status</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Keeps your latest active firm parameters fully searchable and clean on the central MCA portal.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Protect Directors</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Mitigates systemic DIN blocking and director disqualification risks entirely.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Improve Business Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Builds uncompromised, immediate financial trust with commercial lending networks and banks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Support Funding & Venture Expansion</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Institutional venture investors strictly favor legally clean entities during technical due diligence checks.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-blue-50/60 border-t border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Documents Required for ROC Filing
            </h2>
            <p className="text-slate-600 text-sm mt-2">Please ensure you have these core structural files ready for our compliance review team.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="text-lg font-bold text-[#071c3d] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" /> Company Parameters
              </h3>
              <ul className="space-y-2.5 text-slate-600 text-sm">
                <li className="flex items-center gap-2">✔ Certificate of Incorporation</li>
                <li className="flex items-center gap-2">✔ Company PAN Card</li>
                <li className="flex items-center gap-2">✔ MOA & AOA documents</li>
                <li className="flex items-center gap-2">✔ Financial Statements</li>
                <li className="flex items-center gap-2">✔ Director KYC Details & Shareholding Profiles</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="text-lg font-bold text-[#071c3d] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" /> Compliance Records
              </h3>
              <ul className="space-y-2.5 text-slate-600 text-sm">
                <li className="flex items-center gap-2">✔ Board Meeting Records & Resolutions</li>
                <li className="flex items-center gap-2">✔ Active Statutory Auditor Details</li>
                <li className="flex items-center gap-2">✔ Company Bank Statements</li>
                <li className="flex items-center gap-2">✔ Signed Annual Reports</li>
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
              Who Needs ROC Compliance Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We actively manage filings across various legal entity formats.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-sm font-bold text-slate-700">
            {[
              { title: 'Private Limited Companies', desc: 'Mandatory annual compliance and MCA filings.' },
              { title: 'One Person Company (OPC)', desc: 'Regular statutory and simplified registry reporting.' },
              { title: 'Section 8 Companies', desc: 'Non-profit operational compliance and reporting support.' },
              { title: 'Startups', desc: 'Maintain pristine legal standing from inception.' },
              { title: 'Growing Businesses', desc: 'Avoid heavy penalties and maintain strict corporate governance.' }
            ].map((entity, i) => (
              <div key={i} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 text-left hover:border-blue-400 transition-all">
                <h4 className="text-blue-600 font-bold mb-1">{entity.title}</h4>
                <p className="text-xs font-normal text-slate-500 leading-relaxed">{entity.desc}</p>
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
              Our ROC Compliance Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A clear, structured 5-step roadmap engineered for effortless submission tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {[
              { step: "1", title: "Compliance Review", desc: "We review company status and pending filings thoroughly." },
              { step: "2", title: "Doc Collection", desc: "Financial and statutory documents are systematically verified." },
              { step: "3", title: "Return Prep", desc: "Required structural forms and reports are accurately drafted." },
              { step: "4", title: "MCA Filing", desc: "Returns are securely filed directly via the official MCA portal." },
              { step: "5", title: "Monitoring", desc: "Continuous support and proactive deadline alerts provided." }
            ].map((p) => (
              <div key={p.step} className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">{p.step}</div>
                <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{p.title}</h5>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#e0f2fe] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert MCA Consultants",
                  "Fast Filing Process",
                  "Affordable Tailored Packages",
                  "Complete Secretarial Support",
                  "Annual Compliance Management",
                  "Dedicated In-House Assistance"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#071c3d]">
                  Additional Corporate Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Incorporation Services',
                  'GST Registration',
                  'Trademark Registration',
                  'MSME Registration',
                  'Import Export Code Registration',
                  'PF & ESI Registration',
                  'Labour Law Compliance',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200"
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
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}