"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  language: "fr" | "en";
  setLanguage: (value: "fr" | "en") => void;
}

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items avec traductions
  const navItems = {
    fr: [
      { name: "À propos", href: "#about" },
      { name: "Projets", href: "#projets" },
      { name: "Parcours", href: "#parcours" },
      { name: "Technologies", href: "#technologies" },
      { name: "Contact", href: "#contact" },
    ],
    en: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projets" },
      { name: "Career", href: "#parcours" },
      { name: "Technologies", href: "#technologies" },
      { name: "Contact", href: "#contact" },
    ],
  };

  // Sélectionner les items selon la langue active
  const currentNavItems = navItems[language];

  return (
    <nav className="top-0 z-50 backdrop-blur-xl bg-[#0a1f2e]/80 border-b border-white/10">
      <div className="w-full px-6 md:px-12">
        {/* Menu Fixe */}
        <div className="flex items-center justify-end h-16 md:h-20">
          {/* Navigation Desktop - 30px à gauche du Toggle */}
          <div className="hidden md:flex items-center gap-1 mr-[140px]">
            {currentNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  group relative px-5 py-2.5 text-white/90 hover:text-white text-base font-semibold
                  transition-all duration-700
                `}
              >
                {/* Texte */}
                <span className="relative z-10 tracking-wide">{item.name}</span>

                {/* Effet de fond au survol */}
                <div
                  className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                    transition-all duration-700
                    ${
                      isDarkMode
                        ? "bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-rose-400/0"
                        : "bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-[#5B9BD5]/0"
                    }
                  `}
                ></div>

                {/* Barre de soulignement animée */}
                <div
                  className={`
                    absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-full
                    group-hover:w-3/4 transition-all duration-700
                    ${
                      isDarkMode
                        ? "bg-gradient-to-r from-pink-400 to-rose-400 shadow-lg shadow-pink-700/50"
                        : "bg-gradient-to-r from-purple-400 to-[#5B9BD5] shadow-lg shadow-purple-700/50"
                    }
                  `}
                ></div>
              </a>
            ))}
          </div>

          {/* Contrôles : Langue + Dark Mode + Menu Mobile */}
          <div className="flex items-center gap-3">
            {/* Sélecteur de Langue */}
            <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
              {/* Indicateur glissant */}
              <div
                className={`
                  absolute w-9 h-9 rounded-full shadow-md
                  transition-all duration-700 ease-out
                  ${language === "fr" ? "translate-x-0" : "translate-x-9"}
                  ${
                    isDarkMode
                      ? "bg-gradient-to-br from-pink-500 to-rose-600"
                      : "bg-gradient-to-br from-purple-400 to-blue-500"
                  }
                `}
              />

              {/* Bouton Français */}
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`
                  relative z-10 w-9 h-9 rounded-full
                  flex items-center justify-center text-xs font-bold
                  transition-all duration-700
                  ${
                    language === "fr"
                      ? "text-white scale-100"
                      : "text-white/40 scale-90"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="Français"
              >
                FR
              </button>

              {/* Bouton Anglais */}
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`
                  relative z-10 w-9 h-9 rounded-full
                  flex items-center justify-center text-xs font-bold
                  transition-all duration-700
                  ${
                    language === "en"
                      ? "text-white scale-100"
                      : "text-white/40 scale-90"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Toggle Dark/Light Mode */}
            <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
              {/* Indicateur glissant */}
              <div
                className={`
                  absolute w-9 h-9 rounded-full shadow-md
                  transition-all duration-700 ease-out
                  ${
                    isDarkMode
                      ? "translate-x-9 bg-gradient-to-br from-indigo-500 to-purple-600"
                      : "translate-x-0 bg-gradient-to-br from-purple-400 to-blue-500"
                  }
                `}
              />

              {/* Bouton Soleil */}
              <button
                type="button"
                onClick={() => setIsDarkMode(false)}
                className={`
                  relative z-10 w-9 h-9 rounded-full
                  flex items-center justify-center
                  transition-all duration-700
                  ${
                    !isDarkMode
                      ? "text-white scale-100"
                      : "text-white/40 scale-90"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="Mode clair"
              >
                <Sun size={20} strokeWidth={2.5} />
              </button>

              {/* Bouton Lune */}
              <button
                type="button"
                onClick={() => setIsDarkMode(true)}
                className={`
                  relative z-10 w-9 h-9 rounded-full
                  flex items-center justify-center
                  transition-all duration-700
                  ${
                    isDarkMode
                      ? "text-white scale-100"
                      : "text-white/40 scale-90"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="Mode sombre"
              >
                <Moon size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col space-y-2">
            {currentNavItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  group px-5 py-3.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10
                  transition-all duration-700 border border-transparent font-semibold text-base
                  ${
                    isDarkMode
                      ? "hover:border-pink-400/30"
                      : "hover:border-purple-400/30"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="flex items-center gap-3">
                  <div
                    className={`
                      w-2 h-2 rounded-full opacity-0 group-hover:opacity-100
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-pink-400 to-rose-400 shadow-lg shadow-pink-400/50"
                          : "bg-gradient-to-r from-purple-400 to-[#5B9BD5] shadow-lg shadow-purple-400/50"
                      }
                    `}
                  ></div>
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
