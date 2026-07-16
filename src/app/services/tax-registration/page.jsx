import Image from "next/image";
import {
  BadgeCheck,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function TaxRegistrationPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[650px] overflow-hidden">

        {/* Background Image */}

        <Image
          src="/services/tax.avif"
          alt="tax"
          fill
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

        {/* Content */}

        <div className="absolute inset-0 flex items-center px-6 md:px-16">

          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[4px] text-blue-300 mb-5 text-sm">

              Professional Taxation Services

            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">

              Tax Registration
              & Compliance

            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-9 mb-10">

              Simplify your business taxation with
              professional GST registration, filing and
              compliance solutions trusted by businesses
              across India.

            </p>

            <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-lg font-semibold">

              Get Free Consultation

            </Link>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <Image
              src="/experiance/office.avif"
              alt="office"
              width={700}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-10 -right-10 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">

              <h2 className="text-5xl font-bold text-blue-600 mb-2">

                15+

              </h2>

              <p className="text-gray-500 text-lg">

                Years Experience

              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-5">
              About Service
            </p>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
              Premium Taxation &
              Registration Solutions
            </h2>

            <p className="text-lg text-gray-500 leading-9 mb-8">

              Our professional taxation services help
              businesses stay compliant with modern tax
              regulations while simplifying GST filings,
              registrations and documentation processes.

            </p>

            <p className="text-lg text-gray-500 leading-9 mb-10">

              We provide complete support for startups,
              enterprises and growing companies with
              accurate tax consultation and expert
              compliance management.

            </p>

            {/* FEATURES */}

            <div className="space-y-5">

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

                <BadgeCheck className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                    GST Registration

                  </h3>

                  <p className="text-gray-500 leading-7">

                    Fast and hassle-free GST registration
                    services for all business types.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

                <FileText className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                    Tax Filing Support

                  </h3>

                  <p className="text-gray-500 leading-7">

                    Professional filing and documentation
                    support with complete accuracy.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

                <ShieldCheck className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                    Compliance Management

                  </h3>

                  <p className="text-gray-500 leading-7">

                    Ensure complete compliance with
                    government regulations and taxation laws.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="pb-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#2563eb] rounded-[40px] p-14 md:p-20 text-white flex flex-col lg:flex-row justify-between items-center gap-10">

          <div>

            <p className="uppercase tracking-[4px] text-blue-200 text-sm mb-4">

              Need Professional Help?

            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">

              Let's Simplify Your
              Business Taxation

            </h2>

            <p className="text-blue-100 text-lg leading-8 max-w-2xl">

              Connect with our experts today and get
              premium taxation and compliance solutions
              tailored for your business.

            </p>

          </div>

          <Link
            href="/contact-us"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center gap-3"
          >

            Contact Us

            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}