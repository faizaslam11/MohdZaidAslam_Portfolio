import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Award, MapPin, ChevronRight, FlaskConical, Globe, Leaf, Sun, HelpCircle } from 'lucide-react';
import { experiencesList, ExperienceItem } from '../data';

export default function ResearchProjects() {
  const [activeTab, setActiveTab] = useState<'all' | 'internship' | 'conference'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Filter items: internships and conferences are research/projects
  const projectItems = experiencesList.filter(
    (item) => item.type === 'internship' || item.type === 'conference'
  );

  const filteredProjects = activeTab === 'all'
    ? projectItems
    : projectItems.filter((item) => item.type === activeTab);

  const getProjectIcon = (item: ExperienceItem) => {
    if (item.type === 'conference') {
      return <Award className="w-5 h-5 text-amber-500 animate-pulse-subtle" />;
    }
    
    // Choose icon based on internship organization keywords
    if (item.organization.toLowerCase().includes('solar')) {
      return <Sun className="w-5 h-5 text-amber-500" />;
    } else if (item.organization.toLowerCase().includes('green') || item.organization.toLowerCase().includes('enviro')) {
      return <Leaf className="w-5 h-5 text-emerald-chem" />;
    } else {
      return <FlaskConical className="w-5 h-5 text-cyan-chem" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-navy-50/30 dark:bg-navy-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-cyan-chem dark:text-cyan-400 mb-2">
            Practical Exposure & Research
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            Research & Projects
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center space-x-3 mb-12">
          <button
            id="project-tab-all"
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-display tracking-wider uppercase border cursor-pointer transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-navy-700 dark:bg-cyan-chem border-navy-700 dark:border-cyan-chem text-white dark:text-navy-950 shadow-md'
                : 'border-navy-200 dark:border-navy-800 text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800/50'
            }`}
          >
            All Work
          </button>
          <button
            id="project-tab-internships"
            onClick={() => setActiveTab('internship')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-display tracking-wider uppercase border cursor-pointer transition-all duration-300 ${
              activeTab === 'internship'
                ? 'bg-navy-700 dark:bg-cyan-chem border-navy-700 dark:border-cyan-chem text-white dark:text-navy-950 shadow-md'
                : 'border-navy-200 dark:border-navy-800 text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800/50'
            }`}
          >
            Internships
          </button>
          <button
            id="project-tab-conferences"
            onClick={() => setActiveTab('conference')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-display tracking-wider uppercase border cursor-pointer transition-all duration-300 ${
              activeTab === 'conference'
                ? 'bg-navy-700 dark:bg-cyan-chem border-navy-700 dark:border-cyan-chem text-white dark:text-navy-950 shadow-md'
                : 'border-navy-200 dark:border-navy-800 text-navy-600 dark:text-navy-300 hover:bg-navy-50 dark:hover:bg-navy-800/50'
            }`}
          >
            Conferences
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-3xl border border-navy-100/60 dark:border-navy-800/60 overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl hover:border-cyan-chem/40 dark:hover:border-cyan-chem/35 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Header Badge & Color Accents */}
                <div className={`h-2 w-full ${
                  project.type === 'conference' 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500' 
                    : 'bg-gradient-to-r from-cyan-chem to-emerald-chem'
                }`} />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Meta info */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-navy-400 dark:text-navy-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.period}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-navy-100 dark:bg-navy-850 text-navy-500 dark:text-cyan-chem/80 font-bold uppercase tracking-wider">
                        {project.type}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display font-bold text-lg text-navy-800 dark:text-white leading-snug group-hover:text-cyan-chem dark:group-hover:text-cyan-400 transition-colors">
                      {project.role}
                    </h3>

                    {/* Organization details */}
                    <p className="font-display text-sm font-semibold text-navy-600 dark:text-navy-300 flex items-center space-x-1.5">
                      <span className="p-1 rounded bg-navy-50 dark:bg-navy-850">
                        {getProjectIcon(project)}
                      </span>
                      <span>{project.organization}</span>
                    </p>

                    {/* Location */}
                    {project.location && (
                      <div className="flex items-center space-x-1 text-xs text-navy-400 dark:text-navy-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                    )}

                    <div className="h-px bg-navy-100/60 dark:bg-navy-800/40 my-3" />

                    {/* Bullets (expandable or shown cleanly) */}
                    <div className="space-y-2">
                      {project.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-navy-500 dark:text-navy-400 leading-relaxed font-sans">
                          <ChevronRight className="w-4 h-4 text-cyan-chem dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills tags footer */}
                  {project.skillsLearned && (
                    <div className="pt-4 border-t border-navy-100/60 dark:border-navy-800/40 flex flex-wrap gap-1.5">
                      {project.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-lg bg-navy-50 dark:bg-navy-850 text-[10px] font-mono text-navy-500 dark:text-navy-300 uppercase tracking-wide border border-navy-100/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
