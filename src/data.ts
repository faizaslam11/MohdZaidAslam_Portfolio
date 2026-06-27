export interface PersonalInfo {
  name: string;
  titles: string[];
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
  profileImage: string;
  resumeDownloadUrl: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // level out of 100 for visual progress bars
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  bullets: string[];
  type: 'internship' | 'training' | 'workshop' | 'conference';
  skillsLearned?: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Mohd Zaid Aslam",
  titles: [
    "Quality Control Chemist",
    "Analytical Chemist",
    "Industrial Chemist Graduate",
    "Research Aspirant"
  ],
  subtitle: "Quality Control / Analytical Chemist | Petrochemical & Industrial Chemistry",
  location: "Aligarh, India",
  phone: "+91 9897242975",
  email: "zaidaslam195@gmail.com",
  linkedin: "https://linkedin.com/in/mohd-zaid-aslam-195b0b230", // standard template LinkedIn or placeholder
  summary: "Industrial Chemistry graduate (B.Sc. Hons., AMU) currently pursuing M.Sc. Industrial Chemistry, with hands-on training in IR/UV-Vis spectroscopy, petroleum and petrochemical testing, and pharmaceutical production under GMP standards. Practical exposure across renewable energy, waste management, and Unani pharmaceutical manufacturing sectors through structured internships and CSIR-recognized skill development programs. Seeking Quality Control / Analytical Chemist roles in India and abroad, with a strong foundation in laboratory analysis, instrumentation, and industrial quality compliance.",
  profileImage: "/src/assets/images/profile.png",
  resumeDownloadUrl: "#" // Will be handled beautifully via dynamic print or interactive PDF generator, or pre-made view
};

export const educationList: EducationItem[] = [
  {
    id: "edu-msc",
    degree: "M.Sc. Industrial Chemistry",
    institution: "Aligarh Muslim University",
    period: "Expected May 2027",
    details: "Currently pursuing (1-year program)"
  },
  {
    id: "edu-bsc",
    degree: "B.Sc. (Hons.) Industrial Chemistry",
    institution: "Aligarh Muslim University",
    period: "April 2022 – May 2026",
    gpa: "6.60 / 10",
    details: "Specialized in industrial chemistry processes, polymer science, analytical chemistry, and chemical engineering principles."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Laboratory Techniques",
    skills: [
      { name: "Thin Layer Chromatography (TLC)", level: 90 },
      { name: "UV-Visible Spectroscopy", level: 88 },
      { name: "IR Spectroscopy & Interpretation", level: 85 },
      { name: "Petrochemical Analysis", level: 85 },
      { name: "Plastic & Polymer Testing", level: 80 },
      { name: "Saponification & Acid/Iodine Value", level: 90 },
      { name: "API Gravity Determination", level: 85 },
      { name: "Drop Melting Point Determination", level: 85 },
      { name: "Chemical Safety & Lab Practices", level: 95 }
    ]
  },
  {
    category: "Analytical Instruments",
    skills: [
      { name: "UV-Visible Spectrophotometer", level: 88 },
      { name: "IR Spectrometer", level: 85 },
      { name: "TLC Equipment", level: 90 },
      { name: "Petroleum Testing Instruments", level: 82 },
      { name: "Plastic Testing Instruments", level: 80 }
    ]
  },
  {
    category: "Software & Digital Tools",
    skills: [
      { name: "Microsoft Excel (Data Analysis)", level: 85 },
      { name: "Microsoft Word (Scientific Reports)", level: 90 },
      { name: "Microsoft PowerPoint (Presentations)", level: 88 },
      { name: "Atomic-Scale Materials Modelling (QuantumATK)", level: 75 }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "English (Fluent/Academic)", level: 90 },
      { name: "Hindi (Native)", level: 100 },
      { name: "Urdu (Fluent)", level: 90 }
    ]
  }
];

