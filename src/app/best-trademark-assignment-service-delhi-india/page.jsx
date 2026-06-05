import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

// Updated metadata reference for Trademark Assignment
export const metadata = servicesMetadata.trademarkAssignment;

export default function TrademarkAssignmentLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert CA & Legal Team",
    "500+ Happy Clients",
    "Pan India Services",
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
                ⚡ TRANSFER YOUR BRAND · SECURE TOMORROW
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Trademark Assignment Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Legal transfer of your valuable brand rights. Safely transfer your ownership interests with legal compliance and complete protection of both parties.
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
            Expert Trademark Transfer & Assignment Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the <strong className="text-blue-600 font-semibold">Best Trademark Assignment Services CA Firm in Delhi India</strong>? Fintax Adviser provides professional Trademark Assignment Services for businesses, startups, entrepreneurs, companies, LLPs, and trademark owners across India. A trademark is a valuable intellectual property asset. When a trademark owner wants to transfer ownership rights to another individual, company, or organization, a Trademark Assignment is required to ensure legal transfer of ownership and protect the rights of both parties.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Trademark Assignment Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive and end-to-end support for seamless and legally valid asset transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Assignment Deed Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparation of legally valid and compliant assignment agreements protecting both parties.</p>
              <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Custom Legal Drafting</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Transfer Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Filing trademark assignment applications with the official Trademark Registry efficiently.</p>
              <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Official Registry Submission</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ownership Change Docs</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Preparation and complete verification of technical ownership transfer documentation.</p>
              <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Complete Documentation</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Portfolio Transfer</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structured bulk transfer of multiple trademarks and complex corporate brand assets safely.</p>
              <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Multi-Brand Management</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Due Diligence</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Thorough pre-verification of ownership validity, status, and legal track records before signing.</p>
              <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pre-Assignment Auditing</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Legal Advisory Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert end-to-end guidance and follow-up support until the final official registry approval.</p>
              <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Dedicated Follow-Up Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-assignment" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Businesses Need Trademark Assignment 
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Trademark Assignment is the legal process of transferring ownership rights of a registered or pending trademark from one party (Assignor) to another party (Assignee). It may involve cases such as Brand Name Transfers, Logo Transfers, Trademark Sales, Business Acquisitions, Brand Ownership Transitions, or Intellectual Property Restructuring.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "TRANSFER TODAY, PROTECT FOREVER. Avoid future ownership disputes and optimize commercial value."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Ownership Transfer</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensures completely valid, permanent, and undisputed transfer of trademark rights.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Brand Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Protects the structural ownership interests of both the assignor and assignee.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Registry Compliance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Handles all mandatory form filings perfectly with the governing Trademark Registry.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Continuity</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Facilitates seamless, rapid operations during corporate mergers, acquisitions, and restructuring.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Monetize Intellectual Property</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Allows original trademark owners to maximize commercial revenue and unlock real financial valuation directly from their built brand assets.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Assignment Types Matrix Section */}
      <section id="assignment-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Types of Trademark Assignment
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Fintax Adviser helps determine the most suitable assignment structure for your business assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Complete Assignment</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Full ownership rights of the entire trademark are completely transferred to the assignee.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Partial Assignment</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Trademark rights are transferred uniquely for specific goods or services classifications.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Assignment With Goodwill</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Trademark is transferred along with the built business reputation and associated goodwill values.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Assignment Without Goodwill</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Trademark rights are transferred cleanly without passing the associated business market goodwill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section id="documents-required" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Documents Required for Trademark Assignment
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Essential checklists needed for running systematic and successful ownership recordals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Assignor */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-center uppercase tracking-wide text-blue-600">Assignor Documents</h3>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Identity Proof</li>
                <li className="flex items-center gap-2">✓ Address Proof</li>
                <li className="flex items-center gap-2">✓ Trademark Ownership Details</li>
              </ul>
            </div>

            {/* Assignee */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-center uppercase tracking-wide text-blue-600">Assignee Documents</h3>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Identity Proof</li>
                <li className="flex items-center gap-2">✓ Address Proof</li>
                <li className="flex items-center gap-2">✓ Business Registration Documents <span className="text-xs text-slate-500 font-normal">(if applicable)</span></li>
              </ul>
            </div>

            {/* Trademark */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-center uppercase tracking-wide text-blue-600">Trademark Documents</h3>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2">✓ Trademark Registration Certificate</li>
                <li className="flex items-center gap-2">✓ Trademark Application Details</li>
                <li className="flex items-center gap-2">✓ Assignment Deed & Supporting Agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Process Tracker Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trademark Assignment Process
            </h2>
            <p className="text-sm text-slate-500 mt-1">Our step-by-step methodology ensures seamless legal status tracking and updates.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center text-xs font-bold text-slate-700">
            {[
              { step: "Step 1", title: "Consultation & Review", desc: "Review of trademark ownership & objectives" },
              { step: "Step 2", title: "Document Collection", desc: "Verification of required documents" },
              { step: "Step 3", title: "Deed Drafting", desc: "Preparation of compliant assignment agreement" },
              { step: "Step 4", title: "Execution", desc: "Signing of documents by both parties" },
              { step: "Step 5", title: "Registry Filing", desc: "Submission of assignment application" },
              { step: "Step 6", title: "Registry Processing", desc: "Examination by the Trademark Registry" },
              { step: "Step 7", title: "Ownership Update", desc: "Ownership officially updated to Assignee" },
            ].map((proc, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-blue-600 uppercase block mb-1">{proc.step}</span>
                  <div className="text-slate-900 text-sm font-extrabold mb-2">{proc.title}</div>
                </div>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{proc.desc}</p>
              </div>
            ))}
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
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years of Experience",
                  "500+ Happy Clients Served",
                  "Expert CA & Legal Team",
                  "Affordable Pricing Structure",
                  "Pan India Online Services",
                  "End-to-End Trademark Support",
                  "Complete IP Solutions"
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
                Our trusted corporate legal team handles everything from custom drafting of agreements up to persistent following up until absolute final approval is obtained.
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

          <div className="space-y-4">
            {[
              { q: "Can a trademark be transferred to another person?", a: "Yes. A registered or pending trademark can generally be transferred through a legally compliant trademark assignment." },
              { q: "Is Trademark Registry approval required?", a: "Yes. The assignment must be explicitly recorded with the Trademark Registry for official ownership recognition." },
              { q: "Can a trademark be sold?", a: "Yes. Trademark rights can be completely sold through a valid assignment agreement." },
              { q: "What is the difference between assignment and licensing?", a: "Assignment permanently transfers absolute ownership, while licensing only grants usage rights over the intellectual property." },
              { q: "Can pending trademarks be assigned?", a: "Yes. Pending trademark applications can also be legally assigned to another party." },
              { q: "Why choose the Best Trademark Assignment Services CA Firm in Delhi India?", a: "Professional handling guarantees a legally valid ownership transfer and maintains absolute compliance with trademark regulations." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-base">{faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}