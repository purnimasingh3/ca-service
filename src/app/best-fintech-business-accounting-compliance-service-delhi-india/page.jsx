import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.fintechAccountingCompliance;

export default function FintechAccountingLanding() {
  const HERO_STATS = [
    "Accurate Accounting",
    "Tax & GST Compliance",
    "Financial Reporting",
    "Compliance Assurance",
  ];

  const faqs = [
    { 
      q: "Do FinTech startups need specialized accounting?", 
      a: "Yes. FinTech companies often manage complex financial transactions, recurring revenue, investor funding, and regulatory obligations that require industry-specific accounting expertise." 
    },
    { 
      q: "Can you assist with investor reporting?", 
      a: "Yes. We prepare financial statements, MIS reports, cash flow reports, and investor-ready financial documentation." 
    },
    { 
      q: "Do you support funded startups?", 
      a: "Yes. We work with bootstrapped, angel-funded, seed-funded, Series A, and growth-stage FinTech companies." 
    },
    { 
      q: "Can you handle GST, Income Tax, and TDS compliance?", 
      a: "Yes. We provide complete GST, Income Tax, TDS, payroll, and accounting compliance services under one roof." 
    },
    { 
      q: "Do you provide Virtual CFO services?", 
      a: "Yes. Our Virtual CFO services help businesses with budgeting, forecasting, financial strategy, fundraising preparation, and performance monitoring." 
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
                ⚡ Accurate Records · Timely Compliance · Better Decisions
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                FinTech Business Accounting
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Compliance Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Accounting, Tax & Compliance Solutions for FinTech Businesses in India. Scalable accounting infrastructure that matches your tech-driven financial enterprise.
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
            Specialized Financial Infrastructure for Next-Gen FinTech Platforms
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. The FinTech industry is transforming the financial ecosystem through digital payments, lending platforms, wealth management, and blockchain solutions. Our customized accounting and compliance services help startups, NBFCs, and financial SaaS enterprises manage highly complex transaction streams while keeping systems 100% compliant with Indian tax and corporate regulatory requirements.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our FinTech Accounting Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end accounting, bookkeeping, recurring taxation, and investor advisory tailored for modern fintech models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Bookkeeping & Gateway */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bookkeeping & Gateway Reconciliation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Unify multichain, digital payment, wallet transaction ledger records with instant verification systems.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Gateway Matching</span>
                <span>✓ Wallet Verification</span>
                <span>✓ Journal Entries</span>
                <span>✓ Expense Ledger</span>
              </div>
            </div>

            {/* Revenue Recognition */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Revenue Recognition Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Optimize financial flows for subscription, commission, or transaction-based models.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Deferred Revenue</span>
                <span>✓ Subscription Tracking</span>
                <span>✓ Commission Auditing</span>
                <span>✓ Transaction Fees</span>
              </div>
            </div>

            {/* Tax & GST Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST & Income Tax Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Regular handling of indirect and direct statutory corporate tax filing liabilities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ITC Reconciliation</span>
                <span>✓ GST Return Filing</span>
                <span>✓ Advance Tax Planning</span>
                <span>✓ ITR Preparation</span>
              </div>
            </div>

            {/* Corporate & ROC */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC & Secretarial Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Fulfill all mandatory MCA filings, board record compliance, and company law schedules.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Director KYC</span>
                <span>✓ Annual ROC Filing</span>
                <span>✓ Board Minutes</span>
                <span>✓ Shareholder Res.</span>
              </div>
            </div>

            {/* Investor & Funding */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investor & Fundraising Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">Prepare audit-clean, transparent financial data ready for VC due diligence and validation.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Cap Table Support</span>
                <span>✓ MIS Reporting</span>
                <span>✓ Due Diligence Prep</span>
                <span>✓ Projections</span>
              </div>
            </div>

            {/* Virtual CFO */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Virtual CFO Strategic Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Gain strategic financial oversight for optimized corporate growth and budget controls.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Cash Flow Forecasts</span>
                <span>✓ Budget Control</span>
                <span>✓ Performance KPIs</span>
                <span>✓ Cost Optimization</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-accounting" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Strategic Benefits for FinTech Operations
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional systems cannot address the high-velocity micro-transactions, digital reconciliations, and scaling audits that modern fintech enterprises handle daily.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure bulletproof financial compliance while building investor-ready financial dashboards."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Improved Cash Flow</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Track customer wallets and direct payment settlements with total system clarity.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Reduced Risks</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Mitigate heavy direct/indirect compliance failures through automated checks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Better Decisions</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Utilize data-driven insights and real-time financial tracking for smarter planning.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Scalable Solutions</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Leverage secure, cloud-based accounting platforms designed to scale with transaction volume.</p>
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
              FinTech Models We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for digital-first financial products.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm sm:text-sm font-bold text-slate-700">
            {['FinTech Startups', 'Digital Payments', 'Payment Gateways', 'Digital Lending Platforms', 'NBFCs', 'WealthTech Apps', 'InsurTech Solutions', 'Financial SaaS'].map((sector) => (
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
                  "Experienced Chartered Accountants",
                  "Specialized FinTech Industry Knowledge",
                  "Secure & Confidential Systems",
                  "Cloud-Based Tech Platforms",
                  "Transparent Pricing Models",
                  "Investor-Focused Support"
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
              <div className="space-y-4 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Understand your FinTech business model, revenue streams, accounting systems, and compliance obligations.</p>
                <p><strong>Step 2 - Financial Assessment:</strong> Review existing books of accounts, tax records, compliance status, and reporting structure.</p>
                <p><strong>Step 3 - Accounting Implementation:</strong> Maintain books of accounts, process transactions, reconcile bank accounts, and organize financial records.</p>
                <p><strong>Step 4 - Compliance Management:</strong> Manage GST, Income Tax, TDS, ROC, payroll, and statutory filings according to applicable laws.</p>
                <p><strong>Step 5 - Financial Reporting:</strong> Prepare monthly, quarterly, and annual reports, including MIS, cash flow statements, and management reports.</p>
                <p><strong>Step 6 - Ongoing Financial Advisory:</strong> Provide continuous support for compliance, investor reporting, business planning, and financial decision-making.</p>
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