import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: "Financial Modelling for Startups in Delhi, India | Startup Financial Modelling Services | FinTax Adviser",
  description: "Get expert Financial Modelling for Startups in Delhi, India with FinTax Adviser. We provide Startup Financial Models, Financial Forecasting, Business Planning, Cash Flow Forecasting, Investor Financial Models, Budgeting, and Fundraising Financial Modelling Services across India.",
  keywords: [
    "Financial Modelling for Startups", "Financial Modelling Services", "Financial Modelling Services in Delhi", 
    "Financial Modelling Services in India", "Startup Financial Modelling", "Startup Financial Model", 
    "Financial Forecasting Services", "Business Financial Modelling", "Financial Planning for Startups", 
    "Startup Financial Planning", "Financial Forecast Consultant", "Cash Flow Forecasting", "Revenue Forecasting", 
    "Investor Financial Model", "Fundraising Financial Model", "Startup Budget Planning", "Business Financial Projections", 
    "Financial Modelling Consultant", "Financial Modelling Consultant Delhi", "FinTax Adviser"
  ],
  alternates: {
    canonical: "https://fintaxadviser.com/financial-modelling-for-startups.php"
  }
};

export default function StartupFinancialModellingLanding() {
  const HERO_STATS = [
    "Three-Statement Projections",
    "Data-Driven Revenue Models",
    "Dynamic Cash Flow Forecasts",
    "Investor-Ready Pitch Models",
  ];

  const faqs = [
    { 
      q: "What is Financial Modelling for Startups?", 
      a: "Financial Modelling is the process of preparing financial projections that estimate a startup's future revenue, expenses, cash flow, profitability, funding requirements, and overall financial performance based on realistic assumptions." 
    },
    { 
      q: "Why do startups need Financial Modelling?", 
      a: "Startups require financial models for fundraising, investor presentations, budgeting, financial planning, business valuation, loan applications, and strategic decision-making." 
    },
    { 
      q: "What is included in a Startup Financial Model?", 
      a: "A Startup Financial Model generally includes revenue forecasts, expense projections, profit & loss statements, balance sheets, cash flow statements, break-even analysis, valuation assumptions, funding requirements, and financial dashboards." 
    },
    { 
      q: "Can Financial Modelling help in raising investment?", 
      a: "Yes. Investors usually expect startups to present professional financial models that demonstrate business viability, financial projections, expected returns, and funding requirements before making investment decisions." 
    },
    { 
      q: "Does FinTax Adviser provide Financial Modelling Services across India?", 
      a: "Yes. FinTax Adviser provides professional Financial Modelling Services for Startups in Delhi, India, while supporting startups and businesses across India with financial forecasting, budgeting, fundraising models, and strategic financial planning." 
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Forecast · Value · Plan · Raise
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Expert Financial Modelling
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  for Startups in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Transform business operational parameters into measurable growth roadmaps. Build verified investor forecasts, optimize working capital structures, and approach funding targets with data-backed transparency.
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
            Data-Driven Financial Strategy and Business Forecasting Models
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Scale your operations effectively using analytical financial planning tools built for forward-looking ventures. Venture capitalists, institutional banks, and angel syndicates look for complete clarity over unit economics before initiating deployment strategies. Our specialized structural models align historical matrices with industry assumptions to map absolute clarity over company growth patterns.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Strategic Financial Planning Deliverables
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured three-statement architectures constructed using industry-recognized financial methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Startup Financial Modelling */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Startup Financial Modelling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete three-statement operational engines connecting income parameters directly into integrated statements.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ P&L Projections</span>
                <span>✓ Balance Sheet Models</span>
                <span>✓ Break-Even Thresholds</span>
                <span>✓ Assumptions Tuning</span>
              </div>
            </div>

            {/* Financial Forecasting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Forecasting & Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Map potential upside and downside business growth patterns using granular market validation tools.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Sales Target Tracks</span>
                <span>✓ Operational Expenses</span>
                <span>✓ Working Capital Matrices</span>
                <span>✓ Scenario Analysis</span>
              </div>
            </div>

            {/* Investor Financial Model */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investor-Ready Models</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Communicate business scalability to Institutional Funds, Angel Networks, and Lenders securely.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Pitch Deck Financials</span>
                <span>✓ Angel / VC Packages</span>
                <span>✓ Capital Need Analysis</span>
                <span>✓ Due Diligence Support</span>
              </div>
            </div>

            {/* Cash Flow Management */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cash Flow & Budgeting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Prevent burn rate acceleration risks through ongoing optimization of actual liquid asset balances.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Runway Forecasting</span>
                <span>✓ Monthly Cash Audits</span>
                <span>✓ CapEx Optimization</span>
                <span>✓ Expense Tracking</span>
              </div>
            </div>

            {/* Business Valuation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Valuation & Metrics</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Determine absolute internal business values during intense equity share negotiation cycles.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ DCF Valuation Models</span>
                <span>✓ Financial Ratio Metrics</span>
                <span>✓ Sensitivity Mapping</span>
                <span>✓ Performance Reviews</span>
              </div>
            </div>

            {/* Strategic Financial Advisory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategic Financial Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Actionable data visualizations to help directors monitor complex key performance parameters.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Dashboard Reporting</span>
                <span>✓ Pricing Strategies</span>
                <span>✓ Risk Assessments</span>
                <span>✓ Growth Planning</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-modelling" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Elevate Strategic Positioning with Financial Structure
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Relying on vague projections weakens operational credibility. A data-backed framework transforms guesswork into mathematically sound parameters that establish enterprise durability.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure proper runway metrics while confidently structuring investor fundraising activities."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Fundraising Precision</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Accurately determine capital requirements to preserve critical equity stakes during negotiation rounds.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Runway Management</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Keep a close eye on monthly burn variables to ensure continuous corporate working capital execution.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Dynamic Adjustments</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Modify unit variables on-the-fly to visualize changing realities across pricing or cost metrics.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Risk Mitigation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Simulate stressful baseline events ahead of time using advanced scenario analysis parameters.</p>
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
              Sectors Using FinTax Projections
            </h2>
            <p className="text-sm text-slate-500 mt-1">Configuring highly scalable models across varied tech and retail ecosystems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['SaaS Companies', 'FinTech Applications', 'E-commerce Brands', 'Manufacturing Clusters', 'Healthcare Startups', 'Angel Backed Ventures', 'Businesses Seeking Loans', 'High Growth MSMEs'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
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
                  "Experienced Modelling Experts",
                  "Startup-Focused Unit Economics",
                  "Fully Customizable Architectures",
                  "Comprehensive Funding Strategies",
                  "Affordable Fees & Rapid Delivery",
                  "Absolute Data Confidentiality"
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

            {/* Right Box: Documents Required */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Baseline Material Requirements</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p>• Historical Balance Sheets & Statements (if operational)</p>
                <p>• Detailed Business Pitch Deck or Outline Concepts</p>
                <p>• Projected Pricing Matrix & Customer Acquisition Data</p>
                <p>• Current Operational Expenses & Anticipated Team Headcounts</p>
                <p>• Target Financing Parameters & Existing Cap Table Split</p>
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