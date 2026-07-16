import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Assuming udyamRegistration is defined inside your servicesMetadata file
export const metadata = servicesMetadata.udyamRegistration || {
  title: "Online Udyam Registration Support | MSME Certificate Consulting - Fintax Adviser",
  description: "Get your Udyam Registration (formerly Udyog Aadhaar) online with expert CA guidance. Unlock MSME benefits, government schemes, and business loan subsidies seamlessly.",
  canonical:"https://fintaxadviser.com/best-udyog-aadhar-msme-service-delhi-india"
};

export default function UdyogAadhaarLanding() {
  const HERO_STATS = [
    "Instant MSME Certificate Support",
    "Government Subsidy Mapping",
    "Priority Business Loan Setup",
    "End-to-End Compliance Audit",
  ];

  const faqs = [
    { 
      q: "What is the difference between Udyog Aadhaar and Udyam Registration?", 
      a: "Udyam Registration is the revised, modernized process introduced by the Ministry of MSME to replace the old Udyog Aadhaar / EM-II system. All businesses operating under the prior framework must migrate to the new platform to retain legal enterprise benefits." 
    },
    { 
      q: "What documents are required for online Udyam Registration?", 
      a: "You primarily need the entrepreneur's Aadhaar card, the company's permanent account number (PAN), and the Goods and Services Tax Identification Number (GSTIN) if statutory thresholds demand it." 
    },
    { 
      q: "What are the core benefits of getting an MSME certificate?", 
      a: "Registered enterprises enjoy lower interest rates on bank loans, collateral-free credit facilities, legal protection against delayed buyers' payments, and direct subsidies on trademark or patent applications." 
    },
    { 
      q: "Is an audit needed for Micro, Small, or Medium classifications?", 
      a: "No special physical audit is required for the application. The portal automatically extracts financial information, including annual turnovers and investment asset values, securely via integration with the Income Tax and GST portals." 
    },
    { 
      q: "Can a retail or wholesale trader apply for Udyam Registration?", 
      a: "Yes. The Ministry of MSME updated its directives to allow retail and wholesale traders to register under the Udyam portal, primarily extending priority sector lending benefits to them." 
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
                ⚡ Register · Verify · Qualify · Save
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Online Udyam Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & MSME Certification
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Secure your official MSME Government Certificate smoothly. Migrate older Udyog Aadhaar portfolios, fix validation errors, and unlock top-tier banking subsidies with professional CA oversight.
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
                  Consult an MSME Expert Now
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
            Accelerate Enterprise Growth via Strategic Government Recognition
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Transitioning your organization from an informal configuration into a properly registered corporate entity is necessary to claim state-backed advantages. Obtaining an official Udyam Certificate provides structural legitimacy, clearing the path to competitive public tenders, credit initiatives, and legal frameworks designed to secure timely buyer settlement metrics.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Professional MSME Advisory Offerings
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive processing setups including document indexing, profile restructuring, and statutory filings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Fresh Registration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">New Udyam Registrations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete setup execution matching appropriate industrial classification indicators accurately.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ NIC Code Mapping</span>
                <span>✓ Aadhaar Verification</span>
                <span>✓ Activity Verification</span>
                <span>✓ Final E-Certificate</span>
              </div>
            </div>

            {/* Legacy Migration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Udyog Aadhaar Migration</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Updating outmoded system credentials into the current unified ministerial database layout effortlessly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Legacy Record Fetch</span>
                <span>✓ PAN Link Validations</span>
                <span>✓ Data Point Re-entry</span>
                <span>✓ Seamless Porting</span>
              </div>
            </div>

            {/* Profile Modification */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Certificate Modifications</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Updating dynamic enterprise scales, adding additional operational plant nodes, and handling plant address alterations.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Investment Updates</span>
                <span>✓ Adding Plant Units</span>
                <span>✓ Bank Detail Changes</span>
                <span>✓ Activity Expansion</span>
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
                Strategic Advantages of Udyam Certification
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Securing an official government registration transforms a baseline company into a prioritized establishment entitled to institutional privileges.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Protect your business against delayed payments and access collateral-free working capital solutions."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Collateral-Free Credit</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Tap into priority institutional lines backed by Credit Guarantee Trust schemes.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Delayed Payment Shield</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Enforce strict maximum payment timelines on your corporate buyers legally.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Overhead Relief</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Claim considerable fee waivers on intellectual property, trademarking, and electrical bills.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Public Procurement Perks</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Gain preferential tender allocations during public sector procurement programs.</p>
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
              Eligible Enterprise Domains
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing reliable solutions tailored for diverse commercial domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Micro Manufacturers', 'Wholesale Distributors', 'E-commerce Platforms', 'Heavy Manufacturers', 'IT Service Firms', 'Marketing Agencies', 'Freelance Professionals', 'Emerging Startups'].map((sector) => (
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
                  Why Handle Registrations via Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Certified Chartered Accountants",
                  "Precise NIC Code Classification",
                  "Proactive Status Audit Reviews",
                  "Government Portal Coordination",
                  "Zero Application Errors",
                  "Integrated Data Confidentiality"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Streamlined Delivery Roadmap</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Structural Analysis:</strong> Aligning initial investment inputs against standard classifications.</p>
                <p><strong>Step 2 - Information Review:</strong> Ensuring matching syntax on PAN, GSTIN, and corporate data records.</p>
                <p><strong>Step 3 - Portal Submission:</strong> Official filing on the state console under explicit verification rules.</p>
                <p><strong>Step 4 - Certificate Issuance:</strong> Final authentication checks before transmitting the digital verification sheet.</p>
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
              Frequently Answered Inquiries
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}