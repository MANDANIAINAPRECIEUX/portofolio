import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ArrowUp,
  Code2,
} from "lucide-react";

const Footer = () => {
  // Fonction pour scroller en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full mt-20 bg-gradient-to-b from-[#0a1f2e] to-[#050d14] border-t border-white/10">
      {/* Vague décorative */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#172033]"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 : À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Mandaniaina
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Développeur Full-Stack passionné par la création d'applications
              web modernes et performantes.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/50 text-white/70 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#5B9BD5]/20 border border-white/10 hover:border-[#5B9BD5]/50 text-white/70 hover:text-[#5B9BD5] transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-400/50 text-white/70 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-[#5B9BD5] rounded-full"></div>
              Navigation
            </h4>
            <nav className="space-y-3">
              {["Accueil", "À propos", "Projets", "Parcours", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace("à ", "").replace(" ", "-")}`}
                    className="block text-white/70 hover:text-purple-400 text-sm transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    → {link}
                  </a>
                ),
              )}
            </nav>
          </div>

          {/* Colonne 3 : Compétences */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-[#5B9BD5] rounded-full"></div>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Ruby", "JavaScript", "React", "Node.js", "Python", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-[#5B9BD5] rounded-full"></div>
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:votre.email@example.com"
                className="flex items-center gap-3 text-white/70 hover:text-purple-400 text-sm transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-purple-500/20 border border-white/10 group-hover:border-purple-400/50 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs">votre.email@example.com</span>
              </a>

              <a
                href="tel:+261340000000"
                className="flex items-center gap-3 text-white/70 hover:text-[#5B9BD5] text-sm transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#5B9BD5]/20 border border-white/10 group-hover:border-[#5B9BD5]/50 transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs">+261 34 00 000 00</span>
              </a>

              <div className="flex items-start gap-3 text-white/70 text-sm">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs">
                  Fianarantsoa
                  <br />
                  Madagascar
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-8"></div>

        {/* Copyright et mentions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm flex items-center gap-2">
            © 2026 Mandaniaina Precieux. Fait avec{" "}
            <Heart
              className="w-4 h-4 text-purple-400 animate-pulse"
              fill="currentColor"
            />{" "}
            à Madagascar
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#mentions-legales"
              className="text-white/60 hover:text-purple-400 text-xs transition-colors duration-300"
            >
              Mentions légales
            </a>
            <span className="text-white/30">•</span>
            <a
              href="#politique-confidentialite"
              className="text-white/60 hover:text-purple-400 text-xs transition-colors duration-300"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 active:scale-95 z-50 group"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
