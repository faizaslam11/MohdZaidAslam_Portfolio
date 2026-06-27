/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import ChemistryBackground from './components/ChemistryBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import ResearchProjects from './components/ResearchProjects';
import Certifications from './components/Certifications';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Sync dark mode class with root html and body elements
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll spy to detect active section in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 160; // Offset to match section boundaries comfortably

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger immediately to establish correct initial active item
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoother scrolling helper with header height offsets
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70; // Clearance for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-navy-900 dark:text-navy-100 transition-colors duration-500 relative selection:bg-cyan-chem/30 selection:text-cyan-chem">
      
      {/* 3D Animated Chemistry canvas background */}
      <ChemistryBackground isDarkMode={isDarkMode} />

      {/* Main Sticky Header */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        
        {/* Home / Hero */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Me */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Technical Skills & Meters */}
        <Skills />

        {/* Research / Internships & Poster Conferences */}
        <ResearchProjects />

        {/* Certified Training Credentials */}
        <Certifications />

        {/* Visual CV Timelines & Dynamic Print PDFs */}
        <ResumeViewer />

        {/* Contact validation form and clickable channels */}
        <Contact />

      </main>

      {/* Footer and jump controls */}
      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}
