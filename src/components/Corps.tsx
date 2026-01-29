interface CorpsProps {
  isDarkMode: boolean;
}

const Corps = ({ isDarkMode }: CorpsProps) => {
  return (
    <section className="max-w-2xl space-y-5 md:space-y-6">
      {/* Titre principal */}
      <h1 className="tracking-tight font-extrabold leading-[1.05] text-[clamp(2.1rem,4vw,3.4rem)]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
          Développeur Full-Stack
        </span>
        <br />
        <span className="mt-3 inline-flex items-center gap-3">
          <span
            className={`
              bg-clip-text text-transparent bg-gradient-to-r
              transition-all duration-700 ease-out
              ${
                isDarkMode
                  ? "from-red-300 via-pink-300 to-rose-300 translate-x-1"
                  : "from-sky-300 via-cyan-300 to-blue-300"
              }
            `}
          >
            Ruby & JavaScript
          </span>
        </span>
      </h1>

      {/* Description principale */}
      <p className="text-[clamp(1.02rem,1.4vw,1.15rem)] leading-relaxed text-white/90">
        Je travaille sur des{" "}
        <span className="font-semibold text-white relative group">
          projets applicatifs complets
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400 group-hover:w-full transition-all duration-300" />
        </span>
        , allant de la conception de systèmes backend et d&apos;APIs
        jusqu&apos;au développement d&apos;interfaces interactives.
      </p>

      {/* Points */}
      <div className="space-y-3 text-[0.98rem] md:text-[1.02rem] leading-relaxed text-white/80">
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">⚡</span>
          <p>
            Passionné par l&apos;
            <strong className="text-white/95">automatisation</strong> et
            l&apos;intégration de{" "}
            <strong className="text-white/95">services intelligents</strong>.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">🏗️</span>
          <p>
            Spécialisé dans les{" "}
            <strong className="text-white/95">architectures modernes</strong> et
            scalables.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3 pt-2">
        <button
          className={`
            px-5 py-3 rounded-xl font-semibold
            text-[0.98rem] md:text-[1rem]
            transition-all duration-300
            ${
              isDarkMode
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                : "bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600"
            }
            text-white shadow-lg hover:shadow-xl hover:scale-[1.03]
            active:scale-[0.98]
          `}
        >
          Voir mes projets
        </button>

        <button className="px-5 py-3 rounded-xl font-semibold text-[0.98rem] md:text-[1rem] bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
          Me contacter
        </button>
      </div>
    </section>
  );
};

export default Corps;
