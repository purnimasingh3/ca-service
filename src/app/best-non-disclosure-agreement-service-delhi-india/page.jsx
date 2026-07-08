import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.ndaServices || {
  title: "Best NDA Drafting & Registration Consultant in India | Fintax Adviser",
  description: "Protect your confidential information, business models, and trade secrets with premium legally drafted Non-Disclosure Agreements from Fintax Adviser.",
};

export default function NdaLandingPage() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients Served",
    "Expert Legal Professionals",
    "100% Confidential & Secure",
  ];

  const faqs = [
    { q: "Is an NDA legally enforceable in India?", a: "Yes. A properly drafted NDA can be legally enforceable under applicable Indian laws." },
    { q: "Can startups use NDAs?", a: "Yes. Startups commonly use NDAs to protect ideas, business models, and investor discussions." },
    { q: "What is the difference between a unilateral and mutual NDA?", a: "A unilateral NDA protects information shared by one party, while a mutual NDA protects information exchanged by both parties." },
    { q: "How long should an NDA remain valid?", a: "The duration depends on the nature of confidential information and business requirements." },
    { q: "Can employees be required to sign an NDA?", a: "Yes. Many businesses use employee NDAs to protect confidential company information." },
    { q: "Why should businesses use professionally drafted NDAs?", a: "Professionally drafted agreements provide stronger legal protection, clarity, and enforceability while reducing the risk of disputes." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ PROTECT YOUR INFORMATION | PROTECT YOUR BUSINESS
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Non-Disclosure Agreement
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  (NDA) Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                A legally drafted NDA helps you protect confidential information, business ideas, and trade secrets from unauthorized disclosure.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Protect Your Confidential Business Information with a Legally Drafted NDA
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-4">
            <p>
              A Non-Disclosure Agreement (NDA) is a legal contract that protects confidential information from being disclosed to unauthorized parties. Whether you are a startup, company, consultant, freelancer, investor, employer, or business owner, an NDA helps safeguard sensitive business data, trade secrets, intellectual property, financial information, client lists, and strategic plans.
            </p>
            <p>
              At <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, we provide professionally drafted Non-Disclosure Agreements (NDA) tailored to your business requirements, ensuring legal protection and confidentiality compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">What is a Non-Disclosure Agreement (NDA)?</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A Non-Disclosure Agreement is a legally enforceable contract between two or more parties that restricts the sharing or misuse of confidential information.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-[#071c3d]">What the Agreement Defines:</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-base sm:text-lg text-slate-600">
                It maps precisely what information is confidential, who can access it, how it can be utilized, the active duration parameters, and the exact legal consequences of any regulatory breach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="types" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Types of NDA We Provide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unilateral NDA</h3>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-blue-600 text-md leading-relaxed">One single party explicitly shares sensitive records, while the corresponding receiving entity commits to absolute internal data protection protocols.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mutual NDA</h3>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-blue-600 text-md leading-relaxed">Both structural entities exchange strategic proprietary data details and align to balanced protective compliance policies.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 group">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multilateral NDA</h3>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-blue-600 text-md leading-relaxed">Deployed systematically across diverse stakeholders, multi-party alliances, and complex cross-functional corporate networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Matrix Section */}
      <section className="py-24 bg-slate-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl">
                Key Benefits of a Robust NDA
              </h2>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-md font-semibold text-blue-600 leading-relaxed">
                  "Keep your business information safe, secure, and entirely protected within strong legally configurations."
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Legal Protection", desc: "Strong legal shield protecting structural corporate components against misuse." },
                { title: "Confidentiality Assurance", desc: "Keeps critical strategies, financial vectors, and customer databases fully private." },
                { title: "Business Trust", desc: "Strengthens corporate reputation during capital fundraising or partner onboarding." },
                { title: "Dispute Resolution", desc: "Establishes clear operational legal remedies in instances of structural breach." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 border border-slate-200 bg-slate-200 rounded-xl">
                  <h4 className="font-bold text-base uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-md text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope / Who Needs It Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Who Should Use an NDA?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-bold text-slate-700">
            {["Startups & Co-Founders", "Corporate Frameworks", "Investors & VCs", "Consultants & Freelancers", "Vendors & Contractors", "Technology & IT Firms", "Marketing Agencies", "Product Developers"].map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl border border-slate-200 flex items-center justify-center">
                <span className="text-blue-700 text-base">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Our NDA Drafting Process Blueprint</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Requirement Discuss", desc: "Reviewing business dependencies and key risks." },
              { step: 2, title: "Data Collection", desc: "Gathering profile details of target participant entities." },
              { step: 3, title: "Draft Preparation", desc: "Configuring a highly customized confidentiality layout." },
              { step: 4, title: "Legal Review", desc: "Analyzing regulatory parameters and verification points." },
              { step: 5, title: "Delivery", desc: "Providing execution-ready documentation assets directly." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-md text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="w-full space-y-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d]">Why Choose Fintax Adviser?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {["15+ Years Experience", "Experienced Legal Team", "Customized Adjustments", "Quick Turnaround Time", "Cost-Effective Packages", "Pan-India Virtual Processing"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-slate-200 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm shrink-0">✓</div>
                    <span className="text-base font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-2xl font-black text-white">Corporate Support Hub</h3>
              <p className="text-slate-300 text-base">Providing professional protection arrangements tailored to your precise industrial criteria.</p>
              <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">PROTECT YOUR INFORMATION. PROTECT YOUR BUSINESS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions (FAQs)</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}