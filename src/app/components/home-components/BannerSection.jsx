"use client";
import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import {
    FiFileText,
    FiShield,
    FiTrendingUp,
    FiBriefcase,
    FiAward,
    FiPercent,
    FiPieChart,
    FiDollarSign
} from "react-icons/fi";

export default function BannerSection() {
    const [modal, setModal] = useState(false);

    // Typing effect logic for the main tagline
    const fullTagline = "FINTAX ADVISER. STRONG FINANCE. STRONG FUTURE";
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                // Text type ho rha h
                setTypedText(fullTagline.substring(0, typedText.length + 1));
                if (typedText === fullTagline) {
                    // Poora type hone ke baad 2 second hold krega
                    setTimeout(() => setIsDeleting(true), 2000);
                    setTypingSpeed(50);
                }
            } else {
                // Text delete ho rha h
                setTypedText(fullTagline.substring(0, typedText.length - 1));
                if (typedText === "") {
                    setIsDeleting(false);
                    setTypingSpeed(100);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, typingSpeed]);

    // Animated text content for Expertise section
    const animatedTexts = [
        "GST Registration",
        "Company Registration",
        "Income Tax Filing",
        "Trademark Registration",
        "Accounting Services",
        "Virtual CFO Services"
    ];

    const [currentTextIdx, setCurrentTextIdx] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentTextIdx((prev) => (prev + 1) % animatedTexts.length);
                setIsAnimating(true);
            }, 3000);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            message: e.target.message.value,
        };
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert(`Thank you ${formData.name}! Our expert will contact you shortly.`);
                setModal(false);
                e.target.reset();
            } else {
                const errorData = await res.json();
                alert(errorData.error || "Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <>
            <style jsx global>{`
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-8deg); }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                /* Blinking cursor effect for typing text */
                @keyframes blinkCursor {
                    from, to { border-color: transparent }
                    50% { border-color: #f59e0b; } /* Amber color cursor */
                }
                .animate-float {
                    animation: float-gentle 6s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .typing-cursor {
                    border-right: 2px solid #f59e0b;
                    animation: blinkCursor 0.75s step-end infinite;
                }
            `}</style>

            {/* Modal Backdrop Overlay */}
            {modal && (
                <div
                    className="fixed inset-0 bg-slate-900/40 z-50 transition-opacity backdrop-blur-md"
                    onClick={() => setModal(false)}
                />
            )}

            {/* Form Modal Box */}
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60] w-[92%] sm:w-full max-w-[500px] duration-300 transition-all ${modal ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                <form onSubmit={handleSubmit} className="bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-sky-100 max-h-[90vh] overflow-y-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <button
                        type="button"
                        onClick={() => setModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition p-1 hover:bg-slate-100 rounded-full"
                    >
                        <IoMdClose size={22} />
                    </button>

                    <p className="text-center text-[11px] tracking-[3px] uppercase text-sky-600 font-semibold mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Free Consultation
                    </p>
                    <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-slate-900" style={{ fontFamily: "'Fraunces', serif" }}>
                        Talk to a Compliance Expert
                    </h2>

                    <div className="mb-4">
                        <label htmlFor="name" className='block text-sm font-medium text-slate-600 mb-1.5'>Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition text-sm text-slate-900 placeholder-slate-400" placeholder="Enter your name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className='block text-sm font-medium text-slate-600 mb-1.5'>Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition text-sm text-slate-900 placeholder-slate-400" placeholder="Enter your email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className='block text-sm font-medium text-slate-600 mb-1.5'>Phone</label>
                        <input type="text" id="phone" name="contact" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition text-sm text-slate-900 placeholder-slate-400" placeholder="+91 XXXXXXXXXX" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className='block text-sm font-medium text-slate-600 mb-1.5'>Message</label>
                        <textarea id="message" name="message" rows="3" required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-transparent transition text-sm text-slate-900 placeholder-slate-400 resize-none" placeholder="Tell us about your inquiry..." />
                    </div>

                    <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm">
                        Submit Request
                    </button>
                </form>
            </div>

            {/* Hero Banner — Dark Compliance Theme */}
            <section className="relative min-h-screen lg:h-screen w-full flex items-center bg-gradient-to-br from-blue-950 via-[#111827] to-indigo-950 text-slate-800 py-16 lg:py-0 overflow-hidden">
                
                {/* Floating Ambient Background Icons */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07] text-white">
                    <FiDollarSign className="absolute top-[15%] left-[10%] w-12 h-12 animate-float-slow" />
                    <FiFileText className="absolute top-[25%] left-[45%] w-10 h-10 animate-float-delayed" />
                    <FiShield className="absolute bottom-[20%] left-[15%] w-14 h-14 animate-float-slow" />
                    <FiPercent className="absolute top-[60%] left-[38%] w-8 h-8 animate-float-delayed" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-6 items-center">

                    {/* Left: copy column */}
                    <div className="max-w-2xl text-left relative z-10">
                        
                        {/* Typing Effect Tagline Block */}
                        <div className="mb-4 min-h-[24px]">
                            <p className="uppercase tracking-[3px] text-amber-300 font-bold text-xs sm:text-sm inline-block typing-cursor pr-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                                {typedText}
                            </p>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight leading-[1.1] mb-6 text-white animate-fade-in-up [animation-delay:200ms] opacity-0" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>
                            India's Trusted Partner for
                            <span className="block mt-1 text-transparent bg-clip-text bg-sky-500">
                                Registration, Taxation &amp; <span className='text-orange-400'>Compliance</span>
                            </span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 h-auto sm:h-12 overflow-hidden animate-fade-in-up [animation-delay:400ms] opacity-0">
                            <span className="text-slate-100 text-base sm:text-lg font-medium tracking-wide">
                                Expertise in:
                            </span>
                            <div className="inline-block relative overflow-hidden h-9 sm:h-10">
                                <span
                                    className={`inline-block text-base sm:text-lg font-semibold text-emerald-500 transition-all duration-500 transform ${isAnimating
                                        ? 'translate-y-0 opacity-100 scale-100'
                                        : 'translate-y-4 opacity-0 scale-95'
                                        }`}
                                    style={{ fontFamily: "'Fraunces', serif" }}
                                >
                                    {animatedTexts[currentTextIdx]}
                                </span>
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-600 rounded-full opacity-70" />
                            </div>
                        </div>

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 animate-fade-in-up [animation-delay:800ms] opacity-0 transition-all duration-500 hover:text-white">
                            Fintax Adviser helps startups, entrepreneurs, professionals, and growing businesses manage
                            registrations, taxation, compliance, and financial operations through expert guidance and
                            practical business solutions — so you can focus on growth with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:800ms] opacity-0">
                            <button
                                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-sky-600/10 active:scale-[0.98]"
                                onClick={() => setModal(true)}
                            >
                                Enquire Now
                            </button>
                            <Link href="https://wa.me/919990924477" passHref>
                                <button className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 active:scale-[0.98]">
                                    Experts Chat 
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side: Fixed 3D Image Layer with Floating Accent Icons */}
                    <div className="relative h-[450px] sm:h-[500px] w-full flex items-center justify-center select-none">
                        <div className="relative w-full h-full flex items-center justify-center animate-float">
                            <div className="absolute inset-0 pointer-events-none opacity-20 text-sky-400">
                                <FiTrendingUp className="absolute top-[12%] right-[15%] w-7 h-7 animate-float-slow" />
                                <FiPieChart className="absolute bottom-[14%] left-[8%] w-8 h-8 animate-float-delayed" />
                                <FiBriefcase className="absolute top-[48%] left-[2%] w-6 h-6 animate-float-slow" />
                                <FiAward className="absolute bottom-[28%] right-[4%] w-7 h-7 animate-float-delayed" />
                            </div>

                            <img
                                src="/assets/fintaxbanner.png"
                                alt="Fintax Compliance Services"
                                className="h-200px w-200px pointer-events-none drop-shadow-[0_15px_30px_rgba(14,165,233,0.15)] relative z-10 animate-[bounce_3s_infinite]"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}