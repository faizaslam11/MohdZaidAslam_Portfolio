import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, Sparkles, BookOpen, Terminal, ShieldAlert, FlaskConical } from 'lucide-react';
import { personalInfo, chemistryFacts } from '../data';

export default function About() {
  const [activeFact, setActiveFact] = useState(0);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-emerald-chem dark:text-emerald-400 mb-2">
            Professional Profile
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            About Me
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Summary and Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl font-bold text-navy-800 dark:text-navy-100">
              Bridging Chemical Theory with Industrial Applications
            </h3>
            
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed font-sans">
              As an <strong>Industrial Chemistry</strong> graduate and current postgraduate candidate at Aligarh Muslim University, my scientific journey is defined by a deep curiosity about molecular interactions and their macroscopic industrial benefits. 
            </p>
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed font-sans">
              Through rigorous CSIR skill development training at the Indian Institute of Petroleum and active internships, I have gained hands-on expertise in <strong>Infrared (IR) & UV-Vis spectroscopy</strong>, <strong>petroleum fuel testing</strong>, and <strong>pharmaceutical production</strong> under strict GMP guidelines. I am passionate about research in green chemistry, waste-to-energy conversion, and advanced smart nanomaterials.
            </p>

            {/* Scientific Attributes Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-5 rounded-2xl border border-navy-100/50 dark:border-navy-800/40">
                <div className="p-2 w-10 h-10 rounded-lg bg-cyan-chem/15 text-cyan-chem mb-3 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-navy-800 dark:text-white mb-1">Languages</h4>
                <p className="text-xs text-navy-500 dark:text-navy-400">
                  English (Fluent/Academic) | Hindi (Native) | Urdu (Fluent)
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-navy-100/50 dark:border-navy-800/40">
                <div className="p-2 w-10 h-10 rounded-lg bg-emerald-chem/15 text-emerald-chem mb-3 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-display font-semibold text-navy-800 dark:text-white mb-1">Work Authorization</h4>
                <p className="text-xs text-navy-500 dark:text-navy-400">
                  Eligible to work in India. Open to international relocation & visa sponsorship.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Chemical Facts & Research Inspiration Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-navy-200/50 dark:border-navy-800/60 shadow-xl relative overflow-hidden glow-cyan">
              {/* Absolutes backdrops */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-chem/5 dark:bg-cyan-chem/10 rounded-full blur-xl" />
              
              <div className="flex items-center space-x-2 text-cyan-chem dark:text-cyan-400 mb-6 font-mono text-xs uppercase tracking-widest font-semibold">
                <Sparkles className="w-4.5 h-4.5 animate-pulse" />
                <span>Research & Analytical Inspiration</span>
              </div>

              <h3 className="font-display text-xl font-bold text-navy-800 dark:text-white mb-4">
                Chemical Insights & Principles
              </h3>

              <div className="space-y-4">
                {chemistryFacts.map((fact, index) => {
                  const isActive = activeFact === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveFact(index)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-navy-500/10 dark:bg-cyan-chem/10 border-cyan-chem text-navy-800 dark:text-white shadow-sm'
                          : 'bg-transparent border-navy-100/40 dark:border-navy-800/30 text-navy-500 hover:border-navy-200 dark:hover:border-navy-700/50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-1.5 rounded-lg mt-0.5 text-xs font-mono font-bold ${
                          isActive 
                            ? 'bg-cyan-chem text-white' 
                            : 'bg-navy-100 dark:bg-navy-800 text-navy-500 dark:text-navy-400'
                        }`}>
                          0{index + 1}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-sans leading-relaxed ${isActive ? 'text-navy-800 dark:text-navy-200 font-medium' : 'text-navy-500 dark:text-navy-400'}`}>
                            {fact.fact}
                          </p>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.2 }}
                              className="mt-3 pt-3 border-t border-cyan-chem/20 space-y-2 text-xs"
                            >
                              {fact.chemicalFormula && (
                                <div className="flex items-center space-x-2 font-mono bg-navy-50/50 dark:bg-navy-950/40 p-2 rounded-lg border border-cyan-chem/15">
                                  <span className="text-cyan-chem dark:text-cyan-400 font-bold font-mono">Formula:</span>
                                  <code className="text-navy-700 dark:text-navy-300 text-[11px]">{fact.chemicalFormula}</code>
                                </div>
                              )}
                              <div className="text-[11px] font-sans text-emerald-chem dark:text-emerald-400 flex items-center space-x-1 font-semibold">
                                <FlaskConical className="w-3.5 h-3.5 mr-0.5" />
                                <span>Importance: {fact.importance}</span>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Research Quote */}
              <div className="mt-6 pt-5 border-t border-navy-100/60 dark:border-navy-800/40 font-mono text-[11px] text-navy-400 dark:text-navy-400/80 leading-relaxed text-center italic">
                "Modern industrial advancement requires clean, green, and sustainable chemical processes."
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
