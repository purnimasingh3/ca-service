import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.virtualCFO;

export default function PremiumVirtualCFOLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "25+ Financial Experts",
    "200+ Happy Clients ",
    "Complete Compliance]",
  ];
  const faqs = [
    { q: "What are Virtual CFO Services?", a: "Virtual CFO Services provide outsourced financial management, strategic leadership solutions, and business advisory without hiring a full-time officer." },
    { q: "Is a Virtual CFO suitable for startups?", a: "Yes. Startups benefit significantly through growth forecasting, metric budgeting, financial roadmaps, and investor readiness support." },
    { q: "Do SMEs need Virtual CFO Services?", a: "Absolutely. SMEs gain crucial day-to-day financial data control, visibility dashboards, and sustainable long-term growth planning." },
    { q: "Can you help with fundraising?", a: "Yes, we provide investor support, business valuations, pitch documentation, and robust financial projections." },
    { q: "Do you manage cash flow?", a: "Yes, cash flow optimization and working capital tracking are among our core focus services." }
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
                ⚡ Strategic Financial Leadership · Smarter Decisions
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Virtual CFO Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert CFO Guidance Without the Cost of a Full-Time CFO. We don't just manage numbers—we build financial strategies that drive business success.
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
                  Book a Free Consultation
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
            Transform Business Growth with Professional Virtual CFO Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Advisers</strong>. Running a business today is not only about managing sales and operations. Sustainable growth requires strong financial planning, cash flow management, strategic decisions, investor readiness, and profitability control.
            We help startups, SMEs, established companies, and international businesses build stronger financial systems and achieve long-term growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Virtual CFO Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Strategic and customizable financial solutions tailored to improve performance and support expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategic Financial Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Financial planning is the foundation of successful businesses. We help create roadmaps for sustainable growth.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Planning </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Goal Setting </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Forecasts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Analysis </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Planning </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expansion Strategy </span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Many profitable businesses fail because of poor cash management. We track and balance capital workflows.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Control Movement </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Track In/Outflow </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Working Capital</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Improve Liquidity </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Optimize Collection</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Support Stability</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Budgeting & Forecasting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Growth without planning creates financial risk. Proper forecasting structures clear organizational control.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Budgets</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Quarterly Forecasts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual Plans </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Targets </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cost Models </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Dept Budgets </span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Profitability Improvement </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Increasing revenue does not always mean increasing profits. We design strategies to improve margins.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reduce Ops Cost </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Plug Profit Leaks </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reduce Waste </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Manage Margins </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Fix Pricing Inefficiencies</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising & Investor Support </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Raising funds requires deep preparation. We help build models and projections to make businesses investor-ready.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Models </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pitch Support </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Plans </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Valuation Analysis </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Due Diligence Assistance </span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MIS Reporting & Dashboards </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Good decisions require accurate information. Business owners gain complete real-time visibility.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Reports </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Reports </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KPI Dashboards </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Monthly Reviews & Analytics </span>
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
                Why Businesses Need Virtual CFO Services
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many businesses generate revenue but still struggle financially due to a lack of visibility, delayed reporting, or weak growth planning. A professional consultant identifies financial gaps and optimizes operations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "We convert financial data into actionable business decisions to optimize your strategic roadmaps."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Low Profit Margins </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Fix growing sales that result in unexpectedly low net profits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Poor Cash Flows </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Eliminate inconsistent money structures and optimize collections tracking.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Improper Budgeting </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Avoid high operating costs with meticulous department budgeting and cost mapping.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Funding Challenges </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Overcome investor vetting bottlenecks with audit-ready projection tools.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Compliance & Financial Governance Risks </h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Mitigate corporate structural issues completely through systematic tax planning and compliance monitoring.</p>
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
              Benefits of Hiring Virtual CFO Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Gain access to experienced professionals at a fraction of the cost of hiring full-time internal leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Lower Overall Cost </h3>
              <p className="text-slate-700 text-sm leading-relaxed">Save on high executive salaries, employee benefits, training expenses, and infrastructure costs.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Expert Financial Leadership </h3>
              <p className="text-slate-700 text-sm leading-relaxed">Receive consistent, high-tier strategic guidance from highly experienced CFO professionals.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Accelerated Growth Planning </h3>
              <p className="text-slate-700 text-sm leading-relaxed">Scale corporate workflows and baseline operations faster through proven financial frameworks[.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Smarter Decision Making </h3>
              <p className="text-slate-700 text-sm leading-relaxed">Convert accurate data and dynamic MIS dashboards directly into profitable operational decisions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Improved Profitability </h3>
              <p className="text-slate-700 text-sm leading-relaxed">Effectively reduce operational leakages, optimize cost margins, and maximize overall returns.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Risk & Governance Reduction </h3>
              <p className="text-slate-700 text-sm leading-relaxed">Minimize day-to-day legal, regulatory, and corporate financial exposure with solid internal systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries & Sectors We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing customized financial services across size, industry, and goals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'E-commerce Brands', 'Manufacturing Units ', 'Healthcare Sector ', 'IT Companies ', 'Digital Agencies ', 'Import Export Firms ', 'Professional Firms'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Advisers
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Industry Experience",
                  "25+ In-House Financial Experts",
                  "200+ Clients Served Globally",
                  "Affordable Virtual CFO Packages",
                  "Complete Compliance Management",
                  "Customized Business Solutions"
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
                Our multidisciplinary corporate expert team features Chartered Accountants, Financial Analysts, Tax Experts, Compliance Specialists, and Business Consultants.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Services',
                  'Business Advisory Solutions'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    {srv}
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
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}