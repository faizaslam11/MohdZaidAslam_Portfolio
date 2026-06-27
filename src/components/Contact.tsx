import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, FlaskConical, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-50/10 dark:bg-navy-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-cyan-chem dark:text-cyan-400 mb-2">
            Get In Touch
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            Contact Channels
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-navy-100/60 dark:border-navy-800/60 shadow-xl relative overflow-hidden"
          >
            {/* Visual backdrop accents */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-chem/5 dark:bg-cyan-chem/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-chem/5 dark:bg-emerald-chem/10 rounded-full blur-2xl" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Introduction Text Block */}
              <div className="md:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 text-cyan-chem dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold bg-cyan-chem/10 px-3 py-1.5 rounded-full">
                  <Sparkles className="w-4 h-4 animate-pulse-subtle" />
                  <span>Direct Connection</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-800 dark:text-white leading-tight">
                  Let's Formulate a Connection!
                </h3>
                
                <p className="text-sm sm:text-base text-navy-700 dark:text-navy-200 leading-relaxed font-sans">
                  Whether you have an opening in a Quality Control laboratory, a research fellowship, or wish to collaborate on industrial chemistry projects, please feel free to reach out. I am open to relocating, traveling, and discussing immediate opportunities.
                </p>

                <p className="text-xs text-navy-500 dark:text-navy-400 font-mono italic leading-relaxed">
                  * Direct channels are provided below to guarantee instant delivery straight to my primary inbox and phone.
                </p>
              </div>

              {/* Direct Communication Channels Grid */}
              <div className="md:col-span-6 space-y-4">
                
                {/* Email Channel */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-cyan-chem/40 dark:hover:border-cyan-chem/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-cyan-chem/10 text-cyan-chem group-hover:bg-cyan-chem group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] text-navy-500 dark:text-navy-400 block uppercase tracking-wider leading-none mb-1">
                      Direct Email
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-navy-800 dark:text-white group-hover:text-cyan-chem dark:group-hover:text-cyan-400 transition-colors truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-navy-300 group-hover:text-cyan-chem transition-colors" />
                </a>

                {/* Phone Channel */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-emerald-chem/40 dark:hover:border-emerald-chem/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-emerald-chem/10 text-emerald-chem group-hover:bg-emerald-chem group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] text-navy-500 dark:text-navy-400 block uppercase tracking-wider leading-none mb-1">
                      Call / WhatsApp
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-navy-800 dark:text-white group-hover:text-emerald-chem dark:group-hover:text-emerald-400 transition-colors truncate block">
                      {personalInfo.phone}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-navy-300 group-hover:text-emerald-chem transition-colors" />
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-navy-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] text-navy-500 dark:text-navy-400 block uppercase tracking-wider leading-none mb-1">
                      Professional Network
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-navy-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors truncate block">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-navy-300 group-hover:text-blue-500 transition-colors" />
                </a>

                {/* Location Display */}
                <div className="flex items-center space-x-4 p-5 rounded-2xl bg-navy-50/50 dark:bg-navy-950/40 border border-navy-100/60 dark:border-navy-900/60 shadow-inner">
                  <div className="p-3 rounded-xl bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-navy-500 dark:text-navy-400 block uppercase tracking-wider leading-none mb-1">
                      Current Residence
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-navy-800 dark:text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
