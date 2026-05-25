"use client";
import Image from "next/image";

import {
  BadgeCheck,
  Building2,
  Users,
  Award,
  ArrowUpRight,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6 md:px-16 bg-[#f8fafc]">

      {/* Background Blur */}

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT SIDE ================= */}

        <div>

          <p className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold tracking-[2px] mb-7">

            WHY TOP BUSINESSES TRUST US

          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-8">

            15+ Years Of
            <span className="block text-blue-600">
              Financial Excellence
            </span>

          </h2>

          <p className="text-lg text-gray-500 leading-9 mb-12 max-w-2xl">

            Helping startups and enterprises simplify
            taxation, registration and compliance with
            premium consulting services trusted by
            businesses across India.

          </p>

          {/* Feature Cards */}

          <div className="space-y-7">

            <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">

                <BadgeCheck className="w-8 h-8 text-blue-600" />

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                  Trusted Business Experts

                </h3>

                <p className="text-gray-500 leading-7">

                  Professional consultation and financial
                  guidance tailored for growing businesses.

                </p>

              </div>

            </div>

            <div className="flex items-start gap-5 bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">

                <Users className="w-8 h-8 text-blue-600" />

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2">

                  500+ Happy Clients

                </h3>

                <p className="text-gray-500 leading-7">

                  Trusted by startups and enterprises
                  nationwide.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="relative">

          {/* Main Image */}

          <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(37,99,235,0.25)]">

            <Image
              src="/experiance/team.avif"
              alt="team"
              width={700}
              height={800}
              className="w-full h-[700px] object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* Floating Content */}

            <div className="absolute bottom-10 left-10 text-white">

              <p className="uppercase tracking-[4px] text-blue-200 text-sm mb-4">

                Since 2010

              </p>

              <h1 className="text-7xl font-extrabold leading-none mb-3">

                15+

              </h1>

              <h2 className="text-3xl font-semibold mb-4">

                Years Experience

              </h2>

              <p className="text-blue-100 text-lg leading-8 max-w-md">

                Delivering trusted taxation and business
                solutions with premium expertise.

              </p>

            </div>

          </div>

          {/* Floating Mini Image */}

          <div className="absolute -bottom-3 -right-10 bg-white rounded-3xl p-2 shadow-xl border border-gray-100">

            <Image
              src="/experiance/team1.avif"
              alt="office"
              width={200}
              height={100}
              className="rounded-2xl object-cover"
            />

          </div>

          {/* Floating Stats Card */}

          <div className="absolute -top-8 -right-8 bg-white shadow-2xl rounded-3xl p-7 border border-gray-100">

            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">

                <ArrowUpRight className="w-7 h-7 text-blue-600" />

              </div>

              <div>

                <h3 className="text-3xl font-bold text-gray-900">
                  98%
                </h3>

                <p className="text-gray-500 text-sm">
                  Client Satisfaction
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div>

                <Building2 className="w-8 h-8 text-blue-600 mb-3" />

                <h2 className="text-3xl font-bold text-gray-900">
                  1200+
                </h2>

                <p className="text-gray-500 text-sm">
                  Businesses
                </p>

              </div>

              <div>

                <Award className="w-8 h-8 text-blue-600 mb-3" />

                <h2 className="text-3xl font-bold text-gray-900">
                  15+
                </h2>

                <p className="text-gray-500 text-sm">
                  Awards
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}