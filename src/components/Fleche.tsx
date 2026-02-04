

const Fleche = () => {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer group focus:outline-none"
      role="button"
      tabIndex={0}
      aria-label="Découvrir"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.currentTarget.click();
        }
      }}
    >
      {/* TEXTE DÉCOUVRIR */}
      <span className="text-[11px] font-light tracking-[0.25em] uppercase text-gray-400 group-hover:text-gray-600 transition-colors duration-300 mb-3">
        Découvrir
      </span>

      {/* FLÈCHE CHEVRON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400 group-hover:text-gray-600 animate-bounce transition-colors duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default Fleche;
