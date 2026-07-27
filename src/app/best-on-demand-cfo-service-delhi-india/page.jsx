import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: "On Demand CFO Services in Delhi | Fractional CFO & Financial Advisory | FinTax Adviser",
  description: "Get expert On Demand CFO Services in Delhi, India. FinTax Adviser provides strategic financial planning, budgeting, cash flow management, MIS reporting, fundraising support, investor advisory, and executive CFO solutions for startups, SMEs, and growing businesses.",
  keywords: "On Demand CFO Services, Fractional CFO Services, Outsourced CFO, CFO Advisory Services, Virtual CFO India, Startup CFO Services, Financial Strategy Consulting, MIS Reporting Services, Business Financial Planning, CFO Consultant Delhi",
  alternates: {
    canonical: "https://www.fintaxadviser.com/best-on-demand-cfo-service-delhi-india",
  },
};

export default function OnDemandCFOLanding() {
  const HERO_STATS = [
    "Flexible Leadership",
    "Fractional & On-Demand",
    "Investor Ready Financials",
    "Complete Financial Control",
  ];

  const faqs = [
    { q: "What is an On Demand CFO?", a: "An On Demand CFO provides executive financial leadership whenever your business requires strategic financial expertise, without the commitment of hiring a full-time CFO." },
    { q: "How is an On Demand CFO different from a full-time CFO?", a: "An On Demand CFO works on a flexible basis, allowing businesses to access high-level financial expertise only when required, making it a cost-effective solution." },
    { q: "Which businesses should use On Demand CFO Services?", a: "Startups, SMEs, growing companies, family-owned businesses, and organizations preparing for expansion or fundraising benefit significantly." },
    { q: "Can an On Demand CFO help with fundraising?", a: "Yes. We assist with financial modelling, investor reporting, business valuation, due diligence preparation, and fundraising strategy." },
    { q: "Do you provide MIS reporting?", a: "Yes. We prepare customized MIS reports, dashboards, KPI reports, profitability analysis, and executive financial reports." },
    { q: "Can an On Demand CFO improve profitability?", a: "Absolutely. We identify cost-saving opportunities, improve pricing strategies, optimize financial processes, and strengthen business performance." },
    { q: "Do you work with our accountant?", a: "Yes. Our On Demand CFO Services complement your existing accountant or finance team by providing strategic financial leadership." },
    { q: "Are your services available remotely?", a: "Yes. We provide both remote and hybrid On Demand CFO support depending on your business requirements." },
    { q: "Can you assist with budgeting and forecasting?", a: "Yes. We prepare annual budgets, financial forecasts, cash flow projections, and strategic business plans." },
    { q: "How do I get started?", a: "Contact our team to schedule an initial consultation. We'll assess your business needs and recommend a customized On Demand CFO engagement plan." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Flexible Financial Advisory · On-Demand Leadership
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                On Demand CFO Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert On Demand CFO Services for Startups, SMEs, and Growing Businesses. Access high-level financial direction, cash flow optimization, and investor readiness on a part-time or project basis.
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
            Flexible Financial Leadership Exactly When You Need It
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Every growing business reaches a stage where financial decisions become more complex and require strategic expertise.
             Whether raising investment, improving cash flows, expanding into new markets, or increasing profitability, 
             hiring a permanent CFO is expensive and unnecessary for many enterprises. Our <strong className="text-slate-900 font-semibold">On Demand CFO Services</strong> deliver executive-level expertise on a part-time, project-based, or advisory basis.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our On Demand CFO Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored financial strategies, internal controls, and execution support to scale your business with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategic Planning & Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Financial strategy is the foundation of growth. We evaluate positions and plans to ensure every decision supports profitability.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Goal Setting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expansion Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Performance Analysis</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Budgeting & Forecasting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structured budgets improve resource allocation and operational discipline using historical performance and goals.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual Budgets</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Reviews</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Models</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KPI Forecasting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Variance Analysis</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow & Working Capital</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluate cash cycles, optimize payables, streamline receivables, and safeguard operational liquidity.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Working Capital</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Cycle Fix</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Receivables Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reserve Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Payables Timing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Banking Support</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MIS & Performance Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Convert raw accounting books into easy-to-read business dashboards, ratio metrics, and profit breakdowns.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly MIS</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Executive Dashboards</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Budget vs Actuals</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Department Performance Reports</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising & Investor Relations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Prepare investor-ready financials, valuation models, projections, and due diligence assets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Due Diligence</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investor Models</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Valuation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Funding Strategy</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Board Deck Preparation Support</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Controls & Expansion Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Enforce strong internal processes, manage expansion risk, and optimize vendor cost structures.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Internal Controls</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cost Structures</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Margin Optimization</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expansion Feasibility</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Governance & Audit Coordination</span>
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
                Why Businesses Choose On Demand CFO Services
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Facing rising operational expenses, funding requirements, market uncertainty, or compliance updates? Having an experienced financial leader on demand helps you tackle challenges flexibly.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Gain high-level financial direction exactly when required—ensuring efficiency without permanent overhead."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Cost Efficiency</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Access expert advice without the full-time salary, benefits, and office expenses.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Strategic Planning</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prepare long-term financial roadmaps to guide growth sustainably.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Decision Support</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Understand the true financial impact before making new investments or scaling operations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Cash Flow Management</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Improve collection cycles, monitor liquidity, and stabilize working capital.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Expansion Feasibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Evaluate market opportunities, capital requirements, and ROI before scaling into new regions.</p>
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
              Benefits of On Demand CFO Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Get executive leadership on flexible engagement terms designed to maximize enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Executive Leadership</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Tap into high-tier strategic guidance from experienced CAs and finance leaders.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Affordable Model</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Get top-tier financial expertise while controlling operational overhead.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Improved Profitability</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Identify margin leaks and optimize pricing, vendor costs, and workforce spending.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Flexible Scope</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Scale engagement up or down depending on your current business projects.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Strong Governance</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Establish clear internal controls, risk management, and regulatory compliance.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Investor Readiness</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Present transparent financial statements that build lender and investor trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing tailored financial management across key sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups & MSMEs', 'Private Limiteds & LLPs', 'Manufacturing & IT', 'E-commerce & Retail', 'Healthcare & Education', 'Construction & Real Estate', 'Logistics & Export', 'Family-Owned Businesses'].map((sector) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose FinTax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced CAs & CFO Experts",
                  "Flexible Engagement Models",
                  "Industry-Specific Solutions",
                  "Advanced Financial Reporting",
                  "Board & Investor Advisory",
                  "PAN India Service Reach"
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
                We integrate with your leadership team, delivering clear and measurable guidance whenever you need it.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration & Filing',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Advisory',
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