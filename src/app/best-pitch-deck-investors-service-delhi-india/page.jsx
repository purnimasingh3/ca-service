import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { servicesMetadata } from "@/data/servicesMetadata";

export const metadata = servicesMetadata.pitchDeckInvestors;

export default function InvestorPitchDeckLanding() {
    const HERO_STATS = [
        "Financial Strength Showcase",
        "Data-Driven Growth Layouts",
        "Business Valuation Insights",
        "Exit Strategy Architecture",
    ];

    const sectionsList = [
        "Executive Summary & Deal Terms", "Company Historical Milestones",
        "Market Dynamics & TAM Validation", "Products, Services & IP Footprints",
        "Robust Revenue Generation Model", "Verified Financial Performance Metrics",
        "Competitive Advantages & Moats", "Strategic Growth Expansion Blueprints",
        "Management Team & Governance", "Investment Opportunity & Ask Breakdown",
        "Financial Projections & Margin Maps", "Calculated Investor Exit Strategies"
    ];

    const serviceOffers = [
        { title: "Investor Presentation Development", desc: "Professional high-level asset layout generation for institutional meetings." },
        { title: "Financial Projection Support", desc: "Granular, investor-ready cashflow statements, margin analyses, and growth roadmaps." },
        { title: "Market Research & Industry Analysis", desc: "Supporting industrial data to strengthen investment opportunities and mitigate risk vectors." },
        { title: "Investment Storytelling", desc: "Creating data-backed investment narratives tailored explicitly to address LP and GP mandates." },
        { title: "Business Valuation Support", desc: "Presenting fully defensive, realistic, and highly logical corporate valuation models." },
        { title: "Pitch Deck Review & Enhancement", desc: "Upgrading operational metrics and stylistic layouts of existing corporate decks." }
    ];

    const concernsAddressed = [
        "Market Opportunity Viability", "Highly-Scalable Revenue Generation Architecture",
        "Capital-Efficient Growth Parameters", "Sustainable Competitive Advantages & Differentiators",
        "Verified Financial Performance Frameworks", "High-Yield Potential Investment Returns"
    ];

    const faqs = [
        { q: "What is the difference between a Startup Pitch Deck and an Investor Pitch Deck?", a: "A startup pitch deck focuses on introducing the business, while an investor pitch deck provides deeper financial, growth, operational KPIs, and investment-related metrics for complex funding evaluations." },
        { q: "How many slides should an investor pitch deck contain?", a: "Most professional investor presentations contain approximately 12-20 slides depending on the complexity of the business and funding stage." },
        { q: "Can existing businesses use investor pitch decks?", a: "Yes. Established companies use investor decks for programmatic capital raises, joint venture partnerships, expansion allocations, and M&A activities." },
        { q: "Do investors require financial projections?", a: "Yes. Forward-looking financial forecasts are critical elements of institutional investment due diligence." },
        { q: "Can you redesign an existing investor deck?", a: "Yes. We conduct complete mathematical auditing, copy optimization, and professional formatting changes for mature corporate presentations." }
    ];

    return (
        <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#edf2f7] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-200 rounded-full blur-[150px] opacity-25 pointer-events-none mix-blend-multiply" />
                <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[130px] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping " />
                                💼 PRESENT OPPORTUNITIES. BUILD CONFIDENCE. RAISE CAPITAL.
                            </span>

                            <h1 className="text-4xl sm:text-xl xl:text-5xl font-black text-slate-900 tracking-tight !leading-[1.15]">
                                Professional Investor
                                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent block mt-2">
                                    Pitch Deck Design Services
                                </span>
                            </h1>

                            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                                We design enterprise-grade investor decks that clearly showcase business value, financial strength, and strategic return potentials.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                                {HERO_STATS.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xs border border-indigo-50 hover:border-indigo-200 transition duration-300">
                                        <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md">✓</div>
                                        <span className="font-bold text-gray-700 text-md sm:text-lg">{item}</span>
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
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900">
                        Create an Investor-Ready Pitch Deck That Builds Real Confidence
                    </h2>
                    <p className="text-xl sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                        Presenting to VC firms, private equity funds, HNIs, or institutional networks requires hyper-specific focus on metrics, risk management, and capitalization data. <strong className="text-indigo-600 font-medium">Fintax Adviser</strong> transforms numbers into compelling structural asset stories.
                    </p>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Investor Presentation Frameworks</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceOffers.map((srv, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-500 transition-all">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                                <p className="text-blue-600 text-md leading-relaxed">{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Sections Map */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900">Anatomy of an Institutional Investor Presentation</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sectionsList.map((sec, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200 flex items-center gap-3 hover:bg-indigo-100">
                                <span className="text-indigo-600 font-black text-xl animate-infinite animate-pulse">#</span>
                                <span className="text-slate-800 text-md font-bold">{sec}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Critical Concerns Checked */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">Investor Risks & Objectives Addressed</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {concernsAddressed.map((cn, i) => (
                            <div key={i} className="p-6 border border-slate-200 bg-slate-50 rounded-xl">
                                <span className="text-emerald-600 font-bold text-xl block mb-2">✓ Verified</span>
                                <p className="text-lg text-slate-700 font-medium">{cn}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Summary Card */}
            <section className="py-20 bg-slate-100 text-slate-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-4xl sm:text-4xl font-extrabold">Ready to Mobilize Growth Capital?</h2>
                    <p className="text-blue-600 text-xl max-w-2xl mx-auto">Leverage our professional compliance and corporate modeling specialists to maximize valuation potentials.</p>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 max-w-md mx-auto">
                        <span className="text-md font-bold text-white uppercase tracking-widest">Fintax Adviser Enterprise Support</span>
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