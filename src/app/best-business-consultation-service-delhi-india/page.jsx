import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.businessConsultation;

export default function StartupConsultantLanding() {
  const HERO_STATS = [
    "15+ Years of Experience",
    "500+ Happy Clients",
    "Expert Consultants & CA Professionals",
    "End-to-End Support for Startups",
  ];

  const CONSULTING_SERVICES = [
    {
      num: "01",
      title: "Business Idea Validation",
      desc: "Assessing business feasibility, market demand, and growth potential to turn your concept into a viable entity.",
      bullets: ["Feasibility Analysis", "Market Demand", "Growth Potential", "Risk Assessment"]
    },
    {
      num: "02",
      title: "Business Model Development",
      desc: "Creating scalable and profitable business structures built for long-term operational success.",
      bullets: ["Scalable Architecture", "Profit Frameworks", "Revenue Engines", "Value Propositions"]
    },
    {
      num: "03",
      title: "Startup Registration Services",
      desc: "Complete end-to-end legal formation of your business entity tailored to fit structural requirements.",
      bullets: ["Private Limited", "LLP Registration", "OPC Integration", "Partnership & Sole Prop"]
    },
    {
      num: "04",
      title: "Financial Planning & Forecasting",
      desc: "Professional assistance with structured budgeting, cash flow forecasting, and bottom-line stability tools.",
      bullets: ["Budgeting Controls", "Cash Flow Tracks", "Financial Projections", "Profitability Audits"]
    },
    {
      num: "05",
      title: "Startup Compliance Services",
      desc: "Meticulous corporate governance keeping your new business structured and perfectly secure.",
      bullets: ["GST Setup & Filings", "ROC Custom Frameworks", "Income Tax Optimization", "Regulatory Advisory"]
    },
    {
      num: "06",
      title: "Funding & Investment Advisory",
      desc: "Preparing pitch decks, data rooms, and structural projection tools to make your startup fully investor-ready.",
      bullets: ["Pitch Deck Support", "Capital Sourcing Maps", "Valuation Blueprints", "Due Diligence Proofing"]
    },
    {
      num: "07",
      title: "Business Process Consulting",
      desc: "Analyzing operational workflows to dramatically maximize efficiency, performance, and overall productivity.",
      bullets: ["Workflow Automation", "Resource Allocation", "Waste Reduction", "Efficiency Audits"]
    },
    {
      num: "08",
      title: "Virtual CFO Services",
      desc: "High-tier outsourced financial management and corporate leadership without the cost of a full-time executive.",
      bullets: ["Strategic Controls", "KPI Dashboards", "Margin Optimization", "Boardroom Reporting"]
    }
  ];

  const PROCESS_STEPS = [
    { step: "Step 1", title: "Business Consultation", desc: "Understanding your startup vision, objectives, and challenges." },
    { step: "Step 2", title: "Business Analysis", desc: "Evaluating opportunities, risks, and market potential." },
    { step: "Step 3", title: "Strategy Development", desc: "Creating customized growth and operational plans." },
    { step: "Step 4", title: "Registration & Compliance Setup", desc: "Establishing legal and financial frameworks." },
    { step: "Step 5", title: "Financial Planning", desc: "Preparing budgets, projections, and growth roadmaps." },
    { step: "Step 6", title: "Ongoing Advisory Support", desc: "Continuous guidance as your startup grows." }
  ];

  const faqs = [
    { q: "Why does a startup need a business consultant?", a: "A startup consultant helps entrepreneurs structuralize business planning, build reliable financial management tracking, navigate compliance maps, structure funding plays, and deploy scalable growth strategies safely." },
    { q: "When should I hire a startup consultant?", a: "Ideally, you should engage a consultant right from the initial business idea stage to ensure complete validation, proper regulatory strategy execution, and sound framework planning from day one." },
    { q: "Can you help with startup funding?", a: "Yes, absolutely. We assist business owners with total investor readiness, crafting optimized business plans, building robust pitch documentation, and setting complex financial projections." },
    { q: "Do you provide startup registration services?", a: "Yes. Fintax Adviser provides complete structural incorporation support covering Private Limited Companies, LLPs, OPC structures, Partnership formations, and immediate compliance registration." },
    { q: "Can you help with business growth planning?", a: "Definitely. We design deep, customized business growth roadmaps and operational frameworks explicitly optimized around your specific industry, market realities, and overarching corporate milestones." }
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
                ⚡ Plan · Strategize · Grow · Succeed
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Best Business Consultant
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  for Startups in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Turn your idea into a successful business. Expert guidance at every stage of your startup journey. From idea to scale, we are with you all the way.
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
                  Start Your Startup Journey Today
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
            Looking for the Best Business Consultant for Startups in Delhi India?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Fintax Adviser</strong>. Starting a business involves much more than registering a company. Entrepreneurs need strategic planning, business structuring, funding guidance, financial management, legal compliance, tax planning, and growth strategies.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            With <strong>15+ Years of Experience</strong> and <strong>500+ Happy Clients Served</strong>, Fintax Adviser is recognized as the premier destination for helping startups build strong foundations for sustainable, scalable growth.
          </p>
        </div>
      </section>

      {/* Why Choose Reasons (Pain Points) Section */}
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose a Startup Business Consultant?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Launching a startup comes with multiple challenges. The right strategic guidance helps entrepreneurs avoid costly mistakes, minimize entry friction, and make informed business decisions from day one.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "Your Startup, Our Expertise. Endless Possibilities. We grow when you grow."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Expert Business Planning</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">We help startups create practical, highly optimized, and growth-oriented business strategies.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal & Regulatory Guidance</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Complete corporate layout support for structured registrations, licenses, and core compliance execution.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Financial Planning</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Professional bookkeeping assistance handling micro budgeting, cash forecasts, and profitability metrics.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Startup Growth Strategy</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">We configure scalable operational foundations so your business model expands efficiently and sustainably.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Investor Readiness Support</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Elite pitch presentation engineering paired with dynamic financial projection blueprints designed to scale investor confidence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Startup Consulting Services Offered
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Comprehensive end-to-end consulting blueprints built specifically around your brand goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CONSULTING_SERVICES.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-[11px] font-semibold text-slate-500 border-t border-slate-100 pt-3">
                  {item.bullets.map((b, i) => (
                    <span key={i} className="flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="text-blue-500">✓</span> {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Simple 6-Step Process Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Our Simple 6 Step Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A systematic pipeline bringing your startup from an abstract concept straight to operational maturity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {PROCESS_STEPS.map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative group hover:border-blue-500 transition-colors duration-300">
                <span className="absolute top-4 right-4 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                  {p.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 pt-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Matrix Section */}
      <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Benefits of Hiring the Best Startup Consultant
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Accelerate execution mechanics and eliminate entry risks using established business frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Faster Business Growth", d: "Professional tactical alignment dramatically accelerates product timelines and business development curves." },
              { t: "Better Financial Management", d: "Deploy pristine organizational cash workflows, improved forecasting analytics, and structural optimization models." },
              { t: "Reduced Compliance Risks", d: "Ensure bulletproof operational governance protecting corporate integrity from tax liabilities or statutory bottlenecks." },
              { t: "Strategic Decision Making", d: "Convert real-time data-driven insights and targeted business analytics directly into clean operational results." },
              { t: "Investor Confidence", d: "Professional financial documentation structures immediate institutional clarity to unlock fundraising windows." },
              { t: "Long-Term Sustainability", d: "Construct systematic, automated business engines and scalable workflows correctly from day one." }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{benefit.t}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{benefit.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments Tracker */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries Served Across Delhi NCR & Pan India
            </h2>
            <p className="text-xs text-slate-500 mt-1">Providing agile, customized strategic consulting solutions optimized across diverse business markets.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {[
              'Technology Startups', 'SaaS Businesses', 'E-Commerce Startups', 'Manufacturing Businesses',
              'Healthcare Startups', 'Education & EdTech', 'Financial Services', 'Consulting Firms',
              'Real Estate Businesses', 'Food & Beverage', 'Digital Marketing Agencies', 'Retail Businesses'
            ].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix / Footer Trust Grid */}
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
                  "15+ Years Industry Experience",
                  "500+ Happy Clients Served",
                  "Experienced CA & Consulting Team",
                  "Customized Solutions per Startup",
                  "Strong Financial & Legal Expertise",
                  "Transparent & Affordable Pricing"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-300 max-w-md">
                Our multidisciplinary corporate expert team features Chartered Accountants, Financial Analysts, Legal Consultants, and Startup Growth Engineers delivering Pan-India execution.
              </p>
            </div>

            {/* Right Column: Dynamic Corporate Services Box */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Startup Ecosystem Options
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Business Legal Incorporations We Handle
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Private Limited Incorporation',
                  'Limited Liability Partnership (LLP)',
                  'One Person Company (OPC)',
                  'Partnership Firm Registration',
                  'Sole Proprietorship Setup',
                  'GST Registration Protocols',
                  'Trademark Filings & Audits',
                  'ROC Compliance Ecosystem',
                  'Corporate Strategy Mapping'
                ].map((srv) => (
                  <div key={srv} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                    {srv}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion Section */}
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