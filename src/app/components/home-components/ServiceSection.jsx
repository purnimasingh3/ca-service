"use client";
import React from "react";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Landmark,
  BadgeDollarSign,
  ShieldCheck,
  Award,
  TrendingUp,
  ArrowRight,
  Gauge,
} from "lucide-react";

const SERVICES_DATA = [
  {
    icon: Briefcase,
    title: "Business Registration",
    desc: "Seamless company incorporation and startup setup solutions customized for every entrepreneur.",
    link: "/services/business-setup",
  },
  {
    icon: FileText,
    title: "GST Registration & Filing",
    desc: "Complete GST registration, monthly returns filing, compliance management, and corporate tax structuring.",
    link: "/services/tax-registration",
    isFeatured: true, 
  },
  {
    icon: Award,
    title: "Trademark Registration",
    desc: "Protect your brand name, logo, and intellectual assets with legal security and hassle-free trademark filing.",
    link: "/services/fundraising",
  },
  {
    icon: BadgeDollarSign,
    title: "Accounting & Bookkeeping",
    desc: "Comprehensive bookkeeping, regular auditing, and streamlined ledger management for operational efficiency.",
    link: "/services/accounting-services",
  },
  {
    icon: ShieldCheck,
    title: "ROC Compliance",
    desc: "End-to-end ROC annual filings, structural reporting, and complete legal compliance to stay fully secure.",
    link: "/services/compliance-services",
  },
  {
    icon: Gauge,
    title: "Virtual CFO Services",
    desc: "Strategic financial advisory, forecasting, budgeting, cash flow monitoring, and corporate scaling strategies.",
    link: "/services/hr-payroll",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-6 md:px-16 bg-[#f8fafc] font-sans">
      
      {/* Premium subtle grid effect */}
      <div className="absolute inset-0  bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* ================= HEADING (Section 4) ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/5 border border-[#2563EB]/10 px-4 py-1.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#2563EB]" />
            <span className="text-[11px] font-bold tracking-[2px] text-[#2563EB] uppercase font-mono">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight font-heading">
            Services Designed For{" "}
            <span className="bg-gradient-to-r from-[#0F4C81] to-[#2563EB] bg-clip-text text-transparent">
              Every Stage Of Business Growth
            </span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-body">
            Our comprehensive service portfolio is designed to support businesses from startup stage to long-term expansion.
          </p>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white p-8 sm:p-10 rounded-[30px] border transition-all duration-350 flex flex-col justify-between hover:-translate-y-2 ${
                  service.isFeatured
                    ? "border-blue-200 shadow-[0_20px_50px_rgba(37,99,235,0.06)] ring-1 ring-blue-100"
                    : "border-slate-100 hover:border-slate-200/80 shadow-[0_10px_30px_rgba(15,76,129,0.02)] hover:shadow-[0_20px_40px_rgba(15,76,129,0.06)]"
                }`}
              >
                {/* Popular Tag on Featured Item */}
                {service.isFeatured && (
                  <span className="absolute top-5 right-6 text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <div>
                  {/* Dynamic Icon Box with smooth transition */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${
                    service.isFeatured 
                      ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100" 
                      : "bg-slate-50 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                {/* Read More / Action Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] group/link"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-blue-600 after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:origin-left duration-250 pb-0.5">
                    Explore Service
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}