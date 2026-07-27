import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata?.taxConsultancyStartups || {
  title: "Tax Consultancy Services for Startups in Delhi | Startup Tax Experts | FinTax Adviser",
  description: "Expert Tax Consultancy Services for Startups in Delhi, India. We provide GST consultancy, income tax planning, TDS compliance, startup tax advisory, return filing, and end-to-end tax solutions for new businesses."
};

export default function TaxConsultancyStartupLanding() {
  const HERO_STATS = [
    "Experienced CAs & Tax Experts",
    "End-to-End Compliance Support",
    "Transparent & Startup-Friendly Pricing",
    "100% Digital & Confidential Process"
  ];

  const faqs = [
    { 
      q: "Why do startups need tax consultancy services?", 
      a: "Professional tax consultancy helps startups comply with tax laws, reduce tax liabilities, avoid penalties, and establish strong financial systems from the beginning." 
    },
    { 
      q: "When should a startup hire a tax consultant?", 
      a: "Ideally, before registering the business or immediately after incorporation to ensure proper tax planning and compliance." 
    },
    { 
      q: "Is GST registration mandatory for every startup?", 
      a: "No. GST registration depends on turnover, business activities, interstate supplies, and other legal requirements." 
    },
    { 
      q: "Can tax planning reduce business taxes legally?", 
      a: "Yes. Strategic tax planning helps businesses claim eligible deductions, exemptions, and incentives while remaining fully compliant." 
    },
    { 
      q: "Do you assist with Income Tax Return filing?", 
      a: "Yes. We provide complete ITR filing, tax planning, tax computation, and compliance support." 
    },
    { 
      q: "Can you help startups receiving investment?", 
      a: "Yes. We advise on tax implications of funding, share capital, investor compliance, and business structuring." 
    },
    { 
      q: "What happens if a startup misses tax deadlines?", 
      a: "Delayed filings may attract penalties, interest, notices, and additional compliance requirements." 
    },
    { 
      q: "Do startups need TDS compliance?", 
      a: "If applicable under the Income Tax Act, startups must deduct, deposit, and file TDS returns on specified payments." 
    },
    { 
      q: "Can you handle all startup tax compliance?", 
      a: "Yes. We provide end-to-end tax consultancy covering GST, Income Tax, TDS, payroll taxation, and strategic tax planning." 
    },
    { 
      q: "How can I get started?", 
      a: "Simply contact our experts to schedule a consultation. We'll assess your startup's needs and recommend a customized tax compliance and planning strategy." 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Advanced Ambient UI Background Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Startup Tax Advisory · Zero Compliance Risk
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Tax Consultancy Services for Startups
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert Tax Consultancy Services for Startups to Build a Strong Financial Foundation. From business structuring to GST, TDS, and Income Tax compliance—we simplify taxation so you can scale with confidence.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* HERO RIGHT FORM */}
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
            Build a Strong Financial & Legal Foundation for Your Startup
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Starting a new business is an exciting journey, but navigating complex Indian tax laws shouldn't hold you back. 
            Unlike traditional accounting firms that only focus on year-end return filing, we provide full lifecycle tax advisory—from incorporation and registration to fundraising, expansion, and long-term tax optimization.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Startup Tax Consultancy Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored, practical, and fully compliant tax solutions built specifically for early-stage companies and founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Startup Tax Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Proactive tax strategies to evaluate projected income, operational expenses, funding, and growth plans to legally minimize tax exposure.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Tax Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Saving Advisory</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Structuring</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Investment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Founder Compensation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Impact Analysis</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business & Tax Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Guidance on selecting and registering the right legal structure to prevent expensive future restructuring costs.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pvt Ltd Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> LLP & OPC Setup</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PAN & TAN Allotment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MSME Guidance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Startup India Advisory</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Consultancy Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete GST compliance infrastructure to maintain pristine records, optimize input tax credit, and handle returns smoothly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Return Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Input Tax Credit (ITC)</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Audit Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Reconciliation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> E-Invoicing Guidance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Refund & Notices</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive corporate tax advisory ensuring full statutory compliance while maximizing available benefits under the Income Tax Act.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Accurate ITR Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Advance Tax Control</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Computation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Deduction Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Assessment Help</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Notice Response</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TDS & Payroll Tax Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end withholding tax mechanisms to handle vendor deductions, salary structures, Form 16, and quarterly filings.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Quarterly TDS Returns</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Form 16 & 16A Issuance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Salary Structuring</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Professional Tax</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Vendor TDS Compliance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> TDS Reconciliation</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Funding & Investor Tax Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Strategic capital advisory for angel & VC funding, share valuation, ESOP structuring, and tax due diligence.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Angel Tax Guidance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Equity Structuring</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ESOP Tax Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Valuation</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Due Diligence & Capital Gain Planning</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-funding" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Startups Need Professional Tax Consultancy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many entrepreneurs mistakenly believe tax planning is only needed after generating massive revenue. In reality, early tax strategy prevents costly regulatory penalties and builds essential investor trust.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Choosing the right business structure and tax framework from day one drastically reduces future restructuring costs and compliance overhead."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Right Entity Structure</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Evaluation of Pvt Ltd, LLP, Partnership, OPC, or Sole Proprietorship for optimal tax impact.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Timely Tax Compliance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Eliminate late filings, interest penalties, and statutory notices with disciplined monitoring.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Tax Reduction</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Maximize startup deductions, tax incentives, and government subsidies without risking non-compliance.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Investor Confidence</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Streamline financial documentation to ensure due-diligence readiness during fundraising rounds.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Error Prevention & Systemization</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prevent improper GST claiming, mismatched TDS credits, or inaccurate bookkeeping with systematic workflows.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Key Benefits for Founders & Startups
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Strategic, structured, and long-term advantages designed to give your venture peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Lower Tax Liabilities</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Legal tax optimization utilizing legitimate exemptions, deductions, and startup-friendly provisions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Minimized Penalty Risk</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Automated compliance tracking to avoid late payment fines, interest, and statutory notices.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Improved Cash Flow</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Optimize working capital through timely Input Tax Credit (ITC) realization and advance tax estimation.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Fundraising Readiness</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Maintain clean, audit-ready balance sheets that instill immediate VC and Angel investor trust.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Financial Transparency</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Accurate financial statements and reports for complete clarity into business health.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Peace of Mind for Founders</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Focus 100% on product development and growth while our CAs handle regulatory hurdles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries & Startup Sectors We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">Customized tax advisory designed around your unique operational model.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Technology & SaaS', 
              'E-commerce & D2C', 
              'Manufacturing Units', 
              'Healthcare & FinTech', 
              'EdTech & Logistics', 
              'Food & Beverage', 
              'Marketing Agencies', 
              'Import Export & NGOs'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Required Documents Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose FinTax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Chartered Accountants",
                  "Startup-Focused Tax Expertise",
                  "Personalized Tax Strategies",
                  "Transparent & Fixed Pricing",
                  "Fast Response & Support",
                  "End-to-End Compliance Support",
                  "Digital Documentation Process",
                  "100% Confidentiality & Security"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our team provides PAN India coverage, bringing together CAs, Tax Consultants, and Corporate Lawyers to handle every aspect of startup compliance.
              </p>
            </div>

            {/* Right Column: Key Documents Checklist */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Onboarding Checklist
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Documents Required for Startup Tax Advisory
                </h3>
              </div>

              {/* Grid List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Certificate of Incorporation',
                  'Company PAN & TAN Card',
                  'Director Aadhaar & PAN Cards',
                  'GST Registration Certificate',
                  'Current Bank Statements',
                  'Sales & Purchase Invoices',
                  'Expense & Payroll Records',
                  'TDS Records & Filing Data',
                  'Previous Income Tax Returns',
                  'Audited Financial Statements'
                ].map((doc) => (
                  <div
                    key={doc}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
                  >
                    <span className="text-blue-600 font-bold">•</span>
                    {doc}
                  </div>
                ))}
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}