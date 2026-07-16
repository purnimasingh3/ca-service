import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.epfRegistration || {
  title: "EPF Registration Services in India | Fintax Adviser",
  description: "Professional Employees' Provident Fund (EPF) Registration Services for Startups, MSMEs, and Corporate Businesses in India.",
};

export default function EPFRegistrationLanding() {
  const HERO_STATS = [
    "UAN & Employee Onboarding",
    "Payroll Integration Support",
    "Monthly Compliance & Return Filing",
    "Expert Labour Law Consulting",
  ];

  const faqs = [
    { 
      q: "What is EPF Registration?", 
      a: "EPF Registration is the process of registering an eligible establishment with the Employees' Provident Fund Organisation (EPFO) to comply with the Employees' Provident Funds and Miscellaneous Provisions Act, 1952." 
    },
    { 
      q: "Who needs EPF Registration?", 
      a: "Eligibility depends on the provisions of the EPF Act, employee strength, and other statutory requirements. Businesses should evaluate their obligations based on the applicable law." 
    },
    { 
      q: "Can startups apply for EPF Registration?", 
      a: "Yes. Startups meeting the applicable eligibility conditions, or those opting for voluntary registration where permitted, may register under EPF." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Common documents include business registration certificates, PAN, bank details, address proof, employer identity documents, employee information, and other records as required by the EPFO." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide comprehensive assistance with EPF registration, payroll integration, employee onboarding, documentation, monthly compliance, and labour law advisory, helping businesses maintain statutory compliance with confidence." 
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
                ⚡ Complete EPF Registration Support
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                EPF Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Employees' Provident Fund (EPF) Registration Services for Businesses. Ensure compliance with the EPF Act, 1952 and help your employees build a secure future. We make EPF registration simple, accurate, and hassle-free.
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
            Compliant & Employee-Friendly Workforce Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Building a compliant organization starts with fulfilling statutory obligations. One of the most important labour law compliances for eligible establishments in India is Employees' Provident Fund (EPF) Registration. EPF helps employees build long-term retirement savings while ensuring employers comply with the provisions of the <strong className="text-slate-800">Employees' Provident Funds and Miscellaneous Provisions Act, 1952</strong>.
          </p>
          <div className="pt-4 max-w-2xl mx-auto">
            <span className="text-xs text-slate-400 block italic leading-relaxed">
              Disclaimer: EPF registration requirements depend on the applicability of the EPF Act, employee strength, and other statutory conditions. Certain establishments may also choose voluntary registration where permitted by law.
            </span>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Comprehensive EPF Registration & Advisory Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end setup, employee mapping, compliance, and monthly filing workflows managed by payroll experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* EPF Registration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">EPF Registration & Setup</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete management of your application from eligibility review to official portal code generation.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Profile Verification</span>
                <span>✓ Portal Enrollment</span>
                <span>✓ Applicability Audit</span>
                <span>✓ Statutory Mapping</span>
              </div>
            </div>

            {/* Employee Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">UAN & Employee Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Seamlessly onboard employees on the EPFO dashboard and resolve Universal Account Number issues.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ UAN Generation</span>
                <span>✓ KYC Verification</span>
                <span>✓ Exit Compliance</span>
                <span>✓ Member Migration</span>
              </div>
            </div>

            {/* Monthly Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Filing & Payroll</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Calculate monthly contributions correctly and run smooth monthly challan filings.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ ECR Generation</span>
                <span>✓ Challan Verification</span>
                <span>✓ Payroll Deduction</span>
                <span>✓ Return Submission</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-epf" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why EPF Registration is Vital
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                EPF is a highly structured scheme administered by the EPFO. Ensuring proper registration protects businesses from statutory fines and builds workforce confidence.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Build employee security, attract premium talent, and protect your company against severe statutory penalties."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Labour Law Compliance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid legal liabilities by strictly abiding by the provisions of the EPF Act.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Financial Security</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Enables structured, long-term retirement savings with tax-free growth advantages.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Employer Reputation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Firms implementing provident fund benefits demonstrate high social credibility.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Workforce Retention</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Statutory security policies positively affect general employee retention metrics.</p>
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
            <p className="text-slate-600 text-base">To secure seamless EPF enrollment, we help you prepare and organize your complete document profile.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-blue-600">1. Business Documents</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Certificate of Incorporation / Registration</li>
                <li>• Company PAN Card</li>
                <li>• GST Registration (if applicable)</li>
                <li>• Business Address Proof</li>
                <li>• Bank Details & Cancelled Cheque</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-blue-600">2. Employer Documents</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• PAN of Proprietor/Partners/Directors</li>
                <li>• Aadhaar Card Details</li>
                <li>• Address and Identity Proof</li>
                <li>• DSC (Digital Signature Certificate)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-lg text-blue-600">3. Employee Information</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Date of Joining & Designation</li>
                <li>• PAN, Aadhaar and Contact Info</li>
                <li>• Detailed Salary Structure</li>
                <li>• Personal Bank Account Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors and Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Reliable compliance management for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups & MSMEs', 'Private Limited Companies', 'Manufacturing Units', 'IT & Software Firms', 'Healthcare & Hospitals', 'Educational Institutions', 'NGOs & Trusts', 'Retail & Hospitality'].map((sector) => (
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
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Compliance Experts",
                  "Comprehensive End-to-End Support",
                  "Customized Business Solutions",
                  "Highly Secure Data Handling",
                  "Transparent Direct Communication",
                  "Dedicated Pan-India Support Services"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">EPF Registration Workflow</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Mapping out business size and EPFO requirements.</p>
                <p><strong>Step 2 - Applicability Assessment:</strong> Validating compliance criteria based on legal frameworks.</p>
                <p><strong>Step 3 - Document Verification:</strong> Checking accuracy of KYC and corporate address proofs.</p>
                <p><strong>Step 4 - Registration Submission:</strong> Filing official forms directly with EPFO.</p>
                <p><strong>Step 5 - Post-Registration Integration:</strong> Assisting in monthly return layouts and configurations.</p>
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