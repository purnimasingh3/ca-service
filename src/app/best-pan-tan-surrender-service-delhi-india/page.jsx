import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =servicesMetadata.panTanSurrender || {
  title: "Professional PAN/TAN Surrender Services in India | Fintax Adviser",
  description: "Close with compliance. Surrender with confidence. Complete PAN/TAN cancellation and deactivation services.",
};

export default function PanTanSurrenderLanding() {
  const HERO_STATS = [
    "Expert-Led Cancellation",
    "Fully Compliant Process",
    "Duplicate PAN/TAN Resolution",
    "Secure & Fast Closure",
  ];

  const faqs = [
    { 
      q: "What is PAN surrender?", 
      a: "PAN surrender is the process of requesting cancellation or deactivation of a PAN that is no longer required, such as in cases of duplicate PAN allotment or business closure, subject to applicable regulations." 
    },
    { 
      q: "What is TAN surrender?", 
      a: "TAN surrender refers to requesting cancellation of a TAN that is no longer required due to business closure, restructuring, duplicate allotment, or other eligible circumstances." 
    },
    { 
      q: "Can a company surrender its PAN after closure?", 
      a: "The process depends on the legal status of the company, completion of tax obligations, and applicable regulatory requirements. Professional guidance can help determine the appropriate steps." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Documents vary based on the applicant and reason for surrender but may include PAN, TAN details, business registration documents, tax filings, resolutions, and supporting records." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide structured assistance with PAN/TAN surrender documentation, compliance review, application preparation, and procedural support, helping businesses and individuals complete the process efficiently and in accordance with applicable requirements." 
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
                ⚡ Clean Up Registration Footprints · Stay Compliant
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                PAN & TAN Surrender
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Cancellation Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                No longer need your PAN or TAN? Restructuring your business or holding duplicate allotments? Fintax Adviser helps you cancel inactive registrations smoothly according to Income Tax Department protocols.
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
            Professional Assistance for PAN & TAN Cancellation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Closing a business or restructuring an organization often involves updating tax registrations to reflect the current legal status. In situations where a Permanent Account Number (PAN) or Tax Deduction and Collection Account Number (TAN) is no longer required, Fintax Adviser provides professional support across India. We ensure proper clearance of filings and liabilities before submitting requests to prevent department defaults.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our PAN & TAN Closure Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured assessment, auditing, filing verification, and application processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* PAN Surrender */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">PAN Surrender Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete procedural processing of PAN deactivations associated with corporate strike-offs or mergers.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Status Audit</span>
                <span>✓ Closure Docs</span>
                <span>✓ IT Alignment</span>
                <span>✓ Legal Review</span>
              </div>
            </div>

            {/* TAN Surrender */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">TAN Surrender Assistance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Structured surrender of Deductor records, assuring outstanding TDS compliance checks are clear.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ TDS Return Audit</span>
                <span>✓ Outstanding Dues</span>
                <span>✓ Forms Preparation</span>
                <span>✓ Department Filing</span>
              </div>
            </div>

            {/* Duplicate Resolution */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Duplicate Resolution</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Identify and rectify multiple PAN or TAN cards registered erroneously under the same legal name.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Multi-Registration</span>
                <span>✓ Inactive Card Flag</span>
                <span>✓ Consolidation</span>
                <span>✓ Penalty Safe-guards</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-surrender" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                When is Surrender Required?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Holding duplicate registrations or maintaining inactive numbers creates unnecessary compliance alerts, non-filing flags, and avoidable administrative liability.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Avoid dynamic penalty matrices by ensuring that obsolete ID registrations are legally deactivated."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Business Closure</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Mandatory step upon winding up active corporate accounts, partnerships, or LLPs.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Merger & Transfer</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Transferring identities or legal constitutions into amalgamated, refreshed entities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Duplicate Issuance</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Clean up secondary, unused PAN/TAN cards to stay legally safe from tax code fines.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Compliance Clean-up</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Remove constant digital follow-up reminders on inactive deductor streams.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Entities Served Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Entities We Assist
            </h2>
            <p className="text-sm text-slate-500 mt-1">Protecting registration validity for diverse personal and business entities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Individuals', 'Proprietorships', 'Partnership Firms', 'Limited Liability Partnerships', 'Private Limited Companies', 'Public Companies', 'Trusts & NGOs', 'Societies'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Process */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Required Documents */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Documents Generally Required
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "PAN Card & TAN Allotment Letter",
                  "Certificate of Incorporation / Deeds",
                  "Board Resolution / Closure proof",
                  "Recent Income Tax Returns (ITR)",
                  "Outstanding TDS Returns & Challans",
                  "Authorization Letter for Tax Agent"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Review current tax IDs and verify the reason for closure.</p>
                <p><strong>Step 2 - Compliance Review:</strong> Confirm no outstanding tax dues, return audits, or pending demands exist.</p>
                <p><strong>Step 3 - Collection:</strong> Gather closure deeds, corporate resolutions, and certificates.</p>
                <p><strong>Step 4 - Form Preparation:</strong> Fill out prescribed surrender forms (Form 49A/49AA changes or TAN cancellation).</p>
                <p><strong>Step 5 - Official Submission:</strong> Submit and track applications with the Income Tax Department/NSDL.</p>
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