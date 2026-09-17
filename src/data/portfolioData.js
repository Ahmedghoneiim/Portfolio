export const profile = {
  name: "Ahmed Ghoneim",
  role: "Frontend / MERN Stack Developer",
  location: "El-Maadi, Cairo, Egypt",
  phone: "+20 1100773532",
  email: "ahmedmmuhhamed@gmail.com",
  linkedin: "https://linkedin.com/in/ahmed-ghoneim99",
  linkedinLabel: "linkedin.com/in/ahmed-ghoneim99",
  github: "https://github.com/Ahmedghoneiim",
  githubLabel: "github.com/Ahmedghoneiim",
  resumeUrl: "/Ahmed_Ghoneim_Resume.pdf",
  summary:
    "MERN Stack Developer with a strong foundation in building responsive, scalable web applications using React.js, JavaScript (ES6+), and TypeScript. Proficient in full-stack development across the complete MERN ecosystem --- MongoDB, Express.js, React.js, and Node.js --- alongside modern tooling including Vite, Zustand, TanStack Query, and Supabase. Passionate about clean architecture, component-driven development, and delivering seamless user experiences.",
  typingWords: ["React.js", "Vite", "Paymob SDK", "Node.js", "TypeScript", "Supabase", "MongoDB", "Express.js"],
};

export const education = [
  {
    id: "edu-1",
    org: "Higher Institute of Advanced Studies",
    title: "Bachelor's Degree in Management Information Systems (MIS)",
    period: "Graduated: Aug 2022",
    detail: null,
  },
];

export const certifications = [
  {
    id: "cert-1",
    org: "Route IT Training Center",
    title: "Frontend Web Developer Diploma",
    period: "Dec 2023 — Jun 2024",
    highlights: [
      "Engineered scalable, responsive, cross-browser compatible web applications using React.js and modern JavaScript (ES6+).",
      "Built 20+ reusable UI components following component-driven development principles and clean code architecture.",
      "Integrated 5+ RESTful APIs using Axios and Fetch API; overseeing state with Context API and Redux.",
      "Optimized component rendering, reducing load time by approximately 30% through performance optimization techniques.",
      "Applied form validation using Formik and Yup across 8+ project forms, reducing input errors significantly.",
    ],
  },
];

export const experience = [
  {
    id: "exp-spacetech",
    org: "SpaceTech",
    title: "Frontend / MERN Stack Developer Intern",
    period: "Jul 2026 — Present",
    location: "Alexandria, Egypt",
    points: [
      "Accepted into an intensive internship program focused on engineering scalable, production-grade frontend architectures.",
      "Collaborating with cross-functional software teams to build responsive UI components and integrate complex REST APIs.",
      "Utilizing modern React practices, performance optimization, and state management techniques in an active Agile environment.",
    ],
    metrics: [
      { label: "Role Focus", value: "Frontend Lead" },
      { label: "Environment", value: "Agile Team" },
    ],
  },
  {
    id: "exp-digilians",
    org: "Digilians",
    title: "MERN Stack Developer Trainee",
    period: "Jan 2026 — Jun 2026",
    location: "Cairo, Egypt",
    points: [
      "Accredited by the Egyptian Military Academy & MCIT.",
      "Completed training in CS Fundamentals, HTML5, CSS3, Bootstrap, and UX/UI Design with Figma.",
      "Built 3+ full-stack apps using JavaScript, React.js, Node.js, Express.js, MongoDB, Mongoose, and Supabase.",
      "Applied SOLID Principles, Design Patterns, and clean code best practices across 3+ projects, improving code maintainability and scalability.",
      "Oversaw version control across 4+ repositories using Git/GitHub, REST API integration, Docker basics, and functional documentation in an Agile environment.",
    ],
    metrics: [
      { label: "Full-stack apps built", value: "3+" },
      { label: "Repositories managed", value: "4+" },
    ],
  },
];

