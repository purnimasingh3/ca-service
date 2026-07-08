import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
    title: "Best DOT (OSP) Registration CA Firm in Delhi India | Fintax Adviser",
    description: "Professional OSP Registration & Compliance Services by Fintax Adviser. 15+ Years Experience, 500+ Happy Clients Served. Fast Process & Affordable Pricing.",
};

export default function DotOspRegistrationLanding() {
    const HERO_STATS = [
        "15+ Years Experience",
        "Best DOT (OSP) Registration CA Firm",
        "500+ Happy Clients Served",
        "Expert Support for Business Compliance",
    ];

    const faqs = [
        {
            q: "What is DOT (OSP) Registration?",
            a: "OSP refers to Other Service Provider compliance under the Department of Telecommunications (DoT) for businesses using telecom resources to provide services such as call centers, BPOs, and customer support."
        },
        {
            q: "Who needs OSP Registration or Compliance Support?",
            a: "Call centers, BPOs, KPOs, ITES companies, telemarketing firms, and customer support centers using telecom resources for commercial operations may require compliance with applicable telecom regulations."
        },
        {
            q: "Is OSP Registration mandatory?",
            a: "Requirements depend entirely on your specific business model, infrastructure setup, and the current regulatory framework. A professional consultation with our expert CA team is highly recommended to assess your liability."
        },
        {
            q: "How long does the process take?",
            a: "Timelines vary depending on documentation completeness, your corporate business structure, and applicable regulatory authority verification queues."
        },
        {
            q: "Can startups apply?",
            a: "Yes, startups operating in relevant ITES, BPO, or customer outreach sectors can and should seek compliance guidance and registration support to ensure uninterrupted business continuity."
        },
        {
            q: "Why choose Fintax Adviser?",
            a: "Fintax Adviser provides expert consultation, accurate documentation management, affordable pricing matrix solutions, and complete compliance support backed by over 15+ years of real industry experience."
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
                        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm sm:text-base font-bold tracking-wide shadow-sm">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                                ⚡ COMPLIANT · TRUSTED · RELIABLE
                            </span>

                            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                                Best DOT (OSP) Registration
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                                    CA Firm in Delhi India
                                </span>
                            </h1>

                            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                                Professional OSP Registration & Compliance Services by Fintax Adviser. Obtain required approvals, maintain strict telecom compliance, and eliminate business interruption risks efficiently.
                            </p>

                            {/* Interactive Micro-Stats Grid */}
                            <div className="grid sm:grid-cols-2 gap-5 pt-6 max-w-xl mx-auto lg:mx-0">
                                {HERO_STATS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                                    >
                                        <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                                            ✓
                                        </div>
                                        <span className="font-bold text-gray-700 text-sm sm:text-md">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
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
            <section className="py-24 bg-white border-b border-slate-200/60">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Professional OSP Registration Services by Fintax Adviser
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                        Looking for the Best DOT (OSP) Registration CA Firm in Delhi India? <strong className="text-blue-600 font-bold">Fintax Adviser</strong> provides complete Other Service Provider (OSP) Registration and Compliance Services for BPOs, Call Centers, KPOs, ITES Companies, Customer Support Centers, Telemarketing Companies, and Businesses using telecom resources for commercial operations across India. With over 15+ Years of Experience and 500+ Happy Clients Served, we help businesses navigate Department of Telecommunications (DoT) guidelines smoothly.
                    </p>
                </div>
            </section>

            {/* Concept Identification Section */}
            <section className="py-20 bg-slate-100 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">What is DOT (OSP) Registration?</h3>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center">
                        OSP stands for <strong>Other Service Provider</strong>, a unique industry operations category regulated specifically by the <strong>Department of Telecommunications (DoT)</strong>, Government of India. Businesses utilizing corporate telecom nodes and records for centralized delivery require rigorous compliance matching matrices. Fintax Adviser assists businesses in understanding regulatory requirements and ensuring smooth compliance with applicable DoT guidelines.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Services Offered by Fintax Adviser
                        </h2>
                        <p className="text-slate-600 text-lg sm:text-xl">
                            End-to-end capabilities structural map engineered for absolute administrative correctness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: "01", name: "DOT (OSP) Registration Assistance", desc: "Complete architectural roadmap support for registration rules and processing variables." },
                            { id: "02", name: "Telecom Compliance Advisory", desc: "Professional corporate guidance on ongoing regulatory updates, modifications, and rules." },
                            { id: "03", name: "Documentation Support", desc: "Rigorous preparation, cross-checking, and layout verification of required technical and legal papers." },
                            { id: "04", name: "Regulatory Consultation", desc: "Expert advisory tracks concerning telecom asset setup and complex multi-location routing designs." },
                            { id: "05", name: "Compliance Management", desc: "Ongoing compliance tracking patterns to safeguard operational immunity year-round." },
                            { id: "06", name: "Business Registration Support", desc: "Cohesive multi-tier backing for related industry incorporations, tax files, and state permissions." }
                        ].map((srv) => (
                            <div key={srv.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {srv.id}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.name}</h3>
                                <p className="text-slate-600 text-base leading-relaxed">{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Needs Section */}
            <section className="py-24 bg-white border-t border-b border-slate-200/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Who Needs DOT (OSP) Registration?
                        </h2>
                        <p className="text-slate-600 text-lg sm:text-xl">
                            Fintax Adviser provides dedicated infrastructure structuring for the following segments:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-base font-bold text-slate-800">
                        {[
                            { title: "Call Centers", desc: "Inbound and outbound customer support centers." },
                            { title: "BPO Companies", desc: "Business Process Outsourcing organizations." },
                            { title: "KPO Companies", desc: "Knowledge Process Outsourcing service providers." },
                            { title: "ITES Companies", desc: "Information Technology Enabled Service businesses." },
                            { title: "Telemarketing Companies", desc: "Organizations engaged in customer outreach activities." },
                            { title: "Shared Service Centers", desc: "Businesses managing centralized support functions." },
                            { title: "Customer Support Centers", desc: "Domestic and international customer service operations." },
                            { title: "Multinational Companies", desc: "Global businesses operating support centers in India." }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-slate-50 rounded-xl shadow-xs border border-slate-200 hover:border-blue-500 transition-colors flex flex-col justify-between">
                                <span className="text-blue-600 text-lg block mb-2">{item.title}</span>
                                <span className="text-sm font-normal text-slate-500 leading-relaxed">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Firm Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-5 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                                Why Choose the Best DOT (OSP) Registration CA Firm in Delhi India?
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Navigating complex Department of Telecommunications directives mandates specialized regulatory control vectors. Processing applications alone without seasoned review parameters frequently surfaces critical structural application bottlenecks.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Expert Regulatory Guidance", body: "Professional assistance with telecom compliance and documentation." },
                                { title: "End-to-End Support", body: "From consultation to approval and post-registration compliance." },
                                { title: "Faster Processing", body: "Proper documentation helps reduce delays and compliance issues." },
                                { title: "Dedicated Compliance Team", body: "Experienced professionals handling telecom and regulatory matters." },
                                { title: "Pan India Services", body: "Online support available for businesses across India." },
                                { title: "Affordable Pricing", body: "Transparent and cost-effective service packages." }
                            ].map((point, idx) => (
                                <div key={idx} className="p-6 border border-slate-200 bg-white rounded-xl shadow-xs">
                                    <h4 className="font-bold text-base sm:text-lg text-blue-600 mb-2">{point.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{point.body}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Benefits of DOT (OSP) Registration & Compliance
                        </h2>
                        <p className="text-slate-600 text-lg sm:text-xl">
                            Locking down systematic legitimacy opens growth and mitigates risk vectors across India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { t: "Regulatory Compliance", d: "Operate your business in accordance with applicable telecom regulations." },
                            { t: "Business Credibility", d: "Enhances trust with clients, partners, and government authorities." },
                            { t: "Smooth Operations", d: "Avoid regulatory issues and operational disruptions." },
                            { t: "Professional Documentation", d: "Maintain proper records and compliance processes." },
                            { t: "Expansion Opportunities", d: "Support business growth with compliant telecom infrastructure." },
                            { t: "Risk Management", d: "Reduce compliance risks and potential penalties." }
                        ].map((b, i) => (
                            <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50/40 transition-colors">
                                <h4 className="text-lg font-bold text-[#071c3d] mb-2">{b.t}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{b.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents Section */}
            <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Documents Required for DOT (OSP) Registration
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg">
                            Generally, the following checklists are required to process structural validation routines:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                            <h3 className="text-xl font-bold text-blue-600 border-b border-slate-100 pb-2">Business Registration</h3>
                            <ul className="text-slate-700 text-base space-y-3">
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Certificate of Incorporation</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Partnership Deed / LLP Agreement</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> MOA & AOA (for Companies)</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                            <h3 className="text-xl font-bold text-blue-600 border-b border-slate-100 pb-2">Tax & Address Proofs</h3>
                            <ul className="text-slate-700 text-base space-y-3">
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Corporate PAN Card</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> GST Registration Certificate</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Office Utility Bill & Rent Agreement</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Verified Property Ownership Documents</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4 md:col-span-2 lg:col-span-1">
                            <h3 className="text-xl font-bold text-blue-600 border-b border-slate-100 pb-2">Signatory & Network Data</h3>
                            <ul className="text-slate-700 text-base space-y-3">
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Authorized Aadhaar & PAN Card</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Passport Size Photographs</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Core Telecom Network Diagrams</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✔</span> Infrastructure & Service Details</li>
                            </ul>
                        </div>

                    </div>
                    <p className="text-center text-sm text-slate-500 mt-8 font-medium">
                        * Note: Additional documents may be required under specific applicable regulations and corporate setups.
                    </p>
                </div>
            </section>

            {/* Process Roadmap */}
            <section id="process" className="py-24 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            DOT (OSP) Registration Process
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg">
                            Structured operational flow engineered for predictable evaluation processing speeds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                        {[
                            { step: "1", title: "Initial Consultation", body: "Understanding business operations and telecom requirements." },
                            { step: "2", title: "Document Collection", body: "Collection and systematic verification of required records." },
                            { step: "3", title: "Compliance Review", body: "Deep assessment of regulatory applicability parameters." },
                            { step: "4", title: "Application Prep", body: "Preparation of necessary registration and compliance papers." },
                            { step: "5", title: "Submission", body: "Filing and tracking coordination with relevant authorities." },
                            { step: "6", title: "Compliance Support", body: "Ongoing guidance for maintaining strict regulatory standing." }
                        ].map((p, idx) => (
                            <div key={idx} className="p-5 text-center bg-slate-50 border border-slate-200 rounded-2xl relative flex flex-col justify-between">
                                <div>
                                    <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black shadow-md">
                                        {p.step}
                                    </div>
                                    <h5 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{p.title}</h5>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed mt-1">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Matrix & Extended Services Footer Box */}
            <section className="py-24 bg-slate-50 text-white border-t border-slate-200 w-full clear-both">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Why Choose Fintax Adviser */}
                        <div className="w-full space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                                    Why Fintax Adviser is the Best DOT (OSP) Registration CA Firm
                                </h2>
                                <div className="w-16 h-1 bg-blue-500 rounded"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                {[
                                    "15+ Years of Professional Experience",
                                    "500+ Happy Clients Served",
                                    "Expert Compliance Professionals",
                                    "Affordable Service Packages",
                                    "Fast & Reliable Support",
                                    "End-to-End Business Compliance Services"
                                ].map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-center gap-3 bg-slate-100 border border-slate-800 p-4 rounded-xl shadow-xs hover:bg-slate-200 transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 font-bold text-xs shrink-0">
                                            ✓
                                        </div>
                                        <span className="text-md font-medium text-slate-600 tracking-wide leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs sm:text-sm font-bold text-blue-400">
                                {[
                                    "✓ Expert Compliance Guidance",
                                    "✓ Faster Documentation Processing",
                                    "✓ Reduced Regulatory Risks",
                                    "✓ Business Continuity Support",
                                    "✓ Professional Consultation",
                                    "✓ Affordable Compliance Solutions",
                                    "✓ Pan India Service Availability",
                                    "✓ Ongoing Regulatory Assistance"
                                ].map((adv, aIdx) => (
                                    <span key={aIdx} className="tracking-wide">{adv}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Additional Corporate Services Card */}
                        <div className="w-full bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-xs">
                            <div className="space-y-3 mb-6">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 inline-block">
                                    Ecosystem Support
                                </span>
                                <h3 className="text-xl font-bold tracking-tight text-white">
                                    Additional Financial Solutions We Offer
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {[
                                    'GST Registration Services',
                                    'GST Return Filing',
                                    'GST Notice Handling',
                                    'Income Tax Return Filing',
                                    'Income Tax Refund Services',
                                    'Income Tax Notice Handling',
                                    'ROC Compliance Management',
                                    'Virtual CFO Services',
                                    'Accounting & Bookkeeping',
                                    'MIS Reporting Services',
                                    'Trademark Registration',
                                    'Fundraising Services'
                                ].map((srv) => (
                                    <div
                                        key={srv}
                                        className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-200"
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
            <section id="faqs" className="py-24 bg-slate-100 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Frequently Asked Questions (FAQs)
                        </h2>
                    </div>

                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

        </div>
    );
}