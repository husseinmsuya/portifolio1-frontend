import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#overview", label: "Overview" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="container mx-auto px-4">
        <div className={`glass rounded-2xl px-5 py-3 flex items-center justify-between ${scrolled ? "soft-shadow" : ""}`}>
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="brand-bg w-9 h-9 rounded-xl grid place-items-center text-white">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="brand-text text-lg tracking-tight">Arafa Dadi</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-white/60 transition-all">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 brand-bg text-white text-sm font-semibold px-4 py-2 rounded-lg soft-shadow hover:scale-105 transition-transform">
              Hire Me
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden glass mt-2 rounded-2xl p-3 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/70">
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
