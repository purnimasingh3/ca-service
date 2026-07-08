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
  { value: 25, suffix: "+", label: "Financial Experts" },
  { value: 200, suffix: "+", label: "Successful Clients" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

export default function FinancialModellingLandingPage() {
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
        { name: "Animesh", location: "Mumbai", time: "2 minutes ago" },
        { name: "Karthik", location: "Hyderabad", time: "just booked a consultation" },
        { name: "Neha", location: "Gurugram", time: "5 minutes ago" },
        { name: "Rajesh", location: "Delhi", time: "1 minute ago" },
        { name: "Rohit", location: "Faridabad", time: "10 minute ago" },
        { name: "Sneha", location: "Delhi", time: "6 minute ago" },
        { name: "Vikram", location: "Noida", time: "1 minute ago" },
        { name: "Priya", location: "Bangalore", time: "just booked a consultation" },
        { name: "Amit", location: "Udaipur", time: "just booked a free consultation" },
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
            {/* HERO BANNER SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#111827] to-[#0F172A] text-white py-12 lg:py-20">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid gap-12 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-300">
                                <div className="flex items-center gap-1">
                                    <span className="bg-white text-slate-900 p-0.5 rounded-full font-bold text-[9px] h-4 w-4 flex items-center justify-center"><FcGoogle /></span>
                                    <span className="font-bold text-white">4.8</span> out of 5
                                </div>
                                <span className="text-slate-500">|</span>
                                <div className="font-bold text-white">15+<span className="text-slate-300"> Years Experience</span></div>
                                <span className="text-slate-500">|</span>
                                <div className="font-bold text-orange-500">500+ <span className="text-white">Growth Clients</span></div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-2xl">
                                Investor-Ready Financial Modelling for Startups.
                            </h1>
                            <p className="text-sm text-slate-300 max-w-xl">
                                Build pitch-perfect projections, robust unit economics, and custom valuation frameworks designed to pass investor due diligence cleanly.
                            </p>
                            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 max-w-md w-full">
                                <p className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Startup Projections & Strategy</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl sm:text-3xl font-black text-white">starting @ ₹14,999</span>
                                    <span className="text-xs font-medium text-orange-300">tailored fundraising plans</span>
                                </div>
                            </div>
                            <div className="space-y-3 pt-2">
                                <p className="text-sm font-bold text-amber-400">Scale seamlessly with professional financial architecture:</p>
                                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-200 font-medium">
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Integrated Statement Forecasting</li>
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Unit Economics & Break-Even</li>
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Scenario & Sensitivity Panels</li>
                                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Cap Table & Dilution Strategy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative flex flex-col items-center">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section ref={statsRef} className="bg-white border-y border-slate-200 py-12 mt-12 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className={`pt-6 sm:pt-0 ${idx === 0 ? "" : "pt-6"}`}>
                                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                                    {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} decimals={stat.decimals || 0} />}
                                </p>
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING PLANS SECTION */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">PRICING PLANS</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Startup Financial Modelling Plans</h2>
                    <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">Select a data-driven model structured perfectly for internal roadmaps or VC pitches.</p>
                    <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto text-left">
                        {/* Plan 1 */}
                        <div className="bg-slate-50/50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-md">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Starter Financial Model</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Perfect for Pre-Seed & Early-Stage Startups</p>
                                <div className="mt-5 flex items-baseline gap-2"><span className="text-2xl font-black text-slate-900">Starting @ ₹14,999</span></div>
                                <p className="text-[11px] font-bold text-slate-400 mt-0.5">Ideal for founders who need a clear internal roadmap.</p>
                                <button onClick={() => setIsContactOpen(true)} className="mt-6 w-full py-2.5 rounded-xl border border-blue-500 text-blue-600 bg-white font-bold text-sm hover:bg-blue-50/50 transition-colors text-center">Choose Starter</button>
                                <div className="mt-8 border-t border-slate-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Includes:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> 3-year financial model</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Revenue & expense projections</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Cash flow forecast</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Profit & Loss projections</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Basic assumptions sheet</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> One revision iteration</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Excel & PDF delivery format</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">{showAllFeatures ? "Show less" : "Show more"}</button>
                        </div>
                        {/* Plan 2 */}
                        <div className="bg-blue-50/40 border-2 border-blue-400 rounded-3xl p-8 flex flex-col justify-between shadow-xs relative">
                            <div className="absolute top-4 right-4 bg-white border border-blue-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Most Popular</div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Investor Ready Model</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Perfect for Seed & Growth-Stage Startups</p>
                                <div className="mt-5 flex items-baseline gap-2"><span className="text-2xl font-black text-slate-900">Starting @ ₹34,999</span></div>
                                <p className="text-[11px] font-bold text-slate-400 mt-0.5">Ideal for startups preparing to pitch directly to VCs/Angels.</p>
                                <button onClick={() => setIsContactOpen(true)} className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm hover:opacity-95 transition-all text-center shadow-xs">Choose Investor Ready</button>
                                <div className="mt-8 border-t border-blue-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Everything in Starter, plus:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> 5-year integrated financial model</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Balance Sheet, P&L & Cash Flow</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Scenario & sensitivity analysis</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Unit economics & break-even</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> KPI dashboard layout</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Two complete revision rounds</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Investor presentation support</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">{showAllFeatures ? "Show less" : "Show more"}</button>
                        </div>
                        {/* Plan 3 */}
                        <div className="bg-slate-50/50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-md">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Fundraising & Strategic</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">For Series A+ & High-Growth Startups</p>
                                <div className="mt-5 flex items-baseline gap-2"><span className="text-2xl font-black text-slate-900">Custom Pricing</span></div>
                                <p className="text-[11px] font-bold text-slate-400 mt-0.5">Ideal for institutional funding rounds & cap table strategy.</p>
                                <button onClick={() => setIsContactOpen(true)} className="mt-6 w-full py-2.5 rounded-xl border border-blue-500 text-blue-600 bg-white font-bold text-sm hover:bg-blue-50/50 transition-colors text-center">Contact Us</button>
                                <div className="mt-8 border-t border-slate-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Everything in Investor Ready, plus:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Fully customized financial model</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> DCF & Comparable valuation matrix</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Cap table & dilution analysis</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Comprehensive fundraising strategy</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Multiple funding scenario panels</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Board-ready reports & ESOP advisory</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> One-on-one founder sessions</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button onClick={() => setShowAllFeatures(!showAllFeatures)} className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">{showAllFeatures ? "Show less" : "Show more"}</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLAN COMPARISON MATRIX */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="mx-auto max-w-4xl px-4">
                    <p className="text-[11px] font-extrabold text-blue-500 text-center uppercase tracking-widest mb-6">PLAN COMPARISON MATRIX</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                                    <th className="p-4">Features</th>
                                    <th className="p-4">Starter</th>
                                    <th className="p-4">Investor Ready</th>
                                    <th className="p-4">Fundraising & Strategic</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                                <tr><td className="p-4 font-bold text-slate-900">Projection Period</td><td className="p-4">3 Years</td><td className="p-4">5 Years</td><td className="p-4">Custom</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Revenue & Expense Forecast</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Cash Flow Forecast</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Integrated Financial Statements</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Scenario & Sensitivity Panels</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Unit Economics & Break-even</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">KPI Dashboard</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-emerald-600 font-bold">✓</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Valuation Models & Cap Tables</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-slate-400">—</td><td className="p-4 text-emerald-600 font-bold">✓</td></tr>
                                <tr><td className="p-4 font-bold text-slate-900">Fundraising Support Desk</td><td className="p-4 text-slate-400">—</td><td className="p-4">Basic</td><td className="p-4">Comprehensive</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* TIMELINE PIPELINE PROCESS */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">HOW IT WORKS</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Streamline Projections In 5 Steps</h2>
                    <div className="mt-16 relative">
                        <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-blue-200 -z-0 hidden lg:block" />
                        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5 relative z-10">
                            {[
                                { step: "01", title: "Discovery Call", desc: "Reviewing metrics, target assumptions, and business architecture." },
                                { step: "02", title: "Data Collection", desc: "Gathering historical statements and dynamic operational targets." },
                                { step: "03", title: "Model Structuring", desc: "Formulating drivers across custom P&L and cash positions." },
                                { step: "04", title: "Sensitivity Polish", desc: "Stress-testing projections across various market assumptions." },
                                { step: "05", title: "Final Handover", desc: "Delivering dynamic investor-ready Excel sheets and review layouts." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center px-2">
                                    <div className="h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-sm flex items-center justify-center border-4 border-white shadow-sm mb-4">{item.step}</div>
                                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ACCORDION FAQS */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-1">FAQ</span>
                        <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-0 border-t border-slate-200">
                        {[
                            { q: "Are the financial models completely editable?", a: "Yes, models are delivered in fully functional Excel file layouts with dynamic formulas intact." },
                            { q: "Do you provide custom scenario mapping panels?", a: "Yes, our models support base, optimistic, and conservative testing panels seamlessly." },
                            { q: "Can these projections be customized for international markets?", a: "Absolutely. We adapt parameters for localized currencies, tax guidelines, and international SaaS metrics." }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-slate-200">
                                <button onClick={() => toggleFaq(index)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold text-slate-800 hover:text-slate-900">
                                    <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-slate-400 shrink-0" />{faq.q}</span>
                                    {openFaq === index ? <span className="text-blue-500 font-bold text-base">×</span> : <span className="text-blue-500 font-bold text-base">+</span>}
                                </button>
                                {openFaq === index && <div className="pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>}
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
                                Our experts answer documentation, timeline, and pricing questions in plain English. No sales pitch — just clarity.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <Link href="tel:+919990924477" passHref>
                                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50">
                                        <Phone className="h-3.5 w-3.5 text-blue-900 fill-blue-900" /> Call now
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
                                <p className="text-xl font-black text-blue-500">500+</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Users Trust Us</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 min-w-[140px]">
                                <p className="text-xl font-black text-blue-500">6.2 days</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Avg. turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* BOTTOM ACTION CTA BAR */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-100/60 py-16 border-t border-blue-100">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-5">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Build a Stronger Financial Future with Virtual CFO Services</h2>
                    <p className="text-xs font-medium text-slate-600 max-w-lg mx-auto">
                        Book your FREE consultation today and get expert financial leadership without the cost of hiring a full-time CFO.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-xs font-bold text-white hover:opacity-95 shadow-sm"
                        >
                            Book Free Consultation <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <Link href="https://wa.me/+919990924477" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-2xs">
                            <FaWhatsapp className="h-4 w-4 text-emerald-500" /> WhatsApp an expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* FLOATING GREEN CHAT SHORTCUT (Bottom Right Corner) */}
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
                    <Phone className="w-5 h-5 text-blue-600" />
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
                            <span className="font-bold text-slate-900">{toast.name}</span> from {toast.location} {toast.time.includes("started") ? "" : "just"}
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
                    {/* Changed bg-slate-900 to bg-white, and p-6 to p-2 or removed extra layout conflicts */}
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