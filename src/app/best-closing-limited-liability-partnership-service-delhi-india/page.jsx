import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.llpClosure;

export default function LLPClosureLanding() {
  const HERO_STATS = [
    "Expert Consultation",
    "Partner Consent Forms",
    "GST Cancellation Support",
    "Complete ROC Submission",
  ];

  const faqs = [
    { 
      q: "What is an LLP closure?", 
      a: "LLP closure is the legal process of removing a Limited Liability Partnership from the records maintained by the Registrar of Companies (ROC) after completing the applicable statutory procedures." 
    },
    { 
      q: "Can an inactive LLP be closed?", 
      a: "Yes. Subject to eligibility and compliance requirements, inactive LLPs may apply for closure." 
    },
    { 
      q: "Is tax compliance required before closing an LLP?", 
      a: "Yes. Applicable tax filings and statutory compliances should generally be reviewed and completed before initiating the closure process." 
    },
    { 
      q: "What documents are required?", 
      a: "The required documents vary depending on the LLP's circumstances but commonly include incorporation records, LLP agreement, PAN Card, bank records (bank statements, statement of accounts, balance sheets, profit & loss statements), ROC filings, tax records, and partner resolutions/consent letters." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "Our team provides comprehensive support for LLP closure, including eligibility assessment, accounting review, tax compliance, ROC filings, documentation preparation, and procedural guidance." 
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
                ⚡ Safe Winding-Up · Clear Records · Exit Easily
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Limited Liability Partnership
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (LLP) Closure Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                End-to-end support for limited liability partnership closure, ROC filings, tax compliance & post-closure assistance. Ideal for inactive, discontinued, or non-operational LLPs.
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
            Professional LLP Closure Services across India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every business has a lifecycle. While many businesses grow and expand, others may decide to discontinue operations due to strategic restructuring, financial considerations, completion of business objectives, or changing market conditions. When a Limited Liability Partnership (LLP) is no longer required, it is important to complete the legal closure process properly rather than simply stopping business activities.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Closing an LLP requires compliance with the Limited Liability Partnership Act, 2008, applicable Registrar of Companies (ROC) procedures, tax regulations, and statutory filing requirements. Failure to complete the closure process may result in ongoing compliance obligations, notices, penalties, and administrative complications.
          </p>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Common Challenges During LLP Closure
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Without professional support, partnerships frequently face blockers. Our experts help resolve:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Pending ROC filings",
              "Incomplete financial records",
              "Outstanding tax compliance",
              "Missing statutory documents",
              "Partner approval delays",
              "Accounting discrepancies",
              "GST-related issues",
              "Documentation errors"
            ].map((challenge, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 text-center font-medium text-slate-700 text-xs sm:text-sm">
                ❌ {challenge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive LLP Closure Workflows
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our experts guide you securely through all required statutory phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* LLP Consultation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">LLP Closure Consultation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Initial phase mapping of company assets, operational checks, and partner priorities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Business Activity Review</span>
                <span>✓ Compliance History</span>
                <span>✓ Tax Status Assessment</span>
                <span>✓ Timeline Estimation</span>
              </div>
            </div>

            {/* LLP Eligibility */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Eligibility Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We thoroughly analyze the LLP's status to select the exact legal pathway required.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Operational Status</span>
                <span>✓ Asset Position</span>
                <span>✓ Liability Audits</span>
                <span>✓ Partner Approvals</span>
              </div>
            </div>

            {/* ROC Filing Assistance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC Filing Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Precise preparation and review of mandatory files prior to Registrar submission.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ROC Documentation</span>
                <span>✓ Form Preparation</span>
                <span>✓ Filing Review</span>
                <span>✓ Submission Guidance</span>
              </div>
            </div>

            {/* Income Tax Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Our tax professionals verify and file the necessary direct income tax reports.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ITR Filings</span>
                <span>✓ Outstanding Liabilities</span>
                <span>✓ Tax Assessments</span>
                <span>✓ PAN Status Auditing</span>
              </div>
            </div>

            {/* GST Compliance Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Compliance Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete review and structured help regarding closing out active GST registrations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ GST Return Audits</span>
                <span>✓ GST Reconciliation</span>
                <span>✓ Cancellation Forms</span>
                <span>✓ Input Tax Credits</span>
              </div>
            </div>

            {/* Document Preparation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Partner Resolutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Drafting correct legal consent instruments required for registration sign-offs.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Partner Resolutions</span>
                <span>✓ Consent Letters</span>
                <span>✓ Affidavits</span>
                <span>✓ Indemnity Docs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Close an LLP Section */}
      <section id="why-accounting" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Close an LLP?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Rather than simply ignoring an inactive registration, closing an LLP removes ongoing file obligations and potential heavy delays.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Simply stopping business activities does not legally close an LLP. Unclosed LLPs remain liable for annual filing compliance."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Avoid Future ROC Filings</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Eliminate recurring document submissions to the ROC.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600 font-sans">Business Restructuring</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Clean up old registrations when transitioning into a Private Limited company.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Eliminate Financial Audits</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Stop paying for ongoing bookkeeping and tax reports for a defunct entity.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Partner Retirement</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Mutually wind down joint assets and responsibilities when partners retire.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sectors Served Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse professional entities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups & MSMEs', 'IT & Software Businesses', 'Consultants & Lawyers', 'Trading Businesses', 'Real Estate Businesses', 'Digital Marketing Agencies', 'Manufacturers', 'Logistics Companies'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer Block */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced CAs & CSs Team",
                  "End-to-End LLP Closure",
                  "ROC Filing Expertise",
                  "Tax & GST Support",
                  "Clear, Transparent Pricing",
                  "Secure Database Handling"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Understand business objectives and closure plans.</p>
                <p><strong>Step 2 - Eligibility Assessment:</strong> Review operations and compliance history.</p>
                <p><strong>Step 3 - Financial & Tax Review:</strong> Check books and close out tax records.</p>
                <p><strong>Step 4 - Documentation:</strong> Formulate partner declarations and resolutions.</p>
                <p><strong>Step 5 - ROC Filing:</strong> Complete required submissions with all attachments.</p>
                <p><strong>Step 6 - Regulatory Follow-Up:</strong> Track progress and handle queries.</p>
                <p><strong>Step 7 - Post-Closure Support:</strong> Help with GST cancellations and PAN updates.</p>
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