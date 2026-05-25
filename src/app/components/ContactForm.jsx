"use client"; // Sirf Form component me use client lagayein

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

        body: JSON.stringify(formData),
      });
      if (res.ok) {
          alert(`Thank you ${formData.name}! Our senior investment consultant will contact you shortly.`);
          setFormData({
            name: '',
            email: '',  
            contact: '',
            message: '',
          });
          e.target.reset();
      }else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to send message. Please try again later.");
      }
       
      }catch (error) {

      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } 
  };



  return (
    <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/50 relative">
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">We Help Startups Get Funded!</h3>
      <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">⚡Connect with our dedicated structural funding consultants today.</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="Enter full name"
            suppressHydrationWarning={true}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="name@company.com"
            suppressHydrationWarning={true}
          />
        </div>
                <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Contact</label>
          <input
            type="text"
            name="contact"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            placeholder="+91 XXXXXXXXXX"
            suppressHydrationWarning={true}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Message / Funding Requirements</label>
          <textarea
            rows="3"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all resize-none"
            placeholder="Briefly describe your venture..."
            suppressHydrationWarning={true}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl hover:bg-blue-700 active:scale-[0.99] transition shadow-md shadow-blue-500/20 uppercase tracking-widest text-xs mt-2"
          suppressHydrationWarning={true}>
          Request Consultation
        </button>
      </form>
    </div>
  );
}