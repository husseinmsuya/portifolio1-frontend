import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export function Overview() {
  return (
    <section id="overview" className="section">
      <div className="container mx-auto px-4">
        <motion.div {...fade} className="max-w-3xl mx-auto text-center">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600">About me</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Personal <span className="brand-text">Overview</span></h2>
        </motion.div>

        <motion.div {...fade} className="mt-10 max-w-3xl mx-auto glass rounded-3xl p-8 md:p-10 soft-shadow">
          <p className="text-lg leading-relaxed text-slate-700">
            I am a passionate and motivated Data Science student with an interest in technology, cloud computing, and web development. I enjoy learning new digital skills and building creative projects that improve my problem-solving abilities. I am hardworking, adaptable, and always eager to gain practical experience in modern technologies and real-world applications. My goal is to continue growing in the tech field while developing innovative and user-friendly solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
