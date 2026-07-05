import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { profile } from "../data/portfolioData";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          <span className="text-cyan-neon"></span>
          Ahmed<span className="text-gradient"> Ghoneim</span>
          <span className="text-cyan-neon"></span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-neon transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full text-slate-300 hover:text-cyan-neon hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-full text-slate-300 hover:text-cyan-neon hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-neon to-indigo-neon text-base-950 hover:shadow-neon-sm transition-shadow"
          >
            <Download size={15} /> Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-200 hover:text-cyan-neon transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-neon to-indigo-neon text-base-950"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
