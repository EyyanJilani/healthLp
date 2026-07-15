import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    clinic: "",
    email: "",
    phone: "",
    state: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    clinic: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === "name") {
      return value.trim().length >= 2 ? "" : "Please enter your name.";
    }
    if (name === "clinic") {
      return value.trim().length >= 2 ? "" : "Please enter your clinic name.";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value.trim()) ? "" : "Please enter a valid email.";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name in errors) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField("name", formData.name);
    const clinicErr = validateField("clinic", formData.clinic);
    const emailErr = validateField("email", formData.email);

    if (nameErr || clinicErr || emailErr) {
      setErrors({
        name: nameErr,
        clinic: clinicErr,
        email: emailErr,
      });

      if (nameErr) {
        document.getElementById("lf-name")?.focus();
      } else if (clinicErr) {
        document.getElementById("lf-clinic")?.focus();
      } else if (emailErr) {
        document.getElementById("lf-email")?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1100);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-100/50 text-slate-300 transition-colors duration-300" id="contact">
      <div className="w-full max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-wider bg-cyan-400/20 text-cyan-950 border border-cyan-900/30 px-3.5 py-1.5 rounded-full inline-block">
            Free · No obligation · 60 minutes
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
            See exactly what your clinic is
            <br />
            <span className="text-cyan-400">leaving on the table.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
            Book a free growth audit. We'll show you where patients drop off, what it's
            costing you each week, and what a working system looks like for your clinic.
          </p>
          <ul className="space-y-3.5 pt-4">
            <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-900">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>No lock-in contracts</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-900">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>You own your website</span>
            </li>
            <li className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-900">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400 shrink-0"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>AHPRA-compliant by default</span>
            </li>
          </ul>
        </div>

        {/* Lead form */}
        <div className="bg-white border  p-6 sm:p-8 rounded-3xl shadow-xl space-y-5 relative overflow-hidden">
          <h3 className="text-xl font-bold font-display text-black mb-2">Request your free audit</h3>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lf-name" className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Your name <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="lf-name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-slate-500/40 border ${
                  errors.name ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-slate-850 focus:ring-cyan-500/20 focus:border-cyan-500"
                } rounded-xl focus:outline-none focus:ring-2 transition-all text-black placeholder-slate-500`}
                aria-invalid={errors.name ? "true" : "false"}
                required
              />
              <span className="text-xs text-red-500 mt-0.5 min-h-[1.25em] block">
                {errors.name}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lf-clinic" className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Clinic name <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="lf-clinic"
                name="clinic"
                autoComplete="organization"
                value={formData.clinic}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-slate-500/40 border ${
                  errors.clinic ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-slate-850 focus:ring-cyan-500/20 focus:border-cyan-500"
                } rounded-xl focus:outline-none focus:ring-2 transition-all text-black placeholder-slate-500`}
                aria-invalid={errors.clinic ? "true" : "false"}
                required
              />
              <span className="text-xs text-red-500 mt-0.5 min-h-[1.25em] block">
                {errors.clinic}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lf-email" className="text-xs font-semibold uppercase tracking-wider text-slate-900">
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
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-slate-500/40 border ${
                    errors.email ? "border-red-500 focus:ring-red-500/20 focus:border-red-500" : "border-slate-850 focus:ring-cyan-500/20 focus:border-cyan-500"
                  } rounded-xl focus:outline-none focus:ring-2 transition-all text-black placeholder-slate-500`}
                  aria-invalid={errors.email ? "true" : "false"}
                  required
                />
                <span className="text-xs text-red-500 mt-0.5 min-h-[1.25em] block">
                  {errors.email}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lf-phone" className="text-xs font-semibold uppercase tracking-wider text-slate-900">Phone</label>
                <input
                  type="tel"
                  id="lf-phone"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-500/40 border border-slate-850 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-all text-black placeholder-slate-500"
                />
                <span className="text-xs text-slate-500 mt-0.5 min-h-[1.25em] block"></span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lf-state" className="text-xs font-semibold uppercase tracking-wider text-slate-900">State</label>
              <select
                id="lf-state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-500/40 border border-slate-850 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-all text-black"
              >
                <option value="">Select…</option>
                <option value="NSW">NSW</option>
                <option value="VIC">VIC</option>
                <option value="QLD">QLD</option>
                <option value="WA">WA</option>
                <option value="SA">SA</option>
                <option value="ACT">ACT</option>
                <option value="TAS">TAS</option>
                <option value="NT">NT</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 font-sans font-bold text-sm sm:text-base py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-black shadow-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

          <p className="text-center text-xs text-slate-500 mt-4">
            or{" "}
            <a
              href="https://calendly.com/digitalparadigm/product-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              book a time directly →
            </a>
          </p>

          {isSuccess && (
            <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-center p-6 animate-fade-in z-20" id="formSuccess" role="status" tabIndex={-1}>
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
              <h4 className="text-lg font-bold font-display text-black mb-2">Thanks, we're on it.</h4>
              <p className="text-sm text-slate-900 max-w-xs leading-relaxed">We'll be in touch within one business day to book your free audit.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
