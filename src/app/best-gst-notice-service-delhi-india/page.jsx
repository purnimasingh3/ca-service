import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.gstNotice;


export default function PremiumGSTNoticeLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert GST Consultants",
    "500+ Happy Clients",
    "Accurate Reply & Resolution",
  ];
  const faqs = [
    { q: "What is a GST Notice?", a: "A GST Notice is an official communication issued by tax authorities seeking clarification, documentation, tax explanation, or compliance verification purposes." },
    { q: "Should GST notices be ignored?", a: "No. Ignoring notices may result in severe penalties, high interest charges, additional tax liability, and formal legal action." },
    { q: "Can GST registration be cancelled due to notices?", a: "Yes, unresolved notices or poor compliance management may directly affect and result in registration suspension or cancellation." },
    { q: "Do you handle GST scrutiny and assessment cases?", a: "Yes. Fintax Adviser provides complete professional assessment, litigation, and department scrutiny support handling." },
    { q: "Can startups receive GST notices?", a: "Yes. Startups may regularly receive notices related to return mismatches, late filing, or general regulatory compliance." },
    { q: "Do you provide online GST notice support across India?", a: "Yes. Fintax Adviser provides online digital assistance and expert GST notice services across India." },
    { q: "Can Input Tax Credit (ITC) notices be successfully resolved?", a: "Yes. Proper document verification, data reconciliation statements, and accurate technical replies help resolve many ITC mismatch cases safely." }
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
                ⚡ Professional Notice Reply · Penalty & Risk Reduction
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Best GST Notice Handling Service
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Received a GST Notice? Get professional handling, accurate replies, and complete support to resolve notices and stay compliant. Expert support, accurate reply, and peace of mind.
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
            Your Trusted Partner for Professional GST Notice Resolution
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Received a GST Notice from the GST Department? Don't worry. Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. A GST notice does not always mean penalties or legal action. In many cases, notices are issued for clarification, mismatch verification, return discrepancies, delayed filings, input tax credit issues, or documentation review. We help businesses respond professionally and protect their compliance status.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Best GST Notice Handling Service Includes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end departmental handling and professional legal drafting to protect your business interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Notice Reply Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We prepare professional and technically structured replies for multiple compliance frameworks.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Demand Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ITC Mismatch Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Registration Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Assessment Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Mismatch Cases</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Assessment & Scrutiny Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Our senior experts provide absolute back-end preparation and strategic case overview for scrutiny proceedings.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Assessment Handling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Department Reply Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Calculation Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Documentation Preparation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Scrutiny Support & Monitoring</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Litigation & Representation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">In-person and electronic department representations before tax authorities to protect business frameworks.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Department Hearings</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Clarification Replies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Representation Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Legal Documentation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Record Alignment</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registration Notice Handling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic planning to safely restore, manage, and prevent structural setup cancellations.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Cancellation Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Registration Suspension Cases</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Address Verification Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Amendment Clarifications</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Verification Support</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mismatches & ITC Reconciliations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Deep analytical breakdown of outward supplies records against current system metrics to iron out disparities.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GSTR-1 vs GSTR-3B Mismatches</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Incorrect/Excess ITC Claims</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> E-Way Bill Movement Mismatches</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Purchase-to-Sales Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reconciliation Statement Building</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Non-Filing & Demand Reductions</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Proactive management of missed or delayed returns to mitigate subsequent compounding interest charges.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Non-Filing Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Late Filing Discrepancies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Liability Assessment Cases</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Wrong Tax Calculation Resolution</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Continuous Compliance Monitoring</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-handling" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Proper Handling of GST Notices is Important
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Improper response or ignoring official communications from tax departments could lead to extreme compliance damage. Proper handling is absolutely vital to secure financial stability.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "DON'T IGNORE GST NOTICES - ACT ON TIME! Contact us today for expert support to safely protect operational stability."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Avoid Penalties & Additional Tax</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Timely and structured legal drafting directly eliminates extreme tax liability escalation risk.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Stop Interest Charges</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prevent monthly compounded interest accumulation by clearing data discrepancies quickly.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Protect Setup Registrations</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensure structural stability by stopping department suspension or sudden registration cancellation.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Halt Legal Proceedings</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">A professional technical presentation shields corporate entities from active departmental scrutiny.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Eliminate Severe Business Disruptions</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Professional handling reduces overall compliance management workload, allowing you to focus purely on daily market operations without anxiety.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Matrix Section */}
      <section id="documents-required" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for GST Notice Handling
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A comprehensive list of core records needed to structure a professional compliance reply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">GST Documents</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li className="flex items-center gap-1.5">✓ GST Notice Copy</li>
                <li className="flex items-center gap-1.5">✓ GST Registration Certificate</li>
                <li className="flex items-center gap-1.5">✓ Past GST Returns</li>
                <li className="flex items-center gap-1.5">✓ GSTR-1 & GSTR-3B Reports</li>
                <li className="flex items-center gap-1.5">✓ E-Way Bills Copy</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Business Records</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li className="flex items-center gap-1.5">✓ Company PAN Card</li>
                <li className="flex items-center gap-1.5">✓ Financial Statements</li>
                <li className="flex items-center gap-1.5">✓ Purchase Records</li>
                <li className="flex items-center gap-1.5">✓ Sales Reports</li>
                <li className="flex items-center gap-1.5">✓ Invoice Copies</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Supporting Analytics</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li className="flex items-center gap-1.5">✓ Tax Calculation Sheets</li>
                <li className="flex items-center gap-1.5">✓ Input Tax Credit (ITC) Reports</li>
                <li className="flex items-center gap-1.5">✓ Reconciliation Statements</li>
                <li className="flex items-center gap-1.5">✓ Complete Ledger Records</li>
                <li className="flex items-center gap-1.5">✓ Compliance Logs</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Resolution Indicators</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-normal">
                Organizing these critical data points protects your setup from unwanted data mismatches during technical verification assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs GST Notice Handling Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We provide professional assistance across multiple industries to safeguard their operations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Startups (Filing & Return Support)',
              'Manufacturers (ITC & Production)',
              'Traders (Purchase & Sales Verification)',
              'Service Providers (Tax Calculation Support)',
              'Export Businesses (Refund & Zero-Rated)',
              'E-commerce Businesses (Marketplace Compliance)',
              'Private Limited Companies (Assessments)',
              'LLPs & Partnership Firms (Notice Review)'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
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
              Our GST Notice Handling Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-stage roadmap engineered to safely secure full case closure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Notice Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">We analyze the notice type and exact compliance requirements.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Data Verification</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Returns, bills, invoices, and ledger sheets are deeply cross-checked.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Reply Preparation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">A professional, technical response is drafted with all supporting files.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Submission</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">The finalized reply is filed within the prescribed legal timeline frameworks.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Follow-up</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Continuous tracking and representation are maintained until complete closure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-oklch(86.5% 0.127 207.078) text-black border-t border-slate-200 w-full clear-both ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Businesses Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser for GST Notice Handling?
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              {/* Isolated Grid: Prevent items from collapsing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert GST Consultants & Advisors",
                  "Fast Online Digital Support",
                  "Affordable Compliance Packages",
                  "Complete End-to-End Solutions"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-blue-200 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-900 max-w-md">
                Our services provide transparent pricing with expert consultation. Benefits include professional notice replies, reduced penalty risk, faster resolution, registration protection, and maximum compliance.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Your Compliance Our Responsibility
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Financial & Compliance Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'GST Registration Services',
                  'GST Return Filing Support',
                  'Income Tax Return Filing',
                  'Income Tax Notice Handling',
                  'ROC Compliance Management',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'MIS Reporting Services',
                  'Trademark Registration',
                  'Company Registration Setups',
                  'MSME Registration Support',
                  'Fundraising Services Support'
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />

        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-3">Resolve GST Notices with Expert Support</h3>
        <p className="text-sm text-blue-200 max-w-xl mx-auto mb-6 px-4">
          Get professional assistance from Fintax Adviser and protect your business with the Best GST Notice Handling Service in Delhi India.
        </p>
      </section>
    </div>
  );
}