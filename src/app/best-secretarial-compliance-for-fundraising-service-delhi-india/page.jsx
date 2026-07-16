import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata configuration using servicesMetadata reference
export const metadata = servicesMetadata?.secretarialComplianceFundraising || {
  title: "Secretarial Compliance for Fundraising | Fintax Adviser",
  description: "Ensure Investment Readiness & Regulatory Compliance. Professional Secretarial Compliance for Startup Fundraising by Fintax Adviser.",
  canonial:"https://fintaxadviser.com/best-secretarail-compilance-for-fundraising-service-delhi-india"
};

export default function SecretarialComplianceFundraising() {
  const HERO_STATS = [
    "Investor Ready Compliance",
    "Board & Shareholder Support",
    "ROC Filing & Documentation",
    "Share Allotment Compliance",
  ];

  const faqs = [
    { 
      q: "What is secretarial compliance for fundraising?", 
      a: "It includes the corporate governance, documentation, approvals, and statutory filings required before and after raising investment to ensure your company is legally secure and audit-ready." 
    },
    { 
      q: "Why do investors review secretarial records?", 
      a: "Investors conduct legal due diligence to verify that the company is fully compliant, properly governed, and that all historical equity issuances were executed in accordance with applicable laws." 
    },
    { 
      q: "Is ROC filing required during fundraising?", 
      a: "Yes. Certain fundraising transactions (such as private placements or preferential allotments) require specific filing submissions with the Registrar of Companies (ROC), depending on your transactional structure and applicable law." 
    },
    { 
      q: "Do startups need secretarial compliance?", 
      a: "Absolutely. Maintaining robust and clean compliance profiles helps startups close funding rounds significantly faster, prevents valuation penalties, and builds deep investor confidence." 
    },
    { 
      q: "What is a Cap Table?", 
      a: "A capitalization table records the entire equity ownership structure of the company, including founder shares, investor equity stakes, share transfer histories, and ESOP pools." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide comprehensive, end-to-end secretarial compliance support, helping businesses prepare professionally for fundraising, survive intensive investor due diligence, and secure long-term corporate governance." 
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Compliant Today · Investor Ready Tomorrow
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Secretarial Compliance
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  for Fundraising in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                We help startups and growing businesses stay 100% compliant with corporate laws and documentation so you can focus on raising capital and scaling. Ensure investment readiness and simplify investor due diligence.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95 text-center">
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
            Professional Secretarial Compliance for Startup Fundraising by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Planning to raise funds from Angel Investors, Venture Capital (VC) firms, High Net-Worth Individuals (HNIs), Family Offices, or Private Equity Investors? Proper <strong className="text-blue-600 font-semibold">Secretarial Compliance for Fundraising</strong> is essential to ensure your business is legally compliant, investment-ready, and prepared for due diligence. Fintax Adviser provides end-to-end secretarial support under the Companies Act, 2013, helping you build strong corporate governance.
          </p>
        </div>
      </section>

      {/* What & Why Info Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">What is Secretarial Compliance for Fundraising?</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Secretarial compliance for fundraising refers to the legal and corporate governance activities a company must complete before, during, and after raising capital. These compliances help ensure that investment transactions are properly authorized, documented, and reported to relevant regulatory authorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Why is Secretarial Compliance Important Before Fundraising?</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Investors expect clean, compliant corporate records. Missing statutory filings or incorrect documentation can delay or even derail investment transactions. Proper compliance establishes a bulletproof framework for legal due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Fundraising Secretarial Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end legal and administrative support engineered to get you investor-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Compliance Review */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Compliance Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive review of your company's secretarial and statutory records.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Incorporation Docs</span>
                <span>✓ Shareholding Structure</span>
                <span>✓ Statutory Registers</span>
                <span>✓ ROC Filing Status</span>
              </div>
            </div>

            {/* Board Meetings */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Board Meeting Documentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparing precise documentation required for critical fundraising decisions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Board Notices</span>
                <span>✓ Resolutions & Agendas</span>
                <span>✓ Meeting Minutes</span>
                <span>✓ Investment Approvals</span>
              </div>
            </div>

            {/* Shareholder Approvals */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Shareholder Approvals</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Execution and generation of required shareholder approval credentials.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ EGM Notices</span>
                <span>✓ Special Resolutions</span>
                <span>✓ Consent Letters</span>
                <span>✓ Voting Records</span>
              </div>
            </div>

            {/* ROC Filing */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC Filing Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Drafting and submitting applicable statutory forms with the Registrar of Companies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Form Preparation</span>
                <span>✓ Record Updates</span>
                <span>✓ Compliances</span>
                <span>✓ ROC Submissions</span>
              </div>
            </div>

            {/* Share Allotment */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Share Allotment Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Assisting in the entire legal process of issuing shares to incoming investors.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Share Certificates</span>
                <span>✓ Member Register</span>
                <span>✓ Capital Updates</span>
                <span>✓ Record Upkeep</span>
              </div>
            </div>

            {/* Cap Table Management */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cap Table Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ongoing capitalization maintenance and ownership updates across funding rounds.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Founder Equity</span>
                <span>✓ ESOP Allocations</span>
                <span>✓ Share Transfers</span>
                <span>✓ Dilution Modeling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Checklist Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Secretarial Compliance Checklist Before Fundraising
            </h2>
            <p className="text-slate-600 mt-2">Ensure you tick these off before approaching prospective investors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Company Incorporation Records Updated",
              "Statutory Registers Maintained",
              "ROC Filings Completed",
              "Shareholding Records Verified",
              "Board Resolutions Available",
              "Share Certificates Issued",
              "Financial Statements Updated",
              "Compliance Calendar Followed",
              "Corporate Records Organized",
              "Legal Documentation Reviewed"
            ].map((check, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span className="text-slate-700 font-medium text-sm sm:text-base">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document & Details Section */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Documents Required for Corporate Evaluation
            </h2>
            <p className="text-slate-600 mt-2">Comprehensive paperwork structured to streamline the governance process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-3">
              <h4 className="font-bold text-lg text-blue-600 border-b pb-2 border-slate-200">Corporate Documents</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Certificate of Incorporation</li>
                <li>• Memorandum of Association (MOA)</li>
                <li>• Articles of Association (AOA)</li>
                <li>• CIN Details</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-3">
              <h4 className="font-bold text-lg text-blue-600 border-b pb-2 border-slate-200">Shareholding Records</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Cap Table</li>
                <li>• Share Certificates</li>
                <li>• Share Register</li>
                <li>• Previous Allotment Records</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-3">
              <h4 className="font-bold text-lg text-blue-600 border-b pb-2 border-slate-200">Secretarial Records</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Board Meeting Minutes</li>
                <li>• Shareholder Meeting Minutes</li>
                <li>• Resolution Copies</li>
                <li>• Statutory Registers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Pain Points */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Common Compliance Issues Found During Fundraising</h3>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex gap-2">⚠️ <strong className="text-red-600">Pending ROC filings</strong> leading to compliance gaps.</li>
                <li className="flex gap-2">⚠️ <strong className="text-red-600">Incorrect share allotments</strong> without formal valuations.</li>
                <li className="flex gap-2">⚠️ <strong className="text-red-600">Missing board resolutions</strong> and untracked minutes.</li>
                <li className="flex gap-2">⚠️ <strong className="text-red-600">Incomplete statutory registers</strong> and outdated share records.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Benefits of Professional Compliance</h3>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex gap-2">🟢 <strong className="text-green-700">Investment Ready Business:</strong> Smooth investor audits.</li>
                <li className="flex gap-2">🟢 <strong className="text-green-700">Faster Due Diligence:</strong> Quick, organized review metrics.</li>
                <li className="flex gap-2">🟢 <strong className="text-green-700">Strong Investor Confidence:</strong> Reflects professional maturity.</li>
                <li className="flex gap-2">🟢 <strong className="text-green-700">Reduced Legal Risks:</strong> Compliant and safe operations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors & Businesses We Help
            </h2>
            <p className="text-sm text-slate-500 mt-1">Empowering diverse corporate spaces with legal readiness.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups', 'Private Limited Companies', 'LLPs', 'SMEs & MSMEs', 'Tech Companies', 'SaaS Businesses', 'D2C Brands', 'Growth-Stage Startups'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Delivery Process */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Compliance Team",
                  "Startup-Focused Advisory",
                  "End-to-End Documentation",
                  "Investor-Ready Solutions",
                  "Affordable & Clear Pricing",
                  "Confidential Data Handling"
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

            {/* Right Box: Process Tracking */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Secretarial Compliance Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Understanding your fundraising schedules and corporate limits.</p>
                <p><strong>Step 2 - Compliance Review:</strong> Executing a thorough audit of active company documents.</p>
                <p><strong>Step 3 - Gap Identification:</strong> Identifying historical structural anomalies or unfiled documents.</p>
                <p><strong>Step 4 - Documentation Preparation:</strong> Structuring appropriate shareholder resolutions and corporate documents.</p>
                <p><strong>Step 5 - Regulatory Filings:</strong> Filing necessary forms with regulatory departments efficiently.</p>
                <p><strong>Step 6 - Investment Readiness:</strong> Final validation of clean, accessible records for fast investor review.</p>
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