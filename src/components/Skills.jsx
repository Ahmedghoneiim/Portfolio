import { motion } from "framer-motion";
import { Code2, Database, Wrench, Languages } from "lucide-react";
import { skills, languages } from "../data/portfolioData";

const categoryMeta = {
  Frontend: { icon: Code2, color: "text-cyan-neon" },
  "Backend & Databases": { icon: Database, color: "text-indigo-neon" },
  "Tools & Design": { icon: Wrench, color: "text-cyan-neon" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const badge = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow justify-center flex">Toolbox</p>
          <h2 className="section-heading mt-3">Technical Skills</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            A full-stack toolkit spanning modern frontend engineering, backend
            services, and the tools that keep delivery smooth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list]) => {
            const meta = categoryMeta[category];
            const Icon = meta.icon;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-6 hover:border-cyan-neon/30 border border-transparent transition-colors"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon className={meta.color} size={20} />
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {list.map((s) => (
                    <motion.span
                      variants={badge}
                      whileHover={{ scale: 1.08, y: -2 }}
                      key={s}
                      className="font-mono text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-neon/50 hover:text-cyan-neon transition-colors cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-2xl p-6 flex flex-wrap items-center gap-6 justify-center"
        >
          <div className="flex items-center gap-2 text-slate-300">
            <Languages className="text-cyan-neon" size={18} />
            <span className="font-display font-semibold">Languages</span>
          </div>
          {languages.map((l) => (
            <div key={l.name} className="flex items-center gap-2 text-sm">
              <span className="text-white font-medium">{l.name}</span>
              <span className="text-slate-500">— {l.level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
