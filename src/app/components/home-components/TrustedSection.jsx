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

                    <Image className="complogo"
                        src="/complogo/men.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/mole.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />

                    <Image className="complogo"
                        src="/complogo/whisco.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/creme.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/fg.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/frontier.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/golden.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/media.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/zotic.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/sharda.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    {/* Duplicate */}
                    <Image className="complogo"
                        src="/complogo/whisco.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/creme.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />
                    <Image className="complogo"
                        src="/complogo/golden.jpeg"
                        alt="logo"
                        width={140}
                        height={60}
                    />


                </div>

            </div>

        </section>
    );
}