import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.fcraRegistration;

export default function FCRARegistrationLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients Served",
    "Legal Permission to Receive Foreign Funds",
    "Compliant with Government Regulations",
  ];

  const faqs = [
    { q: "What is FCRA Registration?", a: "FCRA Registration is government approval allowing eligible organizations to receive foreign contributions legally in India." },
    { q: "Who can apply for FCRA Registration?", a: "Trusts, Societies, Section 8 Companies, educational institutions, and charitable organizations engaged in public welfare activities." },
    { q: "Is FCRA mandatory for receiving foreign donations?", a: "Yes. Organizations receiving foreign contributions generally require FCRA approval or prior permission." },
    { q: "What is the difference between FCRA Registration and Prior Permission?", a: "FCRA Registration allows ongoing receipt of foreign contributions, while Prior Permission is granted for a specific donor and project." },
    { q: "Can newly formed NGOs apply for FCRA?", a: "New organizations may apply for Prior Permission if they meet the applicable requirements." },
    { q: "Is a special bank account required?", a: "Yes. Organizations must maintain the designated FCRA bank account as prescribed under FCRA regulations." },
    { q: "Can FCRA Registration be cancelled?", a: "Yes. Non-compliance with FCRA provisions may lead to suspension or cancellation by authorities." },
    { q: "Why choose Fintax Adviser?", a: "Fintax Adviser provides professional assistance for FCRA Registration, documentation, compliance management, and regulatory support across India." }
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
                🛡️ Accept Foreign Contributions Legally & Compliantly
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                FCRA Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Empowering NGOs. Enabling Global Impact.
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Get FCRA Registration and open doors to international funding for your noble cause. Building Trust. Creating Change.
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
            Complete Guide for NGOs, Trusts & Societies in India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for professional FCRA Registration services in India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> helps NGOs, Trusts, Societies, and Section 8 Companies obtain Foreign Contribution Regulation Act (FCRA) Registration efficiently and compliantly. Our team provides end-to-end support, including eligibility assessment, documentation, application filing, compliance guidance, and renewal assistance.
          </p>
        </div>
      </section>

      {/* Deep-Dive Content: What is FCRA? */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What is FCRA Registration?</h3>
              <p className="text-slate-600 text-sm leading-relaxed space-y-3">
                The Foreign Contribution Regulation Act (FCRA), 2010 regulates the acceptance and utilization of foreign contributions by organizations in India. Organizations receiving donations, grants, or financial assistance from foreign sources must obtain FCRA approval from the Ministry of Home Affairs (MHA), Government of India. FCRA registration enables eligible organizations to legally receive foreign funds for charitable, educational, social, religious, cultural, and economic development activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why is FCRA Registration Important?</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                FCRA registration provides legal authorization to receive foreign donations and grants. Key Benefits include:
              </p>
              <ul className="grid grid-cols-1 gap-2 text-xs font-semibold text-slate-600">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Legal receipt of foreign contributions</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Access to international funding opportunities</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Improved credibility among donors</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Eligibility for grants from foreign foundations</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Better transparency and governance</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Compliance with Indian regulations</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Long-term sustainability for NGOs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments (Who Can Apply) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Who Can Apply for FCRA Registration?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Organizations working for public benefit and development programs across various operational frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Trusts", desc: "Public charitable trusts engaged in social welfare activities." },
              { title: "Societies", desc: "Registered societies working in education, health, environment, and community development." },
              { title: "Section 8 Companies", desc: "Non-profit companies incorporated under the Companies Act." },
              { title: "Educational Institutions", desc: "Schools, colleges, and research organizations carrying out charitable activities." },
              { title: "Religious Organizations", desc: "Organizations involved in religious and community welfare activities." },
              { title: "Social Welfare Organizations", desc: "Entities working for public benefit and development programs." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility and Types Matrix Section */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Eligibility */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Eligibility Criteria for FCRA Registration</h3>
              <p className="text-slate-600 text-sm">To obtain FCRA Registration, an organization should generally fulfill the following parameters set by authorities:</p>
              <div className="space-y-3 text-sm text-slate-700 font-medium">
                <div className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">✓</span> <span>Be legally registered in India.</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">✓</span> <span>Have a definite cultural, economic, educational, religious, or social program.</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">✓</span> <span>Have a track record of genuine activities.</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">✓</span> <span>Maintain proper books of accounts.</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">✓</span> <span>Operate for public welfare purposes.</span></div>
                <div className="flex items-start gap-3"><span className="text-blue-500 mt-0.5">✓</span> <span>Meet conditions prescribed by the Ministry of Home Affairs.</span></div>
              </div>
            </div>

            {/* Right Side: Types of Approval */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Types of FCRA Approval</h3>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-blue-600 mb-2">1. FCRA Registration</h4>
                <p className="text-sm text-slate-600 mb-3">Suitable for organizations with an established track record of charitable activities seeking long-term foreign funding.</p>
                <span className="text-xs font-bold text-slate-500">Best For: Established NGOs · Trusts · Societies · Section 8 Companies</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-blue-600 mb-2">2. FCRA Prior Permission</h4>
                <p className="text-sm text-slate-600 mb-3">Organizations that do not yet qualify for full registration may apply for Prior Permission to receive a specific foreign contribution from a particular donor for a specific project.</p>
                <span className="text-xs font-bold text-slate-500">Best For: Newly established NGOs · First-time foreign funding applicants · Project-based foreign grants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist and Process Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Documents Required */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Documents Required for FCRA Registration
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Document requirements may vary depending on the organization type. Basic Documents include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-600">
                {["Registration Certificate", "PAN Card of Organization", "Trust Deed / MOA / AOA", "PAN of Office Bearers", "Aadhaar of Key Members", "Activity Report", "Financial Statements", "Bank Account Details", "DARPAN ID Registration", "Board Resolution", "Details of Governing Body Members"].map((doc) => (
                  <div key={doc} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-2 shadow-xs">
                    <span className="text-blue-500">✓</span> {doc}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">
                * Additional documents may be required based on the organization's structure and activities.
              </p>
            </div>

            {/* Right Column: Steps Process */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 text-center lg:text-left">
                FCRA Registration Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: "Step 1", title: "Eligibility Assessment", desc: "Review of organizational structure and compliance status." },
                  { step: "Step 2", title: "Documentation", desc: "Collection and verification of required documents." },
                  { step: "Step 3", title: "Application Preparation", desc: "Preparation of FCRA registration application." },
                  { step: "Step 4", title: "Online Filing", desc: "Submission of application through the FCRA portal." },
                  { step: "Step 5", title: "Government Review", desc: "Verification and examination by concerned authorities." },
                  { step: "Step 6", title: "Approval & Registration", desc: "Issuance of FCRA Registration Certificate upon approval." }
                ].map((item, index) => (
                  <div key={index} className="p-5 border border-slate-200 bg-white rounded-xl shadow-xs group">
                    <div className="text-xs uppercase font-extrabold tracking-wider text-blue-600 mb-1">{item.step}</div>
                    <h4 className="font-bold text-sm text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance & Sources Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Compliance Obligations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900">FCRA Compliance Requirements</h3>
              <p className="text-sm text-slate-600">Organizations receiving foreign contributions must consistently comply with MHA regulations:</p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl space-y-3">
                <ul className="space-y-2 text-xs font-semibold text-amber-950">
                  <li className="flex items-center gap-2">▪ Maintain designated FCRA bank account.</li>
                  <li className="flex items-center gap-2">▪ Maintain separate books for foreign contributions.</li>
                  <li className="flex items-center gap-2">▪ File annual FCRA returns.</li>
                  <li className="flex items-center gap-2">▪ Maintain donor records.</li>
                  <li className="flex items-center gap-2">▪ Utilize funds only for approved purposes.</li>
                  <li className="flex items-center gap-2">▪ Follow reporting requirements prescribed by authorities.</li>
                </ul>
              </div>
              <p className="text-xs font-bold text-red-600">
                ⚠️ Failure to comply may result in penalties, suspension, or cancellation of registration.
              </p>
            </div>

            {/* Common Sources */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Common Sources of Foreign Contributions</h3>
              <p className="text-sm text-slate-600">Organizations with FCRA approval may receive legitimate funds from:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "International charitable foundations",
                  "Foreign NGOs",
                  "Overseas donors",
                  "International development agencies",
                  "Foreign universities and institutions",
                  "Global humanitarian organizations",
                  "Corporate social responsibility initiatives abroad"
                ].map((src, idx) => (
                  <div key={idx} className="p-3 border border-slate-200 bg-slate-50 rounded-xl text-xs font-semibold text-slate-700">
                    🌐 {src}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix Table Box */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why NGOs Need FCRA Registration
            </h2>
            <p className="text-xs text-slate-500 mt-1">Key advantages and strategic functional benefits of proper certification.</p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="p-4">Benefit</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100 text-slate-600 font-medium">
                {[
                  { b: "Foreign Funding", d: "Legally receive overseas donations" },
                  { b: "Credibility", d: "Improves donor confidence" },
                  { b: "Growth Opportunities", d: "Access international grants" },
                  { b: "Compliance", d: "Operate within legal framework" },
                  { b: "Transparency", d: "Better governance and accountability" },
                  { b: "Sustainability", d: "Long-term funding support" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-blue-600">{row.b}</td>
                    <td className="p-4">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Professionals",
                  "Dedicated Expert Team",
                  "End-to-End Assistance",
                  "Comprehensive Documentation Support",
                  "Affordable & Transparent Pricing",
                  "Ongoing Compliance Support"
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
                Our multidisciplinary team features specialized legal counsels, NGO registration consultants, chartered accountants, and compliance experts handling applications pan-India.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Our Full Range of FCRA & NGO Services
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'FCRA Registration',
                  'FCRA Prior Permission',
                  'FCRA Renewal Support',
                  'FCRA Compliance Advisory',
                  'FCRA Return Filing',
                  'DARPAN Registration',
                  'NGO Registration Support',
                  'Section 8 Company Registration',
                  'Trust Registration Services',
                  'Society Registration'
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