"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projets" },
    { name: "Parcours", href: "#parcours" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a1f2e]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Nom */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              {/* Cercle animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#5B9BD5] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

              {/* Logo */}
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                MP
              </div>
            </div>

            <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Mandaniaina
            </span>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-all duration-300"
              >
                {/* Texte */}
                <span className="relative z-10">{item.name}</span>

                {/* Effet de fond au survol */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-[#5B9BD5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Barre de soulignement */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-[#5B9BD5] group-hover:w-3/4 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Toggle Dark Mode + Menu Mobile */}
          <div className="flex items-center gap-4">
            {/* Toggle Dark/Light Mode */}
            <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
              {/* Indicateur glissant */}
              <div
                className={`
                  absolute w-9 h-9 rounded-full shadow-md
                  transition-all duration-300 ease-out
                  ${
                    isDarkMode
                      ? "translate-x-9 bg-gradient-to-br from-indigo-500 to-purple-600"
                      : "translate-x-0 bg-gradient-to-br from-blue-400 to-blue-500"
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
                  transition-all duration-300
                  ${
                    !isDarkMode
                      ? "text-white scale-100"
                      : "text-white/40 scale-90"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="Mode clair"
              >
                <Sun size={18} strokeWidth={2.5} />
              </button>

              {/* Bouton Lune */}
              <button
                type="button"
                onClick={() => setIsDarkMode(true)}
                className={`
                  relative z-10 w-9 h-9 rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isDarkMode
                      ? "text-white scale-100"
                      : "text-white/40 scale-90"
                  }
                  hover:scale-110 active:scale-95
                `}
                aria-label="Mode sombre"
              >
                <Moon size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
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
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-purple-400/30"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
