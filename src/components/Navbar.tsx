import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, FlaskConical, Download } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
  activeSection,
  scrollToSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Research & Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  const triggerResumeDownload = () => {
    // Dynamic window print layout for elegant resume download / export
    window.print();
  };

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-md py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div
            id="nav-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative p-2 rounded-lg bg-navy-600 dark:bg-cyan-chem/15 text-white dark:text-cyan-chem transition-transform group-hover:scale-105 duration-300">
              <FlaskConical className="w-5 h-5 animate-pulse-subtle" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-chem animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-navy-800 dark:text-white">
                Mohd Zaid Aslam
              </span>
              <span className="font-mono text-[9px] text-navy-500 dark:text-cyan-chem/80 uppercase tracking-widest leading-none">
                Industrial Chemist
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation-menu" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-desktop-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-display text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white dark:text-navy-950'
                      : 'text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white hover:bg-navy-100/50 dark:hover:bg-navy-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-navy-700 dark:bg-cyan-chem rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme toggle & Resume Download */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="theme-toggle-desktop"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full border border-navy-200 dark:border-navy-800 hover:bg-navy-100 dark:hover:bg-navy-800/50 text-navy-700 dark:text-navy-200 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle dark/light mode"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <button
              id="download-resume-navbar"
              onClick={triggerResumeDownload}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold font-display tracking-wide uppercase text-white bg-emerald-chem hover:bg-emerald-600 rounded-full transition-colors duration-300 shadow-sm glow-emerald cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save CV</span>
            </button>
          </div>

          {/* Mobile elements */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="theme-toggle-mobile"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-navy-700 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <button
              id="hamburger-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-navy-700 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-navy-800/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full border-t border-navy-100 dark:border-navy-800 glass-panel shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-mobile-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 font-display font-medium text-base rounded-xl transition-all ${
                      isActive
                        ? 'bg-navy-700 dark:bg-cyan-chem text-white dark:text-navy-950 shadow-sm'
                        : 'text-navy-700 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-navy-800/30'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-navy-100 dark:border-navy-800/50 flex flex-col space-y-2.5">
                <button
                  id="download-resume-mobile"
                  onClick={triggerResumeDownload}
                  className="flex items-center justify-center space-x-2 w-full py-3 text-sm font-semibold font-display tracking-wide uppercase text-white bg-emerald-chem hover:bg-emerald-600 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Print / Save Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
