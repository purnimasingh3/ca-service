import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.llpRegistration;
export default function PremiumLLPLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "25+ Legal & Tax Professionals",
    "200+ Happy Clients",
    "100% Legal Compliance",
  ];
  const faqs = [
    { q: "What is LLP Incorporation?", a: "LLP Incorporation is the legal process of registering a Limited Liability Partnership under the Ministry of Corporate Affairs (MCA)." },
    { q: "How many partners are required for LLP Registration?", a: "A minimum of 2 partners are required for successful LLP registration in India." },
    { q: "Is there any minimum capital requirement for LLP?", a: "No, there is absolutely no minimum capital requirement enforced for LLP registration." },
    { q: "How long does LLP registration take?", a: "Usually, the complete end-to-end LLP registration process takes 7-15 working days." },
    { q: "Can NRIs register LLPs in India?", a: "Yes, NRIs and foreign nationals can legally register and partner in LLPs in India." },
    { q: "What is DSC in LLP Registration?", a: "DSC stands for Digital Signature Certificate, which is used to securely authorize digital MCA filing forms." },
    { q: "Is GST mandatory for LLPs?", a: "GST Registration is not auto-mandatory; it completely depends on your business activities and overall annual turnover metrics." },
    { q: "Do LLPs need annual compliance?", a: "Yes, all registered LLPs must mandatorily complete their annual corporate ROC filings and annual tax submissions." }
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
                ⚡ Simple Process · Strong Compliance · Endless Opportunities
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                LLP Incorporation Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Start your LLP journey with experts. We provide professional and legally compliant Limited Liability Partnership Registration Services for startups, entrepreneurs, consultants, and growing businesses across India.
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
            Best LLP Incorporation Consultant in Delhi, India – Fintax Advisers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Advisers</strong>, your trusted partner for complete Limited Liability Partnership Registration Services. If you are searching for the best LLP Registration Consultant in Delhi, India, our experts provide complete assistance from document preparation to MCA approval and post-incorporation compliance support.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Benefits of LLP Incorporation in India
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A Limited Liability Partnership (LLP) combines the operational flexibility of a traditional partnership with modern legal protections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Separate Legal Entity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">An LLP has its own legal identity separate from its partners, ensuring independent corporate standing.</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Limited Liability Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Partners receive critical protection from personal liability for business debts or other partners' misconduct.</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Lower Compliance Cost</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Compared to Private Limited Companies, LLPs have significantly fewer legal obligations and lower compliance costs.</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Minimum Capital</h3>
              <p className="text-slate-600 text-sm leading-relaxed">There is absolutely no minimum capital requirement to get your LLP registration up and running.</p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Partners can directly manage everyday business operations efficiently without complex corporate formalities.</p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Professional Business Image</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Registered LLPs experience stronger trust and instant corporate credibility among market entities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Register Section */}
      <section id="why-llp" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Businesses Prefer LLP over Partnership Firms
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Traditional partnership firms do not provide limited liability protection, leaving personal assets highly vulnerable. A professionally registered LLP structure solves this while instilling immediate institutional confidence.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  A registered LLP helps entities gain quick trust among critical clients, vendors, external investors, and financial institutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Limited Liability Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Partners are fully protected from personal liability concerning business debts.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Separate Legal Identity</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The business operates as a distinct legal entity apart from individual owners.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Stronger Compliance Legalities</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Structured government framework makes transactions transparent and robust.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Improved Corporate Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Investors, clients, and banks consistently choose to trust registered entities more.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Easy Ownership Transfer</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ownership rights and administrative responsibilities can be smoothly managed or transferred via customized LLP agreements.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section id="documents" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for LLP Registration
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              To complete the complete online LLP incorporation process, you generally need the following documents verified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <span>👤</span> Documents of Partners
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-2">✔️ PAN Card</li>
                <li className="flex items-center gap-2">✔️ Aadhaar Card</li>
                <li className="flex items-center gap-2">✔️ Passport Size Photograph</li>
                <li className="flex items-center gap-2">✔️ Address Proof</li>
                <li className="flex items-center gap-2">✔️ Mobile Number & Email ID</li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <span>🏢</span> Documents for Registered Office
              </h3>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-2">✔️ Electricity Bill or Utility Bill</li>
                <li className="flex items-center gap-2">✔️ Rent Agreement</li>
                <li className="flex items-center gap-2">✔️ NOC (No Objection Certificate) from Property Owner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Should Choose LLP Registration?
            </h2>
            <p className="text-xs text-slate-500 mt-1">LLP is ideal for entrepreneurs wanting legal protection with absolute operational flexibility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'Consultants', 'Freelancers', 'CA Firms', 'Legal Firms', 'Digital Marketing Agencies', 'IT Companies', 'Healthcare Professionals', 'Import Export Businesses', 'Small & Medium Enterprises'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Step-by-Step LLP Incorporation Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured online framework engineered to obtain your certification seamlessly without visiting government offices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: "1", title: "Business Consultation", desc: "Our experts understand your business model and guide you through the initial setup parameters." },
              { step: "2", title: "DSC Application", desc: "We apply for the digital signature certificates needed for online government filings." },
              { step: "3", title: "DIN/DPIN Application", desc: "We obtain the designated partner identification numbers for the corporate management." },
              { step: "4", title: "LLP Name Approval", desc: "Our consultants assist you in choosing and securing a unique approved name via MCA." },
              { step: "5", title: "MCA Filing", desc: "We prepare and efficiently file all critical incorporation documentation with the ministry." },
              { step: "6", title: "Agreement Drafting", desc: "We draft and execute the legal rules, profit shares, and rights via the formal LLP Agreement." },
              { step: "7", title: "Certificate Issued", desc: "Following verification, MCA safely issues your official final Certificate of Incorporation." }
            ].map((item) => (
              <div key={item.step} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl relative flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xs font-black">
                    {item.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.title}</h5>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Delhi / Value Matrix Section */}
      <section className="py-20 lg:py-24 bg-[#eef5ff] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Delhi */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Delhi is a Preferred Location for LLP Registration
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Strong Startup Ecosystem",
                  "Better Business Opportunities",
                  "Deep Investor Networks",
                  "Highly Skilled Workforce",
                  "Excellent City Infrastructure",
                  "Central Business Hub Hubs"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our team features Legal Advisors, ROC Consultants, Tax Professionals, and Business Registration Experts ready to assist.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Complete Legal & Financial Solutions
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Services & Compliance Matrix
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'GST Registration & Return Filing',
                  'Trademark Registration Filings',
                  'Annual ROC Compliance Services',
                  'Income Tax Filing Solutions',
                  'Startup India Registration Support',
                  'Accounting & Bookkeeping Services',
                  'Complete Payroll Management',
                  'Compliance Risk Management',
                  'Business Consultancy Services'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-blue-50 transition-all duration-200"
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}