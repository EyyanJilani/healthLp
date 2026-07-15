import { Check } from "lucide-react";
import DesignElement from "../../assets/images/DesignElement.png";

export default function PhasesSection() {
  const phase1List = [
    "Conversion-focused website",
    "Online booking integration",
    "Google Business Profile setup",
    "Missed-call text-back automation",
    "Appointment reminder system",
    "AHPRA-compliant copy throughout",
  ];

  const phase2List = [
    "Google & Meta campaigns",
    "Local SEO and content",
    "Review generation (AHPRA-compliant)",
    "Lead nurturing and follow-up",
    "Patient reactivation",
    "Monthly bookings report with real data",
  ];

  return (
    <section
      className="relative py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
      id="system"
    >
      <span className="absolute top-10 w-1/5 right-0 opacity-70 pointer-events-none select-none">
        <img className="w-full h-full" src={DesignElement} alt="" />
      </span>
      <div className="w-full max-w-6xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          How we work
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-4">
          We build the foundation first,
          <br />
          <span className="text-cyan-600 dark:text-cyan-400">
            then grow on it.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-12">
          Most agencies only market. Most developers only build. We do both,
          because one without the other rarely works. Convert a fixed marketing
          salary into a variable growth cost: you pay when we deliver.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Phase 1 · Weeks 1–4 · One-time
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-400">
                BUILD
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Your digital infrastructure
            </h3>
            <ul className="space-y-3.5">
              {phase1List.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-gradient-to-br from-cyan-800 via-cyan-700 to-teal-800 border border-transparent text-white shadow-lg shadow-cyan-500/10 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <span className="text-xs font-semibold text-cyan-100/90 uppercase tracking-wider">
                Phase 2 · Month 2+ · Monthly
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white">
                GROW
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
              Consistent patient flow
            </h3>
            <ul className="space-y-3.5">
              {phase2List.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-cyan-50"
                >
                  <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
