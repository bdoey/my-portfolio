# CLAUDE.md

This file provides context for Claude when working on this repository.

## What This Project Is

A personal portfolio website for Brandon Doey (Full-Stack Data Scientist), built with React + TypeScript and hosted on **Vercel**. The site uses **Vite** as its build tool and dev server.

## Key Commands

```bash
npm run dev      # Start local dev server
npm run build    # Type-check (tsc) then production build (vite build)
npm run preview  # Preview production build locally
```

There are no test or lint commands configured for this project.

## Architecture

This is a single-page React application with no routing library. Navigation uses anchor links to scroll between sections.

### File Layout

- `components/` - One React component per site section (Hero, About, Experience, Projects, Skills, Contact, Navbar, BackgroundGrid)
- `constants.ts` - Centralized data store for personal info, experience, skills, education, and publications
- `types.ts` - TypeScript interfaces used across the app
- `App.tsx` - Root component that composes all sections
- `index.tsx` - Entry point
- `index.css` - Global styles, Tailwind directives, custom font imports, keyframe animations
- `public/notebooks/` - Jupyter Notebook HTML exports and source `.ipynb` files

### Important Details

- **Hosting:** Vercel
- **Build tool:** Vite 5 with the `@vitejs/plugin-react` plugin
- **Project data lives in `components/Projects.tsx`**, not in `constants.ts`. The Projects component defines its own data with Google Colab URLs inline.
- **All 12 projects link to Google Colab notebooks** at URLs like `https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/<name>.ipynb`
- **No tests or linting** are configured. The `build` script runs `tsc` for type checking before `vite build`.
- **TypeScript strict mode** is enabled in `tsconfig.json`.

## Style Guide

- Dark theme, emerald green (#10b981) primary, cyan (#06b6d4) accent
- Terminal/hacker aesthetic with JetBrains Mono for monospace, Inter for body text
- Tailwind CSS for all styling, no separate CSS modules
- Framer Motion for scroll-triggered animations (`whileInView`)
- Lucide React for icons
