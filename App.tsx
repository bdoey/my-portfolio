import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationPublications from './components/EducationPublications';
import Contact from './components/Contact';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-primary-500/30 selection:text-primary-200 relative">
      
      {/* Global Background Elements - Fixed position to stay consistent throughout scroll */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        {/* Interactive Grid */}
        <BackgroundGrid />
        
        {/* Animated Blobs for Depth - Placed behind grid via z-index logic or ordering, but visually nicely blended */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 p-20 opacity-20">
               <div className="w-96 h-96 bg-primary-500 rounded-full blur-[128px] animate-blob" />
            </div>
            <div className="absolute bottom-0 left-0 p-20 opacity-10">
               <div className="w-64 h-64 bg-accent-500 rounded-full blur-[128px] animate-blob animation-delay-2000" />
            </div>
        </div>
        
        {/* Vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-none">
        {/* Re-enable pointer events for actual content */}
        <div className="pointer-events-auto">
            <Navbar />
            <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <EducationPublications />
            </main>
            <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
