import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export default function FinancialReportingLanding() {
  const HERO_STATS = [
    "Financial Statement Preparation",
    "Management & MIS Reporting",
    "Regulatory & Statutory Compliance",
    "Financial Analysis & Insights",
  ];

  const faqs = [
    { 
      q: "What are Financial Reporting Services?", 
      a: "Financial Reporting Services involve preparing and presenting financial statements and business reports such as Balance Sheets, Profit & Loss Statements, Cash Flow Statements, MIS Reports, and other financial reports that help businesses monitor performance and comply with statutory requirements." 
    },
    { 
      q: "Why are Financial Reporting Services important?", 
      a: "Professional financial reporting improves transparency, supports better business decisions, ensures compliance with accounting standards, assists in tax planning, and helps attract investors and lenders" 
    },
    { 
      q: "What reports are included in Financial Reporting Services?", 
      a: "Our Financial Reporting Services include Balance Sheets, Profit & Loss Statements, Cash Flow Statements, MIS Reports, Financial Analysis Reports, Budget Reports, Business Performance Reports, Investor Reports, and customized financial reports." 
    },
    { 
      q: "Can startups benefit from Financial Reporting Services?", 
      a: "Yes. Startups require accurate financial reporting for fundraising, budgeting, investor presentations, tax compliance, business planning, and strategic decision-making." 
    },
    { 
      q: "Does FinTax Adviser provide Financial Reporting Services across India?", 
      a: "Yes. FinTax Adviser provides professional Financial Reporting Services in Delhi, India, while serving startups, MSMEs, LLPs, Private Limited Companies, and businesses across India with complete financial reporting and accounting solutions." 
    }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Transparency · Compliance · Growth
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Financial Reporting Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Accurate financial reporting is essential for every business, regardless of its size or industry. Well-prepared financial reports provide valuable insights into a company's financial health, profitability, cash flow, and overall business performance.
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
                  Get Free Consulatation
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
            Comprehensive Financial Transparency & Statutory Compliance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Many businesses struggle with maintaining accurate financial records due to complex accounting transactions, changing regulatory requirements, and growing operational activities.
             Our experienced Chartered Accountants and financial experts assist you to evaluate organization health while ensuring complete compliance with applicable accounting standards and statutory regulations.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Complete Financial Reporting Matrix
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Customized reporting solutions designed to meet the exact financial requirements of startups, SMEs, and corporates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Financial Statement Preparation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Statement Preparation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Essential reporting workflows for statutory compliance, taxation, audits, fundraising, and business planning.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Balance Sheet & Profit & Loss</span>
                <span>✓ Cash Flow & Changes in Equity</span>
                <span>✓ Trial Balance & General Ledger Review</span>
                <span>✓ Monthly, Quarterly & Annual Statements</span>
              </div>
            </div>

            {/* Management Reporting & MIS */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Management & MIS Reporting Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Enables management teams to monitor operational performance and make informed strategic decisions.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Weekly, Monthly & Quarterly MIS</span>
                <span>✓ Financial Dashboard & KPI Reporting</span>
                <span>✓ Budget vs Actual & Revenue Analysis</span>
                <span>✓ Cost, Profitability & Department Reports</span>
              </div>
            </div>

            {/* Financial Analysis */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Analysis & Business Performance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluate profitability, liquidity, operational efficiency, and overall financial strength through detailed insights.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Financial Ratio & Liquidity Analysis</span>
                <span>✓ Working Capital & Trend Analysis</span>
                <span>✓ Variance Analysis & Health Assessment</span>
                <span>✓ Business Intelligence & Operational Reports</span>
              </div>
            </div>

            {/* Regulatory & Statutory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Regulatory & Statutory Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ensures statements strictly comply with accounting standards, tax regulations, and legal norms.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ROC, Income Tax & GST Financial Reporting</span>
                <span>✓ Audit Financial Statements & Disclosures</span>
                <span>✓ Bank & Investor Financial Reports</span>
                <span>✓ Director Reports & Compliance Documentation</span>
              </div>
            </div>

            {/* Financial Forecasting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Forecasting & Budget Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Future-focused financial modeling that assists businesses to plan expansion, manage risks, and set clear tracks.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Budget Preparation & Variance Models</span>
                <span>✓ Revenue, Expense & Cash Flow Forecasts</span>
                <span>✓ Capital Budget Planning & Projections</span>
                <span>✓ Strategic & Long-Term Scenario Analysis</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-accounting" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Professional Financial Reporting
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Inaccurate or delayed financial reporting can lead to compliance issues, poor business decisions, tax complications, investor concerns, and financial penalties. Mitigate your operational risks with trusted expert processing.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Professionally prepared financial reports help businesses improve financial control while providing reliable information to stakeholders."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Decision Making</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Better business decision-making and heightened financial transparency.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Investor Trust</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Build strong investor confidence and reliable performance presentations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Cash Monitoring</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Better cash flow management combined with improved budget planning systems.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Regulatory Security</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Flawless regulatory alignment and easier year-end tax compliance frameworks.</p>
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
              Entities Needing Financial Reporting Solutions
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing institutional-grade reporting compliance across diverse commercial frameworks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {[
              'Startups', 'Private Limited Companies', 'LLPs', 
              'MSMEs', 'Partnership Firms', 'Sole Proprietorships', 
              'Manufacturing Companies', 'IT & Software Companies', 
              'Healthcare Organisation', 'Educational Institutions', 
              'Retail Businesses', 'E-commerce Companies', 
              'Financial Service Providers', 'NGOs', 'Growing Enterprises'
            ].map((sector, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
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

            {/* Left Box: Why Choose FinTax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Chartered Accountants",
                  "Accurate Financial Reporting",
                  "Customized MIS Reporting",
                  "Regulatory Compliance Support",
                  "Financial Analysis & Insights",
                  "Investor Reporting Assistance",
                  "Affordable Professional Fees",
                  "Complete Data Confidentiality",
                  "PAN India Services Available"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Documents Required */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Core Documentation Required</h3>
              <p className="text-xs text-gray-500 mb-4 font-medium">To prepare accurate financial reports, the following basic files are evaluated:</p>
              <div className="space-y-2 text-sm text-slate-600">
                <p>• Certificate of Incorporation & Company PAN </p>
                <p>• GST Registration Certificate & Returns</p>
                <p>• Books of Accounts, Trial Balance & Ledger </p>
                <p>• Bank Statements, Sales & Purchase Registers </p>
                <p>• Expense Records, Fixed Asset & Payroll Records </p>
                <p>• TDS Details & Previous Financial Statements </p>
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