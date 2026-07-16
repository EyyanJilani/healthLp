import React from "react";
import clinicImage from "../../assets/images/compareSec.png";
import { ArrowDown, Check, X, ShieldCheck } from "lucide-react";

export default function CompareSection() {
  const badList = [
    "Website traffic that doesn't convert",
    "Missed calls = lost patients",
    "Ad spend with no booking attribution",
    "No-shows quietly draining the calendar",
    "Past patients who never return",
  ];

  const goodList = [
    <>Booking is <strong className="text-white font-bold">one tap</strong> on mobile</>,
    <>Missed call triggers an instant SMS, and the slot is recovered</>,
    <>Every ad dollar tracked to a real appointment</>,
    <>Automated reminders cut no-shows by up to 25%</>,
    <>Reactivation campaigns bring dormant patients back</>,
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300 border-t border-b border-slate-200/60 dark:border-slate-800/40" id="transform">
      <div className="w-full max-w-7xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full">
                What changes
              </p>
        {/* 2-Column Grid: Left (Heading + Vertical transformation comparison) & Right (High-quality Image stretching full height) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-stretch">
          
          {/* Left Column: Heading and Vertical Stack of Comparison Cards */}
          <div className="flex flex-col justify-between space-y-8">
            
            {/* Heading Group */}
            <div className="space-y-4">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-none">
                One system. One team.
                <br />
                <span className="text-cyan-600 dark:text-cyan-400">You just see patients.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                We own the full picture, from the first Google search to the patient in your chair.
              </p>
            </div>

            {/* Cards Stack */}
            <div className="space-y-4">
              
              {/* WITHOUT SYSTEM CARD */}
              <div className="bg-white dark:bg-slate-950 border border-dashed border-red-200 dark:border-red-950/50 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="mb-4">
                  <span className="font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400 border border-red-100 dark:border-red-900/20">
                    Without a system
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {badList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 mb-0 py-0.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      <X className="text-red-500 w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WITH SYSTEM CARD */}
              <div className="bg-gradient-to-br from-cyan-800 via-cyan-700 to-teal-800 border border-transparent dark:bg-slate-950 border-2 rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="mb-4">
                  <span className="font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20">
                    With your system running
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {goodList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 mb-0 py-0.5 text-slate-300 text-sm sm:text-base">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="text-emerald-600 dark:text-emerald-400 w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Right Column: Beautiful Image Container stretching full height */}
          <div className="relative h-full flex flex-col justify-stretch">
            <div className="relative w-full h-full min-h-[450px] lg:min-h-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-800/60 group flex flex-col">
              {/* Subtle Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-cyan-950/10 mix-blend-overlay"></div>

              {/* Core Image with referrerPolicy */}
              <img
                src={clinicImage}
                alt="Modern Australian healthcare environment with friendly clinic interaction"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* High-quality content floating overlays */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                {/* <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-slate-950/80 backdrop-blur-sm border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  AHPRA-Compliant Advertising
                </span> */}
                <p className="text-sm font-semibold text-white leading-relaxed font-sans">
                  "The clinic booking rate grew by 38% in the first quarter of launching the automation workflow."
                </p>
                <p className="text-[11px] text-slate-300 font-medium">
                  — Dr. Melissa Chen, Melbourne Clinic Director
                </p>
              </div>
            </div>

            {/* Visual background details */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-2xl pointer-events-none -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-2xl pointer-events-none -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
