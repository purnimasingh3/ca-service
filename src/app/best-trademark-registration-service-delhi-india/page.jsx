import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata =
  servicesMetadata.trademarkRegistration;

export default function PremiumTrademarkLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "100% Secure & Reliable",
    "Expert Consultation & Support",
  ];
  const faqs = [
    { q: "What is Trademark Registration?", a: "Trademark Registration is the legal process of protecting your business name, logo, brand identity, slogan, product name, symbol, design, or tagline under the Trademark Act to prevent others from using similar branding." },
    { q: "Can startups register trademarks?", a: "Yes. Startups should protect their brand identity and market assets at an early stage to eliminate copying risks and safeguard their investments." },
    { q: "Can logos be trademarked?", a: "Yes. Logos and distinctive graphics can be legally registered under trademark laws to give you exclusive ownership rights." },
    { q: "Is trademark registration mandatory?", a: "No, it is not mandatory by law, but it is highly recommended to protect your digital presence and avoid legal disputes." },
    { q: "How long does trademark registration take?", a: "The overall timeline heavily depends on official government examination and approval stages." },
    { q: "Can trademark objections be handled?", a: "Yes. Fintax Adviser provides dedicated trademark objection support, including response drafting and compliance tracking." }
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
                🛡️ Legal Brand Protection · Exclusive Rights
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Trademark Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Protect your brand. Secure your future. Register your Brand, Logo, Name, Tagline & More and Get Exclusive Legal Protection with a fast & hassle-free process.
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
            Best Trademark Registration Consultant in Delhi, India
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>, your reliable partner for complete Trademark Registration, Brand Protection Services, Trademark Filing, and intellectual property compliance solutions. Your brand is more than a logo—it represents your identity, reputation, trust, and business value. Whether you own a startup, company, agency, e-commerce business, manufacturer, educational institute, food brand, healthcare business, or growing enterprise, protecting your brand through Trademark Registration is essential.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Trademark Registration Services Include
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              At Fintax Adviser, we provide complete Trademark Registration Services to protect your business assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Search Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Before filing, we conduct comprehensive research to significantly reduce rejection risks.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Availability Check</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Similar Name Search</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Conflict Analysis</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Assessment</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Trademark Research</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Filing Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert filing support across multi-class structures to secure legal exclusivity over your identity.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> New Application</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Brand Registration</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Logo Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Wordmark Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Device Mark Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Multi-Class Filing</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Objection Handling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Received objection notices? We handle complex evaluation phases directly with government authorities.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Reply Drafting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Documentation</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Legal Representation</span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Compliance Review</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Renewal Services</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Protect your trademark continuously with managed deadline tracking systems.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Renewal Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Deadline Monitoring</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Record Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Compliance MGMT</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trademark Assignment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Business ownership transitions? We execute clean legal asset handovers seamlessly.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Trademark Transfer</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Ownership Updates</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Assignment Filing</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Record Modification</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Legal Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Gain absolute statutory barriers to block market competitors from copying your assets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Business Names</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Company Logos</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Brand Identity</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Product Branding</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Taglines & Slogans</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Marketing Identity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-trademark" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Trademark Registration is Important for Businesses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Many businesses spend years building their reputation but fail to protect their brand legally. Without Trademark Registration, competitors may copy your name, market assets, or design systems.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Your brand is your identity. Trademark protection converts your branding investments into a highly defensible intellectual asset."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Brand Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Protect your brand strictly against unauthorized public use or structural copies.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Exclusive Ownership Rights</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Gain absolute legal ownership over your complete business and market assets.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Build Customer Trust</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Customers instinctively trust and associate high reliability with protected brands.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Increase Brand Value</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Your registered trademark turns into a valuable, quantifiable corporate asset on balance sheets.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Expansion & Digital Security</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Provides essential framework support for franchise development models while systematically strengthening online platform security.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Types of Trademarks Supported Matrix */}
      <section id="trademark-types" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Types of Trademarks We Register
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Aligning registration strategies across distinct structural classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Word Mark Registration</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Protects absolute text expressions, business titles, and unique brand words safely.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Logo Trademark Registration</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Secures exclusive legal ownership of your graphic logomarks and symbolic icons.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Tagline Registration</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Locks marketing slogans, catchphrases, and company expressions against competitor copy.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Product & Service Marks</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Engineered specifically for items, retail labels, and distinct operational service delivery platforms.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Combination Mark</h3>
              <p className="text-slate-700 text-sm leading-relaxed">Comprehensive unified safety option securing your integrated text + visual graphic elements together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Needs Trademark Registration Services?
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing dedicated brand safety mapping for multiple corporate segments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups', 'Private Limited Cos', 'LLPs', 'E-commerce Businesses', 'Educational Institutes', 'Food Businesses', 'Healthcare Brands', 'Manufacturers', 'Agencies', 'Export Businesses'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section id="documents" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Documents Required for Trademark Registration
            </h2>
            <p className="text-slate-500 text-sm">We strictly verify files for completeness before application processing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-4 border-b pb-2 text-blue-600">For Individuals & Proprietorship</h3>
              <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">📌 PAN Card</li>
                <li className="flex items-center gap-2">📌 Aadhaar Card</li>
                <li className="flex items-center gap-2">📌 Brand Name or Logo (if available)</li>
                <li className="flex items-center gap-2">📌 Address Proof</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-4 border-b pb-2 text-blue-600">For Companies & LLPs</h3>
              <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">🏢 Incorporation Certificate</li>
                <li className="flex items-center gap-2">🏢 Company PAN Card</li>
                <li className="flex items-center gap-2">🏢 Logo Design & Activity Proof</li>
                <li className="flex items-center gap-2">🏢 Authorization Letter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Trademark Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A clear, 5-stage strategic framework engineered to get your brand approved cleanly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Search</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Deep availability checks across databases.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Review</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Documentation and class tracking selection.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Filing</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Application submission under relevant classes.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Examination</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Government office assessment and evaluation support.</p>
            </div>

            <div className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl relative">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Protection</h5>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">Application number issued & exclusive rights created.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-[#e6effe] text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Expert Trademark Consultants",
                  "Fast Online Registration",
                  "Affordable Pricing & Transparency",
                  "End-to-End Brand Protection"
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
                We assist startups with dedicated brand security strategies to boost investor confidence and scale market positioning safely.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Business & Compliance Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Company Registration',
                  'LLP Incorporation Setup',
                  'GST Registration Support',
                  'MSME Registration Support',
                  'Import Export Code Registration',
                  'FSSAI Registration Support',
                  'PAN TAN Application',
                  'PF & ESI Registration',
                  'Labour Law Compliance',
                  'Virtual CFO Services',
                  'Accounting & Bookkeeping',
                  'Business Advisory'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-100 transition-all duration-200"
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