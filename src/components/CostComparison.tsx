import DesignElement4 from "../../assets/images/designElement4.png";


export default function CostComparison() {
  return (
    <section
      className="relative py-16 md:py-24 bg-gradient-to-br from-cyan-900 via-cyan-800 to-teal-800 dark:bg-slate-9/3000 transition-colors duration-300"
      id="compare"
    >
      <span className="absolute top-12 -z-1 w-1/2 h-full object-contain left-0 pointer-events-none select-none">
        <img className="w-full h-full" src={DesignElement4} alt="" />
      </span>
      <div className="w-full max-w-6xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          The real cost of going it alone
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-100 dark:text-white mb-4">
          What you're actually paying for.
        </h2>
        <p className="text-base sm:text-lg text-white dark:text-slate-400 max-w-3xl mb-12">
          Most clinics juggle 3 separate vendors and manage them personally.
          Here's what that really costs versus one accountable team.
        </p>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md bg-white dark:bg-slate-900">
          <table className="w-full border-collapse min-w-[540px] text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th
                  scope="col"
                  className="p-4 sm:p-5 font-display font-extrabold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/60 text-xs uppercase tracking-wider"
                >
                  Service / Role
                </th>
                <th
                  scope="col"
                  className="p-4 sm:p-5 font-display font-extrabold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/60 text-xs uppercase tracking-wider"
                >
                  3 Separate Vendors
                </th>
                <th
                  scope="col"
                  className="p-4 sm:p-5 font-display font-extrabold bg-emerald-500/[0.08] dark:bg-emerald-500/[0.04] text-emerald-800 dark:text-emerald-300 text-xs uppercase tracking-wider border-l border-emerald-500/20"
                >
                  Digital Paradigm
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="p-4 sm:p-5 font-semibold text-slate-800 dark:text-slate-200 text-left"
                >
                  Website Dev &amp; Hosting (Yr 1)
                </th>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400 font-mono">
                  $4,500 + $600/yr
                </td>
                <td className="p-4 sm:p-5 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] text-emerald-700 dark:text-emerald-400 font-semibold border-l border-emerald-500/20">
                  Included in setup
                </td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="p-4 sm:p-5 font-semibold text-slate-800 dark:text-slate-200 text-left"
                >
                  SEO &amp; Content (monthly)
                </th>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400 font-mono">
                  $900 × 12 = $10,800
                </td>
                <td className="p-4 sm:p-5 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] text-emerald-700 dark:text-emerald-400 font-semibold border-l border-emerald-500/20">
                  Included in retainer
                </td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="p-4 sm:p-5 font-semibold text-slate-800 dark:text-slate-200 text-left"
                >
                  Ads Management (monthly)
                </th>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400 font-mono">
                  $1,200 × 12 = $14,400
                </td>
                <td className="p-4 sm:p-5 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] text-emerald-700 dark:text-emerald-400 font-semibold border-l border-emerald-500/20">
                  Included in retainer
                </td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th
                  scope="row"
                  className="p-4 sm:p-5 font-semibold text-slate-800 dark:text-slate-200 text-left"
                >
                  Project Management (your time)
                </th>
                <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400 font-mono">
                  $1,500 × 12 = $18,000
                </td>
                <td className="p-4 sm:p-5 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] text-emerald-700 dark:text-emerald-400 font-semibold border-l border-emerald-500/20">
                  $0 (we manage it all)
                </td>
              </tr>
              <tr className="text-base sm:text-lg font-bold">
                <th
                  scope="row"
                  className="p-4 sm:p-5 text-slate-850 dark:text-slate-100 text-left border-t-2 border-slate-200 dark:border-slate-800"
                >
                  Total Year 1 Cost
                </th>
                <td className="p-4 sm:p-5 text-slate-400 dark:text-slate-500 font-mono line-through border-t-2 border-slate-200 dark:border-slate-800">
                  $48,300
                </td>
                <td className="p-4 sm:p-5 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] text-emerald-700 dark:text-emerald-400 font-bold border-l border-emerald-500/20 border-t-2 border-slate-200 dark:border-slate-800">
                  <strong className="font-display text-xl sm:text-2xl text-emerald-700 dark:text-emerald-400 font-extrabold">
                    $17,900
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center gap-3 bg-gradient-to-br from-slate-100 via-slate-200 to-gray-100 text-slate-800 p-5 sm:p-6 rounded-2xl font-semibold shadow-lg shadow-cyan-500/10">
          <svg
            className="flex-shrink-0"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span>
            You save{" "}
            <strong className="text-cyan-800 font-bold">$30,400 in Year 1</strong>,
            and you're not managing three people.
          </span>
        </div>

        <p className="text-xs text-slate-50 dark:text-slate-400 mt-8 max-w-3xl leading-relaxed">
          * Estimates based on average market rates for Australian clinics.
          Actual savings vary. No guaranteed outcomes.
        </p>
      </div>
    </section>
  );
}
