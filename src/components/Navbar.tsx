"use client";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md  ">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links (optionnel) */}
          <div className=" md:flex items-center gap-8">
            <a
              href="#accueil"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Accueil
            </a>
            <a
              href="#projets"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Toggle moderne */}
          <div className="relative flex items-center bg-gray-100 rounded-full p-1 shadow-inner">
            {/* Indicateur glissant */}
            <div
              className={`
                absolute w-10 h-10 bg-white rounded-full shadow-md
                transition-transform duration-300 ease-out
                ${isDarkMode ? "translate-x-11" : "translate-x-0"}
              `}
            />

            {/* Bouton Soleil */}
            <button
              type="button"
              onClick={() => setIsDarkMode(false)}
              className={`
                relative z-10 w-10 h-10 rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${
                  !isDarkMode
                    ? "text-amber-500 scale-100"
                    : "text-green-400 scale-90"
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
                relative z-10 w-10 h-10 rounded-full
                flex items-center justify-center
                transition-all duration-300
                ${
                  isDarkMode
                    ? "text-indigo-600 scale-100"
                    : "text-gray-400 scale-90"
                }
                hover:scale-110 active:scale-95
              `}
              aria-label="Mode sombre"
            >
              <Moon size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
