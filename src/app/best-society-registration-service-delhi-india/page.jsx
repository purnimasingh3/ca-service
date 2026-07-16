import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.societyRegistration;
export default function SocietyRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "Expert CA Support At Every Step",
    "Complete Compliance Support",
  ];
  const faqs = [
    { q: "How many members are required to register a society?", a: "Generally, a minimum of seven (7) members are mandatory under structural legislative frameworks to execute a valid incorporation profile parameters setup." },
    { q: "Can a society receive donations?", a: "Yes, an official legally registered society holding approved parameters can systematically receive corporate grants and non-profit donations." },
    { q: "Is society registration mandatory for NGOs?", a: "While not explicitly mandatory for baseline basic charitable operations, full corporate registration provides critical statutory independent legal recognition, validation status, and institutional credibility." },
    { q: "Can a society apply for 12A and 80G registration?", a: "Absolutely. Once the baseline statutory registration certificate issues, eligible societies can apply for these advanced tax certifications to claim active operational tax exemptions." },
    { q: "What is the difference between a Society, Trust, and Section 8 Company?", a: "Each setup structure features fundamentally different legal governance matrices, member composition requirements, and compliance structures. Our dedicated CAs analyze your goals to implement the ideal legal form." },
    { q: "How long does society registration take?", a: "The exact functional delivery timeline parameters remain dependent on speed of documentation processing validation and corporate state registrar review steps." }
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
                ⚡ TOGETHER WE GROW. TOGETHER WE SERVE.
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Professional Society Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  with Expert CA Support in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Register Your Society. Empower Communities. Inspire Change. Build a stronger community and create a better future with Fintax Adviser.
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
                  Book a Free Consultation
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
            Best Society Registration CA Firm in Delhi India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the Best Society Registration CA Firm in Delhi India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> offers complete Society Registration services for educational institutions, charitable organizations, welfare associations, NGOs, cultural groups, resident welfare associations (RWAs), sports clubs, and social development organizations across India.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2">
            A Society is a non-profit organization registered under the Societies Registration Act, 1860. It is formed by a group of individuals who come together for charitable, educational, literary, scientific, religious, cultural, sports, or social welfare purposes. Registration provides legal recognition, operational transparency, and improved credibility among donors, government authorities, and funding agencies.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services Offered by Fintax Adviser
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Complete end-to-end society registration, structured legal setups, and continuous operational compliance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Society Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic documentation and end-to-end registration execution workflows under the statutory provisions of the Societies Registration Act, 1860.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Legal Recognition & Status</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Pan-India Structural Execution</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">MOA & Rules Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional, legally precise drafting of the Memorandum of Association (MOA) and corporate governing Rules and Regulations for smooth non-profit activities.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Objective Structural Formatting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Governance & Transparency Frameworks</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">12A & 80G Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert tax consultancy implementation to secure critical Income Tax exemptions and maximize financial tax deduction advantages for your donors.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> 12A Permanent Tax Exemptions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> 80G Premium Donor Incentive Benefits</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">NGO Darpan Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Seamless alignment with NITI Aayog guidelines to enable mandatory government data directory registration records for funding opportunities.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Central Government Trust Profile</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Open Eligibility for Grants & Schemes</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Registrations (PAN & TAN)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive corporate tax registration setup tracking enabling societies to systematically operate independent organizational bank accounting books.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Permanent Account Number (PAN)</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Tax Deduction Account Number (TAN)</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Compliance Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structured legal and routine financial maintenance services ensuring continuous operational parameters stand validated ahead of regulatory filings.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Regulatory Board Submission Tools</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Long-Term Advisory Protection</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Common Objectives Blocks */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Common Objectives of Society Registration
            </h2>
            <p className="text-slate-500 text-base mt-2">Established statutory parameters supporting non-profit community integration workflows.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Educational Development', 'Social Welfare Activities', "Women's Empowerment",
              'Healthcare Initiatives', 'Cultural Promotion', 'Environmental Protection',
              'Sports Development', 'Community Development', 'Research Activities', 'Youth Programs'
            ].map((objective) => (
              <div key={objective} className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {objective}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-society" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Society Registration
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Establishing your non-profit under the Societies Registration Act, 1860 structures legal recognition and unlocks systemic funding workflows from corporate CSR pools, state-sponsored grants, and private foundations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Registered societies gain long-term structural viability, transparent financial controls, and complete operational flexibility."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Legal Recognition</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The society gains proper independent statutory corporate legal status and systemic operational recognition.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Improved Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Build strategic trust thresholds directly with donors, regulatory government entities, and target beneficiaries.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Grants & Funding Eligibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Fulfill the primary structural prerequisites mandated across premium funding agencies, state schemes, and CSR pools.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Perpetual Succession</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The organization continues its corporate functional identity uninterrupted despite routine individual membership changes.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-[#071c3d] uppercase tracking-wider text-blue-600">Democratic Management Structure</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Decisions are systematically managed and collectively executed under the democratic control of governing board members.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section: Minimum Requirements & Documents */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Statutory Prerequisites & Documentation Matrix
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Ensure proper configuration setup for registration approvals. Fintax Adviser handles everything from compilation to filing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Minimum Criteria Card */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm lg:col-span-1 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Minimum Requirements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-blue-600">Minimum Members Required</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Generally, a minimum of seven (7) members are mandatory to formulate a valid registration structural intent.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-blue-600">Governing Body Formation</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Mandatory selection allocation for key operational positions: President, Secretary, and Treasurer.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-blue-600">Registered Corporate Office</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">A legally verifiable operational address location is required within the respective state domain jurisdiction limits.</p>
                </div>
              </div>
            </div>

            {/* Documents Grid Wrapper */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Required Onboarding Documents List</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 mb-2.5">Identity Proof of Members</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>PAN Card (Mandatory Profile Setup)</li>
                    <li>Aadhaar Card Verification Data</li>
                    <li>Passport Credentials (If Applicable)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-slate-900 mb-2.5">Address Proof of Members</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Valid Driving License / Voter Identity Card</li>
                    <li>Latest Utility Bill Copies</li>
                    <li>Updated Bank Statement Logs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-slate-900 mb-2.5">Registered Office Proof</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Recent Electricity Bill Document Copy</li>
                    <li>Executed Rental Agreement Terms</li>
                    <li>NOC from Property Title Owner</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-slate-900 mb-2.5">Society Profile Mapping</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Proposed Society Nomenclature Name Options</li>
                    <li>Defined Core Philanthropic Mission Objectives</li>
                    <li>Comprehensive Executed Member Details Grid</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Should Register a Society?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing institutional setup structures tailored across multiple public development sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Educational Institutions', 'Charitable Organizations', 'Resident Welfare Associations (RWAs)',
              'Sports Clubs & Associations', 'Healthcare & Medical Awareness', 'Environmental Protection Groups',
              'Religious & Cultural Groups', 'Social Development Hubs'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Society Registration Process (Step-by-Step) */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              The Society Registration Lifecycle Workflow
            </h2>
            <p className="text-slate-500 text-sm mt-2">Our structured process path from consultation down to final corporate operational launch.</p>
          </div>

          <div className="space-y-6">
            {[
              { step: "Step 1", title: "Consultation and Objective Review", desc: "Analyzing initial project scope criteria to align core society philanthropic intent with correct legislative statutory wording patterns." },
              { step: "Step 2", title: "Name Selection & Verification Matrix", desc: "Evaluating prospective institutional title selections to match clean database standards and secure quick approval outcomes before the state registrar tools." },
              { step: "Step 3", title: "Documentation & Rules Preparation", desc: "Drafting the legal structural core blueprints involving the specific Memorandum of Association (MOA), bye-laws, and internal corporate regulatory compliance rules." },
              { step: "Step 4", title: "Official Application Filing Stage", desc: "Executing secure digital and physical folder bundle submissions down to the formal designated platform channels before the Regional Registrar of Societies." },
              { step: "Step 5", title: "Issuance of Registration Certificate", desc: "The official validation and tracking release phase confirming your organization holds an autonomous legitimate corporate statutory legal presence code." },
              { step: "Step 6", title: "PAN, 12A & 80G Financial Integrations", desc: "Unlocking advanced tax exemptions and statutory configurations, enabling immediate compliance for donations tracking and corporate grant reception." }
            ].map((proc, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl items-start">
                <span className="bg-blue-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg shrink-0 uppercase tracking-wide">{proc.step}</span>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{proc.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix / Why Choose Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Fintax Adviser is the Best Choice
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Non-Profit Corporate Clients",
                  "Expert CA & Legal Team Presence",
                  "Affordable Registration Packages",
                  "Complete NGO Ecosystem Support",
                  "Pan-India Online Service Execution"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Organizations searching for the Best Society Registration CA Firm in Delhi India choose Fintax Adviser for professional service, legal expertise, and long-term compliance support.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Corporate Advisory Options
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration Setup',
                  'Trademark Registration Tools',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing Systems',
                  'Payroll Service Architectures',
                  'Business Advisory Solutions'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
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
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}