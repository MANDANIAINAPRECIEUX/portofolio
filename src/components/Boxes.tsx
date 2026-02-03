import React from 'react';

// 1️⃣ Syntaxe CORRECTE : props en PARAMÈTRES
interface BoxesProps {
  tech: string;
}

const Boxes = ({ tech }: BoxesProps) => {
  return (
    <div className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">
      {tech}
    </div>
  );
};

export default Boxes;
