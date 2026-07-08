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
// import Stats from "../Stats";
// import BottomCTA from "../BottomCTA";
// import FloatingButtons from "../FloatingButtons";
// import PreFaqContact from "../PreFaqContact";
// import LiveNotification from "../LiveNotification";
// import ContactModal from "../ContactModal";
const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Financial Experts" },
  { value: 200, suffix: "+", label: "Successful Clients" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];
export default function VirtualCFOLandingPage() {
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
            {/* HERO BANNER SECTION WITH CONTACT FORM */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#111827] to-[#0F172A] text-white py-12 lg:py-20">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid gap-12 lg:grid-cols-12 items-center">

                        {/* LEFT COLUMN: HERO MARKETING CONTENT */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Top Ratings Badges */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-300">
                                <div className="flex items-center gap-1">
                                    <span className="bg-white text-slate-900 p-0.5 rounded-full font-bold text-[9px] h-4 w-4 flex items-center justify-center"><FcGoogle /></span>
                                    <span className="font-bold text-white">4.8</span> out of 5
                                </div>
                                <span className="text-slate-500">|</span>
                                <div className="font-bold text-white">15+<span className="text-slate-300"> Years Experience</span></div>
                                <span className="text-slate-500">|</span>
                                <div className="font-bold text-orange-500">200+ <span className="text-white">Growth Clients</span></div>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-2xl">
                                Strategic Financial Leadership. Smarter Decisions. Stronger Growth.
                            </h1>
                            <p className="text-sm text-slate-300 max-w-xl">
                                Get expert CFO guidance, cash flow optimization, and data-driven insights to scale your business without the cost of a full-time executive.
                            </p>

                            {/* Pricing Box Highlight */}
                            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 max-w-md w-full">
                                <p className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Virtual CFO Services</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl sm:text-3xl font-black text-white">starting @ ₹15,000/mo</span>
                                    <span className="text-xs font-medium text-orange-300">customizable plans</span>
                                </div>
                            </div>

                            {/* Bullet Points */}
                            <div className="space-y-3 pt-2">
                                <p className="text-sm font-bold text-amber-400">Transform business growth with professional financial strategies:</p>
                                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-slate-200 font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Financial Planning & Analysis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Cash Flow Management & Liquidity
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Budgeting & Advanced Forecasting
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 bg-amber-400 rounded-full shrink-0"></span> Fundraising & Investor Support
                                    </li>
                                </ul>
                            </div>

                            {/* Founder Review Box */}
                            <div className="pt-4 max-w-lg">
                                <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase italic">What our clients mention;</p>
                                <div className="mt-2 border-l-2 border-orange-500 bg-white/5 rounded-r-xl p-4">
                                    <p className="text-xs text-slate-300 italic leading-relaxed">
                                        "The Virtual CFO team completely transformed our financial planning. Our cash flow improved, investor reporting became easier, and we finally had clear business insights."
                                    </p>
                                    <p className="text-[11px] font-bold text-slate-400 mt-2 text-right">—Founder, Delhi</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: CONTACT FORM */}
                        <div className="lg:col-span-5 relative flex flex-col items-center">
                            <Contact />
                        </div>

                    </div>
                </div>
            </section>

            <section
                ref={statsRef}
                className="bg-white border-y border-slate-200 py-12 mt-12 relative"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.15,
                                }}
                                className={`pt-6 sm:pt-0 ${idx === 0 ? "" : "pt-6"}`}
                            >
                                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                                    {inView && (
                                        <CountUp
                                            end={stat.value}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                            decimals={stat.decimals || 0}
                                        />
                                    )}
                                </p>

                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-1">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-16 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">PRICING</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Flexible Virtual CFO Packages <br />Tailored for Your Scale
                    </h2>
                    <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
                        Get executive-level financial roadmap, control, and intelligence at a fraction of the cost of hiring a full-time CFO.
                    </p>

                    {/* Pricing Grid */}
                    <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto text-left">

                        {/* Starter Plan */}
                        <div className="bg-slate-50/50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-md">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Starter</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Perfect for Startups & Small Businesses</p>
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900">₹15,000 - ₹30,000</span>
                                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                                </div>
                                <p className="text-[11px] font-bold text-slate-400 mt-0.5">+ Govt. fees</p>

                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="mt-6 w-full py-2.5 rounded-xl border border-blue-500 text-blue-600 bg-white font-bold text-sm hover:bg-blue-50/50 transition-colors text-center"
                                >
                                    Choose Starter
                                </button>

                                <div className="mt-8 border-t border-slate-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Includes:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Monthly financial reporting</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Cash flow monitoring</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Budget preparation</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Basic financial analysis</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Email support</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Monthly strategy call (1 hour)</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAllFeatures(!showAllFeatures)}
                                className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1"
                            >
                                {showAllFeatures ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* Growth Plan */}
                        <div className="bg-blue-50/40 border-2 border-blue-400 rounded-3xl p-8 flex flex-col justify-between shadow-xs relative">
                            <div className="absolute top-4 right-4 bg-white border border-blue-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Most Popular
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Growth</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">Perfect for Growing Businesses</p>
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900">₹40,000 - ₹75,000</span>
                                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                                </div>
                                <p className="text-[11px] font-bold text-slate-400 mt-0.5">+ Govt. fees</p>
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="mt-6 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm hover:opacity-95 transition-all text-center shadow-xs"
                                >
                                    Choose Growth
                                </button>

                                <div className="mt-8 border-t border-blue-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Everything in Starter, plus:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Weekly cash flow forecasting</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> KPI dashboard & tracking</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Budget vs. actual analysis</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Profitability analysis</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Investor-ready reports</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Two strategy meetings / mo</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAllFeatures(!showAllFeatures)}
                                className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1"
                            >
                                {showAllFeatures ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-slate-50/50 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between transition-all hover:shadow-md">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900">Enterprise</h3>
                                <p className="text-xs font-medium text-slate-400 mt-1">For Established & Fundraising Firms</p>
                                <div className="mt-5 flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900">Custom Pricing</span>
                                </div>
                                <p className="text-[11px] font-bold text-slate-400 mt-0.5">+ Govt. fees</p>
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="mt-6 w-full py-2.5 rounded-xl border border-blue-500 text-blue-600 bg-white font-bold text-sm hover:bg-blue-50/50 transition-colors text-center"
                                >
                                    Contact Us
                                </button>

                                <div className="mt-8 border-t border-slate-200/60 pt-6">
                                    <p className="text-xs font-bold text-slate-900 mb-4">Everything in Growth, plus:</p>
                                    <ul className="space-y-3 text-xs font-medium text-slate-600">
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Dedicated Virtual CFO</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Fundraising & Investor support</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Board meeting presentations</li>
                                        <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Risk management & controls</li>
                                        {showAllFeatures && (
                                            <>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Banking & lender support</li>
                                                <li className="flex items-center gap-2.5"><Check className="h-4 w-4 text-emerald-600 shrink-0" /> Unlimited consultations</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAllFeatures(!showAllFeatures)}
                                className="mt-6 text-xs font-bold text-blue-500 hover:underline flex items-center gap-1"
                            >
                                {showAllFeatures ? "Show less" : "Show more"}
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES MATRIX / COMPARISON TABLE */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="mx-auto max-w-4xl px-4">
                    <p className="text-[11px] font-extrabold text-blue-500 text-center uppercase tracking-widest mb-6">COMPREHENSIVE PLAN COMPARISON</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                                    <th className="p-4">Features</th>
                                    <th className="p-4">Starter</th>
                                    <th className="p-4">Growth</th>
                                    <th className="p-4">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Monthly Financial Reports</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Cash Flow Management</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">KPI Dashboard</td>
                                    <td className="p-4 text-slate-400">—</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Financial Forecasting</td>
                                    <td className="p-4">Basic</td>
                                    <td className="p-4">Advanced</td>
                                    <td className="p-4">Comprehensive</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Fundraising Support</td>
                                    <td className="p-4 text-slate-400">—</td>
                                    <td className="p-4 text-slate-400">—</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Dedicated Virtual CFO</td>
                                    <td className="p-4 text-slate-400">—</td>
                                    <td className="p-4 text-slate-400">—</td>
                                    <td className="p-4 text-emerald-600 font-bold">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-slate-900">Strategy Sessions</td>
                                    <td className="p-4">Monthly</td>
                                    <td className="p-4">Twice Monthly</td>
                                    <td className="p-4">Unlimited</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* HORIZONTAL PROCESS PIPELINE */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">HOW IT WORKS</span>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Onboard Your Virtual CFO In 5 Easy Steps</h2>
                    <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
                        Scale faster with clean frameworks, reliable systems, and expert financial analysis.
                    </p>

                    {/* Pipeline Layout */}
                    <div className="mt-16 relative">
                        <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-blue-200 -z-0 hidden lg:block" />

                        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5 relative z-10">
                            {[
                                { step: "01", title: "Discovery Call", desc: "We map out your current business systems, scale blockers, and exact financial bottlenecks." },
                                { step: "02", title: "Diagnostic Audit", desc: "Our core analysts conduct a quick review of historical accounts, margins, and cost structures." },
                                { step: "03", title: "Plan Selection", desc: "Choose between Starter, Growth, or Enterprise frameworks depending on your current target operations." },
                                { step: "04", title: "Dashboard Sync", desc: "We integrate custom live trackers, KPI dashboards, and data pipelines seamlessly." },
                                { step: "05", title: "Strategic Execution", desc: "Unlock active forecasting model updates, routine governance reviews, and investor-readiness modules." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center px-2">
                                    <div className="h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-sm flex items-center justify-center border-4 border-white shadow-sm mb-4">
                                        {item.step}
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="py-20 bg-slate-50/50 border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-2">TRUST DETAILS</span>
                    <h2 className="text-3xl font-extrabold text-slate-900">Trusted By Fast-Growing Startups & SMEs</h2>

                    <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto text-left">
                        {[
                            { text: "They provide seamless service and support regarding all financial queries. Our GST filings and company compliance were fully taken care with least follow ups...", author: "Seshasayana Reddy", initial: "SR" },
                            { text: "Everything is good with kulwinder he is such a nice person and his way of communication is to good and he soves the quiers time to time", author: "Ramandeep Singh", initial: "RS" },
                            { text: "The experience is very good and loved the team how they work smoothly that's is commendable", author: "Sawal Singh", initial: "SS" }
                        ].map((t, idx) => (
                            <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-2xs flex flex-col justify-between">
                                <div>
                                    <div className="flex gap-1 mb-4 text-amber-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                                    </div>
                                    <p className="text-xs text-slate-600 italic leading-relaxed">"{t.text}"</p>
                                </div>
                                <div className="mt-6 flex items-center gap-3 border-t border-slate-50 pt-4">
                                    <div className="h-8 w-8 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-bold text-slate-900">{t.author}</h5>
                                        <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">✓ Verified Google Review</p>
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

            {/* ACCORDION FAQ SECTION */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-blue-500 tracking-widest uppercase block mb-1">FAQ</span>
                        <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions (FAQs)</h2>
                        <p className="text-xs text-slate-500 mt-2">Can't find an answer? WhatsApp us — real response in under 15 minutes.</p>
                    </div>

                    <div className="space-y-0 border-t border-slate-200">
                        {[
                            { q: "What is a Virtual CFO?", a: "A Virtual CFO is a part-time or contract Chief Financial Officer who provides financial expertise and guidance to businesses without the need for a full-time in-house CFO." },
                            { q: "Who needs Virtual CFO Services?", a: "Businesses that need financial expertise and guidance without the commitment of a full-time CFO." },
                            { q: "Do you help with Fundraising?", a: "Yes, we provide comprehensive financial guidance and support for fundraising activities." },
                            { q: "Can you manage Cash Flow?", a: "Yes, our Virtual CFO services include comprehensive cash flow management and optimization strategies." },
                            { q: "Is the service available online?", a: "Yes, our Virtual CFO services are available online, providing convenient and accessible financial guidance." },
                            { q: "Why choose Fintax Adviser?", a: "Fintax Adviser offers streamlined filing systems, dedicated corporate account managers, transparent structural pricing tiers, and automated deadline tracking alerts." }
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
            <LeadPopup/>
        </div>
    );
}