export const projects = [
  {
    id: "derby",
    name: "Derby",
    tagline: "Sports Facilities & Court Booking Platform",
    badge: "SpaceTech Collaborative Project",
    description:
      "A collaborative sports court reservation web app built with React 18 & Vite 5. Features dynamic time-slot scheduling, persistent JWT authentication (Google OAuth & OTP), Paymob Pixel SDK payment flows, and RESTful integration with an ASP.NET Core Web API.",
    highlights: [
      "Led the frontend development for a collaborative sports court reservation platform featuring multi-city discovery and real-time availability.",
      "Integrated Paymob Pixel SDK for end-to-end card payments with custom dark-neon Shadow DOM styling and payment intent lifecycles.",
      "Configured OAuth (Google/Facebook) authentication and OTP recovery flows backed by persistent JWT sessions and Route Guards.",
      "Consumed RESTful ASP.NET Core Web API endpoints for live slot availability, dynamic booking states, and downloadable user receipts using Axios interceptors.",
    ],
    stack: [
      "React 18",
      "Vite 5",
      "Tailwind CSS",
      "Axios",
      "React Router DOM",
      "Zod",
      "React Hook Form",
      "Paymob Pixel SDK",
      "Google OAuth",
      "ASP.NET Core API",
    ],
    links: [
      { label: "GitHub Repository", type: "github", url: "https://github.com/DerpyApp/Derby-Dashboard" },
      { label: "Live Application", type: "live", url: "https://derby-6m2hexioj-ahmedmmuhhamed-5532s-projects.vercel.app/" },
    ],
    live: true,
  },
  {
    id: "tebk",
    name: "Tebk",
    tagline: "Medical Supplies E-commerce Platform & Admin Dashboard",
    badge: "Graduation Project",
    description:
      "A full-stack medical supplies e-commerce platform with an integrated admin dashboard. Supabase powers real-time backend data, authentication, and dynamic data syncing directly into the dashboard as customers shop.",
    highlights: [
      "Architected a full-stack medical supplies e-commerce platform ('Tebk') and an integrated admin dashboard using React 19, Vite, and React Router.",
      "Integrated Supabase for real-time database functions, user authentication, and dynamic user data synchronization directly into the dashboard.",
      "Implemented client-side state management using Zustand combined with TanStack React Query for caching, with strict form validation schemas using Zod.",
      "Engineered a custom multi-language translation framework (AR/EN) and leveraged AI tools (Claude AI) to accelerate development velocity.",
    ],
    stack: [
      "React 19",
      "Vite",
      "React Router",
      "Zustand",
      "TanStack Query",
      "Supabase",
      "Tailwind CSS",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Cloudinary",
    ],
    links: [
      { label: "GitHub Repository", type: "github", url: "https://github.com/Ahmedghoneiim/Tebk" },
      { label: "Live Store", type: "live", url: "https://www.tebk.store/" },
      { label: "Admin Dashboard", type: "dashboard", url: "https://admin.tebk.store/login" },
    ],
    live: true,
  },
  {
    id: "shoppr",
    name: "Shoppr",
    tagline: "E-Commerce Web Application",
    badge: "Personal Project",
    description:
      "A fully responsive e-commerce platform with a secured Node.js/Express REST API, installable PWA behavior, and global state handling auth, cart, wishlist, theme, language, and notifications.",
    highlights: [
      "Engineered a fully responsive e-commerce platform with Framer Motion animations, Recharts dashboards, and Zustand global state management.",
      "Configured PWA Service Worker for installable behavior, offline fallback, and architected a Node.js/Express.js REST API secured with JWT and bcrypt.",
    ],
    stack: [
      "React 18",
      "Vite",
      "React Router DOM",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "PWA",
    ],
    links: [
      { label: "GitHub Repository", type: "github", url: "https://github.com/Ahmedghoneiim/Shoppr" },
      {
        label: "Live Application",
        type: "live",
        url: "https://shoppr-kp5zu1vgk-ahmedmmuhhamed-5532s-projects.vercel.app/Login",
      },
    ],
    live: false,
  },
];

export const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "Sass",
    "Bootstrap",
    "Tailwind CSS",
    "Radix UI",
    "Material UI",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Vite",
    "React Router DOM",
    "Zustand",
    "TanStack Query",
    "Redux Toolkit",
    "Context API",
    "Next.js",
    "Framer Motion",
    "React Hook Form",
    "Axios",
    "Responsive Design",
    "OOP",
    "SOLID Principles",
    "SEO Basics",
    "Data Structures & Algorithms",
  ],
  "Backend & Databases": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "MongoDB",
    "Mongoose",
    "Supabase",
    "JWT",
    "bcrypt",
    "multer",
    "helmet",
    "express-rate-limit",
    "Docker (Basics)",
  ],
  "Tools & Design": [
    "Git",
    "GitHub",
    "Figma (UI/UX)",
    "Claude AI",
    "Prompt Engineering",
    "Cloudinary",
    "PWA Service Worker",
    "PostCSS",
    "CI/CD Basics",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];