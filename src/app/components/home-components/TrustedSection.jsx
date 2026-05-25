"use client";

import Image from "next/image";

export default function TrustedSection() {
    return (
        <section className="py-24 overflow-hidden bg-white">

            <div className="text-center mb-16 px-6">

                <p className="text-blue-600 font-semibold uppercase tracking-[3px] mb-4">
                    Trusted Companies
                </p>

                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5">
                    200+ Startups Trust Us
                </h2>

                <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-8">
                    Empowering businesses with premium financial
                    and business services.
                </p>

            </div>

            {/* Moving Logos */}

            <div className="relative">

                <div className="flex gap-20 animate-marquee whitespace-nowrap">

                    <Image className = "complogo"
                        src="/complogo/bonsen.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className = "complogo"
                        src="/complogo/cavaza.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/fabmoney.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/grest.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/L.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className = "complogo"
                        src="/complogo/melangebox.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/men.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/mole.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className = "complogo"
                        src="/complogo/pync.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/spirit.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/stock.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className = "complogo"
                        src="/complogo/studio.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/sub.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className = "complogo"
                        src="/complogo/whish.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    {/* Duplicate */}
 
                    <Image
                        src="/complogo/bonsen.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image 
                        src="/complogo/cavaza.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image
                        src="/complogo/fabmoney.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                </div>

            </div>

        </section>
    );
}