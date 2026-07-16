import React, { useState, ChangeEvent, FormEvent } from "react";
import trust1 from "../../assets/images/trust1.png";
import trust2 from "../../assets/images/trust2.png";
import trust3 from "../../assets/images/trust3.png";
import trust4 from "../../assets/images/trust4.png";
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroCalculator() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      return setErrorMessage("Please enter your full name.");
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      return setErrorMessage("Please enter a valid email address.");
    }
    if (!formData.phone.trim()) {
      return setErrorMessage("Please enter your phone number.");
    }
    if (!formData.message.trim()) {
      return setErrorMessage("Please write a brief message or describe your clinic.");
    }

    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      comments: formData.message,
    };

    try {
      const res = await fetch("https://server.optimal-itsolutions.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const name = formData.fullName.trim().split(" ")[0] || "there";
        setSubmittedName(name);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSuccess(true);
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMessage(errorData?.error || "Failed to send your request. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Unable to reach the server. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div
        className="absolute inset-0 bg-radial-gradient from-cyan-50/40 via-transparent to-transparent dark:from-cyan-950/10 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="w-full max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-2">
            <span
              className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"
              aria-hidden="true"
            ></span>
            Healthcare digital growth · Australia-wide
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.1] sm:leading-none">
            Every empty slot is revenue
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400">
              your clinic already lost today.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            A website that doesn't convert. Ads that bring clicks, not bookings.
            Missed calls with no follow-up. All of it is fixable, and it's
            costing you more than you think. Let us show you exactly how to fix
            it.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-2 font-sans font-bold text-sm sm:text-base px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-slate-950 shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all duration-300"
              href="#packages"
            >
              See packages
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              className="inline-flex items-center gap-2 font-sans font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300"
              href="#contact"
            >
              Direct Contact
            </a>
          </div>

          <div className="gap-2 md:w-28 w-16 flex">
            <img className="rounded-md" src={trust1} alt="" />
            <img className="rounded-md" src={trust2} alt="" />
            <img className="rounded-md" src={trust3} alt="" />
            <img className="rounded-md" src={trust4} alt="" />
          </div>
        </div>

        <aside
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-md"
          aria-labelledby="form-title"
          style={{ minHeight: "530px" }}
        >
          {!isSuccess ? (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                  <h2
                    id="form-title"
                    className="text-xl font-bold font-display tracking-tight text-slate-800 dark:text-slate-100"
                  >
                    Get your free growth audit
                  </h2>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100/60 dark:border-cyan-900/40 px-2.5 py-1 rounded-full whitespace-nowrap">
                    AHPRA Compliant
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 -mt-3">
                  Our custom-compiled patient acquisition and retention review
                  for your clinic.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="hero-fullName" className="sr-only">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="hero-fullName"
                        name="fullName"
                        placeholder="Full Name *"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500 rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-email" className="sr-only">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="hero-email"
                        name="email"
                        placeholder="Email Address *"
                        autoComplete="email"
                        inputMode="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500 rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-phone" className="sr-only">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="hero-phone"
                        name="phone"
                        placeholder="Phone Number *"
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500 rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-message" className="sr-only">
                      Message / Clinic Details
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-3 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        id="hero-message"
                        name="message"
                        placeholder="Tell us about your clinic or website URL *"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500 rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {errorMessage && (
                  <p className="mb-3 text-sm text-red-500">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-2 font-sans font-bold text-sm sm:text-base px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-slate-950 shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all duration-300 ${
                    isSubmitting ? "cursor-not-allowed opacity-80" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin shrink-0"></span>
                      <span>Processing audit request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Free Growth Audit</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-3">
                  Your information is fully secure under Australian Privacy
                  Principles. Melbourne HQ support.
                </p>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full py-6 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-md border border-emerald-100 dark:border-emerald-900/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-100 mb-2">
                Thank you, {submittedName}!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[280px] mb-6">
                We have received your growth audit request and are on it. One of
                our digital specialists will contact you at{" "}
                <strong>{formData.email}</strong> within 1 business day.
              </p>

              <div className="w-full text-left bg-slate-50 dark:bg-slate-900/40 rounded-xl p-4 border border-slate-100 dark:border-slate-800/60 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">
                  What we are preparing for you:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <span>Local booking & competitor leak identification</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <span>
                      Website loading speed & mobile optimization audit
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <span>Competitor Google Ads and SEO visibility report</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <span>AHPRA advertising compliance guideline check</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
