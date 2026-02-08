const Mon_photo = () => {
  return (
    <div className="flex justify-center items-center h-full">
      {/*                           ↑ Centre verticalement aussi */}
      <div className="relative w-full max-w-md md:max-w-lg">
        {/*           ↑ Limite la largeur max */}
        <img
          src="/photos/manda5.PNG"
          alt="Photo de profil"
          className="w-full h-auto object-cover rounded-full
            drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
            transition-all duration-300 ease-out
            hover:scale-105
            hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]"
        />
      </div>
    </div>
  );
};

export default Mon_photo;
