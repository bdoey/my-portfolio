import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, PUBLICATIONS } from '../constants';
import { BookOpen, GraduationCap, ExternalLink, Award } from 'lucide-react';

const Panel = ({ children, title, icon: Icon, index }: { children: React.ReactNode, title: string, icon: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative bg-zinc-950/50 border border-white/10 rounded-xl p-8 overflow-hidden"
  >
    {/* Decorative Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl pointer-events-none" />
    
    <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
            <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 text-primary-400">
                <Icon size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight uppercase font-mono">{title}</h3>
        </div>
        {children}
    </div>
    
    {/* Corner Accents */}
    <div className="absolute top-0 right-0 p-3 opacity-50">
        <div className="w-16 h-16 bg-primary-500/5 rounded-bl-3xl" />
    </div>
  </motion.div>
);

const EducationPublications: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Education Panel */}
        <Panel title="Education" icon={GraduationCap} index={0}>
          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="relative pl-6 border-l border-zinc-800 hover:border-primary-500/50 transition-colors group">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full group-hover:bg-primary-500 transition-colors border border-zinc-950" />
                <h4 className="text-lg font-bold text-zinc-100 group-hover:text-primary-400 transition-colors">{edu.degree}</h4>
                <p className="text-zinc-400 font-medium mb-2 font-mono text-xs mt-1">{edu.institution}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{edu.concentration}</p>
              </div>
            ))}
          </div>
        </Panel>

        {/* Publications Panel */}
        <Panel title="Publications" icon={BookOpen} index={1}>
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className="group relative bg-zinc-900/30 p-5 rounded-lg border border-zinc-800 hover:border-primary-500/30 hover:bg-zinc-900/50 transition-all">
                <div className="flex items-start gap-3">
                    <Award className="text-zinc-600 group-hover:text-primary-500 mt-1 shrink-0 transition-colors" size={16} />
                    <div>
                        <p className="text-zinc-300 text-sm italic mb-3 leading-relaxed">
                        "{pub.citation.replace(/\"/g, '')}"
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary-400 text-xs font-mono font-medium cursor-pointer hover:text-primary-300 bg-primary-500/10 px-2 py-1 rounded">
                            <ExternalLink size={12} />
                            <span>{pub.link}</span>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

      </div>
    </section>
  );
};

export default EducationPublications;