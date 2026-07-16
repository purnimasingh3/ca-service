import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.isoCertification || {
    title: "Best ISO Certification Consultant in Delhi India | Fintax Adviser",
    description: "Get ISO Certified for your business with expert guidance from Fintax Adviser. Quality Assurance, Global Recognition, and Business Growth.",
};

export default function PremiumISOCertificationLanding() {
    const HERO_STATS = [
        "15+ Years Experience",
        "Expert Compliance Team",
        "500+ Happy Clients Served",
        "Fast | Reliable | Affordable Pricing",
    ];

    const faqs = [
        { q: "What is ISO Certification?", a: "ISO Certification is an internationally recognized standard that demonstrates a business follows structured management and quality systems." },
        { q: "Is ISO Certification mandatory?", a: "No, ISO Certification is generally voluntary but highly beneficial for business growth and credibility." },
        { q: "How long does ISO Certification take?", a: "The timeline depends on the type of ISO standard, business size, and documentation readiness." },
        { q: "Which ISO Certification is most popular?", a: "ISO 9001:2015 (Quality Management System) is one of the most widely adopted certifications globally." },
        { q: "Can startups apply for ISO Certification?", a: "Yes, startups and small businesses can obtain ISO Certification to improve credibility and operational standards." },
        { q: "Is ISO Certification valid internationally?", a: "Yes, ISO standards are recognized globally and help businesses build trust in international markets." }
    ];

    return (
        <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

                <div className="max-w-7xl mx-auto px-2 sm:px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* HERO LEFT CONTENT */}
                        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                                <span className="w-3 h-3 rounded-full bg-blue-600 animate-ping" />
                                ⚡ QUALITY ASSURANCE • GLOBAL RECOGNITION • BUSINESS GROWTH
                            </span>

                            <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.2]">
                                Best ISO Certification
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-3">
                                    Consultant in Delhi India
                                </span>
                            </h1>

                            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                                ISO Certification builds trust, improves quality standards, and helps your business grow with confidence. Get certified today for a better tomorrow.
                            </p>

                            {/* Interactive Micro-Stats Grid */}
                            <div className="grid sm:grid-cols-2 gap-5 pt-6 max-w-xl mx-auto lg:mx-0">
                                {HERO_STATS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-base shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                                            ✓
                                        </div>
                                        <span className="font-bold text-gray-700 text-md sm:text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-6">
                                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                    <h2 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        ISO Registration Services by Fintax Adviser
                    </h2>
                    <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-6">
                        <p>
                            Looking for the Best ISO Certification Consultant in Delhi India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides professional ISO Certification services for startups, MSMEs, manufacturers, service providers, exporters, educational institutions, healthcare organizations, and businesses across India.
                        </p>
                        <p>
                            ISO Certification helps businesses improve quality standards, enhance customer trust, streamline operations, and strengthen their market reputation. Our expert team assists with complete documentation, implementation guidance, audit support, and certification coordination.
                        </p>
                        <p>
                            With 15+ Years of Experience and 500+ Happy Clients Served, Fintax Adviser is a trusted partner for ISO Certification and business compliance services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Concept Breakdown */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-4xl sm:text-4xl font-bold text-slate-900">What is ISO Certification?</h3>
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                                ISO (International Organization for Standardization) Certification is an internationally recognized standard that demonstrates a company's commitment to quality, efficiency, safety, and continuous improvement.
                            </p>
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                                ISO Certification helps organizations establish standardized processes, improve customer satisfaction, and gain a competitive advantage in domestic and international markets.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                            <h4 className="text-2xl font-bold text-[#071c3d]">Build Quality. Earn Trust. Grow Globally.</h4>
                            <div className="h-1.5 w-24 bg-blue-600 rounded"></div>
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                                Unlock opportunities for government tenders, international supply networks, and elevated structural credibility with our efficient compliance processing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular ISO Certifications Provided */}
            <section id="services" className="py-24 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
                            Popular ISO Certifications We Assist With
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Comprehensive structural standards tailored precisely to your global enterprise goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: "01", title: "ISO 9001:2015", subtitle: "Quality Management System", desc: "Improves product and service quality while enhancing customer satisfaction." },
                            { id: "02", title: "ISO 14001:2015", subtitle: "Environmental Management System", desc: "Helps organizations manage environmental responsibilities effectively." },
                            { id: "03", title: "ISO 45001:2018", subtitle: "Occupational Health & Safety", desc: "Focuses on workplace safety and employee well-being." },
                            { id: "04", title: "ISO 22000", subtitle: "Food Safety Management System", desc: "Designed for food manufacturers, processors, and food businesses." },
                            { id: "05", title: "ISO 27001", subtitle: "Information Security Management", desc: "Protects business information asset architectures and data security." },
                            { id: "06", title: "ISO 13485", subtitle: "Medical Devices Quality Management", desc: "For organizations involved in medical device manufacturing frameworks." },
                            { id: "07", title: "ISO 50001", subtitle: "Energy Management System", desc: "Helps improve structural energy efficiency and reduce operational costs." }
                        ].map((iso) => (
                            <div key={iso.id} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {iso.id}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{iso.title}</h3>
                                <h4 className="text-md font-bold uppercase tracking-wider text-blue-600 mb-4">{iso.subtitle}</h4>
                                <p className="text-slate-600 text-lg leading-relaxed">{iso.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Importance & Benefits Section */}
            <section className="py-24 bg-slate-100 text-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-5 space-y-6">
                            <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl lg:text-4xl">
                                Benefits of ISO Certification
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Implementing standardized architectures is vital to corporate expansion metrics. Maximize systemic yields and secure enterprise advantages today.
                            </p>
                            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-xl">
                                <p className="text-base font-semibold text-blue-700 leading-relaxed">
                                    "Enhance customer confidence, secure consistent operational compliance frameworks, and compete globally with complete assurance."
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Enhanced Credibility", desc: "Build immediate corporate trust with customers, suppliers, and international stakeholders." },
                                { title: "Improved Quality Standards", desc: "Establish ultra-efficient operational processes and consistent global service delivery metrics." },
                                { title: "Customer Satisfaction", desc: "Consistently meet client metrics through structured quality operational architectures." },
                                { title: "Better Opportunities", desc: "Gain massive advantages while bidding for premium enterprise tenders and public contracts." },
                                { title: "Global Recognition", desc: "Improve acceptance across international markets and multinational procurement pipelines." }
                            ].map((item, idx) => (
                                <div key={idx} className={`p-6 border border-slate-200 bg-slate-200 rounded-xl ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                                    <h4 className="font-bold text-md uppercase tracking-wider text-blue-600">{item.title}</h4>
                                    <p className="text-base text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Who Can Apply Section */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-3">
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl lg:text-4xl">
                            Who Can Apply for ISO Certification?
                        </h2>
                        <p className="text-lg text-slate-500">Providing compliance assistance for diverse operational organizational scopes across India.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center font-bold text-slate-700">
                        {[
                            "Startups", "MSMEs", "Private Limited Companies", "LLPs",
                            "Partnership Firms", "Proprietorship Businesses", "Manufacturers",
                            "Service Providers", "Educational Institutions", "Hospitals & Healthcare",
                            "Exporters & Importers", "NGOs & Trusts"
                        ].map((title, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-500 transition-colors flex items-center justify-center">
                                <span className="text-blue-700 block text-md md:text-lg">{title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents Section */}
            <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-4xl text-slate-900">
                            Documents Required for ISO Certification
                        </h2>
                        <p className="text-slate-600 text-xl">
                            A comprehensive checklist required to establish quick verification cycles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                            <h3 className="text-xl font-black text-blue-600 border-b pb-2">Core Identity</h3>
                            <ul className="text-slate-700 text-md space-y-3 font-medium">
                                <li className="flex items-start gap-2">✔ Corporate PAN Card</li>
                                <li className="flex items-start gap-2">✔ GST Registration Certificate</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                            <h3 className="text-xl font-black text-blue-600 border-b pb-2">Registration</h3>
                            <ul className="text-slate-700 text-md  space-y-3 font-medium">
                                <li className="flex items-start gap-2">✔ Business Incorporation/Registration Docs</li>
                                <li className="flex items-start gap-2">✔ Valid Premises Address Proof</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                            <h3 className="text-xl font-black text-blue-600 border-b pb-2">Architecture</h3>
                            <ul className="text-slate-700 text-md space-y-3 font-medium">
                                <li className="flex items-start gap-2">✔ Structural Organization Profile</li>
                                <li className="flex items-start gap-2">✔ Explicit Process & Quality Records</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                            <h3 className="text-xl font-black text-blue-600 border-b pb-2">Policies</h3>
                            <ul className="text-slate-700 text-md space-y-3 font-medium">
                                <li className="flex items-start gap-2">✔ Outlined Scope of Operations</li>
                                <li className="flex items-start gap-2">✔ Existing Policies & Directives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Roadmap */}
            <section id="process" className="py-24 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
                            Our Simple ISO Process Blueprint
                        </h2>
                        <p className="text-slate-600 text-xl">
                            An expert 6-step setup workflow managed entirely online by our firm.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 relative">
                        {[
                            { step: 1, title: "Consultation", desc: "Understanding operational parameters and structural standard matching rules." },
                            { step: 2, title: "Doc Review", desc: "Meticulous verification of compliance data profiles." },
                            { step: 3, title: "System Setup", desc: "Implementing required ISO architecture guidelines inside loops." },
                            { step: 4, title: "Assessment", desc: "Internal checks to ensure absolute audit readiness." },
                            { step: 5, title: "Official Audit", desc: "Verification process execution by the selected certification body." },
                            { step: 6, title: "Issuance", desc: "Successful delivery of your functional ISO certification." }
                        ].map((p) => (
                            <div key={p.step} className="p-6 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-base font-black shadow-sm">
                                        {p.step}
                                    </div>
                                    <h5 className="font-bold text-slate-900 text-lg uppercase tracking-wider mb-2">{p.title}</h5>
                                </div>
                                <p className="text-md text-slate-600 ">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantage Matrix & Trust Footer Box */}
            <section className="py-24 bg-slate-100 text-white w-full clear-both">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Column */}
                        <div className="w-full space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d] leading-tight">
                                    Why Choose Fintax Adviser?
                                </h2>
                                <div className="w-16 h-1.5 bg-blue-500 rounded"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                {[
                                    "15+ Years of Industry Experience",
                                    "500+ Happy Clients Across India",
                                    "Expert Compliance Team Professionals",
                                    "Affordable Pricing & Clear Packages",
                                    "Fast Processing Architecture Tracking",
                                    "Pan India Online Virtual Services"
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-4 bg-slate-200 border border-slate-800 p-5 rounded-xl shadow-xs transition-colors">
                                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/10 text-blue-500 font-bold text-base shrink-0">
                                            ✓
                                        </div>
                                        <span className="text-lg font-bold text-slate-800 tracking-wide">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-xl space-y-6">
                            <div>
                                <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded border border-blue-500/20 inline-block">
                                    Corporate Hub
                                </span>
                                <h3 className="text-3xl font-black text-white mt-3">Fintax Adviser Network</h3>
                            </div>
                            <div className="space-y-4 text-lg text-slate-300">
                                <div className="flex justify-between border-b border-slate-800 pb-3">
                                    <span className="text-slate-400 font-medium">Headquarters Location</span>
                                    <span className="font-bold text-white">Delhi, India</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-800 pb-3">
                                    <span className="text-slate-400 font-medium">Core Service Priority</span>
                                    <span className="font-bold text-white">Standardization & Quality Systems</span>
                                </div>
                            </div>
                            <div className="bg-slate-950 p-5 rounded-xl text-center border border-slate-800">
                                <p className="text-sm uppercase font-bold text-slate-400 tracking-wider">Your Trusted Partner for Corporate Compliance</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQs Accordion */}
            <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
                            Frequently Asked Questions (FAQs)
                        </h2>
                    </div>
                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

        </div>
    );
}