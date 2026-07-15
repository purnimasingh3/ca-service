import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.companyValuationStartups;

export default function CompanyValuationLanding() {
  const HERO_STATS = [
    "Independent Valuation Reports",
    "Fair Market Value (FMV)",
    "ESOP & Regulatory Valuation",
    "Investor & Funding Support",
  ];

  const faqs = [
    { 
      q: "What is Company Valuation for Startups?", 
      a: "Company Valuation is the process of determining the fair economic value of a startup based on its financial performance, business model, assets, liabilities, market position, future growth potential, and industry benchmarks." 
    },
    { 
      q: "Why do startups need a valuation report?", 
      a: "Startups require valuation reports for fundraising, investor negotiations, ESOP implementation, share allotment, mergers and acquisitions, regulatory compliance, financial planning, and strategic decision-making." 
    },
    { 
      q: "Which valuation methods are used for startups?", 
      a: "Depending on the business, valuation may be conducted using methods such as the Discounted Cash Flow (DCF) Method, Comparable Company Analysis, Net Asset Value (NAV) Method, Market Approach, or other recognised valuation methodologies." 
    },
    { 
      q: "Can FinTax Adviser provide valuation reports for fundraising?", 
      a: "Yes. We prepare professional Startup Valuation Reports that help founders negotiate confidently with angel investors, venture capital firms, private equity investors, and other stakeholders." 
    },
    { 
      q: "Do you provide Company Valuation Services across India?", 
      a: "Yes. FinTax Adviser offers professional Company Valuation Services for Startups in Delhi, India, while serving startups, entrepreneurs, investors, and businesses across India." 
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
                ⚡ Professional · Compliant · Defensible · Growth-Oriented
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Company Valuation for Startups
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert Company Valuation Services for Startups in Delhi, India. Obtain reliable, defensible, and compliant reports to back fundraising, negotiate with investors, issue ESOPs, and meet corporate law requirements.
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
            Accurate, Compliant & Strategic Valuation Advisory Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Determining the true value of a startup is one of the most important aspects of building and scaling a successful business. Whether you are raising funds, issuing ESOPs, bringing in new shareholders, planning a merger/acquisition, or complying with regulatory requirements, our experienced Business Valuation Consultants provide end-to-end guidance to establish realistic, justifiable, and fully compliant business values.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Core Company Valuation Offerings
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Recognized valuation methodologies designed specifically for modern startups, LLPs, and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Startup Business Valuation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Startup Business Valuation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluating unique startup metrics, future growth potential, and industry benchmarks to determine actual business worth.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Business Worth</span>
                <span>✓ Financial Modeling</span>
                <span>✓ Pre/Post Money</span>
                <span>✓ Independent Report</span>
              </div>
            </div>

            {/* Card 2: Share & Equity Valuation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Share & Equity Valuation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Determining correct share pricing models for seamless equity allocation, onboarding investors, or restructuring corporate entities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Equity Valuation</span>
                <span>✓ FMV Assessment</span>
                <span>✓ Share Price Set</span>
                <span>✓ Investor Share Val</span>
              </div>
            </div>

            {/* Card 3: ESOP & Regulatory Valuation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ESOP & Regulatory Valuation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Legally compliant certificates tailored to meet the Companies Act, Income Tax Rules, FEMA guidelines, and ESOP schemes.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ESOP Valuation</span>
                <span>✓ FMV Certificate</span>
                <span>✓ Income Tax Val</span>
                <span>✓ FEMA & MCA Compliance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-valuation" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Professional Startup Valuation
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Determining a transparent valuation helps founders protect equity equity shares from deep dilution, builds solid investment credibility, and ensures smooth legal structuring with statutory agencies.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure bulletproof investor negotiations and stay regulatory compliant with professional, data-backed reports."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Fundraising Power</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Negotiate with high-net-worth investors and venture capitalists backed by robust financial models.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Fair Share Issuance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Maintain healthy cap tables and clear shareholding patterns with fair equity assessments.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Regulatory Compliance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid queries or tax notices by securing certified valuations under active Indian tax provisions.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">ESOP Performance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Establish transparent employee equity structures to securely attract and retain key resources.</p>
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
              Sectors and Corporate Structures We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing certified business valuations across key commercial landscapes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm sm:text-sm font-bold text-slate-700">
            {['Tech Startups', 'SaaS Businesses', 'FinTech Verticals', 'E-commerce Giants', 'Private Ltd Companies', 'LLPs & MSMEs', 'Healthcare Startups', 'Manufacturing Ventures'].map((sector) => (
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
                  "Experienced Business Valuation Consultants",
                  "Startup-Focused Valuation Expertise",
                  "Accurate & Independent Valuation Reports",
                  "Fair Market Value (FMV) Assessment",
                  "Investor & Fundraising Support",
                  "Regulatory Compliance Assistance"
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
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Documents Required</h3>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500">
                  <span>✓ Incorporation Certificate</span>
                  <span>✓ Cap Table / Shareholding Pattern</span>
                  <span>✓ Financial Projections</span>
                  <span>✓ MOA & AOA Records</span>
                  <span>✓ Historical Balance Sheets</span>
                  <span>✓ Projected Business Plan</span>
                </div>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong>Step 1 - Business Discovery:</strong> Reviewing specific cap tables, historical assets, and requirements.</p>
                  <p><strong>Step 2 - Document Gathering:</strong> Organizing audited statements, forecasts, and capitalization metrics.</p>
                  <p><strong>Step 3 - Selection of Methodology:</strong> Assessing DCF, comparable companies, or Net Asset Value techniques.</p>
                  <p><strong>Step 4 - Valuation Draft & Final Report:</strong> Compiling defensible calculations into a certified valuation asset.</p>
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