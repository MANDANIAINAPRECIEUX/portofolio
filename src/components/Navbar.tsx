"use client";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex gap-38 items-center justify-end max-w-7xl mx-auto px-10 py-4">
        <div className="text-white cursor-pointer px-3 py-1 rounded transition-all duration-300 hover:bg-yellow-400/30 hover:text-yellow-100">
          Home
        </div>

        <div className="text-white cursor-pointer px-3 py-1 rounded transition-all duration-300 hover:bg-yellow-400/30 hover:text-yellow-100">
          About
        </div>

        <div className="text-white cursor-pointer px-3 py-1 rounded transition-all duration-300 hover:bg-yellow-400/30 hover:text-yellow-100">
          Projets
        </div>
        <div className="flex items-center justify-end">
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
