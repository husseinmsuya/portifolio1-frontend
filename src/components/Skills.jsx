import { motion } from "framer-motion";
import { Code, Palette, FileCode2, Cloud, BarChart3, Lightbulb, MessageSquare, Users, FileSpreadsheet, Globe } from "lucide-react";

const skills = [
  { icon: FileCode2, name: "HTML", level: 85 },
  { icon: Palette, name: "CSS", level: 80 },
  { icon: Code, name: "JavaScript", level: 70 },
  { icon: Cloud, name: "Cloud Computing", level: 65 },
  { icon: BarChart3, name: "Data Analysis", level: 75 },
  { icon: Lightbulb, name: "Problem Solving", level: 88 },
  { icon: MessageSquare, name: "Communication", level: 90 },
  { icon: Users, name: "Teamwork", level: 92 },
  { icon: FileSpreadsheet, name: "Microsoft Office", level: 85 },
  { icon: Globe, name: "Web Development", level: 72 },
];

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600">Toolbox</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">My <span className="brand-text">Skills</span></h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ scale: 1.04 }}
              className="glass rounded-2xl p-5 soft-shadow hover:glow-shadow transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="brand-bg w-10 h-10 rounded-xl grid place-items-center text-white">
                  <s.icon className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">{s.name}</span>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-slate-200/70 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full brand-bg rounded-full"
                />
              </div>
              <div className="mt-1 text-right text-[11px] text-slate-500 font-medium">{s.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
