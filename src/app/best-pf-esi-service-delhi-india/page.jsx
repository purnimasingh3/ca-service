import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =
  servicesMetadata.pfEsi;

export default function PremiumPFESILanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "100% Compliance Assurance",
    "Expert Support At Every Step",
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
                ⚡ Stay Compliant · Avoid Penalties · Focus on Growth
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                PF & ESI Registration 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Filing Services in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Complete compliance. Happy employees. Stronger business. Get end-to-end PF & ESI registration, timely return filing, and accurate reporting backed by expert support.
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

              {/* Action Buttons & Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/consultation" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white text-center px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Free Consultation
                </Link>
                <div className="text-center lg:text-left">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call Us Today</p>
                  <a href="tel:+919643203209" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">+91 9643 203 209</a>
                </div>
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
            Best PF & ESI Registration Consultant in Delhi, India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your reliable partner for complete PF Registration Services, ESI Registration Services, PF Return Filing, ESI Return Filing, and employee statutory compliance solutions. We help startups, SMEs, factories, healthcare organizations, and corporate businesses manage complete employee compliance systems with accuracy and professionalism.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Professional PF & ESI Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Proper PF & ESI compliance services help businesses avoid legal notices, eliminate structural penalty risks, and maximize workforce trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PF Registration Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete enrollment framework under the Employees' Provident Fund Organisation (EPFO) rules.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employer Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PF Code Allotment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Documentation Support</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ESI Registration Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Social security and health protection setup under the Employees' State Insurance Corporation (ESIC).</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employer Setup</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ESIC Code Generation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Insurance Registration</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PF Return Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Streamlined monthly documentation submissions keeping your organization 100% compliant.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly PF Return Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PF Challan Generation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PF Reconciliation & UAN Management</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ESI Return Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete submission and processing workflow management for ESIC regular filing cycles.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly ESI Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Challan Preparation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ESI Notice Handling & Tracking</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Employee Operations Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end data onboarding lifecycle workflows mapping accurate worker information sets.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Enrollment Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> UAN Generation & Activation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Contribution Management</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Comprehensive Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Holistic monitoring systems maintaining complete ongoing labour law benchmarks.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Compliance Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Labour Law Compliance Services</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Payroll Compliance Tracking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-compliant" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why PF & ESI Compliance is Vital
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Delaying employee compliance can lead to serious legal and financial bottlenecks. Professional filing support ensures your operations remain secure, accurate, and seamlessly aligned with government regulations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Let us handle compliance, you focus on growth! Avoid unexpected operational audits and reputational damage."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Avoid Financial Penalties</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prevent heavy compound interest charges, fine accumulations, and damages due to missed timeline windows.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Eliminate Legal Disputes</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Stay completely safe from labour department inquiries, show-cause notices, and employee court representation tracks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Boost Employee Trust</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Talented professionals significantly prefer organizations that provide stable statutory social security setups.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Prevent Payroll Errors</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ensure automated contribution calculations perfectly track individual salary structures without mismatching data.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Build a Stronger Market Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Maintaining structured, clean compliance documentation establishes a premium corporate image for clients and stakeholders.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Core Statutory Welfare Benefits Provided
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Ensuring complete workforce care frameworks while fulfilling strict government compliance provisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Long-Term Savings</h3>
              <p className="text-slate-700 text-sm leading-relaxed">PF frameworks build critical financial safety systems helping employees build stable retirement corporas.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Full Medical Coverage</h3>
              <p className="text-slate-700 text-sm leading-relaxed">ESI integrations supply comprehensive medical protection and emergency hospital care for staff and their families.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Tax Savings Benefits</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Both employers and organizational workers qualify for prominent taxation exemptions and fiscal savings channels.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Maternity Protection</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Secures vital leaves, income safety nets, and medical support packages during maternity timelines.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Disability Compensation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Guarantees structured financial relief structures and complete welfare protection during unexpected injuries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs PF & ESI Registration Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We implement exact compliance systems across all commercial setups.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'Factories', 'Manufacturing Companies', 'Healthcare Organizations', 'Educational Institutions', 'IT Companies', 'Agencies', 'Corporate Offices'].map((sector) => (
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
              Our PF & ESI Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A clear, 5-stage compliance workflow engineered to secure your official codes smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Consultation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Analyzing your firm structure and employee size.</p>
            </div>
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Verification</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Validating corporate and staff documents ahead of time.</p>
            </div>
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Submission</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Filing formal requests with EPFO & ESIC departments.</p>
            </div>
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Enrollment</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Onboarding current employees and generating UAN codes.</p>
            </div>
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Setup</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Configuring regular monthly filing timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Requirements section & Extra Advisory */}
      <section className="py-20 lg:py-24 bg-slate-50 text-white border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Documents Required */}
            <div className="w-full space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 leading-tight">
                  Documents Required For Registration
                </h2>
                <p className="text-blue-500 text-s">Please keep these core items ready for validation checks.</p>
              </div>

              <div className="space-y-4 bg-slate-100 p-6 rounded-2xl border border-blue-800">
                <div>
                  <h4 className="text-sm font-bold uppercase text-slate-700 tracking-wider mb-2">Business Records:</h4>
                  <p className="text-xs text-blue-500 leading-relaxed">Company PAN Card · GST Certificate · Incorporation Certificate · Address Proof · Bank Details</p>
                </div>
                <div className="border-t border-blue-800 pt-4">
                  <h4 className="text-sm font-bold uppercase text-slate-700 tracking-wider mb-2">Employee Documents:</h4>
                  <p className="text-xs text-blue-500 leading-relaxed">Aadhaar Card · PAN Card · Salary Information · Mobile Number · Bank Account Details</p>
                </div>
                <div className="border-t border-blue-800 pt-4">
                  <h4 className="text-sm font-bold uppercase text-slate-700 tracking-wider mb-2">Additional Track Records:</h4>
                  <p className="text-xs text-blue-500 leading-relaxed">Complete Employee List · Daily Attendance Records · Core Payroll Reports</p>
                </div>
              </div>
            </div>

            {/* Right Column: Additional Services */}
            <div className="w-full bg-slate-50 p-6 sm:p-8 rounded-2xl text-slate-900 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Complete Portfolio Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#071c3d]">
                  Additional Solutions From Fintax Adviser
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Incorporation Services',
                  'GST Registration Services',
                  'PAN TAN Application Services',
                  'Trademark Registration',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'Business Advisory Services',
                  'Labour Law Compliance Services',
                  'Payroll Management Services'
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

          <div className="space-y-4">
            {[
              { q: "What is PF Registration?", a: "PF Registration is the process of registering an employer under EPFO for employee provident fund compliance and retirement contribution management." },
              { q: "What is ESI Registration?", a: "ESI Registration helps businesses provide medical and insurance benefits to employees under ESIC regulations." },
              { q: "Is PF Registration mandatory for businesses?", a: "PF applicability depends on employee count and labour law provisions. Eligible organizations must complete registration." },
              { q: "What is included in PF Return Filing Services?", a: "Our services include monthly return filing, challan preparation, employee contribution management, reconciliation, and compliance monitoring." },
              { q: "Do startups require PF & ESI Registration?", a: "Yes, startups with eligible employee strength should establish compliance systems from the beginning." },
              { q: "Can you manage employee enrollment?", a: "Yes, we handle employee registration, UAN generation, insurance enrollment, and documentation support." },
              { q: "Do you provide online PF & ESI filing services?", a: "Yes, Fintax Adviser provides complete online compliance support across India." }
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