
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Facebook, User, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

// Custom X (Twitter) Icon for accuracy
const XIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3 bg-zinc-900/50 border border-white/10 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-primary-500/50 transition-all duration-300 overflow-hidden"
        aria-label={label}
    >
        <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
    </a>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden border-b border-white/5">
      
      <div className="max-w-6xl mx-auto px-6 z-10 w-full">
        
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start mb-6"
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
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Intelligent</span> Systems.
            </h1>

            {/* Name Intro (Moved Here) */}
            <div className="flex items-center gap-3 mb-6 pt-6">
                <span className="h-px w-8 bg-primary-500/50" />
                <h2 className="text-lg md:text-xl font-mono text-primary-400 tracking-wide">
                    Hi, I'm <span className="text-white font-bold">Brandon Doey</span>
                </h2>
            </div>

            {/* Summary */}
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {PERSONAL_INFO.summary.split('.')[0]}. {PERSONAL_INFO.summary.split('.')[1]}.
            </p>
            
            {/* Actions & Socials Container */}
            <div className="flex flex-col gap-6">
                {/* Buttons Row */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="group px-6 py-3 bg-zinc-900/50 border border-white/10 text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 hover:text-white hover:border-primary-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    About Me
                    <User size={16} className="group-hover:text-primary-400 transition-colors" />
                  </a>
                  {/* 
                  <!-- <a
                    href="#experience"
                    className="group px-6 py-3 bg-zinc-900/50 border border-white/10 text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 hover:text-white hover:border-primary-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    Explore Work
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform group-hover:text-primary-400" />
                  </a> -->*/}
                  <a
                    href="/Brandon_Doey_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 bg-zinc-900/50 border border-white/10 text-zinc-300 font-medium rounded-xl hover:bg-zinc-800 hover:text-white hover:border-primary-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
                    Resume
                    <FileText size={16} className="group-hover:text-primary-400 transition-colors" />
                  </a>
                </div>

                {/* Social Links Row 
                <!-- <div className="flex items-center gap-4">
                    <div className="flex gap-3">
                        <SocialLink href="https://www.linkedin.com/in/bdoey" icon={Linkedin} label="LinkedIn" />
                        <SocialLink href="https://github.com/bdoey" icon={Github} label="GitHub" />
                        <SocialLink href="https://www.facebook.com/bdoey" icon={Facebook} label="Facebook" />
                        <SocialLink href="https://x.com/bdoey" icon={XIcon} label="X" />
                    </div>
                </div> -->*/}
            </div>

          </motion.div>

          {/* Right side Abstract Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative w-full aspect-square max-w-md mx-auto border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-1 overflow-hidden shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                
                {/* Code Window Mockup */}
                <div className="h-full w-full bg-zinc-950 rounded-xl overflow-hidden flex flex-col border border-white/5">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <div className="ml-auto text-xs text-zinc-500 font-mono">agent_workflow.py</div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm text-zinc-300 space-y-1.5 overflow-hidden opacity-90 leading-relaxed">
                    {/* Line 1: Decorator */}
                    <div className="flex gap-2">
                      <span className="text-blue-400">@agent.task</span>
                    </div>
                    
                    {/* Line 2: Function Def */}
                    <div className="flex flex-wrap gap-x-2">
                      <span className="text-purple-400">async def</span> 
                      <span className="text-yellow-300">monitor_churn_risk</span>
                      <span className="text-zinc-400">(user_id: <span className="text-accent-500">str</span>):</span>
                    </div>
                    
                    {/* Line 3: Comment */}
                    <div className="pl-4 text-zinc-500 italic">
                      # Real-time inference on user behavior
                    </div>
                    
                    {/* Line 4: Assignment */}
                    <div className="pl-4 flex flex-wrap gap-x-2">
                      <span>risk_score =</span>
                      <span className="text-purple-400">await</span> 
                      <span>model.predict_async(user_id)</span>
                    </div>
                    
                    {/* Line 5: Empty */}
                    <br/>
                    
                    {/* Line 6: If statement */}
                    <div className="pl-4 flex gap-x-2">
                      <span className="text-purple-400">if</span>
                      <span>risk_score {'>'}</span> 
                      <span className="text-orange-400">0.85</span>:
                    </div>
                    
                    {/* Line 7: Comment */}
                    <div className="pl-8 text-zinc-500 italic">
                      # Trigger autonomous retention workflow
                    </div>
                    
                    {/* Line 8: Await Action */}
                    <div className="pl-8 flex flex-wrap gap-x-2 items-center">
                      <span className="text-purple-400">await</span>
                      <span>retention_bot.engage(user_id, strategy=<span className="text-primary-400">"discount"</span>)</span>
                    </div>
                    
                    {/* Animated cursor */}
                    <div className="pl-8 mt-2">
                         <div className="w-2 h-4 bg-primary-500 animate-pulse" />
                    </div>
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
