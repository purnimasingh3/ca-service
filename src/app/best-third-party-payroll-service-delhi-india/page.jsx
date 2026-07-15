import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = servicesMetadata?.thirdPartyPayroll || {
  title: "Third-Party Payroll (Off-Roll) Services in India | Fintax Adviser",
  description: "Outsource your workforce payroll, HR compliance management, and staffing operations. Accurate salary processing & 100% compliance alignment across India.",
};

export default function ThirdPartyPayrollLanding() {
  const HERO_STATS = [
    "Salary Processing Accuracy",
    "EPF & ESIC Compliance",
    "Employee On/Offboarding",
    "Custom MIS Dashboard Reports",
  ];

  const faqs = [
    { 
      q: "What are Third-Party Payroll (Off-Roll) Services?", 
      a: "Third-party payroll services involve outsourcing payroll processing, salary administration, statutory compliance, and HR documentation to a specialized service provider while employees work for the client organization." 
    },
    { 
      q: "Which businesses can benefit from off-roll payroll services?", 
      a: "Startups, MSMEs, private companies, manufacturing units, IT firms, healthcare organizations, retail businesses, logistics companies, and enterprises can benefit from outsourced payroll management." 
    },
    { 
      q: "Can payroll services be customized?", 
      a: "Yes. Payroll solutions can be tailored based on workforce size, salary structure, compliance requirements, and reporting preferences." 
    },
    { 
      q: "Do you manage statutory compliance?", 
      a: "Yes. We assist with payroll-related statutory compliances, including EPF, ESIC, Professional Tax, TDS on salary, and payroll documentation." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide professional payroll outsourcing solutions with accurate salary processing, statutory compliance support, HR documentation, payroll reporting, and dedicated client assistance to help businesses manage their workforce efficiently." 
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
                ⚡ Managed · Compliant · Accurate · On Time
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Third-Party Payroll
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (Off-Roll) Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Focus on your business. We manage your payroll. Simplify operations, secure accurate compliance processing pipelines, and reduce administrative workflow overhead perfectly.
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
                  Let Us Manage Your Payroll
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
            Professional Off-Roll Payroll & Staffing Solutions Across India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Managing employees efficiently is essential for business growth, but handling recruitment, payroll processing, statutory compliance, employee documentation, and HR administration internally can be time-consuming and resource-intensive. Many businesses today choose Third-Party Payroll (Off-Roll) Services to simplify workforce management while focusing on their core business operations.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Payroll Infrastructure Operations
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end administration systems built for enterprise accuracy and complete safety parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 01 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll & Salary Processing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Execution architectures focusing on gross, net, variable pays, dynamic calculations and registers tracking configuration values.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Monthly Invoicing</span>
                <span>✓ Gross & Net Splits</span>
                <span>✓ Incentive Cycles</span>
                <span>✓ Reconciliations</span>
              </div>
            </div>

            {/* 02 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Onboarding & Exit Frameworks</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Managing professional joining protocols, structural HR document files, final layouts, and leave metrics securely.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Offer Letters</span>
                <span>✓ Master Records</span>
                <span>✓ Full & Final Settles</span>
                <span>✓ Experience Docs</span>
              </div>
            </div>

            {/* 03 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Statutory Law & Tax Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Maintaining rigid execution steps balancing target regulatory parameters like EPF, ESIC, PT, and accurate employee TDS rules.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ EPF & ESIC Filings</span>
                <span>✓ Professional Tax</span>
                <span>✓ Salary TDS Deductions</span>
                <span>✓ Form 16 Preparations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-payroll" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Off-Roll Payroll Services
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                As configurations scale up, keeping tracking mechanisms in-house poses risk to structural timelines. Outsourcing balances management pipelines.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Cost-Effective operational management models matching strict data security architectures."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Reduced Burden</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Sidestep massive operational weights inside your immediate administrative environments.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Off-Roll Staffing</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Flexible options matching contract, temporary, project, or field sales operations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Data Security</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Complete protective layers safeguarding records from vulnerability leakage metrics.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Attendance Sync</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Synchronized workflows monitoring leave tracking, tracking models, and shift structures.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Required Layout */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Documents Generally Required
            </h2>
            <p className="text-sm text-slate-500 mt-1">Operational data items essential for seamless setup activation models.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Business Assets</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Incorporation Certificate</li>
                <li>• PAN & TAN Setup Data</li>
                <li>• GST Certificates</li>
                <li>• Registration Structures</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Employee Folders</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Aadhaar & PAN Assets</li>
                <li>• Bank Account Formats</li>
                <li>• Address Proof Systems</li>
                <li>• Historical Records</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-sm tracking-wider uppercase">Payroll Layouts</h4>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li>• Salary Structure Assets</li>
                <li>• Attendance Registers</li>
                <li>• Leave Ledger Logs</li>
                <li>• Historical Payroll Runs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups & MSMEs', 'Private Limited & LLPs', 'Manufacturing Units', 'IT & Software Houses', 'Healthcare Orgs', 'Retail & E-commerce', 'Logistics Companies', 'Hospitality & Services'].map((sector) => (
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

            {/* Left Box */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Payroll Specialists",
                  "End-to-End Managed Workflows",
                  "Highly Customized Formats",
                  "Rigid Compliance Architectures",
                  "Strict Data Confidentiality",
                  "Pan India Solutions Integration"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Operations Cycle</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Business Consultation:</strong> Structuring baseline alignment strategies.</p>
                <p><strong>Step 2 - Employee Data Collection:</strong> Fulfilling record synchronization mappings safely.</p>
                <p><strong>Step 3 - Payroll Setup:</strong> Configuring calculation matrix systems inside software architectures.</p>
                <p><strong>Step 4 - Monthly Processing:</strong> Generating clean distribution payouts accurate to schedule schedules.</p>
                <p><strong>Step 5 - Compliance & Reporting:</strong> Preparing final tax/statutory ledgers and MIS models.</p>
                <p><strong>Step 6 - Ongoing Support:</strong> Maintaining support channels tracking updates live.</p>
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