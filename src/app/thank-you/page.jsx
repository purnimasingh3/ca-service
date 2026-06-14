"use client";
import Link from "next/link";

export default function ThankYou() {
    return (
        <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center px-6">

            {/* Success Animation */}
            <div className="relative flex items-center justify-center mb-10">
                <div className="absolute -top-10 left-12 text-green-400 text-4xl float">
                    ✦
                </div>

                <div className="absolute bottom-30 left-4 text-green-400 text-3xl float">
                    ✦
                </div>

                <div className="absolute right-40 top-20 text-green-400 text-3xl float">
                    ✦
                </div>

                <div className="absolute -left-24 top-8 text-yellow-400 text-3xl animate-bounce float">
                    ⚡
                </div>

                <div className="absolute -right-24 bottom-10 text-yellow-400 text-3xl animate-bounce float">
                    ⚡
                </div>
                <div className="absolute right-40 top-20 text-yellow-400 text-3xl animate-bounce float">
                    ⚡
                </div>

                <div className="absolute -right-30 bottom-30 text-yellow-400 text-3xl animate-bounce float">
                    ⚡
                </div>
                <div className="absolute right-20 top-30 text-green-400 text-3xl animate-bounce float">
                    ✦
                </div>

                <div className="absolute -right-20 bottom-40 text-green-400 text-3xl animate-bounce float">
                    ✦
                </div>

                <div className="absolute w-80 h-80 rounded-full bg-green-400 ripple-1"></div>
                <div className="absolute w-56 h-56 rounded-full bg-green-400 ripple-2"></div>
                <div className="absolute w-40 h-40 rounded-full bg-green-200 ripple-3"></div>
                <div className="absolute w-35 h-35 rounded-full bg-white ripple-4"></div>

                {/* Fixed Circle */}
                <div className="relative z-10 w-30 h-30 rounded-full bg-green-400 flex items-center justify-center shadow-xl">
                    <span className="text-white text-6xl font-bold">✓</span>
                </div>

            </div>

            <h1 className="mt-20 text-4xl font-bold text-slate-900 mb-16">
                Request Submitted Successfully
            </h1>

            <p className="text-lg text-slate-600 text-center max-w-xl mb-10">
                Your request has been submitted successfully.
                Our funding consultant will contact you shortly.
            </p>

            <Link
                href="/"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
                Back To Home
            </Link>

        </div>
    );
}