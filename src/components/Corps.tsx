interface CorpsProps {
  isDarkMode: boolean;
}

const Corps = ({ isDarkMode }: CorpsProps) => {
  return (
    <div className="max-w-2xl space-y-2">
      

      {/* Titre principal avec effet gradiant */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
          Développeur Full-Stack
        </span>
        <br />
        <span className="inline-flex items-center gap-3 mt-2">
          <span
            className={`
              bg-clip-text text-transparent bg-gradient-to-r
              transition-all duration-700 ease-out
              ${
                isDarkMode
                  ? "from-red-400 via-pink-400 to-rose-400 translate-x-2 scale-105"
                  : "from-sky-400 via-cyan-400 to-blue-400 translate-x-0 scale-100"
              }
            `}
          >
            Ruby & JavaScript
          </span>
         
        </span>
      </h1>

      {/* Description principale */}
      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
        Je travaille sur des{" "}
        <span className="font-semibold text-white relative group">
          projets applicatifs complets
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
        </span>
        , allant de la conception de systèmes backend et d'APIs jusqu'au
        développement d'interfaces interactives.
      </p>

      {/* Description secondaire avec icônes */}
      <div className="flex flex-col gap-3 text-base text-white/80">
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">⚡</span>
          <p className="leading-relaxed">
            Passionné par l'
            <strong className="text-white/95">automatisation</strong> et
            l'intégration de{" "}
            <strong className="text-white/95">services intelligents</strong>
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">🏗️</span>
          <p className="leading-relaxed">
            Spécialisé dans les{" "}
            <strong className="text-white/95">architectures modernes</strong> et
            scalables
          </p>
        </div>
      </div>

      {/* Boutons CTA (optionnel) */}
      <div className="flex flex-wrap gap-4 pt-2">
        <button
          className={`
            px-6 py-3 rounded-lg font-semibold
            transition-all duration-300
            ${
              isDarkMode
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                : "bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600"
            }
            text-white shadow-lg hover:shadow-xl hover:scale-105
            active:scale-95
          `}
        >
          Voir mes projets
        </button>
        <button className="px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95">
          Me contacter
        </button>
      </div>
    </div>
  );
};

export default Corps;
