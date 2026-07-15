import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.fundraisingVC;

export default function VCFundraisingLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Clients Served",
    "Investor-Ready Pitch Decks",
    "End-to-End Deal Closure",
  ];

  const faqs = [
    { 
      q: "What is the difference between VC and HNI funding?", 
      a: "VC funding typically comes from institutional investment firms managing pooled capital from limited partners, whereas HNI (High Net Worth Individual) funding comes directly from independent wealthy investors' private assets." 
    },
    { 
      q: "How much funding can a startup raise?", 
      a: "The amount depends strictly on your business stage, verified valuation, market viability, traction metrics, and specific investor interest." 
    },
    { 
      q: "Do I need traction or revenue before raising funds?", 
      a: "Not always. While revenue strengthens your position, many early-stage startups successfully raise seed or angel capital based on an innovative business model, robust market opportunities, and founder credibility." 
    },
    { 
      q: "What is a pitch deck?", 
      a: "A pitch deck is a highly targeted corporate presentation that clearly explains your business model, product, market sizing, competitive positioning, historical milestones, financial projections, and current capital requirements." 
    },
    { 
      q: "How long does the fundraising process take?", 
      a: "Timelines vary depending on structural readiness, sector trends, institutional investor appetite, and the speed of legal and financial due diligence validation." 
    },
    { 
      q: "Can existing, established businesses raise funds?", 
      a: "Yes. Established firms regularly leverage private equity and growth-stage capital for scaling up manufacturing, market penetration, international expansion, acquisitions, or technical transformations." 
    },
    {
      q: "Why choose Fintax Adviser for fundraising services?",
      a: "Fintax Adviser provides comprehensive institutional fundraising support—including strategic startup valuation, robust financial modeling, premium presentation asset creation, investment readiness verification, and transaction closing support."
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
                ⚡ Raise Capital · Grow Faster · Institutional Scale
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Fundraising Services from Venture Capitalists & HNIs
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Accelerate your institutional growth journey. We transition high-growth enterprises and startups into investor-ready assets, crafting pitch instruments and financial structures that secure capital injections.
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
                  Book a Free Consultation
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
            Professional Fundraising Advisory Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Advisers</strong>. Raising capital is one of the most important milestones for any startup or growing business. Whether you are launching a new venture, expanding operations, entering new markets, or developing innovative products, access to the right investors can accelerate your business growth. Fintax Adviser provides professional fundraising advisory services for startups, SMEs, technology companies, manufacturing businesses, D2C brands, SaaS companies, and high-growth enterprises seeking funding from Venture Capitalists (VCs), Angel Investors, Family Offices, and High Net Worth Individuals (HNIs).
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Fundraising Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive institutional management solutions across every tactical phase of the investment lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising Strategy Development</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Every business requires a customized fundraising strategy built on capital maps and operational targets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Requirement Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investment Structure</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Roadmap</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investor Targeting</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Valuation Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accurate and defensive valuation structures improve investor trust during early deal discovery.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Startup Valuation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue-Based Modeling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Market Multiples</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Negotiation Support</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investor Pitch Deck Preparation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">A high-conversion deck serves as the foundational narrative interface for institutional networks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Market Sizing (TAM)</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Modeling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Blueprint</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Use of Funds</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Modeling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Investors look for comprehensive, integrated statements built on logical growth assumptions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profitability Forecasts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Flow Projections</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Break-Even Points</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fund Utilization Models</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Readiness Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Rigorous diagnostic reviews scanning for underlying organizational risks before presentation deployment.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Corporate Architecture</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Operational Health</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Factor Mitigation</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Due Diligence Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We construct and optimize virtual data rooms to handle deep transactional verifications safely.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Due Diligence</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Legal Data Rooms</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Corporate Governance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Term Sheet Advisory</span>
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
                Why Businesses Need Institutional Fundraising
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Most expanding companies reach structural ceilings where organic cash flows cannot handle compounding growth velocities. External strategic fundraising solves key long-term infrastructure and expansion limits.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  " Fintax Adviser helps structure clean, institutional investment processes spanning early documentation steps directly to closing transactions. "
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Expansion</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Opening new physical facilities, scaling supply metrics, or handling new territories.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Product Development</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Engineering foundational software upgrades, intellectual assets, or digital ecosystems.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Working Capital</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Smoothing operational runway gaps and systematic pipeline cycles cleanly.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Market Penetration</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Funding multi-channel customer acquisition processes and foundational enterprise positioning.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Technology Upgradation & Team Scaling</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Hiring elite institutional executives while integrating advanced organizational management configurations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sources of Capital Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Targeted Sources of Business Capital
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We connect, position, and negotiate across several primary investment channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-[#071c3d] mb-2">Venture Capital (VC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Ideal for high-growth tech firms seeking institutional support. VCs check for large market scalability, innovative engineering, clear metrics, and robust teams.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-[#071c3d] mb-2">High Net Worth Individuals (HNIs)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Direct investment from ultra-wealthy individuals. Delivers fast deal execution, minimal structural delays, highly flexible contracts, and core industry networks.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-[#071c3d] mb-2">Angel Investors</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Provides essential strategic seed runway across original corporate iterations. Delivers close industry mentorship alongside introductory capital pathways.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-[#071c3d] mb-2">Family Offices</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Managing larger institutional wealth with long-term, multi-generational strategic hold models, providing stability over shorter speculative venture lifecycles.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 lg:col-span-2">
              <h3 className="text-lg font-bold text-[#071c3d] mb-2">Private Equity Funding</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Engineered specifically for fully mature, profitable businesses looking to execute strategic cross-border buyouts, massive capacity improvements, or complex structural recapitalizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Professional Advisory Support
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Maximize entry points, secure defensible premiums, and eliminate structural transactional execution mistakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Better Investor Readiness", d: "Correct latent bookkeeping and structural non-compliance problems before formal review starts." },
              { t: "Improved Business Valuation", d: "Leverage defensive financial analytics to defend premium parameters cleanly." },
              { t: "Stronger Investor Presentations", d: "Deploy world-class data narratives highlighting clear metrics that capture immediate focus." },
              { t: "Access to Investor Networks", d: "Navigate direct introductions to qualified seed, institutional venture, and institutional networks." },
              { t: "Professional Financial Planning", d: "Establish realistic, clean metrics and utilization pathways to satisfy diligence standards." },
              { t: "Reduced Fundraising Errors", d: "Prevent costly operational cap-table diluted mistakes and critical framework structural oversights." },
              { t: "Increased Market Credibility", d: "Stand out via deeply professional, audit-ready operational and corporate artifacts." },
              { t: "Faster Fundraising Process", d: "Shorten deal timelines via responsive, standardized parallel processing routines." },
              { t: "Enhanced Growth Opportunities", d: "Secure robust operational flexibility to take advantage of emerging market conditions safely." }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2">✓ {benefit.t}</h3>
                <p className="text-slate-700 text-sm leading-relaxed"> {benefit.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors & Ecosystems We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">Configuring optimized institutional investment models tailored specifically to sector realities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'Technology Companies', 'Manufacturing Businesses', 'E-Commerce Brands', 'Healthcare Businesses', 'Professional Service Firms', 'D2C Brands', 'SaaS Platforms'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow & Required Documentation Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Required Documents Left */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-[#071c3d]">Required Deal Documentation</h3>
            <p className="text-sm text-slate-600">Standard items required to initialize standard institutional underwriting workflows:</p>
            <div className="space-y-2">
              {[
                "Certificate of Incorporation",
                "PAN & GST Registration Certificates",
                "Historical Clean Cap Table & Shareholding Patterns",
                "Audited Financial Statements & Recent Bank Records",
                "Comprehensive Growth Business Plan",
                "Core Visual Investor Pitch Deck",
                "Monthly Operational Performance Metric Reports",
                "Comprehensive 5-Year Projected Financial Model"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" /> {doc}
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Process Steps Right */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black text-[#071c3d]">The Strategic Fundraising Process</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { s: "Step 01", t: "Business Evaluation", d: "Review core capabilities, runtimes, capital definitions, and expansion objectives closely." },
                { s: "Step 02", t: "Investment Readiness", d: "Verify compliance registries, financial hygiene, and underlying balance realities." },
                { s: "Step 03", t: "Valuation & Structuring", d: "Formulate appropriate investment instrument choices and target pricing formulas." },
                { s: "Step 04", t: "Documentation Crafting", d: "Build out dynamic integrated financial statement projections and executive content decks." },
                { s: "Step 05", t: "Investor Outreach", d: "Execute filtered targeted contact plans across matching institutional funds." },
                { s: "Step 06", t: "Investor Meetings", d: "Present core opportunity milestones directly to qualified validation networks." },
                { s: "Step 07", t: "Due Diligence Support", d: "Manage incoming external check processing and accounting validation demands." },
                { s: "Step 08", t: "Investment Closure", d: "Review target term sheet parameters and complete asset funding logistics." }
              ].map((step, idx) => (
                <div key={idx} className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 transition-colors bg-slate-50">
                  <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">{step.s}</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2">{step.t}</h4>
                  <p className="text-xs text-slate-600 mt-1">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Capital Advisory Professionals",
                  "Strategic Business Asset Position Scaling",
                  "Premium Financial Artifact Assets",
                  "End-to-End Deal Closure Assistance",
                  "Verified Nationwide Indian Support Networks",
                  "Ethical, Transparent Transaction Frameworks"
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
                Our cross-functional corporate advisory networks connect Chartered Accountants, Chartered Financial Analysts, investment model experts, and corporate transaction legal teams.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Services',
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