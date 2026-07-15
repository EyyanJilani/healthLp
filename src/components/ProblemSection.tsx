import React from "react";
import { Brain, Settings, Search, Star } from "lucide-react";
import healthcareProfessionalImg from "../../assets/images/healthcare_professional.webp";
import DesignElement from "../../assets/images/DesignElement.png";

export default function ProblemSection() {
  return (
    <section
      className="relative py-16 md:py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300"
      id="problem"
    >
      <span className="absolute top-10 w-1/5 right-0 opacity-70 pointer-events-none select-none">
        <img className="w-full h-full" src={DesignElement} alt="" />
      </span>

      {/* Absolute large backdrop text */}
      <h3 className="pointer-events-none max-w-full overflow-hidden tracking-[-4px] whitespace-nowrap text-slate-200 dark:text-slate-900 opacity-60 dark:opacity-30 z-[1] text-[clamp(60px,10vw,120px)] font-black absolute top-[40px] left-1/2 -translate-x-1/2 select-none [mask-image:linear-gradient(#000_40%,#0000_100%)] [-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]">
        Clinics
      </h3>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="text-center">
          <p className="text-base md:text-lg mb-2 text-cyan-700 dark:text-rose-400 font-semibold uppercase tracking-wider">
            Clinics Grow with Technology
          </p>
          <h2 className="text-slate-900 dark:text-white md:text-5xl text-3xl font-black font-display tracking-tight mb-6">
            Helping Clinics Grow With Technology
          </h2>
          <div className="w-24 h-1.5 bg-[#97bb67] dark:bg-emerald-500 mb-8 md:mb-16 mx-auto rounded-full"></div>
        </div>

        {/* Asymmetrical grid layout centering the professional portrait */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-4 mt-6">
          {/* Left Column (z-10 for overlapping) */}
          <div className="flex flex-col space-y-6 md:w-[32%] lg:w-[28%] z-10">
            <article className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-cyan-950/10 transition-all duration-300 hover:-translate-y-1 group">
              <Brain
                className="w-8 h-8 mb-4 text-cyan-700 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                The Ghost
                <br />
                Website
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Your site looks fine, yet patients still don't book. The booking
                flow takes 3+ taps and they drop off.
              </p>
              <a
                className="text-cyan-700 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mt-4 inline-flex items-center gap-1 font-semibold text-sm group/btn"
                href="#contact"
              >
                Read More{" "}
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  »
                </span>
              </a>
            </article>

            <article className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-cyan-950/10 transition-all duration-300 hover:-translate-y-1 md:ml-8 md:mt-8 group">
              <Settings
                className="w-8 h-8 mb-4 text-cyan-700 dark:text-rose-400 group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                The Reputation
                <br />
                Gap
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Your competitor has 180 reviews. You have 14. Clinics with 50+
                reviews get up to 3x more calls.
              </p>
              <a
                className="text-cyan-700 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mt-4 inline-flex items-center gap-1 font-semibold text-sm group/btn"
                href="#contact"
              >
                Read More{" "}
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  »
                </span>
              </a>
            </article>
          </div>

          {/* Center Column: Portrait Image Backdrop (Desktop-absolute and centered, mobile-relative) */}
          <div className="md:absolute md:inset-0 md:flex md:justify-center md:items-center relative z-0 my-8 md:my-0 pointer-events-none">
            <img
              alt="Healthcare professional"
              loading="lazy"
              width="640"
              height="640"
              src={healthcareProfessionalImg}
              className="object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column (z-10 for overlapping) */}
          <div className="flex flex-col space-y-6 md:w-[32%] lg:w-[28%] z-10">
            <article className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-cyan-950/10 transition-all duration-300 hover:-translate-y-1 group">
              <Search
                className="w-8 h-8 mb-4 text-cyan-700 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                The Black-Hole
                <br />
                Call System
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Missed calls vanish. Nobody follows up. No callback, no SMS, so
                the patient simply books elsewhere.
              </p>
              <a
                className="text-cyan-700 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mt-4 inline-flex items-center gap-1 font-semibold text-sm group/btn"
                href="#contact"
              >
                Read More{" "}
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  »
                </span>
              </a>
            </article>

            <article className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-cyan-950/10 transition-all duration-300 hover:-translate-y-1 md:mr-8 md:mt-8 group">
              <Star
                className="w-8 h-8 mb-4 text-cyan-700 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                The Vendor
                <br />
                Chaos
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Three vendors who never talk to each other. You become the
                project manager, losing 5+ hours a week.
              </p>
              <a
                className="text-cyan-700 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mt-4 inline-flex items-center gap-1 font-semibold text-sm group/btn"
                href="#contact"
              >
                Read More{" "}
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  »
                </span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
