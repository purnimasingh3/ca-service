"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiPhone, FiMail, FiX, FiCheckCircle, FiLoader } from "react-icons/fi";

export default function LeadPopup() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
    // 💡 जादू यहाँ है: यह ट्रैक रखेगा कि क्या दूसरी बार का पॉपअप शेड्यूल या दिख चुका है
    const [hasShownSecondTime, setHasShownSecondTime] = useState(false);

    const initialFormState = {
        name: "",
        contact: "",
        email: "",
        message: "Lead from Popup Form",
    };

    const [formData, setFormData] = useState(initialFormState);

    // 1. पहली बार स्क्रीन लोड होने पर 2 सेकंड बाद पॉपअप दिखेगा
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000);

        // हेडर वाले बटन का इवेंट
        const handleOpenEvent = () => {
            setOpen(true);
        };

        window.addEventListener("openLeadPopup", handleOpenEvent);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("openLeadPopup", handleOpenEvent);
        };
    }, []);

    // 2. 💡 क्लोज बटन का एकदम सटीक लॉजिक (सिर्फ एक बार और खुलेगा 8 सेकंड बाद)
    const handleClose = () => {
        setOpen(false); // पहले अभी वाले पॉपअप को बंद करो

        // अगर फॉर्म सबमिट नहीं हुआ है और अभी तक दूसरी बार वाला पॉपअप नहीं आया है
        if (!submitted && !hasShownSecondTime) {
            setHasShownSecondTime(true); // तुरंत इसे true कर दो ताकि अगली बार ये कंडीशन चले ही नहीं
            
            setTimeout(() => {
                setOpen(true); // ठीक 8 सेकंड बाद दूसरी बार खोल दो
            }, 8000);
        }
        // अगर दूसरी बार भी यूजर ने कट कर दिया, तो 'hasShownSecondTime' पहले से true होगा,
        // इसलिए यह इफ-कंडीशन दोबारा नहीं चलेगी और पॉपअप हमेशा के लिए शांत हो जाएगा!
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData(initialFormState);

                // फॉर्म सबमिट होने के बाद 2 सेकंड में पॉपअप बंद होगा
                setTimeout(() => {
                    setOpen(false);
                }, 2000);
            } else {
                const errorData = await res.json();
                alert(errorData.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send request. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md px-4 transition-all duration-500 ease-out animate-fade-in">
            <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] border border-slate-100 overflow-hidden transform transition-all scale-100 duration-300 ease-out animate-in zoom-in-95">

                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600" />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-all duration-200"
                >
                    <FiX size={20} />
                </button>

                {submitted ? (
                    /* Premium Success State */
                    <div className="text-center py-10 transition-all duration-300">
                        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-50 text-emerald-500 mb-5 shadow-inner animate-bounce">
                            <FiCheckCircle size={44} />
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Thank You!</h2>
                        <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-[280px] mx-auto">
                            Our Senior Investment Consultant will contact you shortly.
                        </p>
                    </div>
                ) : (
                    /* Form UI */
                    <>
                        <div className="text-center mb-8">
                            <span className="inline-block text-[11px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full mb-3">
                                Limited Slots Available
                            </span>
                            <h2 className="text-3xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 bg-clip-text text-transparent tracking-tight">
                                Get Free Consultation
                            </h2>
                            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                                Fill in your details and our expert team will reach out to you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Input */}
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200">
                                    <FiUser size={18} />
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                />
                            </div>

                            {/* Mobile Input */}
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200">
                                    <FiPhone size={18} />
                                </span>
                                <input
                                    type="tel"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    required
                                    className="w-full border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200">
                                    <FiMail size={18} />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address (Optional)"
                                    className="w-full border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm"
                                />
                            </div>

                            {/* Enhanced Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl py-4 font-bold tracking-wide transition-all duration-300 shadow-[0_4px_12px_rgba(37,_99,_235,_0.2)] hover:shadow-[0_4px_20px_rgba(37,_99,_235,_0.3)] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <FiLoader className="animate-spin" size={18} />
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <span>Book Free Consultation</span>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}