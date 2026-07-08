"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">

      <Link
        href="https://wa.me/919990924477"
        target="_blank"
        className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center"
      >
        <FaWhatsapp className="text-white text-xl"/>
      </Link>

      <Link
        href="tel:+919990924477"
        className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center"
      >
        <Phone className="text-white"/>
      </Link>

    </div>
  );
}