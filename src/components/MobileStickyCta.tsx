import { useState, useEffect } from "react";

interface MobileStickyCtaProps {
  fee: number;
  slots: number;
}

export default function MobileStickyCta({ fee, slots }: MobileStickyCtaProps) {
  const [show, setShow] = useState(false);

  const fmt = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });

  const money = (n: number) => fmt.format(Math.round(n));
  const annual = fee * slots * 52;

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector(".hero");
      const contactEl = document.getElementById("contact");

      if (!heroEl) return;

      const heroBottom = heroEl.getBoundingClientRect().bottom;
      const contactTop = contactEl ? contactEl.getBoundingClientRect().top : Infinity;

      // Show when scrolled past hero bottom and before final contact section reaches bottom
      const isVisible = heroBottom < 0 && contactTop > window.innerHeight;
      setShow(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-3 right-3 bottom-3 z-40 flex items-center justify-between gap-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-300/80 dark:border-slate-800/80 rounded-full py-2 pl-5 pr-2 shadow-xl md:hidden transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="flex flex-col leading-tight">
        <strong id="mobileLoss" className="font-display font-bold text-red-600 dark:text-red-400 text-sm sm:text-base">
          {money(annual)}/yr
        </strong>
        <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
          est. at risk
        </span>
      </div>
      <a
        className="inline-flex items-center justify-center font-sans font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 transition-all duration-150 shadow-md cursor-pointer"
        href="https://calendly.com/digitalparadigm/product-strategy-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        Free audit
      </a>
    </div>
  );
}
