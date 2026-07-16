import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroCalculator from "./components/HeroCalculator";
import StatBand from "./components/StatBand";
import ProblemSection from "./components/ProblemSection";
import CompareSection from "./components/CompareSection";
import PhasesSection from "./components/PhasesSection";
import ResultsSection from "./components/ResultsSection";
import Testimonials from "./components/Testimonials";
import CostComparison from "./components/CostComparison";
import CoverageSection from "./components/CoverageSection";
import AhpraSection from "./components/AhpraSection";
import PricingSection from "./components/PricingSection";
import ProcessSection from "./components/ProcessSection";
import FaqSection from "./components/FaqSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MobileStickyCta from "./components/MobileStickyCta";
import LogosTrip from "./components/logosTrip";
import MiddleCta from "./components/MiddleCta";

export default function App() {
  const [fee, setFee] = useState(180);
  const [slots, setSlots] = useState(5);

  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      const element = el as HTMLElement;
      const delay = element.getAttribute("data-reveal-delay");
      if (delay) {
        element.style.setProperty("--d", delay);
      }
    });

    if ("IntersectionObserver" in window && !prefersReduced) {
      const revealObs = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      reveals.forEach((el) => revealObs.observe(el));
      return () => revealObs.disconnect();
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }
  }, []);

  return (
    <div className="overflow-x-clip">
     

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main">
        {/* Hero & Loss Estimator */}
        <HeroCalculator
          fee={fee}
          setFee={setFee}
          slots={slots}
          setSlots={setSlots}
        />

        {/* Benchmarks Stat strip */}
        <LogosTrip/>
        {/* Benchmarks Stat strip */}

        <StatBand />

        {/* Problem Breakdown */}
        <ProblemSection />

        {/* Transformation Compare */}
        <CompareSection />

        {/* System Phases */}
        <PhasesSection />

        <MiddleCta/>

        {/* practice metrics results */}
        <ResultsSection />

        {/* Reviews and Testimonials */}
        <Testimonials />

        {/* Juggling vs Paradigms cost comparison */}
        <CostComparison />

        {/* Territory coverages */}
        <CoverageSection />

        {/* AHPRA regulations */}
        <AhpraSection />

        {/* Packages pricing list */}
        <PricingSection />

        {/* Process timelines */}
        <ProcessSection />

        {/* Accordions FAQ */}
        <FaqSection />

        {/* Free audit final forms */}
        <ContactForm />
      </main>

      {/* Footers */}
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <MobileStickyCta fee={fee} slots={slots} />
    </div>
  );
}
