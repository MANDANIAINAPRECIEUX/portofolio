export interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
  type: "Web" | "Mobile" | "Backend" | "IA/ML";
  technologies: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Site web moderne avec React, Next.js et Tailwind",
    year: 2026,
    type: "Web",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "API Transport Management",
    description: "Backend pour systèmes de gestion des transports",
    year: 2025,
    type: "Backend",
    technologies: ["Ruby on Rails", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "App Mobile Santé",
    description: "Application de suivi médical",
    year: 2025,
    type: "Mobile",
    technologies: ["React Native", "Firebase"],
  },
  {
    id: 4,
    title: "Modèle Deep Learning",
    description: "Classification d'images médicales",
    year: 2024,
    type: "IA/ML",
    technologies: ["Python", "TensorFlow", "NumPy"],
  },
  {
    id: 5,
    title: "HUM",
    description: "Classification d'images médicales",
    year: 2025,
    type: "IA/ML",
    technologies: ["Python", "TensorFlow", "NumPy"],
  },
];

export default PROJECTS;
