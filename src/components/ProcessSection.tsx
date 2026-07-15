import { TimelineItem } from "../types";

export default function ProcessSection() {
  const steps: TimelineItem[] = [
    {
      step: "01",
      title: "Free 60-minute growth audit",
      when: "This week",
      description: "We show you where patients drop off, and exactly what it's costing.",
    },
    {
      step: "02",
      title: "Clear written proposal",
      when: "Within 3 days",
      description: "Scope, timeline, cost. Nothing starts without your approval.",
    },
    {
      step: "03",
      title: "Build (up to 30 days)",
      when: "Weeks 1–4",
      description: "Website, booking, automations. You approve every stage.",
    },
    {
      step: "04",
      title: "Campaigns go live",
      when: "Month 2",
      description: "A live dashboard showing real booked appointments.",
    },
    {
      step: "05",
      title: "Monthly review, every month",
      when: "Ongoing",
      description: "What worked, what didn't, and where the budget shifts next.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300 border-t border-b border-slate-200/60 dark:border-slate-800/40" id="process">
      <div className="w-full max-w-6xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          What happens next
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-12">
          From audit to first booking in 30 days.
        </h2>

        {/* Horizontal & Vertical Timeline Process Flow */}
        <div className="relative mt-12 mb-16">
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-6 relative z-10">
            {steps.map((s, idx) => (
              <li className="relative pl-12 md:pl-0 flex flex-col group" key={idx}>
                {/* Horizontal line for desktop connecting items */}
                {idx < steps.length - 1 && (
                  <div 
                    className="hidden md:block absolute top-5 left-10 right-[-1.5rem] h-[2px] bg-slate-200 dark:bg-slate-800 z-0" 
                    aria-hidden="true"
                  />
                )}

                {/* Vertical line for mobile connecting items */}
                {idx < steps.length - 1 && (
                  <div 
                    className="absolute left-[15px] top-8 bottom-[-48px] w-[2px] bg-slate-200 dark:bg-slate-800 md:hidden z-0" 
                    aria-hidden="true"
                  />
                )}

                {/* Step circle */}
                <div className="absolute md:relative left-0 top-0.5 md:top-auto md:left-auto z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-700 dark:text-cyan-400 font-display font-black text-xs md:text-sm shadow-md transition-all duration-300 group-hover:scale-110 md:mb-5 shrink-0">
                  {s.step}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-100/30 dark:border-emerald-900/20">
                    {s.when}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-950 dark:text-white leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
{/* 
        <div className="mt-16 bg-red-500/[0.03] dark:bg-red-500/[0.01] border border-red-500/10 rounded-2xl p-6 sm:p-8 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed shadow-sm max-w-3xl">
          <strong className="text-red-600 dark:text-red-400 font-bold">This is <em>not</em> for you if:</strong> you want overnight miracles,
          you're unwilling to invest in proper infrastructure, or you want a vendor who
          makes unverifiable claims. We only work with clinics ready for a systematic,
          AHPRA-compliant growth partner.
        </div> */}
      </div>
    </section>
  );
}
