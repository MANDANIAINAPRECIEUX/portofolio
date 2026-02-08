import Boxes from "./Boxes";

interface CorpsProps {
  isDarkMode: boolean;
}

const Corps = ({ isDarkMode }: CorpsProps) => {
  return (
    <>
      <section className="max-w-2xl space-y-6 md:space-y-8 pt-4">
        {/* Introduction - Taille augmentée */}
        <p className="text-base md:text-lg font-normal text-white/80 tracking-wide">
          Bonjour, bienvenue sur mon site portfolio. Je suis
        </p>

      {/* Nom avec apparition lettre par lettre */}
<div className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95]">
  <div className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
    {"Mandaniaina".split("").map((letter, index) => (
      <span
        key={index}
        className="inline-block animate-fade-in"
        style={{
          animationDelay: `${index * 0.1}s`,
          animationFillMode: 'backwards'
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
          animationDelay: `${(index + 11) * 0.1}s`, // 11 = longueur de "Mandaniaina"
          animationFillMode: 'backwards'
        }}
      >
        {letter}
      </span>
    ))}
  </div>
</div>


        {/* Titre principal - MOYEN */}
        <h1 className="space-y-3">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              Développeur Full-Stack
            </span>
          </div>

          {/* Technologies - MOYEN-PETIT avec accent violet */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
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
              Ruby & JavaScript
            </span>
          </div>
        </h1>

        {/* Description - PLUS GRANDE et plus visible */}
        <p className="text-lg md:text-xl leading-relaxed text-white/95 max-w-2xl font-light">
          Je développe des{" "}
          <span className="font-semibold text-white relative group">
            applications multiplateformes
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 group-hover:w-full transition-all duration-300" />
          </span>{" "}
          — web, mobile et desktop — de la conception à la création
          d&apos;interfaces utilisateur interactives.
        </p>

        {/* CTA - Buttons avec violet intégré */}
        <div className="flex flex-wrap gap-10 pt-24">
          <button
            className={`
              px-8 py-4 rounded-xl font-semibold
              text-sm md:text-base
              transition-all duration-300
              ${
                isDarkMode
                  ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                  : "bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 shadow-lg shadow-purple-500/30"
              }
              text-white hover:shadow-xl hover:scale-[1.03]
              active:scale-[0.98]
            `}
          >
            Voir mes projets
          </button>
          <button className="px-8 py-4 rounded-xl font-semibold text-sm md:text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
            Me contacter
          </button>
        </div>
      </section>
    </>
  );
};

export default Corps;
