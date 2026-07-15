import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export default function StartupLegalServicesLanding() {
  const HERO_STATS = [
    "Business Legal Consultancy",
    "Startup Legal Compliance",
    "Legal Documentation & Contracts",
    "Intellectual Property Protection",
  ];

  const faqs = [
    { 
      q: "Why do startups need professional legal services?", 
      a: "Professional Legal Services for Startups help businesses prepare legal documents, maintain regulatory compliance, protect intellectual property, manage contracts, reduce legal risks, and support business growth." 
    },
    { 
      q: "What legal services do startups usually require?", 
      a: "Startups commonly require company incorporation, legal documentation, shareholder agreements, founder agreements, employment contracts, trademark registration, regulatory compliance, legal advisory, and business contract drafting." 
    },
    { 
      q: "Can startups outsource their legal compliance?", 
      a: "Yes. Outsourcing legal compliance to experienced professionals helps startups save time, reduce legal risks, and ensure continuous compliance with applicable regulations." 
    },
    { 
      q: "Does FinTax Adviser provide legal documentation services?", 
      a: "Yes. We provide comprehensive legal documentation, including Founder Agreements, Shareholder Agreements, Employment Agreements, NDAs, Commercial Contracts, Vendor Agreements, Privacy Policies, Terms & Conditions, and other business legal documents." 
    },
    { 
      q: "Do you provide Startup Legal Services across India?", 
      a: "Yes. FinTax Adviser provides professional Legal Services for Startups in Delhi, India, while assisting startups and businesses across India with legal documentation, compliance, corporate advisory, and ongoing legal support." 
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Protect · Draft · Comply · Scale
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Expert Legal Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  for Startups in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                End-to-end legal solutions for entrepreneurs, founders, private limited companies, LLPs, and MSMEs. Establish a strong framework, protect intellectual property, and minimize regulatory compliance risks.
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
            Building a Strong Legal Foundation for Sustainable Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Building a successful startup involves much more than developing innovative products or securing investment. Every startup must comply with numerous legal requirements from the very beginning. Many ventures face legal challenges due to incomplete documentation, poorly drafted contracts, and non-compliance with statutory regulations. Having access to experienced legal professionals helps startups identify legal risks early and establish a safe structure for expansion.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Comprehensive Startup Legal Frameworks
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Practical, business-oriented strategies configured across essential corporate legal verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Business Legal Documentation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Legal Documentation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Strong agreements protect the long-term economic and operational interests of company co-founders.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Founder Agreements</span>
                <span>✓ NDAs & IP Assigments</span>
                <span>✓ Vendor Contracts</span>
                <span>✓ Privacy Policies</span>
              </div>
            </div>

            {/* Startup Legal Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Startup Legal Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic oversight handling your ongoing regulatory updates and secretarial filings seamlessly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ROC & MCA Filings</span>
                <span>✓ Secretarial Auditing</span>
                <span>✓ Legal Risk Audits</span>
                <span>✓ Compliance Mgmt</span>
              </div>
            </div>

            {/* Corporate Legal Advisory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Legal Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Actionable legal advisory insights for making high-stake strategic decisions with total security.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Corporate Governance</span>
                <span>✓ Legal Opinions</span>
                <span>✓ Commercial Consultation</span>
                <span>✓ Expansion Advisory</span>
              </div>
            </div>

            {/* Intellectual Property Protection */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Intellectual Property Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Defend your unique tech stacks, brand value, and market ideas from unauthorized copies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Trademarks Filing</span>
                <span>✓ Copyright Filings</span>
                <span>✓ Patent Advisory</span>
                <span>✓ IP Objection Replies</span>
              </div>
            </div>

            {/* Employment & HR Legal Services */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Employment & HR Legal Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Establish clear internal hiring parameters while complying with state-level labor directives.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Employment Contracts</span>
                <span>✓ HR Handbooks & Policies</span>
                <span>✓ Non-Compete Clauses</span>
                <span>✓ Labor Law Advisory</span>
              </div>
            </div>

            {/* Startup Funding & Investors Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Legal Support for Startup Funding</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Navigate advanced investment stages without compromising founder dilution thresholds.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Share Subscription</span>
                <span>✓ Term Sheet Review</span>
                <span>✓ Due Diligence Support</span>
                <span>✓ Equity Structuring</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-legal" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Strategic Advantages of Professional Legal Setup
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Proactive legal execution addresses operational friction early on, laying out clear provisions that protect business assets and elevate investor confidence.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Mitigate corporate risk structures early and protect your proprietary innovations reliably."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Dispute Prevention</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid costly co-founder splits or merchant stand-offs through pristine initial contract structuring.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Investor-Ready Metrics</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Clean compliance pipelines help scale valuation metrics fast during intensive due diligence rounds.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">IP Safeguards</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Lock down your core digital trademarks, design elements, and patent parameters securely.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Statutory Defenses</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Insulate the main enterprise from unexpected regulatory liabilities or operational penalty risks.</p>
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
              Ecosystem Entities We Represent
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing legal clarity across highly diverse corporate domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Private Limited Companies', 'Limited Liability Partnerships', 'Tech Startups & SaaS', 'FinTech Platforms', 'E-commerce Marketplaces', 'One Person Companies', 'VC-Funded Ventures', 'Growing MSMEs'].map((sector) => (
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

            {/* Left Box: Why Choose FinTax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Startup Consultants",
                  "End-to-End Corporate Legal Services",
                  "Customized Contract Frameworks",
                  "Highly Transparent Pricing Models",
                  "Rapid Execution & Turnaround",
                  "Complete Information Confidentiality"
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

            {/* Right Box: Documents Required / Process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Baseline Onboarding Documents</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p>• Certificate of Incorporation / LLP Agreements</p>
                <p>• Corporate PAN & MOA / AOA Governing Charters</p>
                <p>• Directors & Founding Members KYC Documents</p>
                <p>• Existing Merchant Contracts or Asset Documents</p>
                <p>• Registered Business Address Proof & GST Details</p>
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