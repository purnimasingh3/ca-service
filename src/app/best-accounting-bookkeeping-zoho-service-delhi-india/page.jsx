import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.zohoBooksAccounting;

export default function ZohoBooksAccountingLanding() {
  const HERO_STATS = [
    "Certified Zoho Books Experts",
    "End-to-End GST Accounting",
    "Real-Time Financial Reports",
    "Accurate Bank Reconciliation",
  ];

  const faqs = [
    { 
      q: "What are Accounting and Bookkeeping in Zoho Books Services?", 
      a: "Accounting and Bookkeeping in Zoho Books Services involve recording financial transactions, managing ledgers, preparing financial statements, reconciling bank accounts, maintaining GST records, and generating business reports using Zoho Books cloud accounting software." 
    },
    { 
      q: "Why should businesses use Zoho Books for accounting?", 
      a: "Zoho Books automates accounting processes, simplifies GST compliance, improves financial reporting, enables cloud-based access, and helps businesses manage invoices, expenses, inventory, banking, and cash flow efficiently." 
    },
    { 
      q: "What services are included in Zoho Books Accounting Services?", 
      a: "Our services include Zoho Books setup, bookkeeping, GST accounting, bank reconciliation, accounts payable, accounts receivable, payroll accounting, inventory management, financial reporting, MIS reporting, and ongoing accounting support." 
    },
    { 
      q: "Can FinTax Adviser migrate my existing accounting data to Zoho Books?", 
      a: "Yes. We assist businesses with Zoho Books implementation, chart of accounts setup, data migration, opening balance configuration, and complete accounting transition from existing software to Zoho Books." 
    },
    { 
      q: "Do you provide Zoho Books Accounting Services across India?", 
      a: "Yes. FinTax Adviser provides professional Accounting and Bookkeeping in Zoho Books Services in Delhi, India, while supporting startups and businesses across India with cloud accounting, bookkeeping, financial reporting, GST compliance, and complete accounting outsourcing." 
    }
  ];

  const INDUSTRIES = [
    'Startups', 'Private Limited Companies', 'LLPs', 'Partnership Firms', 
    'Sole Proprietorships', 'MSMEs', 'E-commerce Businesses', 'IT & Software Companies', 
    'Manufacturing Companies', 'Healthcare Businesses', 'Consulting Firms', 'Retail Businesses', 
    'Service-Based Companies', 'Import & Export Businesses', 'Growing Enterprises'
  ];

  const DOCUMENTS = [
    "Certificate of Incorporation", "Company PAN Card", "GST Registration Certificate",
    "Zoho Books Login Access", "Bank Statements", "Sales Invoices", "Purchase Bills",
    "Expense Bills & Receipts", "Vendor & Customer Details", "Trial Balance & General Ledger",
    "Previous Financial Statements", "Inventory & Payroll Records"
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
                ⚡ Automate · Reconcile · Comply · Control
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Zoho Books Accounting &
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Bookkeeping Services in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Expert setups, seamless transitions, and flawless accounting. Bring complete cloud visibility, automated ledger updates, and exact financial control directly to your business operations.
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
            Comprehensive Cloud Accounting Solutions for Modern Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. Managing files manually is time-consuming and prone to errors. Cloud platforms like Zoho Books automate bookkeeping, invoicing, tax compliance, and bank reconciliations from anywhere. Our expert Chartered Accountants provide custom implementations, data migration, and complete ongoing virtual accounting.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Specialized Zoho Books Workflows
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Streamline invoicing, bank operations, direct or indirect tax fillings, and payroll in one central dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Zoho Bookkeeping */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zoho Books Bookkeeping & Accounting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete daily bookkeeping and transaction log maintenance for perfect accounting audit trails.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Daily Bookkeeping</span>
                <span>✓ Sales & Purchase Entry</span>
                <span>✓ General Ledgers</span>
                <span>✓ Accounts Payable</span>
              </div>
            </div>

            {/* GST Accounting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GST Accounting & Tax Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert tax alignment inside Zoho Books matching latest GST provisions and guidelines.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ GST Return Filing</span>
                <span>✓ ITC Reconciliation</span>
                <span>✓ Multi-State Accounting</span>
                <span>✓ E-Invoice Support</span>
              </div>
            </div>

            {/* Financial Reporting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Reporting & MIS Reports</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive data intelligence reports delivered directly to management for strategic decision-making.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Balance Sheet Prep</span>
                <span>✓ Cash Flow Statement</span>
                <span>✓ Budget vs Actual</span>
                <span>✓ Custom MIS Reports</span>
              </div>
            </div>

            {/* Bank Reconciliation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bank Rec & Expense Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Error-free verification loops to eliminate bookkeeping leaks and trace payment anomalies.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Bank Reconciliation</span>
                <span>✓ Petty Cash Management</span>
                <span>✓ Expense Recording</span>
                <span>✓ Card Reconciliations</span>
              </div>
            </div>

            {/* Business Automation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll, Inventory & Workflows</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Connect custom enterprise pipelines, employee databases, and supply tracking mechanisms seamlessly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary Accounting</span>
                <span>✓ Stock Tracking</span>
                <span>✓ Invoicing Automation</span>
                <span>✓ Customer Portals</span>
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
                Benefits of Cloud Outsourcing with Zoho Books
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Deploying certified Zoho Books experts keeps your accounting fully automated, reduces staffing overhead, avoids calculation errors, and generates live business intelligence.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain pristine books, track inventory levels, and settle GST filings easily with automated bookkeeping workflows."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Cost Savings</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Slash the direct cost of hiring, training, and maintaining physical internal accounts teams.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Flawless Records</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Maintain complete accuracy with multi-stage verification ledgers controlled by CAs.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">GST-Ready Automation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Invoices automatically sync to GST reports, facilitating seamless monthly ITC reconciliations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Access Anywhere</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Monitor cash flows, pending invoices, and expense budgets on mobile devices anywhere.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Required Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Essential Records Required for Onboarding
            </h2>
            <p className="text-sm text-slate-500 mt-1">To ensure smooth transition configurations and pristine historical account alignment.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {DOCUMENTS.map((doc) => (
              <div key={doc} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors We Empower
            </h2>
            <p className="text-sm text-slate-500 mt-1">Reliable, tailor-made solutions mapped directly to unique industrial operational setups.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm font-bold text-slate-700">
            {INDUSTRIES.map((industry) => (
              <div key={industry} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer Block */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Certified Accounting Professionals",
                  "Experienced Zoho Books Experts",
                  "Complete Configuration & Support",
                  "Monthly MIS Reports Included",
                  "Dedicated Account Manager Assigned",
                  "Complete Data Security Guaranteed"
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

            {/* Right Box: Timeline process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Account Analysis:</strong> Assessing transactional volumes and mapping current chart of accounts.</p>
                <p><strong>Step 2 - Environment Setup:</strong> Organizing Zoho settings, tax parameters, multi-state nodes, and data migrations.</p>
                <p><strong>Step 3 - Continuous Tracking:</strong> Recording incoming transactions, bills, salary payouts, and monthly GST entries.</p>
                <p><strong>Step 4 - Period-End Reconciliations:</strong> Generating balanced ledgers, bank cross-verifications, and reporting MIS.</p>
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