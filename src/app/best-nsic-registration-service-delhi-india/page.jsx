import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.nsicRegistration || {
  title: "NSIC Registration Services for MSMEs | Fintax Adviser",
  description: "Unlock government tender benefits for MSMEs. Avail EMD exemptions, tender fee waivers, and exclusive procurement advisory under the Single Point Registration Scheme."
};
export default function NSICRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients Across India",
    "Expert Compliance Team",
    "Pan India Online Services"
  ];

  const faqs = [
    { q: "What is NSIC Registration?", a: "NSIC Registration is a government-supported registration that helps MSMEs participate in government procurement programs, purchases, and tenders with special benefits." },
    { q: "Is Udyam Registration required?", a: "Yes, businesses generally need a valid Udyam Registration to apply for the NSIC Single Point Registration Scheme (SPRS)." },
    { q: "Who can apply for NSIC Registration?", a: "Eligible MSMEs including micro and small manufacturers, service providers, startups, LLPs, companies, partnerships, and proprietorships." },
    { q: "What are the major benefits?", a: "Key benefits include tender participation advantages, complete Earnest Money Deposit (EMD) exemption, tender document fee waivers, and marketing support." },
    { q: "Is NSIC Registration mandatory?", a: "No, but it is highly beneficial for MSMEs looking to work closely with Central Government departments, ministries, and PSUs." },
    { q: "How long does the registration process take?", a: "The overall processing timeline depends on technical document verification, inspection, and formal approval procedures by authorities." },
    { q: "Can startups apply?", a: "Yes, eligible startups can apply for NSIC registration subject to meeting the applicable structural requirements." },
    { q: "Why choose Fintax Adviser?", a: "Professional guidance ensures accurate drafting, seamless verification documentation, smooth processing, and complete compliance support." }
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
                ⚡ UNLOCK GOVERNMENT TENDER BENEFITS FOR MSMEs
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                NSIC Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                NSIC Registration (Single Point Registration Scheme) helps MSMEs participate in Government Tenders and enjoy special benefits, exemptions, and government-recognized business growth opportunities.
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
            Grow Your Business with Government Procurement Opportunities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for professional NSIC Registration services in India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides complete assistance for obtaining NSIC Registration for Micro, Small, and Medium Enterprises (MSMEs) under the National Small Industries Corporation (NSIC). NSIC is a Government of India enterprise operating under the Ministry of MSME, and its Single Point Registration Scheme (SPRS) enables businesses to expand horizons efficiently.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services Covered Under NSIC Support
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive operational assistance to ensure MSMEs compete effectively in government marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Single Point Registration Scheme</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete scheme onboarding to unlock structural central government procurement benefits and exemptions.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tender Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert technical support helping you participate and apply in targeted government tenders.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Documentation Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end preparation, drafting, compilation, and thorough internal review of mandatory infrastructure data.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MSME Compliance Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Strategic ongoing guidance on dynamic compliance, investment slabs, and specific eligibility rules.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registration Renewal Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Timely proactive assistance with periodic certification renewals, profile changes, and product updates.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Government Procurement Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional counseling mapping out lucrative business paths via PSU and department purchase allocations.</p>
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
                Why NSIC Registration is Important
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                NSIC Registration is a definitive catalyst that helps MSMEs compete more effectively in commercial government procurement workflows against larger enterprises.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "It delivers enhanced market access, robust centralized tender opportunities, procurement advantages, and high business development credibility."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Better Market Access</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Direct path to fulfill product quotas required by government departments.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">EMD Exemption</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Saves significant working capital by exempting the Earnest Money Deposit.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Tender Fee Waiver</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Zero-cost access to official commercial tender documentation books.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Enhanced Credibility</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">A government-recognized badge proving operational capacity and trust parameters.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Marketing Support Initiatives</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Enables MSMEs to participate globally in specialized exhibitions, fairs, and international promotions.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advantages Matrix Section */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Key Advantages & Financial Impact
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Tangible bottom-line benefits designed to accelerate revenue potentials for Micro & Small businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Reduced Cost</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Drastically lowers tender participation capital demands through explicit EMD exemptions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Document Fee Savings</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Bypass application paperwork charges entirely on all eligible public procurement tenders.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">More Procurement Access</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Directly tap into specialized Central Government and Public Sector Undertaking allocations.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">MSME Recognition</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Strengthens overall business credibility, identity positioning, and domestic market trust.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Promotion Benefits</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Avail extensive marketing support, trade fair allocations, and tech upgrade schemes.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Revenue Scaling</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Vastly increases top-line revenue potential by winning corporate government contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Eligible Entities & Business Categories
            </h2>
            <p className="text-sm text-slate-500 mt-1">Open to all eligible Micro & Small MSMEs holding a valid Udyam Registration.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm sm:text-sm font-bold text-slate-700">
            {['Micro Enterprises', 'Small Enterprises', 'Manufacturing Units', 'Service Providers', 'Startup Businesses', 'Private Limited Companies', 'Limited Liability Partnerships (LLP)', 'Proprietorship & Partnership Firms'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Process Step Split */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Documents Required */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Documents Required
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Valid Udyam Registration Certificate",
                  "Certificate of Incorporation / Deed",
                  "Company PAN Card",
                  "GST Certificate (if applicable)",
                  "Audited Financial Statements",
                  "Recent Bank Statements",
                  "Detailed Product/Service Profile",
                  "Machinery Details & Utility Bills"
                ].map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Execution Process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Onboarding Steps
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  NSIC Single Point Registration Process
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Step 1 - Consultation & Eligibility Check',
                  'Step 2 - Documentation Verification',
                  'Step 3 - Application Form Preparation',
                  'Step 4 - Online Submission to NSIC',
                  'Step 5 - Technical Inspection & Processing',
                  'Step 6 - Final Registration Certification Approval'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
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