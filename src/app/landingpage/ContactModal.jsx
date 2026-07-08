"use client";
import { X } from "lucide-react";
import Contact from "./contact";

export default function ContactModal({
  isOpen,
  setIsOpen,
}) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden">

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-slate-100 rounded-full p-2"
        >
          <X size={18} />
        </button>

        <Contact />

      </div>

    </div>
  );
}