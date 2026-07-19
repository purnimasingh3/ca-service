"use client";
import Link from "next/link";
export default function LandingHeader() {
  const handleGetStartedClick = () => {
    const event = new CustomEvent("openLeadPopup");
    window.dispatchEvent(event);
  };
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-slate-100 shadow-sm">
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
        <button
          onClick={handleGetStartedClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Get Started &rarr;
        </button>

      </div>
    </header>
  );
}