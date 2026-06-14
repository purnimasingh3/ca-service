import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.onePersonCompany;

export default function PremiumOPCLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients Served",
    "Limited Liability Protection",
    "100% Digital & Fast Process",
  ];
  const faqs = [
    { q: "What is OPC registration?", a: "OPC registration allows a single individual to legally register a business structure with corporate limited liability protection under the guidelines of the Ministry of Corporate Affairs." },
    { q: "Who can apply for OPC registration?", a: "Any natural Indian citizen who is a resident of India is fully authorized to act as an incorporation founder and nominee of an OPC structure under the provisions of the Companies Act." },
    { q: "Is OPC better than sole proprietorship?", a: "Absolutely. A One Person Company structure separates your personal assets from business exposures via legal limited liability protection, whereas a proprietorship places all personal assets at risk." },
    { q: "How long does OPC registration take?", a: "The entire process generally averages around 5–10 working days, depending purely on systemic government confirmation schedules and name clearing timelines." },
    { q: "Is GST mandatory immediately after OPC registration?", a: "No. GST configuration depends primarily on your individual commercial layout parameters, localized operational lines, and reaching standard aggregate fiscal turnover limits." },
    { q: "Can an OPC be converted into a Private Limited Company?", a: "Yes. An OPC can be easily expanded and legally converted into a standard Private Limited Company as your capital foundations grow and additional equity investors onboard." }
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
                🚀 Start Your Business · Enjoy Limited Liability
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                One Person Company
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (OPC) Registration in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Simple, Fast, and 100% Compliant. Enjoy all the professional benefits of a private limited company while maintaining **100% ownership and full corporate control**.
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
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95 text-center">
                  Get Started Legally Now
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
            What is a One Person Company (OPC)?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. An OPC is a powerful business structure introduced under the Companies Act that allows a single entrepreneur to operate a registered company with a **separate legal identity** and **limited liability protection**. It is the ultimate vehicle for solo founders who want professional credibility without managing multiple stakeholders.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our End-to-End OPC Registration Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Fintax Adviser handles all legal complexities with corporate registries, allowing you to focus purely on your business launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", title: "OPC Company Incorporation", desc: "Complete hands-on registration support from document collation to your final Certificate of Incorporation.", items: ["Document Review", "ROC Filing", "Government Fees"] },
              { id: "02", title: "DSC & DIN Registration", desc: "Fast application setups for your mandatory Digital Signature Certificate (DSC) and Director Identification Number (DIN).", items: ["Biometric Verification", "DIN Allocation", "Secure Keys"] },
              { id: "03", title: "Company Name Approval", desc: "Strategic assistance to craft and clear a unique, legally valid brand name through MCA's strict validation systems.", items: ["Name Search Tools", "MCA Compliance", "Re-submission Help"] },
              { id: "04", title: "MOA & AOA Drafting", desc: "Expert structural drafting of the Memorandum of Association and Articles of Association customized for your target industry.", items: ["Object Clauses", "Capital Rules", "Nominee Layouts"] },
              { id: "05", title: "PAN & TAN Allocation", desc: "Simultaneous processing of your corporate Permanent Account Number (PAN) and Tax Deduction Account Number (TAN).", items: ["Tax Office Filing", "Direct Dispatch", "Immediate Activation"] },
              { id: "06", title: "MCA Filing & Compliance Advisory", desc: "Full administrative data onboarding with the Ministry of Corporate Affairs, integrated with long-term setup guidance.", items: ["ROC Compliance", "Audit Ready Framework", "Corporate Transparency"] },
            ].map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.id}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  {service.items.map((tag, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-opc" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose a One Person Company Structure?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional sole proprietorships expose your personal assets to immense operational dangers. Upgrading to an OPC establishes a secure legal wall around your investments while maximizing strategic business value.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "OPC allows solo entrepreneurs to retain 100% ownership control while providing corporate credibility to attract large contracts."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Limited Liability Protection", text: "Your personal savings, home, and assets remain completely detached and protected from business liabilities or defaults." },
                { title: "Separate Legal Identity", text: "An OPC functions as a distinct legal entity in the eyes of tax authorities and laws, separate from its individual owner." },
                { title: "Improved Business Trust", text: "Enterprise corporate clients, banking entities, and vendors inherently trust registered corporate structures over individual freelancers." },
                { title: "Better Funding Gateways", text: "Secure lines of credit, corporate loans, and outside investor capital significantly faster through structured incorporation certifications." },
                { title: "Easy Compliance Tracking", text: "Structured regulations allow streamlined operations, easy banking channels, and organized governance monitoring." },
                { title: "Long-Term Expansion", text: "The corporate foundation provides a natural launchpad for global operations, scaling infrastructure, and seamless scaling transitions." }
              ].map((benefit, idx) => (
                <div key={idx} className={`p-5 border border-slate-200 bg-slate-50 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">{benefit.title}</h4>
                  <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Process Flow Chart Component */}
      <section className="py-24 bg-slate-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Our Seamless Playbook</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl mt-2 text-black">6 Simple Steps to Incorporation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[
              { step: "01", name: "Document Collection", desc: "Easy, secure digital upload of identity documentation and office address verifications." },
              { step: "02", name: "DSC & DIN Setup", desc: "Processing digital security signature algorithms alongside individual director identification numbers." },
              { step: "03", name: "Name Reservation", desc: "Securing your desired exclusive company name approval directly via the MCA system portal." },
              { step: "04", name: "Incorporation Filing", desc: "Submitting legal documentation (MOA, AOA) directly with the Registrar of Companies (ROC)." },
              { step: "05", name: "Certificate Issuance", desc: "Receiving your formal legal corporate birth certificate directly verified and issued by the MCA." },
              { step: "06", name: "Compliance Launch", desc: "Assigning PAN, TAN, and business advisory configurations to activate operations immediately." }
            ].map((step, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 relative hover:border-blue-500 transition-colors">
                <div className="text-blue-500 font-mono font-bold text-3xl mb-3">{step.step}</div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{step.name}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Documents Required for Registration</h2>
            <p className="text-slate-500 text-sm mt-2">Keep these standard digital proofs ready for a quick application process.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { cat: "Identity Proof", docs: ["PAN Card", "Aadhaar Card", "Passport (Foreign Nationals)"] },
              { cat: "Address Proof", docs: ["Bank Statement", "Electricity Bill", "Driving License"] },
              { cat: "Office Proof", docs: ["Rent Agreement", "Utility Bill", "NOC from Property Owner"] },
              { cat: "Photo Proof", docs: ["Recent Passport Size Photograph of the Director"] }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-slate-900 mb-3 text-sm tracking-wide border-b border-slate-200 pb-2 text-blue-600 uppercase">{item.cat}</h5>
                <ul className="space-y-2">
                  {item.docs.map((doc, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5 leading-snug">
                      <span className="text-blue-500 shrink-0">•</span> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Perfectly Optimized For Solo Business Owners
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing legal limited structures across major entrepreneurial models.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Freelancers & Consultants', 'Startups & Solo Founders', 'Small Business Owners', 'Independent Professionals', 'Online Sellers / E-comm', 'Digital Marketers', 'Traders & Retailers', 'Business Advisors'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Corporate Experience",
                  "500+ Happy Corporate Clients",
                  "Expert CA & Legal Team Support",
                  "Fast Online Digital Registration",
                  "Transparent & Affordable Costs",
                  "End-to-End Business Solutions"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">✓</div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our multidisciplinary corporate expert team features Chartered Accountants, Legal Corporate Draftsmen, Tax Experts, Compliance Specialists, and Business Consultants.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Registration Services',
                  'GST Registration Setup',
                  'MSME Registration Services',
                  'Trademark Brand Registration',
                  'ROC Annual Compliance Filing',
                  'Income Tax Return Filing',
                  'Accounting & Bookkeeping Services',
                  'Virtual CFO Advisory Support',
                  'Corporate Startup Advisory'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
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