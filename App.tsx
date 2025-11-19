
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-primary-500/30 selection:text-primary-200 relative">
      
      {/* Global Background Elements - Fixed position to stay consistent throughout scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Interactive Tech Grid */}
        <BackgroundGrid />
        
        {/* Ambient Atmosphere - Deep, subtle glows */}
        <div className="absolute inset-0">
            {/* Top Right - Primary Green */}
            <div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[120px] animate-pulse-slow" />
            
            {/* Bottom Left - Accent Cyan */}
            <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-[100px] opacity-60" />
            
            {/* Center Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-zinc-900/20 rounded-full blur-[150px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
