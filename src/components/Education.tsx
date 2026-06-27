import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Landmark, BookOpen, Award } from 'lucide-react';
import { educationList } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-50/30 dark:bg-navy-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-cyan-chem dark:text-cyan-400 mb-2">
            Academic Background
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            Education Timeline
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central stem line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-chem via-emerald-chem to-navy-200 dark:to-navy-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={edu.id}
                  id={`edu-card-${edu.id}`}
                  className="relative flex flex-col md:flex-row items-stretch"
                >
                  {/* Stem Node icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-9 h-9 rounded-full bg-navy-700 dark:bg-cyan-chem border-4 border-white dark:border-navy-900 flex items-center justify-center shadow-md text-white dark:text-navy-950 glow-cyan">
                      <GraduationCap className="w-4.5 h-4.5 animate-pulse-subtle" />
                    </div>
                  </div>

                  {/* Left block (Desktop empty space or content) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? 'md:text-right' : 'md:order-last md:pl-12 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-panel p-6 sm:p-8 rounded-3xl border border-navy-100/60 dark:border-navy-800/60 shadow-lg relative hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Interactive chemistry background subtle icon */}
                      <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} text-navy-100 dark:text-navy-800/40 pointer-events-none`}>
                        <Landmark className="w-16 h-16" />
                      </div>

                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} space-y-2`}>
                        <div className="flex items-center space-x-2 text-cyan-chem dark:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-navy-800 dark:text-white leading-snug">
                          {edu.degree}
                        </h3>

                        <p className="font-display font-medium text-navy-600 dark:text-navy-300 flex items-center space-x-1.5 text-sm sm:text-base">
                          <span>{edu.institution}</span>
                        </p>

                        {edu.gpa && (
                          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-chem/10 text-emerald-chem dark:text-emerald-400 font-mono text-xs font-bold mt-2">
                            <Award className="w-3.5 h-3.5 mr-0.5" />
                            <span>CGPA: {edu.gpa}</span>
                          </div>
                        )}

                        <div className="w-10 h-0.5 bg-navy-200 dark:bg-navy-700 my-2" />

                        <p className="text-xs sm:text-sm text-navy-500 dark:text-navy-400 leading-relaxed font-sans">
                          {edu.details}
                        </p>
                        
                        <div className={`flex flex-wrap gap-2 pt-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="px-2 py-1 bg-navy-100/60 dark:bg-navy-800/50 rounded-lg text-[10px] font-mono font-medium text-navy-600 dark:text-navy-300 uppercase">
                            AMU Alumni
                          </span>
                          <span className="px-2 py-1 bg-navy-100/60 dark:bg-navy-800/50 rounded-lg text-[10px] font-mono font-medium text-navy-600 dark:text-navy-300 uppercase">
                            Industrial Chemistry
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty right/left column on desktop for clean margins */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
