import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Github, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-32 border-t border-white/5 bg-zinc-950 relative overflow-hidden">
       {/* Background Gradient */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-zinc-950/50 to-zinc-950 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to build <span className="text-primary-500">something great?</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-lg">
            I'm currently designing scalable ML systems and next-gen agentic AI workflows. 
            Open for collaboration and new opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-20">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Send an Email
            </a>
             <a 
              href={`https://${PERSONAL_INFO.github}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-bold rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center gap-3"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-zinc-600 text-sm font-mono">
             <div className="flex items-center gap-2">
                <MapPin size={14} />
                {PERSONAL_INFO.location}
             </div>
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js & Tailwind.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;