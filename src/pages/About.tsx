import { User } from "lucide-react";
import "./About.css";

interface AboutProps {
  isDarkMode: boolean;
  language: "fr" | "en";
}

const About = ({ isDarkMode, language }: AboutProps) => {
  // Traductions
  const translations = {
    fr: {
      title: "À propos",
      subtitle: "Qui suis-je ?",
      paragraph1: {
        start: "Basé à",
        location: "Madagascar",
        middle: ", je suis diplômé en informatique et développeur",
        role: "full-stack",
        end: "passionné par les technologies du web.",
      },
      paragraph2: {
        start:
          "Je conçois des applications complètes, du backend au frontend, avec un fort accent sur la",
        quality: "qualité du code",
        middle: "et l'",
        experience: "expérience utilisateur",
        end: ".",
      },
      paragraph3: {
        start: "Issu d'une première carrière en",
        career: "chirurgie dentaire",
        middle: ", ma reconversion en ingénierie informatique m'a apporté",
        rigor: "rigueur",
        and: "et",
        detail: "sens du détail",
        end: ".",
      },
      paragraph4:
        "Curieux et en apprentissage continu, j'aime automatiser, optimiser et développer des solutions fiables et évolutives.",
      stats: {
        experience: "Années d'exp.",
        projects: "Projets réalisés",
        technologies: "Technologies",
      },
      downloadCV: "Télécharger mon CV",
      cvFile: "/Doc/cv_precieux_fr.pdf",
    },
    en: {
      title: "About",
      subtitle: "Who am I?",
      paragraph1: {
        start: "Based in",
        location: "Madagascar",
        middle: ", I'm a computer science graduate and",
        role: "full-stack",
        end: "developer passionate about web technologies.",
      },
      paragraph2: {
        start:
          "I design complete applications, from backend to frontend, with a strong focus on",
        quality: "code quality",
        middle: "and ",
        experience: "user experience",
        end: ".",
      },
      paragraph3: {
        start: "Coming from a first career in",
        career: "dental surgery",
        middle: ", my transition to software engineering has brought me",
        rigor: "rigor",
        and: "and",
        detail: "attention to detail",
        end: ".",
      },
      paragraph4:
        "Curious and continuously learning, I enjoy automating, optimizing and developing reliable and scalable solutions.",
      stats: {
        experience: "Years of exp.",
        projects: "Projects completed",
        technologies: "Technologies",
      },
      downloadCV: "Download my CV",
      cvFile: "/Doc/cv_precieux_en.pdf",
    },
  };

  const t = translations[language];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      {/* Conteneur principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Titre de section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            <span
              className={`
                inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r bg-clip-text text-transparent
                transition-all duration-700
                ${
                  isDarkMode
                    ? "from-[#f1f1f1] via-pink-300 to-[#f1f1f1]"
                    : "from-[#f1f1f1] via-purple-300 to-[#f1f1f1]"
                }
              `}
            >
              <User
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                  transition-colors duration-700
                  ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                `}
              />
              {t.title}
            </span>
          </h2>

          {/* Ligne de séparation responsive */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-4 md:mt-6">
            <div
              className={`
                h-[2px] w-12 md:w-16 lg:w-24 bg-gradient-to-r from-transparent
                transition-colors duration-700
                ${isDarkMode ? "to-rose-400" : "to-[#5B9BD5]"}
              `}
            ></div>
            <div
              className={`
                w-2 h-2 rounded-full shadow-lg
                transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-pink-400 shadow-pink-400/50"
                    : "bg-purple-400 shadow-purple-400/50"
                }
              `}
            ></div>
            <div
              className={`
                h-[2px] w-24 md:w-32 lg:w-48 bg-gradient-to-r
                transition-colors duration-700
                ${
                  isDarkMode
                    ? "from-rose-400 via-pink-400 to-rose-400"
                    : "from-[#5B9BD5] via-purple-400 to-[#5B9BD5]"
                }
              `}
            ></div>
            <div
              className={`
                w-2 h-2 rounded-full shadow-lg
                transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-pink-400 shadow-pink-400/50"
                    : "bg-purple-400 shadow-purple-400/50"
                }
              `}
            ></div>
            <div
              className={`
                h-[2px] w-12 md:w-16 lg:w-24 bg-gradient-to-l from-transparent
                transition-colors duration-700
                ${isDarkMode ? "to-rose-400" : "to-[#5B9BD5]"}
              `}
            ></div>
          </div>
        </div>

        {/* Card principale */}
        <div className="relative group">
          {/* Glow effect */}
          <div
            className={`
              absolute -inset-1 rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50
              transition-all duration-700
              ${
                isDarkMode
                  ? "bg-gradient-to-r from-rose-500 via-pink-500 to-red-500"
                  : "bg-gradient-to-r from-[#5B9BD5] via-purple-500 to-[#5B9BD5]"
              }
            `}
          ></div>

          {/* Card content */}
          <div
            className={`
              relative bg-gradient-to-br backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden
              transition-all duration-700
              ${
                isDarkMode
                  ? "from-[#2d1a1f]/95 to-[#1a0a0f]/95 border border-pink-500/30"
                  : "from-[#172033]/95 to-[#0a1f2e]/95 border border-[#5B9BD5]/30"
              }
            `}
          >
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                {/* Image avec cadre */}
                {/* Image avec cadre */}
<div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto lg:mx-0 shrink-0">
  <div className="relative group/img about-image-container">
    {/* Cadre animé */}
    <div
      className={`
        absolute -inset-2 rounded-2xl blur-md opacity-50 group-hover/img:opacity-75
        transition-all duration-700
        ${
          isDarkMode
            ? "bg-gradient-to-r from-pink-500 via-rose-400 to-red-500"
            : "bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500"
        }
      `}
    ></div>

    {/* Bordure */}
    <div
      className={`
        relative rounded-2xl p-[3px] shadow-xl
        transition-all duration-700
        ${
          isDarkMode
            ? "bg-gradient-to-br from-rose-400 via-pink-400 to-red-400"
            : "bg-gradient-to-br from-[#5B9BD5] via-purple-400 to-[#5B9BD5]"
        }
      `}
    >
      <div className="rounded-xl overflow-hidden bg-[#0a1f2e]">
        <img
          src="/photos/manda.png"
          alt="Mandaniaina Precieux"
          className="about-image"
        />
      </div>
    </div>
  </div>
</div>

               
                {/* Contenu texte */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  {/* Titre */}
                  <div>
                    <h3
                      className={`
                        text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent
                        transition-all duration-700
                        ${
                          isDarkMode
                            ? "from-white via-pink-200 to-white"
                            : "from-white via-purple-200 to-white"
                        }
                      `}
                    >
                      {t.subtitle}
                    </h3>
                    <div
                      className={`
                        mt-2 md:mt-3 h-1 w-16 md:w-20 rounded-full
                        transition-all duration-700
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-rose-400 to-pink-500"
                            : "bg-gradient-to-r from-[#5B9BD5] to-purple-500"
                        }
                      `}
                    ></div>
                  </div>

                  {/* Paragraphes */}
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-[#f1f1f1]/90">
                    <p>
                      {t.paragraph1.start}{" "}
                      <span
                        className={`
                          font-semibold transition-colors duration-700
                          ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                        `}
                      >
                        {t.paragraph1.location}
                      </span>
                      {t.paragraph1.middle}{" "}
                      <span className="font-semibold text-white relative group/word">
                        {t.paragraph1.role}
                        <span
                          className={`
                            absolute bottom-0 left-0 w-0 h-0.5 group-hover/word:w-full
                            transition-all duration-300
                            ${
                              isDarkMode
                                ? "bg-gradient-to-r from-pink-400 to-rose-400"
                                : "bg-gradient-to-r from-purple-400 to-violet-400"
                            }
                          `}
                        ></span>
                      </span>{" "}
                      {t.paragraph1.end}
                    </p>

                    <p>
                      {t.paragraph2.start}{" "}
                      <span
                        className={`
                          font-medium transition-colors duration-700
                          ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                        `}
                      >
                        {t.paragraph2.quality}
                      </span>{" "}
                      {t.paragraph2.middle}
                      <span
                        className={`
                          font-medium transition-colors duration-700
                          ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                        `}
                      >
                        {t.paragraph2.experience}
                      </span>
                      {t.paragraph2.end}
                    </p>

                    <p>
                      {t.paragraph3.start}{" "}
                      <span
                        className={`
                          font-medium transition-colors duration-700
                          ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                        `}
                      >
                        {t.paragraph3.career}
                      </span>
                      {t.paragraph3.middle}{" "}
                      <span className="font-semibold text-white">
                        {t.paragraph3.rigor}
                      </span>{" "}
                      {t.paragraph3.and}{" "}
                      <span className="font-semibold text-white">
                        {t.paragraph3.detail}
                      </span>
                      {t.paragraph3.end}
                    </p>

                    <p className="text-[#f1f1f1]/80 italic text-xs sm:text-sm md:text-base">
                      {t.paragraph4}
                    </p>
                  </div>

                  {/* Stats responsive */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div
                        className={`
                          text-xl sm:text-2xl md:text-3xl font-bold
                          transition-colors duration-700
                          ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                        `}
                      >
                        3+
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
                        {t.stats.experience}
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`
                          text-xl sm:text-2xl md:text-3xl font-bold
                          transition-colors duration-700
                          ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                        `}
                      >
                        35+
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
                        {t.stats.projects}
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`
                          text-xl sm:text-2xl md:text-3xl font-bold
                          transition-colors duration-700
                          ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                        `}
                      >
                        10+
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
                        {t.stats.technologies}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton CV */}
              <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
                <a
                  href={t.cvFile}
                  download={`CV_Mandaniaina_Precieux_${language.toUpperCase()}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group/btn relative inline-block px-6 sm:px-8 py-3 sm:py-4
                    text-white font-semibold rounded-xl shadow-lg
                    transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden
                    ${
                      isDarkMode
                        ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50"
                        : "bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50"
                    }
                  `}
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>

                  <span className="relative flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {t.downloadCV}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
