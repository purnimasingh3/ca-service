"use client";
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

export default function BannerSection() {
    const [modal, setModal] = useState(false);

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert(`Thank you ${formData.name}! Our senior investment consultant will contact you shortly.`);
                setModal(false); // Close modal on success
                e.target.reset(); // Safely reset HTML form inputs directly
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
            {/* Modal Backdrop Overlay */}
            {modal && (
                <div 
                    className="fixed inset-0 bg-black/50 z-50 transition-opacity backdrop-blur-sm" 
                    onClick={() => setModal(false)} 
                />
            )}

            {/* Form Modal Box */}
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60] w-[92%] sm:w-full max-w-[500px] duration-300 transition-all ${
                modal ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
            }`}>
                <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
                    <button
                        type="button"
                        onClick={() => setModal(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition p-1 hover:bg-gray-100 rounded-full"
                    >
                        <IoMdClose size={22} />
                    </button>

                    <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
                        Enquire Now
                    </h2>

                    <div className="mb-4">
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1.5'>
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                            placeholder="Enter your name"
                            suppressHydrationWarning={true}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1.5'>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                            placeholder="Enter your email"
                            suppressHydrationWarning={true}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1.5'>
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="contact"
                            required
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                            placeholder="+91 XXXXXXXXXX"
                            suppressHydrationWarning={true}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1.5'>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                            required
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm resize-none"
                            placeholder="Tell us about your inquiry..."
                            suppressHydrationWarning={true}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    suppressHydrationWarning={true}
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Main Hero Banner Section */}
            <section className="relative min-h-screen lg:h-screen w-full flex items-center bg-slate-50 py-20 lg:py-0 overflow-hidden">
                
                {/* Background Asset Wrapper */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/banner.avif"
                        alt="fintax banner"
                        className="w-full h-full object-cover object-center opacity-40 lg:opacity-100 "
                    />
                    {/* Soft gradient overlay to keep text highly legible over custom graphics on small screens */}
                    <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent lg:from-transparent" />
                </div>

                {/* Primary Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
                    <div className="max-w-2xl">
                        
                        <p className="uppercase tracking-[3px] sm:tracking-[5px] text-blue-600 font-bold text-xs sm:text-sm mb-4 lg:mb-5">
                            Clarity. Control. Growth.
                        </p>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-extrabold text-[#061C4B] leading-none">
                            Virtual <span className="text-blue-600">CFO</span>
                        </h1>

                        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-[#0E2B63]">
                            Smart Financial Guidance.
                            <span className="block mt-1 text-blue-900/90 font-semibold">Stronger Business Decisions.</span>
                        </h2>

                        <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
                            Your trusted Virtual CFO partner for end-to-end
                            financial management, compliance, forecasting,
                            and business growth.
                        </p>

                        {/* Interactive CTAs */}
                        <div className="flex flex-wrap gap-4 mt-6 sm:mt-8">
                            <button 
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 active:scale-[0.98]" 
                                onClick={() => setModal(true)}
                                suppressHydrationWarning={true}
                            >
                                Enquire Now
                            </button>
                        </div>

                        {/* Mini Feature Blocks Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
                            {[
                                "Financial Strategy",
                                "Cash Flow",
                                "Forecasting",
                                "Risk Management"
                            ].map((feature, idx) => (
                                <div 
                                    key={idx} 
                                    className="bg-white/85 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h3 className="font-semibold text-xs sm:text-sm text-[#0E2B63]">
                                        {feature}
                                    </h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}