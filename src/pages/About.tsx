import { User } from "lucide-react";
const About = () => {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      {/* Conteneur principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Titre de section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            <span className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-[#f1f1f1] via-purple-300 to-[#f1f1f1] bg-clip-text text-transparent">
              <User className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-400" />
              À propos
            </span>
          </h2>

          {/* Ligne de séparation responsive */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-4 md:mt-6">
            <div className="h-[2px] w-12 md:w-16 lg:w-24 bg-gradient-to-r from-transparent to-[#5B9BD5]"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
            <div className="h-[2px] w-24 md:w-32 lg:w-48 bg-gradient-to-r from-[#5B9BD5] via-purple-400 to-[#5B9BD5]"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
            <div className="h-[2px] w-12 md:w-16 lg:w-24 bg-gradient-to-l from-transparent to-[#5B9BD5]"></div>
          </div>
        </div>

        {/* Card principale */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5] via-purple-500 to-[#5B9BD5] rounded-2xl md:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          {/* Card content */}
          <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-[#5B9BD5]/30 shadow-2xl overflow-hidden">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-16">
              {/* ✅ UNE SEULE DIV FLEX ICI */}
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                {/* Image avec cadre */}
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto lg:mx-0 shrink-0">
                  {/* ↑ Changé lg:w-1/3 en lg:w-2/5 pour plus grand */}
                  <div className="relative group/img">
                    {/* Cadre animé */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-2xl blur-md opacity-50 group-hover/img:opacity-75 transition-opacity duration-300"></div>

                    {/* Bordure */}
                    <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-[#5B9BD5] via-purple-400 to-[#5B9BD5] shadow-xl">
                      <div className="rounded-xl overflow-hidden bg-[#0a1f2e]">
                        <img
                          src="/photos/manda.png"
                          alt="Mandaniaina Precieux"
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                          style={{
                            transform: "translate(-8%, -3%) scale(1.1)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="flex-1 space-y-4 md:space-y-6">
                  {/* Titre */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                      Qui suis-je ?
                    </h3>
                    <div className="mt-2 md:mt-3 h-1 w-16 md:w-20 rounded-full bg-gradient-to-r from-[#5B9BD5] to-purple-500"></div>
                  </div>

                  {/* Paragraphes */}
                  <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-[#f1f1f1]/90">
                    <p>
                      Basé à{" "}
                      <span className="font-semibold text-purple-300">
                        Madagascar
                      </span>
                      , je suis diplômé en informatique et développeur{" "}
                      <span className="font-semibold text-white relative group/word">
                        full-stack
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 group-hover/word:w-full transition-all duration-300"></span>
                      </span>{" "}
                      passionné par les technologies du web.
                    </p>

                    <p>
                      Je conçois des applications complètes, du backend au
                      frontend, avec un fort accent sur la{" "}
                      <span className="text-purple-300 font-medium">
                        qualité du code
                      </span>{" "}
                      et l'
                      <span className="text-purple-300 font-medium">
                        expérience utilisateur
                      </span>
                      .
                    </p>

                    <p>
                      Issu d'une première carrière en{" "}
                      <span className="text-[#5B9BD5] font-medium">
                        chirurgie dentaire
                      </span>
                      , ma reconversion en ingénierie informatique m'a apporté{" "}
                      <span className="font-semibold text-white">rigueur</span>{" "}
                      et{" "}
                      <span className="font-semibold text-white">
                        sens du détail
                      </span>
                      .
                    </p>

                    <p className="text-[#f1f1f1]/80 italic text-xs sm:text-sm md:text-base">
                      Curieux et en apprentissage continu, j'aime automatiser,
                      optimiser et développer des solutions fiables et
                      évolutives.
                    </p>
                  </div>

                  {/* Stats responsive */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                        3+
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
                        Années d'exp.
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5B9BD5]">
                        35+
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
                        Projets réalisés
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                        10+
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-1">
                        Technologies
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton CV */}
              <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
                <a
                  href="/Doc/cv_precieux_fr.pdf"
                  download="CV_Mandaniaina_Precieux.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
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
                    Télécharger mon CV
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
