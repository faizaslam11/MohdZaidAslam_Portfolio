import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, FlaskConical, Cpu, Smartphone, Settings, Layout, CheckCircle, Languages, Binary } from 'lucide-react';
import { skillCategories, SkillCategory } from '../data';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Laboratory Techniques':
        return <FlaskConical className="w-5 h-5 text-cyan-chem" />;
      case 'Analytical Instruments':
        return <Cpu className="w-5 h-5 text-emerald-chem" />;
      case 'Software & Digital Tools':
        return <Binary className="w-5 h-5 text-purple-400" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-amber-500" />;
      default:
        return <Settings className="w-5 h-5 text-navy-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-emerald-chem dark:text-emerald-400 mb-2">
            Professional Competence
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            Technical & Laboratory Skills
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold font-display tracking-wider uppercase rounded-full border cursor-pointer transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-navy-700 dark:bg-cyan-chem border-navy-700 dark:border-cyan-chem text-white dark:text-navy-950 shadow-md scale-102'
                  : 'border-navy-200 dark:border-navy-800 text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800/50 hover:border-navy-300 dark:hover:border-navy-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              id={`skill-cat-card-${cat.category.replace(/\s+/g, '-').toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-navy-100/60 dark:border-navy-800/60 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-navy-100/60 dark:border-navy-800/40">
                <div className="p-2 rounded-xl bg-navy-50 dark:bg-navy-850">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-800 dark:text-white">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-sans">
                      <span className="font-semibold text-navy-700 dark:text-navy-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs font-bold text-cyan-chem dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-navy-100 dark:bg-navy-850 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-chem to-emerald-chem shadow-sm relative"
                      >
                        {/* Glow tip of the bar */}
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chemical Equation / Safety Note decorative */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-navy-400 dark:text-navy-400/80 inline-flex items-center space-x-1 px-4 py-2 rounded-xl border border-navy-100 dark:border-navy-800/50 bg-navy-50/20 dark:bg-navy-950/20">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-chem mr-1" />
            <span>Certified in CSIR-IIP Dehradun laboratory safety and spectroscopic testing methodologies.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
