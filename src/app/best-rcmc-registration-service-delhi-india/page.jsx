import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.rcmcRegistration;
export default function PremiumRcmcRegistrationLanding() {
    const HERO_STATS = [
        "12+ Years Experience",
        "Expert CA & Compliance Team",
        "500+ Happy Clients Served",
        "Complete Export Support",
    ];

    const faqs = [
        { q: "What is RCMC Registration?", a: "RCMC stands for Registration Cum Membership Certificate issued by Export Promotion Councils (EPCs), Commodity Boards, and related Export Development Authorities recognized by the Government of India." },
        { q: "Is RCMC mandatory for exporters?", a: "RCMC is generally required for businesses seeking benefits, incentives, and concessions under the Foreign Trade Policy (FTP) and various export promotion schemes." },
        { q: "Who issues RCMC Certificates?", a: "Export Promotion Councils (EPCs), Commodity Boards, and Export Development Authorities recognized by the Government of India issue RCMC certificates based on your core business line." },
        { q: "Is IEC required before applying for RCMC?", a: "Yes, a valid Import Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) is generally a mandatory prerequisite before applying for RCMC." },
        { q: "How long is RCMC valid?", a: "The validity depends on the specific rules of the applicable regulations and the issuing Export Promotion Council or authority (typically valid for 5 years, subject to annual membership renewal)." },
        { q: "Can startups apply for RCMC?", a: "Yes, startup exporters can obtain RCMC registration to leverage export incentives, participate in international exhibitions, and scale up global operations from day one." },
        { q: "Why choose the Best RCMC Registration CA Firm in Delhi India?", a: "Professional registration through Fintax Adviser ensures faster processing, accurate identification of the right EPC, error-free documentation, and guaranteed compliance with export regulations." }
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
                                ⚡ Professional · Easy & Fast Process · Gateway to Global Markets
                            </span>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                                Best RCMC Registration
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                                    CA Firm in Delhi India
                                </span>
                            </h1>

                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                                Professional RCMC Registration Services for Exporters & Import-Export Businesses. Get government incentives, export promotion benefits, and recognition from Export Promotion Councils (EPCs) seamlessly.
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
                                        <span className="font-semibold text-gray-700 text-md sm:text-base">{item}</span>
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
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Trusted Experts for Export Business Growth by Fintax Adviser
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                        Looking for the Best RCMC Registration CA Firm in Delhi India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides complete Registration Cum Membership Certificate (RCMC) Registration services for exporters, manufacturers, merchant exporters, import-export businesses, and international traders across India. RCMC Registration is an essential requirement for businesses engaged in export activities seeking benefits under India&apos;s Foreign Trade Policy (FTP).
                    </p>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left max-w-3xl mx-auto mt-6">
                        <h3 className="text-lg font-bold text-[#071c3d] mb-2">What is RCMC Registration?</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            RCMC stands for Registration Cum Membership Certificate. It is issued by Export Promotion Councils (EPCs), Commodity Boards, or Export Development Authorities recognized by the Government of India. The RCMC certificate confirms that an exporter is registered with the relevant export promotion organization and is eligible to avail benefits under the Foreign Trade Policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Our RCMC & Export Management Services Include
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg">
                            Fintax Adviser provides complete support for export registration, compliance structuring, and incentive maximization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Service 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                01
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">RCMC Registration Services</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">End-to-end registration assistance and profiling with the relevant Export Promotion Councils matching your industry vertical.</p>
                            <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <span className="text-blue-500">✓</span> EPC Identification & Registration
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                02
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">IEC Registration Support</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Import Export Code (IEC) registration assistance through DGFT portal configuration to establish legal trading footprints.</p>
                            <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <span className="text-blue-500">✓</span> Valid IEC Certificate Issuance
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                03
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Export Compliance Advisory</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional structural guidance on updated export rules, custom guidelines, cross-border matrices, and standard regulations.</p>
                            <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <span className="text-blue-500">✓</span> FTP Strategy & Advisory
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                04
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">DGFT Registration Services</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Comprehensive support for Directorate General of Foreign Trade official registrations, e-token setup, and system modifications.</p>
                            <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <span className="text-blue-500">✓</span> DGFT Portal Operations
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                05
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Export Incentive Consultation</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Professional assistance in identifying, understanding, and claiming financial advantages under various export incentive structures.</p>
                            <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <span className="text-blue-500">✓</span> Policy Benefit Identification
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                06
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Export Documentation Support</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Strategic preparation, structure formulation, auditing, and critical review of corporate export documents to avoid departmental rejections.</p>
                            <div className="border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <span className="text-blue-500">✓</span> Flawless Record Processing
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section id="why-rcmc" className="py-24 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-5 space-y-5">
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Why is RCMC Registration Important?
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed">
                                RCMC Registration offers several legal and financial advantages that serve as the fundamental backbone for Indian export entities trying to capture international business frameworks.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
                                <p className="text-xs sm:text-sm font-semibold text-blue-900 leading-relaxed">
                                    &quot;RCMC is an essential requirement for businesses engaged in export activities to establish global credibility and utilize Foreign Trade Policy advantages.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Access to Export Benefits</h4>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Unlock key export promotion benefits, financial schemes, and deep institutional supports.</p>
                            </div>
                            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Government Scheme Eligibility</h4>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Avail direct legal concessions, exemptions, and credit incentives offered under the FTP.</p>
                            </div>
                            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Enhanced Export Credibility</h4>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Establishes trust, corporate validation, and high reputation metrics across international supply chains.</p>
                            </div>
                            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Global Promotion & Events</h4>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Participate officially in international trade fairs, focused exhibitions, and government trade delegations.</p>
                            </div>
                            <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl sm:col-span-2">
                                <h4 className="font-bold text-sm text-blue-600 uppercase tracking-wider">Industry Representation & Information</h4>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Gain powerful council representation before administrative trade bodies and access critical global market intelligence tools.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Required Documents Section */}
            <section className="py-24 bg-sky-50 text-slate-900 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
                            Documents Required for RCMC Registration
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base">
                            Ensure you have these primary verifiable records ready for our compliance verification audit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-blue-600 mb-4">Business & Tax Records</h3>
                            <ul className="text-slate-700 text-sm space-y-2.5">
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Certificate of Incorporation / Registration</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Partnership Deed / LLP Agreement (if applicable)</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Company PAN Card</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">GST Registration Certificate</span></li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-blue-600 mb-4">IEC & Address Proof</h3>
                            <ul className="text-slate-700 text-sm space-y-2.5">
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Valid Import Export Code (IEC) Certificate issued by DGFT</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Electricity / Utility Bill</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Rent Agreement (if properties are leased)</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Property Ownership Documents</span></li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg font-bold text-blue-600 mb-4">Bank & Product Profiles</h3>
                            <ul className="text-slate-700 text-sm space-y-2.5">
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Corporate Cancelled Cheque</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Official Bank Certificate</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Detailed Export Product Information</span></li>
                                <li className="flex items-start gap-2">✔ <span className="mt-0.5">Comprehensive Business Profile Summary</span></li>
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
                            Who Needs RCMC Registration?
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">Providing precision management fit for diverse organizational setups across global trade loops.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
                        {[
                            { title: 'Merchant Exporters', desc: 'Trading products manufactured by 3rd parties.' },
                            { title: 'Manufacturer Exporters', desc: 'Exporting own manufactured corporate assets.' },
                            { title: 'Import Export Businesses', desc: 'Engaged inside generalized international trade.' },
                            { title: 'E-Commerce Exporters', desc: 'Online marketplace global digital sellers.' },
                            { title: 'Service Exporters', desc: 'Providing professional solutions to global clients.' },
                            { title: 'Startup Exporters', desc: 'New age entities entering global landscapes.' },
                            { title: 'Private Limited Companies', desc: 'Corporate entities looking for cross-border frameworks.' },
                            { title: 'LLPs & Partnerships', desc: 'Coordinated firms standardizing trade compliances.' }
                        ].map((item, index) => (
                            <div key={index} className="p-4 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex flex-col justify-center">
                                <span className="text-blue-600 block mb-1">{item.title}</span>
                                <span className="text-[11px] font-normal text-slate-500">{item.desc}</span>
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
                            Our RCMC Registration Process
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base">
                            A structured, 6-step workflow blueprint designed for optimal certificate delivery speed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                        <div className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">1</div>
                            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Business Audit</h5>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Identifying appropriate Export Promotion Council.</p>
                        </div>

                        <div className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">2</div>
                            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Doc Collection</h5>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Collection and structured verification of records.</p>
                        </div>

                        <div className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">3</div>
                            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">App Preparation</h5>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Flawless compiling of system registration drafts.</p>
                        </div>

                        <div className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">4</div>
                            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Membership Reg</h5>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Submission with concerned EPC or Trade Authority.</p>
                        </div>

                        <div className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">5</div>
                            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">RCMC Issuance</h5>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Official processing and grant of your core certificate.</p>
                        </div>

                        <div className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">6</div>
                            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Compliance Guide</h5>
                            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Support for export incentives and continuing rules.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Matrix & Extended Services Footer Box */}
            <section className="py-20 lg:py-24 bg-[#071c3d] text-white border-t border-slate-200 w-full clear-both">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Why Choose Fintax Adviser */}
                        <div className="w-full space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                                    Why Choose Fintax Adviser
                                </h2>
                                <div className="w-16 h-1 bg-blue-500 rounded"></div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                {[
                                    "12+ Years Industry Experience",
                                    "500+ Happy Clients Served",
                                    "Expert CA & Compliance Team",
                                    "Fast Processing & Documentation",
                                    "Affordable & Transparent Pricing",
                                    "Complete Export Compliance Support"
                                ].map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-sm hover:bg-slate-800 transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs shrink-0">
                                            ✓
                                        </div>
                                        <span className="text-sm font-medium text-slate-200 tracking-wide leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-slate-800 max-w-md">
                                Businesses looking for the Best RCMC Registration CA Firm in Delhi India rely completely on Fintax Adviser for professional, reliable, and timely export solutions.
                            </p>
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
                                    'GST Refund Handling Services',
                                    'Income Tax Return Filing',
                                    'Income Tax Refund Services',
                                    'Income Tax Notice Handling',
                                    'ROC Compliance Management',
                                    'Virtual CFO Services',
                                    'Accounting & Bookkeeping',
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