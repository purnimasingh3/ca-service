import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export default function StartupIndiaRegistrationLanding() {
  const HERO_STATS = [
    "DPIIT Recognition Assistance",
    "Income Tax Exemption Advisory",
    "Intellectual Property Rebates",
    "Self-Certification Setups",
  ];

  const registrationSteps = [
    { step: 1, title: "Consultation", desc: "Understanding operational footprint and validating basic eligibility profiles." },
    { step: 2, title: "Data Collection", desc: "Aggregation and systemic validation of company incorporation documents." },
    { step: 3, title: "Application Preparation", desc: "Drafting complete business summaries and innovative highlights profiles." },
    { step: 4, title: "DPIIT Portal Filing", desc: "Formal submission onto the Government of India's regulatory frameworks." },
    { step: 5, title: "Departmental Review", desc: "Managing backend compliance audits or operational clarifications." },
    { step: 6, title: "Certification", desc: "Issuance of official Startup India DPIIT Recognition Certificate." }
  ];

  const startupBenefits = [
    { title: "DPIIT Recognition Status", desc: "Official verified government standing as a vetted, scalable Indian enterprise entity." },
    { title: "Tax Incentives & Exemptions", desc: "Eligible startups can optimize operational outflows through clear tax-saving frameworks." },
    { title: "Easier Funding Allocation", desc: "Gain critical, simplified entry channels into state funding and SIDBI structural schemes." },
    { title: "IPR Filing Cost Relief", desc: "Substantial concessions and rebates on trademarks, designs, and patent application costs." },
    { title: "Simplified Compliance Loops", desc: "Self-certification advantages under structural labor laws and ecological parameters." },
    { title: "Enhanced Market Trust", desc: "Instantly build credibility among enterprise clients, tier-1 suppliers, and banking institutions." }
  ];

  const faqs = [
    { q: "What is DPIIT Recognition?", a: "DPIIT Recognition is the official startup recognition granted by the Department for Promotion of Industry and Internal Trade under the Startup India initiative." },
    { q: "Is Startup India Registration mandatory?", a: "No, but it provides significant fiscal benefits, financial schemes, cost rebates, and growth opportunities for eligible companies." },
    { q: "Can LLPs apply for Startup India Registration?", a: "Yes, LLPs, Private Limited Companies, and Registered Partnership Firms are eligible to apply." },
    { q: "Are tax benefits available immediately after Startup India Registration?", a: "Eligible startups may avail tax-related benefits subject to separate application and fulfillment of applicable government provisions under section 80-IAC." },
    { q: "How long does Startup India Registration take?", a: "The processing timeline depends on documentation accuracy, business model verification, and governmental department review cycles." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#fdfcf7] via-[#f7fafc] to-[#f4f8fa] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-200 rounded-full blur-[170px] opacity-20 pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[140px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                 RECOGNIZE YOUR STARTUP. UNLOCK EXCLUSIVE GROWTH SCHEMES.
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-5xl font-black text-slate-900 tracking-tight !leading-[1.15]">
                Startup India Registration
                <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & DPIIT Recognition Services
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Gain access to central government tax exemptions, intellectual property concessions, and simplified compliance architectures seamlessly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xs border border-blue-50 hover:border-blue-200 transition duration-300">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md">✓</div>
                    <span className="font-bold text-gray-700 text-lg sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-8 py-5 rounded-xl font-bold text-xl shadow-lg shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Intro */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Professional Startup Recognition Support by Fintax Adviser
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Ready to integrate your enterprise into the flagship scheme of the Government of India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides end-to-end management for obtaining DPIIT validation for innovators, technology platforms, and emerging ventures across India.
          </p>
        </div>
      </section>

      {/* Benefits Breakdown Matrix */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Startup India Structural Advantage Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startupBenefits.map((bn, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{bn.title}</h3>
                <p className="text-blue-600 text-lg leading-relaxed">{bn.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Entity Eligibility Mapping</h2>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <ul className="text-lg text-slate-700 space-y-4 font-medium">
              <li className="flex items-start gap-2">✔ Incorporated as a Private Limited Company, LLP, or Registered Partnership Firm.</li>
              <li className="flex items-start gap-2">✔ Vetted working orientation toward product, service, or workflow innovation and improvement.</li>
              <li className="flex items-start gap-2">✔ Scalable business infrastructure with measurable commercialization potential.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Compliance Checklists Required</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Business Proofs</h3>
              <p className="text-lg font-medium text-slate-700">Certificate of Incorporation, Registration Deeds, and Corporate PAN Card.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Founder Profiles</h3>
              <p className="text-lg font-medium text-slate-700">Vetted Identity Documents, Passports, and complete operational contact data points.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-xl font-black text-blue-600 border-b pb-2">Innovation Details</h3>
              <p className="text-lg font-medium text-slate-700">Detailed written business description, innovation validation write-ups, and pitches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Programmatic Process Flow</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {registrationSteps.map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-base font-black shadow-xs">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Summary Hub */}
      <section className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold">15+ Years of Corporate Startup Experience</h3>
            <p className="text-blue-600 text-lg mt-4">We simplify registration dynamics, allowing founders to lock down valid execution advantages quickly and focus entirely on operational scaling loops.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center text-blue-400 font-bold text-xl">
            Pan-India Virtual Processing Services
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}