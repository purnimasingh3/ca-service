import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.valuationCertificate || {
  title: "Professional Business & Share Valuation Certificate Services in India | Fintax Adviser",
  description: "Get a professional Valuation Certificate for your startup, company, shares or business assets for fundraising, compliance and strategic transactions.",
};

export default function ValuationServicesLanding() {
  const HERO_STATS = [
    "Qualified & Experienced Team",
    "Globally Accepted Methods",
    "Funding Support (Angel, VC, PE)",
    "Secure & Confidential Process",
  ];

  const faqs = [
    { q: "What is a Valuation Certificate?", a: "A professional report that determines the fair value of shares, securities, or a business." },
    { q: "Is valuation required for startup funding?", a: "Yes, valuation is commonly required during fundraising and investment transactions." },
    { q: "Who can obtain a valuation certificate?", a: "Startups, companies, LLPs, investors, and businesses involved in financial transactions." },
    { q: "Is valuation necessary for foreign investment?", a: "Many foreign investment transactions require valuation for compliance purposes." },
    { q: "How long does the valuation process take?", a: "The timeline depends on business size, documentation, and transaction complexity." },
    { q: "Why choose Fintax Adviser?", a: "We provide professional valuation support, documentation assistance, and compliance guidance for startups, investors, and businesses across India." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ ACCURATE VALUATION | TRUSTED REPORTS | CONFIDENT DECISIONS
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Valuation Certificate
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get a professional Valuation Certificate for your startup, company, shares or business assets for fundraising, compliance and strategic transactions.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get Accurate Valuation Certificates for Startups, Companies & Investors
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-4">
            <p>
              A Valuation Certificate is an essential document used to determine the fair value of a company's shares, business, assets, or securities. Whether you are raising investment, issuing shares, transferring ownership, or ensuring compliance with regulatory requirements, a professionally prepared valuation report helps establish the true value of your business.
            </p>
            <p>
              <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides expert Valuation Certificate services for startups, private limited companies, investors, LLPs, and growing businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">What is a Valuation Certificate?</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A Valuation Certificate is a professional report prepared using recognized valuation methods to determine the fair market value of a company, its shares, or business assets.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                It is commonly required for fundraising, share allotments, VC investments, cross-border corporate actions, and absolute regulatory compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-[#071c3d]">Common Operational Use Cases</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <ul className="text-base text-slate-600 space-y-2">
                <li>• Startup Fundraising & Angel/VC Investments</li>
                <li>• Share Allotment & Share Transfers</li>
                <li>• FEMA & Income Tax Compliance</li>
                <li>• Mergers, Acquisitions & Restructuring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Valuation Provided Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Types of Valuation Services
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Using globally recognized valuation techniques customized to your specific transactional blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Startup Valuation</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Valuation for angel funding, seed funding, and venture capital investments.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Fundraising • Angel Rounds</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Share Valuation</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Valuation of equity shares, preference shares, and ownership interests securely.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Equity • Share Transfers</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business Valuation</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Assessment of overall enterprise value for corporate acquisitions or legal restructuring parameters.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Enterprise Value • M&A</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">FEMA Valuation</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Valuation support configured for foreign investment transactions and cross-border regulatory deals.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">FEMA • Foreign Investment</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tax Compliance Valuation</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">Valuation reports perfectly compliant and required for absolute income taxation purposes.</p>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">Income Tax • Regulatory</span>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-slate-100 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl">
                Why is a Valuation Certificate Important?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Determining fair valuation structure builds institutional defense patterns, protects primary shareholder groups, and ensures legal transactional safety.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-sm font-semibold text-blue-600 leading-relaxed">
                  "Build legal credibility, accurately justify pricing frameworks during fund-raising parameters, and unlock growth milestones confidently."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Regulatory Compliance", desc: "Supports absolute compliance under corporate, tax, and cross-border investment laws." },
                { title: "Fundraising Support", desc: "Helps early-stage startups transparently justify their enterprise value during investment rounds." },
                { title: "Fair Share Pricing", desc: "Determines the appropriate mathematical issue or transfer price of equity shares." },
                { title: "Investor Confidence", desc: "Provides high-tier transparency and corporate credibility during complex transactions." },
                { title: "Business Decisions", desc: "Assists core promoters and active institutional stakeholders in strategic planning routes." }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 border border-slate-200 bg-slate-200 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-base uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-md text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Needs a Valuation Certificate?
            </h2>
            <p className="text-sm sm:text-base text-slate-500">Delivering structural evaluation architectures across multi-tier corporate portfolios.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-base font-bold text-slate-700">
            {[
              "Startups", "Private Limited Companies", "LLPs", "Investors & Founders",
              "Foreign Investors", "MSMEs", "Angel-Funded Companies",
              "Venture Capital Backed Businesses", "Companies Planning M&A"
            ].map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-500 transition-colors flex items-center justify-center">
                <span className="text-blue-700 block text-base md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for Valuation Certificate
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A clear legal check-list to verify business footprints and prepare analytical valuation datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Corporate Proofs</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-start gap-2">✔ Certificate of Incorporation</li>
                <li className="flex items-center gap-2">✔ PAN Card</li>
                <li className="flex items-center gap-2">✔ GST Registration (if applicable)</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Financial Records</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-center gap-2">✔ Financial Statements</li>
                <li className="flex items-start gap-2">✔ Bank Statements</li>
                <li className="flex items-start gap-2">✔ Shareholding Pattern</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Future Projections</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-start gap-2">✔ Comprehensive Business Plan</li>
                <li className="flex items-start gap-2">✔ Revenue Projections</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Historical Records</h3>
              <ul className="text-slate-700 text-base space-y-2.5 font-medium">
                <li className="flex items-center gap-2">✔ Investor Information</li>
                <li className="flex items-center gap-2">✔ Previous Valuation Reports (if available)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Structured Valuation Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A systematic 6-step roadmap built to secure globally compliant, certified reports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { step: 1, title: "Consultation", desc: "Understanding the primary purpose, transactional background, and scope of valuation." },
              { step: 2, title: "Document Review", desc: "Rigorous collection, secure verification, and deep structural check of datasets." },
              { step: 3, title: "Financial Assessment", desc: "Detailed mathematical evaluation of financial statements and revenue metrics." },
              { step: 4, title: "Methodology", desc: "Application of suitable, globally recognized corporate valuation techniques." },
              { step: 5, title: "Report Preparation", desc: "Drafting of an accurate, highly thorough professional valuation report." },
              { step: 6, title: "Certificate Delivery", desc: "Final secure delivery and legal verification issuance of your certificate." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Benefits of Professional Valuation Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Fair Market Value Assessment", "Better Fundraising Preparation",
              "Regulatory Compliance Support", "Investor Transparency",
              "Professional Documentation", "Strategic Business Insights",
              "Reduced Transaction Risks", "Enhanced Business Credibility"
            ].map((benefit, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold text-lg">✓</span>
                <span className="text-slate-800 text-base font-semibold leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Trust Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-500 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Professionals",
                  "Startup & Investor Focused",
                  "Accurate Reporting Layouts",
                  "Affordable Pricing Metrics",
                  "Pan India Online Services",
                  "End-to-End Assistance"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-slate-200 border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-base font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-md text-blue-500 leading-relaxed pt-4 border-t border-slate-800 max-w-lg">
                Trusted by high-growth startups, private limited entities, and institutional capital providers across India. Backed by corporate advisors and financial compliance managers.
              </p>
            </div>

            <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20 inline-block">
                  Corporate Hub
                </span>
                <h3 className="text-2xl font-black text-white mt-3">Fintax Adviser Network</h3>
              </div>
              <div className="space-y-4 text-base text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Contact Channel</span>
                  <span className="font-bold text-white">+91 8750 8750 63</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Digital Support</span>
                  <span className="font-bold text-white">info@fintaxadviser.com</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400 font-medium">Operational Scope</span>
                  <span className="font-bold text-white">Pan-India Virtual Processing</span>
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">Your Trusted Partner for Financial Valuation</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}