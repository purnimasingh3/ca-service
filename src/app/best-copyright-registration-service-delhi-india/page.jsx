import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.copyrightRegistration;

export default function CopyrightRegistrationLanding() {
  const HERO_STATS = [
    "12+ Years Experience",
    "500+ Happy Clients",
    "Expert IP Consultants",
    "Pan India Services",
  ];

  const faqs = [
    { q: "Is copyright registration compulsory?", a: "No, it is not compulsory, but it is highly recommended for strong legal protection and proof of ownership in enforcement courts." },
    { q: "How long does copyright protection last?", a: "Generally, for literary, dramatic, musical, and artistic works, protection lasts for the lifetime of the author/creator plus 60 years." },
    { q: "Can software be copyrighted?", a: "Yes, software computer programs, mobile applications, and original source code are fully eligible for copyright protection." },
    { q: "Can website content be copyrighted?", a: "Yes, original website layout items, distinct blog write-ups, articles, and unique digital content can be protected safely." },
    { q: "Can I sell or license my copyright?", a: "Yes, a registered copyright can be assigned, sold, or licensed to other individuals or businesses for commercial royalty use." }
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
                ⚡ Protect Your Creation · Secure Your Rights
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Copyright Registration
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Protect, Control, and Commercialize your asset. Get definitive legal protection for your original creative work against unauthorized copying, reproduction, and distribution.
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
                  Book a Free Consultation
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
            Expert Copyright Registration Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the Best Copyright Registration CA Firm in Delhi India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides professional Copyright Registration Services for authors, artists, content creators, software developers, startups, publishers, musicians, designers, and entrepreneurs across India. Copyright registration establishes legal ownership and safely protects your intellectual property investment.
          </p>
        </div>
      </section>

      {/* Works Eligible Section */}
      <section id="eligible-works" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Works Eligible for Copyright Registration
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We assist creators legally protect a broad spectrum of creative intellectual properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Work 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Literary Works</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Protect written original compositions and digital text materials from plagiarism.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Books </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Articles </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Blogs </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Website Content </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> E-books </span>
              </div>
            </div>

            {/* Work 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Artistic Works</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Defend your unique visual expressions and brand identifying elements completely.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Paintings </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Drawings </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Logos </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Illustrations </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Graphic Designs </span>
              </div>
            </div>

            {/* Work 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Software & Digital Content</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Keep proprietary tools, code infrastructure, and application logic safe.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Computer Programs </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Mobile Apps </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Source Code </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Software Products </span>
              </div>
            </div>

            {/* Work 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Musical Works</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Secure absolute authority over sound melodies, lyrics, and arrangements.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Songs </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Lyrics </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Musical Compositions </span>
              </div>
            </div>

            {/* Work 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cinematographic Works</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Safeguard visual media records, multi-frame movies, and video assets.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Videos </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Films </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Short Movies </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Advertisements </span>
              </div>
            </div>

            {/* Work 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Photographs</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ensure distinct ownership on raw camera works and studio visuals.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Professional </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Creative Images </span>
                <span className="flex items-center gap-1.5 col-span-2"><span className="text-blue-500">✓</span> Commercial Shoots </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="copyright-process" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Copyright Registration Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A systematic multi-step workflow implemented seamlessly by our team to guarantee proper legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 text-center">
            {[
              { step: "01", name: "Consultation & Eligibility" },
              { step: "02", name: "Document Collection" },
              { step: "03", name: "Application Prep" },
              { step: "04", name: "Copyright Filing" },
              { step: "05", name: "Examination Process" },
              { step: "06", name: "Objection Handling" },
              { step: "07", name: "Registration Certificate" }
            ].map((p, i) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs relative">
                <div className="text-xs font-bold text-blue-600 bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-200">
                  {p.step}
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">{p.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance / Benefits Details Section */}
      <section id="why-copyright" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Copyright Registration
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Transform your original works into highly secure assets. The Best Copyright Registration CA Firm in Delhi India assists you in creating defensive and commercial infrastructure around your intellectual value.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Your Creative Work, Your Asset, Your Rights. We convert expressions into structured business properties."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Proof of Ownership</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Establishes verifiable legal evidence and primary authorship titles officially.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Protection Against Misuse</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Prevents third parties from copying, distributing, or exploiting creations without authorization.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Exclusive Authority Rights</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Get sole rights to publish, reproduce, translate, or broadcast your creative property.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Right to Sue Infringers</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Enables solid paths to initiate strong litigation and claim statutory commercial damages.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Licensing Revenues & Brand Valuation</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Earn consistent royalties through verified licensing assignments while safely building global brand value credibility.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documents Matrix Section */}
      <section id="documents-required" className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Documents Required for Filing
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Keep these foundational records ready to initiate your corporate copyright registration framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-3">Applicant Documents</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li>• PAN Card Copy</li>
                <li>• Aadhaar Card Copy</li>
                <li>• Identity & Address Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-3">Work Details</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li>• Copy of Original Work</li>
                <li>• Comprehensive Description</li>
                <li>• Exact Creation Date Info</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-3">Business Documents</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li>• Company Registration Cert</li>
                <li>• Authorization Letter (If applicable)</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-blue-600 mb-3">Additional Documents</h3>
              <ul className="text-slate-700 text-xs space-y-2 font-medium">
                <li>• NOC (If applicable)</li>
                <li>• Signed Declaration Forms</li>
                <li>• Supporting Files</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Advisers */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Professional Experience",
                  "500+ Happy Clients Served",
                  "Expert CA & IP Professionals",
                  "Affordable Transparent Pricing",
                  "Timely Filing & Pan India Status",
                  "End-to-End Complete Solutions"
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
                Our intellectual property team coordinates directly with legal registration authorities to resolve application roadblocks promptly.
              </p>
            </div>

            {/* Right Column: Services Matrix Box */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Our IP Ecosystem Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Our Complete Copyright Solutions
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Copyright Registration Filing',
                  'Copyright Search & Advisory',
                  'Software Copyright Registration',
                  'Website & Content Copyright',
                  'Logo & Design Copyright',
                  'Copyright Assignment Transfer',
                  'Copyright Licensing Drafting',
                  'Objection Response Handling',
                  'End-to-End Compliance Support'
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
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />

        </div>
      </section>

    </div>
  );
}