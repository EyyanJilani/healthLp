import { Check } from "lucide-react";
import { PackageItem } from "../types";

export default function PricingSection() {
  const packages: PackageItem[] = [
    {
      name: "Foundation",
      price: "$3,500",
      note: "One-time · No ongoing fees",
      forText: "For new clinics needing a proper digital setup.",
      ticks: [
        "Website up to 8 pages",
        "Booking integration",
        "Google Business Profile",
        "Missed-call text-back",
        "AHPRA-compliant copy",
        "30-day launch guarantee",
      ],
      ctaText: "Talk about this package",
    },
    {
      name: "Complete System",
      price: "$3,500 + $1,200/mo",
      note: "Setup + monthly retainer",
      forText: "One team accountable for tech and patient numbers.",
      ticks: [
        "Everything in Foundation",
        "Google & Meta campaigns",
        "Monthly SEO and content",
        "AI lead response",
        "Review generation system",
        "No-show reduction workflows",
        "Monthly report on bookings, not clicks",
      ],
      featured: true,
      ctaText: "Get started",
    },
    {
      name: "Growth Retainer",
      price: "From $1,200/mo",
      note: "Monthly · Cancel anytime",
      forText: "For established clinics with a working website.",
      ticks: [
        "Google & Meta management",
        "Ongoing SEO + local content",
        "Reputation & review management",
        "Patient reactivation",
        "Weekly performance dashboard",
      ],
      ctaText: "Talk about this package",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      id="pricing"
    >
      <div className="w-full max-w-6xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          Packages
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-4">
          Start where you are.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
          No surprise fees. Cancel anytime with 30 days' notice. Your website
          stays yours, always.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <article
              className={` dark:bg-slate-900 border ${
                pkg.featured
                  ? "border-2 border-cyan-500 dark:border-cyan-400 shadow-xl lg:scale-105 z-10 bg-cyan-700 "
                  : "border-slate-200 dark:border-slate-800 shadow-sm bg-white"
              } rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between`}
              key={idx}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-br from-cyan-800 via-cyan-700 to-teal-800 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  Most popular
                </span>
              )}
              <div>
                {pkg.featured ? (
                  <h3 className="text-xl font-bold font-display  text-white mb-3">
                    {pkg.name}
                  </h3>
                ) : (
                  <h3 className="text-xl font-bold font-display text-slate-950 dark:text-white mb-3">
                    {pkg.name}
                  </h3>
                )}

                {pkg.featured ? (
                  <p className="font-display font-semibold text-white mb-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-white">
                      $3,500
                    </span>{" "}
                    + $1,200
                    <span className="text-base font-normal text-slate-400">
                      /mo
                    </span>
                  </p>
                ) : pkg.name === "Growth Retainer" ? (
                  <p className="font-display font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    From{" "}
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                      $1,200
                    </span>
                    <span className="text-base font-normal text-slate-500 dark:text-slate-400">
                      /mo
                    </span>
                  </p>
                ) : (
                  <p className="font-display font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    From{" "}
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                      $3,500
                    </span>
                  </p>
                )}
                {pkg.featured ? (
                  <p className="text-xs text-slate-100 font-semibold mb-4">
                    {pkg.note}
                  </p>
                ) : (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-4">
                    {pkg.note}
                  </p>
                )}

                {pkg.featured ? (
                  <p className="text-sm text-white mb-6 pb-6 border-b border-slate-100 dark:border-slate-800 min-h-[3.5em] leading-relaxed">
                    {pkg.forText}
                  </p>
                ) : (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800 min-h-[3.5em] leading-relaxed">
                    {pkg.forText}
                  </p>
                )}
                {pkg.featured ? (
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.ticks.map((t, tIdx) => (
                      <li
                        key={tIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-white"
                      >
                        <span
                          className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.ticks.map((t, tIdx) => (
                      <li
                        key={tIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span
                          className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a
                className={`w-full inline-flex items-center justify-center font-sans font-bold text-sm py-3 rounded-full shadow-md transition-all ${
                  pkg.featured
                    ? "text-emerald-700 hover:text-emerald-800 bg-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-slate-950"
                    : "border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
                href="https://calendly.com/digitalparadigm/product-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                {pkg.ctaText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
