import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.soleProprietorship;
export default function SoleProprietorshipLanding() {
  const HERO_STATS = [
    "Simple Registration",
    "Minimal Compliance",
    "Maximum Control",
    "100% Legal & Compliant",
  ];
  const faqs = [
    { q: "Is Sole Proprietorship registration mandatory?", a: "While there is no separate incorporation process, obtaining registrations such as GST, MSME, or Shop & Establishment helps establish clear business legitimacy and operations." },
    { q: "Can a Sole Proprietorship open a current account?", a: "Yes, once you obtain the necessary business registrations and verification documents through our CA firm." },
    { q: "Is GST registration mandatory for a Proprietorship?", a: "GST registration depends directly on your operational turnover limits, business activities, or inter-state operations parameters." },
    { q: "What is the primary benefit of MSME registration?", a: "MSME/Udyam registration unlocks immediate access to strategic government schemes, financial subsidies, and single-owner business protection tools." },
    { q: "How long does Sole Proprietorship registration take?", a: "Generally, the complete legal registration framework can be fully closed within just a few working days, subject to verified document submissions." },
    { q: "Why choose the Best Sole Proprietorship Registration CA Firm in Delhi India?", a: "Professional registration ensures complete compliance layouts, smoother banking allocations, legal protection, and optimized fast-paced business growth paths." }
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
                ⚡ START SMALL. DREAM BIG. WE MAKE IT OFFICIAL.
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Sole Proprietorship Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                REGISTER TODAY. GROW TOMORROW. Your Business, Your Way. Get expert CA support at every step for a fast, legal, and hassle-free business setup.
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
                  Book a Free Consultation
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
            Professional Proprietorship Registration Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the <strong className="text-blue-600 font-semibold">Best Sole Proprietorship Registration CA Firm in Delhi India</strong>? Fintax Adviser offers complete Sole Proprietorship Registration services, GST registration, MSME registration, Shop & Establishment registration, business compliance, and tax advisory services for entrepreneurs across India.
          </p>
          <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
            A Sole Proprietorship is the simplest and most widely preferred business structure in India. It is ideal for freelancers, consultants, traders, professionals, startups, online sellers, and small business owners who want to start their business with minimal compliance and complete control. With <strong>15+ Years of Experience and 500+ Happy Clients Served</strong>, Fintax Adviser is recognized for fast, affordable, and hassle-free registration.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Registration & Core Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive legal and operational setup solutions offered by the premier CA firm in Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sole Proprietorship Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete legal mapping and assistance in establishing your proprietorship business structure securely.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Be Your Own Boss</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Work Your Own Way</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Keep 100% Profits & Build Legacies</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST & Tax Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end GST registration support for eligible entities to unlock inter-state trading structures safely.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Setup & Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business PAN Allocations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Professional Tax Registrations</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Government & State Frameworks</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Gain formal recognition under local business laws and Ministry-led micro-business frameworks.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MSME / Udyam Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Shop & Establishment Licences</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Government Subsidy Access Tools</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Banking & Current Accounts</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Assistance with dynamic structural documentation needed by leading banks to initiate entity account services.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Documentation Assistance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KYCs Validation Layouts</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Rapid Setup Integrations</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional execution of fiscal tax liabilities handled precisely in alignment with single-individual parameters.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual Individual Tax Alignment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Expense Deductions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Complete Year-Round Tracking</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax & Compliance Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Providing consistent advisory models designed specifically to secure early-stage market operations.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Continuous Regulatory Sweeps</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Strategic Financial Planning</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Abatement Strategies</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What is & Key Features Split Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is a Sole Proprietorship?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A Sole Proprietorship is a business owned and managed by a single individual. The proprietor has complete authority over business operations, profits, and decision-making.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Fintax Adviser helps entrepreneurs establish their business legally and obtain all necessary registrations required for smooth, standard day-to-day operations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Single Owner Business Structure optimized for freelancers, retailers, online sellers, and startups seeking fast market entries."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Single Owner Setup</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">100% control of business operations, strategies, and generated net profits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Minimal Compliance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Fewer compliance items over corporate cycles compared to LLPs or Private Limited units.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Low Registration Cost</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">An incredibly cost-effective business framework designed to preserve operational seed funds.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Quick Decision Making</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Zero organizational bottlenecks. Immediate strategic implementation controlled by you.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Who Should Choose This?</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Perfect for Freelancers (designers, writers, developers), Small Business Owners (retailers, traders), Online Sellers, and Startup Entrepreneurs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Hiring Fintax Adviser
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Why we are recognized as the top choice for sole proprietorship setups across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Easy & Quick Registration</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Established swiftly using basic identity certifications and clean, digitized documentation workflows.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Complete Ownership</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The single individual remains the undisputed operational anchor, driving absolute control over fiscal proceeds.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Tax Simplicity</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Income is taxed in the proprietor's individual capacity, removing corporate surcharge structures.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Professional CA Guidance</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Direct support framework anchored by seasoned Chartered Accountants and corporate advisors.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Easy Banking Access</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Open legal current bank accounts cleanly using the verified regulatory licenses we obtain for you.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">End-to-End Business Care</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Complete ongoing guidance running from initial setups to GST management, bookkeeping, and ITR filings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process & Documents Split Grid */}
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Registration Process */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Streamlined Registration Process
              </h3>
              <div className="w-16 h-1 bg-blue-600 rounded"></div>

              <div className="space-y-4">
                {[
                  { step: "Step 1", title: "Business Consultation", desc: "Understanding specific business activities and mapping core licensing milestones safely." },
                  { step: "Step 2", title: "Document Collection", desc: "Digital assimilation and precise professional verification of required KYC elements." },
                  { step: "Step 3", title: "GST / MSME Registration", desc: "Drafting applications and securing formal identity parameters under government portals." },
                  { step: "Step 4", title: "Business Setup Support", desc: "Assisting with operational bank documentation arrays and corporate startup layouts." },
                  { step: "Step 5", title: "Ongoing Compliance Guidance", desc: "Continuous strategic advisory mechanisms to ensure persistent, stress-free compliance." }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4 shadow-xs">
                    <span className="bg-blue-600 text-white font-bold text-xs px-2.5 py-1 rounded shrink-0">{p.step}</span>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">{p.title}</h5>
                      <p className="text-xs text-slate-600 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Required Documents Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Keep Ready
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mt-2">
                  Documents Required For Registration
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">1. Identity Proof</h5>
                  <p className="text-slate-600">PAN Card · Aadhaar Card · Passport (if applicable)</p>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">2. Address Proof</h5>
                  <p className="text-slate-600">Electricity Bill · Driving License · Voter ID · Bank Statement</p>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">3. Business Address Proof</h5>
                  <p className="text-slate-600">Rent Agreement · Utility Bill · Property Documents · NOC from Property Owner</p>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">4. Photographs</h5>
                  <p className="text-slate-600">Recent passport-size photograph of the proprietor.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Footprint Highlights */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Trust Fintax Adviser Nationwide
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing institutional-grade financial services under one single roof.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-bold text-slate-700">
            {[
              "15+ Years Experience",
              "500+ Happy Clients",
              "Expert In-House CAs",
              "Pan India Services",
              "Affordable Packages",
              "No Hidden Charges"
            ].map((metric, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {metric}
              </div>
            ))}
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
          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}