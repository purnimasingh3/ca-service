import Image from "next/image";
import Link from "next/link";

import {
  Users,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "HR & Payroll Services | Fintax Partners",

  description:
    "Professional HR and payroll services for startups and businesses.",

  keywords: [
    "GST registration",
    "tax services",
    "business taxation",
    "CA services",
  ],
};

export default function HRPayrollPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      <section className="relative h-[650px] overflow-hidden">

        <Image
          src="/services/financial.avif"
          alt="HR payroll services"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 flex items-center px-6 md:px-16">

          <div className="max-w-3xl text-white">

            <h1 className="text-6xl md:text-8xl font-bold mb-8">

              HR &
              Payroll Services

            </h1>

            <p className="text-lg text-gray-200 leading-9">

              Smart HR and payroll management solutions
              designed for modern businesses.

            </p>
            <br/>
            <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-lg font-semibold">
              Get Free Consultation
            </Link>

          </div>

        </div>

      </section>

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <Image
              src="/services/financial.avif"
              alt="HR office"
              width={700}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

          </div>

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-5">

              HR Management

            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">

              Professional Payroll &
              HR Solutions

            </h2>

            <p className="text-lg text-gray-500 leading-9 mb-10">

              Manage employees, payroll and HR operations
              efficiently with our expert support services.

            </p>

            <div className="space-y-5">

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <Users className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Employee Management
                  </h3>

                  <p className="text-gray-500">
                    Complete HR support and employee handling.
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <Briefcase className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Payroll Processing
                  </h3>

                  <p className="text-gray-500">
                    Accurate salary and payroll management.
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <BadgeCheck className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    HR Compliance
                  </h3>

                  <p className="text-gray-500">
                    Ensure compliance with labor regulations.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}