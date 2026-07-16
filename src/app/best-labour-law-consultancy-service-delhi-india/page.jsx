import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = servicesMetadata.labourLawConsultancy;

export default function LabourLawConsultancyLanding() {
  const HERO_STATS = [
    "Labour Law Registrations",
    "Statutory Return Filings",
    "Ongoing Advisory & Audits",
    "Pan-India Compliance Support",
  ];

  const faqs = [
    { 
      q: "Who needs Labour Law Consultancy Services?", 
      a: "Any business employing workers or staff should seek professional Labour Law Consultancy Services to ensure compliance with applicable labour regulations." 
    },
    { 
      q: "Why should businesses hire a Labour Law Consultant?", 
      a: "A Labour Law Consultant helps businesses manage statutory compliance, avoid legal penalties, maintain proper documentation, and stay updated with changing labour laws." 
    },
    { 
      q: "What are Labour Compliance Services?", 
      a: "Labour Compliance Services include labour law registrations, return filing, documentation, audits, inspections, compliance management, and legal advisory." 
    },
    { 
      q: "Does FinTax Adviser provide Labour Law Consultancy Services across India?", 
      a: "Yes. FinTax Adviser offers Labour Law Consultancy Services in Delhi and provides professional compliance support for businesses across India." 
    },
    { 
      q: "Can startups require Labour Law Compliance?", 
      a: "Yes. Depending on workforce size and business activities, startups may also be required to comply with various labour laws." 
    }
  ];

  const industries = [
    'Startups', 'MSMEs', 'Private Limited Companies', 'LLPs', 
    'Partnership Firms', 'Proprietorship Businesses', 'Manufacturing Companies', 'IT Companies', 
    'Software Firms', 'Construction Companies', 'Healthcare Organisations', 'Educational Institutions', 
    'Retail Businesses', 'Hospitality Industry', 'Logistics Companies', 'Warehousing Businesses', 
    'Contractors', 'Service Providers', 'E-commerce Businesses', 'NGOs'
  ];

  const legislations = [
    "Shops & Establishments Act", "Contract Labour Regulations", "Minimum Wages Compliance", 
    "Payment of Wages Compliance", "Payment of Bonus Act", "Payment of Gratuity Act", 
    "Employee Provident Fund (EPF)", "Employee State Insurance (ESI)", "Maternity Benefit Act", 
    "Equal Remuneration Compliance", "Occupational Safety Requirements", "Labour Welfare Fund Compliance", 
    "Industrial Relations Compliance", "Working Hours Regulations", "Employee Welfare Compliance"
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
                ⚡ Professional · Compliant · Hassle-Free · Secure
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Labour Law Consultancy 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Compliance Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Trusted Labour Law Consultancy Services in Delhi, India for Businesses of All Sizes. Stay 100% compliant with Central and State Government regulations, eliminate legal risks, and build standard operational governance.
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
            Comprehensive Statutory Solutions for Modern Establishments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Running a business involves more than managing operations and employees—it also requires strict compliance with labour laws applicable under Central and State Governments. Whether you operate a startup, MSME, factory, contractor business, or manufacturing unit, complying with labour regulations is essential to avoid legal disputes, financial penalties, and operational interruptions. Our experienced Labour Law Consultants help employers manage end-to-end statutory milestones efficiently.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Expert Labour Law Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Reliable handling of legal registrations, monthly compliance filings, and audit processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Registration Services */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Labour Law Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Simplify and accelerate critical state and central registrations from day one.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Shop & Establishment</span>
                <span>✓ Contractor Licence</span>
                <span>✓ Principal Employer</span>
                <span>✓ Professional Tax</span>
                <span>✓ Factory Registration</span>
                <span>✓ Labour Welfare Fund</span>
              </div>
            </div>

            {/* Ongoing Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ongoing Compliance Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Execution of recurring daily, monthly, and annual legal compliance filing records.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Monthly Filing Return</span>
                <span>✓ Wage Registers</span>
                <span>✓ Attendance Records</span>
                <span>✓ Compliance Calendar</span>
                <span>✓ Annual Returns</span>
                <span>✓ Inspection Support</span>
              </div>
            </div>

            {/* Legal Advisory & Audits */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Audit & Advisory Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structure robust employment policies, audit HR records, and secure legal safety nets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ HR Policy Drafting</span>
                <span>✓ Employment Contracts</span>
                <span>✓ Payroll Compliance</span>
                <span>✓ Statutory Audit</span>
                <span>✓ Risk Assessment</span>
                <span>✓ Exit Strategy Advice</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Acts & Legislations Covered Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Labour Laws Covered Under Our Services
            </h2>
            <p className="text-slate-500 text-base mt-2">
              Our legal experts ensure complete coverage and advisory under all standard Central and State labour acts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {legislations.map((leg, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-300 transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{leg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-compliance" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Hiring a Professional Consultant
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Navigating complex regulatory frameworks requires dedicated expertise. Partnering with professional consultants shields your company from operational vulnerabilities.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain 100% compliance, avoid heavy department fines, and preserve your corporate reputation."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Lower Legal Risks</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Identify compliance gaps early to proactively protect against regulatory filings disputes.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Perfect Documentation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Generate pristine, compliant salary ledgers, registers, and staff files on demand.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Better Workplace Governance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Structure transparent policy models that naturally foster healthy employee relations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Filing Schedule Management</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Never miss statutory return deadlines, ensuring an clean operating track record.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve Across India
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {industries.map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Process Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose FinTax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Labour Law Consultants",
                  "Professional Compliance Auditing",
                  "End-to-End Register Handling",
                  "Industry-Specific Solutions",
                  "PAN India Operational Support",
                  "Dedicated Accounts Manager"
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

            {/* Right Box: Process Tracking */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Requirement Assessment:</strong> Pinpointing specific act obligations based on workspace and workforce details.</p>
                <p><strong>Step 2 - Safe Document Gathering:</strong> Secure collection of initial establishment records and certifications.</p>
                <p><strong>Step 3 - Setup & Onboarding:</strong> Deploying compliance tracking, drafting missing registers, and setting up filing calendars.</p>
                <p><strong>Step 4 - On-time Management & Support:</strong> Managing monthly filings, record-keeping, and continuous advisory updates.</p>
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