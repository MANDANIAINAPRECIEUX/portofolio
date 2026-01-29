const Mon_photo = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className=" rounded-full ">
        <img
          src="/photos/manda.png"
          alt="Photo de profil"
          className="w-full h-full object-cover   drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] 
          transition-all duration-300 ease-out
            hover:scale-105
            hover:drop-shadow-[0_0_40px_rgba(255,255,255,1)] "
        />
      </div>
    </div>
  );
};

export default Mon_photo;
