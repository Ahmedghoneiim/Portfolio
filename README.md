# Ahmed Ghoneim — Portfolio

A modern, dark-themed personal portfolio built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons. All content (experience, projects, skills, links) is sourced directly from Ahmed Ghoneim's CV.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional local preview of the production build
```

The production-ready static site is generated in `dist/`.

## Deploying

The `dist/` folder can be deployed as-is to any static host:

- **Vercel**: `vercel deploy` (framework preset: Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (build command `npm run build`, publish dir `dist`)
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package

## Project structure

```
src/
  assets/profile.jpg          Profile photo used in the hero section
  data/portfolioData.js       Single source of truth for all CV content
  components/
    Navbar.jsx                 Sticky glass navbar + resume download
    Hero.jsx                   Two-column hero with typing animation
    Timeline.jsx                Experience + education vertical timeline
    Projects.jsx                Tebk & Shoppr project showcase cards
    Skills.jsx                  Categorized skill badges
    Contact.jsx                 Contact links + working mailto form
    Footer.jsx
  App.jsx
  main.jsx
  index.css
public/
  Ahmed_Ghoneim_Resume.pdf     Compiled from the original LaTeX CV
```

## Customizing

- Update copy, links, and metrics in `src/data/portfolioData.js` — every section reads from this file.
- Replace `public/Ahmed_Ghoneim_Resume.pdf` if the CV changes.
- Replace `src/assets/profile.jpg` to update the photo.
- Color tokens and fonts live in `tailwind.config.js`.
