import LogoLight from "../../assets/images/LogoLight.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 md:py-20 border-t border-slate-900 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12 mb-16">
        <div className="space-y-4">
          <a className="inline-flex items-center hover:opacity-90 transition-opacity" href="#top" aria-label="Digital Paradigm Health home">
            <img src={LogoLight} alt="Digital Paradigm Health" className="h-8 w-auto object-contain" />
          </a>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Healthcare digital growth for Australian clinics. Build the foundation, grow
            on it, all AHPRA-compliant from day one.
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Melbourne HQ · Serving NSW, VIC, QLD, WA, SA, ACT, TAS &amp; NT
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">Explore</h4>
            <a href="#problem" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">Problems</a>
            <a href="#system" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">The System</a>
            <a href="#results" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">Results</a>
            <a href="#pricing" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">Pricing</a>
          </div>
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
            <a href="#ahpra" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">AHPRA compliance</a>
            <a href="#coverage" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">Coverage</a>
            <a href="#faq" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5">FAQ</a>
          </div>
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-4">Get in touch</h4>
            <a
              href="https://calendly.com/digitalparadigm/product-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5"
            >
              Book free audit
            </a>
            <a href="mailto:info@digitalparadigm.com.au" className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 py-1.5 break-all">info@digitalparadigm.com.au</a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-5 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-500">
        <p>© {currentYear} Digital Paradigm Health. All rights reserved.</p>
        <p className="max-w-md md:text-right leading-relaxed">
          Estimates and benchmarks are illustrative and not guarantees of outcome. All
          marketing conducted in line with AHPRA advertising guidelines.
        </p>
      </div>
    </footer>
  );
}
