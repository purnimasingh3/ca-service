import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function PremiumCompanyRegistrationLanding() {
  const HERO_STATS = [
    "12+ Years of Excellence",
    "25+ Dedicated Professionals",
    "200+ Happy Clients",
    "100% Legal Compliance",
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#f3f7ff] via-[#f7faff] to-[#fcfdf2] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Advanced Ambient UI Background Lights */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[160px] opacity-25 pointer-events-none mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* HERO LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                ⚡ Fast & Hassle-Free Registration
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Private Limited
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Company Registration
                </span>
                <span className="text-2xl sm:text-3xl xl:text-4xl block font-bold text-gray-700 mt-2">
                  Consultant in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Turn your idea into a legal business. We help startups, entrepreneurs, SMEs, and foreign investors establish legally compliant businesses with a smooth and hassle-free registration process.
              </p>

              {/* Interactive Micro-Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
                {HERO_STATS.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50 hover:border-blue-200 transition duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-8 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95">
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
            Start Your Business the Right Way with Fintax Advisers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Starting a business in India requires proper legal registration, compliance, and expert guidance. If you are searching for a trusted Company Registration Consultant in Delhi, India, then <strong className="text-blue-600 font-semibold">Fintax Advisers</strong> is your reliable partner. Our mission is to simplify the entire company registration process and help entrepreneurs focus on business growth while we manage legal compliance and documentation.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Benefits of Private Limited Company Registration
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A Private Limited Company is one of the most popular and preferred business structures in India registered under the Companies Act, 2013.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Separate Legal Identity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A Private Limited Company has its own legal identity separate from its directors and shareholders.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Limited Liability Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Shareholders' liability is limited strictly to their investment in the company, safeguarding personal assets.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Better Business Credibility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A legally registered company inherently builds trust among customers, vendors, banks, and prospective investors.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Easy Fundraising</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Private Limited structures are highly preferred by investors, venture capitalists, and institutional funding agencies.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Perpetual Succession</h3>
              <p className="text-slate-600 text-sm leading-relaxed">The business continues to legally exist uninterrupted even if the directors or shareholders change.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/60 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tax Advantages & Ownership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Companies receive various tax planning benefits alongside mechanisms for the easy transfer of ownership via shares.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section id="documents" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Documents Required for Company Registration
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To complete the Private Limited Company Registration process smoothly, our experts at Fintax Advisers assist you in preparing and verifying all necessary paperwork to ensure error-free submission.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">For Directors</h4>
                <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside font-medium">
                  <li>PAN Card</li>
                  <li>Aadhaar Card</li>
                  <li>Passport Size Photograph</li>
                  <li>Address Proof</li>
                  <li>Mobile Number & Email ID</li>
                </ul>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">For Registered Office</h4>
                <ul className="text-xs text-slate-600 mt-2 space-y-1 list-disc list-inside font-medium">
                  <li>Electricity Bill or Utility Bill</li>
                  <li>Rent Agreement</li>
                  <li>NOC from Property Owner</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section id="process" className="py-24 bg-sky-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Step-by-Step Company Registration Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              An expert-guided digital workflow to register your corporate entity online without visiting government offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
            <div className="p-4 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">1</div>
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Consultation</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Suggesting the most suitable structure.</p>
            </div>

            <div className="p-4 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">2</div>
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">DSC & DIN</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Applying for digital certificates & director IDs.</p>
            </div>

            <div className="p-4 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">3</div>
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Name Approval</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Choosing unique and legally approved names.</p>
            </div>

            <div className="p-4 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">4</div>
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">MCA Filing</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Preparing and submitting files to the Ministry.</p>
            </div>

            <div className="p-4 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">5</div>
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Incorporation</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">The ROC issues your official Certificate.</p>
            </div>

            <div className="p-4 text-center bg-white border border-slate-100 rounded-2xl">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-black">6</div>
              <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Tax Forms</h5>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Finalizing your PAN, TAN, and GST setups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors & Industries Tracker */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industries & Business Types We Serve
            </h2>
            <p className="text-xs text-slate-500 mt-1">We facilitate corporate setups for various business categories in Delhi and beyond.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-xs sm:text-sm font-bold text-slate-700">
            {['Startups & IT Firms', 'E-commerce Businesses', 'Consultancy Firms', 'Healthcare Companies', 'Digital Marketing Agencies', 'Import Export Units', 'Manufacturing Businesses', 'Foreign-Owned Companies', 'Educational Institutes', 'Freelancers & Professionals'].map((sector) => (
              <div key={sector} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-blue-400 transition-colors">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Matrix & Additional Services */}
      <section className="py-20 lg:py-24 bg-slate-50 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose Us */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Businesses Choose Fintax Advisers
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "12+ Years Industry Experience",
                  "25+ Professional Team Members",
                  "200+ Happy Clients Globally",
                  "Fast & Hassle-Free Approvals",
                  "Affordable & Transparent Pricing",
                  "100% Legal Compliance Support"
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl shadow-xs hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">
                      ✓
                    </div>
                    <span className="text-sm font-medium text-slate-900 tracking-wide leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-200 max-w-md">
                Hiring professional company registration consultants helps businesses save time, avoid legal syntax errors, ensure compliance, and obtain complete expert guidance.
              </p>
            </div>

            {/* Right Column: Additional Corporate Services Card */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block">
                  Complete Legal & Financial Support
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Additional Services We Offer
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'GST Registration & Filing',
                  'Trademark Registration',
                  'LLP Registration Setup',
                  'ROC Annual Compliances',
                  'Income Tax Filing (ITR)',
                  'Accounting & Bookkeeping',
                  'Payroll Management Services',
                  'Startup India Registration',
                  'Business Consultancy Support',
                  'PAN & TAN Structuring'
                ].map((srv) => (
                  <div
                    key={srv}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500/40 hover:bg-slate-100 transition-all duration-200"
                  >
                    {srv}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How many directors are required for registration?", a: "A minimum of 2 directors are required for Private Limited Company Registration." },
              { q: "What is the minimum capital requirement?", a: "There is no minimum capital requirement for registering a company in India." },
              { q: "How long does company registration take?", a: "Usually, the entire process takes about 7-15 working days." },
              { q: "Can NRIs register companies in India?", a: "Yes, NRIs and foreign nationals can legally register and open companies in India." },
              { q: "What are ROC compliances?", a: "ROC compliances include annual return filing and mandatory legal company compliance documentation submitted to the Registrar of Companies." },
              { q: "What do DSC and DIN stand for?", a: "DSC stands for Digital Signature Certificate (used for online MCA filing), and DIN means Director Identification Number issued to company directors." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-slate-900 text-base">{idx + 1}. {faq.q}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}