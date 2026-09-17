import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Download, MapPin, ArrowDown } from "lucide-react";
import { profile } from "../data/portfolioData";
import photo from "../assets/profile.jpg";

function useTypewriter(words, speed = 90, pause = 1200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typingWords);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* ambient circuit-grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-neon animate-pulse" />
            Available for opportunities
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white">
            Hi, I'm {profile.name.split(" ")[0]} —<br />
            <span className="text-gradient">{profile.role}</span>
          </h1>

          <div className="mt-5 font-mono text-lg sm:text-xl text-slate-300 h-8">
            <span className="text-cyan-neon">const</span> stack ={" "}
            <span className="text-indigo-neon">"{typed}"</span>
            <span className="inline-block w-[2px] h-5 bg-cyan-neon ml-1 align-middle animate-blink" />
          </div>

          <p className="mt-6 text-slate-400 leading-relaxed max-w-xl">
            {profile.summary}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={14} className="text-cyan-neon" />
            {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-cyan-neon/50 hover:shadow-neon-sm transition-all"
            >
              <Github size={18} className="group-hover:text-cyan-neon transition-colors" />
              View GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-neon to-indigo-neon text-base-950 font-semibold hover:shadow-neon transition-shadow"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right column — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-neon/25 via-indigo-neon/15 to-transparent blur-2xl animate-float" />
            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="relative w-64 h-80 sm:w-80 sm:h-[26rem] rounded-[2rem] p-[3px] bg-gradient-to-br from-cyan-neon via-indigo-neon to-cyan-neon shadow-neon"
            >
              <div className="w-full h-full rounded-[calc(2rem-3px)] overflow-hidden bg-base-900">
                <img
                  src={photo}
                  alt={`${profile.name} — ${profile.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden sm:block absolute -bottom-6 -left-10 glass rounded-xl px-4 py-3 font-mono text-xs text-slate-300 shadow-lg"
            >
              <span className="text-cyan-neon">function</span> build() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-indigo-neon">return</span>{" "}
              "seamless UX";
              <br />
              {"}"}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        aria-label="Scroll to experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-neon transition-colors"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
