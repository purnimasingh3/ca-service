import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.rocCompliancePublicLimited;

export default function ROCAnnualComplianceLanding() {
  const HERO_STATS = [
    "100% Compliant",
    "Audit Ready",
    "Investor Trusted",
    "CA Led Support",
  ];

  const faqs = [
    { 
      q: "What is ROC compliance for Public Limited Companies?", 
      a: "It is the mandatory annual filing and reporting required under the Companies Act, 2013." 
    },
    { 
      q: "Is ROC compliance mandatory for Public Companies?", 
      a: "Yes, it is compulsory regardless of revenue or business activity." 
    },
    { 
      q: "What happens if compliance is not done on time?", 
      a: "It leads to penalties, legal issues, and potential director disqualification." 
    },
    { 
      q: "Do Public Companies need audits?", 
      a: "Yes, statutory audits are mandatory every year." 
    },
    { 
      q: "Can Agreetech manage complete compliance?", 
      a: "Yes, we provide full end-to-end ROC compliance services." 
    }
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
                ⚡ COMPLETE MCA FILING · STATUTORY COMPLIANCE & CORPORATE GOVERNANCE SERVICES
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                ROC Annual Compliances
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  of Public Limited Company
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Timely MCA Filings. Avoid Penalties & Legal Risks. Strong Governance & Transparency. Build Investor Confidence. Let Agreetech manage your compliance so you can focus on growing your business.
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
            Investors Trusted. Business Protected.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            <strong className="text-blue-600 font-semibold">Agreetech ROC Annual Compliance Services</strong> provides complete end-to-end compliance management for Public Limited Companies registered under the Companies Act, 2013. We ensure timely filing of annual returns, financial statements, board reports, and all statutory requirements with the Ministry of Corporate Affairs (MCA). Public Limited Companies in India are subject to strict corporate governance, disclosure requirements, and regulatory compliance standards. Even a small delay or error can lead to penalties, legal consequences, and reputational risks.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Key ROC Annual Compliance Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Expert care and complete compliance tracking to protect your company from penalties and structural risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Return Filing (MGT-7)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">The annual return contains detailed structural and operational parameters tracking corporate equity movements.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Shareholding Pattern</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Directors & KMP</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Changes</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Registered Office</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Statement Filing (AOC-4)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Public Limited Companies must file comprehensive audited corporate financial reports annually.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Balance Sheet</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit & Loss A/C</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Flow Statement</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> XBRL Filing Support</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Director KYC (DIR-3 KYC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Every serving corporate director must complete validation actions before statutory deadline limits.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DIN Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Identity Validation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Address Proofs</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Record Updates</span>
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
                What is ROC Annual Compliance?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                ROC annual compliance refers to the mandatory yearly filings and disclosures that Public Limited Companies must submit to the Registrar of Companies (ROC) under MCA regulations to ensure absolute transparency across all commercial frameworks.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Even a small delay or error in ROC compliance can lead to penalties, legal consequences, and structural corporate risks."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Filing Penalties</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid heavy daily monetary fines and additional government fees.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Director Risks</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Protect board elements against suspension or statutory disqualifications.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Investor Trust</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevent negative impacts on equity confidence and institutional financing options.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">MCA Actions</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Defend operations from legal enforcement notices and non-compliance flags.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Step-by-Step Section */}
      <section className="py-24 bg-slate-100 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Step-by-Step ROC Compliance Process</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">Structured workflow execution ensures perfect timelines for your Public Limited entity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { step: "01", name: "Compliance Review", desc: "We analyze your company's current financial and historical compliance status metrics." },
              { step: "02", name: "Data Collection", desc: "We collect financial statements, board reports, and necessary statutory documents." },
              { step: "03", name: "Audit Coordination", desc: "Our professionals coordinate directly with corporate auditors for financial verification items." },
              { step: "04", name: "Form Preparation", desc: "We map and prepare MGT-7, AOC-4, and all related secondary statutory forms safely." },
              { step: "05", name: "MCA Portal Filing", desc: "We process and upload all certified compliance documents on the live MCA portal channels." },
              { step: "06", name: "Approval Records", desc: "We track processing workflows to ensure successful validation and update registers." }
            ].map((proc) => (
              <div key={proc.step} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-sm transition-all">
                <div className="text-2xl font-black text-blue-600 mb-2">{proc.step}</div>
                <h4 className="font-bold text-base text-slate-900 mb-1">{proc.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Agreetech */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Agreetech
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "End-to-end MCA Handling",
                  "Chartered Accountant Supervision",
                  "Accurate and Timely Filings",
                  "Audit Coordination Support",
                  "CSR Compliance Assistance",
                  "Transparent Reporting System"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Required Documents */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                Documents Required For ROC Annual Filing
              </h3>
              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <h5 className="font-bold text-blue-600 uppercase mb-1">Financial Records</h5>
                  <p>Audited Balance Sheet, Profit & Loss Account, Cash Flow Statement, Auditor Report, Trial Balance</p>
                </div>
                <div>
                  <h5 className="font-bold text-blue-600 uppercase mb-1">Company Credentials</h5>
                  <p>Certificate of Incorporation, PAN of Company, MOA & AOA, Shareholding details, updated Director list</p>
                </div>
                <div>
                  <h5 className="font-bold text-blue-600 uppercase mb-1">Governance Proofs</h5>
                  <p>Board meeting minutes, AGM resolutions, Statutory registers, and previous year ROC filing reports</p>
                </div>
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