import { TestimonialItem } from "../types";
import DesignElement3 from "../../assets/images/designElement3.png";


export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      initials: "SR",
      name: "Dr. Sarah R.",
      role: "Practice Owner · GP Clinic, VIC",
      quote:
        "For the first time I can see exactly which bookings came from our marketing. The missed-call text-back alone paid for the first month.",
    },
    {
      initials: "MT",
      name: "Michael T.",
      role: "Principal Dentist · NSW",
      quote:
        "One team for the website, the ads, and the reviews. I got back five hours a week I used to spend chasing three different vendors.",
    },
    {
      initials: "JL",
      name: "Dr. Jenny L.",
      role: "Clinic Director · Physio, QLD",
      quote:
        "They understood AHPRA from day one. Nothing we publish keeps me up at night anymore, and the calendar is genuinely fuller.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="voices">
      <span className="absolute top-10 w-1/6 right-0 opacity-70 pointer-events-none select-none">
        <img className="w-full h-full" src={DesignElement3} alt="" />
      </span>
      <div className="w-full max-w-6xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          In their words
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-12">
          Clinic owners who stopped
          <br />
          <span className="text-cyan-600 dark:text-cyan-400">juggling vendors.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <figure className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5" key={idx}>
              <div className="text-amber-500 tracking-wider text-lg" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="font-display font-medium text-[16px] sm:text-lg leading-relaxed text-slate-850 dark:text-slate-100 italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3.5 mt-auto">
                <span className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-800 via-cyan-700 to-teal-700 text-white font-bold text-sm shrink-0 shadow-md shadow-cyan-500/10" aria-hidden="true">
                  {t.initials}
                </span>
                <span className="flex flex-col">
                  <strong className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</strong>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-8 max-w-3xl leading-relaxed">
          * Testimonials reflect individual experience with our service and operations, not
          clinical outcomes. Names abbreviated for privacy.
        </p>
      </div>
    </section>
  );
}
