import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, LineChart, Database, Code2, Cpu, Search, Terminal, FileCode } from 'lucide-react';

// --- CONSTANTS & DATA STRUCTURES ---

export interface ProjectItem {
  title: string;
  url: string;
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
        url: "/notebooks/AI_Financial_Literacy_Local_LLM.html" 
      },
      { 
        title: "LLM Powered Data Anomaly Detection App", 
        url: "/notebooks/AI_Llama3_Powered_Anomaly_Detection.html" 
      },
      { 
        title: "AI Research Summarizer with LLM Feedback", 
        url: "/notebooks/AI_Research_Summarizer_LLM_Feedback.html" 
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
        url: "/notebooks/FT_BNPL_CAP5619_Final.html" 
      },
      { 
        title: "DJIA Analysis using NLP and MACD", 
        url: "/notebooks/FT_DJIA_Analysis_using_NLP_MACD.html" 
      },
      { 
        title: "Trading Agent using Q-Learning", 
        url: "/notebooks/FT_Trading_Agent_using_Q-learning.html" 
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
        url: "/notebooks/FT_Stock_Prediction_using_LSTM.html" 
      },
      { 
        title: "Churn Prediction using RF Classifier", 
        url: "/notebooks/DS_Churn_Prediction_using_Classifier.html" 
      },
      { 
        title: "Bankruptcy Prediction using Ensemble ML", 
        url: "/notebooks/DS_Bankruptcy_Prediction_using_Ensemble.html" 
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
        url: "/notebooks/ML_Customer_Segmentation_using_Clustering.html" 
      },
      { 
        title: "Dropout Prediction Neural Network", 
        url: "/notebooks/ML_Dropout_Prediction_using_FFNN.html" 
      },
      { 
        title: "Sentiment Analysis using LDA", 
        url: "/notebooks/ML_Sentiment_Analysis_using_LDA.html" 
      }
    ]
  }
];

const iconMap: Record<string, React.ReactNode> = {
  "Generative AI": <Brain className="text-primary-400" size={20} />,
  "FinTech Apps": <LineChart className="text-accent-500" size={20} />,
  "Data Science": <Database className="text-purple-400" size={20} />,
  "Machine Learning": <Cpu className="text-pink-400" size={20} />,
};

// --- COMPONENT ---

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('');

  // Helper to check if a category has matching items
  const hasMatches = (items: ProjectItem[]) => {
    if (!filter) return true;
    return items.some(item => item.title.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <section id="projects" className="py-32 relative bg-zinc-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-primary-500/50" />
                    <span className="text-primary-400 font-mono text-xs tracking-widest uppercase">Portfolio Database</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Engineering <span className="text-zinc-600">Logs</span>
                </h2>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-72 relative group"
            >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-zinc-500 group-focus-within:text-primary-400 transition-colors" size={16} />
                </div>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-zinc-800 text-sm text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all font-mono placeholder:text-zinc-600"
                />
            </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((category, index) => {
            const matches = hasMatches(category.items);
            if (!matches && filter) return null;

            return (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative bg-zinc-950/90 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-primary-500/30 transition-all duration-300 ${
                (index === 0 || index === 3) && !filter ? 'lg:col-span-2' : ''
              }`}
            >
               {/* Internal Grid Texture */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl pointer-events-none" />

               {/* Header Bar */}
              <div className="h-10 bg-zinc-900/50 border-b border-white/5 flex items-center px-4 justify-between relative z-10">
                 <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-primary-400 transition-colors">
                    <Terminal size={12} />
                    <span>{category.id}.log</span>
                 </div>
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                 </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-900/80 rounded-md border border-zinc-800 text-zinc-300 group-hover:text-primary-400 group-hover:border-primary-500/30 transition-colors duration-300">
                        {iconMap[category.category] || <Code2 size={20} />}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.category}
                    </h3>
                  </div>
                  <ArrowUpRight className="text-zinc-700 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                </div>
                
                <div className="space-y-3 relative z-10">
                  {category.items.map((item, i) => {
                    const isMatch = filter ? item.title.toLowerCase().includes(filter.toLowerCase()) : true;
                    
                    return (
                        <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i} 
                            className={`flex items-start gap-3 text-sm transition-all duration-300 group/item cursor-pointer ${isMatch ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
                        >
                            <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full group-hover/item:bg-primary-500 group-hover/item:shadow-[0_0_5px_#10b981] transition-all" />
                            
                            <span className={`font-mono flex-1 ${isMatch ? 'text-zinc-300 group-hover/item:text-primary-400' : 'text-zinc-600'}`}>
                                {item.title}
                            </span>
                            
                            <FileCode size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-50 group-hover/item:translate-x-0 transition-all duration-300 text-zinc-500" />
                        </a>
                    );
                  })}
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">
                        {category.category.split(' ')[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">
                        ACTIVE
                    </span>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
