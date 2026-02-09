"use client";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

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
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

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

  // Options de langue
  const languageOptions = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
  ];

  // Sélectionner les items selon la langue active
  const currentNavItems = navItems[language];
  const currentLanguage = languageOptions.find(
    (lang) => lang.code === language,
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a1f2e]/80 border-b border-white/10">
      <div className="w-full px-6 md:px-12">
        {/* Menu Fixe */}
        <div className="flex items-center justify-end h-16 md:h-20">
          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-1 mr-[190px]">
            {currentNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  group relative px-5 py-2.5 text-white/90 hover:text-white text-base font-semibold
                  transition-all duration-700
                `}
              >
                <span className="relative z-10 tracking-wide">{item.name}</span>

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

          {/* Contrôles : Menu Déroulant Langue + Dark Mode + Menu Mobile */}
          <div className="flex items-center gap-3">
            {/* Menu Déroulant de Langue */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/10 backdrop-blur-sm border border-white/20
                  hover:bg-white/20 transition-all duration-300
                  text-white text-sm font-semibold
                  hover:scale-105 active:scale-95
                `}
                aria-label="Sélectionner la langue"
              >
                <span className="hidden sm:inline">
                  {currentLanguage?.flag}
                </span>
                <span className="uppercase tracking-wider">{language}</span>
                <ChevronDown
                  size={16}
                  className={`
                    transition-transform duration-300
                    ${isLangDropdownOpen ? "rotate-180" : "rotate-0"}
                  `}
                />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div
                  className="absolute top-full mt-2 right-0 w-48 rounded-xl bg-[#172033]/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden animate-fade-in"
                  onMouseLeave={() => setIsLangDropdownOpen(false)}
                >
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code as "fr" | "en");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3
                        text-left text-white/90 hover:text-white
                        transition-all duration-300
                        ${
                          language === lang.code
                            ? isDarkMode
                              ? "bg-pink-500/20 border-l-4 border-pink-400"
                              : "bg-purple-500/20 border-l-4 border-purple-400"
                            : "hover:bg-white/10"
                        }
                      `}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {lang.label}
                        </div>
                        <div className="text-xs text-white/50 uppercase">
                          {lang.code}
                        </div>
                      </div>
                      {language === lang.code && (
                        <div
                          className={`
                            w-2 h-2 rounded-full
                            ${
                              isDarkMode
                                ? "bg-pink-400 shadow-lg shadow-pink-400/50"
                                : "bg-purple-400 shadow-lg shadow-purple-400/50"
                            }
                          `}
                        ></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Toggle Dark/Light Mode */}
            <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
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
                  mobile-nav-item-delay-${index}
                  ${
                    isDarkMode
                      ? "hover:border-pink-400/30"
                      : "hover:border-purple-400/30"
                  }
                `}
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
