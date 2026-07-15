import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do I own my website if I cancel?",
      answer:
        "Yes, 100% yours. We hand over all files, hosting access, and domain credentials. No lock-in, no data held hostage.",
    },
    {
      question: "How soon before I see my first booking?",
      answer:
        "Most clinics see their first system-generated booking within 2–4 weeks of campaigns going live. We track everything to actual appointments, not just clicks.",
    },
    {
      question: "Is this AHPRA compliant?",
      answer:
        "Absolutely. Our copy, campaign structure, and review processes are built around the September 2025 AHPRA guidelines. No guaranteed outcomes, no unverified claims, and everything is auditable.",
    },
    {
      question: "What if I want to pause or cancel?",
      answer:
        "30 days' notice, with no lock-in contracts. We pause the marketing; you keep the infrastructure, your website, and your data.",
    },
    {
      question: "How is this different from a normal marketing agency?",
      answer:
        "Most agencies only run ads on top of a website that doesn't convert. We fix the foundation first (booking flow, missed-call recovery, reminders), then drive traffic to a system that actually turns clicks into booked patients.",
    },
  ];

  const handleToggle = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300" id="faq">
      <div className="w-full max-w-3xl mx-auto px-5">
        <p className="inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-4">
          Questions? We've got answers.
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-12">
          What Australian clinic owners ask us.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/60 transition-all duration-300">
                <button
                  onClick={(e) => handleToggle(idx, e)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 font-display font-bold text-left text-base sm:text-lg text-slate-900 dark:text-white cursor-pointer select-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`transition-all duration-350 ease-in-out ${isOpen ? "max-h-[500px] border-t border-slate-100 dark:border-slate-800/60" : "max-h-0 overflow-hidden"}`}>
                  <div className="p-5 sm:p-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
