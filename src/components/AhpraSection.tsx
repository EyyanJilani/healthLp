import AHPRA from "../../assets/images/AHPRA.png";

export default function AhpraSection() {
  const points = [
    "No guaranteed-outcome claims",
    "Review collection within AHPRA guidelines",
    "Cosmetic content follows Sept 2025 rules",
    "Practitioner titles used only as permitted",
    "Every campaign auditable against AHPRA",
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-cyan-900 via-cyan-800 to-teal-800 text-white transition-colors duration-300"
      id="ahpra"
    >
      <div className="w-full max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
       
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">
            AHPRA-compliant from day one,
            <br />
            <span className="text-cyan-300">
              not a disclaimer at the bottom.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-cyan-100/90 leading-relaxed max-w-xl">
            Australian healthcare advertising is heavily regulated, with fines
            up to{" "}
            <strong className="text-white font-bold">$60,000 per breach</strong>
            . We built our systems with the September 2025 rules as our starting
            point, not an afterthought.
          </p>
          <ul className="space-y-3.5">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3.5 bg-white/10 border border-white/20 p-4 rounded-xl font-semibold text-sm sm:text-base text-white backdrop-blur-sm shadow-md hover:bg-white/[0.14] transition-colors duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3.5">
         <img className="w-full rounded-xl" src={AHPRA} alt="AHPRA logo" />
        </div>
      </div>
    </section>
  );
}
