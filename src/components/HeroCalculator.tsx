import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Check } from "lucide-react";

export default function HeroCalculator() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    competitorAnalysis: true,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === "name") {
      return value.trim().length >= 2 ? "" : "Please enter your full name.";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value.trim()) ? "" : "Please enter a valid email address.";
    }
    if (name === "phone") {
      const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      if (!value.trim()) return "";
      return phoneRegex.test(value.trim()) && value.trim().length >= 8
        ? ""
        : "Please enter a valid phone number.";
    }
    if (name === "message") {
      return value.trim().length >= 5 ? "" : "Please write a brief message or describe your clinic.";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      const errMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errMsg }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errMsg }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, competitorAnalysis: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const phoneErr = validateField("phone", formData.phone);
    const msgErr = validateField("message", formData.message);

    if (nameErr || emailErr || phoneErr || msgErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        phone: phoneErr,
        message: msgErr,
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-radial-gradient from-cyan-50/40 via-transparent to-transparent dark:from-cyan-950/10 pointer-events-none" aria-hidden="true"></div>
      <div className="w-full max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/30 px-3.5 py-1.5 rounded-full mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" aria-hidden="true"></span>
            Healthcare digital growth · Australia-wide
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-[1.1] sm:leading-none">
            Every empty slot is revenue
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-500 dark:from-cyan-400 dark:to-teal-400">your clinic already lost today.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            A website that doesn't convert. Ads that bring clicks, not bookings.
            Missed calls with no follow-up. All of it is fixable, and it's
            costing you more than you think. Let us show you exactly how to fix it.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-2 font-sans font-bold text-sm sm:text-base px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-slate-950 shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all duration-300" href="#packages">
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
            <a className="inline-flex items-center gap-2 font-sans font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300" href="#contact">
              Direct Contact
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <li className="flex items-center gap-1.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-emerald-500 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>Trusted by <strong className="text-slate-900 dark:text-white font-bold">22+</strong> Australian clinics</span>
            </li>
            <li className="flex items-center gap-1.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-emerald-500 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>Melbourne HQ · Nationwide</span>
            </li>
            <li className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/20 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600 shrink-0" />
              <span>AHPRA-ready</span>
            </li>
          </ul>
        </div>

        {/* Lead/Contact Form Card */}
        <aside className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-md" aria-labelledby="form-title" style={{ minHeight: "530px" }}>
          {!isSuccess ? (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                  <h2 id="form-title" className="text-xl font-bold font-display tracking-tight text-slate-800 dark:text-slate-100">
                    Get your free growth audit
                  </h2>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100/60 dark:border-cyan-900/40 px-2.5 py-1 rounded-full whitespace-nowrap">AHPRA Compliant</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 -mt-3">
                  Our custom-compiled patient acquisition and retention review for your clinic.
                </p>

                <div className="space-y-4">
                  {/* Full Name field */}
                  <div>
                    <label htmlFor="hero-name" className="sr-only">Full Name</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="hero-name"
                        name="name"
                        placeholder="Full Name *"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                        } rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400`}
                        required
                      />
                    </div>
                    {errors.name && (
                      <span className="mt-1 text-xs text-red-500 block">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Address field */}
                  <div>
                    <label htmlFor="hero-email" className="sr-only">Email Address</label>
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
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                        } rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400`}
                        required
                      />
                    </div>
                    {errors.email && (
                      <span className="mt-1 text-xs text-red-500 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone Number field */}
                  <div>
                    <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="hero-phone"
                        name="phone"
                        placeholder="Phone Number (Optional)"
                        autoComplete="tel"
                        inputMode="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                        } rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400`}
                      />
                    </div>
                    {errors.phone && (
                      <span className="mt-1 text-xs text-red-500 block">{errors.phone}</span>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="hero-message" className="sr-only">Message / Clinic Details</label>
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
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 focus:border-cyan-500"
                        } rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none`}
                        required
                      />
                    </div>
                    {errors.message && (
                      <span className="mt-1 text-xs text-red-500 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Interactive toggle option */}
                  <div className="flex items-start gap-3 mt-2 px-1">
                    <input
                      type="checkbox"
                      id="competitor-analysis"
                      checked={formData.competitorAnalysis}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 text-cyan-600 border-slate-300 rounded focus:ring-cyan-500 focus:ring-2 cursor-pointer"
                    />
                    <label htmlFor="competitor-analysis" className="text-xs text-slate-500 dark:text-slate-400 select-none cursor-pointer leading-tight">
                      Yes, include a free local competitor booking analysis (Recommended)
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
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
                  Your information is fully secure under Australian Privacy Principles. Melbourne HQ support.
                </p>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center h-full py-6 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-md border border-emerald-100 dark:border-emerald-900/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-100 mb-2">
                Thank you, {formData.name.split(" ")[0]}!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[280px] mb-6">
                We have received your growth audit request and are on it. One of our digital specialists will contact you at <strong>{formData.email}</strong> within 1 business day.
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
                    <span>Website loading speed & mobile optimization audit</span>
                  </li>
                  {formData.competitorAnalysis && (
                    <li className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                      <span>Competitor Google Ads and SEO visibility report</span>
                    </li>
                  )}
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
