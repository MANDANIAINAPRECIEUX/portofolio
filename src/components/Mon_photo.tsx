interface MonPhotoProps {
  isDarkMode: boolean;
}

const Mon_photo = ({ isDarkMode }: MonPhotoProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-full max-w-md md:max-w-lg">
        <img
          src="/photos/manda5.PNG"
          alt="Photo de profil"
          className={`
            w-full h-auto object-cover rounded-full
            transition-all duration-700 ease-out
            hover:scale-105
            ${
              isDarkMode
                ? "drop-shadow-[0_0_20px_rgba(244,114,182,0.6)] hover:drop-shadow-[0_0_40px_rgba(244,114,182,0.8)]"
                : "drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] hover:drop-shadow-[0_0_40px_rgba(168,85,247,0.9)]"
            }
          `}
        />

        {/* Cercle décoratif avec gradient adaptatif */}
        <div
          className={`
            absolute inset-0 rounded-full -z-10
            blur-2xl opacity-30
            transition-all duration-700 ease-out
            ${
              isDarkMode
                ? "bg-gradient-to-br from-red-400 via-pink-400 to-rose-400"
                : "bg-gradient-to-br from-purple-400 via-violet-400 to-blue-400"
            }
          `}
        />
      </div>
    </div>
  );
};

export default Mon_photo;
