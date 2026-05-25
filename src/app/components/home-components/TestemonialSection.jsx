"use client";
import Image from "next/image";

import {
  Star,
  Quote,
} from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#f8fafc] overflow-hidden">

      {/* Background Blur */}

      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-20">

          <p className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold tracking-[2px] mb-5">

            CLIENT TESTIMONIALS

          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">

            Trusted By Businesses
            Across India

          </h2>

          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-8">

            Discover why startups and enterprises trust
            our financial and taxation expertise for
            long-term business success.

          </p>

        </div>

        {/* ================= REVIEW CARDS ================= */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div className="group bg-white rounded-[35px] p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

            {/* Stars */}

            <div className="flex gap-1 mb-6">

              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

            </div>

            {/* Review */}

            <p className="text-gray-500 leading-8 text-lg mb-8">

              “Exceptional business consulting services.
              Their team made company registration and
              compliance extremely smooth and hassle-free.”

            </p>

            {/* User */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <Image
                  src="/reviews/reviews1.jpeg"
                  alt="Rank"
                  width={65}
                  height={65}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Rank mercantile private limited
                  </h3>
                  <p className="text-gray-500">
                    Anshuman bhargava , Director
                  </p>

                </div>

              </div>

              <Quote className="w-10 h-10 text-blue-100 group-hover:text-blue-200 transition" />

            </div>

          </div>

          {/* CARD 2 */}

          <div className="group bg-white rounded-[35px] p-8 text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] hover:-translate-y-3 transition duration-500">

            {/* Stars */}

            <div className="flex gap-1 mb-6">

              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

            </div>

            {/* Review */}

            <p className="text-gray-500 leading-8 text-lg mb-8">

              “Professional and highly experienced team.
              Their taxation and compliance support helped
              our business scale confidently.”

            </p>
            {/* User */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <Image
                  src="/reviews/reviews2.jpeg"
                  alt="Qurex"
                  width={65}
                  height={65}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Qurex health private limited
                  </h3>

                  <p className="text-gray-500">
                    Shailja mittal, Director
                  </p>
                </div>
              </div>

              <Quote className="w-10 h-10 text-blue-300" />

            </div>

          </div>

          {/* CARD 3 */}

          <div className="group bg-white rounded-[35px] p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

            {/* Stars */}

            <div className="flex gap-1 mb-6">

              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

            </div>

            {/* Review */}

            <p className="text-gray-500 leading-8 text-lg mb-8">

              “Reliable and transparent services with
              excellent support. Highly recommended for
              startups and growing businesses.”

            </p>

            {/* User */}

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <Image
                  src="/reviews/reviews3.jpeg"
                  alt="astha"
                  width={65}
                  height={65}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    Astha online ventures LLP
                  </h3>

                  <p className="text-gray-500">
                    Aastha goel , Partner
                  </p>

                </div>

              </div>

              <Quote className="w-10 h-10 text-blue-100 group-hover:text-blue-200 transition" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}