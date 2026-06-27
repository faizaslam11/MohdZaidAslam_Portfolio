import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Cpu, Database, Binary, HelpCircle, FileCheck, Landmark, CheckCircle2 } from 'lucide-react';
import { experiencesList, ExperienceItem } from '../data';

export default function Certifications() {
  const certifications = experiencesList.filter(
    (item) => item.type === 'training' || item.type === 'workshop'
  );

  const getCertIcon = (item: ExperienceItem) => {
    if (item.organization.toLowerCase().includes('csir')) {
      return <ShieldCheck className="w-6 h-6 text-emerald-chem" />;
    } else if (item.organization.toLowerCase().includes('cipet')) {
      return <FileCheck className="w-6 h-6 text-cyan-chem" />;
    } else if (item.organization.toLowerCase().includes('quantum')) {
      return <Binary className="w-6 h-6 text-purple-400" />;
    } else {
      return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-emerald-chem dark:text-emerald-400 mb-2">
            Skill Development
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            Certifications & Training
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-navy-100/60 dark:border-navy-800/60 shadow-lg hover:shadow-xl hover:border-emerald-chem/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Corner Watermark Seal */}
              <div className="absolute top-6 right-6 text-navy-100 dark:text-navy-800/30 group-hover:scale-105 transition-transform">
                <Landmark className="w-14 h-14" />
              </div>

              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-navy-50 dark:bg-navy-850 text-navy-700 dark:text-navy-300 shadow-sm relative">
                    {getCertIcon(cert)}
                    {/* Tiny green verification tick */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-chem flex items-center justify-center border-2 border-white dark:border-navy-900">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-navy-400 dark:text-navy-400 block uppercase tracking-wider leading-none mb-1">
                      {cert.period}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-navy-800 dark:text-white leading-tight">
                      {cert.role}
                    </h3>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="font-display text-sm font-semibold text-navy-600 dark:text-navy-300">
                    {cert.organization}
                  </p>
                  {cert.location && (
                    <p className="font-sans text-xs text-navy-400 dark:text-navy-400">
                      Location: {cert.location}
                    </p>
                  )}
                </div>

                <div className="h-px bg-navy-100/60 dark:bg-navy-800/40 my-2" />

                {/* Bullets */}
                <div className="space-y-2.5">
                  {cert.bullets.map((bullet, bIdx) => (
                    <p
                      key={bIdx}
                      className="text-xs sm:text-sm text-navy-500 dark:text-navy-400 leading-relaxed font-sans"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>

              {/* Skills and Badges at Bottom */}
              {cert.skillsLearned && (
                <div className="mt-6 pt-4 border-t border-navy-100/60 dark:border-navy-800/40 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-emerald-chem/10 dark:bg-emerald-chem/5 text-[10px] font-mono text-emerald-chem dark:text-emerald-400 uppercase tracking-wide font-semibold border border-emerald-chem/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
