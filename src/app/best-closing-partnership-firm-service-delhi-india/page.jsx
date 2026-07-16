import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = servicesMetadata.closingPartnershipFirm || {
  title: "Partnership Firm Closure Services in India | Fintax Adviser",
  description: "Professional Partnership Firm Closure & Dissolution Services for Registered & Unregistered Firms across India. Handled by CAs and Tax Experts.",
};

export default function ClosingPartnershipFirmLanding() {
  const HERO_STATS = [
    "Legal Dissolution Deed",
    "Final Account Settlement",
    "Income Tax Compliance",
    "GST Cancellation Support",
  ];

  const faqs = [
    { 
      q: "What is a partnership firm closure?", 
      a: "Partnership firm closure is the legal process of dissolving a partnership business by settling liabilities, completing financial and tax obligations, and documenting the dissolution in accordance with applicable laws." 
    },
    { 
      q: "Is a dissolution agreement required?", 
      a: "A written dissolution agreement is generally recommended as it records the mutually agreed terms between the partners and helps reduce future disputes." 
    },
    { 
      q: "Is tax compliance necessary before closing a partnership firm?", 
      a: "Yes. Businesses should review and complete applicable tax and statutory compliances before finalizing the dissolution process." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Typical documents include the partnership deed, financial statements, tax records, partner identity documents, business registrations, and dissolution-related documentation. Requirements may vary depending on the firm's circumstances." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide professional assistance with partnership firm dissolution, accounting review, tax compliance, documentation preparation, and regulatory guidance, helping businesses complete the closure process efficiently and in compliance with applicable requirements." 
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
                ⚡ Close The Right Way · Stay Compliant
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Partnership Firm
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Closure Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional support for a smooth and compliant closure. End-to-end assistance for partnership firm dissolution, accounting closure, tax compliance, documentation & post-closure support across India.
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
            Professional Partnership Firm Closure Services for Businesses Across India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. A partnership firm may reach a stage where the partners decide to discontinue operations due to business restructuring, completion of business objectives, retirement of partners, financial challenges, or strategic business decisions. However, simply stopping business activities does not complete the legal and financial responsibilities of the firm. Proper closure involves settling liabilities, preparing financial records, completing tax and regulatory compliances, and executing a legally valid dissolution.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive legal, accounting, and tax solutions to safely dissolve your partnership framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 01 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dissolution Consultation & Deed Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Reviewing legal positioning, business status, and analyzing dissolution/profit-sharing clauses inside the active deed.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Status Review</span>
                <span>✓ Deed Analysis</span>
                <span>✓ Asset Provisions</span>
                <span>✓ Liability Terms</span>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agreement Prep & Financial Closure</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Drafting legal terms while executing full balance sheet closures and capital account reconciliations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Dissolution Drafting</span>
                <span>✓ Final Accounts</span>
                <span>✓ Capital Accounts</span>
                <span>✓ Partner Settlement</span>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax & Registration Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end guidance for canceling GST setups and wrapping up pending Income Tax return assets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Income Tax Review</span>
                <span>✓ GST Cancellation</span>
                <span>✓ ITC Reconciliation</span>
                <span>✓ Registration Closure</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-closure" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Close a Partnership Firm & Importance
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether your firm is inactive, no longer profitable, or conversion/restructuring is required, structured closure mitigates serious future regulatory risks.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ceasing operations internally is not a legal closure. Clear your liabilities and records properly."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Common Drivers</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Mutual agreement, retirement/death, financial losses, project milestones, or conversion into LLP/Pvt Ltd.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Liability Settle</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Ensure all merchant, bank, and standard outstanding partner liabilities are distributed cleanly.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Risk Mitigation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid steep compliance non-filing penalties and legal disputes by formalizing the dissolution.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Future Reference</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Preserve clear documentation pipelines long after formal business tracking metrics dissolve.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Block Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Documents Generally Required
            </h2>
            <p className="text-sm text-slate-500 mt-1">Structured checklists necessary to fulfill execution workflows safely.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Business Documents</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Partnership Deed</li>
                <li>• PAN Card & Bank Details</li>
                <li>• GST Registration</li>
                <li>• Business Registration Certs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Financial Documents</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Balance Sheet</li>
                <li>• Profit & Loss Statement</li>
                <li>• Bank Statements</li>
                <li>• Asset & Liability Details</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Compliance Items</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• GST Returns & Tax Records</li>
                <li>• Registration Certificates</li>
                <li>• Income Tax Returns</li>
                <li>• Resolution & Consents</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Partner Documents</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Partner PAN Cards</li>
                <li>• Aadhaar Cards</li>
                <li>• Identity Proofs</li>
                <li>• Address Proof Assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Trading Businesses', 'Manufacturing Firms', 'Consulting & IT Services', 'Healthcare Clinics', 'Professional Services', 'Retail & Hospitality', 'Digital Agencies', 'Startups & MSMEs'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
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

            {/* Left Box */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Chartered Accountants",
                  "Comprehensive End-to-End Support",
                  "Business-Specific Custom Solutions",
                  "Transparent Process Execution",
                  "Secure & Confidential Systems",
                  "Pan India Online/Offline Support"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Closure Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Mapping partner intent and status framework details.</p>
                <p><strong>Step 2 - Compliance Review:</strong> Scrutinizing ledger balances, registers, and tax histories.</p>
                <p><strong>Step 3 - Documentation Prep:</strong> Drafting structural resolutions and Dissolution agreements.</p>
                <p><strong>Step 4 - Settlement of Accounts:</strong> Balancing records alongside vendor configurations.</p>
                <p><strong>Step 5 - Regulatory Support:</strong> Wrapping up formal registrations and processing direct updates.</p>
                <p><strong>Step 6 - Post-Closure Support:</strong> Safe structural data maintenance routines.</p>
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