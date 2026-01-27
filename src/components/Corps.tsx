interface CorpsProps {
  isDarkMode: boolean;
}

const Corps = ({ isDarkMode }: CorpsProps) => {
  return (
    <div className="max-w-2xl text-white space-y-4">
      <h1 className="text-4xl font-bold leading-tight">
        Développeur Full-Stack{" "}
        <span
          className={`
            inline-block
            transition-all duration-500
            ${
              isDarkMode
                ? "translate-x-2 text-red-400"
                : "translate-x-0 text-white"
            }
          `}
        >
          Ruby & JavaScript
        </span>
      </h1>

      <p className="text-base text-white/90 leading-relaxed">
        Je travaille sur des <strong>projets applicatifs complets</strong>,
        allant de la conception de systèmes backend et d’APIs jusqu’au
        développement d’interfaces interactives.
      </p>

      <p className="text-base text-white/80 leading-relaxed">
        Je m’intéresse également à l’<strong>automatisation</strong>, à
        l’intégration de <strong>services intelligents</strong> et aux{" "}
        <strong>architectures modernes</strong>.
      </p>
    </div>
  );
};

export default Corps;
