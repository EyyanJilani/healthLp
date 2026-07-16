import { useState, useEffect } from "react";
import LogoLight from "../../assets/images/LogoDark.webp";
import LogoDark from "../../assets/images/LogoLight.webp";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "light");
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    try {
      localStorage.setItem("dph-theme", "light");
    } catch {
      // Ignored
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("dph-theme", theme);
    } catch {
      // Ignored
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-all duration-300 w-full ${
        scrolled
          ? "border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm"
          : "border-b border-transparent"
      }`}
      id="top"
    >
      <div className="w-full max-w-7xl mx-auto px-5 h-[70px] flex items-center justify-between">
        <a className="flex items-center gap-2.5 font-display group" href="#top" aria-label="Digital Paradigm Health home">
          <img
            src={theme === "dark" ? LogoDark : LogoLight}
            alt="Digital Paradigm Health"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-4" aria-label="Primary">
          <a href="#problem" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-[15px] px-3.5 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200">Problems</a>
          <a href="#system" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-[15px] px-3.5 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200">The System</a>
          <a href="#results" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-[15px] px-3.5 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200">Results</a>
          <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-[15px] px-3.5 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200">Pricing</a>
          <a href="#faq" className="text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-[15px] px-3.5 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200">FAQ</a>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          {/* <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            id="themeToggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            aria-pressed={theme === "dark"}
            title="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button> */}

          <a className="hidden sm:inline-flex items-center justify-center gap-1.5 font-sans font-semibold text-[14px] px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer" href="tel:+61390000000">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call</span>
          </a>

          <a
            className="hidden md:inline-flex items-center justify-center gap-1.5 font-sans font-semibold text-[14px] px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-slate-950 shadow-md shadow-emerald-500/10 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            href="https://calendly.com/digitalparadigm/product-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book free audit
          </a>
        </div>

        <button
          className="md:hidden ml-2 w-11 h-11 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 rounded-lg flex flex-col gap-1 items-center justify-center cursor-pointer"
          id="navToggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobileNav"
        >
          <span className={`w-5 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}></span>
          <span className={`w-5 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-5 h-[2px] bg-slate-800 dark:bg-slate-200 rounded-full transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="md:hidden flex flex-col gap-1 px-5 pb-5 pt-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 absolute top-[70px] left-0 w-full shadow-lg" id="mobileNav" style={{ display: menuOpen ? "flex" : "none" }}>
        <a href="#problem" className="text-slate-800 dark:text-slate-200 font-semibold text-[15px] p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" onClick={() => setMenuOpen(false)}>Problems</a>
        <a href="#system" className="text-slate-800 dark:text-slate-200 font-semibold text-[15px] p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" onClick={() => setMenuOpen(false)}>The System</a>
        <a href="#results" className="text-slate-800 dark:text-slate-200 font-semibold text-[15px] p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" onClick={() => setMenuOpen(false)}>Results</a>
        <a href="#pricing" className="text-slate-800 dark:text-slate-200 font-semibold text-[15px] p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#faq" className="text-slate-800 dark:text-slate-200 font-semibold text-[15px] p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a
          className="w-full mt-2 inline-flex items-center justify-center gap-1.5 font-sans font-semibold text-[15px] py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-slate-950 shadow-md transition-all text-center"
          href="https://calendly.com/digitalparadigm/product-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Book free audit
        </a>
      </div>
    </header>
  );
}
