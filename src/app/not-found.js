"use client";
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#081028] via-[#0F172A] to-[#1D4ED8] flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-black text-white opacity-10 leading-none">
            404
          </h1>
          <div className="relative -mt-20 md:-mt-32">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-md mx-auto">
          Oops! The page you're looking for seems to have disappeared. 
          Let's get you back on track.
        </p>

        {/* Error Icon */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-pulse"></div>
            <div className="relative bg-blue-500/10 border border-blue-400/30 rounded-full p-6 backdrop-blur-sm">
              <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white px-8 py-3.5 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
              Go Home
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border-2 border-blue-300/50 text-blue-100 hover:bg-blue-500/10 px-8 py-3.5 rounded-2xl font-bold transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-sm text-blue-200/60">
          Error Code: <span className="text-blue-300 font-semibold">404</span>
        </p>
      </div>
    </div>
  );
}