import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata hook referencing your configurations
export const metadata = servicesMetadata.professionalTaxRegistration || {
  title: "Professional Tax Registration Services in India | Fintax Adviser",
  description: "Ensure state compliance with ease. Expert CA support for Professional Tax registration, enrollment, and monthly payroll deductions compliance."
};

export default function ProfessionalTaxLanding() {
  const HERO_STATS = [
    "State Compliance Assured",
    "Timely Registration Delivery",
    "Hassle-Free Documentation",
    "Expert CA & Advisory Support",
  ];

  const faqs = [
    { 
      q: "What is Professional Tax?", 
      a: "Professional Tax (PT) is a state-level tax levied by certain State Governments on individuals earning income through employment, profession, trade, or business. The applicability, registration requirements, tax rates, filing frequency, and compliance obligations vary from state to state." 
    },
    { 
      q: "Who needs Professional Tax Registration?", 
      a: "Employers, businesses, and certain professionals may be required to register or enroll under Professional Tax laws depending on the applicable state legislation. Employers are responsible for deducting PT from eligible salaries." 
    },
    { 
      q: "Is Professional Tax applicable in every state?", 
      a: "No. Professional Tax is governed by state laws, and applicability differs from one state to another. Some states levy Professional Tax, while others do not." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Common documents include business registration certificates (COI, Partnership Deed), PAN, address proof, employee list, salary/payroll records, identity documents, and bank account details. The exact requirements depend on the relevant authority." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide professional assistance with Professional Tax registration, documentation, payroll integration, compliance guidance, and ongoing support, helping businesses meet their statutory obligations efficiently." 
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
                ⚡ Stay Compliant · Deduct & Deposit · Avoid Penalties
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Professional Tax Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Compliance Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Tax (PT) registration services for Businesses, Employers & Professionals. Ensure complete alignment with state regulations, implement precise payroll integration, and mitigate non-compliance risks effortlessly.
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
            Comprehensive Professional Tax Management for Modern Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Businesses operating in certain Indian states are required to obtain Professional Tax (PT) Registration under applicable state laws. Employers are generally responsible for deducting PT from eligible employees' salaries and depositing it with respective State Governments. Our dedicated team of Chartered Accountants and compliance specialists simplifies the registration and management journey seamlessly.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Core Professional Tax Offerings
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end enrollment, statutory mapping, payroll tracking, and advisory under one umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Registration & Consultation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registration & Consultation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Evaluating operational footprints, eligibility parameters, and compiling documentation mapping.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ State Applicability</span>
                <span>✓ Documentation Review</span>
                <span>✓ Application Tracking</span>
                <span>✓ PT Enrollment</span>
              </div>
            </div>

            {/* Employer Compliance & Payroll */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll & Employer Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Integrating state tax parameters efficiently into structural monthly processing pipelines.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Payroll Configuration</span>
                <span>✓ Salary Structures</span>
                <span>✓ Deduction Checks</span>
                <span>✓ Record Maintenance</span>
              </div>
            </div>

            {/* Returns & Advisory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Returns & Advisory Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Handling direct reporting timelines, state filings, updates, and cross-border expansions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Return Preparation</span>
                <span>✓ Compliance Review</span>
                <span>✓ Best Practices</span>
                <span>✓ Multi-state Strategy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-pt" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Professional Tax Registration
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Securing a timely Professional Tax registration fulfills state legal mandates, protects employers from administrative friction, and stabilizes employee payroll systems.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain organized payroll lines, protect your company from penalties, and build regulatory credibility."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal Compliance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Fully satisfy respective state legislation frameworks governing commercial activities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Accurate Deductions</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Systematically track eligible salary brackets and complete safe monthly transactions.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Avoid Penalties</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevent long-term financial liabilities and prosecution risks related to missing timelines.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Enhanced Credibility</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Strengthen commercial verification criteria during corporate procurement audits.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mandatory Documents Grid Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Documents Generally Required
            </h2>
            <p className="text-sm text-slate-500 mt-1">Basic compilation parameters required for filing application profiles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-700">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 uppercase tracking-wider text-xs">Business Proofs</h4>
              <ul className="space-y-2">
                <li>• Certificate of Incorporation / Partnership Deed</li>
                <li>• LLP Agreement / Shop & Establishment Certificate</li>
                <li>• Business PAN & TAN Details</li>
                <li>• Authorized Address Proof Documents</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 uppercase tracking-wider text-xs">Identity Records</h4>
              <ul className="space-y-2">
                <li>• PAN Cards of Proprietor/Partners/Directors</li>
                <li>• Aadhaar Link Verification</li>
                <li>• Personal Address Proof Assets</li>
                <li>• Authorization Letters & Signatures</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 uppercase tracking-wider text-xs">Employee Analytics</h4>
              <ul className="space-y-2">
                <li>• Comprehensive Employee Structural Lists</li>
                <li>• Historical & Active Salary Ledgers</li>
                <li>• Configured Payroll Breakdown Records</li>
                <li>• Active Employment Agreements</li>
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
              Entities & Sectors We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Employers', 'Private Limited Companies', 'LLPs', 'Partnership Firms', 'Proprietorships', 'Startups & MSMEs', 'Self-Employed Professionals', 'NGOs & Trusts'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-400 transition-colors">
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
                  "Experienced CAs & Specialists",
                  "Comprehensive Compliance Matrix",
                  "Customized Business Solutions",
                  "Transparent Processing Logs",
                  "Secure Information Vaults",
                  "Pan-India Coverage Infrastructure"
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
                <p><strong>Step 1 - Initial Consultation:</strong> Mapping out workforce patterns, operational domains, and location regulations.</p>
                <p><strong>Step 2 - Eligibility Assessment:</strong> Formulating state specific checklist requirements and enrollment applicability rules.</p>
                <p><strong>Step 3 - Documentation Collection:</strong> Gathering and securely verifying legal enterprise identity parameters.</p>
                <p><strong>Step 4 - Registration & Submission:</strong> Compiling structural applications and managing filing pipelines before administrative offices.</p>
                <p><strong>Step 5 - Post-Registration Support:</strong> Onboarding payroll integrations, setting metrics, and charting out filing timelines.</p>
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