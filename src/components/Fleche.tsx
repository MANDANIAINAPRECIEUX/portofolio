import React from 'react';

// Interface pour les props (optionnelle, pour la flexibilité)
interface DiscoverBtnProps {
  onClick?: () => void;
  className?: string; // Pour rajouter des marges depuis le parent si besoin
}

const Fleche: React.FC<DiscoverBtnProps> = ({ onClick, className = '' }) => {
  return (
    <div 
      onClick={onClick}
      // CLASSES TAILWIND EXPLIQUÉES :
      // flex flex-col items-center : Centre les éléments verticalement
      // cursor-pointer : Indique que c'est cliquable
      // text-gray-500 hover:text-black : Transition de couleur gris vers noir
      // transition-colors duration-300 : Douceur du changement de couleur
      className={`flex flex-col items-center justify-center cursor-pointer text-gray-600 hover:text-black transition-colors duration-300 ${className}`}
      role="button"
      tabIndex={0}
    >
      {/* TEXTE */}
      <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-2">
        Découvrir
      </span>

      {/* FLÈCHE (SVG) */}
      {/* animate-bounce : Animation native de Tailwind pour le rebond */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 animate-bounce" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default Fleche;
