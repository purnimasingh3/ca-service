"use client";
import React, { useState, useEffect } from "react";
import { Check, Phone, ArrowRight, Star, HelpCircle, X } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Contact from "../contact"; 
import Header from "../Header";
import Footer from "../Footer";
import LeadPopup from "../LeadPopup";

const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 18, suffix: "+", label: "TDS Specialists" },
    { value: 1200, suffix: "+", label: "TDS Returns Filed" },
    { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

export default function TDSComplianceLandingPage() {
    // Pricing Show More / Less State
    const [showAllFeatures, setShowAllFeatures] = useState(false);

    // FAQ Accordion State
    const [openFaq, setOpenFaq] = useState(0);

    // Contact Form Popup State
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Live Notification Toast State
    const [toast, setToast] = useState({ visible: false, name: "", location: "", time: "" });
    const { ref: statsRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const notifications = [
        { name: "Animesh", location: "Mumbai", time: "just filed Q3 TDS Return" },
        { name: "Karthik", location: "Hyderabad", time: "just booked a consultation" },
        { name: "Neha", location: "Gurugram", time: "corrected past TDS defaults" },
        { name: "Rajesh", location: "Delhi", time: "5 minutes ago" },
        { name: "Rohit", location: "Faridabad", time: "generated Form 16As" },
        { name: "Sneha", location: "Delhi", time: "6 minutes ago" },
        { name: "Vikram", location: "Noida", time: "just booked a free consultation" },
        { name: "Priya", location: "Bangalore", time: "resolved Traces notice" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNotice = notifications[Math.floor(Math.random() * notifications.length)];
            setToast({ visible: true, ...randomNotice });

            const timeout = setTimeout(() => {
                setToast(prev => ({ ...prev, visible: false }));
            }, 5000);

            return () => clearTimeout(timeout);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
            <Header />
            {/* HERO BANNER SECTION WITH CONTACT FORM */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#111827] to-[#0F172A] text-white py-12 lg:py-20">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid gap-12 lg:grid-cols-12 items-center">

                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-300">
                                <div className="flex items-center gap-1">
                                    <span className="bg-white text-slate-900 p-0.5 rounded-full font-bold text-[9px] h-4 w-4 flex items-center justify-center"><FcGoogle /></span>
                                    <span className="font-bold text-white">4.9</span> out of 5
                                </div>
                                <span className="text-slate-500">|</span>
                                <div className="font-bold text-white">15+ Years TDS Experience</div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-2xl">
                                Zero-Error TDS Filing. Bulletproof Traces Compliance.
                            </h1>
                            <p className="text-sm text-slate-300 max-w-xl">
                                Seamless end-to-end quarterly returns, accurate challan reconciliations, and instant Form 16A generations backed by dedicated corporate managers.
                            </p>

                            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 max-w-md w-full">
                                <p className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Corporate TDS Advisory Plans</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl sm:text-3xl font-black text-white">starting @ ₹2,999/qtr</span>
                                    <span className="text-xs font-medium text-blue-300"> reconciliation included</span>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <p className="text-sm font-bold text-amber-400">Error-free corporate tax withholding architecture:</p>
                                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-200 font-medium">
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Quarterly Return Filing (24Q, 26Q, 27Q)</li>
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Automated Traces Conformance</li>
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Vendor PAN Validation Pipelines</li>
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Concessional Certificate Advisory</li>
                                </ul>
                            </div>

                            {/* UNIQUE REVIEW 1 */}
                            <div className="pt-4 max-w-lg">
                                <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase italic">What our clients mention;</p>
                                <div className="mt-2 border-l-2 border-blue-500 bg-white/5 rounded-r-xl p-4">
                                    <p className="text-xs text-slate-300 italic leading-relaxed">
                                        "The corporate TDS compliance team sorted out our past correction statements within a single cycle. Vendor disputes dropped to zero, and their automated alerts never let us miss a challan deadline."
                                    </p>
                                    <p className="text-[11px] font-bold text-slate-400 mt-2 text-right">— Radhakrishnan M., CFO</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-5 relative flex flex-col items-center">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>

            {/* COUNTER GRID */}
            <section ref={statsRef} className="bg-white border-y border-slate-200 py-12 mt-12 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className={`pt-6 sm:pt-0 ${idx === 0 ? "" : "pt-6"}`}>
                                <p className="text-3xl sm:text-4xl font-extrabold text-blue-500 tracking-tight">
                                    {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} decimals={stat.decimals || 0} />}
                                </p>
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">PRICING TIERS</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Structured TDS Compliance Plans</h2>
                    <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">Select a structured withholding tax tier designed for your corporate scale.</p>

                    <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto text-left">
                        {/* Basic Plan */}
                        <div className="bg-slate-50/50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-md">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Basic Plan</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Perfect for Small Businesses & Startups</p>
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900">₹2,999</span>
                                    <span className="text-xs text-slate-400 font-medium">/ quarter</span>
                                </div>
                                <button onClick={() => setIsContactOpen(true)} className="mt-6 w-full py-2.5 rounded-xl border border-blue-500 text-blue-500 bg-white font-bold text-sm hover:bg-blue-50/50 transition-colors text-center">
                                    Get Started
                                </button>
                                <div className="mt-8 border-t border-slate-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Features:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> TDS calculation & deduction guidance</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Quarterly TDS return filing</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> TDS challan preparation</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Form 16A generation</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Compliance reminders</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Email support</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">
                                {showAllFeatures ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* Business Plan */}
                        <div className="bg-blue-50/40 border-2 border-blue-400 rounded-3xl p-8 flex flex-col justify-between shadow-xs relative">
                            <div className="absolute top-4 right-4 bg-white border border-blue-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Most Popular</div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Business Plan</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Ideal for Growing Businesses</p>
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900">₹5,999</span>
                                    <span className="text-xs text-slate-400 font-medium">/ quarter</span>
                                </div>
                                <button onClick={() => setIsContactOpen(true)} className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-sm hover:opacity-95 transition-all text-center shadow-xs">
                                    Choose Business
                                </button>
                                <div className="mt-8 border-t border-blue-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Everything in Basic Plan, plus:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> TDS reconciliation</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Vendor & employee TDS management</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Correction/revised TDS return filing</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Quarterly compliance reports</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Basic assistance for TDS notices</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Priority email & phone support</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">
                                {showAllFeatures ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-slate-50/50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-md">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Premium Plan</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Complete TDS Compliance & Advisory</p>
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900">₹9,999</span>
                                    <span className="text-xs text-slate-400 font-medium">/ quarter</span>
                                </div>
                                <button onClick={() => setIsContactOpen(true)} className="mt-6 w-full py-2.5 rounded-xl border border-blue-500 text-blue-500 bg-white font-bold text-sm hover:bg-blue-50/50 transition-colors text-center">
                                    Contact Us
                                </button>
                                <div className="mt-8 border-t border-slate-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Everything in Business Plan, plus:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Unlimited TDS transactions</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Multi-branch TDS compliance</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Advanced reconciliation & compliance review</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Representation support for TDS notices</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Dedicated compliance manager</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Quarterly compliance review meetings</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Year-round priority support</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">
                                {showAllFeatures ? "Show less" : "Show more"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON MATRIX */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="mx-auto max-w-4xl px-4">
                    <p className="text-[11px] font-extrabold text-blue-500 text-center uppercase tracking-widest mb-6">COMPREHENSIVE MATRICES</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                                    <th className="p-4">Filing Capabilities</th>
                                    <th className="p-4">Basic</th>
                                    <th className="p-4">Business</th>
                                    <th className="p-4">Premium</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                                <tr><td className="p-4 font-bold text-slate-900">Form 24Q / 26Q Statement</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Revised Return Correction</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Multi-Branch Transaction Audit</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <section className="py-20 bg-slate-50/50 border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">VERIFIED REVIEWS</span>
                    <h2 className="text-3xl font-extrabold text-slate-900">What Our Corporate Clients Say</h2>
                    <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto text-left">
                        {[
                            { text: "reconciling multi-vendor transaction pipelines was always painful until their panel automated our logs. 100% compliance score on Traces now.", author: "Arjun Deshmukh", initial: "AD" },
                            { text: "Extremely clean filing infrastructure. They settled a massive demand notification from 2021 effortlessly without any physical hearings.", author: "Kritika Iyer", initial: "KI" },
                            { text: "Fast turnaround metrics. Their data checks flag PAN errors before the upload pipeline runs, saving us thousands in delay interest defaults.", author: "Sanjay Singhania", initial: "SS" }
                        ].map((t, idx) => (
                            <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 mb-4 text-amber-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                                    </div>
                                    <p className="text-xs text-slate-600 italic leading-relaxed">"{t.text}"</p>
                                </div>
                                <div className="mt-6 flex items-center gap-3 border-t border-slate-50 pt-4">
                                    <div className="h-8 w-8 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">{t.initial}</div>
                                    <div>
                                        <h5 className="text-xs font-bold text-slate-900">{t.author}</h5>
                                        <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">✓ Verified Corporate Google Review</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRE-FAQ CONTACT BLOCK */}
            <section className="pt-16 pb-4 bg-white">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="border border-slate-200/70 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold text-slate-900">Have questions before committing?</h3>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                Our withholding tax experts answer your transaction-tier, panel logic, and structural documentation queries instantly.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <Link href="tel:+919990924477" passHref>
                                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50">
                                        <Phone className="h-3.5 w-3.5 text-slate-900 fill-slate-900" /> Call now
                                    </button>
                                </Link>
                                <Link href="https://wa.me/919990924477" passHref>
                                    <button className="inline-flex items-center gap-2 text-emerald-500 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-100">
                                        <FaWhatsapp className="h-3.5 w-3.5 text-emerald-500" /> WhatsApp us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-col gap-4 text-center md:text-left shrink-0">
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 min-w-[140px]">
                                <p className="text-xl font-black text-blue-500">1200+</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Returns Handled</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 min-w-[140px]">
                                <p className="text-xl font-black text-blue-500">4.5 days</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Avg Reconciliation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACCORDION FAQ SECTION */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-1">FAQ</span>
                        <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions (FAQs)</h2>
                        <p className="text-xs text-slate-500 mt-2">Can't find an answer? WhatsApp us — real corporate response under 15 minutes.</p>
                    </div>

                    <div className="space-y-0 border-t border-slate-200">
                        {[
                            { q: "What is Corporate TDS Compliance?", a: "It refers to standard procedural cycles requiring corporate bodies to withhold specific percentages on vendor/salary layouts and timely report them into central Traces dashboards." },
                            { q: "Who needs structured TDS management?", a: "Every SME, startup, LLP, or proprietary firm executing payments under defined expense categories (contractors, professionals, salaries) past threshold ranges." },
                            { q: "Why is error-free reconciliation important?", a: "Mismatched challan inputs create heavy defaults, delayed certificate errors, and notice assessments directly hindering corporate vendor relations." },
                            { q: "What logs are needed to file quarterly returns?", a: "The layout requires regular vendor transaction histories, accurate pan codes, deduction categories, and verified challan proofs." },
                            { q: "Can you assist with complex defaults and Traces notifications?", a: "Yes, our premium corporate plans include representation support, past defaults assessment corrections, and direct resolution workflows." }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-slate-200">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between py-5 text-left text-sm font-bold text-slate-800 hover:text-slate-900 transition-colors"
                                >
                                    <span className="flex items-center gap-2">
                                        <HelpCircle className="h-4 w-4 text-slate-400 shrink-0" />
                                        {faq.q}
                                    </span>
                                    {openFaq === index ? (
                                        <span className="text-blue-500 font-bold text-base">×</span>
                                    ) : (
                                        <span className="text-blue-500 font-bold text-base">+</span>
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="pb-5 text-sm text-slate-500 leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM ACTION CTA BAR */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100/60 py-16 border-t border-blue-100">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-5">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Streamline Corporate Financial Governance with Virtual CFO Support</h2>
                    <p className="text-xs font-medium text-slate-600 max-w-lg mx-auto">
                        Book your FREE structural consultation session today and acquire enterprise financial validation streams seamlessly.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-3 text-xs font-bold text-white hover:opacity-95 shadow-sm"
                        >
                            Book Free Consultation <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <Link href="https://wa.me/+919990924477" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-2xs">
                            <FaWhatsapp className="h-4 w-4 text-emerald-500" /> WhatsApp an expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* FLOATING CHAT SHORTCUT */}
            <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
                <Link
                    href="https://wa.me/+919990924477"
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 bg-emerald-700 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                >
                    <FaWhatsapp className="h-6 w-6 text-white " />
                </Link>
                <Link
                    href="tel:+919990924477"
                    className="w-12 h-12 rounded-full bg-blue-300 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
                    title="Call Senior Advisor Desk"
                >
                    <Phone className="w-5 h-5 text-blue-500" />
                </Link>
            </div>

            {/* LIVE NOTIFICATION TOAST */}
            {toast.visible && (
                <div className="fixed bottom-5 left-5 z-50 bg-white border border-slate-200 shadow-xl rounded-xl p-4 flex items-center gap-3 animate-slide-up max-w-sm transition-all duration-300">
                    <div className="h-8 w-8 rounded-full bg-blue-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                        {toast.name.charAt(0)}
                    </div>
                    <div className="pr-4">
                        <p className="text-xs text-slate-700 font-medium">
                            <span className="font-bold text-slate-900">{toast.name}</span> from {toast.location} {toast.time.includes("filed") ? "" : "just"}
                        </p>
                        <p className="text-[11px] text-slate-400 font-semibold mt-0.5">{toast.time}</p>
                    </div>
                    <button
                        onClick={() => setToast(prev => ({ ...prev, visible: false }))}
                        className="text-slate-300 hover:text-slate-500 absolute top-2 right-2"
                    >
                        <X className="h-3 w-3" />
                    </button>
                </div>
            )}

            {/* CONTACT FORM POPUP MODAL */}
            {isContactOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
                    <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-auto overflow-hidden">
                        <button
                            onClick={() => setIsContactOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors z-50"
                        >
                            <X className="h-4 w-4" />
                        </button>
                        <div className="text-slate-900">
                            <Contact />
                        </div>
                    </div>
                </div>
            )}
            <Footer />
            <LeadPopup />
        </div>
    );
}