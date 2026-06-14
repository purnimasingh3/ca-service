import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.misReporting;

export default function PremiumMISReportingLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "100% Accurate & Secure Process",
    "Expert Consultation & Support",
  ];
  const faqs = [
    {
      q: "What are MIS Reporting Services?",
      a: "MIS Reporting Services involve the systematic collection, analysis, and presentation of business operational and financial data in a structured layout. These help tracking indicators, control costs, and plan strategic growth paths."
    },
    {
      q: "Why are MIS reports important for businesses?",
      a: "They offer granular transparency covering margins, department productivity logs, revenue trends, and working capital status. This ensures leadership decisions are based on accurate data rather than assumptions."
    },
    {
      q: "What distinct types of MIS reports do you provide?",
      a: "We provide comprehensive solutions including Monthly MIS Reports, Cash Flow Reports, Sales Performance Reps, Budget vs Actual variance analytics, and custom KPI dashboards."
    },
    {
      q: "What exactly are Virtual CFO Services?",
      a: "Virtual CFO Services provide professional corporate financial guidance without hiring an expensive full-time executive. Responsibilities include long-term forecasting, capital risk analysis, budgeting systems, and investor reports."
    },
    {
      q: "How do customized management dashboards improve my profitability?",
      a: "By tracking trends in real time, dashboards help you isolate profitable segments, monitor variable overhead costs, identify operational leaks, and focus resources on high-margin products."
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
                ⚡ Smart Reports · Better Insights · Stronger Business!
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Best MIS Reporting Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get accurate MIS Reports, Management Dashboards, and Financial Insights to improve performance, control costs, and accelerate business growth.
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
            Advanced MIS Reporting & Management Dashboard Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. In today's highly competitive business environment, companies need more than just accounting records and financial statements. Modern businesses generate huge volumes of financial and operational data every day. However, raw data alone cannot help management teams improve profitability or business efficiency. We specialize in converting complex numbers into structured reports, customized dashboards, and actionable business strategies.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Core MIS Reporting & Business Growth Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Customized reporting structures designed to track indicators, increase operational clarity, and support management expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom MIS Reporting Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive mapping solutions built to give leadership profiles and stakeholders real-time transparency across key vectors.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly MIS Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial MIS Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Sales MIS Reporting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Budget vs Actual Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Management Dashboards</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Intelligence</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Virtual CFO Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional financial management support providing high-level strategy and control metrics without the cost of a full-time hire.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Budgeting & Forecasting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Flow Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Strategy Development</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investor Reporting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Improvement</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Systems</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Management Reporting Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Track department KPIs, operational controls, and variance breakdowns to accelerate critical executive decisions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Growth Tracking</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Sales Performance Matrix</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Control Systems</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Working Capital Tracking</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Receivables Collection</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Productivity</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Advisory Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Actionable strategy design mapping out performance optimizations, investment directions, and structural restructurings.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Startup Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expansion Strategies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cost Optimization</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investment Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Process Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Assessments</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Reporting Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintain end-to-end transparency and systematic financial oversight with highly accurate, audited tracking indices.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit & Loss Accounts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Balance Sheet Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Margin & Ratio Tracking</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Working Capital Maps</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Statements</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Analysis</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investor MIS & Startup Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Specialized systems structured to communicate transparent operational growth metrics cleanly to incoming capital venture groups.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fundraising Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> VC Data Packaging</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investor Presentations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Vector Layouts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Performance Audits</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-funding" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Professional MIS Reporting Services
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Management Information Systems convert unorganized operational records into structured logic models, giving your executive team accurate metrics instead of blind assumptions.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Structured metrics drive modern scaling strategy. Let our reports map out your exact data workflows."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Increase Profitability</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Isolate high-performing items, profitable service vectors, and target clients to focus output parameters.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Optimize Cash Flows</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Systematically monitor ongoing accounts receivable, outgoing vendor payments, and working capital limits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Better Expense Control</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Isolate unnecessary leaks, manage department variances, and minimize structural overhead expenses quickly.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Faster Decision Making</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Access visual metrics instantly, reducing turnaround latency for time-critical corporate opportunities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Transparency & Planning</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Improve communication between working business segments, board divisions, and prospective institutional investors via organized forecasting indices.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Sectors Grid */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Industries and Business Models We Serve
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Developing specialized frameworks configured exactly around unique sector rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Startups & E-commerce</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Optimized tracking frameworks targeting unit economics, user conversion trends, burn rates, and investor transparency charts.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Manufacturing & Logistics</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Focused tracking layouts covering supply chain logistics, cost-of-goods-sold (COGS), factory productivity, and inventory turnover indices.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Healthcare & Education</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Structured compliance frameworks to track operational efficiency, infrastructure costs, and department performance indices.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Service Firms & Agencies</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Target metrics designed around billable engineering blocks, human resource capital productivity, and project margin performance levels.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Corporate Groups & Exports</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Advanced dashboard modules mapping complex entity structures, consolidated operations, and working asset tracking loops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Sector Tags Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Tailored Reporting Solutions for any Operational Setup
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'Manufacturing Companies', 'Retail Businesses', 'Healthcare Organizations', 'Educational Institutes', 'E-commerce Businesses', 'Service Companies', 'Corporate Groups'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our 5-Stage System Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured roadmap built to systematically translate unformatted system records into secure decision points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Data Collection</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Compiling internal operational records and raw financial logs cleanly.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Deep Analysis</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Processing margin trends, expense leaks, and department variations.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Dashboard Design</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Structuring clean, visually intuitive executive performance dashboards.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Review & Alignment</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Reviewing reporting layouts to match management expectations.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Strategic Deployment</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Delivering accurate reports for long-term growth tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Corporate Advisory Footer Box */}
      <section className="py-20 lg:py-24 bg-sky-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser for MIS Services?
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years of Industry Experience",
                  "500+ Happy Clients Served",
                  "Customized Management Reports",
                  "Advanced Financial Dashboards",
                  "Dedicated Expert Reporting Team",
                  "Virtual CFO Expertise Included"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-300 p-4 rounded-xl shadow-xs hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-400 max-w-md">
                Our team blends deep accounting expertise with business intelligence models to convert raw accounting data into strategic growth opportunities.
              </p>
            </div>

            {/* Right Column: Complete Financial & Compliance Catalog */}
            <div className="w-full bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Complete Financial Catalog
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Financial & Compliance Solutions
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Accounting & Bookkeeping Services',
                  'GST Registration & Compliance',
                  'ROC Corporate Filings',
                  'Payroll Management Systems',
                  'PF & ESI Compliance Audits',
                  'Trademark Protection Registrations',
                  'MSME Status Registration Support',
                  'Company & LLP Registrations',
                  'Financial Planning & Analysis',
                  'Fundraising Strategic Support'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500 hover:bg-slate-50 transition-all duration-200"
                  >
                    {srv}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion Section */}
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