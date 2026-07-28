"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    stage: 'Idea Stage / Seed Funding',
    message: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      message: e.target.message.value,
    };
    try {
      const res = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePage: pathname,
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
        setFormData({
          name: '',
          email: '',
          contact: '',
          message: '',
        });
        e.target.reset();
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to send message. Please try again later.");
      }

    } catch (error) {

      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }
  };



  return (
    <div className="relative overflow-hidden bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200/50 max-w-sm mx-auto">
      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-blue-900 mb-4">Free Consultation by Experts</h3>


      <form className="space-y-4 border border-slate-200/50 rounded-lg p-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="Name*"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="Email*"
          />
        </div>
        <div>
          <input
            type="text"
            name="contact"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="Contact*"
          />
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="Write your query here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          Request Consultation
        </button>
      </form>
    </div>
  );
}