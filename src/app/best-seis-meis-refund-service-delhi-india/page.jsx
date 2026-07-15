import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = {
  title: "SEIS & MEIS Refund Services in India | Fintax Adviser",
  description: "Expert assistance for SEIS & MEIS benefits with accurate documentation, DGFT compliance & timely refund support.",
};

export default function SeisMeisRefundLanding() {
  const HERO_STATS = [
    "Expert Support from Export Professionals",
    "Accurate, Policy-Compliant Documentation",
    "Timely Assistance for Faster Claims",
    "End-to-End DGFT & Policy Compliance",
  ];

  const faqs = [
    { 
      q: "What are SEIS and MEIS?", 
      a: "SEIS (Service Exports from India Scheme) and MEIS (Merchandise Exports from India Scheme) were export promotion schemes introduced under India's Foreign Trade Policy to encourage exports of eligible services and goods. They have since been replaced for new benefits under later policy frameworks, but businesses may still require support for historical matters." 
    },
    { 
      q: "Can businesses still seek assistance for SEIS or MEIS matters?", 
      a: "Yes. Businesses may require assistance with pending claims, historical documentation, reconciliations, audits, or compliance related to the periods when these schemes were applicable." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Common documents include export invoices, shipping documents, bank realization records, accounting records, GST records, and DGFT-related documentation, depending on the case." 
    },
    { 
      q: "Do you assist both goods and service exporters?", 
      a: "Yes. We provide support for eligible matters relating to both merchandise and service exports." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide professional assistance with export documentation, reconciliations, DGFT-related compliance support, and advisory services, helping businesses manage historical SEIS and MEIS matters efficiently." 
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
                ⚡ Recover Your Entitlements · Strengthen Your Exports
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                SEIS & MEIS Refund &
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Incentive Assistance Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Maximize your export benefits in India. Fintax Adviser provides professional support for SEIS & MEIS refund claims, accurate document reconciliation, DGFT compliance, and pending claim processing.
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
            Professional SEIS & MEIS Refund Assistance for Exporters
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Export incentive schemes have played an important role in encouraging Indian businesses to expand into global markets. Businesses that were eligible under the Service Exports from India Scheme (SEIS) and the Merchandise Exports from India Scheme (MEIS) may require professional assistance in managing documentation, reconciliations, pending claims, policy compliance, and incentive-related matters. We assist exporters, manufacturers, merchant exporters, and service providers across India.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our SEIS & MEIS Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive handling of your export incentives, records, and departmental compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Eligibility Review */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Eligibility & Policy Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Review historical export transactions and applicable policy provisions to evaluate benefit eligibility.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Export Analysis</span>
                <span>✓ Policy Mapping</span>
                <span>✓ Period Review</span>
                <span>✓ Risk Verification</span>
              </div>
            </div>

            {/* Documentation Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Documentation & Application</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparation and structuring of robust files to minimize delays or rejections during departmental processing.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Export Invoices</span>
                <span>✓ Shipping Bills</span>
                <span>✓ FIRC & BRC</span>
                <span>✓ DGFT Forms</span>
              </div>
            </div>

            {/* Export Records Reconciliation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Export Records Reconciliation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Cross-reconciliation of accounting systems, banking records, and tax returns for precise balances.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Realization Audits</span>
                <span>✓ GST Cross Checks</span>
                <span>✓ Ledger Alignment</span>
                <span>✓ Error Corrections</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-service" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Professional Assistance Matters
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Managing export incentive documentation involves detailed historical audits of shipping records, regulatory changes, and forex realizations. Expert oversight dramatically reduces errors.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Optimize your cash flow entitlements and ensure robust record-keeping for upcoming departmental audits."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Review Claims</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Systematically review and clear complex, pending, or historical export claims.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Query Handling</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Draft structured, fact-based responses to technical departmental clarifications.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Reduce Errors</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Verify financial entries against BRC sheets to eliminate data gaps.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Policy Compliance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Align your structural practices with past and present Foreign Trade Policies (FTP).</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Exporters & Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable DGFT and trade solutions tailored for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Merchant Exporters', 'Manufacturer Exporters', 'Service Exporters', 'IT & Software Exporters', 'Logistics Companies', 'Engineering Firms', 'Pharmaceutical Exporters', 'MSMEs & Startups'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required and Process Matrix */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Documents Generally Required */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Documents Generally Required
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Import Export Code (IEC)",
                  "PAN & GST Registration",
                  "Export Invoices & Contracts",
                  "Shipping Bills / Airway Bills",
                  "Bank Statements & FIRC / BRC",
                  "DGFT Portal Login Credentials"
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

            {/* Right Box: Process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Consultation:</strong> Direct review of export activities and past schemes.</p>
                <p><strong>Step 2 - Verification:</strong> Audit and validation of historical shipping and invoice logs.</p>
                <p><strong>Step 3 - Reconciliation:</strong> Matching foreign inward remittances with statutory records.</p>
                <p><strong>Step 4 - Preparing Files:</strong> Formatting documents per DGFT procedural rules.</p>
                <p><strong>Step 5 - Follow-up Support:</strong> Actively answering subsequent departmental inquiries.</p>
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