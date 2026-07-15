import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.accountingOutsourcing;

export default function AccountingOutsourcingLanding() {
  const HERO_STATS = [
    "Cost Effective Solutions",
    "Accurate & Reliable Books",
    "Compliant & Secure Data",
    "Save Valuable Time",
  ];

  const faqs = [
    { 
      q: "What is Accounting Outsourcing?", 
      a: "Accounting outsourcing is the practice of hiring an external accounting firm to manage bookkeeping, financial reporting, reconciliations, payroll accounting, and related financial functions." 
    },
    { 
      q: "Which businesses should outsource accounting?", 
      a: "Startups, SMEs, LLPs, private limited companies, manufacturers, service providers, and growing businesses can all benefit from outsourced accounting." 
    },
    { 
      q: "Is outsourcing accounting secure?", 
      a: "Yes. Professional accounting firms follow secure processes to protect confidential financial information." 
    },
    { 
      q: "Can you manage monthly bookkeeping?", 
      a: "Yes. We provide monthly, quarterly, and annual bookkeeping and accounting services." 
    },
    { 
      q: "Do you provide financial reports?", 
      a: "Yes. We prepare management reports, Profit & Loss Statements, Balance Sheets, Cash Flow Statements, and other financial reports." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide reliable, accurate, and scalable accounting outsourcing services that help businesses improve financial management while focusing on growth." 
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
                ⚡ Accurate Accounts · Smart Reports · Better Business
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Accounting Outsourcing Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Simplify Your Business Finances with Expert Accounting Outsourcing Services. We handle your books with accuracy, confidentiality and on-time delivery.
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
                  Get Expert Accounting Support
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
            Professional Finance & Accounting Support for Growing Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for reliable Accounting Outsourcing Services in India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides end-to-end accounting outsourcing solutions for startups, SMEs, MSMEs, private limited companies, LLPs, partnership firms, proprietorships, and growing businesses. Managing accounting in-house can be time-consuming and costly. By outsourcing your accounting functions to experienced professionals, you can reduce operational costs, improve financial accuracy, stay compliant with tax regulations, and focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Accounting Outsourcing Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              What are Accounting Outsourcing Services? It is the process of delegating accounting and financial management tasks to a professional accounting service provider instead of maintaining a full in-house department.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Bookkeeping */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bookkeeping Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintain accurate and organized financial records.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Sales Entries</span>
                <span>✓ Purchase Entries</span>
                <span>✓ Expense Recording</span>
                <span>✓ Journal Entries</span>
                <span>✓ Ledger Maintenance</span>
                <span>✓ General Bookkeeping</span>
              </div>
            </div>

            {/* Financial Accounting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Accounting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete accounting support for businesses.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Trial Balance Prep</span>
                <span>✓ Profit & Loss</span>
                <span>✓ Balance Sheet</span>
                <span>✓ Financial Reports</span>
                <span>✓ General Ledger</span>
              </div>
            </div>

            {/* Accounts Receivable */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accounts Receivable Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Improve collections and cash flow patterns dynamically.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Invoice Tracking</span>
                <span>✓ Outstanding Pay</span>
                <span>✓ Customer Recon</span>
                <span>✓ Receivable Reports</span>
              </div>
            </div>

            {/* Accounts Payable */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Accounts Payable Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Efficient vendor payment and obligation management systems.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Invoice Processing</span>
                <span>✓ Vendor Recon</span>
                <span>✓ Payment Scheduling</span>
                <span>✓ Expense Monitoring</span>
              </div>
            </div>

            {/* Bank Reconciliation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bank Reconciliation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ensure accounting records accurately match bank statement realities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Error Detection</span>
                <span>✓ Fraud Prevention</span>
                <span>✓ Verified Records</span>
              </div>
            </div>

            {/* Payroll Accounting Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll Accounting Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional payroll backend processing and tracking execution.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary Accounting</span>
                <span>✓ Payroll Recon</span>
                <span>✓ Employee Expense</span>
                <span>✓ Payroll Reports</span>
              </div>
            </div>

            {/* MIS & Financial Reporting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">07</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MIS & Financial Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Generate management insights to support critical business path decisions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Profit & Loss</span>
                <span>✓ Cash Flow Reports</span>
                <span>✓ MIS Dashboards</span>
                <span>✓ Expense Analysis</span>
              </div>
            </div>

            {/* GST & Tax Accounting Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">08</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST & Tax Accounting Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Support infrastructure for keeping tax records pristine.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ GST Accounting</span>
                <span>✓ TDS Accounting</span>
                <span>✓ Ledger Maintenance</span>
                <span>✓ Compliance Review</span>
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
                Benefits of Outsourcing Your Accounting
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Why Businesses Choose Accounting Outsourcing: Professional operations offer strategic asset isolation, allowing leadership frameworks to expand cleanly.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Let us manage your accounts so you can grow your business safely."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Lower Operating Costs</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Reduce the direct administrative overhead of retaining full in-house financial human resources.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Improved Accuracy</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Professional experienced accounting specialists significantly minimize baseline math errors.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Better Financial Reporting</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Gain immediate clean operational access to reliable periodic metrics.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Increased Focus & Security</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Maximize strategic structural energy knowing historical ledgers are safe.</p>
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
              Who Can Benefit & Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable engineering platforms for comprehensive functional sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups', 'SMEs & MSMEs', 'Private Limited Companies', 'LLPs & Partnerships', 'Proprietorship Firms', 'E-commerce Companies', 'Manufacturers & Exporters', 'Consultants & Healthcare', 'Educational Institutions', 'IT & Software', 'Retail & Trading', 'Digital Agencies'].map((sector) => (
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
                  "Experienced Accounting Professionals",
                  "Customized Accounting Solutions",
                  "Technology-Driven Processes",
                  "Transparent Pricing Models",
                  "Secure & Confidential Systems",
                  "Pan India Services Support"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Accounting Outsourcing Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Requirement Assessment:</strong> Understand your business, accounting workflow, and reporting needs.</p>
                <p><strong>Step 2 - Document Collection:</strong> Secure collection of financial records and accounting documents.</p>
                <p><strong>Step 3 - Transaction Processing:</strong> Record and organize accounting transactions accurately.</p>
                <p><strong>Step 4 - Review & Reconciliation:</strong> Verify accounts, reconcile balances, and identify discrepancies.</p>
                <p><strong>Step 5 - Reporting:</strong> Prepare periodic financial statements and management reports.</p>
                <p><strong>Step 6 - Ongoing Support:</strong> Provide continuous accounting assistance and compliance support.</p>
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