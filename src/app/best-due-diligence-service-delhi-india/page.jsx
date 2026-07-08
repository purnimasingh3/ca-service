import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.dueDiligence || {
  title: "Comprehensive Business, Financial & Legal Due Diligence Services in India | Fintax Adviser",
  description: "Comprehensive due diligence to help you make informed decisions, identify hidden risks, uncover liabilities, and unlock transactions securely.",
};

export default function DueDiligenceServicesLanding() {
  const HERO_STATS = [
    "Thorough Structural Analysis",
    "Early Risk Identification",
    "Enhanced Deal Transaction Value",
    "In-Depth Finance & Legal Review",
  ];

  const faqs = [
    { q: "What is the purpose of due diligence?", a: "Due diligence helps evaluate risks, verify core data framework records, and support fully informed business decisions before transactions." },
    { q: "Is due diligence necessary for startup investments?", a: "Yes. Professional institutional investors routinely conduct comprehensive due diligence structures prior to investing capital." },
    { q: "How long does a due diligence process take?", a: "The processing timeline depends entirely on corporate operational parameters, document readiness, and transaction complexity." },
    { q: "What is included in a due diligence report?", a: "The final report generally includes structured findings, hidden risks, legal compliance logs, observations, and key advisory recommendations." },
    { q: "Can due diligence identify hidden liabilities?", a: "Yes. The operational process is explicitly engineered to uncover unstated legal, financial, tax, and compliance issues." },
    { q: "Why choose Fintax Adviser?", a: "We provide multi-disciplinary due diligence services, detailed strategic reporting, precise risk assessment, and continuous advisory support for stakeholders across India." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ VERIFY | ANALYZE | INVEST WITH CONFIDENCE
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Due Diligence
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Comprehensive due diligence to help you make informed decisions, identify risks, uncover structural liabilities, and unlock corporate business opportunities safely.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Due Diligence Services by Fintax Adviser
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-4">
            <p>
              Looking to invest in a company, acquire a business, raise funding, enter a partnership, or evaluate a business opportunity? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides comprehensive Due Diligence Services for startups, private limited companies, investors, mergers & acquisitions, venture capital transactions, and business partnerships across India.
            </p>
            <p>
              Due diligence is a critical process that helps businesses, investors, and stakeholders assess risks, verify information, and make informed decisions before entering into significant commercial transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">What is Due Diligence?</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Due diligence is a detailed investigation and review of a company's legal, financial, operational, tax, compliance, and commercial records before a transaction takes place.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                The absolute purpose is to flag potential corporate operational gaps and hidden vulnerabilities before finalizing transactional terms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-[#071c3d]">Transaction Windows Required</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-base sm:text-lg text-slate-600">
                Commonly conducted during fundraising phases, formal Mergers & Acquisitions (M&A), strategic brand partnerships, corporate share purchases, and global restructurings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Due Diligence Provided Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Types of Due Diligence Services
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Deep, multi-disciplinary evaluations matching every facet of structural transaction protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Due Diligence</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Review of Financial Statements, Profitability, Working Capital, Cash Flows, Debts, and Assets to assess systemic financial health.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Financial Statements • Cash Flow</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Legal Due Diligence</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Verification of Corporate Records, Contracts, Active Litigations, Intellectual Property ownership, and structural compliance liabilities.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Contracts • IP • Litigation Check</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tax Due Diligence</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Review of Income Tax compliance, GST filings, TDS submissions, active Department Notices, and pending Assessments.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Income Tax • GST • TDS Exposures</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Operational Due Diligence</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Analysis of operational workflows, management efficiency structures, internal controls, and corporate vendor frameworks.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Operations • Internal Control</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Due Diligence</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Evaluation of market positioning, consumer segments, target competition analysis, and forward revenue growth viability indicators.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Market Viability • Growth Trends</span>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-slate-100 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl">
                Why is Due Diligence Important?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Executing large capital investments without verified insights introduces heavy corporate exposures. True analysis eliminates transactional assumptions.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-sm font-semibold text-blue-600 leading-relaxed">
                  "Uncover hidden risks, protect core monetary investments, improve negotiation positions, and ensure strategic regulatory clarity."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Risk Identification", desc: "Identify hidden legal, financial, operational, or regulatory structural risks early." },
                { title: "Informed Decisions", desc: "Make investment and acquisition calls based purely on verified structural metrics." },
                { title: "Business Transparency", desc: "Gain an absolute, transparent understanding of the target company's true position." },
                { title: "Investor Confidence", desc: "Sharply maximize trust levels across institutional lenders, board members, and stakeholders." },
                { title: "Transaction Security", desc: "Reduce total uncertainty profiles during high-value mergers, acquisitions, and funding rounds." }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 border border-slate-200 bg-slate-200 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-base uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-md text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Due Diligence?
            </h2>
            <p className="text-sm sm:text-base text-slate-500">Minimizing risks across diverse transactional boundaries globally.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-base font-bold text-slate-700">
            {[
              "Investors & Venture Capital Firms", "Startups & Angel Investors",
              "Private Limited Companies", "Acquiring Companies & Buyers",
              "Joint Venture Partners", "Financial Institutions",
              "Family Offices", "Strategic Business Partners"
            ].map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-500 transition-colors flex items-center justify-center">
                <span className="text-blue-700 block text-base md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Reviewed During Due Diligence
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A comprehensive verification checklist to compile absolute transactional clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Corporate Docs</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-start gap-2">✔ Certificate of Incorporation</li>
                <li className="flex items-center gap-2">✔ MoA & AoA Records</li>
                <li className="flex items-center gap-2">✔ Shareholder Profiles & Board Resolutions</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Financial Records</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-center gap-2">✔ Audited Financial Statements</li>
                <li className="flex items-start gap-2">✔ Live Management Accounts</li>
                <li className="flex items-start gap-2">✔ Bank Statements & Active Loans</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Tax Filings</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-start gap-2">✔ Historic GST & Income Tax Returns</li>
                <li className="flex items-start gap-2">✔ TDS Filing Checklists</li>
                <li className="flex items-start gap-2">✔ Assessment Orders & Notices</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Legal & Compliance</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-center gap-2">✔ Vendor & Employment Contracts</li>
                <li className="flex items-center gap-2">✔ IP & Patent Records</li>
                <li className="flex items-center gap-2">✔ Functional Licenses & Approvals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Simple Process Blueprint
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A structured 6-step workflow designed for optimal analysis speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { step: 1, title: "Initial Consultation", desc: "Understanding transactional objectives and defining full evaluation scope." },
              { step: 2, title: "Info Request", desc: "Targeted gathering of necessary legal, tax, and financial datasets." },
              { step: 3, title: "Detailed Review", desc: "Deep analytical investigation of digital corporate footprints." },
              { step: 4, title: "Risk Assessment", desc: "Identifying key concerns, unstated liabilities, and exposure loops." },
              { step: 5, title: "DD Report", desc: "Compiling objective evidence structures into a definitive technical report." },
              { step: 6, title: "Advisory Support", desc: "Post-delivery review to shape strategic negotiations and next milestones." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Benefits of Professional Due Diligence</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Better Investment Decisions", "Risk Identification & Mitigation",
              "Enhanced Business Transparency", "Improved Negotiation Position",
              "Regulatory Compliance Review", "Reduced Transaction Risks",
              "Elevated Investor Confidence", "Strategic Business Insights"
            ].map((benefit, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-lg">✓</span>
                <span className="text-slate-800 text-base font-semibold leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Trust Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-500 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Professional Experience",
                  "Multi-Disciplinary Advisory Team",
                  "Investor & Startup Focused Support",
                  "Strictly Confidential Processing",
                  "Detailed Analytical Reporting",
                  "Pan India Corporate Services"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-slate-200 border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-base font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-md text-blue-500 leading-relaxed pt-4 border-t border-slate-800 max-w-lg">
                Fintax Adviser brings extensive financial, legal, and operational expertise to mitigate deal risk and establish true underlying transaction equity.
              </p>
            </div>

            <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20 inline-block">
                  Corporate Hub
                </span>
                <h3 className="text-2xl font-black text-white mt-3">Fintax Adviser Network</h3>
              </div>
              <div className="space-y-4 text-base text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Corporate Line</span>
                  <span className="font-bold text-white">+91 8750 8750 63</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Digital Support</span>
                  <span className="font-bold text-white">info@fintaxadviser.com</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400 font-medium">HQ Geography</span>
                  <span className="font-bold text-white">Delhi, India (Pan-India Virtual Processing)</span>
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Your Trusted Corporate Compliance Infrastructure</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}