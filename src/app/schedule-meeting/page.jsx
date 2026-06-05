"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import {
  CalendarDays, Clock, ShieldCheck, Video, CheckCircle2,
  ArrowRight, ArrowLeft, User, Mail, Phone, MessageSquare, Sparkles,
} from "lucide-react";
import { InlineWidget } from "react-calendly";

const slots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

const features = [
  { icon: Clock, title: "30-Min Diagnostic Window", desc: "Targeted, performance-driven analysis with zero dead space." },
  { icon: CalendarDays, title: "Structured Availability", desc: "Operational slots active Monday through Saturday, 10 AM – 5 PM." },
  { icon: Video, title: "Flexible Stream Access", desc: "Simultaneous routing via high-definition Google Meet or traditional phone vectors." },
  { icon: ShieldCheck, title: "Enterprise Compliance Protected", desc: "Rigorous alignment covering sandbox setups, accounting layers, & global compliance blueprints." },
];

const benefits = [
  "Accelerated Global Corporate Inception Support",
  "Advanced Cross-Border Income Tax & GST Protocol Architecture",
  "Frictionless Corporate Governance & Automated Regulatory Filings",
  "Immediate Direct Link Pipeline into Elite Regional Advisory Networks",
];

export default function ScheduleMeeting() {
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      date: date.toLocaleDateString(),
      time: selectedSlot,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();

      if (data.success) {
        alert("Meeting Scheduled ✅");
        setSubmitted(true);
      } else {
        alert("Email Failed ❌");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const resetAll = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedSlot("");
    setStep(1);
    setSubmitted(false);
  };

  return (
    <section className="min-h-screen bg-[#000000] text-zinc-100 px-4 sm:px-6 lg:px-12 py-12 lg:py-16 font-sans antialiased selection:bg-sky-500/30 selection:text-sky-200">

      {/* PERFECTED HIGH-CONTRAST DYNAMIC INLINE CALENDAR STYLES */}
      <style>{`
        .schedule-calendar .react-calendar {
          width: 100% !important;
          background: transparent !important;
          border: none !important;
          font-family: inherit !important;
          display: flex;
          flex-direction: column;
        }
        .schedule-calendar .react-calendar__viewContainer {
          display: flex;
        }
        .schedule-calendar .react-calendar__month-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .schedule-calendar .react-calendar__month-view > div > div {
          display: flex;
          flex-direction: column;
        }
        .schedule-calendar .react-calendar__navigation {
          display: flex;
          margin-bottom: 1.5rem;
          justify-content: space-between;
          align-items: center;
        }
        .schedule-calendar .react-calendar__navigation button {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.03) !important;
          font-weight: 600 !important;
          font-size: 0.9rem !important;
          min-width: 44px !important;
          height: 40px;
          border-radius: 0.75rem !important;
          border: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .schedule-calendar .react-calendar__navigation button:enabled:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          color: #38bdf8 !important;
        }
        .schedule-calendar .react-calendar__navigation__title {
          background: transparent !important;
          border: none !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          font-size: 1rem !important;
          letter-spacing: -0.01em;
        }
        .schedule-calendar .react-calendar__navigation button:disabled {
          opacity: 0.2;
        }
        .schedule-calendar .react-calendar__month-view__weekdays {
          display: flex !important;
          text-transform: uppercase !important;
          font-size: 0.7rem !important;
          font-weight: 700 !important;
          color: #a1a1aa !important; /* Made week labels brighter grey */
          text-align: center;
          letter-spacing: 0.05em !important;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding-bottom: 0.5rem;
        }
        .schedule-calendar .react-calendar__month-view__weekdays__weekday {
          flex: 1;
        }
        .schedule-calendar .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none !important;
        }
        .schedule-calendar .react-calendar__month-view__days {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 4px 0px;
        }
        .schedule-calendar .react-calendar__tile {
          flex: 0 0 14.2857% !important;
          max-width: 14.2857% !important;
          background: transparent !important;
          color: #f4f4f5 !important; /* Perfect High-contrast solid white-grey */
          padding: 0.95rem 0 !important;
          border-radius: 0.75rem !important;
          font-size: 0.875rem !important;
          font-weight: 600 !important;
          border: 1px solid transparent !important;
          text-align: center;
          cursor: pointer;
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .schedule-calendar .react-calendar__tile:enabled:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
        }
        .schedule-calendar .react-calendar__tile--now {
          background: rgba(56, 189, 248, 0.08) !important;
          color: #38bdf8 !important;
          border-color: rgba(56, 189, 248, 0.3) !important;
        }
        .schedule-calendar .react-calendar__tile--active {
          background: #ffffff !important; /* Clean Elite White/Black Accent active view */
          color: #000000 !important;
          font-weight: 700 !important;
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15) !important;
        }
        .schedule-calendar .react-calendar__tile--active:enabled:hover {
          background: #f4f4f5 !important;
          color: #000000 !important;
        }
        .schedule-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: #3f3f46 !important; /* Visible but pushed back layout */
        }
        .schedule-calendar .react-calendar__tile:disabled {
          color: #27272a !important;
          text-decoration: line-through;
          cursor: not-allowed;
          opacity: 0.4;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        {/* LEFT COLUMN: ARCHITECTURE WORKSPACE */}
        <div className="lg:col-span-7 relative bg-[#090a0f] border border-white/[0.06] rounded-[2rem] p-6 md:p-8 lg:p-10 space-y-8 overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)]">
          {/* Neon Sky Blur Accents */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-zinc-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

          {/* Header Block */}
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/[0.05] text-sky-400 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
              Free Strategic Consultation
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Build Something.
            </h1>
            <p className="text-zinc-400 text-sm md:text-[15px] max-w-xl font-normal leading-relaxed">
              {step === 1
                ? "Select an available date on the calendar blueprint, then lock in your precision diagnostic window below."
                : "Help our architecture and compliance teams analyze your baseline vectors before the integration call."}
            </p>
          </div>

          {/* Stepper Grid Layout */}
          <div className="relative flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
            <div className={`flex items-center gap-2.5 transition-colors duration-300 ${step === 1 ? "text-sky-400" : "text-zinc-500"}`}>
              <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs border transition-all duration-300 ${step === 1 ? "border-sky-500/40 bg-sky-500/10 text-sky-400 font-bold" : "border-zinc-800 bg-zinc-900/50"}`}>01</span>
              Availability
            </div>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <div className={`flex items-center gap-2.5 transition-colors duration-300 ${step === 2 ? "text-sky-400" : "text-zinc-500"}`}>
              <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs border transition-all duration-300 ${step === 2 ? "border-sky-500/40 bg-sky-500/10 text-sky-400 font-bold" : "border-zinc-800 bg-zinc-900/50"}`}>02</span>
              Parameters
            </div>
          </div>

          {/* SUCCESS STATUS STEP */}
          {submitted && (
            <div className="relative bg-[#0d0e12] border border-sky-500/20 rounded-2xl p-8 text-center space-y-5 shadow-2xl">
              <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-sky-500/[0.06] border border-sky-500/30">
                <CheckCircle2 className="w-6 h-6 text-sky-400" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight text-white">Meeting Successfully Logged</h2>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto font-normal">
                  Strategic window locked for <strong className="text-sky-400 font-semibold">{date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</strong> at <strong className="text-sky-400 font-semibold">{selectedSlot}</strong>.
                </p>
              </div>
              <button onClick={resetAll} className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black text-xs font-bold uppercase tracking-wider transition-all">
                Book Another Routine
              </button>
            </div>
          )}

          {/* STEP 1: DYNAMIC HIGH-CONTRAST MATRIX */}
          {!submitted && step === 1 && (
            <div className="relative space-y-8">

              {/* Refined Calendar Background Shell */}
              <div className="bg-[#0d0e15] border border-white/[0.06] rounded-2xl overflow-hidden p-2">
                <InlineWidget
                  url="https://calendly.com/fintaxadviser-info/30min"
                  
                  styles={{
                    height: "700px",
                  }}
                />
              </div>

              {/* Time Slots Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-sky-400" /> Operational Matrix
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/[0.05] px-2.5 py-1 border border-sky-500/20 rounded-md">30-Min Window</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3.5 px-2 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${selectedSlot === slot
                        ? "bg-white text-black border-transparent shadow-xl scale-[1.02]"
                        : "bg-[#0d0e15] border-white/[0.06] text-zinc-300 hover:border-white/20 hover:bg-[#12131a]"
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <button
                type="button"
                disabled={!selectedSlot}
                onClick={() => setStep(2)}
                className="w-full bg-white hover:bg-zinc-100 text-black disabled:opacity-20 disabled:pointer-events-none font-extrabold py-4 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg group"
              >
                Configure Parameters
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          )}

          {/* STEP 2: DETAILS MATRIX FORM */}
          {!submitted && step === 2 && (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field icon={User} label="Identity Profile" name="name" value={formData.name} onChange={handleInputChange} placeholder="Jane Doe" required />
                <Field icon={Mail} label="Corporate Mail Routing" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@enterprise.com" required />
              </div>

              <Field icon={Phone} label="Direct Telephony Pipeline" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 555 000 0000" />

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-400" /> Strategic Objectives & Friction Points
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share high-level infrastructure goals, compliance targets, or current operational blockers..."
                  className="w-full bg-[#0d0e15] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-sky-500/30 focus:bg-zinc-900/10 transition-all placeholder:text-zinc-600 font-light resize-none"
                />
              </div>

              {/* Meta Sync State Header */}
              <div className="bg-[#0d0e15] border border-white/[0.06] rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black border border-white/[0.06] rounded-lg">
                    <CalendarDays className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-300">
                    Allocated Space: <strong className="text-white font-semibold">{date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</strong> @ <strong className="text-white font-semibold">{selectedSlot}</strong>
                  </span>
                </div>
                <button type="button" onClick={() => setStep(1)} className="text-sky-400 hover:text-sky-300 font-bold transition text-[11px] uppercase tracking-wider">
                  Modify Frame
                </button>
              </div>

              {/* Step Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="p-4 rounded-xl border border-white/[0.06] bg-[#0d0e15] text-zinc-400 hover:text-white hover:bg-zinc-900 transition duration-200 flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-white hover:bg-zinc-100 text-black disabled:opacity-30 font-extrabold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl"
                >
                  {loading ? "Syncing Workspace..." : "Confirm Integration Window"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: BRAND MATRIX SIDEBAR */}
        <aside className="lg:col-span-5 lg:sticky lg:top-12 space-y-6 h-fit">

          {/* Card 1: Call Specifications */}
          <div className="bg-[#090a0f] border border-white/[0.06] rounded-[2rem] p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-1">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Architecture Details</h2>
              <p className="text-lg font-bold text-white tracking-tight">Call Specifications</p>
            </div>

            <div className="grid gap-3.5">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group bg-[#0d0e15] border border-white/[0.04] hover:border-white/[0.1] rounded-xl p-4 flex items-start gap-4 transition duration-200">
                    <div className="bg-black border border-white/[0.06] p-2.5 rounded-lg mt-0.5 text-zinc-400 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-zinc-200 text-xs tracking-tight transition-colors group-hover:text-white">{item.title}</h3>
                      <p className="text-zinc-400 text-[11px] font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Strategic Pillars */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.06] bg-gradient-to-b from-[#090a0f] to-black p-6 md:p-8 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/[0.01] rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-1">
              <p className="font-bold text-[10px] uppercase tracking-widest text-zinc-500">Enterprise Scale</p>
              <h3 className="text-lg font-bold tracking-tight text-zinc-200">Sovereign Structures.</h3>
            </div>
            <ul className="mt-5 space-y-4 text-[11px] font-normal text-zinc-400">
              {benefits.map((text, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed group">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500/40 mt-1.5 shrink-0 group-hover:bg-sky-400 transition-colors" />
                  <span className="transition-colors group-hover:text-zinc-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </section>
  );
}

function Field({
  icon: Icon, label, name, value, onChange, type = "text", placeholder, required,
}) {
  return (
    <div className="space-y-2 w-full">
      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
        <Icon className="w-3.5 h-3.5 text-sky-400" /> {label}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        className="w-full bg-[#0d0e15] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-sky-500/30 focus:bg-zinc-900/10 transition-all placeholder:text-zinc-600 font-light"
      />
    </div>
  );
}