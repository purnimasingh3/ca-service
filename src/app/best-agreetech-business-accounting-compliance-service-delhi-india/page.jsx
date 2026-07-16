import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.agreetechAccountingCompliance;

export default function AgreetechAccountingLanding() {
  const HERO_STATS = [
    "Complete Bookkeeping",
    "GST & ROC Compliance",
    "Payroll Management",
    "Strategic Advisory",
  ];

  const faqs = [
    { 
      q: "What services does Agreetech provide?", 
      a: "We provide accounting, GST, TDS, Income Tax, payroll, ROC compliance, MIS reporting, and Virtual CFO services." 
    },
    { 
      q: "Do you work with startups and SMEs?", 
      a: "Yes, we specialize in startups, SMEs, and growing businesses across India." 
    },
    { 
      q: "Can you manage complete business compliance?", 
      a: "Yes, we offer complete end-to-end accounting and compliance solutions." 
    },
    { 
      q: "Do you provide financial advisory services?", 
      a: "Yes, including Virtual CFO and strategic financial planning services." 
    },
    { 
      q: "Is Agreetech available across India?", 
      a: "Yes, we provide services to businesses nationwide." 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-300 rounded-full blur-[160px] opacity-20 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[140px] opacity-15 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                🌾 Accounting · Compliance · Advisory · Growth
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Agreetech Business Accounting
                <span className="bg-blue-600 bg-clip-text text-transparent block mt-2">
                  & Compliance Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                A full-service financial solutions provider offering Accounting, Taxation, Compliance, Payroll & Financial Advisory Services for startups, SMEs & growing businesses across India.
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
                <Link href="/get-free-consultation" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
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
            The Complete Financial Backbone for Modern Indian Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Agreetech Business Accounting and Compliance Services</strong>. We provide end-to-end accounting, taxation, regulatory compliance, payroll management, and financial advisory services designed to simplify business finance for entrepreneurs. We combine professional expertise with modern tools to deliver fast, accurate, and scalable solutions that protect businesses from compliance risks.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Complete Business Accounting & Compliance Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured financial processes covering bookkeeping, taxes, regulatory workflows, and financial planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Bookkeeping */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bookkeeping & Transaction Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accurately record every transaction to build error-free, clean transaction trails.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Sales & Purchases</span>
                <span>✓ Daily Ledger Logging</span>
                <span>✓ Expense Categories</span>
                <span>✓ Monthly Closings</span>
              </div>
            </div>

            {/* Financial Accounting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Accounting & Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Build thorough reporting statements that reveal insights into company fiscal wellness.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Balance Sheets</span>
                <span>✓ P&L Statements</span>
                <span>✓ Cash Flow Reports</span>
                <span>✓ Quarterly Reviews</span>
              </div>
            </div>

            {/* GST Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Registration & Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end direct execution of multi-state indirect taxes, ITC tracking, and returns.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ GST Returns</span>
                <span>✓ ITC Reconciliation</span>
                <span>✓ GST Auditing</span>
                <span>✓ Notice Responses</span>
              </div>
            </div>

            {/* Income Tax & TDS */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax & TDS Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Plan and manage ongoing direct taxes while preparing bulletproof tax statements.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ITR Filings</span>
                <span>✓ Tax Optimization</span>
                <span>✓ Quarterly TDS Files</span>
                <span>✓ Form 16 & 16A</span>
              </div>
            </div>

            {/* Payroll & HR */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll Processing & HR Financials</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Optimize employee payroll cycles, payouts, payslips, and compliance entries.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary Processing</span>
                <span>✓ Payslips & Forms</span>
                <span>✓ Attendance Sync</span>
                <span>✓ TDS on Salaries</span>
              </div>
            </div>

            {/* ROC & MCA */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC & MCA Corporate Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">Stay aligned with director duties, annual returns, and statutory board minutes.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Annual Returns</span>
                <span>✓ Director KYC</span>
                <span>✓ Board Minute Book</span>
                <span>✓ MCA Audit Prep</span>
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
                The Risks of Poor Financial Systems
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Operating without structured financial protocols risks heavy statutory penalties, severe ledger inaccuracies, budget imbalances, and blocks external investor scaling.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure bulletproof protection with fully automated and professional compliance workflows."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Avoid Penalties</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevent heavy fines and operational disruption through scheduled regulatory filings.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Stable Cash Flow</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Keep absolute, high-precision control on payables, receivables, and outstandings.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Smarter Analytics</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Access real-time MIS dashboards to monitor expenses, margins, and profitability.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Scale Support</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Transition seamlessly into investor-ready financial records to ease fundraising.</p>
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
            <p className="text-sm text-slate-500 mt-1">Reliable, scalable bookkeeping setups optimized across various business sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm sm:text-sm font-bold text-slate-700">
            {['Startups', 'SMEs & Enterprises', 'IT & Software Companies', 'E-commerce Platforms', 'Manufacturing Companies', 'Distribution & Trading', 'Logistics & Transport', 'Service Businesses'].map((sector) => (
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

            {/* Left Box: Why Choose Agreetech */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Agreetech?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Fully Compliant Accounting System",
                  "Accurate & Transparent Records",
                  "Reduced Tax & Compliance Risks",
                  "Scalable Accounting Technology",
                  "Professional CA & Expert Support",
                  "Strategic Financial Advisory"
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
                <p><strong>Step 1 - Business Understanding:</strong> We analyze your exact business structure, transaction mechanics, and compliance metrics.</p>
                <p><strong>Step 2 - Financial System Setup:</strong> We engineer a custom cloud accounting platform tailored to your operations.</p>
                <p><strong>Step 3 - Data Organization:</strong> We scrub, organize, structure, and balance historical accounting and tax data.</p>
                <p><strong>Step 4 - Compliance Execution:</strong> We execute your GST, ITR, TDS, MCA, and Payroll filings without delays.</p>
                <p><strong>Step 5 - Financial Reporting:</strong> We distribute automated MIS dashboard updates, trends, and profitability benchmarks.</p>
                <p><strong>Step 6 - Continuous Advisory:</strong> We act as your ongoing strategic financial partner to control costs and support growth.</p>
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