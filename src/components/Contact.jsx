import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolioData";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow justify-center flex">Get In Touch</p>
          <h2 className="section-heading mt-3">Let's Build Something</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto flex items-center justify-center gap-2">
            <MapPin size={14} className="text-cyan-neon" />
            {profile.location}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-cyan-neon/40 border border-transparent transition-colors hover:shadow-neon-sm"
              >
                <span className="p-2.5 rounded-xl bg-cyan-neon/10 text-cyan-neon">
                  <c.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {c.label}
                  </p>
                  <p className="text-slate-200 text-sm font-medium truncate">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-wide text-slate-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-neon/60 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-wide text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-neon/60 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wide text-slate-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-neon/60 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-neon to-indigo-neon text-base-950 font-semibold hover:shadow-neon transition-shadow"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Opening your mail client…
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 text-center">
              This opens your email client addressed to {profile.email} with your message pre-filled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
