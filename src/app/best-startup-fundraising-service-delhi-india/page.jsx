import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =
  servicesMetadata.fundraising;

export default function PremiumFundraisingLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "25+ Legal Professionals",
    "200+ Happy Clients",
    "100% Legal Compliance",
  ];
  const faqs = [
    { q: "Is Sole Proprietorship registration mandatory?", a: "While there is no separate incorporation process, obtaining registrations such as GST, MSME, or Shop & Establishment helps establish clear business legitimacy and operations." },
    { q: "Can a Sole Proprietorship open a current account?", a: "Yes, once you obtain the necessary business registrations and verification documents through our CA firm." },
    { q: "Is GST registration mandatory for a Proprietorship?", a: "GST registration depends directly on your operational turnover limits, business activities, or inter-state operations parameters." },
    { q: "What is the primary benefit of MSME registration?", a: "MSME/Udyam registration unlocks immediate access to strategic government schemes, financial subsidies, and single-owner business protection tools." },
    { q: "How long does Sole Proprietorship registration take?", a: "Generally, the complete legal registration framework can be fully closed within just a few working days, subject to verified document submissions." },
    { q: "Why choose the Best Sole Proprietorship Registration CA Firm in Delhi India?", a: "Professional registration ensures complete compliance layouts, smoother banking allocations, legal protection, and optimized fast-paced business growth paths." }
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
                ⚡ Raise Capital · Accelerate Growth
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Fundraising Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  for Startups in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Fuel your vision. Secure your future. We provide end-to-end fundraising support to help high-potential startups raise capital, grow faster, and scale bigger.
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
            Your Trusted Partner for Startup Fundraising
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Starting a business is challenging, but raising funds is often the biggest hurdle for startups. Many entrepreneurs have innovative ideas, strong products, and market potential, but struggle to secure investments due to a lack of planning, investor documentation, financial projections, or fundraising strategy. We help startups prepare, structure, and execute successful fundraising journeys.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Startup Fundraising Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end fundraising support to prepare your business for high-tier investor vetting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investor Readiness Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Before approaching institutional money, we deeply evaluate core operational variables to ensure investor alignment.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Model</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Market Potential</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Structuring</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Channels</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Management</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Pitch Deck Preparation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">A powerful presentation leaves a lasting impression. We structure professional, story-driven fundraising decks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Visual Layout Design</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Story Development</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Modeling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Market Sizing (TAM)</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Graphics</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Blueprints</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Modeling & Projections</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Investors look strictly at numbers. We build mathematical forecasting blueprints that command financial trust.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Revenue Projections</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cash Flow Models</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Break-even Matrix</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Statements</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fund Utilization</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investor ROI Maps</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Startup Valuation Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Knowing your absolute business worth prevents costly mistakes during cap-table allocation and equity splits.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pre-money Metrics</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Post-money Metrics</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Equity Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Dilution Models</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Capital Structure Planning</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investor Documentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Full backend data packaging to maintain clean records for incoming corporate due diligence checks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Investment Docs</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Core Business Plans</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Reps</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Layouts</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Managed Due Diligence Rooms</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fundraising Strategy Consulting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Bespoke strategy designs curated explicitly to attract institutional angel structures and early VC networks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Seed Round Design</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Angel Networks</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Venture Capital</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Growth Capital</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> M&A / Strategic Alliances</span>
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
                Why Fundraising is Important for Startups
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many startups fail not because of weak ideas, but due to lack of capital availability. Proper asset preparation and financial modeling significantly increase your chances of investment success.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Great ideas deserve great funding. Let our structured advisory ecosystem balance your capital workflows."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Accelerate Growth</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Expand organizational workflows and baseline market operations exponentially faster.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Develop Products</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Continuously reinvest in tech pipelines, intellectual design cycles, and innovation loops.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Build Teams</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Aggressively hire highly skilled operational personnel and critical management leaders.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Increase Market Reach</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Improve your business's regional market placement and organic customer acquisition loops.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Scale Business Operations & Build Confidence</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Expand internal physical infrastructure while professional financial formatting directly instills institutional investor trust.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Types of Funding Supported Matrix */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Types of Startup Funding We Support
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Aligning pitch strategies to fit your business's specific growth indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Seed Funding</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Target Metrics:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Ideal for idea-stage setups seeking initial validation parameters, prototype building, and early market entry strategies.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Angel Investment</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Target Metrics:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Best for early growth firms focused on operational market expansion and scalable market fit alignment.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Venture Capital Funding</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Target Metrics:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Tailored for high-growth operations and deep tech platforms aiming for aggressive commercial scale-ups.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Bridge Funding</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Target Metrics:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Supplies short-term runway modifications or intermediate working capital while preparing for larger institutional rounds.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-800 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Strategic Investment</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Target Metrics:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Engineered for long-term ecosystem alignment, deep industrial corporate mapping, and alternative territory access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Startup Fundraising Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We assist across diverse industrial sectors with specific compliance strategies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Technology Startups', 'SaaS Companies', 'Healthcare Startups', 'EdTech Businesses', 'E-commerce Platforms', 'Manufacturing Setups', 'Food & Bev Startups', 'Artificial Intelligence'].map((sector) => (
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
              The Startup Fundraising Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-stage blueprint engineered to get your venture investment-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Evaluation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Deep analysis of the business model and growth metrics.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Financial Prep</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Developing financial models and projections.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Pitch Deck</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Creating professional, compelling presentations for investors.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Strategy</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Building a tailored funding roadmap and capital strategy.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Readiness</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Organizing documentation for seamless due diligence.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-oklch(86.5% 0.127 207.078) text-black border-t border-slate-200 w-full clear-both ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Startups Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Startups Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              {/* Isolated Grid: Prevent items from collapsing into each other */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Clients Successfully Served",
                  "Financial Modeling Expertise",
                  "Valuation Specialists",
                  "Investor Readiness Support",
                  "Dedicated In-House Consultants"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-blue-200  transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-900 max-w-md">
                Our multidisciplinary corporate team features Financial Analysts, Startup Mentors, Virtual CFOs, and Valuation Experts.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Setup',
                  'GST & Corporate Tax Registrations',
                  'ROC & Compliance Management',
                  'Trademark Protection Filings',
                  'MSME Registration Support',
                  'Import Export Code (IEC)',
                  'Virtual CFO Support',
                  'Accounting & Bookkeeping',
                  'Payroll Management Advisory'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-800/60 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-200 transition-all duration-200"
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

          <div className="space-y-4">
            {[
              { q: "What are Startup Fundraising Services?", a: "These services help startups prepare for investment through comprehensive business valuation mapping, pitch deck design, financial forecasting, and custom funding strategy." },
              { q: "Do early-stage startups need fundraising support?", a: "Yes. Laying down robust, organized document matrices early on significantly increases direct capital options and opportunities with incoming angel syndicates or early-stage venture capital firms." },
              { q: "What is startup valuation?", a: "It is the structured analytical process of calculating your company's absolute intrinsic business worth prior to receiving external capital investment." },
              { q: "Can you help create investor pitch decks?", a: "Yes. We deliver full high-tier pitch deck preparation support, from professional story development and layout styling to financial data design." },
              { q: "Is financial modeling strictly necessary?", a: "Absolutely. Institutional investors focus heavily on fundamental unit economics and long-term financial projections before deploying capital." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-base">{idx + 1}. {faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
}