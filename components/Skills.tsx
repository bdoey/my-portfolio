
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Code, Database, Terminal, Layers } from 'lucide-react';

// Helper to handle mouse position for tooltips
const Tooltip = ({ content, isVisible }: { content: { title: string; body: string } | null, isVisible: boolean }) => {
  if (!content) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 5 }}
          transition={{ duration: 0.15 }}
          className="absolute z-50 w-72 p-4 rounded-lg bg-zinc-950/95 border border-primary-500/20 shadow-2xl backdrop-blur-md pointer-events-none -translate-y-[110%] left-0 sm:left-auto"
          style={{
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)',
          }}
        >
           {/* Decorative corner markers */}
           <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary-500/50 rounded-tl-sm" />
           <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-primary-500/50 rounded-tr-sm" />
           <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary-500/50 rounded-bl-sm" />
           <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary-500/50 rounded-br-sm" />

           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-primary-400 font-mono text-xs font-bold uppercase tracking-wider">
                  {content.title}
                </span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                {content.body}
              </p>
           </div>
           
           {/* Arrow */}
           <div className="absolute bottom-0 left-4 translate-y-1/2 rotate-45 w-2 h-2 bg-zinc-950 border-r border-b border-primary-500/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SKILLS[0].category);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getActiveSkills = () => SKILLS.find((s) => s.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-32 bg-zinc-900/20 relative overflow-visible">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
             <span className="h-px w-8 bg-primary-500/50" />
             <span className="text-primary-400 font-mono text-xs tracking-widest uppercase">System Specifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical Competencies
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Navigation Sidebar */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {SKILLS.map((group) => (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`group relative px-6 py-4 text-left rounded-lg border transition-all duration-300 flex items-center justify-between ${
                  activeCategory === group.category
                    ? 'bg-zinc-900 border-primary-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                    : 'bg-transparent border-transparent hover:bg-zinc-900/50 hover:border-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                    <span className={`${activeCategory === group.category ? 'text-primary-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {group.category.includes("Languages") ? <Code size={18} /> : 
                         group.category.includes("Frameworks") ? <Cpu size={18} /> :
                         group.category.includes("Generative") ? <Terminal size={18} /> :
                         <Database size={18} />}
                    </span>
                    <span className={`font-medium ${activeCategory === group.category ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                    {group.category}
                    </span>
                </div>
                
                {activeCategory === group.category && (
                  <motion.div
                    layoutId="active-glow"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/5 to-transparent pointer-events-none"
                  />
                )}
                
                {activeCategory === group.category && (
                    <span className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                )}
              </button>
            ))}
          </div>

          {/* Detail View */}
          <div className="w-full md:w-2/3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-950/50 border border-white/10 rounded-xl p-8 min-h-[400px] relative"
              >
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-zinc-950/80 rounded-xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                        <h3 className="text-xl font-mono text-primary-400 uppercase tracking-widest">
                            {activeCategory}
                        </h3>
                        <span className="text-xs font-mono text-zinc-600">
                            INDEX: {SKILLS.findIndex(s => s.category === activeCategory).toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getActiveSkills().map((skill, i) => (
                        <div 
                          key={skill.name} 
                          className="relative" 
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Tooltip 
                            isVisible={hoveredSkill === skill.name} 
                            content={{ title: skill.name, body: skill.description }}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="group flex items-center justify-between p-3 bg-zinc-900/80 border border-white/5 rounded hover:border-primary-500/30 hover:bg-zinc-800 transition-all duration-200 cursor-default"
                          >
                              <div className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-primary-500 transition-colors" />
                                  <span className="text-zinc-300 font-mono text-sm group-hover:text-white transition-colors">{skill.name}</span>
                              </div>
                              {/* Tech indicator */}
                              <div className="flex gap-0.5 opacity-20 group-hover:opacity-100 transition-opacity">
                                  <div className="w-1 h-2 bg-primary-500 rounded-sm" />
                                  <div className="w-1 h-2 bg-primary-500 rounded-sm" />
                                  <div className="w-1 h-2 bg-primary-500 rounded-sm" />
                              </div>
                          </motion.div>
                        </div>
                    ))}
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
