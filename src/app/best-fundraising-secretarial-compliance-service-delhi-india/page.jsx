import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata configuration using servicesMetadata reference
export const metadata = servicesMetadata?.fundraisingSecretarialCompliance || {
  title: "Fundraising Secretarial Compliance Services | Fintax Adviser",
  description: "Get end-to-end Secretarial Compliance for VC and Angel Investments. Build trust, comply, and drive rapid funding."
};
export default function FundraisingSecretarialCompliance() {
  const HERO_STATS = [
    "Investor Due Diligence Ready",
    "Share Allotment Compliance",
    "Statutory Register Maintenance",
    "Expert Corporate Governance Support",
  ];

  const faqs = [
    { 
      q: "What is Fundraising Secretarial Compliance?", 
      a: "Fundraising Secretarial Compliance refers to the exact corporate and legal steps required when a company issues new shares or securities to incoming investors, ensuring conformity to the Companies Act, 2013." 
    },
    { 
      q: "Why is secretarial compliance important during fundraising?", 
      a: "During fundraising, incoming legal teams perform deep audits. Outstanding ROC filings, unissued share certificates, or missing general meeting resolutions could delay, recalculate, or stop the funding event entirely." 
    },
    { 
      q: "Is ROC filing required during fundraising?", 
      a: "Yes. Raising capital requires specific ROC forms (like PAS-3 or MGT-14) to report capital additions, equity allocation changes, and charter updates." 
    },
    { 
      q: "What is a Cap Table?", 
      a: "A Cap Table is a structured database representing a company's exact ownership structure. It organizes founder allocations, outstanding common shares, preferred investor classes, and option pool calculations." 
    },
    { 
      q: "Can startups benefit from these compliance services?", 
      a: "Yes. Getting compliance systems structured early makes your startup highly attractive, lowers transaction fees during audits, and provides reliable infrastructure for subsequent funding rounds." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "Fintax Adviser provides end-to-end fundraising compliance support. We specialize in working alongside startup founders and investors to make transactions seamless, secure, and legally bulletproof." 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Ensuring Compliance · Building Trust · Driving Investments
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Fundraising Secretarial
                <span className="bg-blue-600 bg-clip-text text-transparent block mt-2">
                  Compliance Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Stay compliant and investment-ready with our professional, end-to-end corporate legal support tailored for raising Seed, Pre-Series A, Series A, or Growth Capital.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95 text-center">
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
            Comprehensive Corporate Compliance Solutions for Investment Rounds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Closing a funding round successfully demands more than pitch decks and commercial terms—it requires bulletproof legal backing, structured board authorizations, accurate share registers, and punctual ROC updates. Our expert team streamlines legal compliances for startups so you can execute transactions smoothly and quickly.
          </p>
        </div>
      </section>

      {/* Core Concept Split Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">What is Fundraising Secretarial Compliance?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fundraising Secretarial Compliance represents the entire collection of legal obligations, state declarations, and inner corporate filings an enterprise must settle when introducing new financial shareholders or updating equity classes. This secures absolute adherence to the Companies Act, 2013, and protects founder equities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Why is Compliance Vital During Fundraising?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                During legal due diligence, investors inspect historic registers, previous filing speeds, and board resolutions with high precision. Outstanding administrative problems can easily lead to transaction delays, valuation drops, or canceled investments. Clear governance builds immediate trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Fundraising Compliance Portfolio
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored secretarial offerings built to establish absolute investment readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Compliance Review */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate Compliance Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Assessing overall statutory compliance health before opening investment negotiations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ ROC Compliance</span>
                <span>✓ Board Records</span>
                <span>✓ Shareholder Logs</span>
                <span>✓ Capital Structures</span>
              </div>
            </div>

            {/* Board Meeting Compliance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Board Meeting Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structuring clear procedural steps and board resolutions for authorization.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Board Notices</span>
                <span>✓ Agendas & Minutes</span>
                <span>✓ Custom Resolutions</span>
                <span>✓ Investment Approvals</span>
              </div>
            </div>

            {/* Shareholder Approval Support */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Shareholder Approval Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Managing communication, approvals, and legal notices for statutory shareholder general meetings.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ EGM Assistance</span>
                <span>✓ Shareholder Notices</span>
                <span>✓ Special Resolutions</span>
                <span>✓ Voting Documentation</span>
              </div>
            </div>

            {/* ROC Filing Assistance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ROC Filing Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Filing required forms with the Registrar of Companies to update corporate capital structure.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Form Submission</span>
                <span>✓ Record Updates</span>
                <span>✓ Structural Changes</span>
                <span>✓ Regulatory Filings</span>
              </div>
            </div>

            {/* Share Allotment Compliance */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">05</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Share Allotment Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Execution of capital adjustments, equity issuances, and issuance of certificates.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Share Allotments</span>
                <span>✓ Certifications</span>
                <span>✓ Member Updates</span>
                <span>✓ Investor Records</span>
              </div>
            </div>

            {/* Due Diligence Readiness */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">06</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Due Diligence Readiness</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Organizing historic folders, secretarial records, and filings into structured compliance data rooms.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <span>✓ Secretarial Files</span>
                <span>✓ Corporate Logs</span>
                <span>✓ Cap Table Cleanup</span>
                <span>✓ Statutory Registers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Compliance Checklist */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Key Compliance Checklist For Capital Rounds
            </h2>
            <p className="text-slate-600 mt-2">Essential components required to pass investor legal validation checks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              "ROC Filings Up to Date",
              "Statutory Registers Complete",
              "Board & Shareholder Resolutions",
              "Shareholding Records Checked",
              "Share Certificates Issued",
              "Cap Table Updated",
              "Financial Statements Audited",
              "Regulatory Compliance Complete"
            ].map((item, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-sm border border-slate-200">
                <span className="text-blue-600 text-xl font-bold block mb-2">✓</span>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Paperwork Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Documents Required
            </h2>
            <p className="text-slate-600 mt-2">Ensure these materials are ready before commencing your regulatory filings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
              <h4 className="font-bold text-md text-blue-600 border-b pb-1 border-slate-200">Corporate</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Certificate of Incorporation</li>
                <li>• MOA & AOA</li>
                <li>• CIN Details</li>
                <li>• PAN</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
              <h4 className="font-bold text-md text-blue-600 border-b pb-1 border-slate-200">Shareholding</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Share Certificates</li>
                <li>• Cap Table</li>
                <li>• Share Register</li>
                <li>• Previous Allotments</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
              <h4 className="font-bold text-md text-blue-600 border-b pb-1 border-slate-200">Secretarial</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Meeting Minutes</li>
                <li>• EGM Records</li>
                <li>• Board Resolutions</li>
                <li>• Statutory Registers</li>
              </ul>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 space-y-2">
              <h4 className="font-bold text-md text-blue-600 border-b pb-1 border-slate-200">Financial / Regs</h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Audited Statements</li>
                <li>• Financial Projections</li>
                <li>• ROC Filings & Returns</li>
                <li>• GST Registration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues vs Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Common Compliance Issues During Fundraising</h3>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex gap-2">⚠️ Pending ROC filings creating backlogs.</li>
                <li className="flex gap-2">⚠️ Missing board resolutions for equity adjustments.</li>
                <li className="flex gap-2">⚠️ Incomplete statutory registers lacking update histories.</li>
                <li className="flex gap-2">⚠️ Incorrect share allotments and outdated Cap Tables.</li>
                <li className="flex gap-2">⚠️ Missing share certificates and delayed regulatory filings.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Benefits of Professional Compliance</h3>
              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex gap-2">🟢 <strong className="text-blue-900">Investment Ready:</strong> Pass investor audits instantly.</li>
                <li className="flex gap-2">🟢 <strong className="text-blue-900">Faster Due Diligence:</strong> Save weeks of audit back-and-forth.</li>
                <li className="flex gap-2">🟢 <strong className="text-blue-900">Strong Governance:</strong> Clean metrics to build high trust.</li>
                <li className="flex gap-2">🟢 <strong className="text-blue-900">Future-Proofed:</strong> Simplified subsequent capital rounds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ideal Compliance Solutions For
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups', 'Private Limited Companies', 'LLPs', 'SMEs & MSMEs', 'Tech & SaaS Companies', 'E-commerce', 'Manufacturers', 'D2C Brands', 'Angel-Backed Startups', 'VC-Funded Teams'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Delivery Process */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Partner With Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Secretarial Team",
                  "Startup & Investor Focused",
                  "End-to-End Compliance Operations",
                  "Affordable & Clear Pricing",
                  "Confidential Record Upkeep",
                  "Pan-India Online Support"
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

            {/* Right Box: Process */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Flow</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Compliance Assessment:</strong> Auditing active corporate logs and historical data.</p>
                <p><strong>Step 2 - Gap Analysis:</strong> Flagging unfiled forms, missing boards, or register updates.</p>
                <p><strong>Step 3 - Documentation Prep:</strong> Assembling valid meeting notices, minutes, and resolutions.</p>
                <p><strong>Step 4 - Regulatory Filings:</strong> Prompt submissions of ROC approvals and company updates.</p>
                <p><strong>Step 5 - Due Diligence Setup:</strong> Organizing records into clean, shareable transaction data rooms.</p>
                <p><strong>Step 6 - Continuous Support:</strong> Ongoing transactional updates for safe and legal funding rounds.</p>
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