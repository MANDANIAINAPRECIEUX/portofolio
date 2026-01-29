

const About = () => {
  return (
    <div className="rounded-2xl bg-[#172033] p-6 text-[#f1f1f1] shadow-lg mx-2">
      <div className="flex items-stretch gap-6">
  {/* Image: même hauteur que le texte */}
  <div className="w-40 md:w-52 lg:w-60 shrink-0 overflow-hidden rounded-2xl">
    <img
      src="/photos/manda.png"
      alt="moi"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Texte */}
  <div className="flex-1">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#f1f1f1]">
      À propos de moi
    </h2>

    <div className="mt-2 h-1 w-16 rounded-full bg-[#8497bf]" />

    <p className="mt-4 text-sm md:text-base leading-relaxed text-[#f1f1f1]/90">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
      sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
      a, semper congue, euismod non, mi.
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
