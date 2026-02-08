const PROJECTS: Project[] = [
  // 🔥 PROJETS 1-6 (existants améliorés)
  {
    id: 1,
    title: "Portfolio Personnel v2",
    description:
      "Site web ultra-moderne avec animations 3D, PWA, mode sombre/clair adaptatif, SEO optimisé et performances Lighthouse 100%.",
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
    description: "service de transport d'ecolier en ligne",
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
    description: "Dossier Medical Electronique dentaire",
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
    description:
      "Code tutoriel destiné aux chercheurs en apprentissage profond pour apprendre PyTorch",
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
    description:
      "LogInsight est un outil CLI en Ruby que j'ai créé, permettant d’analyser des fichiers de logs HTTP, d’extraire des statistiques (méthodes, codes de statut, erreurs) et d’exporter les résultats en CSV et JSON.",
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
    description:
      "Un petit outil CLI en Ruby pour analyser des fichiers texte, rechercher des mots, détecter la langue et même repérer des tableaux.",
    year: 2025,
    type: "Backend",
    technologies: ["Ruby"],
    link: "https://example.com",
    github: "https://github.com/MANDANIAINAPRECIEUX/manda_analyzer_ruby_text",
    video: "https://www.youtube.com/embed/example5",
    mode: "Freelance",
  },

  // 🔥 NOUVEAUX PROJETS 7-12
  {
    id: 7,
    title: "projet_covoiturage",
    description: "projet scolaire de gestion d'un plateforme de covoiturage ",
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
    description: "remise à jour d'un projet de calculatrice simple",
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
    description:
      "sevice de buanderie en ligne: repassage, nettoyage de divers types de linges et de vetements",
    year: 2025,
    type: "Web",
    technologies: ["Nest.js", "PostgreSql", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com/PEO-Service/Buanderie-express",
    video: "https://www.youtube.com/embed/example8",
    mode: "Personnel",
  },

  // {
  //   id: 16,
  //   title: "Marketplace Freelance Santé",
  //   description: "Plateforme matching médecins/patients avec géolocalisation, calendriers intelligents, Stripe + IA matching.",
  //   year: 2026,
  //   type: "Web",
  //   technologies: ["Next.js", "Prisma", "Supabase", "Stripe"],
  //   link: "https://example.com",
  //   github: "https://github.com/username/health-marketplace",
  //   video: "https://www.youtube.com/embed/example15",
  //   mode: "Personnel",
  // },
  // {
  //   id: 17,
  //   title: "Simulateur Épidémies",
  //   description: "Modèle SIR + agent-based pour simulation épidémies Madagascar avec interface interactive + export rapports.",
  //   year: 2025,
  //   type: "IA/ML",
  //   technologies: ["Python", "Plotly Dash", "NetworkX"],
  //   link: "https://example.com",
  //   github: "https://github.com/username/epidemic-simulator",
  //   video: "https://www.youtube.com/embed/example16",
  //   mode: "Académique",
  // },
  // {
  //   id: 18,
  //   title: "OCR Ordonnances Malgaches",
  //   description: "Vision IA pour extraction automatique données ordonnances manuelles (fr/malgache) + validation pharmacie.",
  //   year: 2026,
  //   type: "IA/ML",
  //   technologies: ["Tesseract", "PaddleOCR", "FastAPI", "React"],
  //   link: "https://example.com",
  //   github: "https://github.com/username/prescription-ocr",
  //   video: "https://www.youtube.com/embed/example17",
  //   mode: "Freelance",
  // },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  year: number;
  type: "Web" | "Backend" | "Mobile" | "IA/ML" | "IoT";
  technologies: string[];
  link: string;
  github: string;
  video: string;
  mode: "Personnel" | "Stage" | "Freelance" | "Académique" | "Recherche";
};

export default PROJECTS;
