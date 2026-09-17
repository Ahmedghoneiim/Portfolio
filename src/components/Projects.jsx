import { motion } from "framer-motion";
import { Github, ExternalLink, LayoutDashboard, Radio } from "lucide-react";
import { projects } from "../data/portfolioData";

const linkIcon = {
  github: Github,
  live: ExternalLink,
  dashboard: LayoutDashboard,
};

function ProjectCard({ project, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-3xl p-7 sm:p-8 border border-transparent hover:border-cyan-neon/40 transition-colors hover:shadow-neon"
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span className="eyebrow">{project.badge}</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
            {project.name}
          </h3>
          <p className="text-indigo-neon text-sm font-medium mt-1">
            {project.tagline}
          </p>
        </div>
        {project.live && (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 text-xs font-mono">
            <Radio size={12} className="animate-pulse" /> Real-time sync
          </span>
        )}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mt-5">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-sm text-slate-400 flex gap-2">
            <span className="text-cyan-neon mt-1.5 h-1 w-1 rounded-full bg-cyan-neon shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {project.links.map((l) => {
          const Icon = linkIcon[l.type] || ExternalLink;
          return (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-neon/50 hover:text-cyan-neon transition-colors"
            >
              <Icon size={15} />
              {l.label}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow justify-center flex">Selected Work</p>
          <h2 className="section-heading mt-3">Projects Showcase</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Two production-grade platforms covering full-stack architecture,
            real-time data, and secure APIs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
