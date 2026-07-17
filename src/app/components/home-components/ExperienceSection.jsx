"use client";
import React from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  Users,
  Award,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-white font-sans">
      
      {/* Soft Premium Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/50 to-indigo-50/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-slate-50 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* ================= LEFT SIDE: CONTENT (7 Columns) ================= */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/5 border border-[#2563EB]/10 px-4 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span className="text-[11px] font-bold tracking-[2px] text-[#2563EB] uppercase font-mono">
              ABOUT FINTAX ADVISER
            </span>
          </div>

          {/* Elegant Headline (Section 3 Heading) */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] font-heading">
            Helping Businesses{" "}
            <span className="bg-gradient-to-r from-[#0F4C81] to-[#2563EB] bg-clip-text text-transparent">
              Build Strong Foundations
            </span>
          </h2>

          {/* Clear & Legible Paragraph (Section 3 Content) */}
          <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl font-body">
            <p>
              Fintax Adviser is committed to helping startups, MSMEs, professionals, and growing businesses simplify registrations, taxation, compliance, and financial management.
            </p>
            <p className="text-sm sm:text-base">
              Our experienced team works closely with clients to provide practical solutions that support business growth while maintaining regulatory compliance. From incorporation to ongoing advisory support, we help businesses navigate every stage of their journey with confidence.
            </p>
          </div>

          {/* Interactive Feature Cards (Section 6: Why Choose Us Highlights) */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            
            {/* Feature 1 */}
            <div className="group flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:shadow-[0_10px_30px_rgba(15,76,129,0.04)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/5 transition-colors">
                <Sparkles className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#0F172A]">
                  Business-Focused Approach
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Startup and business centric strategy tailored for rapid scaling.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:shadow-[0_10px_30px_rgba(15,76,129,0.04)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100/50 transition-colors">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#0F172A]">
                  End-To-End Support
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Dedicated expert assistance for transparent and hassle-free compliance.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: VISUAL COLLAGE (5 Columns) ================= */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
          
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [bg-size:12px_12px] opacity-70 hidden sm:block pointer-events-none" />

          {/* Main Container */}
          <div className="relative w-full max-w-[440px]">
            
            {/* Main Image Container */}
            <div className="relative rounded-[32px] overflow-hidden border border-slate-100 bg-white p-2 shadow-[0_20px_50px_rgba(15,76,129,0.08)]">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] sm:h-[480px] w-full">
                <Image
                  src="/experiance/team.avif"
                  alt="Our professional CA consulting team working together"
                  fill
                  sizes="(max-w-7xl) 100vw, 400px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Left Bottom Floating Text Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold tracking-widest text-blue-300 uppercase block mb-1">
                    FINTAX ADVISER
                  </span>
                  <h4 className="text-xl font-bold">Empowering Businesses</h4>
                  <p className="text-xs text-slate-200 mt-1 font-light leading-relaxed">
                    Reliable taxation, compliance, and corporate advisory solutions designed for growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Mini Experience Card (Bottom Right) - Section 2 Achievements */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl p-4 shadow-[0_15px_35px_rgba(15,76,129,0.12)] border border-slate-100/80 max-w-[200px] hover:scale-105 transition-transform duration-300 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-[#0F172A] leading-none">98%</h4>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Corporate Metrics Box (Top Left) - Section 2 Achievements */}
            <div className="absolute -top-10 -left-6 bg-white rounded-2xl p-5 shadow-[0_15px_35px_rgba(15,76,129,0.1)] border border-slate-100/80 max-w-[220px] hover:scale-105 transition-transform duration-300 hidden sm:block">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0F172A]">500+</h5>
                    <p className="text-[10px] text-slate-400 font-medium">Services Delivered</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100" />
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0F4C81]/5 flex items-center justify-center text-[#0F4C81]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0F172A]">12+ Years</h5>
                    <p className="text-[10px] text-slate-400 font-medium">Experience</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}