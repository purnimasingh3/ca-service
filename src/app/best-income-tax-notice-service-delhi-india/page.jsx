import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.incomeTaxNotice;
export default function PremiumIncomeTaxNoticeLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "Dedicated Notice Specialists",
    "500+ Happy Clients Served",
    "Complete Digital Consultation",
  ];
  const faqs = [
    { q: "What should I do after receiving an Income Tax Notice?", a: "Review the parameters carefully to analyze the applicable sections and consult tax professionals before drafting or submitting a response." },
    { q: "Does every tax notice mean an automatic penalty?", a: "No. Many notices are issued strictly for verification, system corrections, data clarifications, or accounting mismatch resolutions." },
    { q: "Can my notice compliance case be resolved online?", a: "Yes. Most modern income tax cases and notice queries can be completely managed and filed digitally through secure web options." },
    { q: "Do you provide comprehensive scrutiny and assessment support?", a: "Yes. We deliver complete representation, documentation management, and end-to-end assistance for detailed scrutiny proceedings." },
    { q: "Can businesses receive notices, or are they only for individuals?", a: "Both individuals and business entities (Companies, LLPs, Partnerships) can receive notices for transaction reviews or filing corrections." }
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
                ⚡ Expert Support · Fast Response · Peace of Mind
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Income Tax Notices
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Handling Service in Delhi India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Don't ignore Income Tax Notices. Get expert guidance and professional handling to minimize tax demands, avoid penalties, and achieve complete compliance.
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
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome to Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Receiving an Income Tax Notice can create stress for individuals and businesses, but it does not always mean penalties or legal issues. In many situations, notices are issued for clarification, verification, mismatch of records, return corrections, or compliance review. With <strong className="text-blue-600 font-semibold">12+ Years of Experience</strong>, our team provides expert notice reply drafting and assessment support to salaried employees, startups, business owners, professionals, and corporate organizations across India.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Notice Reply & Assessment Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end statutory assistance to properly manage, draft, and resolve all department inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Notice Reply Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We prepare highly professional, legally structured, and clear replies to safeguard your financial claims.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Income Mismatches</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> TDS Differences</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Defective Returns</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> High Value Txns</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Demand Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Verification Cases</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Assessment & Scrutiny Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete handling of detailed assessment processes to communicate effectively with tax authorities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Case Proceedings</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Income Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Official Clarifications</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reply Documentation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Dept Communication</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Matrix</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Section 143(2) Scrutiny Cases</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">In-depth evaluations, tracking parameters, and comprehensive legal presentation frameworks for scrutiny notices.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Scrutiny Audits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Evidence Mapping</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Transaction Proofs</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Case Presentations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Computations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Official Closures</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Section 148 Reassessments</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional counseling and strategy for complex income escaping assessment matters.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Case Evaluations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reassessment Defense</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Records Discovery</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Past Return Auditing</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Escaped Assessment Mapping</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Refund Adjustment & Data Check</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Addressing adjustments under Section 245 alongside structural computations and filing reviews.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Section 245 Handling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Processing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Section 139 / 143(1)</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Mismatch Corrections</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Revised / Defective Return Rectifications</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">AIS / TIS Mismatch Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Reconciling internal records against information statements to eliminate tax discrepancies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> AIS Data Syncing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> TIS Statement Audit</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> SFT Transaction Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Incorrect Claims Fix</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Foreign Income Reporting Assures</span>
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
                Risks of Ignoring Income Tax Notices
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Delaying response actions or failing to address communications can compound financial liabilities. Seeking structured expert assistance ensures clean closure and accurate representations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ignoring a notice may lead to serious statutory actions. Let our advisors streamline your compliance workflows today."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Heavy Penalties</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Unaddressed filings often face compounding statutory penalty charges.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Interest Accruals</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Delayed explanations may multiply dynamic interest amounts on existing claims.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Scrutiny Escalation</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Simple clarification requests can expand into broader scrutiny assessments.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Refund Delays</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Pending mismatches or unreplied demands freeze tax refund distributions.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal Orders & Department Actions</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Continued non-compliance prompts severe department actions, official show-cause updates, and binding tax demands.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Segments Section */}
      <section id="funding-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Who We Serve Across India
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Custom compliance configurations built for every category of taxpayer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Salaried Employees</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Common Focus Areas:</span>
              <p className="text-slate-700 text-sm leading-relaxed">TDS mismatches, Form 16 differences, incorrect deduction claims, and stuck refund releases.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Business Owners & Startups</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Common Focus Areas:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Tax assessments, compliance reviews, high-value transaction justifications, and corporate filings.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Companies & LLPs</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Common Focus Areas:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Corporate tax inquiries, deep scrutiny support, book adjustments, and formal department presentations.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">NRIs (Non-Resident Indians)</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Common Focus Areas:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Foreign income reporting, asset classifications, and NRO/NRE account cross-verification notices.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Investors & Professionals</h3>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">Common Focus Areas:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Capital gain errors on property/shares, and income tracking for doctors, lawyers, and consultants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Essential Checklist: Documents Required
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing accurate data ensures comprehensive notice assessments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['PAN Card & Notice Copy', 'Income Tax Returns (ITR)', 'Form 16 & Form 26AS', 'AIS Reports & TIS Statements', 'Bank Account Statements', 'Investment & Property Records', 'TDS Certificates', 'Tax Payment Challans'].map((doc) => (
              <div key={doc} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {doc}
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
              Our Structured Resolution Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A 5-stage blueprint engineered to systematically analyze, compile, and close department notices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Notice Analysis</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Deep evaluation of notice type and applicable sections.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Case Assessment</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Comprehensive review of past income records and ITR filings.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Reply Drafting</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Preparing professional answers supported by legal evidence.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Submission</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Properly filing the compliance response on the official tax portal.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Follow-Up</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Providing continuous assistance and tracking until official case closure.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#e2f0fd] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid: Prevent items from collapsing into each other */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert Tax Notice Specialists",
                  "Fast Digital Consultation Support",
                  "Affordable Service Packages",
                  "End-to-End Tax Representation"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our multidisciplinary consulting team delivers transparent, value-based pricing blueprints from initial receipt reviews through to absolute final notice resolution.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Full Suite Solutions
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Financial & Business Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Income Tax Return Filing',
                  'Income Tax Refund Services',
                  'GST Registration Support',
                  'GST Notice Handling Services',
                  'ROC Compliance Management',
                  'Trademark Registration',
                  'MSME Registration Help',
                  'Virtual CFO Support Services',
                  'Accounting & Bookkeeping',
                  'Fundraising Strategy Services'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-slate-100 transition-all duration-200"
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}