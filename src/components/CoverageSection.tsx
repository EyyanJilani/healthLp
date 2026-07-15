import DesignElement2 from "../../assets/images/designElement2.png";
import { CoverageItem } from "../types";

export default function CoverageSection() {
  const coverages: CoverageItem[] = [
    { state: "NSW", cities: "Sydney · Newcastle · Wollongong" },
    { state: "VIC", cities: "Melbourne · Geelong · Ballarat" },
    { state: "QLD", cities: "Brisbane · Gold Coast · Cairns" },
    { state: "WA", cities: "Perth · Fremantle · Bunbury" },
    { state: "SA", cities: "Adelaide · Mount Gambier" },
    { state: "ACT", cities: "Canberra" },
    { state: "TAS", cities: "Hobart · Launceston" },
    { state: "NT", cities: "Darwin · Alice Springs" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden" id="coverage ">
         <span className="absolute top-24 z-1 w-1/2 right-0 pointer-events-none select-none">
              <img className="w-full h-full" src={DesignElement2} alt="" />
            </span>
      <div className="w-full max-w-7xl mx-auto px-5 relative z-2">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          Where we work
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-4">
          Your city, our system,
          <br />
          <span className="text-cyan-600 dark:text-cyan-400">anywhere in Australia.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-12">
          From Sydney to Perth we know local markets. We specialise in GPs, Dentists,
          Physios and Specialists, with no generic playbooks.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {coverages.map((cov, idx) => (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" key={idx}>
              {/* <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-3 border ${
                  cov.status === "active"
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/20"
                    : "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900/20"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cov.status === "active" ? "bg-emerald-500" : "bg-cyan-500"}`}></span>
                {cov.status === "active" ? "Active" : "Now accepting"}
              </span> */}
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-1">{cov.state}</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-normal">{cov.cities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
