import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Printer, FileText, CheckCircle2, Award, Landmark, MapPin, Mail, Phone, Globe, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { personalInfo, educationList, skillCategories, experiencesList } from '../data';

export default function ResumeViewer() {
  const [showInlineResume, setShowInlineResume] = useState(false);

  const triggerPrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-navy-50/30 dark:bg-navy-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-cyan-chem dark:text-cyan-400 mb-2">
            Curriculum Vitae
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-950 dark:text-white">
            Resume & Download
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-chem to-emerald-chem mx-auto mt-4 rounded-full" />
        </div>

        {/* Screen Interactive Panel */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-navy-100/60 dark:border-navy-800/60 shadow-xl text-center relative"
          >
            {/* Visual Glassmorphism elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-emerald-chem/5 dark:bg-emerald-chem/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-chem/5 dark:bg-cyan-chem/10 rounded-full blur-xl" />

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex p-3 rounded-full bg-navy-50 dark:bg-navy-850 text-cyan-chem mb-2 shadow-sm">
                <FileText className="w-8 h-8 animate-pulse" />
              </div>

              <h3 className="font-display text-2xl font-bold text-navy-800 dark:text-white">
                Looking for a Quality Control or Analytical Chemist role?
              </h3>

              <p className="text-sm sm:text-base text-navy-600 dark:text-navy-300 leading-relaxed font-sans">
                My complete professional profile is optimized for standard recruitment systems and academic reviewers. You can directly open the resume below, or download/save it immediately as a PDF.
              </p>

              {/* Action CTAs: exactly 1 download button and 1 open button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  id="resume-download-btn"
                  onClick={triggerPrint}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 font-display font-bold text-sm tracking-wide text-white bg-emerald-chem hover:bg-emerald-600 dark:bg-emerald-chem dark:hover:bg-emerald-500 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer glow-emerald"
                >
                  <Download className="w-4.5 h-4.5" />
                  <span>Download CV (PDF)</span>
                </button>

                <button
                  id="resume-toggle-inline-btn"
                  onClick={() => setShowInlineResume(!showInlineResume)}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 font-display font-bold text-sm tracking-wide text-navy-700 dark:text-white border border-navy-200 dark:border-navy-700 hover:bg-navy-50 dark:hover:bg-navy-800/40 rounded-xl transition-all cursor-pointer"
                >
                  {showInlineResume ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                  <span>{showInlineResume ? "Close Portfolio Resume" : "Open Resume on Portfolio"}</span>
                </button>
              </div>

              <p className="text-[11px] text-navy-400 dark:text-navy-500 font-mono mt-3 max-w-lg mx-auto leading-relaxed">
                * Note: If downloading does not trigger immediately, it may be due to browser security policies inside this live preview iframe. Simply click the <strong>Open in a new tab</strong> button at the top right of your screen to download/print your print-perfect 2-page CV instantly!
              </p>

              {/* Verification Badges list */}
              <div className="pt-8 border-t border-navy-100/60 dark:border-navy-800/40 flex flex-wrap justify-center gap-6 text-xs text-navy-500 dark:text-navy-400 font-mono">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-chem" />
                  <span>CSIR-IIP Trained</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-chem" />
                  <span>AMU Graduate</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-chem" />
                  <span>GMP Exposed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Screen Replica of the CV Sheet */}
        <AnimatePresence>
          {showInlineResume && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="max-w-4xl mx-auto overflow-hidden mb-16"
            >
              <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-navy-200 dark:border-navy-800/80 shadow-2xl relative bg-white/95 dark:bg-navy-950/90 text-navy-900 dark:text-navy-100 font-sans">
                {/* Close Button Inside the Preview */}
                <button
                  onClick={() => setShowInlineResume(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-navy-100 dark:hover:bg-navy-800/50 text-navy-500 hover:text-navy-800 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <EyeOff className="w-5 h-5" />
                </button>

                {/* CV Header */}
                <div className="border-b border-navy-200 dark:border-navy-800 pb-6 mb-8 text-center sm:text-left">
                  <h3 className="font-display text-3xl font-extrabold text-navy-950 dark:text-white mb-2 uppercase tracking-wide">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-cyan-chem dark:text-cyan-400 font-semibold mb-4">
                    {personalInfo.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-navy-500 dark:text-navy-450 font-mono justify-center sm:justify-start">
                    <span className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-navy-400" />
                      <span>{personalInfo.location}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-navy-400" />
                      <span>{personalInfo.phone}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Mail className="w-3.5 h-3.5 text-navy-400" />
                      <span>{personalInfo.email}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <Globe className="w-3.5 h-3.5 text-navy-400" />
                      <span>LinkedIn Profile</span>
                    </span>
                  </div>
                </div>

                {/* CV Sections */}
                <div className="space-y-8 text-left">
                  {/* Summary */}
                  <div className="space-y-2.5">
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-emerald-chem dark:text-emerald-400 border-b border-navy-100 dark:border-navy-900 pb-1.5">
                      Professional Summary
                    </h4>
                    <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed font-sans text-justify">
                      {personalInfo.summary}
                    </p>
                  </div>

                  {/* Education */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-emerald-chem dark:text-emerald-400 border-b border-navy-100 dark:border-navy-900 pb-1.5">
                      Education
                    </h4>
                    <div className="space-y-4">
                      {educationList.map((edu) => (
                        <div key={edu.id} className="relative pl-4 border-l-2 border-cyan-chem/40">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h5 className="font-display font-bold text-sm text-navy-850 dark:text-white">
                              {edu.degree}
                            </h5>
                            <span className="font-mono text-xs text-cyan-chem dark:text-cyan-400 whitespace-nowrap bg-cyan-chem/10 px-2 py-0.5 rounded-full self-start">
                              {edu.period}
                            </span>
                          </div>
                          <p className="text-xs text-navy-550 dark:text-navy-400 font-medium">{edu.institution}</p>
                          {edu.gpa && (
                            <p className="text-xs text-navy-500 dark:text-navy-450 mt-1 font-semibold">CGPA: {edu.gpa}</p>
                          )}
                          {edu.details && (
                            <p className="text-xs text-navy-600 dark:text-navy-300 mt-1 font-sans">{edu.details}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Table */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-emerald-chem dark:text-emerald-400 border-b border-navy-100 dark:border-navy-900 pb-1.5">
                      Technical & Laboratory Expertise
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skillCategories.map((cat) => (
                        <div key={cat.category} className="p-3.5 rounded-2xl bg-navy-50/50 dark:bg-navy-900/40 border border-navy-100 dark:border-navy-850">
                          <h5 className="font-display font-bold text-xs text-navy-800 dark:text-white uppercase tracking-wider mb-2 text-cyan-chem dark:text-cyan-400">
                            {cat.category}
                          </h5>
                          <p className="text-xs text-navy-600 dark:text-navy-300 leading-relaxed font-sans">
                            {cat.skills.map(s => s.name).join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Internships & Trainings */}
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-emerald-chem dark:text-emerald-400 border-b border-navy-100 dark:border-navy-900 pb-1.5">
                      Industrial Internships & Technical Trainings
                    </h4>
                    <div className="space-y-5">
                      {experiencesList
                        .filter((exp) => exp.type === 'internship' || exp.type === 'training')
                        .slice(0, 4)
                        .map((exp) => (
                        <div key={exp.id} className="relative pl-4 border-l-2 border-emerald-chem/40">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h5 className="font-display font-bold text-sm text-navy-850 dark:text-white">
                              {exp.role}
                            </h5>
                            <span className="font-mono text-xs text-emerald-chem dark:text-emerald-400 whitespace-nowrap bg-emerald-chem/10 px-2 py-0.5 rounded-full self-start">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xs text-navy-550 dark:text-navy-400 font-semibold italic">{exp.organization}</p>
                          <ul className="list-disc list-inside mt-2 space-y-1">
                            {exp.bullets.map((b, idx) => (
                              <li key={idx} className="text-xs text-navy-600 dark:text-navy-300 font-sans leading-relaxed text-justify">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Work Authorization */}
                  <div className="space-y-2.5">
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-emerald-chem dark:text-emerald-400 border-b border-navy-100 dark:border-navy-900 pb-1.5">
                      Work Authorization & Languages
                    </h4>
                    <p className="text-xs text-navy-600 dark:text-navy-300 font-sans leading-relaxed">
                      <strong>Work Authorization:</strong> Eligible to work in India. Open to relocation and visa sponsorship for opportunities abroad.
                    </p>
                    <p className="text-xs text-navy-600 dark:text-navy-300 font-sans leading-relaxed mt-1">
                      <strong>Languages:</strong> English (Fluent / Professional) | Hindi (Native) | Urdu (Fluent)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ------------------------------------------------------------ */}
        {/* HIDDEN PRINT CV SHEET: Active ONLY when printing (window.print()) */}
        {/* ------------------------------------------------------------ */}
        <div id="resume-printable-area" className="hidden print:block">
          <div className="print-avoid-break" style={{ borderBottom: '2px solid #000000', paddingBottom: '12px', marginBottom: '15px' }}>
            <h1 style={{ fontSize: '24pt', fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center', margin: '0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {personalInfo.name}
            </h1>
            <p style={{ fontSize: '11pt', fontWeight: 'normal', fontFamily: 'serif', textAlign: 'center', margin: '4px 0', fontStyle: 'italic' }}>
              {personalInfo.subtitle}
            </p>
            <p style={{ fontSize: '9pt', fontFamily: 'serif', textAlign: 'center', margin: '4px 0' }}>
              Aligarh, India | {personalInfo.phone} | {personalInfo.email} | LinkedIn Profile
            </p>
          </div>

          {/* SUMMARY */}
          <div className="print-avoid-break" style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '9.5pt', fontFamily: 'serif', margin: '0', lineHeight: '1.4', textAlign: 'justify' }}>
              {personalInfo.summary}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="print-avoid-break" style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              Education
            </h2>
            {educationList.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', fontFamily: 'serif' }}>
                  <span>{edu.degree} — {edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
                {edu.gpa && (
                  <p style={{ fontSize: '9pt', fontFamily: 'serif', margin: '2px 0 0 0', fontWeight: 'bold' }}>
                    CGPA: {edu.gpa}
                  </p>
                )}
                {edu.details && (
                  <p style={{ fontSize: '9pt', fontFamily: 'serif', margin: '2px 0 0 0', color: '#333333' }}>
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* SKILLS */}
          <div className="print-avoid-break" style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              Technical & Laboratory Skills
            </h2>
            <table style={{ width: '100%', fontSize: '9pt', fontFamily: 'serif', borderCollapse: 'collapse' }}>
              <tbody>
                {skillCategories.map((cat) => (
                  <tr key={cat.category} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ fontWeight: 'bold', width: '30%', padding: '4px 0', verticalAlign: 'top' }}>
                      {cat.category}:
                    </td>
                    <td style={{ padding: '4px 0', verticalAlign: 'top' }}>
                      {cat.skills.map(s => s.name).join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* INTERNSHIPS */}
          <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              Internships
            </h2>
            {experiencesList.filter(item => item.type === 'internship').map((item) => (
              <div key={item.id} className="print-avoid-break" style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', fontFamily: 'serif' }}>
                  <span>{item.role} — {item.organization}</span>
                  <span>{item.period}</span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '15px', fontSize: '9pt', fontFamily: 'serif' }}>
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="print-bullet" style={{ marginBottom: '2px' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* TRAININGS */}
          <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              Trainings & Courses
            </h2>
            {experiencesList.filter(item => item.type === 'training').map((item) => (
              <div key={item.id} className="print-avoid-break" style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', fontFamily: 'serif' }}>
                  <span>{item.role}</span>
                  <span>{item.period}</span>
                </div>
                <p style={{ fontSize: '9pt', fontFamily: 'serif', fontStyle: 'italic', margin: '2px 0 0 0' }}>{item.organization}</p>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '15px', fontSize: '9pt', fontFamily: 'serif' }}>
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="print-bullet" style={{ marginBottom: '2px' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* WORKSHOPS & CONFERENCES */}
          <div className="print-avoid-break" style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>
              Workshops & Conferences
            </h2>
            {experiencesList.filter(item => item.type === 'workshop' || item.type === 'conference').map((item) => (
              <div key={item.id} style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt', fontFamily: 'serif' }}>
                  <span>{item.role} — {item.organization}</span>
                  <span>{item.period}</span>
                </div>
                <ul style={{ margin: '2px 0 0 0', paddingLeft: '15px', fontSize: '8.5pt', fontFamily: 'serif' }}>
                  {item.bullets.slice(0, 1).map((bullet, idx) => (
                    <li key={idx} className="print-bullet">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* WORK AUTHORIZATION & LANGUAGES */}
          <div className="print-avoid-break" style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '12pt', fontWeight: 'bold', fontFamily: 'serif', borderBottom: '1px solid #000000', paddingBottom: '2px', textTransform: 'uppercase', margin: '0 0 6px 0' }}>
              Work Authorization & Languages
            </h2>
            <p style={{ fontSize: '9pt', fontFamily: 'serif', margin: '0 0 4px 0' }}>
              <strong>Work Authorization:</strong> Eligible to work in India. Open to relocation and visa sponsorship for opportunities abroad.
            </p>
            <p style={{ fontSize: '9pt', fontFamily: 'serif', margin: '0' }}>
              <strong>Languages:</strong> English (Fluent) | Hindi (Native) | Urdu (Fluent)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
