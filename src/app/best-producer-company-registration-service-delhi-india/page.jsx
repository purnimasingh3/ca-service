import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Updated metadata reference for Producer Company
export const metadata = servicesMetadata.producerCompanyRegistration;

export default function ProducerCompanyRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "Expert CA Support At Every Step",
    "100% Compliant With Indian Laws",
  ];
  const faqs = [
    { q: "What is the minimum number of members required?", a: "Generally, at least 10 individual primary producers or 2 producer institutions are required to form a Producer Company." },
    { q: "Can a Producer Company earn and distribute profits?", a: "Yes. A Producer Company can conduct its business operations and distribute benefits or profits among members in complete accordance with applicable laws." },
    { q: "Is Producer Company registration suitable for individual farmers?", a: "Yes. This specialized structure is explicitly designed for farmers, primary producers, and allied groups to pool capabilities and scale growth." },
    { q: "Can a Producer Company obtain government benefits?", a: "Absolutely. Registered Producer Companies and FPOs gain institutional eligibility for multiple dedicated agricultural schemes, development programs, and subsidies." },
    { q: "How long does the entire registration process take?", a: "The framework generally takes around 10-15 working days, heavily subject to documentation readiness and MCA processing timelines." }
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
                ⚡ Empowering Producers · Enriching Futures
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Producer Company Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  CA Firm in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Build, grow, and prosper together. Establish a specialized corporate framework that combines the benefits of a cooperative society with the professional framework of a private limited company.
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
            Expert Producer Company Registration Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the <strong className="text-blue-600 font-semibold">Best Producer Company Registration CA Firm in Delhi India</strong>? Fintax Adviser provides complete registration services for farmers, agriculturists, dairy producers, horticulturists, fishery businesses, tribal producers, and agricultural entrepreneurs across India. A Producer Company is designed to empower primary producers to collectively manage production, processing, marketing, procurement, and distribution activities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Registration & Core Offerings
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive legal structuring, statutory compliance setup, and business advisory for primary producers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Company Incorporation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete incorporation support under the Indian Companies Act parameters managed by senior corporate experts.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Producer Company Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Name Approval & Reservation</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fast & Hassle-Free Filing</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Credentials & Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Securing critical legal credentials for stakeholders alongside drafting custom foundational bylaws.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DSC Registration Setup</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> DIN Allocation Management</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> MOA & AOA Custom Drafting</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Taxation & Ongoing Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Initial tax framework setup followed by structural governance modeling for seamless fiscal performance.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> PAN & TAN Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> GST Registration Assistance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Annual ROC Compliance Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-producer-co" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is a Producer Company?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A Producer Company is formed under the Companies Act for improving production, harvesting, procurement, grading, pooling, marketing, selling, and export related to agricultural and allied sectors. It builds a legal entity supporting collective growth.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Stronger Producers, Stronger India: We help primary producers combine transparent corporate status with mutual cooperative advantages."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Identity</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Separate legal entity framework outfitted with perpetual corporate succession values.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Limited Liability</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Complete structural insulation safeguarding members' personal liabilities based on shareholding limits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Better Market Access</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Amplified market systems designed to boost bargaining power and overall operational profitability.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Government Benefits</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Gain immediate institutional eligibility to tap multiple core agricultural schemes and subsidies.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Professional Management</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Deploy structured corporate operations featuring dynamic organizational boards, complete accountability controls, and transparent governance formats.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="producer-requirements" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Minimum Structural & Document Requirements
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Ensure you satisfy the basic prerequisites established under the Ministry of Corporate Affairs (MCA).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Member Minimums</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Requires a minimum of 10 individual primary producers OR a minimum of 2 corporate producer institutions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Director Requirements</h3>
              <p className="text-slate-700 text-sm leading-relaxed">A baseline requirement of minimum 5 Directors is mandatory to drive corporate institutional governance.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Authorized Capital</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Capital requirements are structured appropriately based upon specified producer activities and business objectives.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Director Identity Proof</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Mandatory compilation of PAN Cards, Aadhaar Cards, and valid Passports (where applicable) for proposed directors.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Office Address Validation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Formal verification requires Rent Agreements, Utility/Electricity Bills, Property Documents, and a valid NOC.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Producer Activity Profile</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Clear compilation detailing Member Information, core Nature of Agricultural Activities, and overall business objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Ideal Structure For Various Primary Sectors
            </h2>
            <p className="text-xs text-slate-500 mt-1">Empowering diverse agricultural, rural, and producer groups across India.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Farmers & Agriculturists',
              'Dairy, Fishery & Poultry',
              'FPOs & Producer Groups',
              'Horticulturists & Allied',
              'Beekeepers & Cooperatives',
              'Tribal Producer Groups',
              'Rural Producer Orgs',
              'Agri Entrepreneurs'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Step-by-Step Incorporation Workflow */}
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
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert Dedicated CA Support",
                  "Pan India Online Services",
                  "Affordable Pricing Packages",
                  "End-to-End Annual Filing Setup"
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
                Our multidisciplinary corporate expert team features Chartered Accountants, Legal Advisors, Compliance Experts, and Business Consultants ready to streamline your FPO setup.
              </p>
            </div>

            {/* Right Column: Steps to Incorporation Block */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Registration Journey
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  7-Step Fast & Hassle-Free Process
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Step 1 - Initial Consultation',
                  'Step 2 - Document Collection',
                  'Step 3 - DSC & DIN Application',
                  'Step 4 - MCA Name Reservation',
                  'Step 5 - Incorporation Filing',
                  'Step 6 - Certificate Issuance',
                  'Step 7 - PAN, TAN & GST Setup'
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