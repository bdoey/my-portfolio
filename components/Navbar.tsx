
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4`}
    >
      <div 
        className={`w-full max-w-5xl rounded-full border transition-all duration-300 ${
          scrolled 
            ? 'bg-zinc-950/70 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20 py-3 px-6' 
            : 'bg-transparent border-transparent py-4 px-4'
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#home" className="text-lg font-bold tracking-tighter text-white flex items-center gap-1 group">
            BDOEY<span className="text-primary-500 group-hover:text-accent-500 transition-colors">.DEV</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
             <a
              href="#contact"
              className="px-4 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 inset-x-4 p-4 bg-zinc-900 border border-white/10 rounded-2xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-primary-500 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-black bg-primary-500 px-4 py-2 rounded-lg text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
