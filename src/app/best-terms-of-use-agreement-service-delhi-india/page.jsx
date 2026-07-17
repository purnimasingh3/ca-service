import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Metadata configuration using your existing service architecture
export const metadata = servicesMetadata.termsOfUseAgreement || {
  title: "Terms of Use Agreement Drafting & Review Services in India | Fintax Adviser",
  description: "Protect your digital assets and limit legal liability. Professionally drafted Terms & Conditions for websites, e-commerce stores, SaaS platforms, and mobile apps.",
};

export default function TermsOfUseLanding() {
  const HERO_STATS = [
    "12+ Years of Experience",
    "500+ Happy Clients",
    "Expert Legal Professionals",
    "Legally Sound Agreements",
  ];

  const faqs = [
    { 
      q: "Is a Terms of Use Agreement mandatory?", 
      a: "While not always strictly mandatory by global law like a Privacy Policy, it is highly recommended and practically essential for websites, apps, and online platforms to protect business interests, limit liability, and manage user behavior safely." 
    },
    { 
      q: "What is the difference between Terms of Use and Privacy Policy?", 
      a: "Terms of Use govern the rules, guidelines, and contractual relationship regarding how users interact with your website or app. A Privacy Policy specifically outlines how you collect, store, utilize, and protect your users' personal data." 
    },
    { 
      q: "Can I copy Terms of Use from another website?", 
      a: "No. Copying another platform's terms can lead to copyright infringement and leaves your business exposed. Every business has a unique operational model, payment gateway setup, and legal risk profile that requires a customized agreement." 
    },
    { 
      q: "Does my e-commerce website need Terms of Use?", 
      a: "Yes. E-commerce businesses absolutely require specific terms governing user purchases, pricing errors, payment defaults, delivery timelines, product returns, cancellations, and customer responsibilities." 
    },
    { 
      q: "How often should Terms of Use be updated?", 
      a: "They should be reviewed periodically and updated whenever your business operations shift, new features or payment models are added, or relevant digital and corporate regulations change." 
    },
    { 
      q: "Why should I get a professionally drafted Terms of Use Agreement?", 
      a: "Professionally drafted agreements provide bulletproof legal protection, verify compliance with regional laws, account for your unique business vulnerabilities, and sharply minimize the risk of expensive court disputes." 
    }
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
                🛡️ Protect Your Business · Define The Rules · Build Trust
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Terms of Use Agreement
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Drafting & Review Services
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                A well-drafted Terms of Use Agreement sets the rules and guidelines for using your website, app, or platform. Protect your rights, limit liability, and ensure complete operational clarity between you and your users.
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
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* HERO RIGHT PREMIUM FORM */}
            <div id="contact-section" className="lg:col-span-5 w-full max-w-md mx-auto">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Intro Section */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What is a Terms of Use Agreement?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. A Terms of Use Agreement (also known as Terms & Conditions or Website Terms of Use) is a legally enforceable contract that governs the relationship between your website, mobile application, or digital platform and its users. It sets the definitive rules, user rights, digital protections, and limitations applicable whenever a service is accessed.
          </p>
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 text-left max-w-2xl mx-auto">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3 text-center sm:text-left">An Effective Agreement Clearly Outlines:</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
              <span className="flex items-center gap-2">🔹 User Rights & Obligations</span>
              <span className="flex items-center gap-2">🔹 Website Usage Policies</span>
              <span className="flex items-center gap-2">🔹 Intellectual Property Protection</span>
              <span className="flex items-center gap-2">🔹 Payment & Subscription Terms</span>
              <span className="flex items-center gap-2">🔹 Account Suspension Policies</span>
              <span className="flex items-center gap-2">🔹 Dispute Resolution Procedures</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clauses Covered (Services Breakdown Section) */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Key Clauses Covered in Your Agreement
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Strategic, customized, and bulletproof clauses tailored completely to protect your specific business assets and limit structural exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Clause 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Access & Usage Policies</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Establishes foundational rules and parameters governing how public visitors or premium customers browse your platform properties.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Website Usage </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Access Rights </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> User Eligibility </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Account Setup </span>
              </div>
            </div>

            {/* Clause 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Intellectual Property Rights</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Protects critical core values—safeguarding trademarks, original codebases, proprietary brand assets, designs, and content footprints.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Trademarks </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Copyrights </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Content Control </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Asset Security </span>
              </div>
            </div>

            {/* Clause 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payment & Subscription Terms</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Ensures transactional clarity, detailing dynamic billing frameworks, renewal mechanics, cancellation rights, and refund rules.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Billing Rules </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Subscriptions </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Refund Policies </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Cancellations </span>
              </div>
            </div>

            {/* Clause 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Prohibited & Harmful Activities</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Clearly restricts digital system misuse, platform security abuses, fraudulent behaviors, and unacceptable community actions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Abuse Mitigation </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Fraud Control </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Use Restrictions </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> System Safety </span>
              </div>
            </div>

            {/* Clause 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Limitation of Legal Liability</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Crucial defensive layer engineered to cap corporate liability exposures arising from platform disruptions or user actions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Exposure Caps </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Risk Allocation </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Third-Party Links </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Warranty Disclaimers</span>
              </div>
            </div>

            {/* Clause 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Termination & Governing Law</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Defines account suspension rights and explicitly states the geographical legal rules and dispute resolutions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Account Suspension </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Termination Rights </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Governing Laws </span>
                <span className="flex items-center gap-1.5"><span className="text-blue-500">✓</span> Jurisdiction </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Importance Section (Why Your Business Needs It) */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Every Business Needs a Terms of Use Agreement
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Operating a digital property without customized terms creates substantial compliance vulnerabilities and litigation risks. Professional drafting ensures platform governance, rules enforcement, and complete risk management.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "We convert complex compliance metrics into clear corporate frameworks that protect assets and fuel scalable growth."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Legal Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Mitigates vulnerabilities, preventing application abuse and systemic operational exploits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">User Guidelines</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Establishes transparent codes of conduct and explicit consumer operational expectations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">IP Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Secures vital intellectual layouts, custom UI elements, logos, and digital text properties.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Dispute Management</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Avoids expensive litigations using systematic, predictable arbitration and resolution frameworks.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider text-blue-600">Business Transparency & Trust</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Builds massive customer credibility through clear, institutional-grade documentation and structured legal governance systems.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Segments Tracker (Who Needs It) */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Businesses That Need Terms of Use Agreements
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Providing customized, industry-aligned legal agreements tailored for modern digital ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'E-commerce Websites', 'SaaS Platforms', 'Mobile Applications', 'Online Marketplaces',
              'Educational Platforms', 'Healthcare Portals', 'Financial Services', 'IT & Software Co.',
              'Startups & Scaleups', 'Digital Agencies', 'Membership Websites', 'Online Providers'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 transition-colors flex items-center justify-center">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms of Use Agreement Drafting Process */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Agreement Drafting Process
            </h2>
            <p className="text-sm text-slate-500 mt-2">How we build a comprehensive legal safeguard for your platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understanding operations & structural layout." },
              { step: "02", title: "Collection", desc: "Gathering policies, models, and rules." },
              { step: "03", title: "Drafting", desc: "Preparing your customized framework." },
              { step: "04", title: "Legal Review", desc: "Checking clauses for max protection." },
              { step: "05", title: "Finalization", desc: "Incorporating edits and client feedback." },
              { step: "06", title: "Delivery", desc: "Providing clean terms, ready to deploy." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 relative space-y-3">
                <span className="text-2xl font-black text-blue-100 block">{p.step}</span>
                <h4 className="font-bold text-slate-900 text-sm">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Extended Services Box */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Legal Professionals",
                  "100% Customized Solutions",
                  "Transparent & Fixed Pricing",
                  "Quick Turnaround & Delivery",
                  "Comprehensive Pan-India Support",
                  "Business-Growth Focused Approach"
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
                Our multidisciplinary corporate legal division features Corporate Lawyers, Digital Compliance Analysts, Agreement Specialization Experts, and Tech Advisory Professionals.
              </p>
            </div>

            {/* Right Column: Information Required Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Requirements
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Documents & Information Required
                </h3>
                <p className="text-xs text-slate-500">To prepare an institutional-grade agreement, we generally require:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Registered Business Name',
                  'Website URL or App Details',
                  'Nature of Products / Services',
                  'Subscription or Payment Models',
                  'User Onboarding Workflow',
                  'Refund & Return Matrices',
                  'Corporate Contact Details',
                  'Special Prohibited Action Requirements'
                ].map((req) => (
                  <div
                    key={req}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                  >
                    🔹 {req}
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