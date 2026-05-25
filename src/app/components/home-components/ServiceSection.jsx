import {
  Briefcase,
  FileText,
  Landmark,
  BadgeDollarSign,
  BarChart3,
  ShieldCheck,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";


export default function ServicesSection() {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#f8fafc]">

      {/* ================= HEADING ================= */}

      <div className="text-center mb-20">

        <p className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold tracking-[2px] mb-5">

          OUR SERVICES

        </p>

        <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Comprehensive Services for Startups and Businesses
        </h3>

        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-8">

          Premium taxation, registration and financial
          consulting services designed for startups,
          entrepreneurs and enterprises.

        </p>

      </div>

      {/* ================= CARDS ================= */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {/* CARD 1 */}

        <div className="group bg-white rounded-[35px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

          <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">

            <Briefcase className="w-10 h-10 text-blue-600" />

          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-5">

            Business Setup

          </h3>

          <p className="text-gray-500 leading-8 mb-8">

            Company incorporation and startup setup
            services with complete documentation support.

          </p>

          <Link
            href="/services/business-setup"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
          >

            Read More

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>

        {/* CARD 2 */}

        <div className="group bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] rounded-[35px] p-10 text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] hover:-translate-y-3 transition duration-500">

          <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8">

            <FileText className="w-10 h-10 text-blue-300" />

          </div>

          <h3 className="text-3xl font-bold mb-5">

            Tax Registration

          </h3>

          <p className="text-blue-100 leading-8 mb-8">

            GST registration and taxation compliance
            services for growing businesses.

          </p>

          <Link
            href="/services/tax-registration"
            className="flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all"
          >

            Read More

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>

        {/* CARD 3 */}

        <div className="group bg-white rounded-[35px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

          <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">

            <Landmark className="w-10 h-10 text-blue-600" />

          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-5">

            Fundraising

          </h3>

          <p className="text-gray-500 leading-8 mb-8">

            Investor connections and funding support
            for startups and enterprises.

          </p>

          <Link
            href="/services/fundraising"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
          >

            Read More

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>

        {/* CARD 4 */}

        <div className="group bg-white rounded-[35px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

          <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">

            <BadgeDollarSign className="w-10 h-10 text-blue-600" />

          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-5">

            Accounting Services

          </h3>

          <p className="text-gray-500 leading-8 mb-8">

            Professional bookkeeping and accounting
            services for smooth business operations.

          </p>

          <Link
            href="/services/accounting-services"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
          >

            Read More

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>

        {/* CARD 5 */}

        <div className="group bg-white rounded-[35px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

          <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">

            <ShieldCheck className="w-10 h-10 text-blue-600" />

          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-5">

            Compliance Services

          </h3>

          <p className="text-gray-500 leading-8 mb-8">

            Ensure business compliance with expert legal
            and taxation consultation services.

          </p>

          <Link
            href="/services/compliance-services"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
          >

            Read More

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>
        {/* CARD 7 */}

        <div className="group bg-white rounded-[35px] p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

          <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mb-8">

            <Users className="w-10 h-10 text-blue-600" />

          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-5">

            HR & Payroll

          </h3>

          <p className="text-gray-500 leading-8 mb-8">

            Complete HR management and payroll solutions
            for startups and growing businesses.

          </p>

          <Link
            href="/services/hr-payroll"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
          >

            Read More

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>


      </div>

    </section>
  );
}