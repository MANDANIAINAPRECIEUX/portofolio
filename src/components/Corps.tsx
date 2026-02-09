import { useEffect, useState } from "react";

interface CorpsProps {
  isDarkMode: boolean;
  language: "fr" | "en";
}

const Corps = ({ isDarkMode, language }: CorpsProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 6800);

    return () => clearInterval(interval);
  }, []);

  // Traductions
  const translations = {
    fr: {
      greeting: "Bonjour, bienvenue sur mon site portfolio. Je suis",
      title: "Développeur Full-Stack",
      subtitle: "Ruby & JavaScript",
      description: "Je développe des",
      descriptionBold: "applications multiplateformes",
      descriptionEnd:
        "— web, mobile et desktop — de la conception à la création d'interfaces utilisateur interactives.",
      btnProjects: "Voir mes projets",
      btnContact: "Me contacter",
    },
    en: {
      greeting: "Hello, welcome to my portfolio. I am",
      title: "Full-Stack Developer",
      subtitle: "Ruby & JavaScript",
      description: "I develop",
      descriptionBold: "cross-platform applications",
      descriptionEnd:
        "— web, mobile and desktop — from design to creating interactive user interfaces.",
      btnProjects: "View my projects",
      btnContact: "Contact me",
    },
  };

  const t = translations[language];

  return (
    <section className="w-full space-y-4 md:space-y-6">
      {/* Introduction */}
      <p className="text-sm sm:text-base md:text-lg font-normal text-white/80 tracking-wide">
        {t.greeting}
      </p>

      {/* Nom avec apparition lettre par lettre */}
      <div
        key={animationKey}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
      >
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
          {"Mandaniaina".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {letter}
            </span>
          ))}
          <br />
          {"Precieux".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-fade-in"
              style={{
                animationDelay: `${(index + 11) * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Titre principal */}
      <h1 className="space-y-1.5 md:space-y-2">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
            {t.title}
          </span>
        </div>

        {/* Technologies */}
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          <span
            className={`
              bg-clip-text text-transparent bg-gradient-to-r
              transition-all duration-700 ease-out
              ${
                isDarkMode
                  ? "from-red-300 via-pink-300 to-rose-300"
                  : "from-purple-400 via-violet-400 to-purple-300"
              }
            `}
          >
            {t.subtitle}
          </span>
        </div>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/95 font-light">
        {t.description}{" "}
        <span className="font-semibold text-white relative group">
          {t.descriptionBold}
          <span
            className={`
              absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r
              group-hover:w-full transition-all duration-700
              ${
                isDarkMode
                  ? "from-pink-400 to-rose-400"
                  : "from-purple-400 to-violet-400"
              }
            `}
          />
        </span>{" "}
        {t.descriptionEnd}
      </p>

      {/* CTA - Buttons avec liens */}
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 pt-4 md:pt-6">
        {/* Bouton "Voir mes projets" → #projets */}
        <a
          href="#projets"
          className={`
            inline-block w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-semibold
            text-xs sm:text-sm md:text-base text-center
            transition-all duration-700
            ${
              isDarkMode
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                : "bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 shadow-lg shadow-purple-500/30"
            }
            text-white hover:shadow-xl hover:scale-[1.03]
            active:scale-[0.98]
          `}
        >
          {t.btnProjects}
        </a>

        {/* Bouton "Me contacter" → #contact */}
        <a
          href="#contact"
          className="inline-block w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-semibold text-xs sm:text-sm md:text-base text-center bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          {t.btnContact}
        </a>
      </div>
    </section>
  );
};

export default Corps;
