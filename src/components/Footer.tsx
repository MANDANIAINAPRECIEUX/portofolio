import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ArrowUp,
  Code2,
  Brain,
} from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mt-20 border-t border-white/10 bg-gradient-to-b from-[#0a1f2e] to-[#000000]">
      {/* Vague décorative */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10 sm:h-12 md:h-14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#172033]"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-14 md:py-16">
        {/* Contenu en ligne */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`
                p-2.5 sm:p-3 rounded-xl shadow-lg transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/30"
                    : "bg-gradient-to-br from-purple-500 to-violet-600 shadow-purple-500/30"
                }
              `}
            >
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3
                className={`
                  text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent
                  transition-all duration-700
                  ${
                    isDarkMode
                      ? "from-white via-pink-200 to-white"
                      : "from-white via-purple-200 to-white"
                  }
                `}
              >
                Mandaniaina
              </h3>
              <p className="text-white/60 text-xs sm:text-sm md:text-base">
                Développeur Full-Stack • Expert E-Health
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10
                text-white/70 transition-all duration-700 hover:scale-110
                ${
                  isDarkMode
                    ? "hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-400"
                    : "hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-400"
                }
              `}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10
                text-white/70 transition-all duration-700 hover:scale-110
                ${
                  isDarkMode
                    ? "hover:bg-rose-400/20 hover:border-rose-400/50 hover:text-rose-400"
                    : "hover:bg-[#5B9BD5]/20 hover:border-[#5B9BD5]/50 hover:text-[#5B9BD5]"
                }
              `}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10
                text-white/70 transition-all duration-700 hover:scale-110
                ${
                  isDarkMode
                    ? "hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-400"
                    : "hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-400"
                }
              `}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="mailto:mandaniaina.precieux@gmail.com"
              className={`
                p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10
                text-white/70 transition-all duration-700 hover:scale-110
                ${
                  isDarkMode
                    ? "hover:bg-pink-500/20 hover:border-pink-400/50 hover:text-pink-400"
                    : "hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-400"
                }
              `}
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm sm:text-base md:text-lg flex flex-wrap items-center justify-center gap-2">
            <span className="whitespace-nowrap">
              © {currentYear} tout droits reservé{" "}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              Fait avec
              <Brain
                className={`
                  w-4 h-4 sm:w-5 sm:h-5 animate-pulse transition-colors duration-700
                  ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                `}
                fill="currentColor"
              />
              à Madagascar
            </span>
          </p>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-3 sm:p-4 rounded-full
          text-white shadow-xl transition-all duration-700 hover:scale-110 active:scale-95 z-50 group
          ${
            isDarkMode
              ? "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/50"
              : "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50"
          }
        `}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
