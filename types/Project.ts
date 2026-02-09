
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel v2",
    description: {
      fr: "Site web ultra-moderne avec animations 3D, PWA, mode sombre/clair adaptatif, SEO optimisé et performances Lighthouse 100%.",
      en: "Ultra-modern website with 3D animations, PWA, adaptive dark/light mode, optimized SEO and 100% Lighthouse performance.",
    },
    year: 2026,
    type: "Web",
    technologies: ["React", "Next.js 15", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/portofolio",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    mode: "Personnel",
  },
  {
    id: 2,
    title: "smartRide",
    description: {
      fr: "Service de transport d'écolier en ligne",
      en: "Online school transportation service",
    },
    year: 2025,
    type: "Web",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/smartRide",
    video: "https://www.youtube.com/embed/example1",
    mode: "Stage",
  },
  {
    id: 3,
    title: "DME dentaire",
    description: {
      fr: "Dossier Médical Électronique dentaire",
      en: "Dental Electronic Medical Record",
    },
    year: 2025,
    type: "Mobile",
    technologies: ["React Native", "Expo", "PostgreSQL", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/dme-web",
    video: "https://www.youtube.com/embed/example2",
    mode: "Freelance",
  },
  {
    id: 4,
    title: "Pytorch-Tutorial",
    description: {
      fr: "Code tutoriel destiné aux chercheurs en apprentissage profond pour apprendre PyTorch",
      en: "Tutorial code for deep learning researchers to learn PyTorch",
    },
    year: 2024,
    type: "IA/ML",
    technologies: ["Python", "Pytorch", "Streamlit"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/pytorch-tutorial",
    video: "https://www.youtube.com/embed/example3",
    mode: "Académique",
  },
  {
    id: 5,
    title: "LogInsight",
    description: {
      fr: "LogInsight est un outil CLI en Ruby que j'ai créé, permettant d'analyser des fichiers de logs HTTP, d'extraire des statistiques (méthodes, codes de statut, erreurs) et d'exporter les résultats en CSV et JSON.",
      en: "LogInsight is a Ruby CLI tool I created to analyze HTTP log files, extract statistics (methods, status codes, errors) and export results to CSV and JSON.",
    },
    year: 2025,
    type: "Backend",
    technologies: ["Ruby on Rails", "PostgreSQL", "Hotwire", "Stimulus"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/log_insight",
    video: "https://www.youtube.com/embed/example4",
    mode: "Stage",
  },
  {
    id: 6,
    title: "/manda_analyzer_ruby_text",
    description: {
      fr: "Un petit outil CLI en Ruby pour analyser des fichiers texte, rechercher des mots, détecter la langue et même repérer des tableaux.",
      en: "A small Ruby CLI tool to analyze text files, search for words, detect language and even identify tables.",
    },
    year: 2025,
    type: "Backend",
    technologies: ["Ruby"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/manda_analyzer_ruby_text",
    video: "https://www.youtube.com/embed/example5",
    mode: "Freelance",
  },
  {
    id: 7,
    title: "projet_covoiturage",
    description: {
      fr: "Projet scolaire de gestion d'une plateforme de covoiturage",
      en: "School project for managing a carpooling platform",
    },
    year: 2025,
    type: "Web",
    technologies: ["Next.js", "Node.js", "MySql"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/projet_covoiturage",
    video: "https://www.youtube.com/embed/example6",
    mode: "Académique",
  },
  {
    id: 8,
    title: "calculator-app",
    description: {
      fr: "Remise à jour d'un projet de calculatrice simple",
      en: "Updated version of a simple calculator project",
    },
    year: 2025,
    type: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/calculator-app",
    video: "https://www.youtube.com/embed/example7",
    mode: "Recherche",
  },
  {
    id: 9,
    title: "Buanderie-express",
    description: {
      fr: "Service de buanderie en ligne: repassage, nettoyage de divers types de linges et de vêtements",
      en: "Online laundry service: ironing, cleaning of various types of linens and clothing",
    },
    year: 2025,
    type: "Web",
    technologies: ["Nest.js", "PostgreSql", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com/PEO-Service/Buanderie-express",
    video: "https://www.youtube.com/embed/example8",
    mode: "Personnel",
  },
];

export type Project = {
  id: number;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  year: number;
  type: "Web" | "Backend" | "Mobile" | "IA/ML" | "IoT";
  technologies: string[];
  link: string;
  github: string;
  video: string;
  mode: "Personnel" | "Stage" | "Freelance" | "Académique" | "Recherche";
};




export default PROJECTS;
