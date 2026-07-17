import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.labourLaw;
export default function PremiumLabourComplianceLanding() {
  const HERO_STATS = [
    "12+ Yearss Experience",
    "25+ Compliance Experts",
    "200+ Happy Clients Across India",
    "100% Legal Compliance",
  ];
  const faqs = [
    { q: "What is Labour Law Compliance?", a: "Labour Law Compliance includes employee-related legal requirements such as PF, ESI, payroll, labour licences, employee records, and monthly statutory returns tracking." },
    { q: "Is PF registration mandatory?", a: "PF applicability depends primarily on total employee strength thresholds along with specific government regional guidelines." },
    { q: "What is ESI compliance?", a: "ESI compliance systematically guarantees core medical benefit access and direct social security protection parameters for covered employees." },
    { q: "Do startups need labour compliance?", a: "Yes. Every startup operating with active personnel should establish structured employee compliance systems early on to prevent structural legal risks." },
    { q: "Can you assist your clients with official labour notices?", a: "Absolutely. We manage all regulatory notice responses, historical compliance documentation reviews, and direct representations." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Advanced Ambient UI Background Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Stay Compliant · Protect Your Business · Empower Your Workforce
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Labour Law Compliance
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Complete Labour Law Compliance Solutions for a Legally Strong & Growing Business. Avoid penalties and legal risks while optimizing your payroll and social security registration.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Free Consultation
                </Link>
                <a href="tel:+919643203209" className="inline-flex items-center justify-center bg-white border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-sm transition-all">
                  Call: +91 9643 203 209
                </a>
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
            Professional Labour Law Compliance Consultant in Delhi, India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your trusted partner for complete Labour Compliance Services, PF & ESI Compliance, Payroll Compliance Management, and employee statutory support. Managing employees is not only about salary processing and attendance management. Every organization must follow labour regulations, employee welfare laws, payroll compliance, social security obligations, and statutory filing requirements. Proper Labour Law Compliance protects businesses from penalties, disputes, and legal complications.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Labour Law Compliance Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We provide end-to-end labour compliance solutions across India to help your business stay compliant and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PF Registration & PF Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Employee Provident Fund compliance is one of the most important labour obligations to increase employee confidence and protect employers.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PF Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly Return Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee UAN Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PF Documentation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Notice Handling</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Monitoring</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ESI Registration & Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">ESI compliance ensures employees receive critical medical and social security benefits under statutory structures.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> ESI Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Enrollment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monthly ESI Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Return Submission</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tracking & Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Documentation Support</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payroll Compliance Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional payroll management systems avoid costly mistakes while improving overall workflow efficiency and transparency.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Salary Processing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Payslip Generation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> TDS Calculations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Attendance Setup</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Deductions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance Reports</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Labour License Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Certain businesses require specific labour licenses under regulations to validate structural physical operations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> License Application</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> License Renewal</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Document Prep</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Monitoring Support</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Inspection Ground Support</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Contract Labour Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Businesses engaging contract workers require additional oversight to secure the business model from external disputes.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Contractor Docs</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Registers</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Wage Compliance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Attendance Records</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Contract Labour Statutory Filing</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Statutory Register Maintenance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Meticulous organization and up-to-date filing of critical enterprise master books reduces immediate inspection risks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Attendance books</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Wage Registers</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Leave Records</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Employee Master</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Bonus & Gratuity Tracking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-compliance" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Labour Law Compliance is Important for Businesses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many growing companies focus only on revenue generation and ignore employee compliance systems. Improper labour management can lead to major vulnerabilities. Maintaining proper Labour Compliance Services creates a strong organizational structure.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Failure to maintain proper compliance may result in government penalties, labour department notices, financial liabilities, and audit observations."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Avoid Legal Risks</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Non-compliance may invite inspections, penalties, and strict government notices.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Prevent Employee Disputes</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Improper documentation often creates workplace conflicts and severe operational friction.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Stop Financial Losses</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Delayed statutory filings and back-penalties systematically increase overhead costs.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Protect Brand Reputation</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Compliance failures directly degrade brand credibility in corporate recruitment markets.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Streamline Operations & Audit Readiness</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Improper employee records damage human resource systems. Proper maintenance ensures you are always ready for unexpected official audits.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Required Matrix Section */}
      <section id="documents" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for Labour Compliance
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Necessary files required to configure your institutional employee legal profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Business Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-center gap-2">✓ PAN Card</li>
                <li className="flex items-center gap-2">✓ GST Certificate</li>
                <li className="flex items-center gap-2">✓ Company Incorporation Docs</li>
                <li className="flex items-center gap-2">✓ Office Address Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Employee Documents</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-center gap-2">✓ Aadhaar Card</li>
                <li className="flex items-center gap-2">✓ PAN Card</li>
                <li className="flex items-center gap-2">✓ Salary Details</li>
                <li className="flex items-center gap-2">✓ Bank Information</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Payroll Records</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-center gap-2">✓ Attendance Reports</li>
                <li className="flex items-center gap-2">✓ Wage Registers</li>
                <li className="flex items-center gap-2">✓ Complete Employee Lists</li>
                <li className="flex items-center gap-2">✓ Leave Records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Labour Law Compliance Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">We assist across diverse sectors with specific legal frameworks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Factories & Manufacturing',
              'IT Companies',
              'Healthcare Organizations',
              'Educational Institutions',
              'Corporate Offices',
              'SMEs',
              'Startups (Early-Stage)',
              'Service Businesses'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Labour Compliance Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured 5-step implementation process engineered to protect your corporate operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Analyzing employee structure and statutory needs.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Registration</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Completing required PF, ESI, and labour setups.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Payroll Link</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Establishing data pipelines and reporting systems.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Filing</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Managing continuous monthly statutory returns.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Support</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Providing ongoing compliance and advisory tracking.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-oklch(86.5% 0.127 207.078) text-black border-t border-slate-200 w-full clear-both ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Fintax Adviser is the Best Labour Law Consultant
                </h2>
                <div className="w-16 h-1 bg-white rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Yearss Industry Experience",
                  "25+ In-House Compliance Experts",
                  "200+ Happy Clients Globally",
                  "Dedicated PF & ESI Specialists",
                  "Labour License Assistance",
                  "Affordable & Transparent Pricing"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-200 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-400 max-w-md">
                Our specialized team features licensed Labour Law Consultants, Payroll Specialists, Legal Professionals, and Tax Experts providing everything under one roof.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-slate-100 p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-xl backdrop-blur-xs">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                  Complete Business Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-blue-600">
                  Additional Professional Services We Offer
                </h3>
              </div>

              {/* Separated Content Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Incorporation Services',
                  'GST Registration & Filing',
                  'PAN & TAN Application Services',
                  'Trademark Registration',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Management Systems',
                  'General Business Advisory'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-200 transition-all duration-200"
                  >
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}