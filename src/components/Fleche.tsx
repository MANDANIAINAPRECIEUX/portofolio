

type FlecheProps = {
  name: string
}

const Fleche = ({ name }: FlecheProps) => {
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
      <span className="text-base md:text-lg font-bold tracking-[0.35em] uppercase text-white group-hover:text-gray-200 transition-colors duration-300 mb-4">
       {name}
      </span>

      {/* FLÈCHE CHEVRON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white group-hover:text-gray-200 animate-bounce transition-colors duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default Fleche;
