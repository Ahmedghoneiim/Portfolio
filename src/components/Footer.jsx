import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-cyan-neon transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-cyan-neon transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-cyan-neon transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
