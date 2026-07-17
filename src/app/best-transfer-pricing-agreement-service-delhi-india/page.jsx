import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.transferPricingAgreement;

export default function TransferPricingAgreementLanding() {
  const HERO_STATS = [
    "12+ Years of Experience",
    "500+ Happy Clients",
    "Expert Tax & Legal Professionals",
    "Compliant Pricing, Lower Tax Risk",
  ];

  const faqs = [
    { 
      q: "What is a Transfer Pricing Agreement?", 
      a: "It is an agreement that defines pricing arrangements between related entities for intercompany transactions." 
    },
    { 
      q: "Who requires a Transfer Pricing Agreement?", 
      a: "Businesses engaged in related-party domestic or international transactions." 
    },
    { 
      q: "Is a Transfer Pricing Agreement mandatory?", 
      a: "The requirement depends on the nature and value of related-party transactions and applicable regulations." 
    },
    { 
      q: "What transactions are covered?", 
      a: "Goods, services, royalties, management fees, loans, and other intercompany dealings." 
    },
    { 
      q: "Why is transfer pricing documentation important?", 
      a: "It helps demonstrate compliance with the arm's length principle and supports tax audits." 
    },
    { 
      q: "How can Fintax Adviser help?", 
      a: "We provide drafting, review, compliance, documentation, and advisory services for transfer pricing matters." 
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
                ⚡ Accurate Pricing · Lower Tax Risk · Greater Confidence
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Transfer Pricing Agreement Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Drafting & Advisory Services. We help businesses draft robust Transfer Pricing Agreements that ensure regulatory compliance, reduce tax risks, and support arm's length pricing.
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
            Ensure Perfect Corporate Compliance with Transfer Pricing Agreements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. A Transfer Pricing Agreement is an important legal and tax document used between related entities, group companies, subsidiaries, parent companies, or associated enterprises involved in domestic or international transactions. 
            The agreement defines the pricing methodology for goods, services, intellectual property, loans, management fees, and other intercompany transactions to ensure compliance with transfer pricing regulations across multiple jurisdictions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Transfer Pricing Agreement Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end legal and financial safeguards for your intercompany trade architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agreement Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparation of structured, highly customized transfer pricing agreements designed for absolute local and global tax clarity.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agreement Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive audit and review of existing cross-entity intercompany agreements to establish immediate compliance benchmarks.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Transfer Pricing Documentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Robust structural compilation and continuous maintenance support for formal transfer pricing reports and mandatory corporate registers.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Compliance Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert forward-thinking guidance navigating domestic tax provisions alongside complex international transfer pricing laws.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Risk Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Proactive identification of vulnerable transactional nodes, paired with custom operational mitigation strategies.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Authority Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Elite corporate representation and professional assistance during intensive financial assessments and government tax audits.</p>
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
                Why is a Transfer Pricing Agreement Important?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Establishing explicit transactional terms between connected operational nodes helps protect businesses from severe regulatory clawbacks, arbitrary valuations, and expensive cross-border litigations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure a clear, legally solid framework that reliably stands up to severe international tax authority audits."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Tax Compliance</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Helps businesses comply seamlessly with strict transfer pricing regulations under applicable tax laws.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Risk Management</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Significantly reduces systemic risk of unexpected tax authority scrutiny and punitive financial penalties.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Clear Pricing Framework</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Unequivocally defines how values and market prices are determined between related operating entities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Audit Support</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Provides immediate, organized documentation support during critical statutory tax assessments and corporate audits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">International Business Operations</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Facilitates incredibly smooth cross-border commercial transactions across distinct global group companies.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transactions & Clauses Section */}
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Transactions Covered</h3>
              <div className="space-y-3">
                {[
                  { title: "Sale of Goods", desc: "Intercompany sale and purchase transactions." },
                  { title: "Management Services", desc: "Administrative and support service arrangements." },
                  { title: "Technical Services", desc: "Technical assistance and consultancy services." },
                  { title: "Intellectual Property", desc: "Trademark, patent, royalty, and licensing transactions." },
                  { title: "Loans & Financing", desc: "Intercompany loans and financing arrangements." },
                  { title: "Cost Sharing Arrangements", desc: "Shared operational and development costs." },
                  { title: "Marketing & Distribution", desc: "Distribution and promotional activities between related entities." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="font-bold text-sm text-slate-900 block">{item.title}</span>
                    <span className="text-sm text-slate-600">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Clauses Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Parties to the Agreement", "Scope of Transactions", "Pricing Methodology",
                  "Arm’s Length Principle", "Payment Terms", "Roles & Responsibilities",
                  "Documentation Requirements", "Compliance Obligations", "Audit Rights",
                  "Confidentiality Clause", "Dispute Resolution", "Governing Law & Termination"
                ].map((clause, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white p-3.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                    {clause}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Required Documentation</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Company Incorporation Docs", "PAN & GST Details", "Group Structure Details",
                  "Financial Statements", "Transaction Details", "Existing Intercompany Agreements",
                  "Transfer Pricing Reports", "Business Activity Info"
                ].map((doc, index) => (
                  <span key={index} className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-lg">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Operational Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">The Implementation Process</h2>
            <p className="text-slate-600 text-sm mt-2">A systematic framework mapping secure operational structures from assessment to execution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "Step 01", title: "Consultation", desc: "Understanding business structure & related parties." },
              { step: "Step 02", title: "Collection", desc: "Rigorous review of business & financial records." },
              { step: "Step 03", title: "Risk Analysis", desc: "Assessment of custom compliance needs." },
              { step: "Step 04", title: "Drafting", desc: "Preparation of the core Transfer Pricing Agreement." },
              { step: "Step 05", title: "Review", desc: "Legal and tax review of agreement terms." },
              { step: "Step 06", title: "Implementation", desc: "Ongoing guidance on compliance workflows." }
            ].map((proc, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl relative">
                <span className="text-[10px] font-bold text-blue-600 tracking-wider block mb-1 uppercase">{proc.step}</span>
                <h4 className="font-bold text-md text-slate-900 mb-1">{proc.title}</h4>
                <p className="text-[14px] text-slate-500 leading-normal">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="benefits" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of a Transfer Pricing Agreement
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Protect your business ecosystem and optimize tax efficiency across enterprise verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { h: "Better Tax Compliance", d: "Align fully with evolving direct tax laws and corporate arm's length frameworks." },
              { h: "Reduced Regulatory Risk", d: "Avoid systemic penalties and keep entity networks free from friction." },
              { h: "Improved Documentation", d: "Build easily recallable transaction histories for corporate standard reporting." },
              { h: "Clear Pricing Structure", d: "Instantly declare defined values for intercompany workflows." },
              { h: "Audit Readiness", d: "Keep legal frameworks structured to satisfy aggressive tax inspections." },
              { h: "Lower Risk of Disputes", d: "Mitigate double taxation exposures and eliminate intra-group pricing friction." },
              { h: "Enhanced Governance", d: "Build unmatched corporate responsibility criteria for investors." },
              { h: "International Operations", d: "Run complex, multi-border business models with supreme confidence." }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-md font-bold text-blue-600 mb-2">{benefit.h}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{benefit.d}</p>
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
              Who Needs a Transfer Pricing Agreement?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing customized agreement frameworks across size, industry, and corporate goals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Multinational Companies', 'Parent Companies', 'Subsidiary Companies', 
              'Group Enterprises', 'Foreign-Owned Companies', 'Shared Service Centers', 
              'Technology Companies', 'Manufacturing Businesses', 'Export & Import Companies', 
              'E-commerce Businesses'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center text-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
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

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years of Professional Experience",
                  "Expert Tax & Legal Team",
                  "Customized Agreements",
                  "Compliance-Focused Approach",
                  "Pan India Services",
                  "End-to-End Support Support"
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
                Our multidisciplinary corporate expert team features Chartered Accountants, Financial Analysts, International Tax Experts, Compliance Specialists, and Corporate Legal Advisors.
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

              {/* Separated Content Blocks */}
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