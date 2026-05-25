import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function PremiumIncomeTaxRefundLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert Tax Consultants",
    "500+ Happy Clients",
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
                ⚡ Your Tax · Your Money · Get Your Refund Back
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Best Income Tax Refund Service
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Overpaid tax? Don't let your money stay with the Income Tax Department. We help you claim your eligible refund quickly, accurately & hassle-free with expert tracking and zero hassle.
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
                  Claim Your Tax Refund Today!
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
            Professional Income Tax Refund Services in Delhi India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your trusted partner for Income Tax Refund Services, ITR Refund Claims, Tax Refund Processing, and complete income tax support. Many taxpayers pay excess tax due to higher TDS deductions, advance tax payments, incorrect calculations, investment mismatches, or filing errors. In such situations, claiming an Income Tax Refund becomes important. We help recover eligible tax refunds quickly and accurately.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Income Tax Refund Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end tax refund management backed by over 15 years of industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Refund Claim</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert guidance to recover overpaid taxes with seamless compliance and validation checking.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> New Refund Claims</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Excess Tax Recovery</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> TDS Refund Processing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Verification</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Tax Reconciliation & Return Review</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ITR Refund Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accurate handling of tax files to minimize rejection risks and capture full eligible deductions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Eligibility Check</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Calculation Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Optimization</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Revised Return Support</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Rectification</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Need corrections in earlier returns? We handle mismatches and errors with the department.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Rectification Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Entry Corrections</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Mismatch Resolution</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Recalculation</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Revised Return Support</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Refund Status Monitoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Continuous tracking and quick follow-ups to ensure processing delays are resolved efficiently.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Processing Status</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Department Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Handling Delays</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pending Cases</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Verification Requirements</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Notice Handling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional handling of departmental reviews, discrepancies, and unexpected notices securely.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Notice Assessments</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Error Response</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Discrepancies</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Safe Documentation</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated Refund Tracking</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end follow up assistance until the approved refund amount is credited directly to your bank account.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Bank Integration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Settlement Tracking</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Quick Processing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Account Verification</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance & Reasons Section */}
      <section id="why-funding" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Common Reasons for Income Tax Refunds
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                An Income Tax Refund is the amount returned by the Income Tax Department when a taxpayer pays more tax than required during a financial year. Incorrect claims or unoptimized filings may lead to refund delays, rejections, or additional notices.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Don't leave your money behind. Professional handling ensures faster processing and eliminates compliance issues."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Higher TDS Deduction</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Many salaried employees and independent experts face excess TDS deductions from their primary income.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Advance Tax Overpayment</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Businesses and professionals frequently pay more advance tax throughout the fiscal year than actually required.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Investment Declarations</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Mismatches or missing deduction declarations at the workplace unnecessarily increase final tax collections.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Estimation Mismatches</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Wrong income projections and multiple revenue sources often create excessive tax liabilities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Foreign Income & Adjustments</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">NRIs, overseas assets, double tax payments, and complex rectification cases require dedicated professional data verification reviews.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section id="documents-required" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for Tax Refund Services
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Keep these records ready for accurate processing and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Tax Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-center gap-2">✓ PAN Card</li>
                <li className="flex items-center gap-2">✓ Aadhaar Card</li>
                <li className="flex items-center gap-2">✓ Past ITR Copies</li>
                <li className="flex items-center gap-2">✓ Form 16 & Form 26AS</li>
                <li className="flex items-center gap-2">✓ AIS/TIS Reports</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Financial Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-center gap-2">✓ Salary Slips</li>
                <li className="flex items-center gap-2">✓ Bank Statements</li>
                <li className="flex items-center gap-2">✓ Investment Proofs</li>
                <li className="flex items-center gap-2">✓ Capital Gain Statements</li>
                <li className="flex items-center gap-2">✓ Property / Business Reports</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Additional Records</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-center gap-2">✓ TDS Certificates</li>
                <li className="flex items-center gap-2">✓ Advance Tax Details</li>
                <li className="flex items-center gap-2">✓ Refund Status Reports</li>
                <li className="flex items-center gap-2">✓ Tax Payment Challans</li>
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
              Who Can Use Our Income Tax Refund Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We assist taxpayers across multiple sectors throughout Delhi, India.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Salaried Employees', 'Business Owners', 'Freelancers', 'Professionals (Doctors, Lawyers)', 'Companies & LLPs', 'NRIs', 'Investors (Capital Gains)', 'Senior Citizens'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
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
              Our Income Tax Refund Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-stage roadmap engineered to recover your overpaid tax smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Eligibility Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Analyzing taxes paid and verifying refund options.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Reconciliation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Thorough cross-verification of incomes and deductions.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Preparation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Accurate calculations and preparation of claim structures.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Filing & Verification</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Submission with full compliance protocols.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Tracking</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Continuous support until the refund settlement completes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-blue-50 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert Tax Consultants",
                  "Fast Online Digital Services",
                  "Affordable & Transparent Pricing",
                  "End-to-End Tax Support"
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
                Our team offers complete professional review, maximum eligible claim support, risk reduction, and complete compliance management.
              </p>
            </div>

            {/* Right Column: Additional Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Complete Tax Portfolio
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-700">
                  Additional Services by Fintax Adviser
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Income Tax Return Filing',
                  'Income Tax Notice Handling',
                  'GST Registration & Notice Handling',
                  'ROC Compliance Management',
                  'Trademark Registration',
                  'MSME Registration Support',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'MIS Reporting Services',
                  'Fundraising Services'
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

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is an Income Tax Refund?", a: "An Income Tax Refund is the amount returned by the Income Tax Department when a taxpayer pays more tax than required during a financial year." },
              { q: "Why do tax refunds happen?", a: "They usually arise due to excess TDS deductions, advance tax overpayments, incorrect tax estimations, or missing investment declarations." },
              { q: "Can salaried employees and businesses claim refunds?", a: "Yes. Salaried employees can recover excess salary deductions, and businesses can receive refunds from overpaid advance or self-assessment taxes." },
              { q: "Can delayed refunds be monitored?", a: "Yes, our team provides full refund status tracking and follow-up monitoring assistance until the settlement is finalized." },
              { q: "Do you provide revised return and NRI support?", a: "Yes, we handle corrections, rectifications, revised returns, and specialized tax/adjustment reviews for NRI profiles." }
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