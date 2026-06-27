import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, Linkedin, FlaskConical } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certifications' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="portfolio-footer" className="bg-navy-950 text-navy-400 py-12 relative overflow-hidden border-t border-navy-900">
      
      {/* Decorative molecular line element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-chem via-emerald-chem to-navy-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-navy-900">
          
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-cyan-chem/10 text-cyan-chem">
                <FlaskConical className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="font-sans text-xs max-w-sm leading-relaxed text-navy-400">
              Industrial Chemistry graduate (AMU) & CSIR-IIP trained QC chemist. Specialized in analytical testing, spectroscopic analysis, and sustainable chemical processes.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-mono uppercase tracking-wider">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-cyan-chem transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact and Social Column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-3">
            <div className="flex space-x-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-navy-900 hover:text-cyan-chem transition-colors cursor-pointer border border-navy-850"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-navy-900 hover:text-cyan-chem transition-colors cursor-pointer border border-navy-850"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase">
              {personalInfo.location}
            </span>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 italic text-navy-500 text-center sm:text-right">
            Designed with precision, utilizing green molecular principles.
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScroll && (
        <button
          onClick={handleScrollToTop}
          className="scroll-to-top-btn fixed bottom-6 right-6 p-3 rounded-full bg-navy-700 text-white dark:bg-cyan-chem dark:text-navy-950 shadow-xl border border-white/10 hover:scale-105 transition-transform z-40 cursor-pointer animate-pulse-subtle glow-cyan"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </button>
      )}
    </footer>
  );
}
