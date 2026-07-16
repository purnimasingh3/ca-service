import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = servicesMetadata.pitchDeckStartups;

export default function StartupPitchDeckLanding() {
  const HERO_STATS = [
    "Investor-Ready Pitch Decks",
    "Financial Projections Included",
    "Business Storytelling Layouts",
    "Fundraising Support Framework",
  ];

  const coreServices = [
    { num: "01", title: "Investor Pitch Deck Preparation", desc: "Professional fundraising presentations that tell your story cleanly." },
    { num: "02", title: "Startup Story Development", desc: "Creating a highly compelling, emotional, and mathematical investment narrative." },
    { num: "03", title: "Financial Projection Design", desc: "Investor-friendly financial forecasts, unit economics, and data-driven estimates." },
    { num: "04", title: "Market Research Support", desc: "Deep industry size analysis covering TAM, SAM, and SOM metrics effectively." },
    { num: "05", title: "Business Model Presentation", desc: "Clear structural representation of monetization strategies and revenue streams." },
    { num: "06", title: "Fundraising Advisory & Review", desc: "Guidance on investor expectations with continuous enhancement updates." }
  ];

  const importanceMetrics = [
    { title: "Creates Strong First Impression", desc: "Investors evaluate setups through decks; maximize your initial window of attention." },
    { title: "Simplifies Complex Ideas", desc: "Helps translate deep underlying products, SaaS code, or workflows into clear business structures." },
    { title: "Attracts Right Funding", desc: "Professional data-driven presentations improve investor confidence and meeting booking ratios." },
    { title: "Highlights Growth Scalability", desc: "Demonstrates exactly how your business intends to corner the market and expand parameters." },
    { title: "Improves Corporate Clarity", desc: "Helps founding teams clearly define their strategic vision, resource allocation, and timelines." }
  ];

  const targetAudience = [
    "Startups Seeking Funding", "Technology Startups", "SaaS Companies", 
    "E-commerce Businesses", "D2C Brands", "FinTech Startups", 
    "EdTech Companies", "Health Tech Startups", "Manufacturing Businesses", 
    "Growth-Stage Companies", "Startup Founders"
  ];

  const documents = [
    { title: "Corporate Data", items: ["Company Information", "Founder Profiles", "Product Details"] },
    { title: "Operational Metrics", items: ["Business Model Info", "Market Data", "Customer Information"] },
    { title: "Financial Systems", items: ["Financial Statements", "Revenue Projections", "Funding Requirements", "Growth Plans"] }
  ];

  const commonMistakes = [
    "Too Much Information & Slide Overload",
    "Lack of Financial Clarity & Missing Estimates",
    "Weak Market Analysis & Customer Data Profiles",
    "Unclear Business Models & Revenue Tracking",
    "Unprofessional Layout & Poor Presentation Quality",
    "No Clear Funding Strategy & Capital Allocation"
  ];

  const faqs = [
    { q: "How many slides should a startup pitch deck have?", a: "Most investor pitch decks typically contain 10-15 slides focusing on key business information." },
    { q: "Do investors require a pitch deck?", a: "Yes. A pitch deck is usually one of the first documents investors review." },
    { q: "Can early-stage startups create a pitch deck?", a: "Yes. Even pre-revenue startups can prepare investor presentations to pitch vision and market opportunities." },
    { q: "Do you help with financial projections?", a: "Yes. We assist in preparing investor-friendly financial forecasts, validation parameters, and business plans." },
    { q: "Can you improve an existing pitch deck?", a: "Yes. We provide deep pitch deck review, copywriting enhancement, and complete graphic redesign services." }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ TURN YOUR IDEA INTO AN INVESTOR OPPORTUNITY
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Investor-Ready Pitch Deck
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Preparation Services for Startups
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                We create compelling, investor-ready pitch decks that tell your story, showcase your intrinsic value, and help raise the capital your business deserves.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">✓</div>
                    <span className="font-bold text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Startup Pitch Deck Services by Fintax Adviser
          </h2>
          <div className="text-lg sm:text-2xl text-slate-600 leading-relaxed font-normal space-y-6">
            <p>
              Looking to raise funds from Angel Investors, Venture Capital Firms (VCs), HNIs, Family Offices, or Strategic Investors? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides elite, professional pitch deck production services to present business ideas with maximum conversion viability.
            </p>
            <p>
              A well-designed pitch deck is one of the most important tools in the fundraising ecosystem. Our team helps startups map out business models, market opportunities, clear financial architectures, and structural growth plans.
            </p>
          </div>
        </div>
      </section>

      {/* Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-4xl font-bold text-slate-900">What is a Startup Pitch Deck?</h3>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                A startup pitch deck is a precise, high-impact presentation that explicitly details a company's business metrics, products, target validation parameters, and explicit funding utilization framework.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-2xl font-bold text-[#071c3d]">Investor Focused Clarity</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <p className="text-lg sm:text-xl text-slate-600">
                Investors typically spend less than 3 minutes reviewing a deck before deciding on programmatic next steps. Make every single data component count with professional layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Pitch Deck Core Capabilities
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl">
              Comprehensive presentation and architectural services tailored for modern startup fundraisers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-slate-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-5xl">
                Why is a Professional Pitch Deck Vital?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Operating without professional data aggregation leads to immediate investor rejections. Present clear structures to maintain fundraising momentum.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-base font-semibold text-blue-600 leading-relaxed">
                  "Build legal authenticity, showcase true scalability, and unlock access to institutional capital networks smoothly."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {importanceMetrics.map((item, idx) => (
                <div key={idx} className={`p-6 border border-slate-200 bg-slate-200 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <h4 className="font-bold text-md uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-base text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Startups and Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center font-bold">
            {targetAudience.map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-500 transition-colors flex items-center justify-center">
                <span className="text-blue-700 block text-md md:text-lg">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Information Blueprint Required to Get Started
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((box, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-xl font-black text-blue-600 border-b pb-2">{box.title}</h3>
                <ul className="text-slate-700 text-lg space-y-2.5 font-medium">
                  {box.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">✔ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Pitch Deck Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {[
              { step: 1, title: "Consultation", desc: "Understanding the startup narrative and strategic fundraising targets." },
              { step: 2, title: "Data Collection", desc: "Gathering deep business model architectures and tracking sheets." },
              { step: 3, title: "Content Strategy", desc: "Creating investor-focused core messaging frameworks and value stories." },
              { step: 4, title: "Design Phase", desc: "Developing elite premium visuals, layout schemes, and clear graphics." },
              { step: 5, title: "Refinement Loop", desc: "Incorporating iterative revisions based on continuous management input." },
              { step: 6, title: "Final Delivery", desc: "Providing dynamic print and investor-ready digital configurations." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-base font-black shadow-sm">
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

      {/* Avoid Mistakes Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Critical Mistakes We Eliminate</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonMistakes.map((mistake, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5">
                <span className="text-red-600 font-bold text-xl">✕</span>
                <span className="text-slate-800 text-lg font-semibold leading-tight">{mistake}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Footer Card */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="w-full space-y-8">
              <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d]">Why Partner With Fintax Adviser?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {["Startup Advisory DNA", "Investor Aligned Copy", "Custom Financial Modelling", "Pan India Virtual Network"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-slate-200 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm shrink-0">✓</div>
                    <span className="text-lg font-bold text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-slate-900 p-8 rounded-2xl text-white space-y-4">
              <h3 className="text-2xl font-black">Strategic Advisory Hub</h3>
              <p className="text-slate-300 text-lg">Delivering high-tier corporate assets and structural financial tracking models seamlessly across global standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}