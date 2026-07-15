import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export default function FinancialConsultancyLanding() {
  const HERO_STATS = [
    "Strategic Financial Planning",
    "Cash Flow Optimization",
    "Cost Reduction & Margin Growth",
    "Investment & Funding Advisory",
  ];

  const faqs = [
    { 
      q: "What are Financial Consultancy Services?", 
      a: "Financial Consultancy Services refer to professional advisory solutions that help businesses manage their financial operations efficiently and strategically by analysing data, identifying risks, and improving profitability." 
    },
    { 
      q: "Who needs Financial Consultancy Services?", 
      a: "Financial consultancy is essential for any business aiming for growth and financial stability, including startups, MSMEs, private limited companies, LLPs, and established enterprises." 
    },
    { 
      q: "What is included in Financial Planning & Advisory?", 
      a: "It includes revenue forecasting, expense planning and optimization, capital structuring, profit planning strategies, long-term financial strategy development, and business expansion planning." 
    },
    { 
      q: "How does FinTax Adviser support cash flow management?", 
      a: "We provide cash flow forecasting, working capital optimization, receivables and payables tracking, operating cycle analysis, and liquidity management solutions to maintain healthy stability." 
    },
    { 
      q: "Are the consultancy services available PAN India?", 
      a: "Yes. FinTax Adviser provides complete financial management and strategic planning solutions to startups, SMEs, and corporates across India." 
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
                ⚡ Advisory · Profitability · Stability · Investment
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Financial Consultancy Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Financial Consultancy Services are essential for every business that wants to achieve financial stability, improve profitability, and make informed strategic decisions. Turn your challenges into structured growth roadmaps.
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
            Strategic Financial Planning Tailored for Sustainable Corporate Scaling
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. In today's fast-changing business environment, companies face multiple financial challenges such as cash flow issues, cost management, investment decisions, budgeting errors, tax planning complexities, and lack of structured planning. Our consultants and Chartered Accountants deliver actionable solutions to manage finances effectively and establish disciplined security.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our End-to-End Financial Advisory Pillars
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Providing holistic advisory architecture to optimize working capital, maximize return on assets, and mitigate corporate liabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Financial Planning */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Planning & Business Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Building strong financial strategies aligned explicitly with your commercial milestones.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Strategic Financial Planning</span>
                <span>✓ Revenue Planning & Forecasting</span>
                <span>✓ Expense Optimization & Goal Setting</span>
                <span>✓ Capital & Business Expansion Planning</span>
              </div>
            </div>

            {/* Cash Flow Management */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow & Working Capital Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ensuring your entity always maintains highly secure liquidity lines and daily operational stability.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Cash Flow Analysis & Forecasting</span>
                <span>✓ Working Capital Optimization</span>
                <span>✓ Receivables & Payables Management</span>
                <span>✓ Operating Cycle & Liquidity Monitoring</span>
              </div>
            </div>

            {/* Budgeting & Forecasting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Budgeting & Financial Forecasting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Precision modeling to help your management execute plans safely without unexpected shortfalls.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Annual, Monthly & Quarterly Budgeting</span>
                <span>✓ Revenue, Expense & Profit Forecasting</span>
                <span>✓ Budget vs Actual Variance Analysis</span>
                <span>✓ Financial Projections & Scenario Planning</span>
              </div>
            </div>

            {/* Investment Advisory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Advisory & Structuring</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Tailored capital blueprints built to secure strategic long-term corporate positioning.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Capital Structuring (Debt vs Equity)</span>
                <span>✓ ROI Analysis & Asset Allocation Planning</span>
                <span>✓ Restructuring & Funding Strategy Advisory</span>
                <span>✓ Risk-Based Investment Planning Models</span>
              </div>
            </div>

            {/* Cost Optimization */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cost Optimization & Profitability</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Trimming unnecessary capital operational leaks to drastically elevate your core baseline margins.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Cost & Expense Optimization Analysis</span>
                <span>✓ Margin Improvement & Cost Control</span>
                <span>✓ Operational Cost Reduction Workflows</span>
                <span>✓ Revenue Optimization & Pricing Strategy</span>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Risk Management & Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Proactively identifying variables to prevent unforeseen capital or institutional vulnerabilities.</p>
              <div className="grid grid-cols-1 gap-y-1 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Financial & Credit Risk Management</span>
                <span>✓ Operational & Business Risk Assessments</span>
                <span>✓ Internal Control Systems Architecture</span>
                <span>✓ Financial Compliance Support Solutions</span>
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
                Benefits of Financial Consultancy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Poorly structure budgets can instantly result in devastating cash shortages, uncontrolled resource burn rates, and failed capital expansions. Data-driven discipline converts hurdles into clear pathways.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Professional financial consultancy helps businesses achieve clarity, long-term stability, and structured expansion models."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Strategy & Control</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Better financial planning with robust cash flow command structures.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Profit Scaling</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Significantly improved baseline margins through optimized cost efficiency.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Asset Allocation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Smarter investment decisions that safely reinforce institutional stability.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Growth Foundations</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Data-driven corporate actions ensuring secure long-term commercial growth.</p>
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
              Industries Enabled by Strategic Consulting
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing dedicated advisory solutions for diverse operational scopes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {[
              'Startups', 'Private Limited Companies', 'LLPs', 
              'MSMEs', 'Manufacturing Companies', 'IT & Software Firms', 
              'Service-Based Businesses', 'Retail & E-commerce Companies', 
              'Construction Businesses', 'Healthcare Organisations', 
              'Educational Institutions', 'NGOs', 'Growing Enterprises'
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
                  "Experienced CAs & Financial Experts",
                  "Customized Strategic Solutions",
                  "Actionable Business Advisory",
                  "Granular Data-Driven Analysis",
                  "Affordable Framework Pricing",
                  "Fast Client Response Times",
                  "Strict Data Confidentiality Protocols",
                  "Startup-Friendly Operational Approach",
                  "End-to-End PAN India Presence"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Consultancy Documents Checklist</h3>
              <p className="text-xs text-gray-500 mb-4 font-medium">To deliver deep strategic planning, the following financial assets are evaluated:</p>
              <div className="space-y-2 text-sm text-slate-600">
                <p>• Full Historical Financial Statements</p>
                <p>• Balance Sheet & Profit & Loss Accounts</p>
                <p>• Cash Flow Statements & Trial Balance</p>
                <p>• Institutional Bank Statements & GST Returns</p>
                <p>• Corporate Income Tax Returns</p>
                <p>• Sales, Purchase Registers & Expense Reports</p>
                <p>• Active Loan & Investment Detail Documents</p>
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