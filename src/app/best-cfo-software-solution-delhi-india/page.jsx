import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: "CFO Software Solutions in Delhi | Financial Management Software Consulting | FinTax Adviser",
  description: "Looking for the right CFO Software? FinTax Adviser helps businesses choose, implement, and optimize financial management software with expert consulting, ERP advisory, budgeting, reporting, cash flow management, and CFO technology solutions.",
  keywords: ["CFO Software", "Financial Management Software", "CFO Software Solutions", "ERP Financial Software", "Financial Reporting Software", "Budgeting Software", "Cash Flow Management Software", "CFO Technology Consulting", "ERP Advisory Services", "Financial Planning Software"],
  alternates: {
    canonical: "https://www.fintaxadviser.com/cfo-software-solution-delhi-india",
  },
};

export default function CFOSoftwareLanding() {
  const HERO_STATS = [
    "Independent Platform Selection",
    "End-to-End ERP Consulting",
    "Custom Reporting & Dashboards",
    "Data Migration & Training Support",
  ];

  const faqs = [
    { q: "What is CFO Software?", a: "CFO Software is a financial management solution that helps businesses manage budgeting, forecasting, cash flow, reporting, analytics, compliance, and financial planning." },
    { q: "Is CFO Software different from accounting software?", a: "Yes. Accounting software mainly records transactions, while CFO Software provides advanced financial planning, business intelligence, budgeting, forecasting, and executive reporting capabilities." },
    { q: "Does FinTax Adviser develop CFO Software?", a: "No. We are not a software development company. We provide independent consulting to help businesses select, implement, and optimize the right CFO software based on their needs." },
    { q: "Can you help us choose the right software?", a: "Yes. We evaluate your business processes, reporting requirements, budget, and growth plans before recommending suitable financial management solutions." },
    { q: "Do you assist with software implementation?", a: "Yes. We provide implementation planning, process mapping, data migration support, reporting configuration, and user training." },
    { q: "Which businesses benefit from CFO Software?", a: "Startups, SMEs, large enterprises, manufacturing companies, service businesses, retail organizations, healthcare providers, and growing businesses can all benefit from CFO Software." },
    { q: "Can CFO Software improve cash flow management?", a: "Yes. Modern CFO Software provides real-time cash flow tracking, forecasting, receivable management, and liquidity analysis." },
    { q: "Does CFO Software support financial reporting?", a: "Absolutely. Most platforms include automated financial reports, dashboards, KPI tracking, and management reporting features." },
    { q: "How long does implementation take?", a: "The timeline depends on the software platform, business size, data complexity, and customization requirements." },
    { q: "How do I get started?", a: "Contact FinTax Adviser for an initial consultation. We will assess your business needs, recommend suitable CFO software, and guide you through implementation and optimization." }
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
                ⚡ Modern CFO Tech Stack · Independent Consulting
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                CFO Software Solutions
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert Guidance to Choose, Implement & Optimize CFO Software for Smarter Financial Management. Transform financial data into actionable business intelligence.
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
            Bridge Technology and Finance for Maximum ROI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>, we help startups, SMEs, and growing businesses select, configure, and optimize CFO software solutions. While we do not build software, our experienced Chartered Accountants and CFO tech advisors ensure that your software investment perfectly aligns with your accounting systems, reporting goals, and operational workflows.
          </p>
        </div>
      </section>

      {/* Consulting Services Grid */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our CFO Software Consulting Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive consulting to maximize the performance of your financial tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Software Selection & Evaluation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Analyzing business requirements, scalability, integration capabilities, and cost to recommend the right platform.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Needs Assessment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Platform Comparison</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Vendor Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Feature Audit</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Process Mapping & ERP Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Aligning internal financial workflows with modern software architecture to maximize accuracy.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Workflow Design</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Process Mapping</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ERP Alignment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> System Setup</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Data Migration Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Assisting in the safe transfer of historical financial data while maintaining precision and integrity.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Data Scrubbing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Legacy Mapping</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Validation Audits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Secure Migration</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dashboard & Report Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Configuring executive-level dashboards, customized reports, and automated KPI trackers.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Executive Views</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Custom MIS</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KPI Configuration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Real-Time Analytics</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">User Training & Adoption</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Providing practical training sessions for internal finance teams to ensure seamless system adoption.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Team Training</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> System Manuals</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Workflow Audits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> User Onboarding</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Post-Implementation Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Continuous advisory support to refine financial reporting and optimize software features as your business grows.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> System Optimization</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Periodic Audits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Custom Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Scalability Reviews</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why CFO Software is Essential
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Modern business operations generate massive amounts of financial data. Managing this manually leads to errors, operational delays, and poor strategic visibility. CFO software automates routine operations and delivers real-time business insights.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Centralize financial records, automate manual tasks, and achieve complete operational clarity."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Real-Time Visibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Instantly access revenue, expense, liquidity, and working capital indicators.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Automated Planning</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prepare department budgets, scenario models, and automated forecasts with ease.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Streamlined Cash Flow</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Monitor bank balances, payables, and receivables through automated reconciliation.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Enhanced Compliance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Maintain structured digital audit trails, tax schedules, and internal controls.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Software Platforms Supported Grid */}
      <section className="py-20 bg-sky-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight sm:text-3xl">
              Platforms We Evaluate & Support
            </h2>
            <p className="text-sm text-slate-500 mt-2">Independent advisory for leading global and regional financial management software.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Oracle NetSuite', 'SAP S/4HANA Finance', 'Microsoft Dynamics 365', 'Sage Intacct',
              'QuickBooks Advanced', 'Zoho Books', 'TallyPrime', 'Xero',
              'Odoo ERP', 'FreshBooks', 'Oracle Cloud ERP', 'Workday Adaptive'
            ].map((platform) => (
              <div key={platform} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {platform}
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
                  "Independent & Unbiased Software Selection",
                  "Expert Chartered Accountants & Advisors",
                  "Customized Reporting Frameworks",
                  "ERP & Process Integration Expertise",
                  "Data Security & Migration Protocols",
                  "PAN India Service Support"
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
                  Implementation Roadmap
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Our Structured Consulting Process
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  '1. Business Assessment',
                  '2. Software Evaluation',
                  '3. Process Mapping',
                  '4. Data Migration',
                  '5. Dashboard Configuration',
                  '6. User Team Training',
                  '7. Go-Live Support',
                  '8. Ongoing Advisory'
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