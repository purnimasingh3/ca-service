import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = servicesMetadata.investorReporting ||{
  title: "Investor Reporting Services in India | FinTax Adviser",
  description: "Get professional Investor Reporting Services for Startups, SMEs, and Funded Companies in India. Clear, timely, and transparent investor dashboards and financial reports by FinTax Adviser.",
  keywords: "Investor Reporting Services, Startup Reporting, Venture Capital Reporting, Board Reports, Investor Dashboards, Fundraising Support, FinTax Adviser",
};

export default function InvestorReportingLanding() {
  const HERO_STATS = [
    "Custom Investor Dashboards",
    "Fundraising Data Rooms",
    "Monthly/Quarterly KPI Tracking",
    "Board Presentation Packs",
  ];

  const faqs = [
    { 
      q: "What is investor reporting?", 
      a: "Investor reporting is the process of preparing financial, operational, and strategic reports that help investors monitor a company's performance and make informed decisions." 
    },
    { 
      q: "Which businesses need investor reporting?", 
      a: "Businesses that have raised funding, are preparing for fundraising, or have external shareholders often benefit from structured investor reporting." 
    },
    { 
      q: "How often should investor reports be shared?", 
      a: "Reporting frequency depends on investor agreements and business requirements. Many companies provide monthly or quarterly reports, while annual reports offer a comprehensive review." 
    },
    { 
      q: "Can reports be customized?", 
      a: "Yes. We tailor reports to your industry, reporting objectives, KPIs, and stakeholder requirements." 
    },
    { 
      q: "Do you assist with board and shareholder reporting?", 
      a: "Yes. We prepare board meeting packs, shareholder updates, financial dashboards, and management reports." 
    }
  ];

  const startupKPIs = [
    "MRR & ARR Tracking", "Burn Rate Analytics", "Cash Runway Projections", 
    "Churn Rate Matrix", "Customer Acquisition Cost (CAC)", "Customer Lifetime Value (LTV)", 
    "Active Users Metrics", "Subscription Growth Curves"
  ];

  const targetSectors = [
    'Startups', 'Seed-Funded Companies', 'Angel-Funded Businesses', 'Venture Capital Portfolio Units',
    'Private Equity Portfolio Companies', 'MSMEs', 'Private Limited Companies', 'LLPs',
    'Manufacturing Businesses', 'Healthcare Companies', 'FinTech Companies', 'SaaS Businesses',
    'E-commerce Companies', 'Technology Companies', 'D2C Brands', 'Professional Service Firms'
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Transparent Reports · Stronger Relationships · Sustainable Growth
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Professional Investor 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Reporting Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Timely, accurate, and insightful reports that keep investors informed, demonstrating strong financial discipline and supporting continuous stakeholder trust.
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
            Build Long-Term Investor Confidence & Corporate Credibility
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Raising capital is a major milestone for any business, but maintaining investor confidence requires consistent communication, financial transparency, and accurate reporting. At <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>, our expert Chartered Accountants and financial analysts construct tailored, presentation-grade reports for angel networks, VC funds, family offices, and institutional lenders across India.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Complete Suite of Investor Reporting
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured operational dashboards and corporate diligence materials aligned with professional reporting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Core Financial Reporting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Reporting for Investors</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Build a robust data foundation with meticulous, professional financial statements.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Profit & Loss</span>
                <span>✓ Balance Sheet</span>
                <span>✓ Cash Flow Statement</span>
                <span>✓ Working Capital Analysis</span>
                <span>✓ Trial Balance Summary</span>
                <span>✓ Financial Ratio Metrics</span>
              </div>
            </div>

            {/* Monthly & Quarterly updates */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Operational Performance Updates</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Keep equity holders engaged through consistent performance analytics.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Revenue Overviews</span>
                <span>✓ Budget Variance mapping</span>
                <span>✓ Department Performance</span>
                <span>✓ Cash In/Outflow Trends</span>
                <span>✓ Key Achievements Log</span>
                <span>✓ Risk Assessment Sheets</span>
              </div>
            </div>

            {/* Boardroom & Fundraise Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising & Board Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accelerate diligence cycles during critical investment rounds.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Board Deck Generation</span>
                <span>✓ Investor Data Rooms</span>
                <span>✓ Cap Table Advisory</span>
                <span>✓ Growth Projections</span>
                <span>✓ Due Diligence Prep</span>
                <span>✓ Valuation Documents</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Startup KPIs Grid Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Essential Startup KPIs We Report
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Advanced, modern metric tracking explicitly demanded by tier-1 venture capital funds.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {startupKPIs.map((kpi, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-400 transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{kpi}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-investor-ready" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The Power of Disciplined Reporting
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Demonstrating rigorous corporate governance separates top-tier ventures from the rest, keeping capital partnerships secure.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure your records are always transaction-ready, vastly reducing follow-on fundraising delays."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Raise Trust</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Secure long-term backing from existing stakeholders by keeping them clearly informed.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Corporate Governance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Establish reliable compliance and review frameworks early in the corporate lifecycle.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Due Diligence Prep</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Stay fully audit-prepared for future mergers, acquisitions, or IPO audits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Simpler Board Meetings</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Run efficient executive sessions with clean, concise summaries and visual slide decks.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audiences Served */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors and Portfolios We Support
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {targetSectors.map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Process Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose FinTax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Venture Analysts",
                  "Customized KPI & MIS Dashboards",
                  "Due Diligence and Data Room setup",
                  "Secure & Confidential Protocols",
                  "In-depth Advanced Valuation Services",
                  "Reliable Pan-India Support"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Investor Reporting Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Alignment Discussion:</strong> Deep evaluation of investor agreements and custom reporting obligations.</p>
                <p><strong>Step 2 - Financial Collection:</strong> Seamless gathering of trial sheets, ledgers, and dynamic metric inputs.</p>
                <p><strong>Step 3 - Data Review & Integrity checks:</strong> Reconciling statements and validating exact KPI metrics.</p>
                <p><strong>Step 4 - Structured Report Delivery:</strong> Constructing polished visual sheets, dashboards, and executive slide updates.</p>
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