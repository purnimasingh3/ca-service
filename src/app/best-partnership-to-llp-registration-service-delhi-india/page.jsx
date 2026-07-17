import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Updated metadata reference for Partnership to LLP Conversion
export const metadata = servicesMetadata.partnershipToLlp || {
  title: "Best Partnership to LLP Registration CA Firm in Delhi India | Fintax Adviser",
  description: "Convert your Partnership Firm to LLP and enjoy Limited Liability, Better Credibility & Endless Growth with Fintax Adviser.",
};

export default function PartnershipToLLPRegistration() {
  const HERO_STATS = [
    "12+ Years Experience",
    "500+ Happy Clients",
    "Expert CA & Compliance Team",
    "100% Compliant With Law",
  ];

  const faqs = [
    { q: "Can an existing partnership firm be converted into LLP?", a: "Yes. All eligible traditional partnership firms can seamlessly transform into an LLP under the exact legal framework regulations set by the Ministry of Corporate Affairs (MCA)." },
    { q: "Is a completely new business entity created after conversion?", a: "Yes, the registered LLP takes over with a new distinct corporate profile status and is recognized as a separate standalone legal entity separate from its constituent partners." },
    { q: "Do all active partners need to transition into the new LLP?", a: "Yes, under general regulations, all existing active partners of the partnership firm must become partners in the converted LLP structure upon initialization." },
    { q: "How long does the complete LLP conversion process typically take?", a: "It typically takes about 10-15 working days, heavily contingent upon proper documentation submission speeds and backend MCA portal review approvals." },
    { q: "Why should we choose Fintax Adviser for our partnership conversion requirements?", a: "Professional conversion guarantees zero errors, seamless brand value transfer, flawless document drafting, and absolute compliance safety throughout your legal upgrade roadmap." }
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
                ⚡ Upgrade Today · Grow Tomorrow · Convert | Protect | Prosper
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Partnership to LLP
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Registration in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Convert your traditional Partnership Firm into a powerful Limited Liability Partnership (LLP). Enjoy limited liability protection, enhanced brand credibility, and endless corporate growth.
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
                  Book a Free Conversion Consultation
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
            Expert Partnership Firm to LLP Conversion Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the <strong className="text-blue-600 font-semibold">Best Partnership to LLP Registration CA Firm in Delhi India</strong>?
            Fintax Adviser provides end-to-end Partnership Firm to LLP Conversion services, helping traditional businesses transition seamlessly with full legal compliance and professional governance.
            LLPs offer the perfect mix: combining the strategic flexibility of a standard partnership with the complete legal liability protection of a Private Limited company.
          </p>
        </div>
      </section>

      {/* Services Suite Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Complete Corporate Services We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our expert legal and compliance capabilities handle all steps of corporate transitions and setup workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Partnership to LLP Conversion</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete strategic conversion restructuring and technical verification management to switch legal modules flawlessly.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Firm Asset Assessment</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Conversion Form Filings</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">LLP Incorporation Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Fresh incorporation architectures setup directly through MCA guidelines to create standalone legal operations fast.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Structural Advisory</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MCA Incorporation Filing</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">DSC & DPIN Registrations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete onboarding of partners through secured credentials setups required for verified legal accountability mapping.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Digital Signature Setup</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Designated Partner Allocation</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Name Approval & Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Reservation of unique system naming markers alongside meticulous documentation drafting of standard partner criteria agreements.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> RUN-LLP MCA Reservation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Legal Agreement Architecture</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Taxation & Bank Setup</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Immediate alignment of basic fiscal markers to ensure your newly formed corporate framework remains active and fully ready for commercial setups.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PAN & TAN Registrations</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST & Corporate Banking Setup</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annual Compliance & ROC Filings</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end statutory protection parameters through organized year-round financial declarations management.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MCA Year-End Data Submissions</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Permanent Regulatory Protection</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-conversion" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Convert a Partnership Firm into LLP?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional partnerships tie professional vulnerabilities to personal assets. Transitioning to an LLP completely removes personal structural liability risks while vastly improving bank credit limits, client trust ratings, and capital scale options.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Protect your business footprint and insulate personal wealth assets seamlessly through our audited MCA conversion tracks."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Limited Liability Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Partners are strictly liable only to the extent of their agreed financial contribution layout.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Separate Legal Entity Status</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The LLP is systematically monitored as a distinct standalone legal person in the eyes of law codes.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Enhanced Corporate Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Financial institutes, international clients, and vendors clearly prioritize verified LLP setups over basic firms.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Perpetual Succession Control</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Operational continuity remains permanently intact regardless of active partner departures or changes.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Optimized Governance Burden</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Enjoy significantly decreased structural operational compliances, audit steps, and statutory setups compared to standard Private Limited Company constraints.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Simple Conversion Process Flow */}
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Simple & Easy Conversion Process
            </h2>
            <p className="text-slate-600 text-sm mt-1">Our chronological layout structure ensures your professional conversion clears MCA tracking efficiently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Complete structural evaluation to understand goals, partner mappings, and document eligibility." },
              { step: "02", title: "Credentials Ready", desc: "Securing modern high-grade Digital Signatures (DSC) alongside direct DPIN allocations." },
              { step: "03", title: "Name Reservation", desc: "Reserving your chosen corporate entity name directly within the MCA RUN-LLP database portal." },
              { step: "04", title: "Filing Conversion", desc: "Drafting agreements, filing critical conversion forms, and obtaining your Certificate of Incorporation." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center relative group">
                <div className="absolute top-4 right-4 text-xs font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                  {p.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 mt-2">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist / Document Requirements Matrices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Required Conversion Documentation</h2>
            <p className="text-slate-500 text-sm mt-2">Please ensure verified digital copies of these standard corporate records are kept ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 border-b border-slate-200 pb-2 text-blue-600">Firm Records</h3>
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2"><span>✓</span> Existing Registered Partnership Deed</li>
                <li className="flex items-center gap-2"><span>✓</span> Official PAN Card of the Firm</li>
                <li className="flex items-center gap-2"><span>✓</span> Firm Registration Certificate (If available)</li>
              </ul>
            </div>
            {/* Box 2 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 border-b border-slate-200 pb-2 text-blue-600">Partner Credentials</h3>
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2"><span>✓</span> PAN Cards & Aadhaar Identity Cards</li>
                <li className="flex items-center gap-2"><span>✓</span> Recent Passport Size Photographs</li>
                <li className="flex items-center gap-2"><span>✓</span> Address Verification (Bank Bills/Voter ID)</li>
              </ul>
            </div>
            {/* Box 3 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-4 border-b border-slate-200 pb-2 text-blue-600">Registered Office Proof</h3>
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2"><span>✓</span> Recent Utility/Electricity Invoices</li>
                <li className="flex items-center gap-2"><span>✓</span> Signed Rent Agreement papers</li>
                <li className="flex items-center gap-2"><span>✓</span> NOC Form from the Property Owner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix / Why Choose Us Grid */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Advisers
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Industry Experience",
                  "500+ Happy Corporate Clients",
                  "Expert In-House CA Team",
                  "Affordable Upfront Pricing",
                  "Complete End-To-End Support",
                  "Pan India Online Execution"
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
                Our collaborative network utilizes top corporate experts, including experienced Chartered Accountants, Legal Advisors, Compliance Analysts, and Business Consultants.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Corporate Advisory Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Registration',
                  'LLP Incorporation Services',
                  'GST Registration & Filing',
                  'Trademark Registration',
                  'ROC Compliance Management',
                  'Accounting & Bookkeeping',
                  'Income Tax Filing',
                  'Payroll Management Solutions'
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