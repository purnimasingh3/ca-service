import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: "Hire Virtual CFO in Delhi | Virtual CFO Services for Startups & SMEs | FinTax Adviser",
  description: "Hire a Virtual CFO in Delhi, India with FinTax Adviser. Get expert financial planning, cash flow management, budgeting, MIS reporting, fundraising support, investor advisory, and strategic CFO services for startups, SMEs, and growing businesses.",
  keywords: ["Hire Virtual CFO", "Virtual CFO Services", "Outsourced CFO", "Fractional CFO", "CFO Services India", "Startup CFO", "Financial Strategy Consulting", "MIS Reporting Services", "Business Financial Planning", "CFO Consultant Delhi"],
  alternates: {
    canonical: "https://www.fintaxadviser.com/best-hire-virtual-cfo-delhi-india",
  },
};

export default function HireVirtualCFOLanding() {
  const HERO_STATS = [
    "Executive-Level Financial Expertise",
    "Cost-Effective Leadership",
    "Better Cash Flow & Growth",
    "Complete Governance & Compliance",
  ];

  const faqs = [
    { q: "What does a Virtual CFO do?", a: "A Virtual CFO provides strategic financial planning, budgeting, forecasting, cash flow management, MIS reporting, fundraising support, and executive financial advisory." },
    { q: "Why should I hire a Virtual CFO?", a: "Hiring a Virtual CFO provides executive-level financial expertise without the high cost of employing a full-time Chief Financial Officer." },
    { q: "Which businesses benefit from Virtual CFO Services?", a: "Startups, SMEs, family-owned businesses, growing companies, and organizations seeking strategic financial leadership benefit significantly." },
    { q: "Can a Virtual CFO help with fundraising?", a: "Yes. We prepare financial models, projections, valuation reports, investor presentations, and due diligence documentation." },
    { q: "Do you work with our accountant?", a: "Yes. Our Virtual CFO complements your existing accounting team by providing strategic financial management." },
    { q: "Can a Virtual CFO improve profitability?", a: "Yes. Through cost optimization, financial analysis, pricing strategies, and operational improvements, we help businesses increase profitability." },
    { q: "Do you provide remote support?", a: "Yes. Our Virtual CFO Services are delivered remotely, with online meetings, regular reporting, and ongoing advisory support." },
    { q: "Can you prepare MIS reports?", a: "Yes. We prepare customized MIS reports, financial dashboards, KPI reports, and management summaries." },
    { q: "How often will I interact with the Virtual CFO?", a: "The engagement can be weekly, monthly, quarterly, or project-based depending on your business requirements." },
    { q: "How can I hire a Virtual CFO?", a: "Simply contact FinTax Adviser for an initial consultation. We will assess your business needs and recommend a customized Virtual CFO engagement plan." }
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
                ⚡ Strategic Financial Leadership · Smarter Decisions
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Hire Virtual CFO
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Hire a Virtual CFO for Strategic Financial Leadership & Business Growth. Gain executive-level financial management without the cost of employing a full-time CFO.
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
            Strategic Financial Leadership Tailored for Your Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>, we provide professional Hire Virtual CFO Services in Delhi, India, helping startups, small businesses, medium-sized enterprises, and established organizations strengthen their financial management and make confident business decisions. Our experienced Chartered Accountants and CFO professionals work closely with business owners to understand objectives, identify financial challenges, and implement customized financial strategies.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Hire Virtual CFO Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Executive-level financial solutions customized to meet your strategic business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategic Financial Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluating your financial position, objectives, and expansion opportunities to develop customized financial strategies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Strategy Development</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Roadmaps</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Performance Reviews</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Budgeting & Financial Forecasting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparing detailed budgets and projections based on historical data, market conditions, and future goals.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual Budgets</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Reviews</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Forecasting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Scenario Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KPI Forecasting</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow & Working Capital</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Monitoring cash movement, optimizing working capital, and strengthening liquidity management.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Flow Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Liquidity Control</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Receivables Tracking</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Payables Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Banking Relations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Reserves</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MIS Reporting & Dashboards</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Designing interactive dashboards and customized MIS reports that transform raw data into actionable insights.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly MIS</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Executive Dashboards</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profitability Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Budget vs Actual</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Financial Ratio & KPI Analysis</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising & Investor Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparing professional financial documentation, investor financial models, and valuation support.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Due Diligence</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Models</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Valuation Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Strategy</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Investor Presentations & Review</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Controls & Governance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluating existing systems to strengthen financial governance, internal controls, and risk management.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Process Reviews</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Assessments</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fraud Prevention</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Advisory</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Internal Policy Development</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need Section */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Should You Hire a Virtual CFO?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Every growing business reaches a stage where financial management becomes too complex to handle through accounting alone. Business owners require strategic insights to reduce risks, improve profitability, and prepare for future growth.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Gain executive-level financial management without the expense of employing a full-time senior finance executive."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Executive Financial Expertise</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Gain years of multi-industry financial leadership to analyze business performance and spot opportunities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Reduce Operational Costs</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Eliminate full-time executive salaries, benefits, and office space costs by paying only for what you need.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Better Cash Flow Control</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Monitor cash movement, improve collection cycles, and optimize working capital to ensure healthy liquidity.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Strategic Performance Growth</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Identify operational inefficiencies, optimize pricing strategies, and maximize margins using dynamic KPI dashboards.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Hiring a Virtual CFO
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Partnering with an experienced Virtual CFO delivers measurable long-term business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Executive Financial Expertise", d: "High-tier strategic advice tailored to your exact organizational goals." },
              { t: "Cost-Effective Leadership", d: "Access flexible, senior-level guidance without full-time executive payroll overhead." },
              { t: "Better Cash Flow Management", d: "Maintain optimal liquidity and optimize working capital cycles." },
              { t: "Accurate Budgeting & Forecasting", d: "Build robust financial models, scenario projections, and annual budgets." },
              { t: "Investor-Ready Reporting", d: "Gain credibility with venture capitalists, banks, and private equity firms." },
              { t: "Risk & Governance Reduction", d: "Protect assets and minimize operational, legal, and compliance risks." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{item.t}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries & Business Types We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">Delivering tailored financial management across diverse sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups & Scaleups', 'SMEs & MSMEs', 'SaaS & IT Firms', 'E-commerce & D2C', 'Manufacturing Companies', 'Healthcare Organizations', 'Logistics & Supply Chain', 'Family Enterprises'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Advisory Value Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced CAs & CFO Professionals",
                  "Customized Financial Strategies",
                  "Industry-Specific Insights",
                  "Dedicated Virtual CFO Support",
                  "Advanced Financial Reporting",
                  "Confidential Data Management",
                  "Affordable Engagement Models",
                  "PAN India Service Delivery"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Corporate Advisory
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Comprehensive Financial Advisory Services
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Financial Due Diligence',
                  'Cost Optimization Advisory',
                  'Business Expansion Planning',
                  'Internal Control Frameworks',
                  'Investor Pitch Deck Review',
                  'KPI Dashboard Design',
                  'Tax Strategy & Planning',
                  'Regulatory Governance'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
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