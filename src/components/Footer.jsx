import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#overview", label: "Overview" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/60 bg-white/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 font-bold">
              <span className="brand-bg w-9 h-9 rounded-xl grid place-items-center text-white"><Sparkles className="w-4 h-4" /></span>
              <span className="brand-text text-lg">Arafa Dadi Hemed</span>
            </a>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">Data Science student passionate about cloud, web, and building creative digital solutions.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-600 transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="flex gap-2">
            {[
              { icon: Github, href: "https://github.com/arafahemed", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/arafahemed", label: "LinkedIn" },
              { icon: Mail, href: "mailto:dadiarafa28@gmail.com", label: "Email" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="glass w-10 h-10 rounded-xl grid place-items-center hover:scale-110 hover:glow-shadow transition-all">
                <s.icon className="w-4 h-4 text-slate-700" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/60 text-center text-xs text-slate-500">
          © 2026 ARAFA DADI HEMED. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
