import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.hrPolicies;
export default function HRComplianceLanding() {
  const HERO_STATS = [
    "Custom HR Handbooks",
    "Employment Law Compliant",
    "Clear Leave & Attendance",
    "Grievance & POSH Systems",
  ];

  const faqs = [
    { 
      q: "What are Human Resource (HR) Policies?", 
      a: "Human Resource Policies are formal guidelines and procedures that define how an organisation manages its employees throughout the employment lifecycle. These policies establish rules relating to recruitment, conduct, attendance, leave, workplace behaviour, discipline, benefits, and statutory compliance with labor laws." 
    },
    { 
      q: "Why are HR Policies important?", 
      a: "HR Policies help businesses maintain consistency, improve employee management, reduce disputes, ensure legal compliance with labor and state regulations, and create a positive, productive work environment." 
    },
    { 
      q: "Can startups implement HR Policies?", 
      a: "Yes. Every startup should establish professionally drafted HR Policies from the beginning to support structured scaling, simplify employee onboarding, and avoid compliance issues as the team grows." 
    },
    { 
      q: "What is included in an HR Policy Manual?", 
      a: "An HR Policy Manual generally includes recruitment guidelines, leave structure, working hours, employee code of conduct, disciplinary procedures, benefits structures, grievance handling mechanisms, confidentiality agreements, and state-compliant rules." 
    },
    { 
      q: "Does FinTax Adviser provide customized HR Policies?", 
      a: "Yes. We prepare customized Human Resource (HR) Policies, Employee Handbooks, and workplace documentation built to match your unique organizational model, team size, and industry requirements." 
    }
  ];

  const INDUSTRIES = [
    'Startups', 'Private Limited Companies', 'LLPs', 'Partnership Firms', 
    'MSMEs', 'IT & Software Companies', 'Manufacturing Companies', 'Healthcare Organisations', 
    'Educational Institutions', 'Retail Businesses', 'Hospitality Industry', 'E-commerce Companies', 
    'Construction Companies', 'Logistics Businesses', 'NGOs', 'Growing Enterprises'
  ];

  const DRAFTING_INPUTS = [
    "Certificate of Incorporation", "Company Rules & General Procedures", "Organisational Structure",
    "Current Leave & Holiday Setup", "Standard Working Hours Details", "Employee Benefits Structure",
    "Existing Employment Manuals", "Total Workforce Strength"
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Clear Guidelines · Reduced Disputes · Full Compliance
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Human Resource (HR) Policies
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Drafting Services in Delhi
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Establish a transparent, positive, and legally compliant workplace. Our experienced consultants design professional HR manuals, employee handbooks, and policy frameworks tailored for your business.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* HERO RIGHT PREMIUM FORM */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Intro Section */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Protect Your Business & Align Your Team Culture
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">FinTax Adviser</strong>. A well-defined HR framework establishes clear boundaries, streamlines disputes, protects your intellectual property, and ensures compliance with ever-changing labor regulations. We design structured, accessible, and practical workplace policies for teams of all sizes.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Professional HR Policy Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Draft clean, structured, and compliant organizational manuals customized for your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* HR Drafting */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Core HR Policy Drafting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Complete manual preparation specifying guidelines from onboarding rules down to standard offboarding protocols.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Leave & Attendance</span>
                <span>✓ Recruitment Policies</span>
                <span>✓ Work From Home Policy</span>
                <span>✓ Exit & Termination</span>
              </div>
            </div>

            {/* Code of Conduct */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Workplace Code of Conduct</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Promote workplace respect, clear ethical standards, and a transparent escalation procedure for disputes.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Code of Conduct</span>
                <span>✓ Anti-Harassment (POSH)</span>
                <span>✓ Confidentiality Clauses</span>
                <span>✓ Disciplinary Policies</span>
              </div>
            </div>

            {/* HR Advisory */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Policy Review & Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Bring old company handbooks in line with the latest judicial rules and central labor laws.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Legal Audits</span>
                <span>✓ Employee Handbook Review</span>
                <span>✓ Document Updates</span>
                <span>✓ Labour Law Advisory</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-hr" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Structuring Your HR Framework
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                A standardized set of workplace protocols eliminates managerial guesswork, mitigates sudden workplace grievances, and aligns team performance directly.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Ensure statutory POSH safety, maintain clear holiday structures, and establish transparent conduct expectations with customized handbooks."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Fair Enforcement</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Treat every team member consistently by running a single source of policy truth.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Legal Protection</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Guard company IP and intellectual properties with custom non-disclosures.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Conflict Mitigation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Clearly outlined disciplinary procedures minimize disputes and avoid legal escalation.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">High Engagement</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Boost retention rates by deploying predictable benefits and structured review setups.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inputs Required Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Details Required to Prepare Your Custom Handbooks
            </h2>
            <p className="text-sm text-slate-500 mt-1">Our consultants process these inputs to make policies practical, fair, and legally sound.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {DRAFTING_INPUTS.map((input) => (
              <div key={input} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {input}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm text-slate-500 mt-1">Deploying compliant, robust policies for companies across multiple domains.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {INDUSTRIES.map((ind) => (
              <div key={ind} className="p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer Block */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Partner with FinTax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced HR Policy Consultants",
                  "Customized Employee Handbooks",
                  "Industry-Specific Guidelines",
                  "Labor Law Compliant Formats",
                  "Affordable Professional Fees",
                  "Prompt Timelines & Delivery"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-sm shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Process Timeline */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Drafting & Rollout Procedure</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Structural Consultation:</strong> Assessing workforce hierarchy, shifts, and leaves details.</p>
                <p><strong>Step 2 - Baseline Design:</strong> Selecting relevant policy drafts aligned to regional and central labor laws.</p>
                <p><strong>Step 3 - Draft Customization:</strong> Refining code-of-conduct guidelines and proprietary security measures.</p>
                <p><strong>Step 4 - Manual Delivery:</strong> Providing actionable manuals alongside review documents ready for implementation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}