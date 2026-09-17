/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070d",
          900: "#0a0e1a",
          850: "#0d1220",
          800: "#111827",
          700: "#1b2333",
        },
        cyan: {
          neon: "#22d3ee",
        },
        indigo: {
          neon: "#6366f1",
        },
        slate: {
          150: "#e7ecf3",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.14), transparent 45%), radial-gradient(circle at 50% 100%, rgba(34,211,238,0.08), transparent 40%)",
      },
      boxShadow: {
        neon: "0 0 25px rgba(34,211,238,0.35), 0 0 60px rgba(99,102,241,0.15)",
        "neon-sm": "0 0 12px rgba(34,211,238,0.4)",
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
