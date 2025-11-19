import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Activity } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
           <div className="flex items-center gap-2 mb-4">
             <span className="h-px w-8 bg-primary-500/50" />
             <span className="text-primary-400 font-mono text-xs tracking-widest uppercase">System Logs</span>
          </div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Professional Experience
           </h2>
        </motion.div>

        <div className="relative space-y-8">
          {/* Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary-500/50 via-zinc-800 to-transparent hidden md:block" />

          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-24"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 top-0 w-16 h-16 hidden md:flex items-center justify-center">
                <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center z-10 group-hover:border-primary-500/50 transition-colors">
                   <div className="text-zinc-500 group-hover:text-primary-400">
                     <Activity size={20} />
                   </div>
                </div>
              </div>

              {/* Card Container */}
              <div className="group relative bg-zinc-950/50 border border-white/5 hover:border-primary-500/30 rounded-xl p-6 md:p-8 transition-all duration-300 overflow-hidden">
                
                {/* Tech Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-white/5 pb-4">
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                {job.role}
                            </h3>
                            <div className="text-zinc-400 font-mono text-sm mt-1 flex items-center gap-2">
                                <Briefcase size={14} />
                                {job.company}
                            </div>
                        </div>
                        <span className="text-xs font-mono text-primary-500 py-1 px-3 bg-primary-500/10 border border-primary-500/20 rounded-full w-fit">
                        {job.period}
                        </span>
                    </div>

                    <ul className="space-y-3">
                        {job.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm md:text-base leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-primary-500 transition-colors shrink-0" />
                            <span>{point}</span>
                        </li>
                        ))}
                    </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;