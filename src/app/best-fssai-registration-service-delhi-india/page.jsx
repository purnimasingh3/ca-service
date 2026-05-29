import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =
  servicesMetadata.fssai;

export default function FSSAIRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "100% Legal Compliance",
    "Fast & Easy Process",
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
                ⚡ Legal Compliance · Safe Food · Stronger Business
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                FSSAI Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get Your FSSAI License Hassle-Free with Expert Guidance and End-to-End Support. Ensure food safety and comply with government standards effortlessly.
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
            Best FSSAI Registration Consultant in Delhi, India – Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your reliable partner for complete FSSAI Registration, Food License Registration, FSSAI License Renewal, and food business compliance services. If you operate a food-related business, obtaining an FSSAI License is mandatory under Indian food safety regulations. With 15+ Years of Experience and more than 500+ Happy Clients Served, we provide complete support across India.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our FSSAI Registration Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end food compliance support to keep your business fully authorized and operational.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">New FSSAI Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert guidance to establish your new food business setup legally under government food regulations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Basic Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> State License</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Central License</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> App Filing</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">FSSAI License Renewal</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Never risk legal issues due to an expired license. We manage your end-to-end ongoing renewals timelines.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Expiry Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Document Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Renewal Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Monitor</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">License Modification</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Has your food business evolved? We seamlessly update your government records to remain compliant.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Address Changes</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Product Addition</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Category Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Ownership Changes</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Avoid hefty corporate penalties through structural, automated financial return preparation and reporting.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Reports</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Documentation Support</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Document Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete backup packaging and review parameters ensuring error-free submissions to government desks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Review</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Category Checks</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Data Validation Rooms</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Food Compliance Consulting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Bespoke tactical consulting curated specifically to manage long-term standards across local food markets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Safety Layouts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Standard Audits</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Operational Quality Maps</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-fssai" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why is FSSAI Registration Important?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many food business owners treat FSSAI Registration as only a legal requirement, but it offers significant strategic and operations advantages that build confidence.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Operating without an FSSAI license may attract severe penalties and legal action. Secure your company's credentials early."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Food Business Operation</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Obtain the full mandated legal permissions required to safely operate your food brand marketplace.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Builds Customer Trust</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Customers strictly prefer licensed food options because they assure basic hygiene, safety, and purity.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Improves Brand Image</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Registered food companies capture vastly stronger brand credibility and market reputation.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Supports Expansion</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">FSSAI is mandatory to unlock access to distributors, retail networks, and online food delivery applications.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Food Safety Compliance & Better Opportunities</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Meet state safety standards seamlessly while establishing solid commercial ground for accelerated business lifecycle expansion.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Types of FSSAI Licenses Supported Matrix */}
      <section id="license-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Types of FSSAI Registration Services We Support
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Aligning registration parameters to fit your business's operational tier and structural turnover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Basic FSSAI Registration</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Suitable for:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Small food vendors, home kitchens, startups, small retailers, and street food businesses.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">State FSSAI License</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Suitable for:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Restaurants, bakeries, medium food manufacturers, dairy businesses, and food processors.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Central FSSAI License</h3>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mb-3">Required for:</span>
              <p className="text-slate-700 text-sm leading-relaxed">Large manufacturers, import-export companies, multi-state operators, large processing units, and e-commerce companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs FSSAI Registration?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We assist across diverse industrial sectors with specific licensing strategies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Restaurants & Cafés', 'Cloud Kitchens', 'Hotels & Catering', 'Sweet Shops & Bakeries', 'Food Manufacturers', 'Dairy Businesses', 'Import Export Companies', 'Home Food Businesses'].map((sector) => (
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
              Our FSSAI Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-step roadmap engineered to get your license approved smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Consultation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Understanding food categories and license requirements.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Collection</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Required business and product documents are collected.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Preparation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Our experts prepare your accurate legal application parameters.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Submission</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">The prepared file is formally submitted to the FSSAI authority.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Approval</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">After official verification, your FSSAI certificate is safely issued.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[oklch(86.5%_0.127_207.078)] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser as Your FSSAI Consultant?
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Food License Experts",
                  "Affordable Service Packages",
                  "Quick Registration Process",
                  "Complete Compliance Support"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-300 p-4 rounded-xl shadow-xs hover:bg-blue-200 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-400 max-w-md">
                Our team features specialized food compliance consultants, legal assistants, and business managers ensuring an error-free filing.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-xl backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Corporate & Advisory Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'GST Registration',
                  'Private Limited Company Registration',
                  'LLP Incorporation',
                  'PAN TAN Application',
                  'Trademark Registration',
                  'Labour Law Compliance',
                  'PF & ESI Registration',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'Business Advisory Services'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-200 transition-all duration-200"
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
              { q: "What is FSSAI Registration?", a: "FSSAI Registration is the structural approval issued by the Food Safety and Standards Authority of India for food businesses operating legally in India." },
              { q: "Is FSSAI mandatory for food businesses?", a: "Yes. Most food businesses require FSSAI Registration or a license depending on their annual turnover parameters and specific business type." },
              { q: "What are the types of FSSAI licenses?", a: "The types are categorized into Basic Registration, State License, and Central License based on business sizing variables." },
              { q: "Can home kitchens apply for FSSAI?", a: "Yes. Home food businesses, home kitchens, and food startups can securely obtain standard FSSAI registration parameters." },
              { q: "Do restaurants require an FSSAI License?", a: "Yes. Restaurants, cafes, and cloud kitchens generally require systematic FSSAI licensing before starting operations." }
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