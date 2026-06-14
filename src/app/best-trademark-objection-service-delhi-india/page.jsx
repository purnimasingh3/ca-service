import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.trademarkObjection;

export default function PremiumTrademarkLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert Trademark Consultants",
    "500+ Happy Clients Served",
    "100% Compliance Assurance",
  ];
  const faqs = [
    { q: "What is a Trademark Objection?", a: "A trademark objection is an official query or statutory concern raised by the Trademark Examiner during application review before approving it for journal publication." },
    { q: "Does an objection mean my trademark has been rejected?", a: "No. Objection is not immediate rejection. It simply means the department requires clarification, supporting usage documents, or legal justification." },
    { q: "What is a Section 9 objection?", a: "Section 9 objections relate primarily to a lack of core distinctiveness, generic word structures, or overly descriptive brand names." },
    { q: "What is a Section 11 objection?", a: "Section 11 concerns arise when your applied trademark resembles visually or phonetically identical brand properties already registered on records." },
    { q: "Can trademark objections be resolved?", a: "Yes. Submitting a clear, well-supported legal reply within deadlines resolves objections and moves applications forward." },
    { q: "Do you provide official hearing support?", a: "Yes. Fintax Adviser provides complete professional preparation, file packaging, and hearing representation assistance." },
    { q: "What is the timeline to file an objection response?", a: "Applicants must file a formal, digitized legal response within exactly 30 days of the emission of the examination report." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Ambient Background Lights */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-300 rounded-full blur-[80px] sm:blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-indigo-300 rounded-full blur-[70px] sm:blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Expert Support · Strong Reply · Successful Registration
              </span>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Trademark Objection
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Handling Services in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Received a Trademark Objection Notice from the Trademark Registry? Don't worry. We help you respond with strong legal replies and maximize your chances of successful brand approval.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0 text-left">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Link href="/consultation" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white text-center px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Free Expert Consultation
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
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Professional Trademark Objection Handling Consultant
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. An objection does not mean your trademark application has been rejected. It simply means the Trademark Department requires clarification, supporting documents, or legal justification before approving your application. We provide expert drafting, research, and hearing support to protect your brand identity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Trademark Objection Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end assistance to address concern parameters raised by the Trademark Registry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Examination Report Analysis</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Our legal specialists thoroughly evaluate registry objections to locate absolute pathways for approvals.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Objection Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Applicable Sections</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Similar Brand Scans</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Registry Comments</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Fundamental Legal Grounds</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Objection Reply Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We prepare structured, legally sound responses that provide explicit defenses against raised concerns.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Legal Arguments</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Case References</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Distinctiveness Proof</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Usage Invoices</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> User Affidavits & Evidence</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Hearing Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">If an official show-cause hearing is scheduled, we represent and guide you throughout the entire proceeding.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Hearing Prep</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Representation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Case Structuring</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Matrix</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Registry Coordination</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Rectification</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Need corrections? We modify application data points to clear pending registry conflicts quickly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Updates Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Detail Edits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Class Fixes</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> TM Form TM-M</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Section 9 Distinctiveness Defense</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We construct strong legal parameters showing descriptive or geographical terms have acquired distinctive character.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Acquired Character</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Long-term Usage</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Market Prominence</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Brand Evidence</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Section 11 Similarity Resolution</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">When identical or confusingly similar trademarks conflict, we create distinct visual and phonetic differentiations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Visual Auditing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Phonetic Profiling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Class Limitations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Consent Letter Prep</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-professional-handling" className="py-20 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Professional Objection Handling is Critical
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Submitting incorrect responses without deep intellectual property expertise leads directly to final brand rejection, lost protection timelines, and refiling expenses.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Your brand name is your primary asset. Let experienced IP legal practitioners protect your corporate identity."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Avoid Application Rejection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensure structural arguments align with the statutory provisions of the Trademarks Act.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Minimize Unnecessary Delays</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Submit precise documentation inside strict 30-day registry schedules.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Mitigate Long-term Brand Risk</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Stop legal conflicts before they create trademark infringement litigation parameters.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Save Future Refiling Costs</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Secure the current application instead of letting it abandon and losing early filing priority benefits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Improve Overall Approval Possibilities</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Using proven case references and user usage affidavits ensures high-quality examination responses.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Common Objection Grounds Section */}
      <section id="objection-grounds" className="py-20 sm:py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Common Grounds for Trademark Objections
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The primary reasons examiners issue official examination reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Similar Brand Names (Section 11)</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Key Conflict:</span>
              <p className="text-slate-700 text-sm leading-relaxed">The application phonetically or visually resembles an existing registered trademark or prior pending application within identical classes.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Descriptive Words (Section 9)</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Key Conflict:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Using words that describe the quality, quantity, function, or geographical origin of goods and services rather than maintaining distinctiveness.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Lack of Brand Distinctiveness</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Key Conflict:</span>
              <p className="text-slate-700 text-sm leading-relaxed">The applied logo or wordmark lacks specific creative character, making it difficult for everyday consumers to identify the unique corporate origin.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Incorrect Class Selection</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Key Conflict:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Goods and services assigned to wrong classes among Nicé classifications require formal modifications via rectification processing protocols.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Missing/Flawed Documentation</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Key Conflict:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Filing with invalid user dates, incomplete authorization powers of attorney, missing translation forms, or incorrect corporate entity structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Trademark Objection Handling Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We represent diverse industries requiring brand asset preservation.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups & LLPs', 'Private Limited Companies', 'Educational Institutes', 'Healthcare & Medical Brands', 'Food & Restaurant Businesses', 'Manufacturers & Packers', 'E-commerce Platforms', 'Agencies & Service Firms'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-20 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Trademark Objection Handling Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured 5-stage legal blueprint engineered for successful brand application progress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Report Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">In-depth assessment of the official examination report guidelines.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Legal Research</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Analyzing existing registries and historical tribunal case rules.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Reply Drafting</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Formulating structured defenses along with usage evidence portfolios.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Submission</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Filing responses securely onto the official IP India digital portal.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Hearing & Follow-Up</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Providing complete personal assistance if show-cause appearances occur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 text-slate-900 border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Clients Successfully Served",
                  "Legal Response Expertise",
                  "Accurate Documentation Prep",
                  "Affordable Service Packages",
                  "End-to-End Hearing Support"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-slate-800 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our specialized corporate network features seasoned IP attorneys, trademark consultants, and corporate regulatory analysts.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Brand Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Trademark Registration',
                  'Logo Registration',
                  'Trademark Renewal',
                  'Trademark Assignment',
                  'Brand Protection Services',
                  'Company Registration',
                  'MSME Registration',
                  'GST Registration',
                  'ROC Compliance',
                  'Business Advisory Services'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-blue-50 transition-all duration-200"
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
      <section id="faqs" className="py-20 sm:py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}