import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

// Updated metadata mapping for Section 8 Company Registration
export const metadata = servicesMetadata.section8Company || {
  title: "Best Section 8 Company (NGO) Registration CA Firm in Delhi India",
  description: "Professional NGO Registration Services by Fintax Adviser. 15+ Years Experience, 500+ Happy Clients Served. Complete end-to-end incorporation and tax exemption support.",
};

export default function Section8NGORegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "Legal Recognition & High Credibility",
    "Eligible for CSR Funding & Donations",
    "Tax Benefits (12A & 80G)",
    "Limited Liability Protection",
    "Perpetual Succession & Separate Legal Entity",
    "Complete End-to-End Support"
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
                ⚡ Purpose Driven · Legally Registered · Greater Impact
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Section 8 Company
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (NGO) Registration
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl font-bold text-slate-700 tracking-tight">
                Register Your NGO. Create a Better Tomorrow. Build Credibility. Earn Trust. Drive Change.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Empowering non-profits to create a better society with fast, hassle-free, and 100% compliant registrations backed by expert CA support at every single step.
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
            Looking for the Best Section 8 Company (NGO) Registration CA Firm in Delhi India?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Professional NGO Registration Services by <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. 
            We provide complete Section 8 Company Registration services for NGOs, charitable organizations, non-profit institutions, 
            trusts, welfare societies, educational organizations, and social enterprises across India. 
            A Section 8 Company is one of the most trusted legal structures for non-profit organizations seeking credibility, government recognition, donor confidence, and tax benefits. Whether your objective is education, healthcare, environmental protection, women empowerment, social welfare, or charitable activities, our experts help you complete the registration process smoothly and compliantly.
          </p>
        </div>
      </section>

      {/* What is Section 8 Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What is a Section 8 Company?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              A Section 8 Company is a non-profit organization registered under the Companies Act, 2013. Unlike ordinary companies, profits earned by a Section 8 Company cannot be distributed among members and must be used solely for promoting charitable objectives such as:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Education', 'Healthcare', 'Social Welfare', 'Environmental Protection',
              'Sports Development', 'Research Activities', 'Art & Culture Promotion', 'Rural Development', 'Women Empowerment'
            ].map((objective) => (
              <div key={objective} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {objective}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services Offered by Fintax Adviser
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Complete end-to-end NGO incorporation, registration, and corporate governance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Section 8 Company Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic and procedural incorporation support under the provisions of the Companies Act.</p>
              <div className="border-t border-slate-200/60 pt-4 text-xs font-semibold text-blue-600">
                ⚡ Full Corporate Formality Support
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">DSC & DIN Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Processing Digital Signature Certificates and Director Identification Numbers for proposed promoters.</p>
              <div className="border-t border-slate-200/60 pt-4 text-xs font-semibold text-blue-600">
                ⚡ Director Onboarding Credentials
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Name Reservation Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional verification assistance for obtaining unique and meaningful MCA NGO name approvals.</p>
              <div className="border-t border-slate-200/60 pt-4 text-xs font-semibold text-blue-600">
                ⚡ Structural Title Clearances
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MOA & AOA Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Meticulous preparation of custom Memorandum of Association and Articles of Association detailing non-profit clauses.</p>
              <div className="border-t border-slate-200/60 pt-4 text-xs font-semibold text-blue-600">
                ⚡ Constitutional Framework Layout
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Exemption Setup (12A & 80G)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Dedicated assistance in obtaining income tax exemptions for the NGO (12A) and tax deduction benefits for donors (80G).</p>
              <div className="border-t border-slate-200/60 pt-4 text-xs font-semibold text-blue-600">
                ⚡ High Credibility Exemption Status
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">CSR & Annual Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Registration support for receiving corporate CSR funds along with continuous ROC file maintenance and statutory audits.</p>
              <div className="border-t border-slate-200/60 pt-4 text-xs font-semibold text-blue-600">
                ⚡ Safe, Long-term Sustainment
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance / Benefits Section */}
      <section id="why-funding" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Advantages of Registering a Section 8 Company
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Choosing a Section 8 structure provides unmatched statutory advantages compared to conventional trusts or societies. It builds immediate trust with institutional donors and government networks.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "A Section 8 Company establishes a highly transparent corporate foundation preferred by CSR contributors and international funding agencies."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Higher Credibility and Trust</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Enjoys premium systemic stature among corporate donors, ministries, and banking organizations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Limited Liability Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Members' personal liabilities remain completely protected against corporate structural risks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Better Access to Funding</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Fulfill eligibility terms smoothly for CSR grants, government allocations, and cross-border contributions.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Perpetual Succession</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The independent separate legal entity continues seamlessly regardless of shifts in internal membership.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Enhanced Organizational Structure</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Operate under the transparent and universally respected regulations of the MCA corporate mechanism, driving continuous trust.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section (Flipped with reference layout logic) */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              The NGO Registration Process Flow
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A systematic multi-step regulatory roadmap executed accurately by our professional team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Step 1", title: "Consultation & Assessment", desc: "Evaluating your non-profit vision, objectives, and detailing structural prerequisites." },
              { step: "Step 2", title: "DSC & DIN Application", desc: "Obtaining required Digital Signature Certificates and Director Identification Numbers legally." },
              { step: "Step 3", title: "Name Approval", desc: "Filing name reservation requests through unique MCA government channels." },
              { step: "Step 4", title: "Drafting MOA & AOA", desc: "Formulating legal target parameters within foundational company charter documents." },
              { step: "Step 5", title: "MCA Filing", desc: "Submitting comprehensive Section 8 company incorporation packets directly to the registrar." },
              { step: "Step 6", title: "Certificate Issuance", desc: "Procuring your valid legal Section 8 Company Registration Certificate systematically." },
              { step: "Step 7", title: "Post-Inc Tax Filing", desc: "Setting up vital PAN, TAN, along with executing immediate 12A & 80G tax clearance setups." }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{p.step}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.desc}</p>
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
              Who Should Choose Section 8 Incorporation?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing legal foundations for varied fields prioritizing long-term social sustainability.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Educational Institutions', 'Healthcare Organizations', 'Charitable Organizations',
              'Environmental Groups', 'Women Empowerment Organizations', 'Research & Development Institutions',
              'CSR-Focused Organizations', 'Social Enterprises'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Required Documents Split Layout */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Advisers
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Professional Experience",
                  "500+ Happy Clients Served",
                  "Expert CA & Legal Team",
                  "Affordable Registration Packages",
                  "End-to-End NGO Support",
                  "Fast and Online Secure Process"
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
                Organizations looking for professional guidance, compliance clarity, and a strong foundation for charitable operations trust Fintax Adviser completely.
              </p>
            </div>

            {/* Right Column: Documents Required Box */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block mb-2">
                  Prerequisites Checklist
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Documents Required for Section 8 Registration
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-700 font-medium">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-blue-600 mb-1">1. Identity Proof of Directors</p>
                  <p>PAN Card · Aadhaar Card · Passport (mandatory for foreign nationals)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-blue-600 mb-1">2. Address Proof of Directors</p>
                  <p>Driving License · Voter ID · Utility Bill · Recent Bank Statement</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-blue-600 mb-1">3. Registered Office Address Proof</p>
                  <p>Electricity Bill · Property Tax Receipt · Rent Agreement · NOC from Property Owner</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-blue-600 mb-1">4. NGO Objective Details</p>
                  <p>Proposed Activities · Vision Statement · Mission Statement · Target Area of Operations</p>
                </div>
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is the minimum number of members required for a Section 8 Company?", a: "A minimum of two directors and two shareholders are generally required for incorporation." },
              { q: "Can a Section 8 Company earn income?", a: "Yes, but profits must be utilized only for charitable objectives and cannot be distributed among members or directors under any circumstances." },
              { q: "Is Section 8 Company better than a Trust or Society?", a: "A Section 8 Company often enjoys higher systemic credibility, financial transparency, operational lifespan, and corporate donor confidence." },
              { q: "Can a Section 8 Company receive donations?", a: "Yes, registered NGOs can legally receive donations and can apply for additional tax-saving registrations such as 12A and 80G." },
              { q: "Is CSR funding available for Section 8 Companies?", a: "Yes, many modern corporates explicitly prefer contributing Corporate Social Responsibility (CSR) funds directly to registered Section 8 corporate frameworks." },
              { q: "How long does registration take?", a: "The exact registration timeline depends on internal document accuracy, layout verification speeds, and external MCA government approval windows." }
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