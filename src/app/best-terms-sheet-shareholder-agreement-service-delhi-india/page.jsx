import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.termSheetSha || {
  title: "Professional Term Sheet & Shareholders Agreement (SHA) Services | Fintax Adviser",
  description: "Secure your investments and protect company interests. Expert drafting and advisory services for Term Sheets & SHAs in India.",
};

export default function TermSheetShaLanding() {
  const HERO_STATS = [
    "15+ Years Legal & Corporate Experience",
    "Tailored, Conflict-Free Clause Design",
    "Founder & Investor Protection Balanced",
    "Comprehensive Post-Deal Advisory",
  ];

  const faqs = [
    { q: "Is a Term Sheet legally binding?", a: "Most operational commercial parameters in a Term Sheet are non-binding. However, specific clauses like confidentiality, exclusivity, and governing jurisdiction are typically binding." },
    { q: "Is a Shareholders Agreement (SHA) legally mandatory?", a: "While not strictly mandatory by company law statutes, it is critically recommended to explicitly govern shareholder rights, voting parameters, and dispute resolutions." },
    { q: "Can early-stage startups use standard templates for Angel funding?", a: "Using generic templates is highly risky, as they overlook critical custom protections such as tailored vesting schedules, right of first refusal, and tag-along thresholds." },
    { q: "What is the difference between a Term Sheet and an SHA?", a: "A Term Sheet is a brief, preliminary commercial summary mapping intended investment terms, whereas an SHA is the exhaustive, legally binding contract governing corporate structure." },
    { q: "Can existing shareholders amend an active SHA architecture later?", a: "Yes. Shareholders can execute restated or amended agreements as funding tiers evolve, subject to explicit investor consensus." }
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
                ⚡ SECURE YOUR INVESTMENT | PROTECT YOUR FUTURE
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Professional Term Sheet
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Shareholders Agreements
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Draft clear, protective, investor-ready legal frameworks for corporate funding rounds with help from Fintax Adviser legal specialists.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
            Expert Drafting Services for Foundations of Corporate Governance
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-4">
            <p>
              Looking to formalize an investment deal, startup funding round, or business partnership? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides professional Term Sheet and Shareholders Agreement (SHA) drafting services for startups, founders, investors, angel networks, and growing businesses across India.
            </p>
            <p>
              A well-drafted Term Sheet and Shareholders Agreement helps protect the interests of founders and investors while creating a clear framework for ownership, governance, decision-making, investment rights, and future business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Understanding the Mechanics</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A <strong>Term Sheet</strong> is a preliminary document outlining primary commercial expectations (Valuation, Stakes, Board seats) before deep structural audit legalities commence.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A <strong>Shareholders Agreement (SHA)</strong> is the definitive binding statute governing operational execution, exit mechanics, transfer structures, and board operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-[#071c3d]">Essential Corporate Pillars</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <ul className="text-base text-slate-600 space-y-1">
                <li>• Investor Protection Structuring</li>
                <li>• Anti-Dilution & Pre-emption Clauses</li>
                <li>• Founder Vesting Schedules</li>
                <li>• Clear Tag-Along & Drag-Along Exit Rights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clauses Covered */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Critical Clauses Included in Our Drafting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Governance Framework</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Board seat distribution, appointment mechanisms, specific information rights, and comprehensive tables of reserved matters requiring investor consensus.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transfer Regulations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Right of First Refusal (ROFR), Right of First Offer (ROFO), and robust Tag-Along/Drag-Along structures safeguarding minority and majority interests equally.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Exit & Resolution</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Definitive paths for strategic acquisitions, IPO execution timelines, clear liquidation preferences, and formal arbitration dispute channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who We Help Secure
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {["Fundraising Startups", "Angel Investors & Syndicates", "VC Investment Funds", "Private Limited Partnerships", "Joint Venture Collaborations", "Co-Founder Formations"].map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 flex items-center justify-center">
                <span className="text-blue-700 block text-base md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Checklist Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Information Assets Required for Structural Drafting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Corporate Entity Documentation</h3>
              <ul className="text-slate-700 text-sm space-y-2 font-medium">
                <li>✔ Certificate of Incorporation & Corporate PAN</li>
                <li>✔ Current Cap Table & Shareholding Percentages</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Stakeholder Profiles</h3>
              <ul className="text-slate-700 text-sm space-y-2 font-medium">
                <li>✔ Complete KYC Details of Founders</li>
                <li>✔ Comprehensive Profile Matrix of Entering Investors</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Deal Parameters</h3>
              <ul className="text-slate-700 text-sm space-y-2 font-medium">
                <li>✔ Investment Proposals or Commercial Inbound Letters</li>
                <li>✔ Existing Inter-se or Founder Agreements</li>
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
              Execution-Ready Document Blueprint
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {[
              { step: 1, title: "Consultation", desc: "Mapping deal structure and core requirements." },
              { step: 2, title: "Data Gathering", desc: "Collecting cap tables and investment terms." },
              { step: 3, title: "Drafting", desc: "Developing customized protective legal clauses." },
              { step: 4, title: "Refinement", desc: "Negotiation and clause adjustment support." },
              { step: 5, title: "Final Delivery", desc: "Providing clean, execution-ready documentation." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Layout */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Ensure Clean Governance. Lock Deals Securely.</h3>
              <p className="text-slate-400 text-sm mt-1">Connect with expert corporate advisory teams globally via virtual processing panels seamlessly.</p>
            </div>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-md">
              Secure Deal Architecture Now
            </Link>
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