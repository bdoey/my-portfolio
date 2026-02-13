# AGENTS.md

This file provides context for AI agents working on this repository.

## Overview

This is a personal portfolio website for Brandon Doey, a Full-Stack Data Scientist. The site showcases professional experience, technical skills, published research, and data science projects.

## Hosting & Deployment

- **Hosted on Vercel** - The site is deployed and hosted via Vercel.
- **Build tool: Vite** - Uses `vite build` for production builds (preceded by `tsc` for type checking).
- **Build output** goes to the `/dist` directory.

## Tech Stack

- **React 18** with **TypeScript** - Frontend framework
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion 11** - Animations and transitions
- **Lucide React** - Icon library
- **Vite 5** - Build tool and dev server
- **PostCSS + Autoprefixer** - CSS processing

## Key Commands

```bash
npm run dev      # Start local development server
npm run build    # Type-check (tsc) then build for production (vite build)
npm run preview  # Preview the production build locally
```

## Repository Structure

```
├── components/           # React components (one per site section)
│   ├── About.tsx         # Bio, education, published research
│   ├── BackgroundGrid.tsx # Animated background with mouse-tracking spotlight
│   ├── Contact.tsx       # Contact info and social links
│   ├── Experience.tsx    # Professional timeline (Verizon, Aon, HostDime)
│   ├── Hero.tsx          # Landing section with headline and CTAs
│   ├── Navbar.tsx        # Fixed navigation bar with mobile hamburger menu
│   ├── Projects.tsx      # Project showcase with search/filter (defines its own project data)
│   └── Skills.tsx        # Tabbed skill categories with descriptions
├── public/               # Static assets served as-is
│   ├── notebooks/        # Jupyter Notebook HTML exports
│   ├── banner.png        # GitHub banner image
│   ├── headshot.jpg      # Profile photo
│   └── Brandon_Doey_CV.pdf # Resume PDF
├── App.tsx               # Root component - composes all sections
├── index.tsx             # React entry point (renders App into DOM)
├── index.html            # HTML template (Vite entry)
├── index.css             # Global styles, Tailwind directives, custom fonts, animations
├── constants.ts          # Centralized data: personal info, experience, skills, education, publications
├── types.ts              # TypeScript interfaces (ExperienceItem, ProjectCategory, SkillCategory, etc.)
├── vite.config.ts        # Vite config (React plugin)
├── tsconfig.json         # TypeScript config (strict mode)
├── tailwind.config.js    # Tailwind config (custom colors, fonts, extended theme)
├── postcss.config.js     # PostCSS config (Tailwind + Autoprefixer)
└── package.json          # Dependencies and npm scripts
```

## Important Architecture Notes

- **Data is centralized in `constants.ts`** - Personal info, experience history, skills, education, and publications are all defined here. However, **`Projects.tsx` defines its own project data** with Google Colab URLs directly in the component file, not in `constants.ts`.
- **All projects link to Google Colab notebooks** - Each of the 12 projects opens a Google Colab notebook via URLs in the format `https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/<notebook>.ipynb`.
- **The site is a single-page application** - All sections render on one page with smooth scroll navigation.
- **No routing library** - Navigation uses anchor links (`#home`, `#about`, `#experience`, `#projects`, `#skills`, `#contact`).
- **No test framework** is configured in this project.
- **No linter/formatter** is configured in this project.

## Project Categories (12 projects, 4 categories)

1. **Generative AI** (3 projects) - LLM-based applications (financial literacy, anomaly detection, research summarization)
2. **FinTech Apps** (3 projects) - Financial technology (BNPL credit, DJIA analysis, Q-learning trading agent)
3. **Data Science** (3 projects) - Predictive modeling (stock LSTM, churn classifier, bankruptcy ensemble)
4. **Machine Learning** (3 projects) - Classical ML (clustering, neural network, LDA sentiment)

## Styling Conventions

- Dark theme with emerald green (#10b981) as primary accent color and cyan (#06b6d4) as secondary accent
- Terminal/hacker-inspired aesthetic with monospace fonts (JetBrains Mono), CRT scanline effects, and code window mockups
- Inter font family for body text
- Glassmorphism effects using `backdrop-blur` and semi-transparent backgrounds
- Framer Motion `whileInView` animations triggered on scroll
