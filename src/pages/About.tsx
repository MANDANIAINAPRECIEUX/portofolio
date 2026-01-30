const About = () => {
  return (
    <div className=" w-full mt-12 ">
      <div className="rounded-2xl bg-[#172033] p-6  shadow-lg mx-12">
        <div className="flex items-stretch gap-6 border-2 border-[#5B9BD5] rounded-3xl p-16 shadow-lg">
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
              Basé à Madagascar, je suis diplômé en informatique et développeur
              full-stack passionné par les technologies du web. Je conçois des
              applications complètes, du backend au frontend, avec un fort
              accent sur la qualité du code et l’expérience utilisateur. Issu
              d’une première carrière en chirurgie dentaire, ma reconversion en
              ingénierie informatique m’a apporté rigueur et sens du détail.
              Curieux et en apprentissage continu, j’aime automatiser, optimiser
              et développer des solutions fiables et évolutives.
            </p>
          </div>
        </div>
        <div className=" border-2 mt-8 border-[#5B9BD5] rounded-3xl p-16 shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f1f1f1]">
            mes expériences professionnels
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#526687]" />
          <p className="mt-3 text-sm leading-relaxed text-[#f1f1f1]/80">
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
            non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim.
          </p>
        </div>
        <div>
          <button className="text-white">telecharger mon CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
