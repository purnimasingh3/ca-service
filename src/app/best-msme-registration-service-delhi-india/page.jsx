import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.msme;
export default function MSMERegistrationLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients",
    "Expert Consultation & Support",
    "HASSLE-FREE Documentation",
    "100% Accurate & Secure Process",
  ];

  const CORE_BENEFITS = [
    { title: "Government Recognition", desc: "MSME registration officially recognizes your business under government schemes." },
    { title: "Easy Loan Approval", desc: "Registered MSMEs often receive better access to business loans." },
    { title: "Lower Interest Rates", desc: "Financial institutions may provide benefits to registered enterprises." },
    { title: "Subsidy Benefits", desc: "Businesses may become eligible for various government incentives." },
    { title: "Better Business Credibility", desc: "An MSME certificate improves trust among clients and financial institutions." },
    { title: "Support for Business Expansion", desc: "Registration helps startups and SMEs grow efficiently." },
  ];

  const MSME_TYPES = [
    { name: "Micro Enterprises", desc: "Small-scale businesses with limited investment and turnover." },
    { name: "Small Enterprises", desc: "Growing businesses requiring financial and operational support." },
    { name: "Medium Enterprises", desc: "Established companies seeking expansion opportunities." },
  ];
  const faqs = [
    { q: "What is MSME Registration?", a: "MSME Registration is the official process of registering commercial business structures under the Government of India's online Udyam portal to lock in corporate recognition and financial benefits." },
    { q: "Is MSME Registration mandatory?", a: "No, registration is fully voluntary; however, it is highly recommended and beneficial for early startups, freelancers, and growing small business setups." },
    { q: "What is the Udyam Registration Certificate?", a: "It is the certified legal document generated directly after online micro-enterprise application verification and portal approval." },
    { q: "Can startups and service businesses qualify?", a: "Yes. Startups, manufacturing setups, trade businesses, service companies, and freelancers are fully eligible to apply." },
    { q: "Is the registration completed fully online?", a: "Yes. The process is completely digital. Corrections, profile updates, activity modifications, and data changes can also be filed seamlessly later if required." }
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
                ⚡ Grow Small, Grow Big with Government Recognition
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                MSME Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Register your business as MSME and unlock numerous benefits, financial support, subsidies and growth opportunities. Get your Udyam Registration Certificate for a stronger tomorrow!
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
                  Get Free Expert Consultation
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
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded">
            Introduction
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Best MSME Registration Consultant in Delhi, India – Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for trusted MSME Registration Services in Delhi, India? Welcome to <strong>Fintax Adviser</strong>, your reliable partner for complete MSME Registration, Udyam Registration Services, MSME Certificate Registration, and small business compliance solutions.
          </p>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            If you own a startup, small business, manufacturing unit, service company, trading business, freelancer setup, or growing enterprise, obtaining MSME Registration can help you access government benefits, financial support, subsidies, and business growth opportunities. With 15+ Years of Experience and more than 500+ Happy Clients Served, Fintax Adviser provides complete Online MSME Registration Services across India with fast processing, expert consultation, and end-to-end support.
          </p>
        </div>
      </section>

      {/* MSME Definition / Categories Grid */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What is MSME / Udyam Registration?</h2>
            <p className="text-slate-600 mt-2">
              MSME Registration refers to registering Micro, Small, and Medium Enterprises under the Udyam Registration Portal introduced by the Government of India. Businesses registered under MSME receive a unique Udyam Registration Certificate, which provides legal recognition and access to various government schemes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MSME_TYPES.map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-600 tracking-wide block mb-1">Category {idx + 1}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our MSME Registration Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              At Fintax Adviser, we manage complete micro, small, and medium business compliance setup parameters online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">New MSME Registration</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">Complete fresh digital processing layouts under official frameworks.</p>
              <div className="space-y-1.5 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Online Udyam Registration</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MSME Certificate Application</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Application Filing & Generation</div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Certificate Modification</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">Need changes in business details? We support seamless structural updates.</p>
              <div className="space-y-1.5 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Name & Address</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Activity & Ownership Changes</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Certificate Corrections</div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Renewal & Compliance</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">Keep your corporate registrations active, accurate, and completely compliant.</p>
              <div className="space-y-1.5 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Certificate Management</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Assistance</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Continuous Documentation</div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Udyam Consultancy</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">Dedicated advisory maps tailored according to unique operational segments.</p>
              <div className="space-y-1.5 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Startups & Manufacturing Units</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Service & Trading Companies</div>
                <div className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Export Setup Support</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance & Benefits Section */}
      <section id="why-msme" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why MSME Registration is Important for Businesses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many business owners ignore MSME Registration, but it offers major advantages for sustainable corporate growth, competitiveness, and regional market expansion.
              </p>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl space-y-2">
                <h5 className="font-bold text-sm text-blue-900">What Registered Businesses Receive:</h5>
                <ul className="text-xs text-blue-800 space-y-1 font-medium">
                  <li>☑ Government scheme benefits & lower interest rates</li>
                  <li>☑ Market development assistance & credit guarantees</li>
                  <li>☑ Easier industrial approvals & financial assistance options</li>
                  <li>☑ Subsidy opportunities & better brand credibility</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_BENEFITS.map((benefit, i) => (
                <div key={i} className="p-5 border border-slate-200 bg-slate-50 rounded-xl hover:border-blue-300 transition-colors">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">{benefit.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded">
              Compliance Checklist
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for MSME Registration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our legal experts verify documents carefully before filing to ensure smooth and fast portal approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-blue-600 border-b pb-2">1. Personal & Premises Documents</h3>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Aadhaar Card</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> PAN Card</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Business Address Proof</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Active Mobile Number & Email ID</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> GST Details (if applicable)</li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-blue-600 border-b pb-2">2. Business Financial Information</h3>
              <ul className="space-y-2.5 text-slate-700 text-sm font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Business Activity Details</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Investment Structure Information</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Turnover Details</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Operational Bank Information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Needs MSME Registration?
            </h2>
            <p className="text-sm text-slate-500 mt-1">Our Udyam registration services are perfectly ideal for the following verticals:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            {[
              { role: 'Startups', note: 'Get early-stage government support and recognition.' },
              { role: 'Manufacturing Units', note: 'Access schemes designed explicitly for industrial growth.' },
              { role: 'Service Companies', note: 'Improve overall operational and brand credibility.' },
              { role: 'IT Businesses', note: 'Support expansion and alternative financing opportunities.' },
              { role: 'Export Companies', note: 'Enhance global business profile and mapping.' },
              { role: 'Retail Businesses', note: 'Obtain official government-backed recognition loops.' },
              { role: 'Freelancers & Consultants', note: 'Build a significantly stronger professional identity.' },
              { role: 'Women Entrepreneurs', note: 'Access specialized government schemes and incentives.' },
              { role: 'Home & E-commerce Businesses', note: 'Grow legally, professionally, and access funding options.' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors space-y-1">
                <div className="font-bold text-slate-900 text-sm text-blue-600">{item.role}</div>
                <div className="text-slate-500 text-xs font-normal">{item.note}</div>
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
              The MSME Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured, 5-step digital blueprint managed seamlessly by our expert panel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { title: "Step 1", name: "Consultation", desc: "We understand your business type and exact registration category." },
              { title: "Step 2", name: "Collection", desc: "Required information and documentation metrics are collected securely." },
              { title: "Step 3", name: "Portal Filing", desc: "Application is structured and accurately submitted online on Udyam." },
              { title: "Step 4", name: "Verification", desc: "Details are thoroughly reviewed under standard Udyam portal procedures." },
              { title: "Step 5", name: "Issuance", desc: "Udyam Certificate is generated, completed, and advisory support is provided." },
            ].map((step, idx) => (
              <div key={idx} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl hover:bg-blue-50/40 transition-colors">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">{idx + 1}</div>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block">{step.title}</span>
                <h5 className="font-bold text-slate-900 text-sm uppercase tracking-tight mt-0.5">{step.name}</h5>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#e3eeff] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser for MSME Registration?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert Documentation Support",
                  "Fast Online Processing Round",
                  "Affordable Service Packages",
                  "Business Growth Advisory"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2">
                Beyond digital certificate generation, we provide strategic positioning to help startups and small manufacturing/service units plan their next operational milestones smoothly.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-2 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Complete Corporate Ecosystem
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Business Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Incorporation Services',
                  'GST Registration Support',
                  'Import Export Code Registration',
                  'FSSAI Food Registration',
                  'PAN & TAN Application',
                  'PF & ESI Registration',
                  'Labour Law Compliance Management',
                  'Trademark Registration',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping Services',
                  'Business Advisory Services'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-white transition-all duration-200">
                    • {srv}
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