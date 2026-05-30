export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 text-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Please read these Terms and Conditions carefully before using our
            website or engaging our professional services.
          </p>
          <p className="mt-4 text-sm text-blue-700">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Fintax Adviser
            </h2>
            <p className="text-gray-600 leading-8">
              By accessing our website or using our services, you agree to be
              bound by these Terms and Conditions. If you do not agree with any
              part of these terms, please discontinue use of our website and
              services immediately.
            </p>
          </section>
          <br/>

          {/* About */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              About Fintax Adviser
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Income Tax Return Filing",
                "GST Registration & Compliance",
                "Company Registration",
                "MSME / Udyam Registration",
                "Accounting & Bookkeeping",
                "Audit & Assurance Services",
                "ROC Compliance",
                "Tax Planning & Advisory",
                "Financial Consulting",
                "Business Registration Services",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-100 border rounded-lg p-4"
                >
                  {service}
                </div>
              ))}
            </div>
          </section>
          <br/>

          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-8">
              By accessing our website, submitting forms, requesting services,
              or communicating with Fintax Adviser, you acknowledge that you
              have read, understood, and accepted these Terms and Conditions.
            </p>
          </section>
          <br/>

          {/* Website Usage */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Use of Website
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">
                You shall not:
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>• Use the website for unlawful activities.</li>
                <li>• Attempt unauthorized access to systems or data.</li>
                <li>• Upload malware, viruses, or harmful code.</li>
                <li>• Copy or distribute website content without permission.</li>
              </ul>
            </div>
          </section>
          <br/>

          {/* Service Engagement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Service Engagement
            </h2>

            <p className="text-gray-600 mb-4">
              Information provided on this website is for general informational
              purposes only and does not constitute professional legal, tax,
              financial, or accounting advice.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>✓ Receipt of required documents</li>
              <li>✓ Verification of information</li>
              <li>✓ Acceptance of service request</li>
              <li>✓ Payment of applicable fees</li>
            </ul>
          </section>
          <br/>

          {/* Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Client Responsibilities
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-5">
                Provide accurate and complete information.
              </div>

              <div className="border rounded-xl p-5">
                Submit genuine and valid documents.
              </div>

              <div className="border rounded-xl p-5">
                Respond promptly to requests.
              </div>

              <div className="border rounded-xl p-5">
                Comply with applicable laws and regulations.
              </div>
            </div>
          </section>
          <br/>

          {/* Fees */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Fees & Payments
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• All service fees are communicated in advance.</li>
              <li>• Payments are generally non-refundable after work begins.</li>
              <li>• Government fees are separate unless specified.</li>
              <li>• Services may be suspended in case of non-payment.</li>
            </ul>
          </section>
          <br/>

          {/* Refund */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Refund Policy
            </h2>

            <div className="bg-yellow-50 rounded-xl p-6">
              <p className="font-medium mb-4">
                Refunds may not be provided for:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>• Government fees and statutory charges</li>
                <li>• Services already completed</li>
                <li>• Client-caused delays</li>
                <li>• Incorrect information provided by clients</li>
              </ul>
            </div>
          </section>
          <br/>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Confidentiality
            </h2>

            <div className="bg-indigo-50 rounded-xl p-6">
              <p className="text-gray-700 leading-8">
                We maintain strict confidentiality regarding client
                information, taxation data, business records, and financial
                documents. Information is disclosed only when legally required,
                authorized by the client, or necessary for service execution.
              </p>
            </div>
          </section>
          <br/>

          {/* IP Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Intellectual Property Rights
            </h2>

            <p className="text-gray-600 leading-8">
              All content including text, graphics, logos, designs, images,
              and materials are the intellectual property of Fintax Adviser.
              Unauthorized reproduction or distribution is strictly prohibited.
            </p>
          </section>
          <br/>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Limitation of Liability
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li>• We do not guarantee government approvals.</li>
                <li>• We do not guarantee error-free website operation.</li>
                <li>• We are not liable for indirect losses.</li>
                <li>• We are not liable for delays caused by authorities.</li>
                <li>• Liability is limited to the fees paid for the service.</li>
              </ul>
            </div>
          </section>
          <br/>

          {/* Third Party */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Third-Party Websites
            </h2>

            <p className="text-gray-600">
              Links to third-party websites are provided for convenience only.
              We are not responsible for their content, privacy practices, or
              policies.
            </p>
          </section>
          <br/>

          {/* Laws */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Compliance with Laws
            </h2>

            <p className="text-gray-600">
              Users must comply with all applicable laws and regulations while
              using our website and services. Any unlawful use is strictly
              prohibited.
            </p>
          </section>
          <br/>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Modification of Terms
            </h2>

            <p className="text-gray-600">
              Fintax Adviser may update these Terms and Conditions at any time.
              Changes become effective immediately upon publication on this
              website.
            </p>
          </section>
          <br/>

          {/* Jurisdiction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Governing Law & Jurisdiction
            </h2>

            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-gray-700">
                These Terms and Conditions shall be governed by the laws of
                India. Any disputes shall be subject to the exclusive
                jurisdiction of courts located in Delhi, India.
              </p>
            </div>
          </section>
          <br/>

          {/* Contact */}
          <section className="bg-blue-50 text-slate-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-3 ">
              <p>📞 +91 99909 24477</p>
              <p>📧 info@fintaxadviser.com</p>
              <p>🌐 www.fintaxadviser.com</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}