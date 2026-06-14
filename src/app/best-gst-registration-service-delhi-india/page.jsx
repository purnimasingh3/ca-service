import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.gstRegistration;

export default function PremiumGSTLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "25+ Tax Professionals",
    "200+ Happy Clients",
    "100% Compliant Process",
  ];
  const faqs = [
    {
      q: "What is GST Registration?",
      a: "GST Registration is the digital process through which businesses obtain a unique GSTIN (Goods and Services Tax Identification Number) from the tax department. It allows businesses to collect GST legally, claim input tax credits, and maintain flawless legal compliance."
    },
    {
      q: "Who requires mandatory GST Registration?",
      a: "Businesses crossing prescribed regional turnover thresholds, online marketplace e-commerce sellers, businesses performing interstate supply transactions, import-export companies, and specific professionals require registration. Many startups choose voluntary registration for enhanced industry credibility."
    },
    {
      q: "How long does the GST Registration process take?",
      a: "Normally, GST Registration takes around 3-7 working days. This timeline is heavily dependent on documentation accuracy and the speed of tax department verification rounds."
    },
    {
      q: "Is GST Registration compulsory for early-stage startups?",
      a: "Not always, as it depends strictly on threshold turnovers, industries, and operational parameters. However, early voluntary registration prevents funding issues, builds investor confidence, and prepares the business layout for growth readiness."
    },
    {
      q: "Can freelancers, designers, and consultants apply for GST?",
      a: "Yes. Freelancers, independent consultants, digital marketers, software developers, and individual service providers can apply for registration depending on turnover rules and client profile requirements."
    },
    {
      q: "Can the entire registration process be completed online?",
      a: "Yes, the process is completely online. Our team manages your documentation submission, application filing, department follow-ups, and eventual certificate delivery remotely."
    }
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
                ⚡ Fast & Easy Registration · One Nation, One Tax
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                GST Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get Your GST Number Hassle-Free and Start Your Business the Right Way. We provide an online process with minimum documentation and quick approval.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95 text-center">
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
            Trusted GST Registration Consultant in Delhi, India – Grow Your Business with Fintax Advisers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Advisers</strong>. Starting a business is exciting, but staying legally compliant is equally important. One of the first and most essential steps for many businesses is obtaining GST Registration. Whether you are a startup founder, e-commerce seller, freelancer, manufacturer, service provider, or established company, having proper GST Registration Services ensures smooth operations and long-term business growth. We help businesses complete their GST Registration, manage compliance, file returns, and avoid tax-related complications.
          </p>
          <p className="text-md font-bold text-blue-600 pt-2">
            "Register Correctly. Stay Compliant. Grow Confidently."
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Benefits of GST Registration for Business Growth
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              GST Registration is not just a legal requirement—it is a powerful growth tool that builds customer trust and operational flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Improves Business Credibility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Clients, vendors, and investors trust registered businesses more. A GST-compliant business appears professional and reliable.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Helps Claim Input Tax Credit (ITC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Businesses can reduce overall tax burden through input credits. This directly improves profitability and cash flow workflows.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Supports Business Expansion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Planning interstate operations? GST makes expansion easier, allowing you to legally sell goods and services across India.</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Required for Online Selling</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Most e-commerce marketplaces require GST registration. Without it, scaling online and reaching millions of digital buyers becomes difficult.</p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Avoids Penalties & Legal Issues</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Timely and accurate registration protects your growing business from unnecessary department notices, compliance gaps, and financial penalties.</p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Legal Recognition</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Gain official identification from the government as a registered supplier, enabling seamless multi-market integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Diverse Businesses Need GST Registration Services
            </h2>
            <p className="text-sm text-slate-500 mt-1">We assist various constitution types and industrial business sectors with specialized tax frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">Startups</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Create a strong legal foundation from day one, avoid compliance gaps, and boost investor confidence.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">Private Limited Companies</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Enable smooth compliance frameworks, corporate structural transparency, and efficient corporate tax management.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">LLPs & Partnerships</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Maintain explicit legal and financial transparency across partners while securing input tax benefits.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">E-commerce Businesses</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Mandatory for marketplace selling (Amazon, Flipkart, Meesho) and undertaking interstate sales transactions.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">Freelancers & Consultants</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Establish professional industry credibility, tax compliance, and open doors to work with large corporate clients.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">Import Export Businesses</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Simplified international-domestic business taxation, custom duty parameters, and input tax utilization.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">Manufacturing Units</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Optimize raw material and overhead input tax utilization to significantly increase business profitability.</p>
            </div>
            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
              <h4 className="font-bold text-base text-blue-600">Service Providers</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Comply with threshold limits effortlessly while seamlessly executing inter-state service contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Complete GST Registration Process at Fintax Advisers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-stage digital roadmap engineered for fast, error-free GSTIN generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-white border border-slate-200 rounded-2xl relative shadow-xs">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Business Consultation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">We evaluate your business structure, turnover, industry scope, and specific GST applicability.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-200 rounded-2xl relative shadow-xs">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Document Collection</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Our tax experts systematically review and verify all required identity and address documents before filing.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-200 rounded-2xl relative shadow-xs">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Online Application</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Applications are prepared with exact nomenclature metrics and submitted accurately onto the GST portal.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-200 rounded-2xl relative shadow-xs">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Verification</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Tax authorities review your details. Our dedicated team handles prompt follow-up queries if requested.</p>
            </div>

            <div className="p-6 text-center bg-white border border-slate-200 rounded-2xl relative shadow-xs">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">GSTIN Generation</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Your unique GST Number is issued, certificate is generated, and compliance guidance is delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Matrix Section */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Documents Required for GST Registration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Keep these ready to ensure your registration process is completed within 3–7 working days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2 border-slate-300">Proprietorship</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ PAN Card</li>
                <li className="flex items-center gap-2">✓ Aadhaar Card</li>
                <li className="flex items-center gap-2">✓ Photograph</li>
                <li className="flex items-center gap-2">✓ Address Proof</li>
                <li className="flex items-center gap-2">✓ Bank Statement</li>
                <li className="flex items-center gap-2">✓ Business Address Proof</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2 border-slate-300">Companies</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ PAN of Company</li>
                <li className="flex items-center gap-2">✓ Certificate of Incorporation</li>
                <li className="flex items-center gap-2">✓ MOA & AOA</li>
                <li className="flex items-center gap-2">✓ Director KYC Docs</li>
                <li className="flex items-center gap-2">✓ Office Address Proof</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2 border-slate-300">LLP</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ LLP Agreement</li>
                <li className="flex items-center gap-2">✓ PAN Card of LLP</li>
                <li className="flex items-center gap-2">✓ Partner Documents</li>
                <li className="flex items-center gap-2">✓ Office Address Proof</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2 border-slate-300">Partnership Firms</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-center gap-2">✓ Partnership Deed</li>
                <li className="flex items-center gap-2">✓ PAN Card of Firm</li>
                <li className="flex items-center gap-2">✓ Partner Address Proof</li>
                <li className="flex items-center gap-2">✓ Office Proof Docs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#e8efff] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Businesses Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Businesses Trust Fintax Advisers
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid: Prevent items from collapsing into each other */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Experience",
                  "25+ Dedicated Professionals",
                  "200+ Happy Clients Across India",
                  "Affordable & Transparent Pricing",
                  "Fast Digital Registration Setup",
                  "100% Online & Hassle-Free Process",
                  "Dedicated Customer Support",
                  "Complete End-to-End Compliance"
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
                Our multidisciplinary team includes Chartered Accountants, GST Consultants, Tax Specialists, Business Advisors, Legal Consultants, and Compliance Experts.
              </p>
            </div>

            {/* Right Column: Complete GST Services Portfolio Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-100 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Complete Tax Ecosystem
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  GST Services Offered by Fintax Advisers
                </h3>
                <p className="text-slate-500 text-xs">Apart from core GST registration services, we act as your long-term legal compliance partner:</p>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold text-blue-700 uppercase">GST Return Filing</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">Filing of accurate monthly, quarterly, and annual GST returns to prevent penalties.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold text-blue-700 uppercase">GST Advisory Services</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">Strategic indirect tax planning, structuring consulting, and asset optimization parameters.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold text-blue-700 uppercase">GST Notice Handling</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">End-to-end representation support for managing legal notices and complicated departmental queries.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold text-blue-700 uppercase">GST Reconciliation & ITC Management</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">Continuous match monitoring to reduce reporting errors and optimize tax benefits safely.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold text-blue-700 uppercase">E-commerce Compliance Portfolio</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">Handles Amazon/Flipkart/Meesho reporting, TCS compliance parameters, and interstate sales taxation.</p>
                </div>
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