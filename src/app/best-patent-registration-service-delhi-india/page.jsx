import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.patentRegistration;

export default function PatentRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients",
    "Expert Patent Consultants",
    "End-to-End Patent Support",
  ];
  const faqs = [
    { q: "What is the validity period of a patent in India?", a: "A patent is generally valid for 20 years from the filing date, subject to renewal requirements." },
    { q: "Can software be patented in India?", a: "Patentability depends on the nature of the invention and applicable legal provisions." },
    { q: "Is patent registration mandatory?", a: "No, but registration provides exclusive legal rights and protection against unauthorized use." },
    { q: "How long does patent registration take?", a: "Patent timelines vary depending on examination, objections, and approval processes." },
    { q: "Can startups apply for patents?", a: "Yes. Startups are encouraged to protect innovative technologies through patents with our startup-friendly approach." }
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
                ⚡ INNOVATE · PROTECT · COMMERCIALIZE
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Patent Registration Services
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                A Patent gives you exclusive rights over your invention and protects it from being used, made, sold or imported by others without your permission. Protect your invention. Secure your future.
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
                <Link href="/get-free-consultation" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get a Free Consultation
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
            Innovate Fearlessly. Protect Legally. Profit Globally.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the Best Patent Registration CA Firm in Delhi India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides professional Patent Registration Services for inventors, startups, researchers, entrepreneurs, businesses, manufacturers, and technology companies across India. A Patent is an exclusive legal right granted by the Government to an inventor for a new and innovative invention. Once granted, the inventor receives exclusive rights to make, use, sell, license, or commercialize the invention for a specified period.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Patent Registration Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive legal and technical expertise to secure your intellectual property assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Patent Search & Analysis</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Conduct detailed prior-art search and patentability analysis before filing to improve approval prospects.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Patent Search Services</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Comprehensive Prior-Art</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Patentability Analysis</span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Patent Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional preparation of patent specifications, provisional applications, and complete technical claims.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Provisional Patent Application</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Complete Patent Drafting</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Full Specification Filing</span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Filing & Prosecution</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end management of application submission before the Patent Office along with reply handling.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Patent Filing Services</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Patent Prosecution Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Examination Reports & Objections</span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Objection & Hearing Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Expert guidance to legal compliance requirements to respond efficiently to official government objections.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Objection Reply Services</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Hearing Process Support</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Patent Office Compliance</span>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Strategy & Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Formulate robust technology frameworks and international structures for worldwide intellectual property assets.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Technology & IP Strategy</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> International Patent Advisory</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Global Protection Advisory</span>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Maintenance & Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Keep your granted patents secure and legally active through regular monitoring and renewals.</p>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Patent Renewal Services</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Validity Maintenance</span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> End-to-End Patent Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Patent Registration Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our systematic 8-step process guided by the best patent registration experts from analysis to grant.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "Step 1", title: "Patentability Assessment", desc: "Evaluation of invention eligibility." },
              { step: "Step 2", title: "Patent Search", desc: "Comprehensive prior-art search." },
              { step: "Step 3", title: "Patent Drafting", desc: "Preparation of patent specifications and claims." },
              { step: "Step 4", title: "Patent Filing", desc: "Submission of application to the Patent Office." },
              { step: "Step 5", title: "Publication", desc: "Publication of the patent application in Patent Journal." },
              { step: "Step 6", title: "Examination Request", desc: "Request for patent examination is filed." },
              { step: "Step 7", title: "Objection Handling", desc: "Response to examination reports and objections." },
              { step: "Step 8", title: "Patent Grant", desc: "Issuance of Patent Certificate upon approval." }
            ].map((item, idx) => (
              <div key={idx} className="p-5 border border-slate-200 bg-slate-50 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{item.step}</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="why-patent" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Protecting Your Invention is Crucial
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you have developed a new product, process, technology, software-based innovation, machine, pharmaceutical formulation, or industrial design, obtaining a patent helps secure your intellectual property rights and provides a competitive advantage.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Secure today, profit tomorrow. A patent helps protect innovative technologies and products for long-term business success."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Exclusive Ownership Rights</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">A patent grants exclusive legal rights and ownership over your invention to the creator.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Protection Against Copying</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prevents competitors and unauthorized third parties from making, using, copying, or infringing.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Licensing Revenue</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Patents can be strategically licensed out to others to generate consistent ongoing income streams.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Increased Business Valuation</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Significantly enhances overall company value, intangible long-term asset bases, and innovator stature.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-white rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Investor Attraction & Competitive Advantage</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Patented technologies often attract premium global funding resources while cementing dominant innovation market leadership.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Patentability Criteria Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Patentability Criteria in India
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              For patent registration, an invention should generally satisfy three main fundamental principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Novelty</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The invention must be completely new and must not have been previously or publicly disclosed anywhere.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Inventive Step</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The invention should involve notable technology innovation that goes beyond existing generic knowledge workflows.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Industrial Applicability</h3>
              <p className="text-slate-700 text-sm leading-relaxed">The invention should hold actual practical industrial usage value and must be capable of being made or used in an industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segments & Document Requirement Tracker */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Who Can Apply */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Who Can Apply For A Patent?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-slate-700">
                {['Individual Inventors', 'Startups & Entrepreneurs', 'Companies & Manufacturers', 'Research Institutions', 'Universities & Institutes', 'Technology Developers'].map((segment) => (
                  <div key={segment} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                    <span className="text-blue-500">✓</span> {segment}
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Documents Required for Registration</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div><strong>Inventor Information:</strong> PAN Card, Aadhaar Card, and Address Proof.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div><strong>Invention Details:</strong> Detailed Description, Technical Drawings/Diagrams (if applicable), Prototype Information, and Research Documents.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div><strong>Applicant Documents:</strong> Business Registration Documents (for companies) and Authorization Documents.</div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold">✓</span>
                  <div><strong>Declaration Forms:</strong> Required statutory declarations and formal authorization metrics.</div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Sectors We Serve */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries & Sectors We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing professional expert patent protection across all technical sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Technology', 'Pharmaceuticals', 'Mechanical Engineering', 'Chemicals', 'Automotive', 'Electronics', 'Biotechnology', 'Consumer Products', 'Agriculture', 'Energy'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Footer Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Clean Main Grid Split - 2 Independent Equal Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              {/* Isolated Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "15+ Years of Professional Experience",
                  "500+ Happy Clients Served",
                  "Expert Patent & Compliance Team",
                  "Affordable & Transparent Pricing",
                  "Pan India Online Services",
                  "End-to-End Patent Support"
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
                Our multidisciplinary corporate expert team features expert CA & IP professionals providing professional patent registration to improve protection, reduce filing errors, and enhance approval prospects.
              </p>
            </div>

            {/* Right Column: Complete Intellectual Property Solutions */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Complete Intellectual Property Solutions
                </h3>
              </div>

              {/* Separated Content Blocks to prevent paragraph collision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Professional Patent Search',
                  'Expert Patent Drafting',
                  'End-to-End Filing Support',
                  'Patent Objection Handling',
                  'Patent Commercialization Guidance',
                  'Startup-Friendly Services',
                  'Patent Office Compliance',
                  'International Patent Advisory',
                  'Global Expansion Protection'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    ✓ {srv}
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