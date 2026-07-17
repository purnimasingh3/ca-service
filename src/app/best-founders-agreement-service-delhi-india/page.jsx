import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.foundersAgreement;
export default function FoundersAgreementLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "500+ Happy Clients",
    "Expert Legal Professionals",
    "Legally Sound Agreements",
  ];

  const faqs = [
    { q: "Is a Founders Agreement legally binding?", a: "Yes, when properly drafted, signed, and executed, it serves as a legally enforceable and contractually binding agreement between the founders." },
    { q: "When should founders sign the agreement?", a: "Ideally, founders should sign the agreement at the very early stages of the startup, before beginning major operations, incorporating the entity, or raising outside investment." },
    { q: "Can a Founders Agreement be modified later?", a: "Yes. Startups evolve, and the agreement can be amended or completely modified at any time with the written mutual consent of all founders involved." },
    { q: "Is a Founders Agreement mandatory?", a: "While not explicitly mandated by company registration laws, it is highly recommended for every co-founded startup to protect operational interests and mitigate high-risk legal exposure." },
    { q: "Does it cover intellectual property ownership?", a: "Yes, intellectual property (IP) assignment, ownership protections, and proprietary usage rights are critical cornerstone provisions included in the agreement." },
    { q: "Why should startups have a Founders Agreement?", a: "It protects each individual founder's equity, prevents organizational stalemates, protects business ideas, and creates a highly credible, investor-ready legal foundation." }
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
                ⚡ Build a Strong Foundation · Grow Together · Succeed Together
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Founders Agreement
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Drafting Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                A Founders Agreement defines the rights, roles, responsibilities and ownership of all founders. It prevents future disputes and ensures clarity, transparency and fairness in your startup journey.
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
            Secure Your Startup with a Professionally Drafted Founders Agreement
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Starting a business with co-founders is exciting, but without clear legal documentation, disputes can arise over ownership, responsibilities, decision-making, profit sharing, intellectual property, and exit rights. A Founders Agreement helps establish transparency and protects the interests of all founders from the beginning.
          </p>
          <p className="text-base text-slate-500 pt-2">
            We provide professional Founders Agreement Drafting Services for startups, entrepreneurs, technology companies, partnerships, and growing businesses across India. With 12+ Years of Experience and 500+ Happy Clients, we help startups build a strong legal foundation through customized and legally compliant agreements.
          </p>
        </div>
      </section>

      {/* Key Clauses Covered Section */}
      <section id="clauses" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Key Clauses Included in a Founders Agreement
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive operational protections tailored to your core business values, equity milestones, and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Clause 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Equity & Ownership Structure</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Defines initial shareholding configurations alongside systematic adjustments for long-term equity stability.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Founder Details</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Equity Distribution</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Ownership Percentages</span>
              </div>
            </div>

            {/* Clause 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Operations & Corporate Governance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Clarifies operational, management, and financial parameters mapping executive accountability frameworks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Roles & Duties</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Decision-Making Rights</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Voting Mechanisms</span>
              </div>
            </div>

            {/* Clause 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Contributions & Perks</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Sets standard parameters detailing funding structures and equity performance evaluations securely.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Contribution</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit-Sharing Setup</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Future Funding Rules</span>
              </div>
            </div>

            {/* Clause 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Asset & Innovation Protections</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Guarantees that proprietary property belongs securely to the corporate legal shell rather than individual founders.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Intellectual Property</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Asset Ownership</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Software & Brand Rights</span>
              </div>
            </div>

            {/* Clause 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Restrictive Covenants</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Restricts operational leakage, unauthorized information sharing, or competing operations to protect core valuation metrics.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Confidentiality Clause</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Non-Compete Clause</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Trade Secret Safeguards</span>
              </div>
            </div>

            {/* Clause 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Exits & Conflict Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Establishes pre-defined contingency terms detailing departure parameters, share buybacks, and mediation paths.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Founder Exit Terms</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Dispute Resolution</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Resignation & Share Transfers</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="importance" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why is a Founders Agreement Important?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Co-founding a business carries risk without an established operating rulebook. Professional alignment establishes transparency, legal enforceability, and clear operational guidelines.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Protect your vision, define operational metrics early, and secure your partnership against future structural deadlocks."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Prevents Founder Disputes</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Clearly defines rights, responsibilities, and expectations among partners.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Protects Equity Ownership</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensures fair and clear allocation of corporate shares among all stakeholders.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Defines Business Roles</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Clarifies absolute operational and strategic responsibilities across workflows.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Safeguards Intellectual Property</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Protects business ideas, proprietary software, source codes, and trademarks safely.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Builds Investor Confidence & Long-Term Stability</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Institutional investors look for clean equity cap tables, vesting guidelines, and professional internal dispute frameworks before deploying capital resources.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Drafting Process Section */}
      <section id="process" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Our Founders Agreement Drafting Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A comprehensive six-step legal mapping framework guaranteeing legally sound startup operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 1: Consultation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">In-depth discussion analyzing the startup business model, timeline goals, and expectations.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 2: Info Collection</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Gathering ownership metrics, capital contributions, and operational roles securely.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 3: Agreement Drafting</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Structuring a customized founders contract meeting customized regulatory policies perfectly.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 4: Legal Review</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Rigorous internal compliance analysis assessing liabilities, risk protections, and state rules.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 5: Finalization</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Incorporating necessary founder edits and refining parameters to ensure mutual alignment.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 6: Agreement Delivery</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The final, fully execution-ready, legal document is securely processed and delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments & Documents Required */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Who Needs It */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Who Needs a Founders Agreement?
                </h3>
                <p className="text-xs text-slate-500 mt-1">Providing legal clarity across multiple modern business setups.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm font-bold text-slate-700">
                {['Startups', 'Technology Companies', 'SaaS Businesses', 'E-Commerce Ventures', 'Fintech Startups', 'Manufacturing Startups', 'Digital Agencies', 'Partnership Businesses', 'D2C Brands', 'Innovative Business Ventures'].map((sector) => (
                  <div key={sector} className="p-3 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors text-center">
                    {sector}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Documents Required */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Required Details & Documentation</h3>
              <p className="text-sm text-slate-600 mb-6">Generally, the following information is needed to begin the documentation process:</p>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5"><span className="text-blue-500">✓</span> Founder KYC Documents (PAN Card & Address Proof)</li>
                <li className="flex items-start gap-2.5"><span className="text-blue-500">✓</span> Startup & Core Business Objective Details</li>
                <li className="flex items-start gap-2.5"><span className="text-blue-500">✓</span> Comprehensive Shareholding & Equity Vesting Structure</li>
                <li className="flex items-start gap-2.5"><span className="text-blue-500">✓</span> Initial & Future Capital Contribution Parameters</li>
                <li className="flex items-start gap-2.5"><span className="text-blue-500">✓</span> Defined Roles & Responsibilities of all Co-Founders</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Fintax Adviser */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Industry Experience",
                  "Startup-Focused Legal Solutions",
                  "Experienced Legal Professionals",
                  "Transparent & Affordable Pricing",
                  "Fast Document Turnaround",
                  "Pan India Online Legal Support"
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
                Our team consists of senior corporate lawyers, contract drafting experts, compliance specialists, and chartered accountants ensuring complete corporate compliance.
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration & Filing',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Management Solutions',
                  'Virtual CFO Leadership'
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