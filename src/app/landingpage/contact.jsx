"use client";
import React, { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { Phone, ShieldCheck, Pencil, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";

export default function Contact() {
    // 1 for Personal Details, 2 for State/Email
    const [activeTab, setActiveTab] = useState(1);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        state: '',
        message: '',
    });

    const handleNext = () => {
        if (!formData.name.trim()) {
            alert("Please enter your name");
            return;
        }
        if (!/^[6-9]\d{9}$/.test(formData.contact)) {
            alert("Please enter a valid mobile number");
            return;
        }
        // Move to Stage 2
        setActiveTab(2);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email.trim()) {
            alert("Please enter your email");
            return;
        }
        if (!formData.state) {
            alert("Please select your state");
            return;
        }
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    // Kis landing page se form submit hua
                    sourcePage: pathname,
                    // Google Ads / campaign tracking
                    utm_source: searchParams.get("utm_source") || "",
                    utm_medium: searchParams.get("utm_medium") || "",
                    utm_campaign: searchParams.get("utm_campaign") || "",
                    utm_term: searchParams.get("utm_term") || "",
                    utm_content: searchParams.get("utm_content") || "",
                    gclid: searchParams.get("gclid") || "",
                }),
            });

            if (res.ok) {
                router.push("/thank-you");

                setFormData({
                    name: "",
                    contact: "",
                    email: "",
                    state: "",
                    message: "",
                });

                setActiveTab(1);
            } else {
                alert("Something went wrong");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl text-slate-900 border border-slate-100 mx-auto">
            {/* Top Rating Bar */}
            <div className="flex flex-wrap justify-between items-center gap-2 text-[11px] sm:text-xs md:text-sm text-indigo-900 font-bold border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-1">
                    <span className="bg-white text-slate-900 rounded-full font-bold text-md h-4 w-4 flex items-center justify-center"><FcGoogle /></span>
                    <span className="font-bold">4.8 Rating</span>
                </div>
                <span>25+ Financial Experts</span>
                <span>Free Strategy Call</span>
            </div>

            {/* Header */}
            <div className="text-center space-y-1">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900">
                    Book a Free <span className="text-orange-500">Consultation</span>
                </h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Get Expert Guidance — <span className="text-blue-900">100% FREE</span>
                </p>
            </div>

            {/* Tabs Headers */}
            <div className="flex border-b border-slate-100 mt-5 text-xs font-bold">
                <button
                    type="button"
                    onClick={() => setActiveTab(1)}
                    className={`flex-1 pb-2 text-center border-b-2 transition-colors ${activeTab === 1 ? "border-orange-500 text-slate-900" : "border-transparent text-slate-400"}`}
                >
                    Personal Details
                </button>
                <button
                    type="button"
                    onClick={() => {
                        // Validate before letting them click to Tab 2 manually
                        if (formData.name.trim() && /^[6-9]\d{9}$/.test(formData.contact)) {
                            setActiveTab(2);
                        } else {
                            alert("Please fill personal details correctly first.");
                        }
                    }}
                    className={`flex-1 pb-2 text-center border-b-2 transition-colors ${activeTab === 2 ? "border-orange-500 text-slate-900" : "border-transparent text-slate-400"}`}
                >
                    State & Email
                </button>
            </div>

            {/* Active Monitoring Alert */}
            <div className="bg-emerald-50 text-emerald-700 text-center text-[11px] sm:text-xs font-bold py-1.5 px-2 rounded-lg mt-4 flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="truncate">Active financial monitoring for 200+ companies</span>
            </div>

            {/* Form Fields */}
            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>

                {/* STEP 1: Personal Details */}
                {activeTab === 1 && (
                    <div className="space-y-4 mt-5">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                        />

                        <div className="flex gap-2">
                            <div className="w-14 sm:w-16 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 font-medium text-xs sm:text-sm text-slate-500">
                                +91
                            </div>
                            <input
                                type="tel"
                                maxLength={10}
                                placeholder="Mobile Number"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value.replace(/\D/g, '') })}
                                className="flex-1 min-w-0 px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="w-full py-2.5 sm:py-3 rounded-xl bg-orange-500 text-white font-bold text-sm sm:text-base hover:bg-orange-600 transition"
                        >
                            Next →
                        </button>
                    </div>
                )}

                {/* STEP 2: Email & State */}
                {activeTab === 2 && (
                    <div className="space-y-4 mt-5">
                        {/* Edit Contact Display Box */}
                        <div className="flex justify-between items-center border border-slate-200 rounded-xl p-3 bg-slate-50">
                            <div>
                                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Mobile Number</p>
                                <p className="font-bold text-xs sm:text-sm text-slate-700">
                                    +91 {formData.contact}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setActiveTab(1)}
                                className="flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-600 transition"
                            >
                                <Pencil size={12} className="sm:w-3.5 sm:h-3.5" />
                                Edit
                            </button>
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                        />

                        <div className="relative w-full">
                            <select
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition bg-white appearance-none pr-10"
                            >
                                <option value="">Select State</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>
                                <option>Andaman and Nicobar Islands</option>
                                <option>Chandigarh</option>
                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                <option>Delhi</option>
                                <option>Jammu and Kashmir</option>
                                <option>Ladakh</option>
                                <option>Lakshadweep</option>
                                <option>Puducherry</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                                <ChevronDown size={16} />
                            </div>
                        </div>
                        <textarea
                            type="text"
                            placeholder="Raise your Query"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-orange-500 transition"
                        />

                        <button
                            type="submit"
                            className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-sm sm:text-base hover:opacity-90 transition shadow-md"
                        >
                            Book Free Strategy Call
                        </button>
                    </div>
                )}

                {/* Footer Badges & Buttons */}
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium text-center pt-1 flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3 w-3 flex-shrink-0 text-slate-400" />
                    <span>Your details are secure and will not be shared.</span>
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                    <Link
                        href="tel:+919990924477"
                        className="flex items-center justify-center gap-1.5 border border-slate-200 rounded-xl py-2.5 text-[11px] sm:text-xs font-bold text-blue-600 bg-white hover:bg-slate-50 transition"
                        title="Call Senior Advisor Desk"
                    >
                        <Phone className="h-3.5 w-3.5 text-blue-600 fill-blue-100 flex-shrink-0" /> Call Experts
                    </Link>

                    <Link
                        href="https://wa.me/+919990924477"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1.5 border border-emerald-200 rounded-xl py-2.5 text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 transition"
                    >
                        <FaWhatsapp className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" /> WhatsApp
                    </Link>
                </div>
            </form>

            <div className="mt-4 text-center space-y-0.5 border-t border-slate-50 pt-3">
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-800">Trusted by 500+ Founders Across India</p>
                <p className="text-[8px] sm:text-[9px] text-slate-400 font-semibold leading-tight">100% Money-Back Guarantee if documents not filed within 15 days</p>
            </div>
        </div>
    );
}