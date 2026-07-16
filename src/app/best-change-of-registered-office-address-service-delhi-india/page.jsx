import React from 'react';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { servicesMetadata } from "@/data/servicesMetadata";
import FAQAccordion from '../components/FAQAccordion';

// Using metadata reference from services metadata
export const metadata = servicesMetadata.changeRegisteredOffice || {
  title: "Change of Registered Office Address Services in India",
  description: "Complete ROC Filing, MCA Approval & Company Address Change Compliance Solutions by Agreetech."
};

export default function RegisteredOfficeChangeLanding() {
  const HERO_STATS = [
    "100% Legal & MCA Compliant",
    "Fast & Reliable Timelines",
    "Expert Handling by CAs",
    "Zero Risk of Penalties & Rejections",
  ];

  const faqs = [
    { 
      q: "What is a registered office address in a company?", 
      a: "It is the official legal address of a company registered with the Ministry of Corporate Affairs (MCA). It is used for receiving all government notices, legal correspondence, and regulatory updates." 
    },
    { 
      q: "Is MCA approval required for address change?", 
      a: "Yes, all address changes must be properly approved by the board/shareholders and officially filed and approved through ROC/MCA portals." 
    },
    { 
      q: "How long does the process take?", 
      a: "The duration depends on the type of change. Shifting within the same city or local limits is fastest, whereas shifting across states (inter-state changes) requires Regional Director (RD) approval and takes longer." 
    },
    { 
      q: "Can Agreetech handle inter-state address changes?", 
      a: "Yes. We manage complete approval-based inter-state relocations, including drafting resolutions, filing petitions with the Regional Director, publishing newspaper advertisements, and coordinating with the ROC." 
    },
    { 
      q: "What happens if I don’t update the registered office?", 
      a: "Failing to update your address may lead to heavy statutory penalties, rejection of legal filings, loss of corporate credibility, issues in banking/GST validations, and missed legal notices." 
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
                ⚡ Complete ROC Filing & MCA Approval
              </span>

              <h1 className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#071c3d] tracking-tight !leading-[1.15]">
                Change of Registered Office Address
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block mt-2">
                  Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-2">
                Agreetech provides end-to-end professional assistance for changing the registered office address of Private Limited Companies, OPCs, LLPs, Section 8 Companies, and startups across India. Secure a fully compliant, legally valid, and error-free transition without delays.
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
                <Link href="#get-free-consultation" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 text-white px-6 py-4 sm:py-5 rounded-xl font-bold text-base shadow-xl shadow-blue-600/20 active:scale-95 text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* HERO RIGHT PREMIUM FORM */}
            <div id="get-free-consultation" className="lg:col-span-5 w-full max-w-md mx-auto">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Intro Section */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What is Change of Registered Office Address?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Welcome to <strong className="text-blue-600 font-semibold">Agreetech</strong>. The registered office of a company is its official legal address recorded with the Ministry of Corporate Affairs (MCA). It is used for receiving all government notices, legal correspondence, statutory communications, and regulatory updates.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The change of registered office address refers to the legal process of updating this address with the Registrar of Companies (ROC). Any change must be properly approved, documented, and filed within the prescribed timeline.
          </p>
          
          <div className="pt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Why Do Companies Change Their Registered Office?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <h4 className="font-bold text-blue-600 text-sm mb-1">Growth & Expansion</h4>
                <p className="text-sm text-slate-500">Business scaling, operations expansion, or shifting to better commercial hubs.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <h4 className="font-bold text-blue-600 text-sm mb-1">Cost & Restructuring</h4>
                <p className="text-sm text-slate-500">Office restructuring, consolidation of branches, or strategic cost optimization plans.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <h4 className="font-bold text-blue-600 text-sm mb-1">Regulatory Shifting</h4>
                <p className="text-sm text-slate-500">Relocation for access to better infrastructure or local corporate compliance benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Address in Company Law */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Importance of Registered Office Address in Company Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The registered office is not just a mailing address—it is the legal identity of a company in the eyes of the government. It formally dictates and determines:
              </p>
              <ul className="space-y-3">
                {[
                  "Jurisdiction of the specific ROC office",
                  "Form of entry for legal notices and administrative government circulars",
                  "Physical compliance verification and site check location",
                  "Official inspection point for corporate and regulatory authorities",
                  "Official communication address for all direct litigation matters"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <span className="text-blue-600 mt-1">📌</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/80 border border-red-100 p-8 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-red-950 flex items-center gap-2">
                ⚠️ Consequences of Non-Compliance
              </h3>
              <p className="text-sm text-red-900 leading-relaxed">
                If the registered office address is not updated correctly or on time, it may lead to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-red-800">
                <span>✕ Heavy MCA Penalties</span>
                <span>✕ Rejection of Statutory Filings</span>
                <span>✕ Legal Notices & Complications</span>
                <span>✕ GST & Tax Mismatches</span>
                <span>✕ Bank Verification Issues</span>
                <span>✕ Loss of Corporate Credibility</span>
              </div>
              <p className="text-sm text-red-700 pt-2 border-t border-red-200/50">
                Agreetech ensures your company remains fully compliant and legally protected during the entire transition process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Registered Office Address Change */}
      <section id="types" className="py-24 bg-white border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Types of Registered Office Address Change
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Understanding the type of change is critical because each category has different legal filing and documentation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Type 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Within Same City or Local Limits</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">The simplest form of relocation, shifting office within local city or ROC boundaries.</p>
              <div className="space-y-2 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <div className="flex justify-between"><span>Speed:</span> <span className="text-blue-600">Fast Process</span></div>
                <div className="flex justify-between"><span>Required Form:</span> <span className="text-slate-700">MCA Form INC-22</span></div>
                <div className="flex justify-between"><span>Documents:</span> <span className="text-slate-700">Minimal Required</span></div>
                <div className="flex justify-between"><span>ROC Change:</span> <span className="text-slate-700">No Change</span></div>
              </div>
            </div>

            {/* Type 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Within Same State but Outside Local Limits</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Shifting the office to a different location in the same state that alters the ROC jurisdiction.</p>
              <div className="space-y-2 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <div className="flex justify-between"><span>Speed:</span> <span className="text-blue-600">Moderate Duration</span></div>
                <div className="flex justify-between"><span>Resolutions:</span> <span className="text-slate-700">Board Resolution required</span></div>
                <div className="flex justify-between"><span>ROC Filing:</span> <span className="text-slate-700">Requires MGT-14 & INC-22</span></div>
                <div className="flex justify-between"><span>Jurisdiction:</span> <span className="text-slate-700">Might shift ROC limits</span></div>
              </div>
            </div>

            {/* Type 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/60 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">From One State to Another (Inter-State)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">The most complex transition process, shifting headquarters across physical state borders.</p>
              <div className="space-y-2 text-sm font-semibold text-slate-500 border-t border-slate-200/60 pt-4">
                <div className="flex justify-between"><span>Speed:</span> <span className="text-blue-600">Multi-Level Approvals</span></div>
                <div className="flex justify-between"><span>Key Approval:</span> <span className="text-slate-700">Regional Director (RD)</span></div>
                <div className="flex justify-between"><span>Requirement:</span> <span className="text-slate-700">Special Resolution & Ad</span></div>
                <div className="flex justify-between"><span>Constitutions:</span> <span className="text-slate-700">Altered MOA / Articles</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Complete Services Breakdown */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Our Complete Service Capabilities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Expert-guided compliance from filing to post-approval record updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Legal Documentation Support</h4>
              <p className="text-slate-600 text-sm mb-4">Preparation of board resolutions, special resolutions, NOCs, and leases.</p>
              <div className="text-sm font-semibold text-slate-500">✓ Board & Shareholder Minutes</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">ROC Filing & MCA Compliance</h4>
              <p className="text-slate-600 text-sm mb-4">Drafting and submitting precise Form INC-22, MGT-14, and RD petitions.</p>
              <div className="text-sm font-semibold text-slate-500">✓ Error-free submission accuracy</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Address Validation Support</h4>
              <p className="text-slate-600 text-sm mb-4">Verifying property ownership documents, NOC validity, and utility bill matching.</p>
              <div className="text-sm font-semibold text-slate-500">✓ Proper address format compliance</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Inter-State Relocations</h4>
              <p className="text-slate-600 text-sm mb-4">Handling newspaper publication alerts, RD hearings, and complex MOA alterations.</p>
              <div className="text-sm font-semibold text-slate-500">✓ Multi-level administrative control</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Compliance Risk Management</h4>
              <p className="text-slate-600 text-sm mb-4">Eliminating risks of late filing fees, jurisdictional errors, and office registration rejections.</p>
              <div className="text-sm font-semibold text-slate-500">✓ Mitigation of MCA penalty warnings</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Post-Change Assistance</h4>
              <p className="text-slate-600 text-sm mb-4">Assisting you with updates across tax portals, GST registration certificates, and banks.</p>
              <div className="text-sm font-semibold text-slate-500">✓ Complete post-approvals updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-24 bg-white border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Documents Required for Registered Office Change
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Keep these records handy to ensure a frictionless verification process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-blue-600 mb-4 flex items-center gap-2">📂 Company Documents</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• Certificate of Incorporation</li>
                <li>• Company Memorandum of Association (MOA)</li>
                <li>• Articles of Association (AOA)</li>
                <li>• PAN card of the Company</li>
                <li>• Existing MCA/ROC filing history</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-blue-600 mb-4 flex items-center gap-2">🏠 Address Proof Documents</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• Registered rent agreement / lease deed</li>
                <li>• Proof of ownership (if property is owned)</li>
                <li>• Recent utility bill (Electricity/Water/Gas)</li>
                <li>• Signed No Objection Certificate (NOC)</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-blue-600 mb-4 flex items-center gap-2">📝 Internal Documents</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• Board resolution authorizing relocation</li>
                <li>• Shareholder resolution (if required)</li>
                <li>• Signed minutes of meeting drafts</li>
                <li>• Updated details of active directors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value Matrix Footer Block */}
      <section className="py-20 lg:py-24 bg-slate-100 text-black border-t border-slate-200 w-full clear-both">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Box: Why Choose Agreetech */}
            <div className="w-full space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Why Choose Agreetech?
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "100% MCA Compliant Filing",
                  "Expert CA & Legal Team Support",
                  "Pan India Compliance Coverage",
                  "Secure & Confidential Systems",
                  "Affordable & Transparent Pricing",
                  "Dedicated Relationship Support"
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
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">Our Service Delivery Process</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p><strong>Step 1 - consultation & Eligibility:</strong> Discussing your change type and deciding eligibility parameters.</p>
                <p><strong>Step 2 - Document Gathering:</strong> Securing utility bills, signed NOCs, and ownership assets.</p>
                <p><strong>Step 3 - Board Approvals:</strong> Formulating valid board/shareholder meetings and passing legal resolutions.</p>
                <p><strong>Step 4 - MCA Filing:</strong> Submission of error-free Form INC-22/MGT-14 files on the central portal.</p>
                <p><strong>Step 5 - Post-Compliance Support:</strong> Validating address changes on registrations such as GST, PAN, and Bank books.</p>
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