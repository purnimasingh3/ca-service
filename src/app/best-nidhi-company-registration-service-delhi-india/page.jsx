import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

export const metadata = servicesMetadata.nidhiCompanyRegistration;

export default function NidhiCompanyRegistrationLanding() {
  const HERO_STATS = [
    "15+ Years Experience",
    "500+ Happy Clients",
    "Separate Legal Entity",
    "Limited Liability Protection",
  ];
  const faqs = [
    { q: "What is the minimum number of members required in a Nidhi Company?", a: "A Nidhi Company requires a minimum of seven shareholders at the time of incorporation." },
    { q: "Can a Nidhi Company provide loans to the public?", a: "No. A Nidhi Company can provide loans only to its members." },
    { q: "Is RBI approval required for Nidhi Company registration?", a: "Generally, Nidhi Companies are regulated under the Companies Act and specific Nidhi Rules, but compliance requirements must be followed carefully." },
    { q: "Can a Nidhi Company accept deposits?", a: "Yes, deposits can be accepted from members subject to applicable rules and regulations." },
    { q: "How long does Nidhi Company registration take?", a: "The registration timeline depends on swift documentation delivery and MCA processing workflows and structural approvals." },
    { q: "Why choose the Best Nidhi Company Registration CA Firm in Delhi India?", a: "Professional registration ensures total statutory legal compliance, smooth incorporation steps, and proper internal corporate business structuring." }
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
                ⚡ BUILD TRUST · ENCOURAGE SAVINGS · EMPOWER MEMBERS
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Best Nidhi Company Registration CA Firm
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  in Delhi, India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                <strong>SAVE TO GROW. GROW TOGETHER.</strong><br />
                Register your Nidhi Company and promote savings while providing financial support to members. Professional Nidhi Company Registration Services with Expert CA Support.
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
                  Book a Free Consultation
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
            Professional Nidhi Company Registration Services by Fintax Adviser
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Looking for the Best Nidhi Company Registration CA Firm in Delhi India? <strong className="text-blue-600 font-semibold">Fintax Adviser</strong> provides complete Nidhi Company Registration services, legal documentation, compliance support, MCA filings, and business advisory services for entrepreneurs looking to establish a Nidhi Company in India.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2">
            A Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under the Companies Act, 2013. Its primary objective is to encourage savings and provide financial assistance among its members. Nidhi Companies are popular for promoting thrift, savings habits, and mutual financial support within a community.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-semibold pt-2">
            With 15+ Years of Experience and 500+ Happy Clients Served, Fintax Adviser is trusted as the Best Nidhi Company Registration CA Firm in Delhi India for hassle-free registration and compliance services.
          </p>
        </div>
      </section>

      {/* Deep Dive Definition Box */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              What is a Nidhi Company? | Best Nidhi Company Registration CA Firm in Delhi India
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A Nidhi Company is a public company incorporated under the Companies Act, 2013 with the objective of cultivating savings among its members and providing loans exclusively to members. The Best Nidhi Company Registration CA Firm in Delhi India helps entrepreneurs establish a legally compliant Nidhi Company while ensuring adherence to regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Services Offered by the Best Nidhi Company Registration CA Firm
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              End-to-end statutory registration architecture designed by our corporate experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Nidhi Company Registration", desc: "Complete incorporation and registration services." },
              { num: "02", title: "Digital Signature Certificate (DSC)", desc: "Application and processing of Digital Signatures." },
              { num: "03", title: "Director Identification Number (DIN)", desc: "DIN application support for directors." },
              { num: "04", title: "Name Approval Services", desc: "Assistance in obtaining company name approval." },
              { num: "05", title: "MOA & AOA Drafting", desc: "Preparation of Memorandum and Articles of Association." },
              { num: "06", title: "PAN & TAN Registration", desc: "Tax registration support for newly incorporated companies." },
              { num: "07", title: "Annual Compliance Services", desc: "ROC filings and statutory compliance management." },
              { num: "08", title: "Business Advisory Services", desc: "Expert guidance on Nidhi Company operations and compliance." }
            ].map((srv, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {srv.num}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Key Features of a Nidhi Company
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-bold text-slate-700">
            {[
              "Encourages Savings Among Members",
              "Loans Provided Only to Members",
              "Easy Formation Process",
              "Regulated Under Companies Act, 2013",
              "Limited Liability Protection",
              "Separate Legal Entity",
              "Perpetual Succession"
            ].map((feat, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:border-blue-400 transition-colors flex items-center justify-center text-xs sm:text-sm">
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="why-nidhi" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Choosing the Best Nidhi Company Registration CA Firm
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Registering through an experienced CA firm ensures perfect structural modeling and helps you navigate structural benefits with complete security.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
                  "✔ Promotes savings habits · ✔ Financial support within community · ✔ Easy management & operation · ✔ Compliant with Companies Act, 2013 · Ideal for financial growth & inclusion"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Promote Savings and Financial Discipline</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">A Nidhi Company encourages members to save regularly and participate in mutual financial growth.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Separate Legal Identity</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The company enjoys an independent legal status distinct from its members.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Limited Liability Protection</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Members' liability is limited to their shareholding.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Easy Management Structure</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The Best Nidhi Company Registration CA Firm helps create an efficient governance structure.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Better Credibility</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Registered Nidhi Companies enjoy enhanced trust among members and stakeholders.</p>
              </div>
              <div className="p-5 border border-slate-200 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600">Perpetual Existence</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">The company continues regardless of changes in membership.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Value Matrix & Document Checklist */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Why Choose the Best Nidhi Company Registration CA Firm */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose the Best Nidhi Company Registration CA Firm in Delhi India?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  { t: "Expert Registration Assistance", d: "Professional guidance from experienced Chartered Accountants." },
                  { t: "MCA Compliance Support", d: "End-to-end support for statutory compliance requirements." },
                  { t: "Fast Registration Process", d: "Efficient handling of incorporation and approvals." },
                  { t: "Affordable Pricing", d: "Transparent pricing with no hidden charges." },
                  { t: "Ongoing Compliance Services", d: "Annual filing and regulatory compliance assistance." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:bg-blue-50 transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-700 font-bold text-xs shrink-0">✓</div>
                      <span className="text-sm font-bold text-slate-900">{item.t}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-7">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-300">
                <h4 className="text-sm font-bold text-slate-900">Advantages of Registering Through Fintax Adviser:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <span>✓ Separate Legal Entity</span>
                  <span>✓ Limited Liability Protection</span>
                  <span>✓ Better Credibility</span>
                  <span>✓ Easy Member Financial Operations</span>
                  <span>✓ Structured Governance</span>
                  <span>✓ Long-Term Continuity</span>
                  <span>✓ Compliance Support</span>
                  <span>✓ Professional Registration Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Document Checklist Box */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block mb-2">
                  KYC Checklist
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Documents Required for Registration
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-1">Identity Proof of Directors</h5>
                  <p className="text-slate-600">PAN Card · Aadhaar Card · Passport (if applicable)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-1">Address Proof of Directors</h5>
                  <p className="text-slate-600">Utility Bill · Bank Statement · Driving License · Voter ID</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-1">Registered Office Address Proof</h5>
                  <p className="text-slate-600">Electricity Bill · Rent Agreement · Property Ownership Documents · NOC from Property Owner</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-bold text-slate-900 mb-1">Business Information Required</h5>
                  <p className="text-slate-600">Proposed Company Name · Business Objectives · Share Capital Details · Director Information</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Eligibility & Step-by-Step Registration Process */}
      <section className="py-24 bg-sky-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Eligibility Sub-Block */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
              Eligibility for Establishing a Nidhi Company
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Minimum 7 Shareholders:</strong> A minimum of seven shareholders is required at incorporation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Minimum 3 Directors:</strong> At least three directors are necessary for incorporation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Public Limited Structure:</strong> Must be incorporated as a public company under the Act.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Mandatory Suffix Name:</strong> The company name must end strictly with "Nidhi Limited."</span>
              </div>
            </div>
          </div>

          {/* Registration Flow Steps Block */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">Registration Process Steps</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { s: "Step 1", n: "Initial Consultation", d: "Understanding business objectives and eligibility." },
                { s: "Step 2", n: "DSC & DIN Application", d: "Obtaining Digital Signature Certificates and DINs." },
                { s: "Step 3", n: "Name Reservation", d: "Approval of the company name through MCA." },
                { s: "Step 4", n: "MOA & AOA Preparation", d: "Drafting structural incorporation documents." },
                { s: "Step 5", n: "Company Incorporation", d: "Filing registration documents with MCA workflows." },
                { s: "Step 6", n: "Certificate of Incorporation", d: "Issuance of certified incorporation license." },
                { s: "Step 7", n: "PAN, TAN & Compliance Setup", d: "Completion of critical post-registration formalities." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{step.s}</span>
                  <h4 className="font-bold text-slate-900 text-base mt-2 mb-1">{step.n}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Extended Trust Proof Segment */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Fintax Adviser is the Best Nidhi Company Registration CA Firm in Delhi India
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left pt-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><h5 className="font-bold text-xs text-blue-600">15+ Years Industry Experience</h5><p className="text-[11px] text-slate-500 mt-0.5">Extensive expertise in company registration.</p></div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><h5 className="font-bold text-xs text-blue-600">500+ Happy Clients Served</h5><p className="text-[11px] text-slate-500 mt-0.5">Trusted by startups and entrepreneurs.</p></div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><h5 className="font-bold text-xs text-blue-600">Expert CA & Compliance Team</h5><p className="text-[11px] text-slate-500 mt-0.5">Dedicated compliance monitoring professionals.</p></div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><h5 className="font-bold text-xs text-blue-600">End-to-End Support</h5><p className="text-[11px] text-slate-500 mt-0.5">From incorporation to annual compliance filings.</p></div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><h5 className="font-bold text-xs text-blue-600">Pan India Services</h5><p className="text-[11px] text-slate-500 mt-0.5">Online registration assistance across India.</p></div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200"><h5 className="font-bold text-xs text-blue-600">Transparent Pricing</h5><p className="text-[11px] text-slate-500 mt-0.5">Affordable and competitive service packages.</p></div>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section id="faqs" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              FAQs - Best Nidhi Company Registration CA Firm in Delhi India
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}