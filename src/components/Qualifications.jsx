import { motion } from "framer-motion";
import { GraduationCap, Code2, Cloud, Monitor, Users } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Studying Data Science", desc: "Building strong foundations in data, statistics, and modern analytics." },
  { icon: Code2, title: "Basic Web Development", desc: "Working knowledge of HTML, CSS and JavaScript fundamentals." },
  { icon: Cloud, title: "Cloud Computing Concepts", desc: "Understanding of cloud services, scalability and modern deployment." },
  { icon: Monitor, title: "Computer & Internet Applications", desc: "Experienced with productivity tools and online platforms." },
  { icon: Users, title: "Communication & Teamwork", desc: "Strong collaboration skills, clear communication, team-first mindset." },
];

export function Qualifications() {
  return (
    <section id="qualifications" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600">What I bring</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">My <span className="brand-text">Qualifications</span></h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 soft-shadow overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/10" />
              <div className="relative">
                <div className="brand-bg w-12 h-12 rounded-xl grid place-items-center text-white soft-shadow">
                  <q.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{q.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{q.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
