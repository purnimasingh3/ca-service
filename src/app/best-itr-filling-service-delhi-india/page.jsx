import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =
  servicesMetadata.itrFiling;

export default function PremiumITRFilingLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "Accurate & Secure Filing",
    "100% Tax Compliance",
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
                ⚡ File Today · Stay Compliant · Build Your Financial Future
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Income Tax Return
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Filing Services in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert ITR Filing Services for Individuals, Businesses, Startups, NRIs & Professionals. Ensure accurate filing, maximize deductions, and secure timely returns.
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
            Your Trusted Partner for Income Tax Return Filing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your trusted partner for complete Income Tax Return (ITR) Filing, Tax Planning Services, Income Tax Consultancy, and financial compliance solutions. Filing an ITR is not just a legal requirement; it is an important financial activity that helps individuals and businesses maintain compliance, claim refunds, build financial credibility, and avoid penalties.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Income Tax Return Filing Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end tax filing and advisory support tailored to your specific income streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ITR for Salaried Employees</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accurate tax filing from salary sources while ensuring maximum eligible deductions and quick refund processing.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Salary Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Form 16 Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Deduction Claims</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Tracking</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Private & Govt</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Senior Citizens</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Tax Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete financial reporting, profit analysis, and expense management structure optimization for businesses.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Proprietorship ITR</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Income Reporting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expense Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Traders & Retail</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Manufacturers</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Professional & Freelancer ITR</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Specialized compliance management and computation setups for independent consultants and creative agencies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Doctors & Lawyers</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Consultants</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Architects</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Freelancers</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Digital Creators</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Income Calculation</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ITR for Companies & LLPs</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Corporate regulatory filings accompanied by meticulous financial reviews and absolute annual compliance structures.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Corporate Tax Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> LLP Return Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Financial Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Planning</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Compliance & Notice Support</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">NRI Tax Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert global asset advisory helping non-residents handle localized Indian earnings seamlessly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Foreign Income</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> NRI Tax Compliance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Asset Reporting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Management</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Specialized Tax Advisory</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Capital Gains Tax Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accurate tax declaration structures covering asset liquidation operations across real estate and market shares.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Property Sales</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Stock Markets</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Mutual Funds</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Asset Transfers</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Reinvestment Tracking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Structured Return Types Section */}
      <section id="itr-types" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Types of Income Tax Return Forms We Handle
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Aligning the exact right tax return architecture to fit your filing categories perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">ITR-1 Filing</h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Target Profile:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Tailored explicitly for salaried individuals and single or simple income sources.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">ITR-2 Filing</h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Target Profile:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Suitable for taxpayers managing capital gains and multiple individual income categories.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">ITR-3 Filing</h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Target Profile:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Designed meticulously to map out complex commercial operations and professional business earnings.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">ITR-4 Filing</h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Target Profile:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Ideal for eligible entities applying under presumptive corporate taxation schemes.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Company Return Support</h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Target Profile:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Complete yearly regulatory support handling structured institutional corporate filings.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">LLP Return Filing</h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-3">Target Profile:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Specialized annual compliance execution designed for registered Limited Liability Partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-itr" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Income Tax Return Filing is Crucial
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many individuals believe ITR filing is only required when taxes are payable, but filing provides multiple critical legal and financial documentation advantages.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Avoid legal notices and financial blocks. Let our expert consultants format your tax reports flawlessly."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Legal Compliance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Strictly maintain compliance to systematically avoid department notices and financial penalties.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Claim Tax Refunds</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Quickly and efficiently claim back any excess TDS or tax collections deducted during the fiscal cycle.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Loan Approval Support</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Banks and institutional lending entities strictly request structured, historical ITR records.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Visa Processing</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">International consulates rely heavily on previous tax filings to evaluate economic stability.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Proof of Income & Corporate Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Acts as standard institutional proof of financial health, enhancing transparency and reputation with partners.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Income Tax Return Filing Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing dedicated individual and commercial tax support across diverse fields.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Salaried Employees', 'Business Owners', 'Freelancers', 'Startups', 'Registered Companies', 'Active Investors', 'Non-Residents (NRIs)', 'Senior Citizens'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Matrix */}
      <section id="documents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Documents Required for ITR Filing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Keep these foundational details prepared to ensure a swift and error-free tax submission process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-base mb-3 text-blue-600">Personal Records</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• PAN Card</li>
                <li>• Aadhaar Card</li>
                <li>• Registered Mobile Number</li>
                <li>• Updated Email ID</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-base mb-3 text-blue-600">Income Evidence</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Form 16</li>
                <li>• Salary Slips</li>
                <li>• Bank Statements</li>
                <li>• Interest Certificates</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-base mb-3 text-blue-600">Investments & Assets</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Mutual Fund Statements</li>
                <li>• Property Records</li>
                <li>• Capital Gain Reports</li>
                <li>• Insurance Details</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 text-base mb-3 text-blue-600">Commercial Books</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Profit & Loss Statement</li>
                <li>• Corporate Balance Sheet</li>
                <li>• Documented Expense Records</li>
                <li>• GST Information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Structured ITR Filing Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A carefully structured, 5-step roadmap engineered to execute filings flawlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Consultation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Understanding specific taxpayer profile classes and exact income sources.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Collection</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Meticulously sorting and examining your financial compliance records.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Calculation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Computing gross income parameters, applicable deductions, and overall liabilities.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Preparation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Drafting the specialized return structure accurately to limit structural errors.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-100 rounded-2xl sm:col-span-3 lg:col-span-1">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Verification</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Submitting documents straight to the e-filing portal to complete compliance verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-sky-50 text-slate-900 border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert Tax Consultants",
                  "Fast Online Filing Services",
                  "Affordable & Transparent Packages",
                  "Complete Tax Advisory"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-100/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-4 border-t border-slate-200 max-w-md">
                Our multidimensional core advisory firm features dedicated Tax Consultants, Chartered Professionals, and Corporate Experts helping you plan better and avoid regulatory notices.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Financial & Compliance Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'GST Registration Services',
                  'ROC Compliance Management',
                  'Virtual CFO Services',
                  'Trademark Registration',
                  'MSME Registration Support',
                  'Company Registration Setup',
                  'Import Export Code (IEC)',
                  'PF & ESI Compliance',
                  'Accounting & Bookkeeping',
                  'MIS Reporting Services',
                  'Fundraising Services for Startups'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-blue-50/50 transition-all duration-200"
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
      <section id="faqs" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is Income Tax Return Filing?", a: "ITR filing is the official process of detailing and reporting your earned income parameters, claimed investment deductions, and tax liabilities directly to the Income Tax Department." },
              { q: "Is ITR filing mandatory?", a: "Filing applicability depends explicitly on structural income volume thresholds and local legal parameters defined by tax laws." },
              { q: "Can salaried employees file ITR?", a: "Yes, absolutely. Salaried individuals should file returns regularly to maintain financial compliance and securely process potential refund claims." },
              { q: "Can freelancers file Income Tax Returns?", a: "Yes. Freelancers, digital creators, and independent professionals require proper tax computations and reporting structures under relevant brackets." },
              { q: "Do startups and companies require tax filing?", a: "Yes. Registered business entities generally require strict annual tax filing compliance regardless of operational profit margins." },
              { q: "Do you provide online ITR filing services?", a: "Yes. Fintax Adviser provides complete, end-to-end digital assistance and fast online tax filing operations across India." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
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