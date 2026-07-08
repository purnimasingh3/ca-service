import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata configuration for the PSARA service
export const metadata = servicesMetadata.psaraLicense || {
  title: "Best PSARA License Registration Consultant in Delhi India | Fintax Adviser",
  description: "Get your PSARA License and operate your private security agency legally across India with expert guidance from Fintax Adviser.",
};

export default function PremiumPsaraLicenseLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "Expert Compliance Team",
    "Legal, Trusted & Compliant",
    "Fast | Reliable | 100% Approved",
  ];

  const faqs = [
    { 
      q: "Is PSARA License mandatory?", 
      a: "Yes, any business providing private security services must obtain a valid PSARA License to operate legally." 
    },
    { 
      q: "Who issues the PSARA License?", 
      a: "The Controlling Authority designated by the respective State Government issues the license." 
    },
    { 
      q: "Can a company operate in multiple states with one license?", 
      a: "Generally, separate approvals or distinct state-wise licenses are required depending on specific state regulations." 
    },
    { 
      q: "How long does the registration process take?", 
      a: "The timeline varies based on document readiness, training arrangement confirmation, and specific state authority verification procedures." 
    },
    { 
      q: "Can startups apply for a PSARA License?", 
      a: "Yes, eligible startups and newly established private security agencies can apply for registration subject to standard criteria." 
    },
    { 
      q: "What is the validity of a PSARA License?", 
      a: "The validity typically ranges from 1 to 5 years depending on the state, and is subject to timely renewal as per applicable regulations." 
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Ambient UI Background Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ LEGAL | TRUSTED | COMPLIANT
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                PSARA License 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Registration Services
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2 font-medium">
                Get your PSARA License and operate your private security agency legally across India with end-to-end expert guidance.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-md shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-800 text-md sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional Consultancy by Fintax Adviser
          </h2>
          <div className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-normal space-y-6 text-justify sm:text-center">
            <p>
              Looking for reliable PSARA License Registration services in India? <strong className="text-blue-600 font-bold">Fintax Adviser</strong> provides complete assistance for obtaining a PSARA License (Private Security Agencies Regulation Act License) for security agencies and private security service providers across India.
            </p>
            <p>
              The PSARA License is mandatory for businesses offering security guard services, bodyguard services, corporate security, event security, industrial security, and other private security operations. Our experts ensure smooth documentation, application filing, and compliance support for hassle-free approval.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">What is a PSARA License?</h3>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                The Private Security Agencies Regulation Act (PSARA), 2005 regulates private security agencies operating in India.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Any company, LLP, partnership firm, or proprietorship providing private security services must obtain a PSARA License from the designated state authority before commencing operations.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                A PSARA License helps establish legal compliance, business credibility, and eligibility to provide security services to corporate and government clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-2xl font-black text-[#071c3d]">Private Security Agencies Regulation Act, 2005</h4>
              <div className="h-1.5 w-24 bg-blue-600 rounded"></div>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Operating a security firm without proper statutory allocation poses a high risk of penalties and legal shutdowns. Secure your active compliance frameworks through Fintax Adviser's direct filing processing protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Requires a PSARA License Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Who Requires a PSARA License?
            </h2>
            <p className="text-slate-600 text-xl sm:text-2xl">
              PSARA Registration is strictly required for the following business layouts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "01", title: "Security Guard Agencies", desc: "Standard residential, commercial, and individual watchman deployment services." },
              { id: "02", title: "Corporate Security Service Providers", desc: "Tailored institutional safety management infrastructures for corporate offices and tech parks." },
              { id: "03", title: "Event Security Companies", desc: "Specialized, temporary high-crowd monitoring management for concerts, summits, and functions." },
              { id: "04", title: "Industrial Security Agencies", desc: "Robust protection services formulated specifically for factories, warehouses, and manufacturing hubs." },
              { id: "05", title: "Residential Security Providers", desc: "Comprehensive security coverage setups for apartment complexes, societies, and private townships." },
              { id: "06", title: "Cash Management Security Providers", desc: "High-security transport guard deployments for transit management and bank ATMs." },
              { id: "07", title: "Bodyguard & Personal Security", desc: "VIP protection alignments, executive details, and specialized physical safety supervisors." },
              { id: "08", title: "Facility Management Companies", desc: "Integrated property agencies offering structural private guarding elements inside their operational packages." }
            ].map((item) => (
              <div key={item.id} className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.id}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-md leading-relaxed mb-4">{item.desc}</p>
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded self-start">PSARA Regulated</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section & Core Grid */}
      <section className="py-24 bg-slate-100 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl lg:text-5xl">
                Why PSARA License is Important?
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed">
                Operating a private security agency requires structural alignment with strict federal guidelines. Proper compliance transforms regular entities into highly valued defense networks.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-md font-bold text-blue-700 leading-relaxed">
                  "Build absolute legal authorization, secure enterprise tenders, and create continuous organizational asset growth safely under the PSARA Act, 2005."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Legal Compliance", desc: "Operate legally under the official provisions of the PSARA Act, 2005 with authorized security operations." },
                { title: "Business Credibility", desc: "Increase professional trust with clients, corporate companies, and critical government agencies." },
                { title: "Corporate Contracts", desc: "Gain institutional eligibility for high-ticket contracts across manufacturing plants, commercial estates, and public sectors." },
                { title: "Regulatory Approval", desc: "Achieve complete structural alignment directly with State-level controlling authority benchmarks." },
                { title: "Business Growth", desc: "Seamlessly expand your service footprints across multiple operational districts and legal jurisdictions." }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 border border-slate-200 bg-white rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-lg uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-md sm:text-lg text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Benefits of PSARA License Registration</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { b: "Legal Authorization", d: "Operate your private security agency legally in India without administrative gaps." },
              { b: "Business Credibility", d: "Build instant trust among high-tier clients, global corporates, and government organizations." },
              { b: "Government Compliance", d: "Meet all active regulatory workflows and reporting protocols under the PSARA Act." },
              { b: "Corporate Contracts", d: "Become completely eligible for enterprise contracts with multi-national companies and factories." },
              { b: "Business Expansion", d: "Scale and seamlessly expand security operations across multiple locations and states." },
              { b: "Professional Recognition", d: "Significantly enhance your security agency's market reputation and financial valuation." }
            ].map((benefit, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl flex items-start gap-3 shadow-xs">
                <span className="text-emerald-600 font-bold text-xl mt-0.5">✓</span>
                <div className="space-y-1">
                  <span className="text-slate-900 text-lg font-bold block leading-tight">{benefit.b}</span>
                  <p className="text-slate-600 text-md leading-relaxed">{benefit.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Eligibility for PSARA License
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">To obtain a functional PSARA License, applicants must fulfill these core criteria:</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4 max-w-4xl mx-auto">
            {[
              "Must be an Indian citizen or a validly registered corporate business entity in India.",
              "The applicant, directors, and partners must maintain a clean criminal background record with zero convictions.",
              "Must meet all prescribed structural infrastructure and training parameters.",
              "Appoint highly qualified supervisors and managers as per specific state regularized benchmarks.",
              "Enter into a formal training arrangement or Memorandum of Understanding (MOU) with an approved security training institute."
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3.5 text-lg text-slate-700 font-medium">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0 font-bold mt-0.5">{index + 1}</span>
                <p className="leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              Documents Required for PSARA License Registration
            </h2>
            <p className="text-slate-600 text-xl">
              A comprehensive documentation roadmap needed to secure efficient department clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Business Docs</h3>
              <ul className="text-slate-700 text-md space-y-3 font-semibold">
                <li className="flex items-start gap-2">✔ Certificate of Incorporation / Business Registration Proof</li>
                <li className="flex items-start gap-2">✔ Partnership Deed / LLP Agreement (if applicable)</li>
                <li className="flex items-start gap-2">✔ PAN Card of Business Entity</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Identity & Address</h3>
              <ul className="text-slate-700 text-md space-y-3 font-semibold">
                <li className="flex items-start gap-2">✔ Aadhaar Card & PAN Card</li>
                <li className="flex items-start gap-2">✔ Passport-size Photographs</li>
                <li className="flex items-start gap-2">✔ Rent Agreement or Registered Ownership Proof</li>
                <li className="flex items-start gap-2">✔ Updated Utility Bill (Electricity/Water)</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Staff & Director Docs</h3>
              <ul className="text-slate-700 text-md space-y-3 font-semibold">
                <li className="flex items-start gap-2">✔ Director & Promoter KYC Documents</li>
                <li className="flex items-start gap-2">✔ Official Police Verification Clearances</li>
                <li className="flex items-start gap-2">✔ Detailed Organizational Structure Setup</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Other Compliance</h3>
              <ul className="text-slate-700 text-md space-y-3 font-semibold">
                <li className="flex items-start gap-2">✔ Certified Training Affidavit / MOU with Institute</li>
                <li className="flex items-start gap-2">✔ Formulated Employee Details Data (if applicable)</li>
                <li className="flex items-start gap-2">✔ Structural Infrastructure Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              PSARA License Registration Process
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Our transparent and structural 6-step blueprint designed for rapid verification turnaround:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { step: 1, title: "Initial Consultation", desc: "Understanding specific business layouts and checking state-specific rule regulations." },
              { step: 2, title: "Document Collection", desc: "Gathering, verifying, and deep structural audit checking of all mandatory corporate records." },
              { step: 3, title: "Training Institute Agreement", desc: "Configuring training partnership compliances and drafting the legal MOU documentation." },
              { step: 4, title: "Application Filing", desc: "Precise compilation and portal submission of the PSARA license file with authorities." },
              { step: 5, title: "Verification Process", desc: "Thorough background records verification and space checks conducted by the state department." },
              { step: 6, title: "License Approval", desc: "Official secure issuance of your operational PSARA License certificate upon validation." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-base font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-md uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Trust Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-slate-900 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1.5 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years of Professional Experience",
                  "Expert Compliance Team",
                  "Fast Processing Setup",
                  "Affordable Pricing Structure",
                  "Pan India Services Support",
                  "Complete Compliance Assistance"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-base font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-blue-600 leading-relaxed pt-4 border-t border-slate-200 max-w-xl font-medium">
                Extensive professional expertise in business registrations, licensing, and security industry standards. Backed by specialized corporate compliance managers providing dedicated operational guidance.
              </p>
            </div>

            {/* Right Column: Corporate Hub Card */}
            <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 text-white">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20 inline-block">
                  Corporate Hub
                </span>
                <h3 className="text-3xl font-black text-white mt-3">Fintax Adviser Network</h3>
              </div>
              <div className="space-y-4 text-lg text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Our Office Location</span>
                  <span className="font-bold text-white">Delhi, India</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-medium">Core Strategy Focus</span>
                  <span className="font-bold text-white">Licensing | Legal Compliance</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400 font-medium">Operational Scope</span>
                  <span className="font-bold text-white">Pan-India Virtual Processing</span>
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Your Trusted Partner for Private Security Authorizations</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}