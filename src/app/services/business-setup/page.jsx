import Image from "next/image";
export default function BusinessSetupPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      {/* HERO SECTION */}

      <section className="relative h-[500px] overflow-hidden">

        <Image
          src="/assets/audit.jpg"
          alt="business"
          fill
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}

        <div className="absolute inset-0 flex items-center px-6 md:px-16">

          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-[4px] text-blue-300 mb-5">

              Professional Services

            </p>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">

              Business Setup Services

            </h1>

            <p className="text-lg text-gray-200 leading-8">

              Start your company with professional
              registration and compliance support.

            </p>

          </div>

        </div>

      </section>

      {/* CONTENT SECTION */}

      <section className="py-24 px-6 md:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-4">

              About Service

            </p>

            <h2 className="text-5xl font-bold text-gray-900 mb-8">

              Complete Business Registration Solutions

            </h2>

            <p className="text-lg text-gray-500 leading-9 mb-8">

              We provide end-to-end company registration,
              documentation and legal compliance services
              for startups and enterprises.

            </p>

            {/* Points */}

            <div className="space-y-5">

              <div className="bg-white rounded-2xl p-6 shadow-lg">

                ✔ Private Limited Registration

              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">

                ✔ LLP Registration

              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">

                ✔ Startup India Support

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <Image
              src="/experiance/office.avif"
              alt="office"
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