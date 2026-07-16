import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.caServicesStartups;

export default function StartupCALanding() {
  const HERO_STATS = [
    "Corporate Registrations",
    "Pristine Accounting & Books",
    "ROC, GST & Income Tax",
    "Virtual CFO Leadership",
  ];

  const faqs = [
    { 
      q: "Why do startups need Chartered Accountant services?", 
      a: "Professional CA Services help businesses manage accounting, taxation, GST compliance, ROC filings, payroll, financial reporting, and statutory compliance while allowing founders to focus on growing their core business." 
    },
    { 
      q: "What services are included in Startup CA Services?", 
      a: "Startup CA Services generally include company registration, GST registration, bookkeeping, accounting, income tax filing, ROC compliance, payroll management, Virtual CFO services, tax planning, and business advisory." 
    },
    { 
      q: "Can startups outsource accounting services?", 
      a: "Yes. Outsourcing accounting and compliance to experienced Chartered Accountants helps startups reduce operational costs while ensuring accurate financial management and statutory compliance." 
    },
    { 
      q: "Does FinTax Adviser provide Virtual CFO Services?", 
      a: "Yes. We provide Virtual CFO Services, financial planning, budgeting, MIS reporting, fundraising support, and strategic financial advisory for startups and growing businesses." 
    },
    { 
      q: "Do you provide Startup CA Services across India?", 
      a: "Yes. FinTax Adviser offers professional CA Services for Startups in Delhi, India, and supports startups and businesses across India with complete accounting, taxation, compliance, and financial advisory services." 
    }
  ];

  const STARTUP_SECTORS = [
    'Startups', 'Private Limited Companies', 'LLPs', 'One Person Companies (OPCs)', 
    'Partnership Firms', 'Sole Proprietorships', 'MSMEs', 'Technology Companies', 
    'SaaS Startups', 'E-commerce Businesses', 'FinTech Companies', 'Healthcare Startups', 
    'Manufacturing Companies', 'Service-Based Businesses', 'Funded Startups'
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
                ⚡ Incorporate · Bookkeep · File · Scale
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Chartered Accountant (CA)
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services for Startups in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Launch, scale, and secure funding without regulatory bottlenecks. From entity incorporation to payroll and strategic tax optimization, our CAs keep your operations investor-ready.
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
            Comprehensive Financial and Legal Compliance Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Managing ROC filings, direct/indirect taxes, salary structures, and investor MIS packets on your own can lead to regulatory bottlenecks. We handle critical financial duties so your founding team can focus strictly on refining your product, finding market fit, and scaling.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              End-to-End Startup CA Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Covering legal setups, cloud-accounting, payroll calculations, and strategic fundraising support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Entity Registration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registration & Business Incorporation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Choose the right business format to protect founders and streamline future equity investments.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Private Limited</span>
                <span>✓ LLP Registration</span>
                <span>✓ Startup India Registry</span>
                <span>✓ GST/MSME Setup</span>
              </div>
            </div>

            {/* Accounting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accounting & Bookkeeping</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Pragmatic, cloud-based accounting solutions designed to make your numbers audit-ready from day one.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Expense Tracking</span>
                <span>✓ General Ledger</span>
                <span>✓ Monthly MIS Prep</span>
                <span>✓ Bank Reconciliation</span>
              </div>
            </div>

            {/* GST */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Compliance & Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ensure complete indirect tax compliance with timely filings and exact input claim monitoring.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ GST Return Filing</span>
                <span>✓ Input Tax Credits</span>
                <span>✓ Notice Handling</span>
                <span>✓ GSTR Auditing</span>
              </div>
            </div>

            {/* Income Tax */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Tax & Income Tax Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Optimize corporate tax positions while keeping direct payments strictly aligned to central tax laws.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Annual Tax Returns</span>
                <span>✓ Advance Tax Calculations</span>
                <span>✓ TDS Compliance</span>
                <span>✓ Capital Gains Advisory</span>
              </div>
            </div>

            {/* ROC Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC Compliance & MCA Filings</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Private Limiteds and LLPs must file statutory records under the Companies Act to avoid penalties.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Annual ROC Filing</span>
                <span>✓ Director KYC</span>
                <span>✓ Secretarial Compliance</span>
                <span>✓ Registry Updates</span>
              </div>
            </div>

            {/* Virtual CFO */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Virtual CFO & Strategic Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Acquire senior financial consulting to support fundraising, budgets, and operational planning.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Investor Reporting</span>
                <span>✓ Cash Flow Management</span>
                <span>✓ Growth Budgeting</span>
                <span>✓ Financial Analysis</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-ca" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Specialized Startup CA Support
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Handling legal corporate compliance and complex taxation processes on your own can quickly derail a business. Our CAs establish robust systems from day one.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain investor-ready balance sheets, secure your entity structures, and remain fully compliant without corporate bottlenecks."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Investor Ready</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Build trust with external capital partners via perfect, verified accounts statements.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Zero Fine Risks</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Meet every ROC, GST, TDS and corporate tax deadline with confidence.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Optimized Cash Flow</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Receive detailed reports on monthly cash runway, burn-rates, and costs.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Strategic Taxes</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Structure business expenses correctly to capture statutory startup tax deductions.</p>
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
              Startup Categories We Service
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing dedicated compliance solutions for diverse commercial ventures.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm font-bold text-slate-700">
            {STARTUP_SECTORS.map((sector) => (
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

            {/* Left Box */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Startups Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Chartered Accountants",
                  "Complete Startup Compliance Solutions",
                  "Startup-Friendly Pricing Models",
                  "End-to-End Financial Support",
                  "Expert GST & Tax Advisory",
                  "ROC & MCA Compliance Assistance"
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

            {/* Right Box: Process timeline */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Onboarding & Ongoing Delivery</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Corporate Setup:</strong> Assisting with legal registrations, tax IDs, and bank configurations.</p>
                <p><strong>Step 2 - Books Initialization:</strong> Transitioning current accounts to automated, collaborative digital systems.</p>
                <p><strong>Step 3 - Recurring Filings:</strong> Managing weekly ledger updates, recurring GST returns, and regular payroll runs.</p>
                <p><strong>Step 4 - Strategic Oversight:</strong> Conducting period close-outs, filing ROC and tax reports, and reviewing budgets.</p>
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