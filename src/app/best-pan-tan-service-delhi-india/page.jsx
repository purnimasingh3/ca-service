import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.panTan;

export default function PremiumPanTanLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "25+ Compliance Professionals",
    "200+ Happy Clients",
    "100% Secure & Compliant",
  ];
  const faqs = [
    { q: "What is PAN Registration?", a: "PAN (Permanent Account Number) Registration provides a unique 10-digit alphanumeric identification code mandatory for all legal entities executing taxable financial transactions and filing returns in India." },
    { q: "What is TAN Registration and is it compulsory?", a: "TAN (Tax Deduction and Collection Account Number) is required for every corporate entity responsible for deducting tax at source (TDS) on payments like vendor invoices or employee salaries." },
    { q: "Can PAN and TAN be applied for together?", a: "Yes. For new startups and companies, both applications are regularly structured and filed simultaneously to secure operational bank accounts faster." },
    { q: "How long does PAN & TAN registration processing take?", a: "Usually, the entire process takes just a few working days, completely contingent upon the validation speed of the administrative department." },
    { q: "Do you provide correction services for existing cards?", a: "Yes. Fintax Advisers offers complete correction and update services to fix typographical database issues, official corporate name updates, or office location shifts." }
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
                ⚡ Simple Process · Fast Approval · 100% Compliance
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                PAN & TAN
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Application Services in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get your business tax-ready. We provide hassle-free, secure, and end-to-end PAN and TAN registration for companies, LLPs, partnerships, and proprietorships.
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
                  Get Free Consultation Today
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
            Your Trusted Partner for PAN & TAN Registration
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Advisers</strong>. Whether you are starting a new company, registering an LLP, launching a startup, opening a partnership firm, or establishing a proprietorship business, obtaining PAN and TAN is one of the most critical legal requirements. We handle documentation, fast-track your applications, and keep your corporate workflows fully tax-compliant.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our PAN & TAN Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive tax registration support mapped explicitly to fulfill all corporate compliance conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">New PAN Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete allocation support for obtaining your unique 10-digit alphanumeric permanent identity required for global financial operations.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Individuals & Proprietors</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Corporate Companies & LLPs</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Partnership Firms & Trusts</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TAN Registration Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Secure tracking numbers mandatory for corporate ecosystems deducting tax at source (TDS) or managing monthly payroll cycles.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Mandatory for TDS Deductions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Crucial for Vendor Settlements</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Essential for Salary Disbursals</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Correction & Update Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Rectify tracking errors inside current operational identity indices quickly to secure smooth cross-border financial transactions.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Corporate Name Change Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Registered Address Changes</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Data Typo Rectifications</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Duplicate PAN Re-issuance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Lost or damaged physical records? We recover official operational tokens securely from national records registries.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Official Lost Certificate Recovery</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Secure Database Fetching</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Digital e-PAN Tracking Support</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TDS Registration Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Set up your backend tax deduction workflows cleanly to stay aligned with national revenue tracking departments.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Periodic Filing Readiness</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Dynamic Deducting Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Operational Compliance Setup</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Integrated Startup Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Combined application processing engineered explicitly to equip early-stage startups with operational foundations simultaneously.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Parallel PAN & TAN Submissions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fast-Track Processing Flow</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Bank Account Readiness</span>
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
                Why PAN & TAN are Vital for Businesses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Operating a corporate identity without formal taxation allocation is a serious compliance risk. Obtaining these certificates unlocks core financial privileges and secures operations from legal delays.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Clean compliance brings operational power. Let our professional tracking solutions take care of your financial registry steps."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Legal Tax Filing</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Enables correct corporate income tax processing and safeguards against dynamic statutory audits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Banking Operations</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Mandatory step for launching multi-currency corporate bank accounts and executing high-value business transfers.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">TDS Collections</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Provides essential permissions to collect or deduct tax at source seamlessly without penalty exposure.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Smooth Vendor Payments</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Maintains clear corporate financial channels across commercial contractor arrangements.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Avoid High Penalties</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Failure to possess a TAN when required during financial operations leads to extensive statutory fines. Immediate structural framing protects cash flow.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Required Documentation Section */}
      <section id="documentation" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Required Documents for Registration
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Keep these standard items ready to experience fully automated onboarding execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Corporate Companies</h3>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
                <li>• Certificate of Incorporation</li>
                <li>• Memorandum of Association (MOA)</li>
                <li>• Articles of Association (AOA)</li>
                <li>• Director identity proofs & PAN</li>
                <li>• Registered Office Address Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Limited Liability Partnerships (LLP)</h3>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
                <li>• LLP Agreement Certificate</li>
                <li>• Incorporation Approval Copy</li>
                <li>• Designated Partner Identity Proofs</li>
                <li>• Registered Business Location Address</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Partnership Firms</h3>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
                <li>• Official Partnership Deed</li>
                <li>• Core Firm Identity Documents</li>
                <li>• Partners Identity & Address Proofs</li>
                <li>• Primary Business Office Verification</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-blue-600 mb-3">Proprietorship Businesses</h3>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed font-medium">
                <li>• Proprietor PAN Card</li>
                <li>• Aadhaar Card Verification</li>
                <li>• Core Address Proof Records</li>
                <li>• Business Proof (e.g., GST/Electricity bill)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Online Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured digital system engineered to secure approvals across minimal processing windows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Document Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Our experts verify business files to eliminate filing issues.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Digital Application</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Drafting and lodging profiles with official revenue registries.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Verification Support</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Managing real-time administrative processing steps securely.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Allotment Delivery</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Your legal PAN/TAN identity parameters are dispatched instantly.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#e0f2fe] text-black border-t border-slate-200 w-full clear-both ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Advisers
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              {/* Isolated Grid: Prevent items from collapsing into each other */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Industry Experience",
                  "25+ Compliance Professionals",
                  "200+ Happy Corporate Clients",
                  "Fast Documentation Support",
                  "Online Process Management",
                  "Affordable Pricing Packages"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our team handles your critical business registrations correctly and efficiently, ensuring error-free data submission.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 inline-block">
                  Complete Compliance Partner
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Business Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Incorporation & Structuring',
                  'GST Registration & Monthly Returns',
                  'Trademark Registration & Protection',
                  'ROC Compliance & Income Tax Filing',
                  'Virtual CFO Advisory Services',
                  'Accounting & Bookkeeping Services',
                  'Payroll Management Solutions',
                  'TDS Return Filing Support',
                  'Business Strategy Consulting'
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}