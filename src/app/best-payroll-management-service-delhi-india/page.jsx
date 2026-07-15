import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.payrollManagement;

export default function PayrollManagementLanding() {
  const HERO_STATS = [
    "Accurate & On-Time Payroll",
    "Statutory Compliance",
    "Data Security & Confidentiality",
    "Save Time & Reduce Costs",
  ];

  const faqs = [
    { 
      q: "What are Payroll Management Services?", 
      a: "Payroll Management Services involve managing employee salaries, payroll calculations, statutory deductions, tax compliance, payslip generation, payroll reporting, and employee payroll records." 
    },
    { 
      q: "Which businesses should outsource payroll?", 
      a: "Startups, MSMEs, LLPs, private limited companies, NGOs, manufacturing businesses, IT companies, healthcare organizations, and enterprises can benefit from outsourced payroll management." 
    },
    { 
      q: "Do payroll services include statutory compliance?", 
      a: "Yes. Payroll services may include support for EPF, ESIC, Professional Tax, TDS on salary, and other payroll-related statutory requirements, depending on the engagement." 
    },
    { 
      q: "Can payroll be customized for different salary structures?", 
      a: "Yes. Payroll systems can be configured to support fixed salaries, variable pay, incentives, bonuses, reimbursements, and shift-based payroll models." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "Fintax Adviser combines payroll expertise, accounting knowledge, and compliance support to deliver accurate, secure, and scalable payroll management solutions that help businesses improve efficiency while maintaining statutory compliance." 
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
                ⚡ Accurate · Timely · Compliant · Secure
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Payroll Management Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional Payroll Management Services for Businesses of All Sizes. Accurate payroll. Timely payments. Complete compliance. We handle your payroll so you can focus on growing your business.
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
            Comprehensive Lifecycle Support from Onboarding to Exit
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Accurate payroll management is one of the most important responsibilities of every business. Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Our payroll specialists, Chartered Accountants, and compliance professionals help startups, MSMEs, LLPs, private limited companies, NGOs, and multinational companies manage the complete payroll lifecycle across India securely.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Payroll Management Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end administration, processing parameters, and direct ledger compliance tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Monthly Payroll Processing */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Payroll Processing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Manage complete monthly payroll cycles ensuring accurate parameters.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary Computation</span>
                <span>✓ Payroll Verification</span>
                <span>✓ Disburse Coordination</span>
                <span>✓ Register Records</span>
              </div>
            </div>

            {/* Payroll Compliance */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll Compliance Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Avoid regulatory issues and protect corporate accounts via timely filings.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ EPF Compliance Support</span>
                <span>✓ ESIC Compliance Support</span>
                <span>✓ Professional Tax (PT)</span>
                <span>✓ Labour Law Records</span>
              </div>
            </div>

            {/* TDS Management */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TDS on Salary Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Assist businesses with payroll-related direct tax deductions and tracking.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Salary TDS Computation</span>
                <span>✓ Declarations Review</span>
                <span>✓ Form 16 Support</span>
                <span>✓ Year-End Reconciliation</span>
              </div>
            </div>
          </div>

          {/* Extended Sub-Services Area */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Additional Operations Handled By Our Specialists</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Employee Salary & Variables</h4>
                <p>Calculates basic, allowances, incentives, performance bonus, overtime, reimbursements, and arrear calculations.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Attendance & Leave Integration</h4>
                <p>Leave management configuration, holiday tracking, shift-based payroll, and balance reconciliation metrics.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Onboarding & Exit Accounting</h4>
                <p>Profile setup, salary structure validation, Full & Final settlements, leave encashment, and final exit papers.</p>
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
                Benefits of Outsourcing Payroll Management
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Errors in payroll can lead to employee disputes, tax issues, compliance notices, and operational inefficiencies. Outsourcing protects your employee confidence while mitigating financial risks.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Maintain absolute employee confidence, protect sensitive parameters, and remain 100% compliant."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Accuracy & Timelines</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Process employee salaries accurately on time, removing structural human tracking anomalies.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Confidentiality Protection</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Protect highly confidential internal compensation sheets using secure storage layers.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Reliable Payroll MIS</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Access department cost analysis, variances, cost allocations, and live tracking dashboards.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Business Scalability</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Scale workforce processing seamlessly whether your group has 10 or 1,000+ members.</p>
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
              Industries & Business Types We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable payroll allocations for diverse corporate environments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Information Technology', 'Software Companies', 'Healthcare & Hospitals', 'Manufacturing', 'Retail & E-commerce', 'Logistics & Transport', 'Startups & MSMEs', 'Private Limited & LLPs'].map((sector) => (
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
                  "Experienced Payroll Specialists",
                  "End-to-End Management",
                  "Customized Salary Architectures",
                  "Strict Compliance Focus",
                  "Advanced Secure Systems",
                  "Pan India Support Footprint"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 text-xs text-slate-500 space-y-2">
                <p className="font-bold text-slate-700">Documents Generally Required:</p>
                <p>• <strong>Business:</strong> Certificate of Incorporation/Registration, PAN, TAN, GST, Labour registration metrics.</p>
                <p>• <strong>Employee:</strong> PAN, Aadhaar, Bank Details, Employment Agreement, Salary structure data sheets, Tax declarations.</p>
                <p>• <strong>Records:</strong> Live attendance logs, historical leave ledgers, past bonus parameters.</p>
              </div>
            </div>

            {/* Right Box: Process Tracking */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Standardized Onboarding Process</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Mapping workforce scale, historical profiles, cycles, and internal operational targets.</p>
                <p><strong>Step 2 - System Configuration Setup:</strong> Designing core configurations for distinct structural levels, allocations, components, and statutory rules.</p>
                <p><strong>Step 3 - Data Verification Audit:</strong> Cross-checking active registrations, structural components, declarations, and history data matrix elements.</p>
                <p><strong>Step 4 - Monthly System Execution:</strong> Processing computing values, statutory parameters, net amounts, and expense tracking registers.</p>
                <p><strong>Step 5 - Quality Audit & Reporting:</strong> Validating system accuracy patterns before dispersing final payslips and custom executive MIS reviews.</p>
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