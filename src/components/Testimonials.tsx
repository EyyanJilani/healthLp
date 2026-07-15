import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { TestimonialItem } from "../types";

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
    {
      initials: "AK",
      name: "Dr. Andrew K.",
      role: "Practice Partner · Dental, WA",
      quote:
        "We used to get 15-20 missed calls every Saturday. The automatic SMS text-back now converts about half of them into bookings before Monday morning.",
    },
    {
      initials: "CM",
      name: "Claire M.",
      role: "Practice Manager · Specialist Clinic, SA",
      quote:
        "The recall campaigns run entirely in the background. We reactivated 58 patients in our first fortnight without picking up the phone once.",
    },
    {
      initials: "TB",
      name: "Dr. Timothy B.",
      role: "Clinic Founder · Chiro, NSW",
      quote:
        "Our Google Maps ranking jumped from #12 to #3 in our suburb. The incoming phone enquiries have practically doubled in three months.",
    },
  ];

  // Triplicate for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // ── Slider State Refs (avoid re-renders in animation loop) ──────────────────
  const isPausedRef = useRef(false);       // paused by hover / drag
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const velocityRef = useRef(0);           // momentum after drag release
  const lastDragXRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const SPEED = 0.035; // px per ms (auto-scroll)

  // ── Dot sync ────────────────────────────────────────────────────────────────
  const syncDot = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 3;
    const rawOffset = el.scrollLeft % singleSetWidth;
    // Approximate card width from the first child
    const cardW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? el.clientWidth;
    const gap = 24;
    const idx = Math.round(rawOffset / (cardW + gap));
    setActiveDot(Math.min(testimonials.length - 1, Math.max(0, idx)));
  }, [testimonials.length]);

  // ── Infinite wrap helper ─────────────────────────────────────────────────────
  const wrapScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft >= singleSetWidth * 2) el.scrollLeft -= singleSetWidth;
    if (el.scrollLeft < singleSetWidth * 0) el.scrollLeft += singleSetWidth;
  }, []);

  // ── Main animation loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const el = scrollRef.current;
      if (el) {
        if (!isPausedRef.current) {
          // Auto-scroll
          el.scrollLeft += SPEED * delta;
          wrapScroll();
        } else if (Math.abs(velocityRef.current) > 0.1) {
          // Momentum coast after drag
          el.scrollLeft += velocityRef.current;
          velocityRef.current *= 0.92; // friction
          wrapScroll();
        }
        syncDot();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [wrapScroll, syncDot]);

  // ── Pause / resume helpers ───────────────────────────────────────────────────
  const pause = () => {
    isPausedRef.current = true;
    lastTimeRef.current = 0; // reset so delta doesn't spike on resume
  };
  const resume = () => {
    isPausedRef.current = false;
  };

  // ── Mouse drag ───────────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    lastDragXRef.current = e.clientX;
    dragStartScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
    velocityRef.current = 0;
    pause();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    scrollRef.current.scrollLeft = dragStartScrollRef.current - dx;
    velocityRef.current = lastDragXRef.current - e.clientX; // direction × magnitude
    lastDragXRef.current = e.clientX;
    wrapScroll();
  };

  const onMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Let momentum coast for a bit, then resume auto-scroll after 1.2s
    setTimeout(resume, 1200);
  };

  const onMouseLeave = () => {
    if (isDraggingRef.current) onMouseUp();
    else resume();
  };

  // ── Touch drag ───────────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartXRef.current = e.touches[0].clientX;
    lastDragXRef.current = e.touches[0].clientX;
    dragStartScrollRef.current = scrollRef.current?.scrollLeft ?? 0;
    velocityRef.current = 0;
    pause();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartXRef.current;
    scrollRef.current.scrollLeft = dragStartScrollRef.current - dx;
    velocityRef.current = lastDragXRef.current - e.touches[0].clientX;
    lastDragXRef.current = e.touches[0].clientX;
    wrapScroll();
  };

  const onTouchEnd = () => {
    setTimeout(resume, 1200);
  };

  // ── Arrow buttons ────────────────────────────────────────────────────────────
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? el.clientWidth;
    const amount = (cardW + 24) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
    // Brief pause so user sees the scroll
    pause();
    setTimeout(resume, 1400);
  };

  // ── Dot click ────────────────────────────────────────────────────────────────
  const scrollToDot = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = (el.firstElementChild as HTMLElement)?.offsetWidth ?? el.clientWidth;
    // Jump to the middle set so there's room to scroll both ways
    const singleSetWidth = el.scrollWidth / 3;
    el.scrollTo({ left: singleSetWidth + index * (cardW + 24), behavior: "smooth" });
    setActiveDot(index);
    pause();
    setTimeout(resume, 1400);
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden" id="voices">
      <div className="w-full max-w-6xl mx-auto px-5">

        {/* Header with inline controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-55 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full">
              <MessageSquare className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              In their words
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Clinic owners who stopped
              <br />
              <span className="text-cyan-600 dark:text-cyan-400">juggling vendors.</span>
            </h2>
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

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Edge fades */}
          <div className="absolute top-0 bottom-0 -left-6 w-12 bg-gradient-to-r from-white dark:from-slate-950 via-transparent to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 bottom-0 -right-6 w-12 bg-gradient-to-l from-white dark:from-slate-950 via-transparent to-transparent z-10 pointer-events-none hidden md:block"></div>

          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseEnter={pause}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {duplicatedTestimonials.map((t, idx) => (
              <figure
                key={idx}
                className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1 flex flex-col gap-5 justify-between cursor-grab active:cursor-grabbing"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-amber-500 tracking-wider text-base" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                    <Quote className="w-6 h-6 text-slate-200 dark:text-slate-800" />
                  </div>
                  <blockquote className="font-display font-medium text-[15px] sm:text-[16px] leading-relaxed text-slate-805 dark:text-slate-100 italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <figcaption className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                  <span className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-800 via-cyan-700 to-teal-700 text-white font-bold text-sm shrink-0 shadow-md shadow-cyan-500/10" aria-hidden="true">
                    {t.initials}
                  </span>
                  <span className="flex flex-col">
                    <strong className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{t.name}</strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === idx
                  ? "w-8 bg-cyan-600 dark:bg-cyan-500"
                  : "w-2.5 bg-slate-300 dark:bg-slate-750 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-12 max-w-3xl leading-relaxed text-center mx-auto">
          * Testimonials reflect individual experiences with our service and operations, not
          clinical outcomes. Names abbreviated for privacy.
        </p>
      </div>
    </section>
  );
}