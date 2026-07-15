import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.customerVendorAgreement || {
    title: "Customer & Vendor Agreement Drafting Services in India",
    description: "Professional legal agreement drafting and review services by Fintax Adviser."
  };

export default function CustomerVendorAgreementLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert Legal Professionals",
    "500+ Happy Clients",
    "Strong Business Protection",
  ];

  const faqs = [
    { 
      q: "What is the difference between a Customer Agreement and a Vendor Agreement?", 
      a: "A Customer Agreement governs relationships with customers, while a Vendor Agreement governs relationships with suppliers, contractors, or service providers." 
    },
    { 
      q: "Is a written agreement legally necessary?", 
      a: "While verbal agreements may be enforceable in some situations, written agreements provide significantly stronger legal protection and clarity." 
    },
    { 
      q: "Can agreements be customized?", 
      a: "Yes. Every agreement should be tailored to the specific business relationship and industry requirements." 
    },
    { 
      q: "How long does drafting take?", 
      a: "The timeline depends on complexity, but most agreements can be drafted within a few business days." 
    },
    { 
      q: "Can existing agreements be reviewed?", 
      a: "Yes. We offer professional review and improvement of existing customer and vendor contracts." 
    },
    { 
      q: "Why should businesses use professionally drafted agreements?", 
      a: "Professionally drafted agreements reduce legal risks, prevent disputes, and ensure business interests are properly protected." 
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Strong Agreements · Strong Relationships · Stronger Business
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Customer or Vendor Agreement
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Drafting & Review Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Customized contracts to protect your business interests, reduce legal risks, and establish clear commercial relationships across India.
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
            Establish Secure & Transparent Commercial Relationships
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. A Customer Agreement or Vendor Agreement is a legally binding contract that defines the rights, responsibilities, payment terms, service obligations, and dispute resolution mechanisms between parties. 
            We provide comprehensive drafting and review services for startups, SMEs, manufacturers, and growing enterprises across India to minimize operational exposure.
          </p>
        </div>
      </section>

      {/* Dual Breakdown: Customer vs Vendor Agreements */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Customer Agreement Box */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-lg text-lg">📋</span>
                What is a Customer Agreement?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A legal contract between a business and its customer that ensures smooth operations, helps avoid misunderstandings, and builds long-term trust.
              </p>
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Key Elements Covered:</h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">✔ Products & Services</li>
                  <li className="flex items-center gap-2">✔ Pricing & Payments</li>
                  <li className="flex items-center gap-2">✔ Delivery Timelines</li>
                  <li className="flex items-center gap-2">✔ Service Obligations</li>
                  <li className="flex items-center gap-2">✔ Refund & Cancellations</li>
                  <li className="flex items-center gap-2">✔ Limitation of Liability</li>
                </ul>
              </div>
            </div>

            {/* Vendor Agreement Box */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg text-lg">🛒</span>
                What is a Vendor Agreement?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A contract with a supplier, contractor, distributor, or service provider that maintains supply chain efficiency, ensures accountability, and reduces risk.
              </p>
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Key Elements Covered:</h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">✔ Scope of Work</li>
                  <li className="flex items-center gap-2">✔ Quality Standards</li>
                  <li className="flex items-center gap-2">✔ Delivery Commitments</li>
                  <li className="flex items-center gap-2">✔ Payment Schedules</li>
                  <li className="flex items-center gap-2">✔ Intellectual Property</li>
                  <li className="flex items-center gap-2">✔ Termination Conditions</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Contractual Expertise Includes
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored legal solutions designed to protect your liabilities and maximize commercial enforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agreement Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Customized legal frameworks constructed strictly around your specific business models and standard workflows.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Agreement Review</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Deep audits of your existing vendor or customer templates to successfully identify risks and plug missing protection gaps.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Legal Compliance Check</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Verification of execution procedures to confirm strict alignment with active Indian regulatory provisions and contract acts.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Clause Customization</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Tailored formatting of highly complex clauses including Indemnity, Governing Laws, SLA Metrics, and Confidentiality workflows.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Negotiation Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Professional strategic guidance and expert breakdown during intense contract discussions with corporate counterparties.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Updates & Amendments</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Iterative modifications to modernize existing legal covenants as corporate business requirements scale or change.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-agreements" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Businesses Need Corporate Agreements
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Verbal understandings fail when operational pressure mounts. Secure contract architectures eliminate disputes by maintaining complete alignment over commercial baselines.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Well-drafted agreements today create a resilient, stronger business landscape tomorrow."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Protects complex business interests and minimizes future courtroom exposure.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Clear Terms</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Defines exact operational roles, deadlines, and responsibilities for everyone.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Payment Security</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Establishes transparent schedules, late fees, and secure collection metrics.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Risk Management</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Limits absolute operational liability limits if unexpected failure occurs.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Dispute Prevention & Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Provides immediate professional mediation roadmaps while reinforcing deep commercial market legitimacy.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section id="benefits" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Professional Drafting
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Protect your organizational long-term stability with premium, compliant execution structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strong Protection", desc: "Bulletproof shielding against structural non-performance risks." },
              { title: "Reduced Business Risks", desc: "Eliminates surprise operational vulnerabilities early." },
              { title: "Better Trust", desc: "Builds absolute clarity with strategic customers and reliable vendors." },
              { title: "Faster Resolutions", desc: "Avoid costly litigation loops through embedded arbitration structures." }
            ].map((benefit, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{benefit.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Sectors We Serve */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Sectors Relying on Our Drafting Solutions
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing completely customized agreements across size, industry, and strategic goals.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'SMEs', 'IT & Software Companies', 'E-commerce Brands', 'Manufacturers', 'Exporters & Importers', 'Marketing Agencies', 'Corporate Organizations'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Documents Split Grid */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Six Step Process */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Our Execution Process
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Step 1: Consultation & Discovery",
                  "Step 2: Information Collection",
                  "Step 3: Custom Agreement Drafting",
                  "Step 4: Intensive Legal Compliance Review",
                  "Step 5: Client Feedback & Revisions",
                  "Step 6: Final Verified Delivery"
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Information Needed Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Requirements
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Required Information & Onboarding Data
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Official Business Entity Name',
                  'Company Incorporation Papers',
                  'PAN & GST Documentation',
                  'Counterparty Identity Proofs',
                  'Defined Scope of Products/Services',
                  'Agreed Financial/Commercial Terms',
                  'Milestone Payment Structures',
                  'Special Indemnity Requirements'
                ].map((doc) => (
                  <div
                    key={doc}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    {doc}
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