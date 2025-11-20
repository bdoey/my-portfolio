
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '../constants'; 
import { Cpu, Code, Database, Terminal, Activity, ChevronRight, Hash, Server, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SKILLS[0].category);
  // We track the currently "focused" skill to display in the readout panel
  const [focusedSkillName, setFocusedSkillName] = useState<string | null>(null);

  // Helper to get skills for current category
  const getActiveSkills = () => SKILLS.find((s) => s.category === activeCategory)?.skills || [];

  // Effect: When category changes, default select the first skill
  // This ensures the "Readout" panel is never empty.
  useEffect(() => {
    const skills = getActiveSkills();
    if (skills.length > 0) {
      setFocusedSkillName(skills[0].name);
    }
  }, [activeCategory]);

  // Find the full data object for the currently focused skill
  const activeSkillData = getActiveSkills().find(s => s.name === focusedSkillName) || getActiveSkills()[0];

  return (
    //<section id="skills" className="py-32 bg-zinc-900/20 relative overflow-visible min-h-screen flex items-center">
    <section id="skills" className="py-32 relative flex items-center">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header Section */}
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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Navigation Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
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
                
                {/* Active State Indicators */}
                {activeCategory === group.category && (
                  <>
                    <motion.div
                        layoutId="active-glow"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/5 to-transparent pointer-events-none"
                    />
                    <span className="h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Content Area */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            {/* 1. The Skill Grid */}
            <div className="bg-zinc-950/50 border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
                        <h3 className="text-lg font-mono text-primary-400 uppercase tracking-widest flex items-center gap-2">
                           <Activity size={16} /> 
                           {activeCategory}
                        </h3>
                        <span className="text-xs font-mono text-zinc-600">
                            MODULES_LOADED: {getActiveSkills().length.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-black scrollbar-thumb-zinc-700">
                        {getActiveSkills().map((skill, i) => (
                            <motion.button
                                key={skill.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                onClick={() => setFocusedSkillName(skill.name)}
                                onMouseEnter={() => setFocusedSkillName(skill.name)}
                                className={`group relative flex items-center justify-between p-3 rounded border transition-all duration-200 text-left w-full ${
                                    focusedSkillName === skill.name 
                                    ? 'bg-primary-500/10 border-primary-500/50' 
                                    : 'bg-zinc-900/40 border-white/5 hover:border-primary-500/30 hover:bg-zinc-800'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                        focusedSkillName === skill.name ? 'bg-primary-400' : 'bg-zinc-700 group-hover:bg-primary-500'
                                    }`} />
                                    <span className={`font-mono text-sm transition-colors ${
                                        focusedSkillName === skill.name ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                                    }`}>
                                        {skill.name}
                                    </span>
                                </div>
                                
                                {/* Selection Indicator Arrow */}
                                <ChevronRight 
                                    size={14} 
                                    className={`transition-transform duration-200 ${
                                        focusedSkillName === skill.name ? 'opacity-100 text-primary-500 translate-x-0' : 'opacity-0 -translate-x-2'
                                    }`} 
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. The "System Analysis" / Description Panel 
                This replaces the Tooltip. It is always visible. */}
            <div className="relative min-h-[200px] rounded-xl bg-black border border-primary-500/30 p-1 overflow-hidden shadow-2xl">
                {/* Decorative "Screen" Effects */}
                <div className="absolute inset-0 bg-primary-500/5 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
                
                {/* Inner Content Container */}
                <div className="h-full bg-zinc-950/80 rounded-lg p-6 relative overflow-hidden flex flex-col">
                    {/* Background Scanline (Subtle) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />

                    <AnimatePresence mode="wait">
                        {activeSkillData && (
                            <motion.div
                                key={activeSkillData.name}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="relative z-10 flex flex-col h-full gap-4"
                            >
                                <div className="flex items-center justify-between border-b border-primary-500/20 pb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded bg-primary-500/10 border border-primary-500/30">
                                            <Hash size={14} className="text-primary-400" />
                                        </div>
                                        <span className="text-primary-400 font-mono text-sm font-bold tracking-wider">
                                            {activeSkillData.name.toUpperCase()}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-primary-500/40 animate-pulse">
                                        ● SYSTEM_ACTIVE
                                    </span>
                                </div>
                                
                                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                                    {activeSkillData.description}
                                </p>
                                
                                {/* Decorative Footer Info */}
                                <div className="pt-2 flex gap-4 text-[10px] font-mono text-zinc-600 mt-auto">
                                    <span>MEM_ADDR: 0x{activeSkillData.name.length.toString(16).padStart(4, '0')}</span>
                                    <span>STATUS: OPTIMIZED</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
