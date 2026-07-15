import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import  resultImage1  from "../../assets/images/result1.webp";
import  resultImage2  from "../../assets/images/result2.webp";
import  resultImage3  from "../../assets/images/result3.webp";
import  resultImage4  from "../../assets/images/result4.webp";

interface ResultWithImage {
  title: string;
  location: string;
  tag: string;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    trend?: 'up' | 'down';
  }[];
}

export default function ResultsSection() {
  const results: ResultWithImage[] = [
    {
      title: "Orthodontists",
      location: "Melbourne, VIC",
      tag: "Dental",
      image: resultImage1,
      description:
        "Consistently attract high-value orthodontic cases not just enquiries.",
      metrics: [
        { label: "Bookings", value: "+71%", trend: "up" },
        { label: "No-shows", value: "−32%", trend: "down" },
        { label: "Cost / patient", value: "$52" },
      ],
    },
    {
      title: "Physiotherapy Clinics",
      location: "Sydney, NSW",
      tag: "Physical Therapy",
      image: resultImage2,
      description:
        "Keep your appointment book full with consistent patient flow.",
         metrics: [
        { label: "Bookings / 3mo", value: "+29", trend: "up" },
        { label: "Calls recovered", value: "38%" },
        { label: "from 3.1★", value: "3.6★" },
      ],
    },
    {
      title: "Cosmetic Clinics",
      location: "Brisbane, QLD",
      tag: "Beauty",
      image: resultImage3,
      description:
        "Attract premium clients and turn interest into booked treatments.",
      metrics: [
        { label: "Weekly enquiries", value: "+22%", trend: "up" },
        { label: "Cost / patient", value: "$58" },
        { label: "Ads ROAS", value: "3.2x" },
      ],
    },
    {
      title: "Dental Clinics",
      location: "Perth, WA",
      tag: "Dental Specialist",
      image: resultImage4,
      description:
        "Fill your chairs with a predictable flow of high-quality patients.",
      metrics: [
        { label: "Calls recovered", value: "41%" },
        { label: "Admin / week", value: "−6hrs", trend: "down" },
        { label: "Bookings / mo", value: "+19", trend: "up" },
      ],
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // ── Slider refs (no re-renders in animation loop) ────────────────────────────
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const lastDragXRef = useRef(0);
  const velocityRef = useRef(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Dot sync ─────────────────────────────────────────────────────────────────
  const syncDot = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? el.clientWidth;
    const idx = Math.round(el.scrollLeft / (cardW + 24));
    setActiveDot(Math.min(results.length - 1, Math.max(0, idx)));
  }, [results.length]);

  // Keep dot in sync on native scroll (arrow keys, trackpad, etc.)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncDot, { passive: true });
    return () => el.removeEventListener("scroll", syncDot);
  }, [syncDot]);

  // ── Momentum coast after drag ─────────────────────────────────────────────────
  const coastRef = useRef<number>(0);
  const startCoast = useCallback(() => {
    cancelAnimationFrame(coastRef.current);
    const step = () => {
      const el = scrollRef.current;
      if (!el || Math.abs(velocityRef.current) < 0.3) return;
      el.scrollLeft += velocityRef.current;
      velocityRef.current *= 0.88; // friction
      syncDot();
      coastRef.current = requestAnimationFrame(step);
    };
    coastRef.current = requestAnimationFrame(step);
  }, [syncDot]);

  // ── Mouse drag ────────────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    lastDragXRef.current = e.clientX;
    dragStartScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
    velocityRef.current = 0;
    cancelAnimationFrame(coastRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    scrollRef.current.scrollLeft = dragStartScrollRef.current - dx;
    velocityRef.current = lastDragXRef.current - e.clientX;
    lastDragXRef.current = e.clientX;
    syncDot();
  };

  const onMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    startCoast();
  };

  const onMouseLeave = () => {
    if (isDraggingRef.current) onMouseUp();
  };

  // ── Touch drag ────────────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartXRef.current = e.touches[0].clientX;
    lastDragXRef.current = e.touches[0].clientX;
    dragStartScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
    velocityRef.current = 0;
    cancelAnimationFrame(coastRef.current);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartXRef.current;
    scrollRef.current.scrollLeft = dragStartScrollRef.current - dx;
    velocityRef.current = lastDragXRef.current - e.touches[0].clientX;
    lastDragXRef.current = e.touches[0].clientX;
    syncDot();
  };

  const onTouchEnd = () => {
    startCoast();
  };

  // ── Arrow buttons ─────────────────────────────────────────────────────────────
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? el.clientWidth;
    el.scrollBy({ left: (cardW + 24) * (direction === "left" ? -1 : 1), behavior: "smooth" });
  };

  // ── Dot click ─────────────────────────────────────────────────────────────────
  const scrollToDot = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? el.clientWidth;
    el.scrollTo({ left: index * (cardW + 24), behavior: "smooth" });
    setActiveDot(index);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/10 transition-colors duration-300" id="results">
      <div className="w-full max-w-6xl mx-auto px-5">

        {/* Header with inline controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3 h-3" />
              Real-world results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white">
              What Australian clinics are achieving.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Operational improvements from clinics using our system. No clinical outcome
              claims, only practice performance.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer shadow-sm active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Container */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {results.map((item, idx) => (
            <article
              key={idx}
              className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1 group flex flex-col h-full cursor-grab active:cursor-grabbing"
            >
              {/* Image Header with Elegant Overlay */}
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={`${item.title} facility and operations`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  draggable={false}
                />
                <span className="absolute top-4 right-4 z-20 text-[10px] font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
                  {item.tag}
                </span>
              </div>

              {/* Card Body content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mb-2 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-bold text-xl font-display text-slate-900 dark:text-white leading-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Metrics Footer Section inside Card */}
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col gap-0.5">
                      <strong
                        className={`font-display text-lg font-black tabular-nums tracking-tight ${
                          m.trend === "up"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : m.trend === "down"
                            ? "text-rose-600 dark:text-rose-400"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {m.value}
                      </strong>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Bottom Indicator Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {results.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === idx
                  ? "w-8 bg-cyan-600 dark:bg-cyan-500"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-450 dark:hover:bg-slate-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Extra notice */}
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-12 text-center max-w-3xl mx-auto leading-relaxed">
          * Individual results vary by clinic size, location, and market conditions.
          Historical operational metrics, not clinical outcome guarantees.
        </p>
      </div>
    </section>
  );
}
