import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { experience, education } from "../data/portfolioData";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ExperienceCard({ exp, align }) {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative md:w-1/2 ${align === "left" ? "md:pr-14 md:ml-0" : "md:pl-14 md:ml-auto"}`}
    >
      <div className="glass rounded-2xl p-6 hover:border-cyan-neon/40 border border-transparent transition-colors hover:shadow-neon-sm">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-cyan-neon">
            <Briefcase size={16} />
            <span className="font-mono text-xs uppercase tracking-wider">
              {exp.period}
            </span>
          </div>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-white">
          {exp.title}
        </h3>
        <p className="text-indigo-neon text-sm font-medium mt-0.5">{exp.org}</p>

        <ul className="mt-4 space-y-2.5">
          {exp.points.map((p, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-neon/70" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {exp.metrics && (
          <div className="mt-5 flex flex-wrap gap-3">
            {exp.metrics.map((m) => (
              <div
                key={m.label}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-center"
              >
                <div className="font-display text-lg font-bold text-gradient">
                  {m.value}
                </div>
                <div className="text-[10px] uppercase tracking-wide text-slate-500">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow justify-center flex">Career Path</p>
          <h2 className="section-heading mt-3">Experience & Education</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Hands-on training and applied engineering work across two intensive
            development programs.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-neon/60 via-indigo-neon/40 to-transparent -translate-x-1/2" />
          <div className="space-y-10 md:space-y-16">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="relative md:flex">
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-base-950 border-2 border-cyan-neon shadow-neon-sm z-10" />
                <ExperienceCard exp={exp} align={idx % 2 === 0 ? "left" : "right"} />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-2 justify-center mb-8">
            <GraduationCap className="text-cyan-neon" size={20} />
            <h3 className="font-display text-2xl font-semibold text-white">
              Education & Training
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((ed) => (
              <div
                key={ed.id}
                className="glass rounded-2xl p-6 hover:border-indigo-neon/40 border border-transparent transition-colors"
              >
                <span className="font-mono text-xs text-indigo-neon">{ed.period}</span>
                <h4 className="font-display text-lg font-semibold text-white mt-2">
                  {ed.org}
                </h4>
                <p className="text-slate-400 text-sm mt-1">{ed.title}</p>
                {ed.detail && (
                  <p className="text-slate-500 text-xs mt-3 border-t border-white/10 pt-3">
                    {ed.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
