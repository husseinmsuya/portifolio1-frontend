import { motion } from "framer-motion";
import { Github, ExternalLink, BarChart3, Cloud, Layout, Globe } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Data Analysis Dashboard",
    desc: "An interactive dashboard for exploring datasets, generating insights and visualizing key metrics in real time.",
    tech: ["Python", "Pandas", "Plotly"],
  },
  {
    icon: Cloud,
    title: "Cloud-Based Management System",
    desc: "A management platform built on cloud infrastructure for organizing records, users and reports securely.",
    tech: ["Cloud", "REST API", "Database"],
  },
  {
    icon: Layout,
    title: "Modern Portfolio Website",
    desc: "A responsive personal portfolio with smooth animations, glassmorphism UI and elegant typography.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    icon: Globe,
    title: "Web Development Project",
    desc: "A modern responsive web application focused on usability, performance and clean component design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600">Selected work</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">My <span className="brand-text">Projects</span></h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl p-7 soft-shadow relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="brand-bg w-12 h-12 rounded-2xl grid place-items-center text-white soft-shadow">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 border border-white/80 text-slate-700">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl glass hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl brand-bg text-white soft-shadow hover:scale-105 transition-transform">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
