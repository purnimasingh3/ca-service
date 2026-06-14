"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="space-y-3">
            {faqs.map((faq, idx) => (
                <div
                    key={idx}
                    className={`bg-white border rounded-xl shadow-sm transition-all duration-300 ${openIndex === idx
                            ? "border-blue-500"
                            : "border-slate-200"
                        }`}
                >
                    <button
                        onClick={() =>
                            setOpenIndex(openIndex === idx ? null : idx)
                        }
                        className="w-full flex justify-between items-center px-5 py-4 text-left"
                    >
                        <h4 className="font-semibold text-slate-900 text-base md:text-lg pr-4">
                            {idx + 1}. {faq.q}
                        </h4>

                        <span className="text-xl font-semibold text-blue-600 flex-shrink-0">
                            {openIndex === idx ? "−" : "+"}
                        </span>
                    </button>

                    {openIndex === idx && (
                        <div className="px-5 pb-4">
                            <p className="text-md text-blue-600 leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}