import React, { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
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
      message: formData.message || "",
      comments: formData.message || "",
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

  const baseInput =
    "w-full px-4 py-3 bg-slate-50 dark:bg-slate-950/50 border rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500";
  const normalBorder =
    "border-slate-200 dark:border-slate-800 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 focus:border-cyan-500 dark:focus:border-cyan-400";

  return (
    <section className="py-16 md:py-24 bg-slate-100/50 dark:bg-slate-950/50 transition-colors duration-300" id="contact">
      <div className="w-full max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-wider bg-cyan-400/20 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-300 border border-cyan-900/30 dark:border-cyan-400/20 px-3.5 py-1.5 rounded-full inline-block">
            Free · No obligation · 60 minutes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
            See exactly what your clinic is
            <br />
            <span className="text-cyan-600 dark:text-cyan-400">leaving on the table.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
            Book a free growth audit. We'll show you where patients drop off, what it's
            costing you each week, and what a working system looks like for your clinic.
          </p>
          <ul className="space-y-3.5 pt-4">
            <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>No lock-in contracts</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>You own your website</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>AHPRA-compliant by default</span>
            </li>
          </ul>
        </div>

        {/* Lead form */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-5 relative overflow-hidden">
          <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">Request your free audit</h3>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lf-fullName" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Full name <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="lf-fullName"
                name="fullName"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                className={`${baseInput} ${normalBorder}`}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lf-email" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="lf-email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${baseInput} ${normalBorder}`}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lf-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Phone <span aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="lf-phone"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${baseInput} ${normalBorder}`}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lf-message" className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="lf-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${baseInput} min-h-[110px] resize-y ${normalBorder}`}
              />
            </div>

            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 font-sans font-bold text-sm sm:text-base py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-950 shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              id="lf-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin shrink-0"></span>
                  <span>Processing...</span>
                </>
              ) : (
                <span>Get my free audit</span>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
            or{" "}
            <a
              href="https://calendly.com/digitalparadigm/product-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              book a time directly →
            </a>
          </p>

          {isSuccess && (
            <div className="absolute inset-0 bg-white/97 dark:bg-slate-950/97 flex flex-col items-center justify-center text-center p-6 animate-fade-in z-20" id="formSuccess" role="status" tabIndex={-1}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-500 mb-4 shrink-0 animate-bounce"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2">Thanks, we're on it.</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">We'll be in touch within one business day to book your free audit.</p>
              <p className="mt-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">{submittedName}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}