import { useState, useEffect, useRef } from "react";
import { StatItem } from "../types";

function StatCountUp({ stat }: { stat: StatItem; key?: any }) {
  const {
    target,
    prefix = "",
    suffix = "",
    decimals = 0,
    label,
    subLabel,
  } = stat;

  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const runCountUp = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1300;
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setValue(target * eased);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };

      requestAnimationFrame(tick);
    };

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCountUp();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      runCountUp();
    }
  }, [target]);

  const displayValue = prefix + value.toFixed(decimals) + suffix;

  return (
    <div
      ref={elementRef}
      className="p-5 flex flex-col gap-1 border-r border-b border-slate-200 dark:border-slate-800/80 last:border-r-0 md:even:border-r-0 lg:even:border-r"
    >
      <span className="font-display font-black text-2xl sm:text-5xl bg-cyan-700 text-white text-center py-4 rounded-xl dark:text-cyan-400 tracking-tight tabular-nums">
        {displayValue}
      </span>
      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-200 flex flex-col leading-snug">
        {label}
        <span className="font-normal text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 leading-tight">
          {subLabel}
        </span>
      </span>
    </div>
  );
}

export default function StatBand() {
  const stats: StatItem[] = [
    {
      target: 180,
      prefix: "$",
      label: "Lost per missed slot",
      subLabel: "avg, AU private clinics",
    },
    {
      target: 18,
      suffix: "%",
      label: "No-show rate",
      subLabel: "without reminders",
    },
    {
      target: 50,
      suffix: "%",
      label: "Don't call back",
      subLabel: "after a missed call",
    },
    {
      target: 8,
      suffix: " sec",
      label: "Before they leave",
      subLabel: "if mobile booking isn't obvious",
    },
    {
      target: 3.6,
      suffix: "x",
      decimals: 1,
      label: "Avg Google Ads ROAS",
      subLabel: "healthcare benchmark",
    },
    {
      target: 25,
      suffix: "%",
      label: "No-show reduction",
      subLabel: "with automated reminders",
    },
  ];

  return (
    <div className="relative z-10 border-t border-b border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 transition-colors duration-300" aria-label="Industry benchmarks">
      <div className="w-full max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, i) => (
          <StatCountUp
            key={i}
            stat={stat}
          />
        ))}
      </div>
    </div>
  );
}
