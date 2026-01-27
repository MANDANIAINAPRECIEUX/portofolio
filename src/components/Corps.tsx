const Corps = () => {
  return (
    <div className="max-w-2xl text-white space-y-4">
      {/* Titre */}
      <h1 className="text-4xl font-bold leading-tight">
        Développeur Full-Stack{" "}
        <span className="text-sky-400">Ruby & JavaScript</span>
      </h1>

      {/* Description */}
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
