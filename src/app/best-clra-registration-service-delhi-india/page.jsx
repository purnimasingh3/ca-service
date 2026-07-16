import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.clraRegistration;
export default function ClraRegistrationLanding() {
  const HERO_STATS = [
    "Labour Law Compliance",
    "Worker Welfare Standards",
    "Statutory Register Setup",
    "Reduced Compliance Risks",
  ];

  const faqs = [
    { 
      q: "What is a CLRA License?", 
      a: "A CLRA License is a licence issued under the Contract Labour (Regulation and Abolition) Act, 1970, to eligible contractors engaging contract labour in establishments covered by the Act." 
    },
    { 
      q: "Who needs a CLRA License?", 
      a: "Depending on the applicable legal thresholds and the nature of work, contractors employing contract labour and principal employers may have obligations under the CLRA Act." 
    },
    { 
      q: "Is the licence required in every case?", 
      a: "No. The applicability of the CLRA Act depends on statutory conditions such as the number of contract workers and other legal requirements. Professional assessment is recommended." 
    },
    { 
      q: "What documents are generally required?", 
      a: "Common documents include business registration records, PAN, GST registration (where applicable), work orders, contractor details, principal employer information, and project-related documents. Requirements vary by state and project." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide comprehensive assistance with CLRA licence registration, documentation, labour law compliance, renewals, amendments, and advisory services, helping businesses manage contract labour compliance efficiently." 
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
                ⚡ Regulate · Authorize · Safeguard · Comply
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                CLRA License Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Labour Compliance Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Professional CLRA License Registration & Labour Law Compliance Services in India. Meet statutory requirements, promote fair working conditions, and unlock corporate project eligibilities seamlessly.
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
            Comprehensive Licensing Systems for Principal Employers & Contractors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Businesses engaging contract labour for infrastructure, manufacturing, logistics, or staffing operations must align with the provisions of the <strong>Contract Labour (Regulation and Abolition) Act, 1970</strong>. Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Our team helps you clear licensing pathways and execute reliable structural document tracking across India.
          </p>
          <div className="text-xs text-slate-400 bg-slate-50 p-3 rounded-lg border border-slate-200 mt-4 max-w-2xl mx-auto text-left">
            <strong>Disclaimer:</strong> The applicability of the CLRA Act, registration requirements, and licensing obligations depend on the number of contract workers, the nature of the establishment, and the current legal framework in force. Businesses should obtain professional advice based on their specific circumstances.
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Comprehensive Licensing Support
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Structured registration, amendment operations, and authority alignment handled from end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CLRA Registration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">CLRA License Registration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic preparation and submission handled directly by active professionals.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Application Prep</span>
                <span>✓ Data Verification</span>
                <span>✓ Portal Filing Support</span>
                <span>✓ Authority Liaison</span>
              </div>
            </div>

            {/* License Renewal */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">CLRA License Renewal</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Monitor systemic timeline parameters and refresh operational credentials before expiration limits.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Validity Audits</span>
                <span>✓ Updated Disclosures</span>
                <span>✓ Follow-up Support</span>
                <span>✓ Compliance Logs</span>
              </div>
            </div>

            {/* License Amendments */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">CLRA License Amendment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Modify business, structural project changes, or workforce volume parameters systematically.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Address / Name Adjust</span>
                <span>✓ Strength Expansion</span>
                <span>✓ Signatory Changes</span>
                <span>✓ Work Scope Updates</span>
              </div>
            </div>
          </div>

          {/* Core Labor Advisory Block */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Labour Law Compliance Support</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Continuous strategic guidance covering structural register parameters, including employee sheets, wage registers, attendance dashboards, and statutory welfare compliance auditing.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Contractor Compliance Advisory</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Empowering principal employers and vendor companies with practical frameworks for legal records maintenance, obligation blueprints, and structural inspections readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-clra" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Advantages of Professional Licensing Alignment
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many government groups, PSUs, and enterprises require contractors to confirm legal workforce registrations before bidding. Aligning credentials reduces your operational exposure.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure project eligibility, satisfy enterprise vendor parameters, and completely remove structural compliance errors."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal Authorization</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Provides full legal authority to manage large-scale external workforces across complex contract setups.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Corporate Contract Credibility</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Builds high operational trust thresholds with tier-1 enterprise partners and corporate entities.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Structured Management</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Supports structured documentation layouts, record logs, and active resource allocations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Mitigated Penalties Risk</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Protects directors and parent enterprises against fines or warnings stemming from unexpected labor audits.</p>
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
              Sectors Requiring CLRA Alignment
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable pathways across highly regulated industrial groups.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Construction & Infra', 'Manufacturing Units', 'Security Agencies', 'Housekeeping Corps', 'Staffing & Manpower', 'Logistics & Warehouses', 'Facility Management', 'Government Contractors'].map((sector) => (
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
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Expert Labour Law Professionals",
                  "End-to-End Registration Support",
                  "Industry-Specific Project Solutions",
                  "Transparent & Reliable Communication",
                  "Secure Information Architecture",
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

              <div className="bg-white p-6 rounded-xl border border-slate-200 text-xs text-slate-500 space-y-2">
                <p className="font-bold text-slate-700">Documents Generally Required (Varies by State):</p>
                <p>• <strong>Corporate:</strong> Certificate of Incorporation/Partnership deed, PAN, GST, Address tracking records, Shop registration.</p>
                <p>• <strong>Contractor:</strong> KYC parameters, PAN, Aadhaar data, Signatures.</p>
                <p>• <strong>Project Context:</strong> Active Work Order / Contract Agreement, Principal Employer Certificate where applicable, estimated workforce volumes.</p>
              </div>
            </div>

            {/* Right Box: Process Tracking */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Registration Roadmap</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p><strong>Step 1 - Initial Consultation:</strong> Analyzing core operational timelines, target locations, contractor footprints, and enterprise volumes.</p>
                <p><strong>Step 2 - Applicability Assessment:</strong> Validating structural applicability indices against state thresholds and statutory worker counts.</p>
                <p><strong>Step 3 - Collection & Auditing:</strong> Reviewing structural corporate documentation, agreements, and verification credentials.</p>
                <p><strong>Step 4 - Application Preparation:</strong> Compiling appropriate legal statements, schedules, and filing elements accurately.</p>
                <p><strong>Step 5 - Authority Submission:</strong> Managing submission tracking before the competent labor department office until final processing.</p>
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