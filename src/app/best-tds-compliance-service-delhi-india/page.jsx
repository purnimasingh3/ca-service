import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.tdsCompliance;
export default function TdsComplianceLanding() {
  const HERO_STATS = [
    "Accurate TDS Deduction",
    "Quarterly Return Filing",
    "TRACES Reconciliation",
    "Form 16/16A Issuance",
  ];

  const faqs = [
    { 
      q: "What is TDS Compliance?", 
      a: "TDS Compliance includes deducting tax at source, depositing it within the prescribed time, filing quarterly TDS returns, issuing certificates, and maintaining proper records." 
    },
    { 
      q: "Who is required to deduct TDS?", 
      a: "The requirement depends on the nature of the payment, applicable provisions of the Income-tax Act, and the status of the deductor. Professional advice may be required to determine applicability." 
    },
    { 
      q: "What happens if TDS is filed late?", 
      a: "Delayed compliance may result in interest, fees, or other consequences as provided under applicable tax laws." 
    },
    { 
      q: "Do you help with TDS notices?", 
      a: "Yes. We provide professional guidance for reviewing notices and preparing responses based on available information and applicable regulations." 
    },
    { 
      q: "Can startups outsource TDS compliance?", 
      a: "Yes. Outsourcing TDS compliance helps startups focus on business growth while ensuring timely tax compliance." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide comprehensive TDS compliance services with a focus on accuracy, timely filing, transparent processes, and professional support." 
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
                ⚡ Accurate Deduction · Timely Filing · Complete Compliance
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                TDS Compliance Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Professional TDS Return Filing
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert Tax Deducted at Source (TDS) Compliance workflows by Fintax Adviser. We provide comprehensive end-to-end management for startups, MSMEs, LLPs, partnership firms, and large business entities across India.
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
            Understanding Tax Deducted at Source (TDS) Mechanics
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tax Deducted at Source (TDS) is a structural compliance mechanism where statutory tax amounts are directly withheld at the time of making specified transactions—including employee salaries, contractual services, professional vendor fees, asset rents, commission models, and capital interest metrics. Meeting these guidelines prevents operational disruptions and eliminates statutory penalties.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Structured TDS Management Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Reliable processing from precise initial category mathematical configurations down to final ledger reconciliation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Calculations & Setup */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Deduction & Setup Operations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Initial TAN system configuration along with cross-category operational transaction tracking.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary Framework</span>
                <span>✓ Professional Fees</span>
                <span>✓ Contractor Bills</span>
                <span>✓ Rent Payments</span>
              </div>
            </div>

            {/* Return Filing */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quarterly TDS Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structured preparation and official submission of quarterly compliance returns.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Form 24Q (Salary)</span>
                <span>✓ Form 26Q (Non-Sal)</span>
                <span>✓ Form 27Q / 27EQ</span>
                <span>✓ Challan Deposits</span>
              </div>
            </div>

            {/* Reconciliation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TRACES Verification & Certificates</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Cross-checking tracking ledgers against government portals to secure compliance alignments.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Form 16 / 16A</span>
                <span>✓ TRACES Matching</span>
                <span>✓ Form 26AS Audit</span>
                <span>✓ Notice Responses</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-tds" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Professional TDS Governance
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Automating processing calculations through expert verification channels eliminates transaction errors and late-fee compounding risks.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Let us handle your TDS compliance so you can focus on your business."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Zero Error Metrics</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevent mathematical deduction mismatches and bad entry allocations before submission.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Deadline Security</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Ensure all quarterly timelines are fully addressed, removing late-filing financial penal systems.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Perfect Matching</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Seamlessly clear structural matching mismatches against centralized corporate TRACES databases.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Operational Growth</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Free internal operational assets to focus directly on strategic scaling operations.</p>
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
              Entities We Help Succeed
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing stable configurations across all primary business registration frameworks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Private Limited Cos', 'LLPs & Partnerships', 'Startups & MSMEs', 'Proprietorship Firms', 'Service Providers', 'NGOs & Trusts', 'Traders & Wholesalers', 'Educational Inst.'].map((sector) => (
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
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Tax Professionals",
                  "End-to-End TDS Management",
                  "Transparent Regulated Workflows",
                  "Strict Statutory Timeline Delivery",
                  "Confidential Financial Protections",
                  "Pan India Remote Capabilities"
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
                <p><strong>Step 1 - Consultation:</strong> Analyzing operational dynamics and clarifying functional withholding scopes.</p>
                <p><strong>Step 2 - Document Collection:</strong> Processing data securely (PAN, TAN, Invoices, Vendor records, and Salary details).</p>
                <p><strong>Step 3 - TDS Computation:</strong> Executing calculations according to current statutory code schedules.</p>
                <p><strong>Step 4 - Return Preparation:</strong> Formatting quarterly declarations alongside necessary support certificates.</p>
                <p><strong>Step 5 - Filing & Reconciliation:</strong> Resolving discrepancy records over government channels while preserving clean documentation.</p>
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