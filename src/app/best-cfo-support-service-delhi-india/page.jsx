import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: "CFO Support Services in Delhi | Strategic Financial Advisory for Businesses | FinTax Adviser",
  description: "Expert CFO Support Services in Delhi, India. Get professional financial planning, budgeting, forecasting, MIS reporting, cash flow management, fundraising support, profitability analysis, and strategic CFO advisory for startups and growing businesses.",
  keywords: ["CFO Support Services", "CFO Advisory Services", "Outsourced CFO Services", "Financial Planning Services", "Virtual CFO Support", "Business Financial Advisory", "MIS Reporting Services", "Cash Flow Management", "Startup CFO Services", "CFO Consultant Delhi"],
  alternates: {
    canonical: "https://fintaxadviser.com/best-cfo-support-service-delhi-india",
  },
};

export default function CFOSupportServicesLanding() {
  const HERO_STATS = [
    "Strategic Advisory Leadership",
    "Tailored Financial Frameworks",
    "Advanced MIS Reporting",
    "Complete Governance Support",
  ];

  const faqs = [
    { q: "What are CFO Support Services?", a: "CFO Support Services provide businesses with executive-level financial guidance, strategic planning, budgeting, forecasting, cash flow management, and financial advisory support." },
    { q: "How are CFO Support Services different from accounting services?", a: "Accounting focuses on recording transactions and compliance, while CFO Support Services focus on strategy, planning, profitability, and business growth." },
    { q: "Which businesses need CFO Support Services?", a: "Startups, SMEs, family businesses, growing companies, and organizations requiring financial leadership can benefit significantly." },
    { q: "Can CFO Support Services help with fundraising?", a: "Yes. We assist with financial modelling, investor reporting, business valuation, due diligence preparation, and funding strategy." },
    { q: "Do you provide MIS reporting?", a: "Yes. We prepare customized MIS reports, financial dashboards, KPI reports, and management reporting solutions." },
    { q: "Can CFO Support improve profitability?", a: "Absolutely. We identify inefficiencies, optimize costs, improve financial planning, and enhance operational performance." },
    { q: "Do you provide remote CFO support?", a: "Yes. Our CFO Support Services can be delivered remotely, onsite, or through a hybrid engagement model." },
    { q: "Can you assist with budgeting and forecasting?", a: "Yes. We prepare budgets, financial forecasts, cash flow projections, and strategic financial plans." },
    { q: "Will you work with our accountant?", a: "Yes. Our CFO professionals complement your existing accounting team by providing executive-level financial leadership." },
    { q: "How do I get started?", a: "Simply contact FinTax Adviser for an initial consultation, and our experts will recommend a customized CFO Support solution based on your business requirements." }
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
                ⚡ Professional Executive Advisory · Sustainable Growth
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                CFO Support Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional CFO Support Services for Startups, SMEs & Growing Businesses. Access executive-level financial management and strategic guidance without full-time overhead.
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
            Strengthen Financial Systems & Optimize Performance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>, we provide comprehensive CFO Support Services in Delhi, India, helping startups, SMEs, private limited companies, LLPs, and established organizations strengthen their financial management while reducing operational risks. Our experienced CAs and CFO experts work directly with leadership to build strong systems and enhance decision-making.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our CFO Support Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end financial leadership solutions designed to support businesses at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Planning & Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluating financial positions, operational efficiency, and market trends to establish structured growth strategies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Strategic Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expansion Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Goal Setting</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Executive Financial Reporting & Analysis</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Budgeting & Financial Forecasting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Establishing accurate annual budgets, revenue projections, and variance analysis to maintain budget discipline.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Budget Preparation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Forecasts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Forecasts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Variance Analysis</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Scenario Analysis & Projections</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow & Working Capital</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Monitoring liquidity, streamlining payment schedules, and managing receivables to sustain continuous cash flow.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Liquidity Control</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Receivables Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Payables Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Banking Support</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Cash Reserve & Expense Planning</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MIS Reporting & Intelligence</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Converting financial numbers into structured management insights through custom MIS frameworks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly MIS</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Executive Dashboards</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cost Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Ratio Analysis</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Department Performance Reports</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Internal Controls & Governance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Designing internal risk management policies, audit mechanisms, and corporate governance frameworks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Process Reviews</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Assessments</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fraud Prevention</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Audit Coordination</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Financial Policy Development</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cost & Profit Optimization</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Conducting in-depth cost reviews, pricing analysis, and margin improvement strategies without affecting operational quality.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Margin Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pricing Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Vendor Review</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Operational Efficiency Benchmarking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Need Section */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Your Business Needs CFO Support
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                As businesses expand, financial decisions become increasingly complex. Business owners need strategic advisory to manage growth, control costs, improve profitability, and prepare for external investments.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Bridge the gap between simple accounting records and executive strategic decision-making."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Strategic Leadership</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Align business strategies with realistic financial roadmaps for long-term growth.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Cash Flow Stability</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Maintain liquidity and eliminate working capital bottlenecks across daily operations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Smarter Decision-Making</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Gain dynamic data insights to evaluate investments, hirings, and market entries.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Fundraising Support</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Build investor-ready pitch models, valuation reports, and due diligence documentation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Key Benefits of CFO Support Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Providing flexible, scalable financial leadership designed for long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Executive Guidance", d: "Access top-level CFO insights without the high cost of a full-time executive." },
              { t: "Enhanced Profitability", d: "Pinpoint inefficiencies, eliminate cost leaks, and optimize product margins." },
              { t: "Robust Control Frameworks", d: "Establish transparent financial policies and reduce internal risk exposure." },
              { t: "Scalable Operations", d: "Expand business infrastructure with structured capital planning and projections." },
              { t: "Real-Time Dashboard Monitoring", d: "Track Key Performance Indicators like EBITDA, Cash Conversion, and Working Capital ratios." },
              { t: "Strong Compliance Assurance", d: "Ensure statutory requirements and governance frameworks are consistently met." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{item.t}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced CAs & CFO Advisors",
                  "Industry-Specific Solutions",
                  "Customized Growth Strategies",
                  "Dedicated Advisory Support",
                  "Board-Level Financial Reporting",
                  "Transparent Communication",
                  "Confidential Data Handling",
                  "PAN India Service Network"
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

            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Comprehensive Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Expansion & Strategic Growth Advisory
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Market Expansion Feasibility',
                  'Capital Investment Analysis',
                  'M&A Valuation Support',
                  'ERP Process Alignment',
                  'Working Capital Structuring',
                  'Credit Risk Assessment',
                  'Investor Deck Preparation',
                  'Board Meeting Advisory'
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