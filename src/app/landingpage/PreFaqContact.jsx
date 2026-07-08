import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function PreFAQContact({ onOpen }) {
    return (
         <section className="pt-16 pb-4 bg-white">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="border border-slate-200/70 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold text-slate-900">Have questions before committing?</h3>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                Our experts answer documentation, timeline, and pricing questions in plain English. No sales pitch — just clarity.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <Link href="tel:+919990924477" passHref>
                                    <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-slate-50">
                                        <Phone className="h-3.5 w-3.5 text-blue-900 fill-blue-900" /> Call now
                                    </button>
                                </Link>
                                <Link href="https://wa.me/919990924477" passHref>
                                    <button className="inline-flex items-center gap-2 text-emerald-500 rounded-xl bg-white border border-slate-200 px-4 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-100">
                                        <FaWhatsapp className="h-3.5 w-3.5 text-emerald-500" /> WhatsApp us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-col gap-4 text-center md:text-left shrink-0">
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 min-w-[140px]">
                                <p className="text-xl font-black text-blue-500">500+</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Users Trust Us</p>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 min-w-[140px]">
                                <p className="text-xl font-black text-blue-500">6.2 days</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Avg. turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}