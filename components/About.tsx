
import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT, EDUCATION, PUBLICATIONS, PERSONAL_INFO } from '../constants';
import { BookOpen, GraduationCap, ExternalLink, Award, User, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
           <div className="flex items-center gap-2 mb-4">
             <span className="h-px w-8 bg-primary-500/50" />
             <span className="text-primary-400 font-mono text-xs tracking-widest uppercase">About Me</span>
          </div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Strategic Insight. <span className="text-zinc-500">Technical Precision.</span>
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Col: Bio & Headshot */}
            <div className="lg:col-span-5 space-y-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Tech Border for Image */}
                    <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50">
                        {/* Corner Accents */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary-500/50 rounded-tl z-20" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary-500/50 rounded-tr z-20" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary-500/50 rounded-bl z-20" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary-500/50 rounded-br z-20" />
                        
                        {/* Image Placeholder - User should replace src with actual image */}
                        <img 
                            src="/headshot.jpg" 
                            alt={PERSONAL_INFO.name}
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            onError={(e) => {
                                e.currentTarget.src = "/headshot.jpg";
                            }}
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                    
                    {/* Name Badge */}
                    <div className="hidden lg:block absolute -right-6 bottom-10 bg-zinc-950/80 backdrop-blur-md border border-white/10 py-3 px-6 rounded-lg shadow-xl border-l-4 border-l-primary-500">
                         <h3 className="text-white font-bold tracking-tight">{PERSONAL_INFO.name}</h3>
                         <p className="text-xs text-primary-400 font-mono mt-0.5">Full-Stack Data Scientist</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert max-w-none"
                >
                    <p className="text-lg text-zinc-300 leading-relaxed whitespace-pre-wrap">
                        {ABOUT_CONTENT.bio}
                    </p>
                </motion.div>

                {/* Education Section Integrated on Left Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                        <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 text-primary-400">
                            <GraduationCap size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-tight uppercase font-mono">Education</h3>
                    </div>
                    
                    <div className="space-y-6">
                        {EDUCATION.map((edu, i) => (
                            <div key={i} className="relative pl-6 border-l border-zinc-800 hover:border-primary-500/50 transition-colors group">
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full group-hover:bg-primary-500 transition-colors border border-zinc-950" />
                                <h4 className="text-base font-bold text-zinc-100 group-hover:text-primary-400 transition-colors">{edu.degree}</h4>
                                <p className="text-zinc-400 font-medium text-xs mt-1 font-mono">{edu.institution}</p>
                                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{edu.concentration}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Col: Publications */}
            <div className="lg:col-span-7 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-full"
                >
                     <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                        <div className="p-2 bg-zinc-900/80 rounded-lg border border-zinc-800 text-primary-400">
                            <BookOpen size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight uppercase font-mono">Published Research</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {PUBLICATIONS.map((pub, i) => (
                            <motion.a 
                                key={i}
                                href={pub.url}
                                target="_blank"
                              
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="group relative bg-zinc-950/90 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-hidden hover:bg-zinc-900/90 hover:border-primary-500/30 transition-all duration-300"
                            >
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl pointer-events-none opacity-50" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-mono font-medium">
                                            <Award size={12} />
                                            Research Paper
                                        </div>
                                        <ArrowUpRight className="text-zinc-600 group-hover:text-primary-500 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-primary-100 transition-colors">
                                        "{pub.citation.replace(/.*"(.*)".*/, '$1')}"
                                    </h4>

                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l-2 border-zinc-800 pl-4 italic group-hover:border-primary-500/50 transition-colors">
                                        {pub.description}
                                    </p>
                                    
                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="text-xs text-zinc-500 font-mono">
                                            Published in <span className="text-zinc-300">{pub.link}</span>
                                        </div>
                                        <div className="text-xs text-zinc-600 font-mono">
                                            2025
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
