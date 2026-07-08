"use client";
import Link from "next/link";
export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-45 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.jpeg"
            alt="Fintax Adviser"
            className="h-12 w-auto "
          />
        </Link>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Get Started →
        </a>

      </div>
    </header>
  );
}