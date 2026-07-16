import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata safely linked to data file
export const metadata = servicesMetadata?.rocAnnualCompliance || {
  title: "ROC Annual Compliance Services in India | Agreetech",
  description: "Complete MCA filing, company annual returns & statutory compliance solutions to keep your business 100% compliant and penalty-free.",
  canonical:"https://fintaxadviser.com/best-roc-annual-compliance-service-delhi-india"
};

export default function RocAnnualComplianceLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "1200+ Businesses Assisted",
    "500+ Successful Filings",
    "98% Client Satisfaction Rate",
  ];

  const faqs = [
    { q: "What is ROC annual compliance in India?", a: "ROC compliance refers to mandatory yearly filings submitted to the Ministry of Corporate Affairs by registered companies." },
    { q: "Who needs ROC compliance?", a: "All Private Limited Companies, LLPs, OPCs, and Section 8 Companies must comply." },
    { q: "What happens if ROC compliance is missed?", a: "Late filing leads to penalties, legal issues, and possible director disqualification." },
    { q: "Can Agreetech handle overdue ROC filings?", a: "Yes, we also handle delayed and pending ROC compliance cases." },
    { q: "Do startups need ROC compliance?", a: "Yes, every registered company must comply regardless of size or revenue." }
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
                ⚡ 100% Compliant · Penalty-Free Filing
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                ROC Annual Compliance Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Complete MCA Filing, Company Annual Returns & Statutory Compliance Solutions. Agreetech provides end-to-end compliance services for Private Limited Companies, LLPs, OPCs, Section 8 Companies & Startups across India.
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
            What is ROC Annual Compliance?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ROC Annual Compliance refers to the mandatory set of yearly filings and disclosures required by the Ministry of Corporate Affairs (MCA) for all registered companies in India. These filings ensure that the government has updated and accurate information about company financial performance, shareholding structure, director details, business operations, and statutory governance activities. ROC compliance is required every financial year, regardless of whether the company is active or not.
          </p>
        </div>
      </section>

      {/* Key Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Key ROC Compliance Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Agreetech provides a fully managed compliance system that handles every aspect of ROC filing and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Return Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We handle complete preparation and submission of annual returns required under the Companies Act (MGT-7/MGT-7A).</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Shareholder Details</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Director Information</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Capital Structure</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Office Verification</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Statement Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">We prepare and file complete financial statements (AOC-4 / AOC-4 XBRL) in compliance with accounting standards.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Balance Sheets</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Profit & Loss</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Auditor's Reports</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> XBRL Filings</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Director KYC Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Director KYC (DIR-3 KYC) is mandatory for all DIN holders in India to stay active and compliant.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DIN Validation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> KYC Form Submissions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Verification Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Error Corrections</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">AGM & Board Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Corporate governance is a key requirement under MCA regulations. We manage scheduling and documentation.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Meeting Notices</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Minutes Drafting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Resolutions Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Calendar</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Statutory Registers</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintaining statutory records is mandatory for all companies. We secure your records for clean inspections.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Register of Members</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Director Records</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Share Transfers</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Transaction Logs</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">LLPs & One Person Companies</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Dedicated streamlined statutory workflows mapping Form 11, Form 8, and structural single director updates.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> LLP Form 11 / Form 8</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> OPC Annual Returns</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Agreement Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Statutory Reporting</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="importance" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Importance of ROC Compliance
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In India, corporate compliance is not just a legal formality—it is a continuous responsibility that ensures your company remains active, legally recognized, and financially transparent.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Agreetech ensures your business stays 100% compliant, penalty-free, and audit-ready throughout the year."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Avoid Heavy Penalties</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Failing to file can attract a penalty of ₹100 per day per form.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Maintain Active Status</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prevent your company from being marked as "Non-Compliant" or "Inactive".</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Protect Directors</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid risk of director disqualification under stringent MCA administrative rules.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Investor Ready Docs</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Clear investor trust blocks easily during due diligence and funding valuations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Step-by-Step Compliance Process */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Step-by-Step ROC Compliance Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A smooth and structured workflow managed by our financial and legal professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 1: Compliance Assessment</h3>
              <p className="text-slate-700 text-sm leading-relaxed">We review your company's compliance history, pending filings, and potential risk areas.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 2: Document Collection</h3>
              <p className="text-slate-700 text-sm leading-relaxed">We gather all necessary financial details and corporate operational records required for filings.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 3: Preparation of Forms</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Our team prepares precision dynamic forms including MGT-7, AOC-4, and DIR-3 KYC.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 4: Verification & Approval</h3>
              <p className="text-slate-700 text-sm leading-relaxed">We double-verify data arrays with company directors and auditors prior to final submission.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 5: MCA Portal Filing</h3>
              <p className="text-slate-700 text-sm leading-relaxed">We accurately submit all approved statutory corporate forms directly inside the official MCA portal.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Step 6: Record Confirmation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">We share clean government filing acknowledgments and store historical compliance databases safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Documents Required for ROC Compliance
            </h2>
            <p className="text-sm text-slate-500 mt-1">Please prepare these records to facilitate timely error-free submissions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-blue-600">Financial Documents</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Audited Balance Sheet</li>
                <li>• Profit & Loss Statement</li>
                <li>• Cash Flow Statement & Trial Balance</li>
                <li>• Statutory Auditor's Report</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-blue-600">Company Documents</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Certificate of Incorporation & Company PAN</li>
                <li>• Constitutional MOA & AOA copies</li>
                <li>• Shareholding details & Pattern changes</li>
                <li>• Updated Director List & active DIN profiles</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-blue-600">Compliance Documents</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Board Meeting Minutes / AGM Resolutions</li>
                <li>• Historic structural ROC submissions</li>
                <li>• Statutory internal ledger registers</li>
                <li>• Auditor Appointment papers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose & Ecosystem Matrix Section */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Agreetech?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Dedicated Compliance Experts",
                  "Chartered Accountant Supervision",
                  "End-to-End MCA Filing Support",
                  "Automated Tracking Tools",
                  "Transparent & Safe Reporting",
                  "Startup-Friendly Pricing Models"
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

            {/* Right Column */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Services',
                  'Business Advisory Solutions'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                    {srv}
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
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}