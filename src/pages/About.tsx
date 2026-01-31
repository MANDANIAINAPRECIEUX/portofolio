const About = () => {
  return (
    <div className=" w-full mt-12 ">
      <div className="rounded-2xl bg-[#172033] p-6  shadow-lg mx-12">
        <div className=" border-2 border-[#5B9BD5] rounded-3xl p-16 shadow-lg">
          <div className="flex items-stretch gap-6">
            {/* Image: même hauteur que le texte */}
            <div className="w-80 md:w-104 lg:w-120 shrink-0 overflow-hidden rounded-2xl">
              <img
                src="/photos/manda.png"
                alt="moi"
                className="h-full w-full object-cover  object-center -translate-x-20 -translate-y-12"
              />
            </div>
            {/* Texte */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f1f1f1]">
                À propos de moi
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-[#5B9BD5]" />
              <p className="mt-5 mx-4 text-lg md:text-xl leading-relaxed text-[#f1f1f1]/90">
                Basé à Madagascar, je suis diplômé en informatique et
                développeur full-stack passionné par les technologies du web. Je
                conçois des applications complètes, du backend au frontend, avec
                un fort accent sur la qualité du code et l’expérience
                utilisateur. Issu d’une première carrière en chirurgie dentaire,
                ma reconversion en ingénierie informatique m’a apporté rigueur
                et sens du détail. Curieux et en apprentissage continu, j’aime
                automatiser, optimiser et développer des solutions fiables et
                évolutives.
              </p>
            </div>
          </div>
          {/* boutton telechargement cv */}
          <div className="mt-10 flex justify-center">
            <button
              className="
  group
  flex items-center gap-3
  px-8 py-4 
  bg-gradient-to-r from-[#5B9BD5] to-[#4682B4]
  hover:from-[#4682B4] hover:to-[#5B9BD5]
  text-white text-xl font-semibold
  rounded-xl
  shadow-lg hover:shadow-xl
  transition-all duration-300
  hover:scale-105 active:scale-95
"
            >
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
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
            </button>
          </div>
        </div>
        {/* <div className=" border-2 mt-8 border-[#5B9BD5] rounded-3xl p-16 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f1f1f1]">
            mes expériences professionnels
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#526687]" />
          <p className="mt-3 text-sm leading-relaxed text-[#f1f1f1]/80">
           
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
