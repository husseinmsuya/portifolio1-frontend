import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const cards = [
  { icon: Mail, label: "Email", value: "dadiarafa28@gmail.com", href: "mailto:dadiarafa28@gmail.com" },
  { icon: Phone, label: "Phone", value: "+255 627 475 400", href: "tel:+255627475400" },
  { icon: MapPin, label: "Location", value: "Dar es Salaam, Tanzania", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/arafahemed", href: "https://github.com/dadiarafa28-boop" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/arafahemed", href: "https://linkedin.com/in/arafahemed" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const r = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg("Could not send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-600">Get in touch</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Contact <span className="brand-text">Me</span></h2>
          <p className="mt-3 text-slate-600">Have a project, opportunity, or just want to say hi? Let's talk.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {cards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass p-4 rounded-2xl soft-shadow hover:glow-shadow transition-all"
              >
                <div className="brand-bg w-11 h-11 rounded-xl grid place-items-center text-white shrink-0">
                  <c.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 font-medium">{c.label}</div>
                  <div className="font-semibold text-sm truncate">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-7 md:p-8 soft-shadow"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" value={form.name} onChange={onChange} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" value={form.subject} onChange={onChange} required />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
              <textarea
                name="message" value={form.message} onChange={onChange} required rows={5}
                className="w-full rounded-xl border border-white/70 bg-white/60 backdrop-blur px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400/50 transition"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-5 inline-flex items-center gap-2 brand-bg text-white font-semibold px-6 py-3 rounded-xl soft-shadow hover:scale-105 hover:glow-shadow transition-all disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" /> Message sent successfully. I'll reply soon!
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 text-red-500 text-sm font-medium">{errorMsg}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/70 bg-white/60 backdrop-blur px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400/50 transition"
      />
    </div>
  );
}
