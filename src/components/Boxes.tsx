

// 1️⃣ Syntaxe CORRECTE : props en PARAMÈTRES
interface BoxesProps {
  tech: string;
}

const Boxes = ({ tech }: BoxesProps) => {
  return (
    <div className="px-4 py-2 
  backdrop-blur-xl bg-white/5 border border-white/20 
  text-white/90 rounded-xl text-sm shadow-xl
  hover:bg-white/10 hover:border-white/30 
  transition-all duration-300 hover:scale-[1.02]">
  {tech}
</div>

  );
};

export default Boxes;
