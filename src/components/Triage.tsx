// components/ProjectList.tsx
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Calendar, Folder } from "lucide-react";

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
  type: "Web" | "Mobile" | "Backend" | "IA/ML";
  technologies: string[];
  link?: string;
}

type GroupBy = "year" | "type";
type SortOrder = "asc" | "desc";

// Données exemple
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Site web moderne avec React, Next.js et Tailwind",
    year: 2026,
    type: "Web",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "API Transport Management",
    description: "Backend pour systèmes de gestion des transports",
    year: 2025,
    type: "Backend",
    technologies: ["Ruby on Rails", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "App Mobile Santé",
    description: "Application de suivi médical",
    year: 2025,
    type: "Mobile",
    technologies: ["React Native", "Firebase"],
  },
  {
    id: 4,
    title: "Modèle Deep Learning",
    description: "Classification d'images médicales",
    year: 2024,
    type: "IA/ML",
    technologies: ["Python", "TensorFlow", "NumPy"],
  },
];

const ProjectList = () => {
  const [groupBy, setGroupBy] = useState<GroupBy>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  useEffect(() => {
    setExpandedGroups(new Set());
  }, [groupBy]);

  // Toggle groupe accordéon
  const toggleGroup = (group: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(group)) {
      newExpanded.delete(group);
    } else {
      newExpanded.add(group);
    }
    setExpandedGroups(newExpanded);
  };

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

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header avec contrôles */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Grouper par */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-[#f1f1f1]/80 mb-2">
            Grouper par
          </label>
          <div className="flex gap-2">
            <button
            type="button"
              onClick={() => setGroupBy("year")}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                transition-all duration-300
                ${
                  groupBy === "year"
                    ? "bg-[#5B9BD5] text-white shadow-md"
                    : "bg-white/10 text-[#f1f1f1]/70 hover:bg-white/20"
                }
              `}
            >
              <Calendar className="w-4 h-4" />
              Année
            </button>
            <button
            type="button"
              onClick={() => setGroupBy("type")}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                transition-all duration-300
                ${
                  groupBy === "type"
                    ? "bg-[#5B9BD5] text-white shadow-md"
                    : "bg-white/10 text-[#f1f1f1]/70 hover:bg-white/20"
                }
              `}
            >
              <Folder className="w-4 h-4" />
              Type
            </button>
          </div>
        </div>

        {/* Ordre de tri */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-[#f1f1f1]/80 mb-2">
            Ordre
          </label>
          <button
          type="button"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="
              flex items-center gap-2 px-4 py-2 rounded-lg
              bg-white/10 hover:bg-white/20
              text-[#f1f1f1] font-medium
              transition-all duration-300
            "
          >
            {sortOrder === "desc" ? (
              <>
                <ChevronDown className="w-4 h-4" />
                Plus récent
              </>
            ) : (
              <>
                <ChevronUp className="w-4 h-4" />
                Plus ancien
              </>
            )}
          </button>
        </div>
      </div>

      {/* Liste groupée */}
      <div className="space-y-4">
        {sortedGroups.map((group) => {
          const isExpanded = expandedGroups.has(group);
          const projects = groupedProjects[group];

          return (
            <div
              key={group}
              className="border-2 border-[#5B9BD5]/30 rounded-2xl overflow-hidden
                         bg-gradient-to-br from-[#093540]/20 to-[#526687]/10
                         backdrop-blur-sm shadow-lg"
            >
              {/* En-tête groupe (accordéon) */}
              <button
              type="button"
                onClick={() => toggleGroup(group)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-4
                  hover:bg-white/5
                  transition-colors duration-200
                "
              >
                <div className="flex items-center gap-3">
                  {groupBy === "year" ? (
                    <Calendar className="w-5 h-5 text-[#5B9BD5]" />
                  ) : (
                    <Folder className="w-5 h-5 text-[#5B9BD5]" />
                  )}
                  <h3 className="text-xl font-bold text-[#f1f1f1]">{group}</h3>
                  <span className="px-2 py-1 rounded-full bg-[#5B9BD5]/20 text-[#5B9BD5] text-sm font-medium">
                    {projects.length} projet{projects.length > 1 ? "s" : ""}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[#f1f1f1]/60" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#f1f1f1]/60" />
                )}
              </button>

              {/* Contenu (projets) */}
              {isExpanded && (
                <div className="px-6 pb-4 space-y-3">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="
                        p-4 rounded-xl
                        bg-[#093540]/40 hover:bg-[#093540]/60
                        border border-[#5B9BD5]/20
                        transition-all duration-300
                        hover:scale-[1.02]
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-[#f1f1f1] mb-1">
                            {project.title}
                          </h4>
                          <p className="text-sm text-[#f1f1f1]/70 mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="
                                  px-2 py-1 rounded-md
                                  bg-[#8497bf]/20 text-[#8497bf]
                                  text-xs font-medium
                                "
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              px-3 py-1.5 rounded-lg
                              bg-[#5B9BD5] hover:bg-[#4682B4]
                              text-white text-sm font-medium
                              transition-colors duration-300
                              shrink-0
                            "
                          >
                            Voir
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
