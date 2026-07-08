"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BottomCTA({ onOpen }) {
  return (
    <section className="py-16 bg-blue-50">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold">
          Book Your Free Consultation
        </h2>

        <button
          onClick={onOpen}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Book Now <ArrowRight size={18}/>
        </button>

        <Link
          href="https://wa.me/919990924477"
          target="_blank"
          className="ml-4"
        >
          <FaWhatsapp />
        </Link>

      </div>

    </section>
  );
}