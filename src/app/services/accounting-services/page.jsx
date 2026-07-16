import Image from "next/image";
import {BadgeCheck,Calculator,BarChart3,ShieldCheck,ArrowRight,} from "lucide-react";
import Link from "next/link";
export default function AccountingServicesPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[650px] overflow-hidden">

        <Image
          src="/services/accounting.avif"
          alt="accounting"
          fill
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

        {/* Content */}

        <div className="absolute inset-0 flex items-center px-6 md:px-16">

          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[4px] text-blue-300 mb-5 text-sm">

              Professional Accounting Services

            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">

              Smart Accounting
              Solutions

            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-9 mb-10">

              Professional bookkeeping, financial reporting
              and accounting services designed for startups,
              enterprises and growing businesses.

            </p>

            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-lg font-semibold">

              Get Consultation

            </Link>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="relative">

            <Image
              src="/services/office.avif"
              alt="office"
              width={700}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

            {/* Floating Stats */}

            <div className="absolute -bottom-10 -right-10 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">

              <h2 className="text-5xl font-bold text-blue-600 mb-2">

                1200+

              </h2>

              <p className="text-gray-500 text-lg">

                Businesses Managed

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-5">

              About Service

            </p>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-8">

              Reliable Accounting &
              Financial Management

            </h2>

            <p className="text-lg text-gray-500 leading-9 mb-8">

              Our accounting services simplify financial
              management with accurate bookkeeping,
              expense tracking and professional reporting.

            </p>

            <p className="text-lg text-gray-500 leading-9 mb-10">

              We help businesses maintain transparent
              financial records while improving efficiency
              and long-term financial growth.

            </p>

            {/* FEATURES */}

            <div className="space-y-5">

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

                <Calculator className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                    Bookkeeping Services

                  </h3>

                  <p className="text-gray-500 leading-7">

                    Accurate bookkeeping and expense
                    management for businesses.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

                <BarChart3 className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                    Financial Reporting

                  </h3>

                  <p className="text-gray-500 leading-7">

                    Detailed reports and insights to
                    improve financial decisions.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

                <ShieldCheck className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                    Secure Compliance

                  </h3>

                  <p className="text-gray-500 leading-7">

                    Ensure compliance with financial
                    regulations and standards.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#2563eb] rounded-[40px] p-14 md:p-20 text-white flex flex-col lg:flex-row justify-between items-center gap-10">

          <div>

            <p className="uppercase tracking-[4px] text-blue-200 text-sm mb-4">

              Need Expert Support?

            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">

              Simplify Your
              Business Accounting

            </h2>

            <p className="text-blue-100 text-lg leading-8 max-w-2xl">

              Connect with our accounting experts today
              and manage your finances professionally.

            </p>

          </div>

          <Link href="/contact-us" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition flex items-center gap-3">

            Contact Us

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>

      </section>

    </main>
  );
}