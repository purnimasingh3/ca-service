import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.startupConsultancy;

export default function StartupConsultancyLanding() {
  const HERO_STATS = [
    "Company Registration",
    "Startup India Registration",
    "Financial & Tax Planning",
    "Legal Documentation & Strategy",
  ];

  const faqs = [
    { 
      q: "What are Startup Consultancy Services?", 
      a: "Startup Consultancy Services are professional advisory solutions designed to help entrepreneurs establish, manage, and grow their businesses efficiently. These services cover every stage of the startup lifecycle, from business idea validation and company registration to taxation, legal compliance, financial planning, investor readiness, business strategy, and expansion planning." 
    },
    { 
      q: "Why should startups hire a Startup Consultant?", 
      a: "A Startup Consultant helps founders avoid costly mistakes, maintain regulatory compliance, improve financial planning, prepare for fundraising, and build a strong business foundation for long-term success." 
    },
    { 
      q: "What services are included in Startup Consultancy?", 
      a: "Startup Consultancy generally includes business registration, Startup India registration, GST registration, accounting, taxation, legal documentation, compliance management, business planning, financial modelling, company valuation, fundraising support, and strategic business advisory." 
    },
    { 
      q: "Can FinTax Adviser help with Startup India Registration and compliance?", 
      a: "Yes. We provide complete support for Startup India Registration, company incorporation, GST registration, ROC compliance, taxation, accounting, legal documentation, and ongoing startup compliance services." 
    },
    { 
      q: "Do you provide Startup Consultancy Services across India?", 
      a: "Yes. FinTax Adviser offers professional Startup Consultancy Services in Delhi, India, while assisting entrepreneurs, startups, and businesses across India with complete legal, financial, taxation, compliance, and business advisory solutions." 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Launch · Comply · Finance · Scale
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Startup Consultancy Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert Startup Consultancy Services in Delhi, India. From registration &amp; tax setup to legal document drafts, virtual CFO support, and investor fundraising readiness—all under one roof.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
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
            Comprehensive Advisory Solutions for Budding Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Launching a venture involves critical financial, legal, operational, and strategic steps. Our Startup Business Consultants provide tailored strategies, helping you handle complex company structures, setup tax compliances, secure legal agreements, and coordinate successful funding runs while prioritizing structural scaling.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our End-to-End Startup Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Covering every stage of the startup lifecycle, from ideation and legal formation to growth strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Registration & Advisory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registration & Setup</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Guiding founders through the optimal legal entity selections, state licenses, and statutory tax requirements.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Private Limited</span>
                <span>✓ LLP & OPC Setup</span>
                <span>✓ Startup India Registration</span>
                <span>✓ PAN, TAN & GST</span>
              </div>
            </div>

            {/* Card 2: Financial & Tax Consultancy */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial & Tax Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Robust ledger practices, bookkeeping, GST processing, compliance schedules, and scalable CFO level guidance.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Virtual CFO</span>
                <span>✓ Bookkeeping & MIS</span>
                <span>✓ GST/TDS Filings</span>
                <span>✓ Budgeting & Tax Planning</span>
              </div>
            </div>

            {/* Card 3: Legal, IP & Fundraising */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Legal, IP & Fundraising</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert drafts for structural contracts alongside pitch deck advice, financial modeling, and company valuations for fundraising rounds.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ NDA & Founders Agreement</span>
                <span>✓ Trademark Setup</span>
                <span>✓ Investor Readiness</span>
                <span>✓ Pitch Deck Advisory</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-consultancy" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Specialized Consulting
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Navigating complex corporate laws requires reliable, specialized insights. Professional consultancy enables startups to focus on key innovations while experienced advisors handle back-end administration.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Streamline compliance, save operational costs, and access institutional capital faster with expert business mentors."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Expert Guidance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Secure reliable paths through corporate frameworks, taxation laws, and legal drafting.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Swift Company Launch</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid unnecessary regulatory loops and complete key business registrations within target timelines.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Investor Preparedness</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Draft structured cap tables, exact valuation models, and convincing pitch projections.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Proactive Risk Check</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Ensure operations comply with updated labor laws, tax regimes, and MCA standards.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sectors Served Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors and Verticals We Strategically Consult
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable startup advisory across multi-domain ecosystems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm sm:text-sm font-bold text-slate-700">
            {['Tech & SaaS Startups', 'FinTech Innovators', 'E-commerce Portals', 'Manufacturing Units', 'Healthcare Ventures', 'Service Organizations', 'Digital Agencies', 'Growing MSMEs'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer Block */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Startup Business Consultants",
                  "End-to-End Multi-Disciplinary Solutions",
                  "Chartered Accountant & Legal Support",
                  "Fundraising & Investor Readiness Advisory",
                  "Dedicated Relationship Manager Setup",
                  "Affordable Fees & Structured Delivery"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Documents & Process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Onboarding Checklist</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500">
                  <span>✓ Promoters PAN & Aadhaar Cards</span>
                  <span>✓ Address Proofs (Business Premises)</span>
                  <span>✓ Certificate of Incorporation (if active)</span>
                  <span>✓ Existing Cap Table Records</span>
                  <span>✓ Partnership Deeds / Agreements</span>
                  <span>✓ Detailed Business Plan Brief</span>
                </div>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong>Step 1 - Strategy Consultation:</strong> Assessing core objectives and choosing ideal corporate frameworks.</p>
                  <p><strong>Step 2 - Incorporation & Licensing:</strong> Managing applications under MCA, GST, MSME, and Startup India.</p>
                  <p><strong>Step 3 - Systems Setup & Compliance:</strong> Instituting structural bookkeeping systems, legal agreements, and corporate tax schedules.</p>
                  <p><strong>Step 4 - Strategic Advisory Support:</strong> Guiding strategic expansion, valuation tracks, and investment initiatives.</p>
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
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}