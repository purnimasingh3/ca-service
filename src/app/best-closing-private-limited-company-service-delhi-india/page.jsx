import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.companyClosure;

export default function CompanyClosureLanding() {
  const HERO_STATS = [
    "ROC File Assistance",
    "Tax & GST Compliance",
    "Expert Documentation",
    "Post-Closure Support",
  ];

  const faqs = [
    { 
      q: "What is a Private Limited Company closure?", 
      a: "It is the legal process of removing a company from the records maintained by the Registrar of Companies (ROC) after completing the applicable legal procedures." 
    },
    { 
      q: "Can an inactive company be closed?", 
      a: "Yes. Subject to eligibility and compliance with applicable legal requirements, inactive companies may apply for closure through the appropriate process." 
    },
    { 
      q: "Is tax compliance required before closing a company?", 
      a: "Businesses should review and complete applicable tax and statutory compliances before initiating the closure process." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Common documents include incorporation records (Certificate of Incorporation, MOA, AOA, PAN Card, CIN), financial statements (bank statements, statement of accounts), ROC filings, tax records, board resolutions, shareholder approvals, and identity/address documents of directors." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide professional assistance with company closure, ROC compliance, tax review, documentation preparation, and regulatory support, helping businesses complete the closure process in an organized and compliant manner." 
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
                ⚡ Close Your Company the Right Way. Stay Compliant.
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Private Limited Company
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Closure Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                End-to-end support for private limited company closure, ROC filings, tax compliance & post-closure assistance. Ideal for inactive, discontinued, or non-operational companies.
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
            Professional Private Limited Company Closure Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Closing a Private Limited Company is a legal process that requires careful planning, regulatory compliance, and timely filing of documents with the relevant authorities. Whether a company has become inactive, completed its business objectives, or is no longer financially viable, it is important to follow the prescribed legal procedure to avoid future compliance obligations and penalties.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Our team of Chartered Accountants, Company Secretaries, and legal professionals assists businesses with company strike-off, voluntary closure, regulatory filings, documentation, tax compliance, and post-closure support across India.
          </p>
        </div>
      </section>

      {/* Why Close Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Why Close a Private Limited Company?
            </h2>
            <p className="text-slate-600">
              Businesses may decide to close a company for several legitimate reasons, including:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Business operations have permanently ceased.",
              "The company has remained inactive for a long period.",
              "Business objectives have been achieved.",
              "Founders are starting a new venture.",
              "Business restructuring or merger.",
              "Financial losses and lack of future business prospects.",
              "Regulatory or operational challenges.",
              "No significant assets or liabilities remain.",
              "The company has never commenced operations."
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 shrink-0 font-bold text-sm">
                  {idx + 1}
                </span>
                <p className="text-slate-700 font-medium text-sm sm:text-base">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Private Limited Company Closure Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end guidance to legally and safely bring down your entity records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Consultation */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Company Closure Consultation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We evaluate your company's legal and financial position to determine the appropriate closure process.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-4">
                <span>✓ Status Review</span>
                <span>✓ Compliance Review</span>
                <span>✓ Financial Analysis</span>
                <span>✓ Strategy Selection</span>
              </div>
            </div>

            {/* Strike-Off Assistance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strike-Off Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Where applicable, we assist companies in applying for voluntary strike-off with full backing.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-4">
                <span>✓ Eligibility Review</span>
                <span>✓ Document Prep</span>
                <span>✓ Form Filings</span>
                <span>✓ Follow-up Support</span>
              </div>
            </div>

            {/* ROC Compliance Review */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC Compliance Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Before filing for closure, our experts review the company's full historic compliance profile.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-4">
                <span>✓ Annual Filings</span>
                <span>✓ Financial Audits</span>
                <span>✓ Director KYC</span>
                <span>✓ Registers Review</span>
              </div>
            </div>

            {/* Income Tax Compliance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Compliance Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive review of direct taxation status before initiating legal company winding up.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-4">
                <span>✓ ITR Review</span>
                <span>✓ PAN Verification</span>
                <span>✓ Liability Check</span>
                <span>✓ Guidance Advisory</span>
              </div>
            </div>

            {/* GST Compliance Support */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Compliance Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">If the company holds GST registration, we assist with complete cancellation and closures.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-4">
                <span>✓ GST Return Review</span>
                <span>✓ Reconciliation</span>
                <span>✓ Registration Status</span>
                <span>✓ Cancellation Form</span>
              </div>
            </div>

            {/* Financial Review */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accounting & Financial Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Our professionals evaluate financial ledger books to verify zero active assets/liabilities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-4">
                <span>✓ Bookkeeping Audit</span>
                <span>✓ Balance Sheet Prep</span>
                <span>✓ Asset Verification</span>
                <span>✓ Reconciliation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-24 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Documents Generally Required
            </h2>
            <p className="text-slate-600">
              To process your company closure smoothly, the following key document segments are required:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-blue-700">Company Documents</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>Certificate of Incorporation</li>
                <li>Memorandum of Association (MOA)</li>
                <li>Articles of Association (AOA)</li>
                <li>PAN Card & CIN Details</li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-blue-700">Director Documents</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>PAN Card</li>
                <li>Aadhaar Card</li>
                <li>DIN Details</li>
                <li>Identity & Address Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-blue-700">Financial Documents</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>Financial Statements</li>
                <li>Bank Statements</li>
                <li>Statement of Accounts</li>
                <li>Asset & Liability Details</li>
                <li>Income Tax Returns</li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <h4 className="font-bold text-blue-700">Compliance & Legal</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>ROC Filings & Annual Returns</li>
                <li>GST Returns (if applicable)</li>
                <li>Board & Shareholder Resolutions</li>
                <li>Affidavits & Indemnity Bonds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Professional Company Closure
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Winding down an entity correctly mitigates high future penalty risks and removes administrative baggage cleanly.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure a legally compliant process and completely avoid long-term administrative overheads."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Legally Structured Process</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Follow strict Companies Act, 2013 rules to avoid regulatory setbacks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Proper Documentation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Draft professional Board Resolutions, Indemnity Bonds, and Statement of Accounts.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Compliance Review</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Identify and resolve pending filings before sending application files.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600 font-sans">Peace of Mind</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Professional guidance saves time and minimizes errors or procedural delays.</p>
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
              Businesses We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse commercial structures.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Inactive Private Ltd Companies', 'Startups', 'MSMEs', 'Family-Owned Businesses', 'Technology Companies', 'Manufacturing Companies', 'Consulting Firms', 'E-commerce Companies'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
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
                  "Experienced Professionals (CAs & CSs)",
                  "End-to-End Closure Support",
                  "Compliance-Focused Approach",
                  "Transparent Process Stages",
                  "Secure & Confidential Systems",
                  "Pan India Services Network"
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
                <p><strong>Step 1 - Initial Consultation:</strong> Understand company legal/financial status & closure objectives.</p>
                <p><strong>Step 2 - Compliance Review:</strong> Review existing ROC filings, taxes, and accounting history.</p>
                <p><strong>Step 3 - Documentation Preparation:</strong> Prepare resolutions, declarations, and accounting statements.</p>
                <p><strong>Step 4 - Application Filing:</strong> Draft and file required applications with the appropriate authority.</p>
                <p><strong>Step 5 - Regulatory Follow-Up:</strong> Maintain communications and resolve statutory queries.</p>
                <p><strong>Step 6 - Post-Closure Support:</strong> Help with PAN/TAN surrenders and GST cancellation.</p>
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