import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden border-b border-white/5">
      
      <div className="max-w-6xl mx-auto px-6 z-10 w-full">
        
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono text-primary-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            OPEN FOR WORK
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Intelligent</span> Systems.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {PERSONAL_INFO.summary.split('.')[0]}. {PERSONAL_INFO.summary.split('.')[1]}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#experience"
                className="group px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                Explore Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-6 py-3 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right side Abstract Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative w-full aspect-square max-w-md mx-auto border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                
                {/* Code Window Mockup */}
                <div className="h-full w-full bg-zinc-950 rounded-xl overflow-hidden flex flex-col">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <div className="ml-auto text-xs text-zinc-500 font-mono">agent_workflow.py</div>
                  </div>
                  <div className="p-6 font-mono text-sm text-zinc-400 space-y-2 overflow-hidden opacity-80">
                    <div className="flex gap-2"><span className="text-purple-400">import</span> <span className="text-white">torch</span></div>
                    <div className="flex gap-2"><span className="text-purple-400">from</span> <span className="text-white">transformers</span> <span className="text-purple-400">import</span> AutoModel</div>
                    <br/>
                    <div className="flex gap-2"><span className="text-blue-400">class</span> <span className="text-yellow-300">ChurnPredictor</span>:</div>
                    <div className="pl-4 flex gap-2"><span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span>(self):</div>
                    <div className="pl-8 flex gap-2"><span className="text-zinc-500"># Initialize multi-agent system</span></div>
                    <div className="pl-8 flex gap-2">self.agents = <span className="text-primary-400">[]</span></div>
                    <div className="pl-8 flex gap-2">self.threshold = <span className="text-accent-500">0.85</span></div>
                    <br/>
                    <div className="pl-4 flex gap-2"><span className="text-blue-400">async def</span> <span className="text-yellow-300">analyze</span>(self, data):</div>
                    <div className="pl-8 flex gap-2"><span className="text-purple-400">return</span> <span className="text-primary-400">await</span> self.process(data)</div>
                    
                    {/* Animated cursor */}
                    <div className="pl-8 mt-2 w-2 h-4 bg-primary-500 animate-pulse" />
                  </div>
                </div>
             </div>
             {/* Floating decorative elements */}
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;