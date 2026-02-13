<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://raw.githubusercontent.com/bdoey/my-portfolio/refs/heads/main/public/banner.png" />
</div>

# Brandon Doey - Personal Portfolio

## About The Project

This repository contains the source code for my personal portfolio website, hosted on **Vercel**. Built with modern web technologies, it serves as a centralized hub to showcase my professional experience, technical skills, published research, and deep dives into Data Science and Artificial Intelligence.

The site is designed to be fully responsive, aesthetically minimal, and highly interactive, featuring custom animations, a terminal-inspired aesthetic, and a searchable project showcase. All featured projects link out to **Google Colab** notebooks for interactive exploration.

### Key Features

  * **Interactive UI:** Custom Framer Motion animations, mouse-tracking spotlight grid, animated scanning beams, and glassmorphism effects throughout.
  * **Data Science Integration:** 12 projects across 4 categories, each linking to a Google Colab notebook for hands-on exploration.
  * **Responsive Design:** Fully adapted for mobile, tablet, and desktop viewports using Tailwind CSS with a mobile-first approach.
  * **Performance:** Powered by Vite for fast builds, hot module replacement, and optimized asset loading.
  * **Published Research:** Showcases peer-reviewed publications in the Review of Behavioral Finance and the Journal of Behavioral Finance.

## Built With

  * **[React](https://reactjs.org/)** - Frontend framework
  * **[TypeScript](https://www.typescriptlang.org/)** - Type safety and logic
  * **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
  * **[Framer Motion](https://www.framer.com/motion/)** - Animation library
  * **[Lucide React](https://lucide.dev/)** - Icon library
  * **[Vite](https://vitejs.dev/)** - Build tool and development server

## Data Science & AI Projects

All projects on the site link to **Google Colab** notebooks hosted from this repository. The Jupyter notebook source files are located in the `/public/notebooks` directory.

### Generative AI
  * **AI Enabled Financial Literacy Q&A System** - Exploring local Large Language Models for financial education.
  * **LLM Powered Data Anomaly Detection App** - Leveraging Llama3 for identifying anomalies in datasets.
  * **AI Research Summarizer with LLM Feedback** - Summarizing research papers with LLM-generated feedback loops.

### FinTech Apps
  * **BNPL Credit Worthiness App** - Assessing buy-now-pay-later credit worthiness.
  * **DJIA Analysis using NLP and MACD** - Combining natural language processing with technical analysis.
  * **Trading Agent using Q-Learning** - Reinforcement learning for automated trading strategies.

### Data Science
  * **Stock Market Prediction using LSTM** - Time-series forecasting using Long Short-Term Memory networks.
  * **Churn Prediction using RF Classifier** - Predicting customer churn with Random Forest.
  * **Bankruptcy Prediction using Ensemble ML** - Using ensemble methods to predict financial distress.

### Machine Learning
  * **Customer Segmentation using Clustering** - Unsupervised learning for market segmentation.
  * **Dropout Prediction Neural Network** - Feedforward neural network for predicting student dropout.
  * **Sentiment Analysis using LDA** - Topic modeling and sentiment extraction.

## Project Structure

```text
├── components/           # React components (Hero, About, Experience, Projects, Skills, Contact, etc.)
│   ├── About.tsx
│   ├── BackgroundGrid.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/               # Static assets
│   ├── notebooks/        # Jupyter Notebook HTML exports and source files
│   ├── banner.png
│   ├── headshot.jpg
│   └── Brandon_Doey_CV.pdf
├── App.tsx               # Main application component
├── index.tsx             # React entry point
├── index.html            # HTML template
├── index.css             # Global styles (Tailwind directives, custom fonts, animations)
├── constants.ts          # Data constants (personal info, experience, projects, skills, education, publications)
├── types.ts              # TypeScript interfaces
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts
```