export const experiencesList: ExperienceItem[] = [
  {
    id: "train-petroleum",
    role: "Basic Skill Development Training: Testing of Petroleum",
    organization: "CSIR – Indian Institute of Petroleum (CSIR-IIP)",
    location: "Dehradun, India",
    period: "15 – 19 June 2026",
    bullets: [
      "Completed intensive CSIR-certified training focusing on petroleum testing methodologies and fuel quality analysis.",
      "Performed standard laboratory testing procedures such as density, viscosity, flash point, and distillation tests.",
      "Analyzed industrial applications of petroleum product testing and compliance with ASTM/IP standards."
    ],
    type: "training",
    skillsLearned: ["Petroleum Testing", "ASTM Standards", "Fuel Quality Analysis", "CSIR-IIP Certified"]
  },
  {
    id: "conf-sustainability",
    role: "National Conference on Environmental Sustainability in the 21st Century",
    organization: "Jamia Millia Islamia",
    location: "New Delhi, India",
    period: "22 Apr 2026",
    bullets: [
      "Presented research poster titled: 'Sustainable Energy Production From Plastic Waste: A Review of Pyrolysis Oil for Diesel Engines, Performance, and Circular Economy'.",
      "Engaged with experts and researchers on strategies for waste-to-energy conversion, eco-friendly processes, and circular economics."
    ],
    type: "conference",
    skillsLearned: ["Research Presentation", "Pyrolysis Oil", "Circular Economy", "Waste-to-Energy"]
  },
  {
    id: "work-quantum",
    role: "Workshop: Atomic-Scale Materials & Device Modelling using Synopsys QuantumATK",
    organization: "Dept. of Industrial Chemistry, AMU",
    location: "Aligarh, India",
    period: "17 Feb 2026",
    bullets: [
      "Learned core theoretical fundamentals and software operations of atomic-scale materials modelling.",
      "Conducted simulations for nanomaterials, solid-state devices, and molecular electronics structures using the Synopsys QuantumATK suite."
    ],
    type: "workshop",
    skillsLearned: ["QuantumATK", "Molecular Modelling", "Materials Simulation"]
  },
  {
    id: "int-dawakhana",
    role: "Production Trainee",
    organization: "Dawakhana Tibbiya College (DTC), AMU",
    location: "Aligarh, India",
    period: "Dec 2025 – Jan 2026",
    bullets: [
      "Received practical hands-on training in the production of Unani pharmaceutical formulations.",
      "Observed and documented large-scale manufacturing processes, production workflows, and in-process quality control practices.",
      "Gained working exposure to Good Manufacturing Practices (GMP) and industrial quality compliance standards."
    ],
    type: "internship",
    skillsLearned: ["Pharmaceutical Production", "GMP Compliance", "Quality Control"]
  },
  {
    id: "train-spectroscopic",
    role: "Basic Skill Development Training: Spectroscopic Analytical Techniques – IR",
    organization: "CSIR – Indian Institute of Petroleum (CSIR-IIP)",
    location: "Dehradun, India",
    period: "3 – 7 November 2025",
    bullets: [
      "Studied fundamentals of Infrared (IR) spectroscopy, including theory of molecular vibrations and transition dipole moments.",
      "Gained hands-on experience in spectrometer instrumentation, sample preparation (KBr pellet and ATR techniques), and spectral acquisition.",
      "Mastered spectral interpretation for functional group identification and quantitative analysis in industrial chemical applications."
    ],
    type: "training",
    skillsLearned: ["IR Spectroscopy", "Sample Preparation (KBr/ATR)", "Spectral Interpretation", "Analytical Instrumentation"]
  },
  {
    id: "train-gian",
    role: "GIAN Course: Fascinating Features of Nanodimensional Smart Materials",
    organization: "Dept. of Industrial Chemistry, AMU",
    location: "Aligarh, India",
    period: "14 – 18 April 2025",
    bullets: [
      "Participated in the Global Initiative of Academic Networks (GIAN) international course on smart nanomaterials.",
      "Explored the physics and chemistry of nanodimensional smart materials, advanced functional materials, and nanotechnology.",
      "Studied advanced materials characterization techniques including SEM, TEM, XRD, and their cutting-edge applications in medicine, energy, and electronics."
    ],
    type: "training",
    skillsLearned: ["Nanomaterials", "Material Characterization", "Nanotechnology", "Advanced Functional Materials"]
  },
  {
    id: "int-globalgreen",
    role: "Intern",
    organization: "Global Green Envirosystems (GGE)",
    location: "Aligarh, India",
    period: "Mar 2025 – Apr 2025",
    bullets: [
      "Analyzed municipal and industrial solid waste composition to determine feasibility for recycling and resource recovery.",
      "Studied municipal waste segregation techniques and sustainable chemical/biological waste treatment methods.",
      "Proposed eco-friendly packaging alternatives for industrial products and assisted in digitizing operational company modules."
    ],
    type: "internship",
    skillsLearned: ["Waste Management", "Sustainability", "Data Digitization", "Eco-friendly Materials"]
  },
  {
    id: "int-solar",
    role: "Intern",
    organization: "Solar Power Plant, Aligarh Muslim University",
    location: "Aligarh, India",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Learned the core physical and electrical operations of large-scale grid-connected solar photovoltaic systems.",
      "Studied solar panel installation configurations, high-power inverters, net metering systems, and daily energy output estimation.",
      "Gained practical operational exposure to clean, renewable energy technologies."
    ],
    type: "internship",
    skillsLearned: ["Renewable Energy", "Solar PV Systems", "Net Metering", "Energy Estimation"]
  },
  {
    id: "conf-eco",
    role: "National Conference on Innovative Approaches in Industrial Chemistry for Eco-friendly Solutions",
    organization: "Dept. of Industrial Chemistry, AMU",
    location: "Aligarh, India",
    period: "2025",
    bullets: [
      "Volunteered in conference organizing committees, managing technical sessions and guest logistics.",
      "Gained comprehensive insights into green chemistry, eco-friendly industrial processes, sustainable catalytic pathways, and eco-friendly chemical manufacturing."
    ],
    type: "conference",
    skillsLearned: ["Event Volunteering", "Green Chemistry", "Sustainable Manufacturing"]
  },
  {
    id: "work-plastic",
    role: "Workshop: Plastic Processing & Testing Technology",
    organization: "CIPET: CSTS",
    location: "Dehradun, India",
    period: "26 Oct 2024",
    bullets: [
      "Gained practical working exposure to plastics processing techniques (extrusion, injection molding, blow molding).",
      "Conducted standard testing methods for mechanical, thermal, and rheological properties of polymeric materials.",
      "Studied polymer quality control practices and industrial standards for polymer fabrication."
    ],
    type: "workshop",
    skillsLearned: ["Plastic Processing", "Polymer Testing", "Quality Control", "CIPET Certified"]
  }
];

export interface ChemistryTidbit {
  fact: string;
  chemicalFormula?: string;
  importance: string;
}

export const chemistryFacts: ChemistryTidbit[] = [
  {
    fact: "Infrared (IR) spectroscopy exploits the absorption of infrared light, causing chemical bonds to vibrate at specific frequencies, serving as a 'fingerprint' for identifying functional groups.",
    chemicalFormula: "E = h\\nu",
    importance: "Fundamental to analytical quality control."
  },
  {
    fact: "Saponification determination measures the average molecular weight of fatty acids in a sample, crucial for characterizing lipids and soap production.",
    chemicalFormula: "R-COOR' + NaOH \\rightarrow R-COONa + R'-OH",
    importance: "Key industrial chemistry quality metric."
  },
  {
    fact: "Pyrolysis converts waste plastics into combustible liquid fuels (pyrolysis oil) in the absence of oxygen, mitigating environmental pollution and supporting a circular economy.",
    chemicalFormula: "C_n H_{2n+2} \\xrightarrow{\\Delta} \\text{Pyrolysis Oil} + \\text{Gas}",
    importance: "Mohd Zaid's conference research focus."
  }
];
