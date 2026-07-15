import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata?.esiRegistration || {
  title: "ESI Registration Services in India | Fintax Adviser",
  description: "Professional Employees' State Insurance (ESI) Registration Services for startups, MSMEs, and corporate units in India.",
};

export default function ESIRegistrationLanding() {
  const HERO_STATS = [
    "Complete ESIC Setup",
    "Employee Insurance Enrollment",
    "Monthly Contribution Filing",
    "Comprehensive HR & Payroll Sync",
  ];

  const faqs = [
    { 
      q: "What is ESI Registration?", 
      a: "ESI Registration is the process of registering an eligible establishment under the Employees' State Insurance Act, 1948, with the Employees' State Insurance Corporation (ESIC) for providing statutory social security benefits to eligible employees." 
    },
    { 
      q: "Who needs ESI Registration?", 
      a: "Eligibility depends on the type of establishment, employee count, wage criteria, and other provisions under the ESI Act. Businesses should assess their obligations based on the applicable legal framework." 
    },
    { 
      q: "Can startups register under ESI?", 
      a: "Yes. If a startup meets the prescribed applicability criteria under the ESI Act, it may be required to obtain ESI registration." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Typical documents include business registration certificates, PAN, bank details, address proof, employer identity documents, employee information, and other records required by ESIC." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide complete assistance with ESI registration, employee enrollment, payroll integration, compliance support, documentation, and ongoing advisory services, helping businesses manage statutory obligations efficiently." 
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
                ⚡ End-to-End ESI Registration
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                ESI Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Employees' State Insurance (ESI) Registration Services for Businesses. Ensure compliance with the ESI Act, 1948 and provide social security and medical benefits to your employees. We make ESI simple and compliant.
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
            Enable Health, Maternity & Disability Security for Your Workforce
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Safeguarding employees against healthcare liabilities is a fundamental driver for business credibility. ESI registration is a critical statutory labour obligation for eligible Indian businesses under the <strong className="text-slate-800">Employees' State Insurance Act, 1948</strong>, offering a protective financial umbrella covering medical emergencies, sickness, maternity, and temporary/permanent physical injuries.
          </p>
          <div className="pt-4 max-w-2xl mx-auto">
            <span className="text-xs text-slate-400 block italic leading-relaxed">
              Disclaimer: ESI registration is subject to the applicability of the Employees' State Insurance Act, 1948, employee eligibility criteria, wage limits, establishment type, and other statutory conditions.
            </span>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Professional ESI Registration Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We manage end-to-end employer registration, portal coding, individual mapping, and statutory calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ESIC Registration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Employer Registration Setup</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete management of the core application process with the Employees' State Insurance Corporation (ESIC).</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Code Allocation</span>
                <span>✓ Data Verification</span>
                <span>✓ Application Filing</span>
                <span>✓ Legal Review</span>
              </div>
            </div>

            {/* Individual Employee Registration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Employee IP Onboarding</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Register your eligible workers, map family parameters, and generate individual Insurance Numbers (IP).</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ IP Generation</span>
                <span>✓ Profile Upload</span>
                <span>✓ Family Mapping</span>
                <span>✓ Onboarding Docs</span>
              </div>
            </div>

            {/* Monthly Compliance & Payroll Integration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Filing & Sync</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Setup precise salary wage structures to handle deductions and ensure flawless monthly challan filings.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ESI Calculation</span>
                <span>✓ Return Filing</span>
                <span>✓ Challan Payments</span>
                <span>✓ Wage Assessments</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-esi" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of ESI Compliance
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                By ensuring your company aligns perfectly with the ESI framework, you mitigate complex payroll risk and offer state-backed medical assurance policies to your staff.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain business compliance, minimize commercial transaction friction, and ensure healthy medical provisions."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal Protection</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevent legal disputes, fines, and audit complications by establishing timely setups.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Staff Health Welfare</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Provide employees with complete access to network hospitals for full treatment.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Unified Integration</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Easily structure ESI wage caps directly within modern HR management networks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Commercial Standing</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Elevate your chances during massive government bids and corporate projects.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Required Documentation Block */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Documents Generally Required</h2>
            <p className="text-slate-600 text-base">We review and streamline paperwork formatting to prevent application rejection on the ESIC platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-blue-600">1. Business Documents</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Incorporation License / LLP Deed</li>
                <li>• Business PAN Card</li>
                <li>• GST Details (if applicable)</li>
                <li>• Office Location Utility Bill</li>
                <li>• Bank Particulars & Cancelled Cheque</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-blue-600">2. Employer Details</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• PAN of Proprietor/Partners/Directors</li>
                <li>• KYC Aadhaar Credentials</li>
                <li>• Valid ID & Address Proofs</li>
                <li>• DSC (where essential)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-blue-600">3. Employee Parameters</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Date of Onboarding & Wages</li>
                <li>• Aadhaar and Address info</li>
                <li>• Comprehensive Family Records</li>
                <li>• Personal Bank Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors and Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Robust ESI administrative setups structured for multi-sector business entities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups & MSMEs', 'Factories & Manufacturing', 'IT & Software Agencies', 'Hospitals & Medical Clinics', 'Educational Centers', 'Logistics & Warehouses', 'Retailers & Restaurants', 'NGOs & Trusts'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
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
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Labour Law Specialists",
                  "Comprehensive End-to-End ESI Support",
                  "Tailored Client Dedication",
                  "Completely Transparent Progress Setup",
                  "Secure & Confidential Data Safeguard",
                  "Efficient Pan-India Digital Systems"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our ESI Service Workflow</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 – Consultation:</strong> Assessment of employee headcounts and legal wage criteria.</p>
                <p><strong>Step 2 – Applicability Verification:</strong> Legal review under the provisions of the ESI Act, 1948.</p>
                <p><strong>Step 3 – Document Collection:</strong> Verification of key enterprise and worker records.</p>
                <p><strong>Step 4 – ESI Registration:</strong> Final application filing and submission directly on the ESIC portal.</p>
                <p><strong>Step 5 – Integration & Support:</strong> Detailed instructions on monthly payroll calculations and employee IP generation.</p>
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