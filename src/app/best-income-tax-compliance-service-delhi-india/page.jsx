import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.incomeTaxCompliance;

export default function IncomeTaxComplianceLanding() {
  const HERO_STATS = [
    "ITR Filing (Timely & Accurate)",
    "Smart Tax Planning",
    "TDS Calculation & Filing",
    "Expert Notice Support",
  ];

  const faqs = [
    { 
      q: "What is Income Tax Compliance?", 
      a: "Income Tax Compliance refers to meeting tax-related legal obligations such as filing returns, paying taxes where applicable, maintaining records, and complying with notices under the Income-tax Act, 1961." 
    },
    { 
      q: "Is filing an Income Tax Return enough for compliance?", 
      a: "Not always. Depending on the taxpayer's circumstances, compliance may also include advance tax, TDS obligations, maintaining records, and responding to departmental notices." 
    },
    { 
      q: "Can startups benefit from professional tax compliance services?", 
      a: "Yes. Proper tax compliance helps startups maintain financial discipline and supports future fundraising and due diligence." 
    },
    { 
      q: "Do you assist with Income Tax notices?", 
      a: "Yes. We provide professional guidance for reviewing notices and preparing appropriate responses based on the available facts and applicable law." 
    },
    { 
      q: "Do you provide tax planning?", 
      a: "Yes. We offer tax planning guidance that aligns with applicable tax regulations and business objectives." 
    },
    { 
      q: "Why choose Fintax Adviser?", 
      a: "We provide comprehensive income tax compliance support with a focus on accuracy, transparency, timely service, and practical business solutions." 
    }
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
                ⚡ Stay Compliant · Avoid Penalties · Focus on Growth
              </span>

              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Income Tax Compliance
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  & Professional Tax Filing Support
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Looking for reliable Income Tax Compliance Services in India? Fintax Adviser offers professional income tax compliance solutions for startups, MSMEs, private limited companies, LLPs, partnership firms, proprietorships, trusts, NGOs, and individuals across India.
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
            What is Income Tax Compliance?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Income Tax Compliance refers to fulfilling the legal obligations under the Income-tax Act, 1961, including maintaining books of accounts (where applicable), filing income tax returns, paying advance tax where required, deducting and depositing TDS (if applicable), and complying with notices or assessments issued by the Income Tax Department. Proper compliance helps businesses avoid penalties, reduce tax risks, and maintain financial transparency.
          </p>
        </div>
      </section>

      {/* Services Breakdown Grid Section */}
      <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Income Tax Compliance Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Practical, compliant, and business-focused tax support tailored to your specific corporate requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ITR Filing */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Income Tax Return (ITR) Filing</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Assistance with preparing and filing income tax returns based on applicable provisions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Business ITR</span>
                <span>✓ Individual ITR</span>
                <span>✓ LLP & Partnership</span>
                <span>✓ Company & Trust</span>
              </div>
            </div>

            {/* Tax Computation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Computation & Evaluation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Accurate computation of taxable income after reviewing financial records and deductions.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Income Calculation</span>
                <span>✓ Liability Estimate</span>
                <span>✓ Deduction Review</span>
                <span>✓ Exemption Analysis</span>
              </div>
            </div>

            {/* Advance Tax & Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Advance Tax & Notice Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Strategic monitoring for advance payments and handling complex department notices.</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-semibold text-slate-500 border-t border-slate-100 pt-4">
                <span>✓ Due Date Tracking</span>
                <span>✓ Notice Review</span>
                <span>✓ Reply Drafting</span>
                <span>✓ TDS Compliance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Businesses Need It Section */}
      <section id="why-compliance" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Income Tax Compliance is Important
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Fulfilling statutory obligations allows businesses to build institutional longevity and eliminate sudden compounding legal vulnerabilities.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  "Your Compliance, Our Responsibility. Your Growth, Our Priority."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Risk Mitigation</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Significantly reduce the risk of structural legal penalties and interest obligations.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Corporate Credibility</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Build strong baseline documentation credibility with potential banks and institutional investors.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Audit Alignment</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Maintain comprehensive historical record logs to efficiently support formal standard corporate audits.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <div className="font-bold text-sm uppercase tracking-wider text-blue-600">Strategic Optimization</div>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">Enable smarter long-term structural tax planning through organized tracking metrics.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sectors Served Matrix */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Who Can Benefit from Our Services?
            </h2>
            <p className="text-sm text-slate-500 mt-1">Providing professional tax services across various corporate operational setups.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-bold text-slate-700">
            {['Startups & MSMEs', 'Private Limited Cos', 'LLPs & Partnerships', 'Proprietorships', 'Freelancers / Consultants', 'NGOs & Trusts', 'Manufacturers & Exporters', 'Service Providers'].map((sector) => (
              <div key={sector} className="p-4 bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix Footer Block */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose Fintax Adviser */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Fintax Adviser?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Experienced Tax Professionals",
                  "Customized Tax Solutions",
                  "Transparent Compliance Process",
                  "Timely Filing & Milestones",
                  "Confidential Data Handling",
                  "Pan India Services Network"
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

            {/* Right Box: Process Tracking */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Compliance Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Step 1 - Consultation:</strong> Understanding your business structure and specific compliance requirements.</p>
                <p><strong>Step 2 - Document Review:</strong> Verifying core profiles including P&L Statements, Balance Sheets, PAN, and Registration papers.</p>
                <p><strong>Step 3 - Tax Computation:</strong> Preparing core calculations based on applicable provisions and verified data logs.</p>
                <p><strong>Step 4 - Return Preparation:</strong> Formatting clear tax returns aligned with current operational regulations.</p>
                <p><strong>Step 5 - Filing & Support:</strong> Final submission handling within statutory timelines alongside ongoing query support.</p>
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