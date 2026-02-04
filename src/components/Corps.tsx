import Boxes from "./Boxes";

interface CorpsProps {
  isDarkMode: boolean;
}

const Corps = ({ isDarkMode }: CorpsProps) => {
  return (
    <>
      <section className="max-w-2xl space-y-5 md:space-y-6">
        <span className="text-2xl font-semibold text-white relative group">
          Bonjour, bienvenue sur mon site portfolio. Je suis
        </span>
        <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
          Mandaniaina Precieux
        </div>
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

        {/* <div className="border border-blue-500 rounded-xl p-4">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black 
               bg-gradient-to-r from-blue-400 via-purple-400 to-sky-500 
               bg-clip-text text-transparent drop-shadow-2xl 
               mb-12 text-center md:text-left tracking-tight
               animate-fade-in"
          >
            TECHNOLOGIES PRINCIPALES
          </h2>

          <div className="flex gap-6 my-4">
            <Boxes tech="React" />
            <Boxes tech="Node.Js" />
            <Boxes tech="Next.js" />
            <Boxes tech="TypeScript" />
          </div>
          <div className="flex gap-6">
            <Boxes tech="Ruby on rails" />
            <Boxes tech="Sinatra" />
          </div>
        </div> */}

        {/* CTA */}
        <div className="flex flex-wrap gap-10 py-10">
          <button
            className={`
              px-8 py-5 rounded-xl font-semibold
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
          <button className="px-8 py-5 rounded-xl font-semibold text-[0.98rem] md:text-[1rem] bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
            Me contacter
          </button>
        </div>
      </section>
    </>
  );
};

export default Corps;
