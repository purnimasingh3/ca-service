import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =
  servicesMetadata.gstRefund;

export default function PremiumGstRefundLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert GST Consultants",
    "500+ Happy Clients Served",
    "Maximum Refund Guaranteed",
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
                ⚡ Fast · Accurate · Hassle-Free
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                GST Refunds
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Handling Services in Delhi India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get your eligible GST refund faster with expert guidance. We handle the entire process, comprehensive documentation, and rigorous follow-ups so you can focus completely on your business.
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
            Your Trusted Partner for GST Refund Claim Processing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Many businesses pay excess GST, accumulate Input Tax Credit (ITC), or become eligible for GST refunds due to exports, inverted duty structures, excess payments, or cancelled transactions. However, refund claims require accurate documentation, strict reconciliation, compliance reviews, and timely filing. At Fintax Adviser, we help businesses claim eligible refunds efficiently and minimize costly delays.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our GST Refund Handling Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end management to ensure your accumulated credits and excess tax allocations are safely recovered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Refund Claim Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert compilation and structural validation of standard refund components under active GST infrastructure.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Application Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Export Claims</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ITC Processing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Excess Tax Refund</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Inverted Duty</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Deemed Exports</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Export GST Refund Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Streamlining specialized cross-border transaction recoveries while resolving compliance variables.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> LUT Refund Claims</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Export Docs</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Shipping Bills</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Invoice Matching</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Export Compliance</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Input Tax Credit (ITC) Refund</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Recovering trapped working capital blocks resulting from complex domestic credit accumulation structures.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ITC Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Eligibility Check</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Credit Verification</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Document Support</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Secure Refund Submission</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Refund Rectification</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Strategic re-engineering and intervention services for application errors, rejections, and legal holdbacks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Rejections</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Correction Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Clarification Replies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Notice Support</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Re-submission Assistance</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Inverted Duty Structure Refund</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Providing relief frameworks where input tax metric balances continually exceed output tax allocations.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Mathematical Inversion Modeling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Core Manufacturing Reconciliation</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cancelled & Advance Adjustments</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Correcting structural ledger balances for altered corporate deals and advance tax deposits.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cancelled Deals</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Advance Deposits</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Wrong Tax Deposit</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Assessment Orders</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-refunds" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Professional GST Refund Handling Matters
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Incorrect refund filing may result in serious administrative complications, including immediate application rejection, extensive processing delays, documentation mismatches, unexpected GST notices, and critical working capital blockages.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Proper compliance handling helps businesses significantly improve working capital and corporate cash flow loops."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Faster Processing</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Expedite verification tracking metrics through optimized documentation patterns.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Improve Cash Flow</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Unlock trapped operational assets to balance internal organizational workflows.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600 font-bold">Reduce Rejection Risk</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Pre-reconcile invoices and returns to match strict department compliance criteria.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Accurate Filing</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensure flawless data entry matrices inside your electronic credit ledger tracks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Minimum Document Hassle & Expert Support</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Enjoy total end-to-end guidance from preliminary eligibility reviews up until final bank account credit settlement.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for GST Refund Handling
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A comprehensive checklist required to establish clean department verifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-4">GST Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2.5">
                <li className="flex items-center gap-2">✔ GST Registration Certificate</li>
                <li className="flex items-center gap-2">✔ GST Returns (GSTR-1, GSTR-3B)</li>
                <li className="flex items-center gap-2">✔ Refund Application Details</li>
                <li className="flex items-center gap-2">✔ ITC Statements & Electronic Credit Ledger</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Export Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2.5">
                <li className="flex items-center gap-2">✔ Shipping Bills & Export Invoices</li>
                <li className="flex items-center gap-2">✔ LUT / Bond Documents</li>
                <li className="flex items-center gap-2">✔ Foreign Remittance Records</li>
                <li className="flex items-center gap-2">✔ Export Agreements</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Financial Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2.5">
                <li className="flex items-center gap-2">✔ Purchase & Sales Registers</li>
                <li className="flex items-center gap-2">✔ Corporate Bank Statements</li>
                <li className="flex items-center gap-2">✔ Tax Payment Records</li>
                <li className="flex items-center gap-2">✔ Verifiable Invoice Copies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Can Use GST Refund Handling Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing precision management fit for diverse organizational scopes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              { title: 'Export Companies', desc: 'Claim export-related GST refunds.' },
              { title: 'Manufacturers', desc: 'Handle accumulated ITC efficiently.' },
              { title: 'Traders', desc: 'Recover excess tax payments.' },
              { title: 'E-commerce Businesses', desc: 'Manage marketplace GST credits.' },
              { title: 'Service Providers', desc: 'Claim export and ITC refunds.' },
              { title: 'Startups', desc: 'Improve cash flow through refund recovery.' },
              { title: 'Private Limited Companies', desc: 'Manage large-scale refund claims.' },
              { title: 'LLPs & Partnership Firms', desc: 'GST reconciliation & processing.' }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex flex-col justify-center">
                <span className="text-blue-600 block mb-1">{item.title}</span>
                <span className="text-[11px] font-normal text-slate-500">{item.desc}</span>
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
              Our GST Refund Handling Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-step workflow blueprint designed for optimal recovery speed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Eligibility Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">We verify refund category alignments and claim possibilities.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Document Verify</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Returns, invoices, and ledger credits are deeply reconciled.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Refund Prep</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">The formal application is systematically drafted with accuracy.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Filing & Submission</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Application is submitted following strict department protocols.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative sm:col-span-2 md:col-span-1">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Refund Tracking</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Continuous department follow-up metrics run until final bank settlement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#071c3d] text-white border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-500 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert GST Consultants",
                  "Fast Online Digital Services",
                  "Affordable & Transparent Packages",
                  "End-to-End GST Solutions"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-200 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-slate-800 max-w-md">
                Backed by senior tax compliance specialists and dedicated refund management managers providing expert corporate solutions across India.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Additional Financial Solutions We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'GST Registration Services',
                  'GST Return Filing',
                  'GST Notice Handling',
                  'Income Tax Return Filing',
                  'Income Tax Refund Services',
                  'Income Tax Notice Handling',
                  'ROC Compliance Management',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'MIS Reporting Services',
                  'Trademark Registration',
                  'Fundraising Services'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-200"
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
              { q: "What is a GST Refund?", a: "A GST Refund is the formal tax amount returned by GST authorities when eligible taxpayers demonstrate excess tax payment, wrong tax deposits, accumulated credit files, or specific export transaction structures." },
              { q: "Who can claim a GST Refund?", a: "Exporters, manufacturers, traders, e-commerce entities, and services firms carrying accumulated credit structures or inverted duty matrices are fully entitled to claim." },
              { q: "Can exporters claim GST refunds?", a: "Yes, export entities routinely claim complex GST refunds across goods or service provisions (including export operations handled under LUT/Bond systems)." },
              { q: "What is an ITC refund?", a: "It represents the direct legal recovery and cash refund of accumulated Input Tax Credits trapped inside internal corporate purchase records." },
              { q: "Can excess GST payments be refunded?", a: "Yes, completely subject to systematic department eligibility rules, verification matrix audits, and matching ledger configurations." },
              { q: "Do you handle refund rejections?", a: "Yes. Fintax Adviser provides dedicated refund rectification, official clarification replies, notice handling, and comprehensive re-submission support services." },
              { q: "Can startups use GST refund services?", a: "Yes. Startups often utilize recovery services to reclaim accumulated ITC or export balances to optimize internal operating runway loops." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-base">{idx + 1}. {faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}