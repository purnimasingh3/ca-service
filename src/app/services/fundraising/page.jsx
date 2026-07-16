import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function FundraisingPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      {/* HERO */}

      <section className="relative h-[650px] overflow-hidden">

        <Image
          src="/services/fundraising.avif"
          alt="Fundraising consultation"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 flex items-center px-6 md:px-16">

          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[4px] text-blue-300 mb-5">

              Startup Funding Solutions

            </p>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">

              Fundraising
              Services

            </h1>

            <p className="text-lg text-gray-200 leading-9 mb-10">

              Helping startups and businesses connect
              with investors and secure funding for
              sustainable business growth.

            </p>

            <Link href="/get-free-consultant" className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-lg font-semibold">

              Get Free Consultation

            </Link>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-28 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <Image
              src="/services/fundraising.avif"
              alt="Investor meeting"
              width={700}
              height={700}
              className="rounded-[35px] shadow-2xl object-cover"
            />

          </div>

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-5">

              About Service

            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">

              Investor & Funding
              Support Solutions

            </h2>

            <p className="text-lg text-gray-500 leading-9 mb-10">

              We help businesses prepare professional
              financial strategies, investor presentations
              and growth planning to secure funding.

            </p>

            <div className="space-y-5">

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <BadgeDollarSign className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Startup Funding
                  </h3>

                  <p className="text-gray-500">
                    Raise funds with strategic investor support.
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <Users className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Investor Connections
                  </h3>

                  <p className="text-gray-500">
                    Connect with potential investors and VCs.
                  </p>

                </div>

              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-4">

                <TrendingUp className="w-7 h-7 text-blue-600 shrink-0" />

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Business Growth
                  </h3>

                  <p className="text-gray-500">
                    Build scalable financial growth strategies.
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