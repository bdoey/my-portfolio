import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Brain, LineChart, Database, Code2, Cpu, Search, Terminal, ExternalLink } from 'lucide-react';

// --- CONSTANTS & DATA STRUCTURES ---

export interface ProjectItem {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface ProjectCategory {
  id: string;
  category: string;
  link: string;
  items: ProjectItem[];
}

export const PROJECTS: ProjectCategory[] = [
  {
    id: "gen-ai",
    category: "Generative AI",
    link: "#",
    items: [
      {
        title: "AI Enabled Financial Literacy Q&A System",
        description: "By leveraging the power of Retrieval Augmented Generation and locally hosted large language models, this project takes a significant step towards combating financial illiteracy. The AI-powered question-answering system empowers users with the knowledge and insights they need to navigate the complex world of personal finance, while ensuring the privacy and security of their sensitive financial information.",
        tags: ["RAG", "LLM", "Python", "NLP"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/AI_Financial_Literacy_Local_LLM.ipynb"
      },
      {
        title: "LLM Powered Data Anomaly Detection App",
        description: "This application is designed to identify anomalies or outliers in datasets, leveraging the strengths of advanced Python scripting for data analysis combined with the interpretative power of a locally hosted large language model (LLM). By separating the data analysis and narrative explanation processes, the app effectively addresses the limitations commonly associated with LLMs handling raw tabular data.",
        tags: ["LLM", "Python", "Anomaly Detection"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/AI_Llama3_Powered_Anomaly_Detection.ipynb"
      },
      {
        title: "AI Research Summarizer with LLM Feedback",
        description: "The AI Research Summarizer is an innovative tool designed to help researchers, students, and AI enthusiasts stay up-to-date with the latest developments in artificial intelligence research. By leveraging the power of the arXiv API and a local language model (LLM), specifically the Llama 3 model, this application fetches the most recent AI research papers and provides concise summaries along with insightful feedback from the LLM.",
        tags: ["Llama 3", "arXiv API", "NLP"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/AI_Research_Summarizer_LLM_Feedback.ipynb"
      }
    ]
  },
  {
    id: "fintech",
    category: "FinTech Apps",
    link: "#",
    items: [
      {
        title: "BNPL Credit Worthiness App",
        description: "This project focuses on using the Keras Sequential model, a powerful deep learning technique that can accomplish various tasks such as prediction, classification, and regression, to analyze the creditworthiness of potential borrowers.",
        tags: ["Keras", "Deep Learning", "Classification"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/FT_BNPL_CAP5619_Final.ipynb"
      },
      {
        title: "DJIA Analysis using NLP and MACD",
        description: "This project focuses on applying machine learning techniques to stock market analysis and trading. The goal is to leverage natural language processing (NLP) of financial news combined with quantitative trading algorithms to generate actionable insights for making profitable trades.",
        tags: ["NLP", "MACD", "Trading", "ML"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/FT_DJIA_Analysis_using_NLP_MACD.ipynb"
      },
      {
        title: "Trading Agent using Q-Learning",
        description: "This project focuses on developing a reinforcement learning-based algorithmic trading strategy with the goal of creating a trading agent that learns optimal trading strategies by interacting with historical market data and making buy/sell decisions based on current market conditions.",
        tags: ["Q-Learning", "Reinforcement Learning", "Trading"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/FT_Trading_Agent_using_Q-learning.ipynb"
      }
    ]
  },
  {
    id: "data-science",
    category: "Data Science",
    link: "#",
    items: [
      {
        title: "Stock Market Prediction using LSTM",
        description: "Long Short-Term Memory (LSTM) is a type of Recurrent Neural Network (RNN) architecture. Unlike standard feedforward neural networks, LSTM has feedback connections that make it a \"general-purpose computer\" for processing sequences of data. This allows it to store information over long sequences and is exceptionally well-suited for various time-series prediction tasks, such as stock market movements over a period of time.",
        tags: ["LSTM", "RNN", "Time Series"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/FT_Stock_Prediction_using_LSTM.ipynb"
      },
      {
        title: "Churn Prediction using RF Classifier",
        description: "The primary objective is to predict customer churn for a major telecom company. The dataset contained various features related to customer activity and a churn label indicating whether a customer canceled their subscription. The goal with this exercise is not just to predict churn but also to understand customer value and segmentation for targeted retention strategies.",
        tags: ["Random Forest", "EDA", "Classification"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/DS_Churn_Prediction_using_Classifier.ipynb"
      },
      {
        title: "Bankruptcy Prediction using Ensemble ML",
        description: "The goal is to perform an ensemble machine learning approach to predict bankruptcy. Before diving into modeling, we'll conduct an Exploratory Data Analysis (EDA) to understand the dataset and address any issues such as missing values or class imbalances.",
        tags: ["Ensemble ML", "EDA", "Prediction"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/DS_Bankruptcy_Prediction_using_Ensemble.ipynb"
      }
    ]
  },
  {
    id: "ml",
    category: "Machine Learning",
    link: "#",
    items: [
      {
        title: "Customer Segmentation using Clustering",
        description: "The goal of this exercise is to better understand the behavior of customer segments to aid in assessing the overall risk profile of the customer base and in making informed decisions on risk mitigation strategies.",
        tags: ["Clustering", "Risk Analysis", "Segmentation"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/ML_Customer_Segmentation_using_Clustering.ipynb"
      },
      {
        title: "Dropout Prediction using FF Neural Network",
        description: "The objective of this notebook is to explore the application of a Keras-based Feed-Forward Neural Network (FFNN), a type of artificial neural network implemented using the Keras framework, to predict the likelihood of college student dropouts.",
        tags: ["Keras", "FFNN", "Neural Network"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/ML_Dropout_Prediction_using_FFNN.ipynb"
      },
      {
        title: "Sentiment Analysis using LDA",
        description: "This project uses Latent Dirichlet Allocation (LDA) to identify five key topics in news articles for each company in the Dow Jones Industrial Average and then performs a Weighted Sentiment Analysis using these topic-specific sentiment scores.",
        tags: ["LDA", "NLP", "Sentiment Analysis"],
        url: "https://colab.research.google.com/github/bdoey/my-portfolio/blob/main/notebooks/ML_Sentiment_Analysis_using_LDA.ipynb"
      }
    ]
  }
];

const iconMap: Record<string, React.ReactNode> = {
  "Generative AI": <Brain className="text-primary-400" size={16} />,
  "FinTech Apps": <LineChart className="text-accent-500" size={16} />,
  "Data Science": <Database className="text-purple-400" size={16} />,
  "Machine Learning": <Cpu className="text-pink-400" size={16} />,
};

const categoryColors: Record<string, { text: string; border: string; bg: string }> = {
  "Generative AI": { text: "text-primary-400", border: "border-primary-500/30", bg: "bg-primary-500/10" },
  "FinTech Apps": { text: "text-accent-500", border: "border-accent-500/30", bg: "bg-accent-500/10" },
  "Data Science": { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  "Machine Learning": { text: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/10" },
};

// --- COMPONENT ---

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filter, setFilter] = useState('');

  const categories = ['all', ...PROJECTS.map(p => p.category)];

  const filteredProjects = PROJECTS.flatMap(category =>
    category.items
      .filter(item => {
        const matchesCategory = activeCategory === 'all' || category.category === activeCategory;
        const matchesSearch = !filter || item.title.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .map(item => ({ ...item, category: category.category, categoryId: category.id }))
  );

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary-500/50" />
            <span className="text-primary-400 font-mono text-xs tracking-widest uppercase">Portfolio Database</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Engineering <span className="text-zinc-600">Logs</span>
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center gap-4 mb-10"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-lg border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-500/10 border-primary-500/30 text-primary-400'
                    : 'bg-zinc-950/50 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full md:w-64 relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-zinc-500 group-focus-within:text-primary-400 transition-colors" size={16} />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-zinc-950/50 border border-zinc-800 text-sm text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all font-mono placeholder:text-zinc-600"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const colors = categoryColors[project.category];

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group relative bg-zinc-950/90 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-primary-500/30 transition-all duration-300"
                >
                  {/* Terminal Header Bar */}
                  <div className="h-10 bg-zinc-900/50 border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-primary-400 transition-colors">
                      <Terminal size={12} />
                      <span>{project.categoryId}.log</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`p-1.5 rounded-md border border-zinc-800 ${colors.bg}`}>
                        {iconMap[project.category] || <Code2 size={16} />}
                      </div>
                      <span className={`text-xs font-mono tracking-wider uppercase ${colors.text}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-400 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Colab Link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-primary-400 transition-colors group/link"
                    >
                      <ExternalLink size={14} />
                      <span>Open in Google Colab</span>
                      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-zinc-500 font-mono text-sm">No projects match your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
