import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.employmentAgreement || {
  title: "Professional Employment Agreement Services in India | Fintax Adviser",
  description: "Secure your business and empower your team with legally sound, customized, and professional employment contracts drafted by expert corporate lawyers.",
};
export default function EmploymentAgreementLanding() {
  const HERO_STATS = [
    "Expert Legal Support",
    "Quick Turnaround",
    "Affordable Pricing",
    "Pan India Service",
  ];

  const faqs = [
    { q: "Is an employment agreement legally enforceable?", a: "A properly drafted and executed employment agreement can help establish the contractual relationship between employer and employee, subject to applicable laws." },
    { q: "Can employment agreements be customized?", a: "Yes. Agreements should be tailored to the specific needs of the business and job role." },
    { q: "Is a confidentiality clause important?", a: "Confidentiality provisions help protect sensitive business information and client data." },
    { q: "Can startups use employment agreements?", a: "Absolutely. Startups benefit significantly from having proper employment documentation from the beginning." },
    { q: "What is the difference between an offer letter and an employment agreement?", a: "An offer letter generally outlines employment terms, while an employment agreement provides a detailed contractual framework governing the employment relationship." },
    { q: "Can employment agreements include notice period clauses?", a: "Yes. Notice period provisions are commonly included to define resignation and termination procedures." }
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
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                ⚡ CLEAR TERMS | STRONG RELATIONSHIPS | LEGALLY PROTECTED
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Employment Agreement
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Drafting Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                A well-drafted Employment Agreement defines the rights, responsibilities and obligations of both employer and employee, ensuring clarity, transparency and protection for your business.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-bold text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 w-full sm:w-auto text-center">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Employment Agreement Services for Businesses & Employers
          </h2>
          <div className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal space-y-4">
            <p>
              Hiring employees is an important step for every business, but protecting your company through legally structured employment contracts is equally important. <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides professional Employment Agreement drafting and review services for startups, MSMEs, private limited companies, LLPs, agencies, IT companies, manufacturers, and growing businesses across India.
            </p>
            <p>
              With years of experience in business compliance and documentation, we help organizations create clear, legally sound, and business-friendly employment agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concept Breakdown */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">What is an Employment Agreement?</h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                An Employment Agreement is a legally binding contract between an employer and an employee that outlines the terms and conditions of employment.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A properly drafted agreement helps both employers and employees understand their rights and obligations from the beginning of the employment relationship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xl font-bold text-[#071c3d]">Key Components Defined</h4>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
              <ul className="text-slate-600 space-y-1.5 text-base sm:text-lg">
                <li>• Job role and responsibilities</li>
                <li>• Salary and compensation structure</li>
                <li>• Working hours and leave policies</li>
                <li>• Confidentiality, Notice period & Termination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Types Section */}
      <section id="types" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common Types of Employment Agreements
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Full-Time Agreement", d: "Standard agreements for permanent workforce onboarding frameworks." },
              { t: "Part-Time Agreement", d: "Structured specifically for partial shift dependencies or hourly roles." },
              { t: "Contract Employee Agreement", d: "Configured entirely for discrete project milestones and assignments." },
              { t: "Probationary Agreement", d: "Temporary deployment vectors preceding absolute full-time operational updates." },
              { t: "Remote Work Agreement", d: "Integrated data protocols and specialized workflow conditions for external staff." },
              { t: "Consultant / Internship", d: "Tailored documentation assets for flexible advisory support and trainee metrics." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.t}</h3>
                <p className="text-blue-600 text-lg leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 bg-slate-100 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#071c3d] sm:text-4xl">
                Why is an Employment Agreement Important?
              </h2>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded-r-xl">
                <p className="text-sm font-semibold text-blue-600 leading-relaxed">
                  "A strong agreement today builds a secure and successful tomorrow."
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Defines Terms Clearly", desc: "Establishes expectations regarding job responsibilities, compensation, and workplace conduct." },
                { title: "Protects Business Interests", desc: "Helps safeguard confidential business information, trade secrets, and intellectual property." },
                { title: "Reduces Legal Risks", desc: "Minimizes misunderstandings and employment-related disputes completely." },
                { title: "Supports Compliance", desc: "Helps businesses maintain proper corporate governance and HR tracking parameters." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 border border-slate-200 bg-slate-200 rounded-xl">
                  <h4 className="font-bold text-base uppercase tracking-wider text-blue-600">{item.title}</h4>
                  <p className="text-md text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Clauses */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Key Clauses Included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {["Designation & Duties", "Compensation & Benefits", "Working Hours & Leaves", "Confidentiality Obligations", "Intellectual Property Rights", "Notice Period Rules", "Code of Conduct", "Termination & Dispute Resolution"].map((title, index) => (
              <div key={index} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200 flex items-center gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-slate-700 font-semibold text-base">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">Documents & Information Required</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Employer Details</h3>
              <ul className="text-slate-700 text-base space-y-2 font-medium">
                <li>✔ Business Name & Address</li>
                <li>✔ Registration Proof</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Employee Information</h3>
              <ul className="text-slate-700 text-base space-y-2 font-medium">
                <li>✔ Employee Name & Residential Address</li>
                <li>✔ Core Identification Details</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-black text-blue-600 border-b pb-2">Employment Terms</h3>
              <ul className="text-slate-700 text-base space-y-2 font-medium">
                <li>✔ Designation & Salary Structure</li>
                <li>✔ Company Policies & Leaves</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Blueprint */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Our Simple Process Blueprint</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Discussion", desc: "Understanding corporate operations and employment requirements." },
              { step: 2, title: "Collection", desc: "Gathering structural employer and employee details completely." },
              { step: 3, title: "Drafting", desc: "Preparing a highly customized, robust employment layout matrix." },
              { step: 4, title: "Legal Review", desc: "Reviewing all constituent clauses thoroughly for complete safety." },
              { step: 5, title: "Finalization", desc: "Delivering the finalized agreement parameters ready for deployment." }
            ].map((p) => (
              <div key={p.step} className="p-5 text-center bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-black shadow-sm">
                    {p.step}
                  </div>
                  <h5 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-2">{p.title}</h5>
                </div>
                <p className="text-md text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Footer Metrics */}
      <section className="py-20 lg:py-24 bg-slate-100 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="w-full space-y-8">
              <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-[#071c3d]">Why Choose Fintax Adviser?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {["15+ Years Experience", "500+ Happy Clients", "Expert Legal Specialists", "Customized Document Drafting", "Quick Turnaround Architecture", "Pan India Virtual Operations"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-slate-200 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm shrink-0">✓</div>
                    <span className="text-base font-bold text-slate-800 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-2xl font-black text-white">Fintax Adviser Network</h3>
              <p className="text-slate-300 text-base">Serving startups, MSMEs, Private Limited Companies, LLPs, and technology firms entirely across India.</p>
              <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">CLEAR TERMS. STRONG RELATIONSHIPS. LEGALLY PROTECTED.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions (FAQs)</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}