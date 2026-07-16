import Image from "next/image";
import {
  ShieldCheck,
  FileText,
  BadgeCheck,
} from "lucide-react";
export default function ComplianceServicesPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      <section className="relative h-[650px] overflow-hidden">

        <Image
          src="/services/office.avif"
          alt="Compliance services"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 flex items-center px-6 md:px-16">

          <div className="max-w-3xl text-white">

            <h1 className="text-6xl md:text-8xl font-bold mb-8">

              Compliance
              Services

            </h1>

            <p className="text-lg text-gray-200 leading-9">

              Ensure complete business compliance with
              expert taxation and legal consultation.

            </p>

          </div>

        </div>

      </section>

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-5">

              Compliance Management

            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">

              Secure & Reliable
              Compliance Solutions

            </h2>

            <p className="text-lg text-gray-500 leading-9 mb-10">

              We help businesses stay compliant with
              government regulations, taxation laws and
              financial standards.

            </p>

            <div className="space-y-5">

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <ShieldCheck className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Legal Compliance
                  </h3>

                  <p className="text-gray-500">
                    Ensure proper business legal compliance.
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <FileText className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Documentation
                  </h3>

                  <p className="text-gray-500">
                    Professional compliance documentation support.
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <BadgeCheck className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Regulatory Support
                  </h3>

                  <p className="text-gray-500">
                    Expert support for government regulations.
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div>

            <Image
              src="/services/office.avif"
              alt="Compliance office"
              width={700}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

          </div>

        </div>

      </section>

    </main>
  );
}