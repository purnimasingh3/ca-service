"use client";
import { useState } from "react";
import Link from "next/link";
import { Briefcase, Rocket, ShieldCheck, UserCheck, ArrowRight } from "lucide-react";

// 1. Data Structure for Tabs and Services
const categories = [
    { id: "start", name: "Start Business", icon: Rocket },
    { id: "manage", name: "Manage Business", icon: Briefcase },
    { id: "protect", name: "Protect Business", icon: ShieldCheck },
    { id: "vcfo", name: "Virtual CFO", icon: UserCheck },
];

const servicesData = {
    start: [
        { title: "Private Limited Company", desc: "Register a private limited company with MCA easily.", slug: "best-private-limited-company-registration-service-delhi-india" },
        { title: "LLP Registration", desc: "Get Limited Liability Partnership registered for legal operations.", slug: "best-llp-registration-service-delhi-india" },
        { title: "One Person Company", desc: "Perfect structure for solo entrepreneurs looking for corporate status.", slug: "best-opc-registration-service-delhi-india" },
        { title: "Section 8 Company", desc: "Register a Section 8 Company for charitable and non-profit activities.", slug: "best-section-8-company-registration-service-delhi-india" },
        { title: "Shop & Establishment Registration", desc: "Get your Shop & Establishment registration quickly and legally.", slug: "best-shop-establishment-registration-service-delhi-india" },
        { title: "Foreign Subsidiary Company", desc: "Set up a foreign subsidiary company in India with expert assistance.", slug: "best-foreign-subsidiary-registration-service-delhi-india" },
        { title: "Partnership Firm Registration", desc: "Register your partnership firm with complete legal documentation.", slug: "best-partnership-firm-registration-service-delhi-india" },

    ],
    manage: [
        { title: "GST Registration", desc: "Unified indirect tax that combines several taxes including VAT, Service Tax etc.", slug: "best-gst-registration-service-delhi-india" },
        { title: "Udyog Aadhar (MSME)", desc: "Registration allows the MSMEs to register themselves and avail the benefits.", slug: "best-udyog-aadhar-msme-service-delhi-india" },
        { title: "FSSAI (Food Licence)", desc: "Applicable on the businesses undertaking activities related to Food.", slug: "best-fssai-registration-service-delhi-india" },
        { title: "Startup India", desc: "Register with DIPP and avail the benefits made available to Startups.", slug: "best-startup-india-registration-service-delhi-india" },
        { title: "EPF Registration", desc: "Registration is mandatory for the business employing more than 20 employees.", slug: "best-epf-registration-service-delhi-india" },
        { title: "ESI Registration", desc: "Provides medical facility to employees and is mandatory for the business.", slug: "best-esi-registration-service-delhi-india" },
    ],
    protect: [
        { title: "Trademark Registration", desc: "Protect your brand name, logo, and identity from competitors.", slug: "best-trademark-registration-service-delhi-india" },
        { title: "Copyright Filing", desc: "Secure your creative works including software, books, and music.", slug: "best-copyright-registration-service-delhi-india" },
        { title: "Trademark Assignment", desc: "Transfer trademark ownership securely with legal trademark assignment services.", slug: "best-trademark-assignment-service-delhi-india" },
        { title: "Terms of Use", desc: "Professionally drafted Terms of Use to protect your business and website.", slug: "best-terms-of-use-agreement-service-delhi-india" },
        { title: "Customer Vendor Agreement", desc: "Create legally compliant customer and vendor agreements for your business.", slug: "best-customer-vendor-agreement-service-delhi-india" },
        { title: "Founders Agreement", desc: "Draft a comprehensive founders agreement to define ownership and responsibilities.", slug: "best-founders-agreement-service-delhi-india" },

    ],
    vcfo: [
        { title: "Bookkeeping & Accounting", desc: "End-to-end management of books, accounts, and financial recording.", slug: "best-accounting-bookkeeping-zoho-service-delhi-india" },
        { title: "MIS Reporting", desc: "Get monthly insight reports for structured business decisions.", slug: "best-mis-reporting-service-delhi-india" },
        {
            title: "Chartered Accountant(CA) Services",
            desc: "Professional Chartered Accountant services for GST, Income Tax, ROC compliance, audit, and business advisory.",
            slug: "best-ca-services-for-startups-delhi-india"
        },
        { title: "Company Valuation", desc: "Accurate company valuation services for investment, fundraising, and compliance.", slug: "best-company-valuation-service-delhi-india" },
        { title: "Financial Modeling", desc: "Professional financial modeling for business planning, funding, and forecasting.", slug: "best-financial-modeling-service-delhi-india" },
    ],
};

export default function PopularOfferings() {
    // Manage current active tab
    const [activeTab, setActiveTab] = useState("manage");

    return (
        <section className="bg-[#f8fafc] py-20 px-6 md:px-16 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                        Most Popular <span className="text-blue-600">Offerings!</span>
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg">
                        Select a category to view customized services for your venture.
                    </p>
                </div>

                {/* ================= TABS NAVIGATION ================= */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-16">
                    {categories.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-6 py-3.5 rounded-full border text-base font-semibold tracking-wide transition-all duration-300 ${isActive
                                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105"
                                    : "bg-white border-blue-200 text-blue-600 hover:bg-blue-50"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-500"}`} />
                                {tab.name}
                            </button>
                        );
                    })}
                </div>

                {/* ================= SERVICE CARDS GRID ================= */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData[activeTab]?.map((service, index) => (
                        <div
                            key={index}
                            style={{ animationDelay: `${index * 75}ms` }}
                            className="animate-fadeIn bg-white rounded-[24px] p-8 border border-gray-100 
                 shadow-[0_10px_30px_rgba(0,0,0,0.02)] 
                 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] 
                 hover:-translate-y-2 hover:scale-[1.02]
                 relative overflow-hidden
                 transition-all duration-500 ease-out flex flex-col justify-between group"
                        >
                            {/* Top Decorative Line Effect on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* Background Subtle Glow on Hover */}
                            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500 pointer-events-none" />

                            <div>
                                {/* Title */}
                                <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 group-hover:text-gray-600 transition-colors duration-300">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Action Button: Dynamic Slug Link */}
                            <div className="flex justify-end items-center relative z-10">
                                <Link
                                    href={`/${service.slug}`}
                                    className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2.5 rounded-full 
                     shadow-[0_4px_14px_rgba(37,99,235,0.1)]
                     hover:bg-blue-600 hover:text-white hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)]
                     transition-all duration-300 text-sm group/btn"
                                >
                                    <span>View More</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}