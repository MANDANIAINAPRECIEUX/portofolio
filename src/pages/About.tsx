const About = () => {
  return (
    <div className="rounded-2xl bg-[#172033] p-6 text-[#f1f1f1] shadow-lg mx-2">
     <div className="flex items-stretch gap-6 border-2 border-[#5B9BD5] rounded-3xl p-6 shadow-lg">
  {/* Image: même hauteur que le texte */}
  <div className="w-80 md:w-104 lg:w-120 shrink-0 overflow-hidden rounded-2xl">
    <img
      src="/photos/manda.png"
      alt="moi"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Texte */}
  <div className="flex-1">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f1f1f1]">
      À propos de moi
    </h2>

    <div className="mt-3 h-1 w-20 rounded-full bg-[#5B9BD5]" />

    <p className="mt-5 text-base md:text-lg leading-relaxed text-[#f1f1f1]/90">
      Basé à Madagascar, je suis diplômé en informatique et développeur
      fullstack passionné par l'innovation et les technologies du web. Je
      conçois des applications complètes, du backend (API, bases de
      données, architecture) au frontend (interfaces modernes, responsives
      et accessibles), en mettant l'accent sur la qualité du code et
      l'expérience utilisateur. Mon parcours inclut une première carrière
      en chirurgie dentaire, puis une réorientation vers l'ingénierie
      informatique, ce qui m'a apporté rigueur, méthode et sens du détail.
      Curieux et en apprentissage continu, j'aime automatiser, optimiser
      et livrer des solutions fiables, utiles et évolutives.
    </p>
  </div>
</div>


      <div>
        <p className="mt-3 text-sm leading-relaxed text-[#f1f1f1]/80">
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
          fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
          scelerisque vitae, consequat in, pretium a, enim.
        </p>
      </div>
    </div>
  );
};

export default About;
