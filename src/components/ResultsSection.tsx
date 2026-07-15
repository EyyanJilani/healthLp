import { ResultItem } from "../types";
import DesignElement2 from "../../assets/images/designElement2.png";


export default function ResultsSection() {
  const results: ResultItem[] = [
    {
      title: "GP Clinic",
      location: "Melbourne, VIC",
      tag: "General Practice",
      description:
        "New website + missed-call recovery + Google Ads. Over 12 weeks, booking completion rose from 14% to 24%; no-shows fell from 28% to 19%.",
      metrics: [
        { label: "Bookings", value: "+71%", trend: "up" },
        { label: "No-shows", value: "−32%", trend: "down" },
        { label: "Cost / patient", value: "$52" },
      ],
    },
    {
      title: "Dental Practice",
      location: "Sydney, NSW",
      tag: "Dental",
      description:
        "Automated recall + review generation. Reactivated 47 dormant patients in 90 days; 38% of missed calls recovered via SMS.",
      metrics: [
        { label: "Bookings / 3mo", value: "+29", trend: "up" },
        { label: "Calls recovered", value: "38%" },
        { label: "from 3.1★", value: "3.6★" },
      ],
    },
    {
      title: "Physio Clinic",
      location: "Brisbane, QLD",
      tag: "Physiotherapy",
      description:
        "New booking page + Google Search targeting local injury and rehab queries. Weekly enquiries grew steadily over 10 weeks.",
      metrics: [
        { label: "Weekly enquiries", value: "+22%", trend: "up" },
        { label: "Cost / patient", value: "$58" },
        { label: "Ads ROAS", value: "3.2x" },
      ],
    },
    {
      title: "Specialist Clinic",
      location: "Perth, WA",
      tag: "Specialist",
      description:
        "Missed-call text-back rolled out across two locations. Front-desk callback chasing dropped, freeing admin hours for patient care.",
      metrics: [
        { label: "Calls recovered", value: "41%" },
        { label: "Admin / week", value: "−6hrs", trend: "down" },
        { label: "Bookings / mo", value: "+19", trend: "up" },
      ],
    },
    {
      title: "Dental Group",
      location: "Adelaide, SA",
      tag: "Dental",
      description:
        "Structured review requests after every completed appointment. Review count grew from 22 to 61 over 6 months, with no paid incentives.",
      metrics: [
        { label: "Reviews / 6mo", value: "+39", trend: "up" },
        { label: "from 2.9★", value: "3.4★" },
        { label: "Organic enquiries", value: "+15%", trend: "up" },
      ],
    },
    {
      title: "GP Clinic",
      location: "Hobart, TAS",
      tag: "General Practice",
      description:
        "Automated SMS + email reminders ahead of every booking. No-show rate fell over a 14-week period as cadence was refined.",
      metrics: [
        { label: "No-shows (from 31%)", value: "26%", trend: "down" },
        { label: "Relative drop", value: "−16%", trend: "down" },
        { label: "Slots recovered / wk", value: "$210" },
      ],
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-slate-100/50 dark:bg-slate-900/30 transition-colors duration-300" id="results">
      <span className="absolute top-24 -z-1 w-1/2 left-0 pointer-events-none select-none">
        <img className="w-full h-full" src={DesignElement2} alt="" />
      </span>
      <div className="w-full max-w-6xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          Real-world results
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-4">
          What Australian clinics are achieving.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
          Operational improvements from clinics using our system. No clinical outcome
          claims, only practice performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item, idx) => (
            <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700" key={idx}>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-bold text-lg font-display text-slate-900 dark:text-white leading-tight">{item.title}</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.location}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100/60 dark:border-cyan-900/40 px-2.5 py-1 rounded-full whitespace-nowrap">{item.tag}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{item.description}</p>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {item.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex flex-col gap-0.5">
                    <strong className={`font-display text-lg font-extrabold tabular-nums ${
                      m.trend === "up" ? "text-emerald-600 dark:text-emerald-400" :
                      m.trend === "down" ? "text-red-600 dark:text-red-400" :
                      "text-slate-900 dark:text-white"
                    }`}>
                      {m.value}
                    </strong>
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 max-w-3xl leading-relaxed">
          * Individual results vary by clinic size, location, and market conditions.
          Historical operational metrics, not clinical outcome guarantees.
        </p>
      </div>
    </section>
  );
}
