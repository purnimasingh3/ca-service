import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.healthcareAccounting;

export default function HealthcareAccountingLanding() {
  const HERO_STATS = [
    "Accurate Clinical Books",
    "Specialized Tax & GST Support",
    "Medical Staff Payroll",
    "Departmental MIS Reporting",
  ];

  const faqs = [
    { 
      q: "Why do healthcare businesses need specialized accounting?", 
      a: "Healthcare organizations have unique financial processes such as patient billing, insurance claims, pharmacy inventory, payroll for medical staff, and regulatory compliance. Specialized accounting helps manage these efficiently." 
    },
    { 
      q: "Can you provide monthly accounting support?", 
      a: "Yes. We offer monthly, quarterly, and annual accounting packages." 
    },
    { 
      q: "Do you assist healthcare startups?", 
      a: "Yes. We work with healthcare startups, clinics, telemedicine companies, and established hospitals." 
    },
    { 
      q: "Can you manage GST and Income Tax compliance?", 
      a: "Yes. We provide end-to-end GST, Income Tax, TDS, payroll, and accounting compliance services." 
    },
    { 
      q: "Is outsourced accounting secure?", 
      a: "Yes. We follow secure processes to protect your financial and business information." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We combine accounting expertise, healthcare industry knowledge, and regulatory compliance support to help healthcare businesses maintain accurate financial records and focus on delivering quality healthcare services." 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Accurate Records · Timely Compliance · Better Decisions · Stronger Healthcare
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Healthcare Business Accounting
                <span className="bg-blue-600 bg-clip-text text-transparent block mt-2">
                  & Compliance Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Accounting, Tax & Compliance Solutions for Healthcare Businesses. Focus on care, we manage finance safely.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/25 active:scale-95">
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
            Specialized Financial Management Infrastructure Tailored for the Medical Sector
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Managing the finances of a healthcare business requires specialized knowledge, accuracy, and continuous compliance with applicable laws. <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> offers professional Healthcare Business Accounting and Compliance Services designed specifically for the healthcare industry. Our experts help healthcare organizations maintain accurate books of accounts, comply with GST and Income Tax requirements, manage payroll, prepare financial reports, monitor cash flow, and support business growth through reliable financial management.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Healthcare Accounting Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Unlike general accounting, healthcare accounting involves handling patient billing records, insurance reimbursements, medical equipment purchases, pharmacy inventory tracking, and complex practitioner workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Daily Bookkeeping */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Daily Bookkeeping Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Proper bookkeeping forms the solid structural baseline asset matrix.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Daily Records</span>
                <span>✓ Sales & Purchases</span>
                <span>✓ Cash Book logs</span>
                <span>✓ Ledger Posting</span>
                <span>✓ Petty Cash Management</span>
                <span>✓ Vendor accounts</span>
              </div>
            </div>

            {/* Financial Accounting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Accounting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic ledger balance tracking mechanisms.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Trial Balance Prep</span>
                <span>✓ Balance Sheets</span>
                <span>✓ Profit & Loss</span>
                <span>✓ Cash Flow Statements</span>
                <span>✓ Financial Analysis</span>
              </div>
            </div>

            {/* Accounts Receivable */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accounts Receivable Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Mitigate problems tied to delayed payments and complex insurance cycles.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Patient Billing logs</span>
                <span>✓ Invoice Tracking</span>
                <span>✓ Insurance Receivables</span>
                <span>✓ Payment Follow-ups</span>
              </div>
            </div>

            {/* Accounts Payable */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accounts Payable Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Manage supplier and complex medical supplier outlays cleanly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Invoice Processing</span>
                <span>✓ Vendor Ledgers</span>
                <span>✓ Payment Schedules</span>
                <span>✓ Payable Reports</span>
              </div>
            </div>

            {/* Tax & GST Compliances */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST, Income Tax & TDS Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Handle varying obligations based explicitly on the medical framework type.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ GST Return Filings</span>
                <span>✓ ITC Reviews</span>
                <span>✓ Income Tax ITR</span>
                <span>✓ Advance Tax Plans</span>
                <span>✓ Quarterly TDS filings</span>
                <span>✓ Notice Support</span>
              </div>
            </div>

            {/* Payroll Management */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll & Financial MIS</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Track staff records (doctors, nurses, technicians) and asset performance metrics.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary Processing</span>
                <span>✓ TDS on Salaries</span>
                <span>✓ Monthly MIS Reports</span>
                <span>✓ Dept Profitability</span>
                <span>✓ Performance Panels</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-accounting" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Strategic Valuation of Clinical Outsourcing
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Healthcare organizations handle thousands of financial transactions every month. Without a proper accounting system, businesses may face cash flow issues, delayed compliance, inaccurate reporting, and financial inefficiencies.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-blue-900 leading-relaxed">
                  "Maintain confidential operations cleanly using verified industrial mechanisms."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Reduced Costs</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Avoid hiring and maintaining a full in-house clinical accounting resource base.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Financial Accuracy</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Track operational metrics with minimized calculation anomaly risks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Improved Cash Flow</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Track dynamic client, vendor, and insurance collection pathways with high precision.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Timely Compliance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Meet all your direct statutory timelines and regulatory constraints with complete confidence.</p>
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
              Healthcare Businesses We Support
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing dedicated clinical systems across diverse localized healthcare ecosystems.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Hospitals & Clinics', 'Diagnostic Centres', 'Pathology Laboratories', 'Dental Practices', 'Pharmacies', 'Healthcare Startups', 'Medical Equipment Co', 'Wellness Centres', 'IVF & Fertility Clinics', 'Nursing Homes', 'Medical Colleges', 'Telemedicine Companies'].map((sector) => (
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
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Chartered Accountants & Professionals",
                  "Specialized Healthcare Knowledge",
                  "End-to-End Accounting Management",
                  "Customized Medical Setup Solutions",
                  "Secure & Confidential Data Handling",
                  "Cloud-Based Support Matrix Across India"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Accounting Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Business Consultation:</strong> Understand your healthcare business operations and accounting requirements.</p>
                <p><strong>Step 2 - Document Collection:</strong> Collect financial records, invoices, payroll information, and banking details.</p>
                <p><strong>Step 3 - Accounting & Bookkeeping:</strong> Maintain accurate books of accounts using standard accounting practices.</p>
                <p><strong>Step 4 - Tax & Compliance:</strong> Handle GST, Income Tax, TDS, payroll accounting, and statutory compliance support.</p>
                <p><strong>Step 5 - Reporting:</strong> Prepare periodic financial statements and management reports.</p>
                <p><strong>Step 6 - Ongoing Advisory:</strong> Provide continuous accounting, taxation, and compliance support.</p>
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