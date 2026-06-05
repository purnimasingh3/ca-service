import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =
  servicesMetadata.partnershipRegistration;

export default function PartnershipRegistrationLanding() {
  const HERO_STATS = [
    "FAST & HASSLE-FREE REGISTRATION",
    "YOUR PARTNERSHIP, OUR EXPERTISE",
    "YOUR SUCCESS, OUR COMMITMENT",
    "LEGALLY DRAFTED PARTNERSHIP DEED",
    "COST-EFFECTIVE SOLUTIONS",
    "EXPERT CA SUPPORT AT EVERY STEP",
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
                ⚡ START TOGETHER. GROW TOGETHER.
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Partnership Firm Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Build a strong business partnership. Quick & hassle-free partnership firm registration with expert CA support in Delhi, India.
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
                    <span className="font-semibold text-gray-700 text-xs sm:text-sm uppercase tracking-wider">{item}</span>
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
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">TRUSTED BY 500+ BUSINESSES · 15 YEARS OF EXPERIENCE</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            <b>Best Partnership Firm Registration CA Firm in Delhi India – Fintax Adviser</b>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the Best Partnership Firm Registration CA Firm in Delhi India? Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your trusted partner for Partnership Firm Registration, Partnership Deed Drafting, PAN Registration, GST Registration, and business compliance services.
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">
            A Partnership Firm is one of the most popular business structures in India, especially for startups, traders, consultants, professionals, and family-owned businesses. With a simple formation process, shared responsibilities, and low compliance requirements, partnership firms offer an excellent business model for entrepreneurs. At Fintax Adviser, we help businesses register their partnership firms quickly and compliantly.
          </p>
        </div>
      </section>

      {/* What is Partnership Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is a Partnership Firm?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A Partnership Firm is a business structure where two or more individuals agree to operate and manage a business together while sharing profits and losses according to mutually agreed terms. 
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choosing the Best Partnership Firm Registration CA Firm in Delhi India ensures your business starts on a strong legal foundation with proper documentation and compliance support.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Minimum Two Partners", desc: "At least two individuals are required to establish the legal relationship." },
                { title: "Easy Business Formation", desc: "Straightforward initialization without overly burdensome entry systems." },
                { title: "Shared Ownership", desc: "Management frameworks, operations, and liabilities distributed among partners." },
                { title: "Cost-Effective Registration", desc: "A highly economical structure compared to corporate entities." },
                { title: "Flexible Operations", desc: "Partners can adjust and run the firm with high agility as goals change." },
                { title: "Simple Compliance", desc: "Low annual maintenance needs make it ideal for small & medium businesses." }
              ].map((feat, index) => (
                <div key={index} className="p-5 border border-slate-200 bg-white rounded-xl shadow-xs">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
                    <span>☑</span> {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services Offered by Fintax Adviser
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Complete end-to-end legal, tax, and operational structural support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Partnership Firm Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic and paperwork support for establishing your partnership firm legally with authorities.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Partnership Deed Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional drafting of legally sound partnership deeds customized to your explicit business requirements.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PAN Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Application, tracking, and fast processing of the Permanent Account Number (PAN) for the partnership firm entity.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end GST tax configuration and execution alignment support for eligible commercial businesses.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MSME Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Udyam registration validation assistance to tap into central government micro-enterprise schemes.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Compliance Advisory & Bank Setup</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ongoing expert consultation on tax filings alongside complete documentation support for corporate bank accounts.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Registering Your Partnership Firm
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Why picking the right registration firm accelerates commercial structural development securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Easy Formation Process</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Our processes optimize registration timelines, establishing entities through clean, stress-free frameworks.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Shared Responsibilities</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Business tasks, ongoing commitments, and investment capital parameters are optimally structured across partners.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Better Business Credibility</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Registered firms capture vastly superior legal trust metrics with clients, suppliers, and fiscal networks.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Cost-Effective Structure</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Firms manage far less overhead and corporate design costs than high-tier private limited configurations.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Operational Flexibility</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The internal agreement provides seamless elasticity to scale operations up or alter core structures swiftly.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Easy Access to Loans</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Financial channels and traditional banking systems highly prioritize funding registered commercial agreements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs a Partnership Firm Registration?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing legal support formats tailored across multiple fields.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Traders & Retail Businesses', 
              'Professional Service Firms', 
              'Family-Owned Businesses', 
              'Startup Founders', 
              'Small Manufacturing Units', 
              'Service Providers'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Documents Required for Registration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Please ensure clear scanned copies are prepared for streamlined verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wider">Partner Documents</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• PAN Card of Partners</li>
                <li>• Aadhaar Card of Partners</li>
                <li>• Passport Size Photographs</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wider">Address Proof of Partners</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Driving License / Voter ID</li>
                <li>• Bank Statement</li>
                <li>• Utility Bill</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wider">Business Address Proof</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Electricity Bill</li>
                <li>• Property Tax Receipt</li>
                <li>• Rent Agreement (if rented)</li>
                <li>• NOC from Property Owner</li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-blue-600 mb-3 text-sm uppercase tracking-wider">Deed Information</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Proposed Business Name</li>
                <li>• Core Business Activities</li>
                <li>• Profit Sharing Ratio</li>
                <li>• Capital Contribution Details</li>
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
              Our 6-Step Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured roadmap engineered by legal professionals to secure quick verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { step: 1, title: "Consultation", desc: "Understanding objectives & partner terms." },
              { step: 2, title: "Collection", desc: "Verifying corporate and partner files." },
              { step: 3, title: "Deed Drafting", desc: "Drafting a compliant, strong legal partnership deed." },
              { step: 4, title: "Registration", desc: "Filing application files with state registrars." },
              { step: 5, title: "Tax Processing", desc: "Fast securing of corporate PAN & GST configs." },
              { step: 6, title: "Setup Support", desc: "Post-registration business advisory & setups." }
            ].map((p) => (
              <div key={p.step} className="p-6 text-center bg-white border border-slate-200 rounded-2xl relative shadow-xs">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">{p.step}</div>
                <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">{p.title}</h5>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert CA & Compliance Team",
                  "Affordable Pricing Packages",
                  "Fast Online Registration Process",
                  "End-to-End Business Support",
                  "Legally Drafted Deeds",
                  "Dedicated Customer Support"
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
                When businesses search for the Best Partnership Firm Registration CA Firm in Delhi India, they choose Fintax Adviser for reliability, expertise, and personalized support.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-xl backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Services by Fintax Adviser
                </h3>
              </div>

              {/* Separated Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'LLP Registration',
                  'Private Limited Company Registration',
                  'One Person Company (OPC) Registration',
                  'GST Registration',
                  'MSME Registration',
                  'Trademark Registration',
                  'ROC Compliance Services',
                  'Income Tax Return Filing',
                  'Accounting & Bookkeeping Services',
                  'Virtual CFO Services'
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
              { q: "Is partnership firm registration mandatory?", a: "Partnership registration is not mandatory under the Partnership Act, but a registered firm enjoys significant legal advantages, financial credibility, and stronger foundation attributes." },
              { q: "How many partners are required to start a partnership firm?", a: "A minimum of two partners are legally required to start and operate a partnership firm structure." },
              { q: "Can a partnership firm obtain GST registration?", a: "Yes, partnership firms can easily apply for and obtain GST tax registration configurations based on operational requirements." },
              { q: "How long does partnership firm registration take?", a: "Generally, the formal setup can be completed within a few working days depending on structural document readiness and quick submissions." },
              { q: "What is the role of a partnership deed?", a: "The partnership deed acts as the primary legal document defining profit-sharing ratios, structural capital distribution, partner responsibilities, and operational guidelines." },
              { q: "Why should I choose the Best Partnership Firm Registration CA Firm in Delhi India?", a: "Professional registration minimizes legal risks, ensures smooth document formatting, sets up accurate tax profiles, and establishes a solid track for business scaling." },
              { q: "Why choose Fintax Adviser?", a: "Fintax Adviser is recognized as a premiere CA firm in Delhi India, providing expert registration services backed by 15+ years of experience and 500+ satisfied clients." }
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