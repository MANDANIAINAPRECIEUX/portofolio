import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  // État pour gérer le mode actuel (true = sombre, false = clair)
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex items-center">
      {/* Conteneur arrondi élégant pour le toggle */}
      <div
        className="
        relative
        flex items-center justify-start
        w-20 h-10
        bg-gray-100
        rounded-full
        p-1
        transition-all duration-300
      "
      >
        {/* Cercle animé qui se déplace */}
        <div
          className={`
          absolute
          w-8 h-8
          bg-white
          rounded-full
          shadow-md
          transition-transform duration-300 ease-in-out
          ${isDarkMode ? "translate-x-10" : "translate-x-0"}
        `}
        />

        {/* Bouton Soleil (Mode clair) */}
        <button
          type="button"
          aria-label="Activer le mode clair"
          title="Mode clair"
          onClick={() => setIsDarkMode(false)}
          className={`
            relative z-10
            flex items-center justify-center
            w-8 h-8
            rounded-full
            transition-all duration-300 ease-in-out
            ${
              !isDarkMode
                ? "text-amber-500 scale-100"
                : "text-gray-400 scale-90"
            }
            hover:scale-110
            hover:text-sky-400
          `}
        >
          <Sun size={18} />
        </button>

        {/* Bouton Lune (Mode sombre) */}
        <button
          type="button"
          aria-label="Activer le mode sombre"
          title="Mode sombre"
          onClick={() => setIsDarkMode(true)}
          className={`
            relative z-10
            flex items-center justify-center
            w-8 h-8
            rounded-full
            transition-all duration-300 ease-in-out
            ${
              isDarkMode
                ? "text-indigo-600 scale-100"
                : "text-gray-400 scale-90"
            }
            hover:scale-110
            hover:text-sky-400
          `}
        >
          <Moon size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
