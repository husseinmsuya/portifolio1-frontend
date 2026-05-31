import { motion } from "framer-motion";
import { Mail, Download, ArrowRight} from "lucide-react";
import profilePhoto from "../assets/arapha.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-300/40 to-cyan-200/30 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-300/40 to-pink-200/30 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-1/2 left-1/3 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-cyan-200/40 to-blue-200/30 blur-3xl animate-blob" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold text-blue-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </motion.span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="brand-text">ARAFA DADI HEMED</span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 text-xl md:text-2xl font-semibold text-slate-700">
              Data Science Student & Technology Enthusiast
            </motion.p>

            <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              I am passionate about technology, cloud computing, web development, and building creative digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group brand-bg text-white px-6 py-3 rounded-xl font-semibold soft-shadow hover:scale-105 hover:glow-shadow transition-all inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="glass px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all inline-flex items-center gap-2">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>

            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="text-2xl font-bold brand-text">10+</div><div className="text-slate-500">Skills</div></div>
              <div><div className="text-2xl font-bold brand-text">4</div><div className="text-slate-500">Projects</div></div>
              <div><div className="text-2xl font-bold brand-text">∞</div><div className="text-slate-500">Curiosity</div></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-8 brand-bg rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative glass rounded-full p-3 soft-shadow">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden relative">
                  <img
                    src={profilePhoto}
                    alt="Arafa Dadi Hemed"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -left-6 glass rounded-2xl px-4 py-2 text-sm font-semibold soft-shadow">☁️ Cloud</motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/3 -right-8 glass rounded-2xl px-4 py-2 text-sm font-semibold soft-shadow">📊 Data Science</motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute -bottom-4 left-4 glass rounded-2xl px-4 py-2 text-sm font-semibold soft-shadow">💻 Web Dev</motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}