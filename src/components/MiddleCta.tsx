import React from "react";
import { ArrowRight, Activity, Stethoscope, Heart, Radio, Network } from "lucide-react";

export default function PracticeIntelligenceCta() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-800 via-cyan-700 to-teal-800 text-white relative overflow-hidden border-t border-b border-slate-900/80">
      
      {/* Sleek Technical Wireframe / Isometric Grid Background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, #475569 1px, transparent 1px),
          linear-gradient(to bottom, #475569 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle at 50% 50%, black, transparent 80%)"
      }}></div>

      {/* Futuristic Isometric Background Lines (Matching the screenshot's wireframe grid) */}
      <svg className="absolute right-0 top-0 h-full w-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/155" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#090d16" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 0,200 L 1000,500 M 0,400 L 1000,700 M 0,600 L 1000,900" stroke="url(#grid-grad)" strokeWidth="1" />
        <path d="M 200,0 L 500,1000 M 400,0 L 700,1000 M 600,0 L 900,1000" stroke="url(#grid-grad)" strokeWidth="1" />
        <path d="M 1000,200 L 0,500 M 1000,400 L 0,700 M 1000,600 L 0,900" stroke="url(#grid-grad)" strokeWidth="1" />
      </svg>

      {/* Decorative ambient neon glows */}
      <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-5 relative z-10">
        <div className="flex justify-center text-center">
          
          {/* Left Column: Premium Copywriting directly inspired by high-end design */}
          <div className="space-y-6 max-w-3xl">
            <div className="space-y-3">
              <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase block">
                One Platform. Total Visibility.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-[1.1]">
                See Practice Intelligence in action
              </h2>
            </div>

            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              We tie together everything your clinic needs to capture, remind, and reactivate patients. 
              See exactly how we spot blocked slots, capture missed calls with auto-SMS text-back, 
              and bypass complex, manual front-desk processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-sans font-bold text-sm py-4 px-8 rounded-xl bg-white text-black hover:bg-white shadow-lg shadow-[#c3f53c]/10 hover:shadow-[#c3f53c]/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get Demo</span>
                <ArrowRight className="w-4 h-4 text-wite" />
              </a>
              <a
                href="#transform"
                className="inline-flex items-center justify-center gap-2 font-sans font-bold text-sm py-4 px-8 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Infrastructure</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stunning Health-Related Isometric Visualizer Element */}
        
        </div>
      </div>

      {/* Tailwind inline animation styling rules injection */}
      <style>{`
        @keyframes draw-pulse {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
}
