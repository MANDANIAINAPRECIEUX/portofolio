
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel v2",
    description: {
      fr: "Site web portfolio ultra-moderne conçu avec React et Next.js 15. Intègre des animations 3D fluides, un système PWA pour une expérience offline optimale, un mode sombre/clair adaptatif avec transitions douces, un SEO optimisé pour un meilleur référencement, et des performances exceptionnelles atteignant 100% sur Lighthouse. Design responsive avec Tailwind CSS et animations avancées via Framer Motion.",
      en: "Ultra-modern portfolio website built with React and Next.js 15. Features smooth 3D animations, PWA system for optimal offline experience, adaptive dark/light mode with smooth transitions, optimized SEO for better search engine ranking, and exceptional performance achieving 100% on Lighthouse. Responsive design with Tailwind CSS and advanced animations using Framer Motion.",
    },
    year: 2026,
    type: "Web",
    technologies: ["React", "Next.js 15", "Tailwind CSS", "Framer Motion"],
    link: "https://portofolio-ra6p.vercel.app/",
    github: "https://github.com/MANDANIAINAPRECIEUX/portofolio",
    video: "https://www.youtube.com/embed/-mH3i9ZKhvE",
    mode: "Personnel",
  },
  {
    id: 2,
    title: "smartRide",
    description: {
      fr: "Plateforme web complète de gestion de transport scolaire permettant aux parents de réserver, suivre en temps réel et gérer les trajets de leurs enfants. Système de géolocalisation GPS intégré, notifications automatiques, gestion des paiements en ligne et tableau de bord administratif pour les écoles et transporteurs. Architecture moderne avec Next.js et base de données PostgreSQL pour une performance optimale.",
      en: "Complete web platform for school transportation management allowing parents to book, track in real-time and manage their children's trips. Integrated GPS geolocation system, automatic notifications, online payment management and administrative dashboard for schools and carriers. Modern architecture with Next.js and PostgreSQL database for optimal performance.",
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
      fr: "Application mobile cross-platform de Dossier Médical Électronique spécialisée pour les cabinets dentaires. Gestion complète des patients, historique des soins, planification des rendez-vous, stockage sécurisé des radiographies et images médicales, génération automatique de rapports et factures. Interface intuitive développée avec React Native et Expo, synchronisation cloud en temps réel avec PostgreSQL.",
      en: "Cross-platform mobile Electronic Medical Record application specialized for dental practices. Complete patient management, treatment history, appointment scheduling, secure storage of X-rays and medical images, automatic report and invoice generation. Intuitive interface developed with React Native and Expo, real-time cloud synchronization with PostgreSQL.",
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
      fr: "Collection complète de tutoriels et exemples de code pour l'apprentissage de PyTorch, destinée aux chercheurs et développeurs en deep learning. Couvre les concepts fondamentaux (tenseurs, autograd, réseaux de neurones) jusqu'aux architectures avancées (CNN, RNN, Transformers). Exemples pratiques avec datasets réels, visualisations interactives via Streamlit, et notebooks Jupyter détaillés. Idéal pour débuter ou approfondir ses connaissances en IA.",
      en: "Complete collection of tutorials and code examples for learning PyTorch, designed for researchers and developers in deep learning. Covers fundamental concepts (tensors, autograd, neural networks) to advanced architectures (CNN, RNN, Transformers). Practical examples with real datasets, interactive visualizations via Streamlit, and detailed Jupyter notebooks. Ideal for beginners or deepening AI knowledge.",
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
      fr: "Outil CLI puissant en Ruby pour l'analyse approfondie de fichiers de logs HTTP. Extrait automatiquement des statistiques détaillées : méthodes HTTP utilisées, codes de statut, taux d'erreurs, temps de réponse, patterns d'utilisation. Génère des rapports exportables en CSV et JSON pour analyse ultérieure. Parfait pour le monitoring, le debugging et l'optimisation de performance des serveurs web. Interface en ligne de commande intuitive avec options de filtrage avancées.",
      en: "Powerful Ruby CLI tool for in-depth HTTP log file analysis. Automatically extracts detailed statistics: HTTP methods used, status codes, error rates, response times, usage patterns. Generates exportable reports in CSV and JSON for further analysis. Perfect for monitoring, debugging and web server performance optimization. Intuitive command-line interface with advanced filtering options.",
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
    title: "manda_analyzer_ruby_text",
    description: {
      fr: "Utilitaire CLI léger et performant en Ruby pour l'analyse de fichiers texte. Fonctionnalités : recherche de mots-clés avec regex, détection automatique de langue (français, anglais, etc.), identification et extraction de structures de tableaux, statistiques de fréquence de mots, analyse de sentiments basique. Idéal pour le preprocessing de données textuelles, l'extraction d'informations et le traitement automatique de documents. Support de multiples formats (txt, md, csv).",
      en: "Lightweight and powerful Ruby CLI utility for text file analysis. Features: keyword search with regex, automatic language detection (French, English, etc.), table structure identification and extraction, word frequency statistics, basic sentiment analysis. Ideal for text data preprocessing, information extraction and automatic document processing. Supports multiple formats (txt, md, csv).",
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
      fr: "Plateforme web complète de covoiturage développée dans le cadre d'un projet académique. Système de mise en relation entre conducteurs et passagers, géolocalisation des trajets avec Google Maps API, système de notation et avis, gestion des paiements sécurisés, messagerie intégrée entre utilisateurs. Architecture moderne avec Next.js pour le frontend, Node.js pour l'API REST, et MySQL pour la persistance des données. Interface responsive et intuitive.",
      en: "Complete carpooling web platform developed as part of an academic project. Matching system between drivers and passengers, route geolocation with Google Maps API, rating and review system, secure payment management, integrated messaging between users. Modern architecture with Next.js for frontend, Node.js for REST API, and MySQL for data persistence. Responsive and intuitive interface.",
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
      fr: "Calculatrice web moderne et élégante avec interface utilisateur soignée. Supporte les opérations mathématiques de base (addition, soustraction, multiplication, division), opérations avancées (pourcentage, racine carrée, puissance), historique des calculs, mode scientifique avec fonctions trigonométriques. Design responsive adapté aux mobiles et tablettes, thème personnalisable, animations fluides. Code vanilla JavaScript optimisé pour des performances maximales.",
      en: "Modern and elegant web calculator with polished user interface. Supports basic mathematical operations (addition, subtraction, multiplication, division), advanced operations (percentage, square root, power), calculation history, scientific mode with trigonometric functions. Responsive design adapted to mobile and tablets, customizable theme, smooth animations. Optimized vanilla JavaScript code for maximum performance.",
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
      fr: "Plateforme e-commerce complète de services de blanchisserie en ligne. Les clients peuvent commander le nettoyage, repassage et entretien de leurs vêtements et linges avec ramassage et livraison à domicile. Système de tarification dynamique selon le type de textile, planning de rendez-vous intelligent, suivi en temps réel des commandes, paiement sécurisé en ligne. Backend robuste avec Nest.js, base de données PostgreSQL, interface moderne avec Tailwind CSS. Dashboard administrateur pour gestion des commandes et livreurs.",
      en: "Complete e-commerce platform for online laundry services. Customers can order cleaning, ironing and maintenance of their clothes and linens with home pickup and delivery. Dynamic pricing system based on textile type, smart appointment scheduling, real-time order tracking, secure online payment. Robust backend with Nest.js, PostgreSQL database, modern interface with Tailwind CSS. Admin dashboard for order and delivery management.",
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
