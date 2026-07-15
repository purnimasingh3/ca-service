import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.gstRefundServices;

export default function GstRefundLanding() {
  const HERO_STATS = [
    "Error-Free Refund Filing",
    "Timely Processing Better Flow",
    "100% Compliant Latest Laws",
    "Expert Support From GST CAs",
  ];

  const faqs = [
    { 
      q: "What is a GST refund?", 
      a: "A GST refund is the return of eligible tax amounts paid under the Goods and Services Tax system, subject to the applicable provisions and procedures." 
    },
    { 
      q: "Who can claim a GST refund?", 
      a: "Eligibility depends on the facts of each case and the GST law. Common situations include exports, accumulated Input Tax Credit, inverted duty structure, and excess tax payments." 
    },
    { 
      q: "How long does the GST refund process take?", 
      a: "The timeline depends on the type of refund, completeness of documentation, and processing by the relevant authorities." 
    },
    { 
      q: "What documents are required?", 
      a: "The documents vary depending on the refund type but commonly include GST returns, invoices, accounting records, and, for exports, shipping and banking documents." 
    },
    { 
      q: "Can you help exporters with GST refunds?", 
      a: "Yes. We provide GST refund support for exporters of goods and services, including documentation review and refund application assistance." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide structured GST refund support, accurate documentation review, reconciliation assistance, and compliance-focused services to help eligible businesses navigate the refund process efficiently." 
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
                ⚡ Reconcile · Verify · File · Recover
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Goods and Services Tax
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (GST) Refund Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                GET YOUR ELIGIBLE TAX BACK. IMPROVE CASH FLOW. Expert GST Refund Assistance for Exporters, Businesses, Startups & All Eligible Taxpayers in India.
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
            Recover Blocked Capital & Optimize Indirect Tax Workflows
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Managing GST refunds can be a complex process, especially when businesses deal with exports, accumulated Input Tax Credit (ITC), inverted duty structures, or excess tax payments. Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Delays or errors can block critical working capital. Our dedicated specialists handle calculations, documentation verification, and portals filing smoothly to accelerate cash recovery.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Targeted GST Refund Workflows
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured preparation matching specific legal grounds outlined under Indian tax rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Export Refund */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Export GST Refund Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Filing for exports of goods & services alongside complete document tracking asset audits.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ LUT/Bond Compliance</span>
                <span>✓ Shipping Verification</span>
                <span>✓ Invoice Auditing</span>
                <span>✓ Bank Realisation BRC</span>
              </div>
            </div>

            {/* ITC Refund */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Input Tax Credit (ITC) Refund</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Recovering accumulated credit blocks generated by zero-rated structural workflows.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ITC Reconciliation</span>
                <span>✓ Purchase Audits</span>
                <span>✓ Vendor Compliance</span>
                <span>✓ Matrix Calculations</span>
              </div>
            </div>

            {/* Inverted Duty Structure */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Inverted Duty Structure Refund</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">For situations where input tax rates exceed output tax liabilities systematically.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Eligibility Reviews</span>
                <span>✓ Input vs Output Audit</span>
                <span>✓ Computation Models</span>
                <span>✓ Portal Filing Support</span>
              </div>
            </div>
          </div>

          {/* Extended Assistance Blocks */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm grid md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Excess Payment Recovery</h4>
              <p>Reconciles Electronic Cash/Credit ledgers to extract double payments or erroneous calculations.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">SEZ Developer / Unit Supplies</h4>
              <p>Specialized processing workflows matching tax breaks for economic zone supplies.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">Comprehensive Reconciliation</h4>
              <p>Cross-referencing GSTR-1, GSTR-3B, and purchase ledgers to prevent structural filing exceptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-refund" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Strategic Impact on Business Operations
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Recovering blocked indirect tax amounts injects high liquidity without compounding operational liabilities, supporting exporters and scaling operations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain clean accounts histories, prevent application deficiencies, and return funds straight to cash books."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Working Capital Boot</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Directly pull locked liquid funds back into running operational cash sheets.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Filing Efficiency</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Minimize systemic deficiencies, notices, or payment delays via precise document attachment layouts.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Reconciliation Visibility</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Identify structural matching mismatches inside ledgers before official submissions occur.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Regulatory Compliance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Strict adherence to recent CBIC updates, notifications, and statutory filing guidelines.</p>
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
              Eligible Entities We Support
            </h2>
            <p className="text-sm text-slate-500 mt-1">Delivering financial recovery across diverse business categories.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Exporters of Goods', 'Service Exporters', 'SEZ Developers', 'E-commerce Sellers', 'Textile Manufacturers', 'Pharma Companies', 'Food Processing Units', 'Startups & MSMEs'].map((sector) => (
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
                  "Experienced GST Professionals",
                  "End-to-End Filing Support",
                  "Industry-Specific Solutions",
                  "Transparent Processing Workflows",
                  "Secure Financial Data Isolation",
                  "Pan India Remote Assistance"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 text-xs text-slate-500 space-y-2">
                <p className="font-bold text-slate-700">Documents Generally Required:</p>
                <p>• <strong>Corporate Identity:</strong> GST Certificate, PAN card, Business registration logs.</p>
                <p>• <strong>Tax Statements:</strong> GSTR-1, GSTR-3B history, Electronic Credit & Cash ledger statements.</p>
                <p>• <strong>Financial Books:</strong> Purchase registers, Sales records, tax invoices, bank validation papers.</p>
                <p>• <strong>Export Proofs (If applicable):</strong> Shipping bills, Bill of Lading, FIRC/BRC metrics, active LUT setups.</p>
              </div>
            </div>

            {/* Right Box: Process Tracking */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Mapping operational structure, transaction contexts, and clear ground for recovery parameters.</p>
                <p><strong>Step 2 - Eligibility Assessment:</strong> Technical audit of filing histories to verify absolute legal eligibility metrics.</p>
                <p><strong>Step 3 - Data Collection & Reconciliation:</strong> Assembling purchase tracking, export logs, and cash records to cross-reference entries.</p>
                <p><strong>Step 4 - Refund Computation & Preparation:</strong> Constructing accurate claim quantities and building required legal statements.</p>
                <p><strong>Step 5 - Portal Submission & Monitoring:</strong> Uploading data structures securely via the official portal and managing updates or information requests.</p>
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