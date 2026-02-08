// components/ProjectList.tsx
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Folder,
  Briefcase,
  ExternalLink,
  Github,
  Play,
  FolderOpen,
} from "lucide-react";
import PROJECTS from "../../types/Project";
import type { Project } from "../../types/Project";

type GroupBy = "year" | "type";
type SortOrder = "asc" | "desc";

interface ProjectListProps {
  isDarkMode: boolean;
}

const ProjectList = ({ isDarkMode }: ProjectListProps) => {
  const [showProjects, setShowProjects] = useState(true);
  const [groupBy, setGroupBy] = useState<GroupBy>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // CAROUSEL STATE
  const [carouselStates, setCarouselStates] = useState<
    Record<string, { current: number; totalSlides: number }>
  >({});

  // 🔥 RESPONSIVE: Calculer slidesPerView selon la largeur d'écran
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1); // Mobile: 1 card
      } else if (width < 1024) {
        setSlidesPerView(2); // Tablette: 2 cards
      } else {
        setSlidesPerView(3); // Desktop: 3 cards
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Grouper les projets
  const groupedProjects = PROJECTS.reduce(
    (acc, project) => {
      const key = groupBy === "year" ? String(project.year) : project.type;
      if (!acc[key]) acc[key] = [];
      acc[key].push(project);
      return acc;
    },
    {} as Record<string, Project[]>,
  );

  // Trier les groupes
  const sortedGroups = Object.keys(groupedProjects).sort((a, b) => {
    if (sortOrder === "asc") {
      return a.localeCompare(b, undefined, { numeric: true });
    }
    return b.localeCompare(a, undefined, { numeric: true });
  });

  // CAROUSEL LOGIC
  const updateCarouselState = (groupKey: string, projects: Project[]) => {
    const totalSlides = Math.ceil(projects.length / slidesPerView);
    setCarouselStates((prev) => ({
      ...prev,
      [groupKey]: { current: 0, totalSlides },
    }));
  };

  const goToSlide = (
    groupKey: string,
    direction: "prev" | "next",
    totalSlides: number,
  ) => {
    setCarouselStates((prev) => {
      const currentSlide = prev[groupKey]?.current || 0;
      let newSlide = currentSlide + (direction === "next" ? 1 : -1);

      newSlide = Math.max(0, Math.min(newSlide, totalSlides - 1));

      return {
        ...prev,
        [groupKey]: {
          ...prev[groupKey]!,
          current: newSlide,
        },
      };
    });
  };

  const isCarousel = (projects: Project[]): boolean =>
    projects.length > slidesPerView;

  // Fonction pour créer des "pages"
  const chunkProjects = (projects: Project[], size: number) => {
    const chunks = [];
    for (let i = 0; i < projects.length; i += size) {
      chunks.push(projects.slice(i, i + size));
    }
    return chunks;
  };

  // 🔥 RESPONSIVE: Grid classes dynamiques
  const getGridClasses = () => {
    if (slidesPerView === 1) return "grid-cols-1";
    if (slidesPerView === 2) return "grid-cols-2";
    return "grid-cols-3";
  };

  return (
    <div
      id="projets"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="flex items-center justify-center gap-3 my-12 md:my-16">
        <div
          className={`
            h-[2px] flex-1 max-w-xs bg-gradient-to-r from-transparent
            transition-colors duration-700
            ${isDarkMode ? "to-pink-400" : "to-purple-400"}
          `}
        ></div>
        <div className="relative">
          <div
            className={`
              w-3 h-3 rounded-full transition-colors duration-700
              ${isDarkMode ? "bg-pink-400" : "bg-purple-400"}
            `}
          ></div>
          <div
            className={`
              absolute inset-0 w-3 h-3 rounded-full blur-md animate-pulse
              transition-colors duration-700
              ${isDarkMode ? "bg-pink-400" : "bg-purple-400"}
            `}
          ></div>
        </div>
        <div
          className={`
            h-[2px] flex-1 max-w-xs bg-gradient-to-l from-transparent
            transition-colors duration-700
            ${isDarkMode ? "to-pink-400" : "to-purple-400"}
          `}
        ></div>
      </div>

      {/* MODAL VIDÉO */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 sm:-top-14 right-0 flex items-center gap-2 text-white hover:text-red-400 text-base sm:text-lg font-semibold transition-colors duration-300"
            >
              <span>✕ Fermer</span>
            </button>
            <div
              className={`
                relative pt-[56.25%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-2 sm:ring-4
                transition-colors duration-700
                ${isDarkMode ? "ring-pink-500/50" : "ring-purple-500/50"}
              `}
            >
              <iframe
                src={selectedVideo}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Démo du projet"
              />
            </div>
          </div>
        </div>
      )}

      {/* BOUTON PRINCIPAL */}
      {!showProjects ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowProjects(true)}
            className={`
              group flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5
              text-white text-lg sm:text-xl md:text-2xl font-bold rounded-xl sm:rounded-2xl
              shadow-2xl transition-all duration-700 hover:scale-110 active:scale-95
              relative overflow-hidden
              ${
                isDarkMode
                  ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 hover:shadow-pink-500/50"
                  : "bg-gradient-to-r from-[#5B9BD5] to-[#4682B4] hover:from-[#4682B4] hover:to-[#5B9BD5] hover:shadow-[#5B9BD5]/50"
              }
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">MES PROJETS</span>
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      ) : (
        <>
          <div className="relative flex items-center justify-center gap-4 mb-8 md:mb-10">
            {/* Espace vide à gauche (équilibre visuel) */}
            <div className="hidden sm:block flex-1"></div>

            {/* Titre CENTRÉ */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
                <span
                  className={`
                    inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r bg-clip-text text-transparent
                    transition-all duration-700
                    ${
                      isDarkMode
                        ? "from-[#f1f1f1] via-pink-300 to-[#f1f1f1]"
                        : "from-[#f1f1f1] via-purple-300 to-[#f1f1f1]"
                    }
                  `}
                >
                  <FolderOpen
                    className={`
                      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                      transition-colors duration-700
                      ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                    `}
                  />
                  Mes Projets
                </span>
              </h2>
            </div>

            {/* Espace à droite avec bouton */}
            <div className="flex-1 flex justify-end">
              <button
                type="button"
                onClick={() => setShowProjects(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#f1f1f1] text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Masquer
              </button>
            </div>
          </div>

          {/* 🔥 CONTRÔLES DE TRI */}
          <div className="mb-8 md:mb-10 space-y-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              {/* Grouper par */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-[#f1f1f1]/80">
                  Grouper par :
                </span>
                <button
                  type="button"
                  onClick={() => setGroupBy("year")}
                  className={`
                    flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm
                    transition-all duration-700
                    ${
                      groupBy === "year"
                        ? isDarkMode
                          ? "bg-pink-500 text-white shadow-lg scale-105"
                          : "bg-[#5B9BD5] text-white shadow-lg scale-105"
                        : "bg-white/10 text-[#f1f1f1]/70 hover:bg-white/20"
                    }
                  `}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> Année
                </button>
                <button
                  type="button"
                  onClick={() => setGroupBy("type")}
                  className={`
                    flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm
                    transition-all duration-700
                    ${
                      groupBy === "type"
                        ? isDarkMode
                          ? "bg-pink-500 text-white shadow-lg scale-105"
                          : "bg-[#5B9BD5] text-white shadow-lg scale-105"
                        : "bg-white/10 text-[#f1f1f1]/70 hover:bg-white/20"
                    }
                  `}
                >
                  <Folder className="w-3 h-3 sm:w-4 sm:h-4" /> Type
                </button>
              </div>

              {/* Ordre de tri */}
              <button
                type="button"
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#f1f1f1] font-semibold text-xs sm:text-sm transition-all duration-300"
              >
                {sortOrder === "desc" ? (
                  <>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" /> Plus
                    récent
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /> Plus ancien
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GRILLE/CAROUSEL PAR GROUPE */}
          <div className="space-y-12 md:space-y-16">
            {sortedGroups.map((group) => {
              const projects = groupedProjects[group]!;
              const totalSlides = Math.ceil(projects.length / slidesPerView);
              const isCarouselGroup = isCarousel(projects);

              // Initialiser carousel state
              if (isCarouselGroup && !carouselStates[group]) {
                updateCarouselState(group, projects);
              }

              const currentSlide = carouselStates[group]?.current || 0;

              // Créer des pages
              const projectPages = isCarouselGroup
                ? chunkProjects(projects, slidesPerView)
                : [];

              return (
                <div key={group} className="space-y-4 md:space-y-6">
                  {/* En-tête du groupe */}
                  <div
                    className={`
                      flex items-center gap-2 md:gap-3 border-b-2 pb-2 md:pb-3
                      transition-colors duration-700
                      ${
                        isDarkMode
                          ? "border-pink-500/30"
                          : "border-[#5B9BD5]/30"
                      }
                    `}
                  >
                    {groupBy === "year" ? (
                      <Calendar
                        className={`
                          w-5 h-5 md:w-6 md:h-6 transition-colors duration-700
                          ${isDarkMode ? "text-pink-400" : "text-[#5B9BD5]"}
                        `}
                      />
                    ) : (
                      <Folder
                        className={`
                          w-5 h-5 md:w-6 md:h-6 transition-colors duration-700
                          ${isDarkMode ? "text-pink-400" : "text-[#5B9BD5]"}
                        `}
                      />
                    )}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f1f1f1]">
                      {group}
                    </h3>
                    <span
                      className={`
                        px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold
                        transition-colors duration-700
                        ${
                          isDarkMode
                            ? "bg-pink-500/20 text-pink-400"
                            : "bg-purple-500/20 text-purple-400"
                        }
                      `}
                    >
                      {projects.length} projet{projects.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* 🔥 CAROUSEL OU GRILLE */}
                  {isCarouselGroup ? (
                    <div className="relative px-0 sm:px-8 md:px-12 lg:px-16">
                      {/* SLIDES CONTAINER */}
                      <div className="overflow-hidden">
                        <div
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                          }}
                        >
                          {projectPages.map((pageProjects, pageIndex) => (
                            <div
                              key={pageIndex}
                              className={`w-full flex-shrink-0 grid ${getGridClasses()} gap-4 md:gap-6`}
                            >
                              {pageProjects.map((project) => (
                                <ProjectCard
                                  key={project.id}
                                  project={project}
                                  groupBy={groupBy}
                                  onVideoClick={setSelectedVideo}
                                  isDarkMode={isDarkMode}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* FLÈCHES CAROUSEL */}
                      <button
                        type="button"
                        aria-label="Précédent"
                        onClick={() => goToSlide(group, "prev", totalSlides)}
                        disabled={currentSlide === 0}
                        className={`
                          absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 
                          backdrop-blur-sm p-2 sm:p-3 rounded-full text-white shadow-2xl 
                          transition-all duration-700 hover:scale-110 z-10
                          ${
                            isDarkMode
                              ? "bg-white/20 hover:bg-pink-400/30"
                              : "bg-white/20 hover:bg-purple-400/30"
                          }
                          ${currentSlide === 0 ? "opacity-30 cursor-not-allowed" : ""}
                        `}
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        type="button"
                        aria-label="Suivant"
                        onClick={() => goToSlide(group, "next", totalSlides)}
                        disabled={currentSlide === totalSlides - 1}
                        className={`
                          absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 
                          backdrop-blur-sm p-2 sm:p-3 rounded-full text-white shadow-2xl 
                          transition-all duration-700 hover:scale-110 z-10
                          ${
                            isDarkMode
                              ? "bg-white/20 hover:bg-pink-400/30"
                              : "bg-white/20 hover:bg-purple-400/30"
                          }
                          ${currentSlide === totalSlides - 1 ? "opacity-30 cursor-not-allowed" : ""}
                        `}
                      >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>

                      {/* INDICATEURS */}
                      <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                          <button
                            type="button"
                            aria-label={`Aller à la slide ${i + 1}`}
                            key={i}
                            onClick={() =>
                              setCarouselStates((prev) => ({
                                ...prev,
                                [group]: { ...prev[group]!, current: i },
                              }))
                            }
                            className={`
                              w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-700
                              ${
                                i === currentSlide
                                  ? isDarkMode
                                    ? "bg-pink-400 scale-125 shadow-lg shadow-pink-400/50"
                                    : "bg-purple-400 scale-125 shadow-lg shadow-purple-400/50"
                                  : isDarkMode
                                    ? "bg-white/40 hover:bg-pink-300/60"
                                    : "bg-white/40 hover:bg-purple-300/60"
                              }
                            `}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // GRILLE NORMALE
                    <div className="px-0 sm:px-8 md:px-12 lg:px-16">
                      <div
                        className={`grid ${getGridClasses()} gap-4 md:gap-6`}
                      >
                        {projects.map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            groupBy={groupBy}
                            onVideoClick={setSelectedVideo}
                            isDarkMode={isDarkMode}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

// COMPOSANT CARD RESPONSIVE
const ProjectCard = ({
  project,
  groupBy,
  onVideoClick,
  isDarkMode,
}: {
  project: Project;
  groupBy: GroupBy;
  onVideoClick: (video: string) => void;
  isDarkMode: boolean;
}) => (
  <div
    className={`
      group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl 
      bg-gradient-to-br from-[#093540]/40 to-[#526687]/20
      border-2 backdrop-blur-sm shadow-2xl
      transition-all duration-700 hover:scale-[1.03]
      flex flex-col w-full
      min-h-[350px] sm:min-h-[380px] md:min-h-[420px]
      ${
        isDarkMode
          ? "border-pink-500/30 hover:border-pink-400/50 hover:shadow-pink-500/20"
          : "border-[#5B9BD5]/30 hover:border-purple-400/50 hover:shadow-purple-500/20"
      }
    `}
  >
    <div
      className={`
        absolute top-3 sm:top-4 right-3 sm:right-4 px-2 py-1 rounded-lg
        text-[10px] sm:text-xs font-bold transition-colors duration-700
        ${
          isDarkMode
            ? "bg-pink-500/20 text-pink-400"
            : "bg-purple-500/20 text-purple-400"
        }
      `}
    >
      {groupBy === "year" ? project.type : project.year}
    </div>

    <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#f1f1f1] mb-2 sm:mb-3 pr-12 sm:pr-16 line-clamp-2">
      {project.title}
    </h4>

    <p className="text-xs sm:text-sm text-[#f1f1f1]/70 mb-3 sm:mb-4 flex-1 line-clamp-3 sm:line-clamp-4 overflow-hidden">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 max-h-[60px] sm:max-h-[68px] overflow-hidden">
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-[#8497bf]/20 text-[#8497bf] text-[10px] sm:text-xs font-medium h-fit"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row gap-2 mt-auto">
      {project.video && (
        <button
          onClick={() => onVideoClick(project.video!)}
          className={`
            flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg
            text-white text-xs sm:text-sm font-semibold
            transition-all duration-700 hover:scale-105 hover:shadow-lg
            ${
              isDarkMode
                ? "bg-pink-500/90 hover:bg-pink-600 hover:shadow-pink-500/30"
                : "bg-purple-500/90 hover:bg-violet-600 hover:shadow-purple-500/30"
            }
          `}
        >
          <Play className="w-3 h-3 sm:w-4 sm:h-4" /> Démo
        </button>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg bg-gray-700/90 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Github className="w-3 h-3 sm:w-4 sm:h-4" /> Code
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg
            text-white text-xs sm:text-sm font-semibold
            transition-all duration-700 hover:scale-105 hover:shadow-lg
            ${
              isDarkMode
                ? "bg-rose-500 hover:bg-rose-600"
                : "bg-[#5B9BD5] hover:bg-[#4682B4]"
            }
          `}
        >
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" /> Site
        </a>
      )}
    </div>
  </div>
);

export default ProjectList;
