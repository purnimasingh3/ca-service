import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: "Remote CFO Services in Delhi | Virtual CFO Services for Startups & SMEs | FinTax Adviser",
  description: "Looking for expert Remote CFO Services in Delhi? FinTax Adviser provides virtual CFO services, financial planning, budgeting, MIS reporting, fundraising support, cash flow management, and strategic financial advisory for startups and growing businesses.",
  keywords: "Remote CFO Services, Virtual CFO Services, Outsourced CFO Services, Fractional CFO, Startup CFO Services, CFO Advisory, Financial Strategy Services, MIS Reporting, Business Financial Planning, Virtual Finance Director, CFO Consultant India",
  alternates: {
    canonical: "https://www.fintaxadviser.com/best-remote-cfo-service-delhi-india",
  },
};

export default function RemoteCFOLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "25+ Financial Experts",
    "200+ Happy Clients",
    "Complete Compliance",
  ];

  const faqs = [
    { q: "What are Remote CFO Services?", a: "Remote CFO Services provide businesses with access to experienced financial executives who offer strategic financial guidance without being employed full-time." },
    { q: "How is a Remote CFO different from an accountant?", a: "An accountant focuses on bookkeeping and compliance, while a Remote CFO provides strategic financial planning, budgeting, forecasting, fundraising support, and executive-level financial advice." },
    { q: "Which businesses should hire a Remote CFO?", a: "Startups, SMEs, growing companies, family businesses, and organizations seeking professional financial leadership can benefit significantly." },
    { q: "Can a Remote CFO help with fundraising?", a: "Yes. Our Remote CFOs prepare financial models, projections, investor reports, and due diligence documentation to support fundraising activities." },
    { q: "How often will I interact with my Remote CFO?", a: "The engagement can be customized based on your business needs, ranging from weekly meetings to ongoing monthly strategic support." },
    { q: "Can Remote CFO Services improve profitability?", a: "Yes. Through cost optimization, financial analysis, pricing strategies, and business planning, our Remote CFOs help improve overall profitability." },
    { q: "Are Remote CFO Services suitable for startups?", a: "Absolutely. Startups gain access to executive-level financial expertise without the high cost of hiring a full-time CFO." },
    { q: "Do you provide virtual board meeting support?", a: "Yes. Our Remote CFO professionals can assist with board meetings, investor presentations, strategic planning, and executive financial discussions." },
    { q: "Can you work with our existing accountant?", a: "Yes. Our Remote CFO Services complement your existing accounting and compliance teams by providing strategic financial leadership." },
    { q: "How do I get started?", a: "Contact our team to schedule a consultation. We'll evaluate your business requirements and recommend a Remote CFO engagement plan tailored to your goals." }
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
                ⚡ Expert Remote Financial Leadership · Growth Focused
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Remote CFO Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert Remote CFO Services for Startups, SMEs & Growing Businesses. Gain access to executive financial leadership, advanced reporting, and profitability optimization without the cost of a full-time CFO.
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
            Strategic Financial Leadership for Growing Organizations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>[cite: 1]. Managing a business requires more than maintaining accounts and filing tax returns[cite: 1]. As your company grows, financial decisions become increasingly complex, requiring strategic planning, accurate forecasting, cash flow management, investor reporting, and performance analysis[cite: 1]. Our professional <strong className="text-slate-900 font-semibold">Remote CFO Services</strong> help startups, SMEs, and growing enterprises access executive financial expertise tailored to their exact business goals[cite: 1].
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Remote CFO Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive financial expertise, technology-driven reporting, and strategic advisory customized to scale your company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Planning & Strategy</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">A strong financial strategy is essential for sustainable growth[cite: 1]. We build tailored roadmaps that align goals with operational success[cite: 1].</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Roadmaps</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expansion Advisory</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Goal Alignment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Restructuring</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Budgeting & Financial Forecasting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Minimizing uncertainty requires clear planning[cite: 1]. We prepare realistic budgets using historical data, industry trends, and future goals[cite: 1].</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual Budgets</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Reviews</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Forecasts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Variance Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Scenario Models</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KPI Reporting</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow & Working Capital</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintaining liquidity is critical[cite: 1]. We monitor cash movement, optimize receivables, and protect working capital for continuous stability[cite: 1].</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Liquidity Control</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Receivables Fix</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reserve Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Banking Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Payables Timing</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MIS Reporting & Dashboards</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We convert raw metrics into real-time business intelligence with intuitive dashboards and customizable MIS executive reports[cite: 1].</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly MIS</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Exec Dashboards</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cost Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Ratio Monitoring</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Department Performance Reviews</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising & Investor Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Build investor confidence with structured valuation models, 3-5 year financial projections, and due diligence preparation[cite: 1].</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Models</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pitch Deck Proj</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Valuation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Due Diligence</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Investor Deck Financial Support</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Controls, Risk & Profitability</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Protect business assets, reduce operational fraud, optimize procurement, and improve profit margins systematically[cite: 1].</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Auditing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pricing Strategies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Internal Controls</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Management</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Virtual Board Advisory Support</span>
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
                Why Businesses Need Remote CFO Services
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                As businesses grow, financial management becomes increasingly challenging[cite: 1]. Owners often make critical choices without executive guidance, leading to cash bottlenecks, inefficient budgeting, and margin leakage[cite: 1].
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Our Remote CFOs provide accurate analysis and strategic leadership to help management teams make confident, data-backed decisions."[cite: 1]
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Better Decisions</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Evaluate operations, hires, and investments with real data instead of assumptions[cite: 1].</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Cash Flow Management</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Eliminate operational bottlenecks by forecasting liquidity and optimizing receivables[cite: 1].</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Cost Control</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Pinpoint unnecessary operational expenses and improve gross margins[cite: 1].</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Investor Confidence</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Present audit-ready, professionally structured financial data to banks and VCs[cite: 1].</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">KPI & Performance Tracking</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Track Revenue Growth, EBITDA, CAC, ROI, and Accounts Receivable Days continuously[cite: 1].</p>
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
              Benefits of Hiring Remote CFO Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Get executive leadership, institutional oversight, and strategic scaling at a fraction of full-time executive costs[cite: 1].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Cost-Effective Alternative</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Eliminate heavy executive salaries, benefits, and long-term overhead costs[cite: 1].</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Executive Expertise</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Access experienced Chartered Accountants and strategic financial advisors[cite: 1].</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Scalable Leadership</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Flexibly adjust engagement scope as your business grows and expands[cite: 1].</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Data-Driven Insights</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Turn static financial books into actionable operational strategies[cite: 1].</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Enhanced Profitability</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Plug financial leaks and optimize margins through strategic cost reviews[cite: 1].</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Reduced Financial Risk</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Enforce strict internal controls, governance, and preventive monitoring[cite: 1].</p>
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
            <p className="text-xs text-slate-500 mt-1">Providing industry-specific financial leadership tailored to your business realities[cite: 1].</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups & SaaS', 'E-commerce & D2C', 'Manufacturing Units', 'Healthcare Companies', 'Logistics & Export', 'Professional Services', 'Real Estate & Construction', 'Family Businesses'].map((sector) => (
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
                  "Customized Financial Strategies",
                  "Dedicated Remote Support",
                  "Real-Time Analytics & MIS",
                  "Investor & Board Advisory",
                  "Confidential Data Handling"
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
                Our team acts as an extension of your leadership, providing PAN India services and strategic expertise to drive measurable expansion[cite: 1].
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
                  'Payroll Management',
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