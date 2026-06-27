import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Award, ArrowDown, FileText, FlaskConical, TestTube2, Atom, User } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [imageError, setImageError] = useState(false);

  const titles = personalInfo.titles;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait 2s before starting to delete
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Science Elements */}
      <div className="absolute top-1/4 left-10 text-cyan-chem/15 dark:text-cyan-chem/10 animate-float-slow hidden md:block">
        <FlaskConical className="w-16 h-16" />
      </div>
      <div className="absolute bottom-1/4 right-12 text-emerald-chem/15 dark:text-emerald-chem/10 animate-float-medium hidden md:block">
        <Atom className="w-20 h-20 animate-spin-slow" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-navy-400/10 dark:text-white/5 animate-pulse-subtle hidden lg:block">
        <TestTube2 className="w-12 h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-center lg:self-start items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-100/80 dark:bg-navy-800/60 border border-navy-200/50 dark:border-navy-700/50 text-navy-700 dark:text-cyan-chem font-mono text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-chem animate-pulse" />
              <span>Research & Higher Studies Candidate</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-navy-950 dark:text-white tracking-tight"
              >
                Hi, I'm <span className="bg-gradient-to-r from-emerald-chem via-emerald-400 to-cyan-chem bg-clip-text text-transparent">{personalInfo.name}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-display font-medium text-navy-700 dark:text-navy-300 min-h-[40px] flex items-center justify-center lg:justify-start"
              >
                <span>Specialized in&nbsp;</span>
                <span className="text-emerald-chem dark:text-emerald-400 border-r-2 border-emerald-500 pr-1 animate-pulse font-mono font-semibold">
                  {displayText}
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-navy-600 dark:text-navy-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 py-3 border-y border-navy-100/60 dark:border-navy-800/40 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs text-navy-400 dark:text-navy-400 block uppercase tracking-wider">Education</span>
                <span className="font-display font-semibold text-sm sm:text-base text-navy-800 dark:text-white">M.Sc. AMU</span>
              </div>
              <div className="space-y-1 border-x border-navy-100/60 dark:border-navy-800/40 px-4">
                <span className="font-mono text-xs text-navy-400 dark:text-navy-400 block uppercase tracking-wider">Research Focus</span>
                <span className="font-display font-semibold text-sm sm:text-base text-navy-800 dark:text-white">Green Chem</span>
              </div>
              <div className="space-y-1 pl-2">
                <span className="font-mono text-xs text-navy-400 dark:text-navy-400 block uppercase tracking-wider">Training</span>
                <span className="font-display font-semibold text-sm sm:text-base text-navy-800 dark:text-white">CSIR-IIP</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                id="hero-contact-button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 font-display font-bold text-sm tracking-wide text-white bg-navy-700 hover:bg-navy-800 dark:bg-cyan-chem dark:hover:bg-cyan-500 dark:text-navy-950 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer glow-cyan"
              >
                Contact Me &rarr;
              </button>

              <button
                id="hero-print-cv-button"
                onClick={() => window.print()}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 font-display font-bold text-sm tracking-wide text-navy-700 dark:text-white border border-navy-200 dark:border-navy-700 hover:bg-navy-50 dark:hover:bg-navy-800/40 rounded-xl transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Print / Save CV</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Right: Photo with Glowing Hexagonal Border */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-72 h-96 sm:w-80 sm:h-[420px] group"
            >
              {/* Outer Chemistry Hexagon Watermarks / Glowing backdrops */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-chem/20 to-emerald-chem/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glowing Outline rings representing electron orbits */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-chem/30 dark:border-cyan-chem/50 scale-102 animate-pulse-subtle" />
              <div className="absolute inset-0 rounded-3xl border border-emerald-chem/20 dark:border-emerald-chem/40 scale-105 rotate-1 animate-float-medium" />

              {/* Main Image frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-navy-900 shadow-2xl bg-navy-100 dark:bg-navy-950">
                {!imageError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-navy-900 via-navy-950 to-emerald-950/80 flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
                    {/* Abstract Grid Watermark */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                    
                    {/* Glowing circular backdrop for the avatar */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-chem/10 rounded-full blur-xl" />
                    
                    {/* Stylized Chemistry Flask & Monogram Circle */}
                    <div className="relative mb-4 w-24 h-24 rounded-full border-2 border-dashed border-cyan-chem/40 flex items-center justify-center bg-navy-900/60 shadow-inner group-hover:border-emerald-chem/60 transition-colors duration-500">
                      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-chem/10 to-emerald-chem/10 flex items-center justify-center">
                        <User className="w-10 h-10 text-cyan-chem group-hover:text-emerald-chem transition-colors duration-500" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-navy-950 border border-emerald-chem/30 flex items-center justify-center text-emerald-chem">
                        <FlaskConical className="w-4 h-4 animate-pulse-subtle" />
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-base text-white tracking-wide">
                      {personalInfo.name}
                    </h4>
                    <p className="text-xs text-cyan-chem/80 font-mono mt-1 font-semibold">
                      Quality Control / Analyst
                    </p>

                    {/* Helpful Local Setup Instruction overlay / hover note */}
                    <div className="mt-8 px-4 py-2 rounded-xl bg-navy-900/90 border border-navy-800 text-[10px] text-navy-400 font-mono leading-tight max-w-[220px] shadow-lg">
                      <span className="text-emerald-chem font-semibold block mb-0.5">Local Preview Photo:</span>
                      To show your photo, save it as <code className="text-white bg-navy-950 px-1 py-0.5 rounded">profile.png</code> in <code className="text-white">/src/assets/images/</code>
                    </div>
                  </div>
                )}

                {/* Overlaid chemical formula or element tag (e.g. Carbon/C or Chemistry) */}
                <div className="absolute bottom-4 left-4 right-4 py-2.5 px-4 rounded-xl glass-panel-heavy border border-white/20 shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs font-mono text-navy-400 dark:text-navy-400 block uppercase leading-none">Primary Subject</span>
                      <span className="text-sm font-display font-semibold text-navy-800 dark:text-navy-800">Industrial Chemistry</span>
                    </div>
                    <div className="p-2 rounded-lg bg-navy-700 text-white font-mono text-xs font-bold leading-none">
                      Ch
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Chemistry Element labels floating */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center border border-cyan-chem/40 shadow-lg text-cyan-chem animate-float-slow">
                <span className="font-mono text-[10px] leading-none uppercase">IR</span>
                <span className="text-[9px] font-sans leading-none text-navy-500 dark:text-navy-400 mt-0.5">CSIR</span>
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full glass-panel flex flex-col items-center justify-center border border-emerald-chem/40 shadow-lg text-emerald-chem animate-float-medium">
                <span className="font-mono text-[10px] leading-none uppercase">UV</span>
                <span className="text-[9px] font-sans leading-none text-navy-500 dark:text-navy-400 mt-0.5">Vis</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-1 text-navy-400 hover:text-navy-600 dark:hover:text-cyan-chem transition-colors cursor-pointer group"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
