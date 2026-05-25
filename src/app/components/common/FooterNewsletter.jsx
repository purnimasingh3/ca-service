'use client';

import React, { useState } from 'react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Briefing sequence authorized. ${email} has been added to our corporate list.`);
    setEmail('');
  };

  return (
    <div className="w-full max-w-sm lg:ml-auto">
      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-500/90 mb-4 block lg:text-middle">
        Global Insights &amp; Regulatory Briefings
      </p>
      <form onSubmit={handleSubscribe} className="relative w-full">
        <div className="flex w-full items-center border border-slate-700 rounded-full focus-within:border-blue-400/60 pb-2 transition-all duration-500 group">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter institutional email address" 
            required
            className="w-full h-full bg-transparent text-xs text-black focus:outline-none placeholder-slate-600 font-light tracking-widest"
            suppressHydrationWarning={true}
          />
          <button 
            type="submit" 
            className="text-slate-400 text-blue-400 font-medium text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 shrink-0 my-1 mx-2 px-3 py-1 rounded-full border border-blue-400 hover:bg-blue-400 hover:text-white"
            suppressHydrationWarning={true}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}