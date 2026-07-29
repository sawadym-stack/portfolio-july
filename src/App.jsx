import React, { useEffect } from 'react';
import IntroPreloader from './components/IntroPreloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ActivityStats from './components/ActivityStats';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="app-layout">
      {/* Intro Preloader Splash Screen */}
      <IntroPreloader />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ActivityStats />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileNav />
    </div>
  );
}
