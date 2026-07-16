import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
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

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideToLoop(index);
    setActiveIndex(index);
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
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
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

          <Swiper
            modules={[Autoplay, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className=""
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={`${t.name}-${idx}`} className="h-auto">
                <figure className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-350 hover:-translate-y-1 flex flex-col gap-5 justify-between cursor-grab active:cursor-grabbing">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-cyan-600 dark:bg-cyan-500"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
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