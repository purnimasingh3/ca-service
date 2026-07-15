import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata safely linked to data file
export const metadata = servicesMetadata?.privateToPublicConversion || {
  title: "Private Limited to Public Limited Company Conversion Services | Agreetech",
  description: "Expert legal, ROC & MCA corporate assistance for converting your Private Limited Company into a Public Limited Company."
};

export default function PrivateToPublicConversionLanding() {
  const HERO_STATS = [
    "100% Legal & Compliant",
    "End-to-End Management",
    "Timely Process Execution",
    "Expert CA & CS Support",
  ];

  const faqs = [
    { q: "Can every Private Limited Company convert into a Public Limited Company?", a: "Most Private Limited Companies can convert into a Public Limited Company, provided they satisfy the legal requirements under the Companies Act, 2013 and complete all necessary approvals and filings." },
    { q: "Is shareholder approval mandatory?", a: "Yes. A Special Resolution passed by the shareholders is generally required to approve the conversion." },
    { q: "Will the company's CIN change after conversion?", a: "No. The Corporate Identification Number (CIN) generally remains the same, although the company's legal status and name change after approval." },
    { q: "Will the company receive a new Certificate of Incorporation?", a: "Yes. After approval by the Registrar of Companies, a fresh Certificate of Incorporation is issued reflecting the company's new status as a Public Limited Company." },
    { q: "Can Agreetech manage the complete conversion process?", a: "Yes. Agreetech provides complete assistance from eligibility assessment and documentation to ROC filing, MCA approvals, and post-conversion compliance support." }
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
                ⚡ Corporate Scaling · Corporate Re-structuring
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Private Limited to Public Limited
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Company Conversion
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert legal, ROC & MCA assistance for converting your Private Limited Company into a Public Limited Company as per the Companies Act, 2013.
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
            Simplify Complex Corporate Re-structuring With Agreetech
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            As businesses expand, attract larger investments, increase shareholder participation, or prepare for future public fundraising opportunities, converting into a <strong className="text-blue-600 font-semibold">Public Limited Company</strong> becomes an important strategic decision. 
            Agreetech provides complete legal, regulatory, and compliance support for businesses planning to convert their existing entity structures smoothly under the Companies Act, 2013.
          </p>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Comprehensive Conversion Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our experienced team of CAs, CSs, and compliance professionals manages the entire regulatory transition seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Consultation & Assessment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Before starting, our experts systematically evaluate your corporate framework and baseline metrics.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Objective Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Eligibility Reviews</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Feasibility Studies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Assessments</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Pre-Compliance Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">A detailed review is conducted to identify and clear any pending statutory requirements before conversion.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Historic ROC Audits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Statement Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Director KYC Status</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Master Data Cleanse</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Documentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Drafting precise Board and Shareholder resolutions to meet rigorous legal requirements legally.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Board Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Meeting Agendas</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Special Resolutions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Voting Documentation</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Alteration of MOA & AOA</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Constitutional modifications to remove the restrictive private clauses and add standard public frameworks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Clause Adaptations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Removing Restrictions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Restructures</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Act Compliance</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC & MCA Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Agreetech manages the structural uploading of forms directly on the official central government portal panels.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Form Submissions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DSC Coordination</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fee Calculations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tracking Approvals</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Post-Conversion Update</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Extensive transition handholding ensures corporate names reflect legally across banking accounts and licenses.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PAN/GST Corrections</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Bank Records Remapped</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> License Renewals</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Governance Planning</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section id="why-convert" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Convert to a Public Limited Company?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A Public Limited Company status naturally unlocks dynamic financial advantages and greater recognition among institutional lenders and international authorities.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Expand corporate image, prepare for future IPO benchmarks, and access wider capital fields with institutional stability."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Access Capital Markets</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Removes boundaries to invite wider public investments and scale smoothly.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Attract Top Investors</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Enjoys high trust matrices across venture capitals and large global funds.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Enhanced Borrowing Capacity</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Gain massive credibility leverage when applying for banking lines or debt tools.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">IPO Foundation Setup</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Creates perfect structural foundations for stock exchange list parameters.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Step-by-Step Transition Process */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              The Step-by-Step Conversion Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              How we execute your operational migration safely and accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">1. Consultation & Review</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Understanding strategic corporate goals and assessing conversion eligibility standards.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">2. Compliance Audit</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Comprehensive tracking of active company master files to resolve historic pending defaults.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">3. Documentation Prep</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Drafting legally robust board resolutions, amended MOA/AOA packs, and required notices.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">4. Shareholder Approval</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Obtaining dynamic structural permissions via properly scheduled General Meetings.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">5. ROC & MCA Filing</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Submitting all legally altered statutory forms directly through the centralized MCA portal nodes.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">6. Government Review</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The central Registrar of Companies closely audits the structural accuracy of filings.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">7. Fresh COI Issuance</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Receiving an updated corporate Certificate of Incorporation reflecting Public Limited identity.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-2">8. Post-Conversion Care</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Systematic data update mapping for corporate identity codes across auxiliary tax nodes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Document Matrix Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Documents Required for Corporate Conversion
            </h2>
            <p className="text-sm text-slate-500 mt-1">Please ensure accurate scans of files are compiled.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600 mb-3">Company Documents</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• Incorporation Certificate</li>
                <li>• Corporate PAN Card</li>
                <li>• Existing MOA & AOA</li>
                <li>• Active CIN Details</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600 mb-3">Financial Records</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• Latest Audited Financials</li>
                <li>• Historic Balance Sheets</li>
                <li>• Profit & Loss Statements</li>
                <li>• Auditor Reports Pack</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600 mb-3">Directors & Owners</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• PAN & Aadhaar Cards</li>
                <li>• Active DIN Allocation</li>
                <li>• DSC Digital Tokens</li>
                <li>• Member Pattern Maps</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600 mb-3">Statutory Pack</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>• Official Board Resolutions</li>
                <li>• General Meeting Minutes</li>
                <li>• Certified Special Resolution</li>
                <li>• NOC Approvals (If needed)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Extended Services Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Agreetech?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced CA & CS Corporate Panel",
                  "End-to-End Conversion Workflows",
                  "Accurate Legal Entity Restructuring",
                  "Transparent Pricing Models",
                  "Timely Project Execution Matrices",
                  "Dedicated Personal Support Managers"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
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
                  'GST Registration',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Services',
                  'Business Advisory Solutions'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
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