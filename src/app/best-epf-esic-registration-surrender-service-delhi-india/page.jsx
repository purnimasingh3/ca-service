import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata =servicesMetadata.epfEsicSurrender || {
  title: "EPF & ESIC Registration Surrender Services | Fintax Adviser",
  description: "Legally surrender inactive or unnecessary EPF & ESIC registrations. Ensure smooth and compliant closure with export support.",
};

export default function EpfEsicSurrenderLanding() {
  const HERO_STATS = [
    "Experienced Compliance Officers",
    "Employee Benefit Record Verification",
    "Hassle-Free Statutory Closure",
    "Adherence to Labor Department Rules",
  ];

  const faqs = [
    { 
      q: "What is EPF registration surrender?", 
      a: "EPF registration surrender is the process of requesting closure or deactivation of an employer's EPF registration when it is no longer required due to business closure, restructuring, or other eligible circumstances." 
    },
    { 
      q: "What is ESIC registration surrender?", 
      a: "ESIC registration surrender involves applying for the closure or cancellation of an employer's ESIC registration when the establishment no longer requires the registration under applicable regulations." 
    },
    { 
      q: "Can a business surrender both EPF and ESIC registrations together?", 
      a: "Yes. Depending on the business circumstances, both registrations may be reviewed and closed separately through the applicable procedures if they are no longer required." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Typical documents include business registration records, EPF and ESIC registration details, contribution records, employee records, closure documentation, and supporting authorizations. The exact requirements depend on the specific case." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide professional assistance with EPF & ESIC registration surrender, compliance review, documentation preparation, and procedural guidance, helping businesses complete the process accurately while maintaining statutory compliance." 
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
                ⚡ Close Statutory Registrations · Stay Compliant
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                EPF & ESIC Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Surrender & Closure
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                We help businesses legally surrender EPF & ESIC registrations with complete compliance and documentation support. Ideal for businesses that are closed, discontinued, restructured, merged, or no longer meet employee limits.
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
            Professional EPF & ESIC Surrender Support for Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. When a business closes, restructures, merges, or no longer meets the criteria for mandatory employee benefit registrations, it must surrender or close its Employees' Provident Fund (EPF) and Employees' State Insurance Corporation (ESIC) registrations in accordance with applicable laws. Completing this correctly protects directors from default notices.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Statutory Surrender Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end support for employee benefit registration closure across all Indian departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* EPF Surrender */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">EPF Registration Surrender</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete management of EPFO closure forms, validation of active/resigned employee balances, and contribution status.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Contribution audit</span>
                <span>✓ Last return verification</span>
                <span>✓ Exit dates matching</span>
                <span>✓ EPFO Portal filing</span>
              </div>
            </div>

            {/* ESIC Surrender */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ESIC Registration Surrender</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Verification of coverage criteria limits, pending ESIC contributions, return check-ins, and cancellation applications.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ IP Coverage Audit</span>
                <span>✓ Return verification</span>
                <span>✓ Challan alignment</span>
                <span>✓ Online deactivation</span>
              </div>
            </div>

            {/* Integrated Business Closure */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Closure Alignment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Coordinating your labor registrations with ROC strike-off resolutions or partnership wind-down records.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ MCA Coordination</span>
                <span>✓ Board Resolutions</span>
                <span>✓ Closure Proofs</span>
                <span>✓ Status validation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-benefits" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Avoid Statutory Damage & Audits
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Leaving employer codes active without monthly filings triggers auto-generated non-compliance notices, damages business reputation, and holds partners/directors personally accountable.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure employee registration lines are completely clean and closed before finishing other commercial dissolutions."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Company Strike-Off</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Clear statutory accounts alongside standard ROC Company strike-off pathways.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">No Employee Burden</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Cancel registrations safely if employee headcount drops permanently below limits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Stop Monthly Filings</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Ensure proper surrender to halt the operational requirement of submitting nil returns.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Audit Safety</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Prepare verified documentation records to support future labor audit scrutiny.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing comprehensive labor compliance services to diverse business types.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Manufacturing Units', 'IT & Service Companies', 'Retail & Distribution', 'Educational Institutions', 'NGOs & Trusts', 'Startups & MSMEs', 'Healthcare Centers', 'Partnership Firms'].map((sector) => (
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
                  "EPF & ESIC Registration Code details",
                  "Certificate of Incorporation / Deeds",
                  "Final Employee Exit & Resignation log",
                  "Proof of Business Discontinuation",
                  "Past Returns & Challan records",
                  "Board Resolution for Surrender"
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
                <p><strong>Step 1 - Consultation:</strong> Direct review of active EPFO and ESIC establishment profiles.</p>
                <p><strong>Step 2 - Compliance Audit:</strong> Verifying historical filings, contributions, and ensuring no missing returns exist.</p>
                <p><strong>Step 3 - Gathering Records:</strong> Organizing corporate resolutions, exit logs, and legal closing proof.</p>
                <p><strong>Step 4 - Preparing Files:</strong> Formatting exact EPFO Annexure and ESIC web-portal applications.</p>
                <p><strong>Step 5 - Official Submission:</strong> Submitting files with labor authorities and securing formal closure acknowledgments.</p>
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