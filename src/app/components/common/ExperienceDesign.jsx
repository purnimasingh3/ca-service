"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    Briefcase,
    Users,
    Building2,
    FileText,
    ThumbsUp,
    ShieldCheck,
    CheckCircle,
    Headphones,
    Lock
} from "lucide-react";

const centralStat = { value: 12, suffix: "+", label: "Years of Experience", icon: Briefcase };

const orbitalStats = [
    {
        value: 80,
        suffix: "+",
        label: "Expert Professionals",
        icon: Users,
        bgLight: "bg-emerald-700",
        textColor: "text-white",
    },
    {
        value: 5000,
        suffix: "+",
        label: "Businesses Served",
        icon: Building2,
        bgLight: "bg-blue-600",
        textColor: "text-white",
    },
    {
        value: 25000,
        suffix: "+",
        label: "Tax Returns Filed",
        icon: FileText,
        bgLight: "bg-cyan-500",
        textColor: "text-white",
    },
    {
        value: 99.8,
        decimals: 1,
        suffix: "%",
        label: "Client Satisfaction",
        icon: ThumbsUp,
        bgLight: "bg-violet-600",
        textColor: "text-white",
    },
    {
        value: "4",
        suffix: "+",
        label: "Years Average Client Partnerships",
        icon: Users,
        bgLight: "bg-amber-600",
        textColor: "text-white",
    },
];
const positions = [
    // Top
    {
        top: "-10%",
        left: "35%",
        transform: "translate(-50%, 0)",
    },

    // Right
    {
        top: "25%",
        left: "75%",
        transform: "translate(-50%, -50%)",
    },

    // Bottom Right
    {
        top: "67%",
        left: "70%",
        transform: "translate(-50%, -50%)",
    },

    // Bottom Left
    {
        top: "68%",
        left: "10%",
        transform: "translate(-50%, -50%)",
    },

    // Left
    {
        top: "25%",
        left: "-3%",
        transform: "translate(-50%, -50%)",
    },
];

const trustBadges = [
    {
        icon: ShieldCheck,
        title: "Trusted by",
        desc: "Thousands of Businesses",
        bg: "bg-blue-700",
        text: "text-white",
    },
    {
        icon: CheckCircle,
        title: "100%",
        desc: "Compliance Assured",
        bg: "bg-emerald-600",
        text: "text-white",
    },
    {
        icon: Headphones,
        title: "Expert Support",
        desc: "Always Available",
        bg: "bg-violet-600",
        text: "text-white",
    },
    {
        icon: Lock,
        title: "Secure &",
        desc: "Confidential Process",
        bg: "bg-sky-600",
        text: "text-white",
    },
];

export default function SuccessJourney() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/20  relative min-h-screen flex flex-col justify-between">

            {/* Background Ambience */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex-grow flex flex-col justify-center">

                {/* Main Section Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* ================= LEFT HEADER CONTENT ================= */}
                    <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full inline-block"
                        >
                            Our Journey
                        </motion.span>

                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                            12+ Years of <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                                Excellence
                            </span>
                        </h2>

                        <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Empowering startups, SMEs, and enterprises with trusted Tax, Compliance, Legal, and Financial advisory services across India.
                        </p>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto lg:mx-0 mt-2" />
                    </div>

                    {/* ================= CIRCULAR ORBIT (Consistent across mobile and desktop) ================= */}
                    <div className="lg:col-span-7 flex justify-center items-center relative h-[500px] sm:h-[600px] lg:h-[700px] w-full">

                        <div className="relative w-[640px] h-[640px] shrink-0 scale-[0.58] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 transition-transform duration-300 origin-center">

                            {/* Outer Dashed Orbit Path */}
                            <div className="absolute inset-8 rounded-full border-2 border-dashed border-slate-400 pointer-events-none" />

                            {/* Inner Soft Ring */}
                            <div className="absolute inset-24 rounded-full border border-slate-300 bg-gradient-to-br from-white/40 to-slate-50/20 backdrop-blur-[2px] pointer-events-none" />

                            {/* 1. CENTRAL STAT */}
                            <div className="absolute inset-0 flex items-center justify-center z-30">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", duration: 0.8 }}
                                    className="w-56 h-56 rounded-full bg-white shadow-[0_20px_50px_rgba(37,99,235,0.15)] border border-slate-100 flex flex-col items-center justify-center p-6 text-center"
                                >
                                    <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl mb-1.5">
                                        <centralStat.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-slate-950 flex items-baseline justify-center">
                                        <CountUp end={centralStat.value} duration={2} enableScrollSpy />
                                        <span className="text-blue-600 ml-0.5">{centralStat.suffix}</span>
                                    </h3>
                                    <p className="text-[15px] font-bold text-slate-500 uppercase tracking-wider mt-1">{centralStat.label}</p>
                                    <div className="w-8 h-1 bg-blue-600 rounded-full mt-2" />
                                </motion.div>
                            </div>

                            {/* 2. FIVE SURROUNDING ORBITAL CARDS */}
                            {positions.map((pos, index) => {
                                const item = orbitalStats[index];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
                                        className="absolute z-20 flex flex-col items-center "
                                        style={{ top: pos.top, left: pos.left, transform: pos.transform }}
                                    >
                                        {/* Node connector dot */}
                                        <div className="w-5 h-5 rounded-full bg-white border-4 border-slate-200 shadow-sm mb-2 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>

                                        {/* Orbiting Card */}
                                        <div className="w-44 h-44 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center group hover:shadow-[0_15px_35px_rgba(37,99,235,0.12)] transition-all duration-300">
                                            <div className={`p-2 ${item.bgLight} ${item.textColor} rounded-full mb-1`}>
                                                <item.icon className="w-4.5 h-4.5" />
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900 tracking-tight flex items-baseline justify-center">
                                                <CountUp end={item.value} decimals={item.decimals || 0} duration={2} enableScrollSpy />
                                                <span className="text-blue-600 ml-0.5 group-hover:text-emerald-500 transition-colors duration-300">{item.suffix}</span>
                                            </h4>
                                            <p className="text-[14px] font-semibold text-slate-600 leading-snug mt-1 px-1">{item.label}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>

                </div>

                {/* ================= BOTTOM TRUST BADGES ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 bg-white border border-slate-100 rounded-2xl shadow-lg p-6 lg:p-8"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                        {trustBadges.map((badge, index) => (
                            <div
                                key={index}
                                className={`group flex items-center gap-4 lg:justify-center rounded-xl p-3 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 ${index >= 2 ? "pt-4 lg:pt-0" : ""
                                    } ${index === 1 ? "pt-4 sm:pt-0" : ""}`}>
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${badge.bg} ${badge.text} flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110`}
                                >
                                    <badge.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{badge.title}</h4>
                                    <p className="text-[10px] sm:text-sm font-medium text-slate-600">{badge.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}