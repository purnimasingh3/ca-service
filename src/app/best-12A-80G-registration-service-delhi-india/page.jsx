import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.ngo12A80GRegistration;

export default function Premium12AAnd80GRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "Expert CA Team",
    "Pan India Service",
  ];

  const painPoints = [
    {
      title: "NGO Income Gets Taxed",
      body: "Without 12A registration, surplus funds meant for your mission get taxed like any other income.",
    },
    {
      title: "Donors Hold Back",
      body: "Without 80G, donors lose their tax deduction — and many simply give elsewhere.",
    },
    {
      title: "CSR Doors Stay Shut",
      body: "Corporates screen for valid 12A/80G before releasing CSR funds. No registration, no cheque.",
    },
    {
      title: "Grants Slip Away",
      body: "Government and institutional grants routinely list both registrations as an eligibility line item.",
    },
  ];

  const whoCanApply = [
    "Charitable Trusts",
    "Section 8 Companies",
    "Registered Societies",
    "NGOs",
    "Educational Institutions",
    "Religious & Charitable Bodies",
  ];

  const documents = [
    { label: "Constitution Document", detail: "Trust Deed, MOA & AOA, or Society Registration Certificate" },
    { label: "PAN Card", detail: "PAN of the organisation" },
    { label: "Address Proof", detail: "Proof of registered office" },
    { label: "Financial Records", detail: "Bank statements, financial statements, audit reports" },
    { label: "Activity Report", detail: "NGO activities, project details, donation history" },
    { label: "Trustee / Director KYC", detail: "PAN, Aadhaar, and address proof of each trustee or director" },
  ];

  const processSteps = [
    { title: "Eligibility Assessment", body: "We review your organisation's structure and activities against 12A/80G criteria." },
    { title: "Documentation", body: "Our team collects and verifies every supporting document upfront." },
    { title: "Application Drafting", body: "12A and 80G applications are prepared to Income Tax Department standards." },
    { title: "Online Filing", body: "Applications are submitted through the Income Tax e-filing portal." },
    { title: "Departmental Review", body: "The department examines the application and organisation's records." },
    { title: "Query Handling", body: "We respond to any departmental clarifications on your behalf." },
    { title: "Certificate Issued", body: "Your 12A and 80G registration certificates are delivered." },
  ];

  const whyFintax = [
    "15+ Years of Professional Experience",
    "500+ Happy Clients Served",
    "Expert Chartered Accountant Team",
    "Affordable, Transparent Pricing",
    "Pan India Online Service",
    "End-to-End Compliance Support",
  ];

  const additionalServices = [
    "Section 8 Company Registration",
    "Trust & Society Registration",
    "FCRA Registration",
    "NGO Darpan Registration",
    "Annual NGO Compliance",
    "Income Tax Filing for NGOs",
    "CSR-1 Registration",
    "Accounting & Bookkeeping",
    "Audit & Assurance",
  ];

  const faqs = [
    { q: "Is 12A Registration mandatory for NGOs?", a: "It isn't legally mandatory, but it's highly beneficial — 12A is what allows an NGO to claim income tax exemption on funds used for charitable purposes." },
    { q: "Can an NGO get 80G without 12A?", a: "In practice, organisations pursue both together, since 80G eligibility is generally assessed alongside 12A status for maximum tax benefit." },
    { q: "Can a newly formed NGO apply?", a: "Yes. Newly registered Trusts, Societies, and Section 8 Companies are eligible to apply for both 12A and 80G." },
    { q: "Do donors actually get a tax benefit under 80G?", a: "Yes, donors contributing to an 80G-approved organisation can claim a deduction on their taxable income under the Income Tax Act." },
    { q: "How long does the registration process take?", a: "Timelines vary by case, but with complete documentation our team files promptly and manages departmental queries to avoid delays." },
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
                ⚡ Fast &amp; Hassle-Free NGO Registration
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                12A &amp; 80G
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Registration
                </span>
                Consultant in Delhi, India
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Unlock income tax exemption for your NGO and tax deductions for your donors. We handle 12A and 80G registration end-to-end for Trusts, Societies, and Section 8 Companies across India.
              </p>

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

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* HERO RIGHT FORM */}
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
            NGO Tax Exemption Registration, Handled by Specialists
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. 12A and 80G registrations sit at the foundation of every NGO's financial health — they decide whether your income is taxed, and whether your donors are rewarded for giving. We handle both registrations for Trusts, NGOs, Charitable Organisations, Section 8 Companies, Societies, and Educational Institutions across India.
          </p>
        </div>
      </section>

      {/* What is 12A / 80G — Signature comparison */}
      <section id="what-is" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Two Registrations, One Complete Shield
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              12A protects your organisation's income. 80G protects your donors' contributions. Together, they cover both sides of your NGO's finances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-6 text-lg">
                12A
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tax Exemption for Your NGO</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Granted by the Income Tax Department, 12A registration lets your organisation claim exemption on income applied toward charitable purposes — instead of paying tax on funds meant for your mission.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-blue-700 border-t border-slate-100 pt-4">
                <span className="bg-blue-50 px-3 py-1.5 rounded-full">Protects NGO income</span>
                <span className="bg-blue-50 px-3 py-1.5 rounded-full">Preserves funds for mission</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mb-6 text-lg">
                80G
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tax Benefit for Your Donors</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                80G registration lets anyone donating to your Trust, NGO, or Section 8 Company claim a deduction under the Income Tax Act — a direct incentive that builds donor confidence and unlocks larger contributions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-indigo-700 border-t border-slate-100 pt-4">
                <span className="bg-indigo-50 px-3 py-1.5 rounded-full">Donor tax deduction</span>
                <span className="bg-indigo-50 px-3 py-1.5 rounded-full">Stronger fundraising</span>
              </div>
            </div>

            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <div className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 font-bold shadow-md">
                +
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NGOs Need This */}
      <section id="why-registration" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What Happens Without These Registrations
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many NGOs run meaningful programmes but still struggle to raise or retain funds — usually because donors and corporates can't verify their tax status. Registration removes that friction.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  We turn eligibility on paper into approved certificates, so your funds go toward your mission — not tax outgo.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {painPoints.map((point) => (
                <div key={point.title} className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">{point.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Matrix */}
      <section id="benefits" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of 12A and 80G Registration
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              What changes for your organisation once both certificates are in hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Tax-Free Income</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Income applied toward charitable activities can qualify for exemption from income tax.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">More Donations</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Donors consistently prefer giving to 80G-approved organisations for the tax benefit it unlocks.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Improved Public Trust</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Registration signals legitimacy to government bodies, corporates, and individual donors alike.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">CSR Funding Access</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Most companies shortlist only 12A/80G-registered NGOs when allocating CSR budgets.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Grant Eligibility</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Government schemes and institutional grants often list both registrations as a prerequisite.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Strong Legal Standing</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Formal recognition and compliance under the Income Tax Act, backed by proper documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Can Apply for 12A and 80G Registration
            </h2>
            <p className="text-xs text-slate-500 mt-1">We register organisations of every legal form across India.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {whoCanApply.map((entity) => (
              <div key={entity} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {entity}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section id="documents" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Documents You'll Need
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We'll guide you through gathering each of these — most organisations already have them on hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div key={doc.label} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{doc.label}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{doc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — real sequence, numbering earns its place */}
      <section id="process" className="py-24 bg-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Our 7-Step Registration Process
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              From first review to certificate in hand — here's exactly how it runs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div key={step.title} className="p-6 bg-slate-800/60 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 font-black text-2xl mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Why NGOs Need Both, Side by Side
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="p-5 bg-blue-600 text-white font-bold text-sm sm:text-base">12A Registration</div>
              <div className="p-5 bg-indigo-600 text-white font-bold text-sm sm:text-base">80G Registration</div>
            </div>
            {[
              ["Tax exemption for NGO income", "Tax benefit for donors"],
              ["Helps save organisational funds", "Encourages donations"],
              ["Improves compliance standing", "Increases donor confidence"],
              ["Supports long-term sustainability", "Boosts fundraising efforts"],
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                <div className="p-5 text-slate-700 text-xs sm:text-sm border-t border-slate-100">{row[0]}</div>
                <div className="p-5 text-slate-700 text-xs sm:text-sm border-t border-slate-100 border-l">{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {whyFintax.map((benefit) => (
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
                Our team of Chartered Accountants and compliance specialists has guided NGOs, Trusts, and Section 8 Companies through 12A and 80G approval for over 15 years.
              </p>
            </div>

            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional NGO Compliance Services
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {additionalServices.map((srv) => (
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

      {/* FAQs */}
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