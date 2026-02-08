import {
  Code2,
  Database,
  Layers,
  GitBranch,
  Cloud,
  Palette,
  Brain,
  Boxes,
} from "lucide-react";

interface TechnologiesProps {
  isDarkMode: boolean;
}

const Technologies = ({ isDarkMode }: TechnologiesProps) => {
  // 🔥 Regroupement par taille de contenu
  const sections = {
    large: [
      {
        icon: Layers,
        title: "Frameworks & Bibliothèques",
        color: "blue",
        subCategories: [
          {
            name: "JAVASCRIPT",
            items: ["React.js", "Angular", "React Native", "Express.js"],
          },
          {
            name: "CSS",
            items: ["Bootstrap", "Tailwind CSS"],
          },
          {
            name: "RUBY",
            items: ["Ruby on Rails", "Sinatra", "Hanami"],
          },
        ],
      },
      {
        icon: Cloud,
        title: "DevOps & Déploiement",
        color: "purple",
        hasLogos: true,
        itemsWithLogos: [
          {
            name: "Docker",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            name: "AWS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
          },
          {
            name: "CI/CD",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          },
          {
            name: "Linux",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          },
          {
            name: "Nginx",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
          },
          {
            name: "Heroku",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
          },
        ],
      },
    ],

    medium: [
      {
        icon: Code2,
        title: "Langages de programmation",
        color: "purple",
        items: [
          "JavaScript/TypeScript",
          "Ruby",
          "Python",
          "PHP",
          "C#",
          "Java",
          "C",
        ],
      },
      {
        icon: Brain,
        title: "Data & IA (Python)",
        color: "blue",
        items: ["PyTorch", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      },
    ],

    small: [
      {
        icon: Boxes,
        title: "Stacks & Architectures",
        color: "purple",
        items: [
          "MERN",
          "PERN",
          "MEVN",
          "Ruby on Rails Stack",
          "Sinatra Stack",
          "MVC",
        ],
      },
      {
        icon: Palette,
        title: "Conception & Méthodologies",
        color: "blue",
        items: ["UML", "Merise", "SCRUM / Agile"],
      },
      {
        icon: Database,
        title: "Bases de données",
        color: "purple",
        subCategories: [
          {
            name: "SQL",
            items: ["PostgreSQL", "MySQL", "SQLite", "SQL Server"],
          },
          {
            name: "NOSQL",
            items: ["MongoDB", "Redis", "Firebase"],
          },
        ],
      },
      {
        icon: GitBranch,
        title: "Versioning & Collaboration",
        color: "blue",
        hasLogos: true,
        itemsWithLogos: [
          {
            name: "Git",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            name: "GitHub",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          },
          {
            name: "GitLab",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
          },
          {
            name: "Bitbucket",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
          },
        ],
      },
    ],
  };

  const renderCard = (category: any, index: number) => {
    const Icon = category.icon;
    const isPurple = category.color === "purple";

    return (
      <div key={index} className="relative group h-full">
        {/* Glow effect */}
        <div
          className={`
            absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-40
            transition-all duration-700
            ${
              isPurple
                ? isDarkMode
                  ? "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500"
                  : "bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500"
                : isDarkMode
                  ? "bg-gradient-to-r from-rose-400 via-red-400 to-rose-400"
                  : "bg-gradient-to-r from-[#5B9BD5] via-[#4682B4] to-[#5B9BD5]"
            }
          `}
        ></div>

        {/* Card */}
        <div className="relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 shadow-xl overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] flex flex-col">
          {/* Effet brillance */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          {/* En-tête */}
          <div className="relative flex items-center gap-4 mb-6">
            <div
              className={`
                p-3 rounded-xl transition-colors duration-700
                ${
                  isPurple
                    ? isDarkMode
                      ? "bg-pink-500/20"
                      : "bg-purple-500/20"
                    : isDarkMode
                      ? "bg-rose-400/20"
                      : "bg-[#5B9BD5]/20"
                }
              `}
            >
              <Icon
                className={`
                  w-6 h-6 transition-colors duration-700
                  ${
                    isPurple
                      ? isDarkMode
                        ? "text-pink-400"
                        : "text-purple-400"
                      : isDarkMode
                        ? "text-rose-400"
                        : "text-[#5B9BD5]"
                  }
                `}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
              {category.title}
            </h3>
          </div>

          {/* Contenu */}
          <div className="relative flex-1">
            {/* Simple liste */}
            {category.items && (
              <div className="flex flex-wrap gap-2">
                {category.items.map((item: string, i: number) => (
                  <span
                    key={i}
                    className={`
                      px-3 py-2 rounded-lg text-sm font-medium transition-all duration-700 hover:scale-105
                      ${
                        isPurple
                          ? isDarkMode
                            ? "bg-pink-500/10 text-pink-300 border border-pink-400/20 hover:bg-pink-500/20 hover:border-pink-400/40"
                            : "bg-purple-500/10 text-purple-300 border border-purple-400/20 hover:bg-purple-500/20 hover:border-purple-400/40"
                          : isDarkMode
                            ? "bg-rose-400/10 text-rose-400 border border-rose-400/20 hover:bg-rose-400/20 hover:border-rose-400/40"
                            : "bg-[#5B9BD5]/10 text-[#5B9BD5] border border-[#5B9BD5]/20 hover:bg-[#5B9BD5]/20 hover:border-[#5B9BD5]/40"
                      }
                    `}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* 🔥 Mini-cards avec contenu centré horizontalement */}
            {category.hasLogos && category.itemsWithLogos && (
              <div className="grid grid-cols-2 gap-3">
                {category.itemsWithLogos.map((item: any, i: number) => (
                  <div
                    key={i}
                    className={`
                      group/item rounded-xl border transition-all duration-700 hover:scale-105
                      ${
                        isPurple
                          ? isDarkMode
                            ? "bg-pink-500/10 border-pink-400/20 hover:bg-pink-500/20 hover:border-pink-400/40"
                            : "bg-purple-500/10 border-purple-400/20 hover:bg-purple-500/20 hover:border-purple-400/40"
                          : isDarkMode
                            ? "bg-rose-400/10 border-rose-400/20 hover:bg-rose-400/20 hover:border-rose-400/40"
                            : "bg-[#5B9BD5]/10 border-[#5B9BD5]/20 hover:bg-[#5B9BD5]/20 hover:border-[#5B9BD5]/40"
                      }
                    `}
                  >
                    {/* Contenu centré */}
                    <div className="flex items-center justify-center gap-3 p-3">
                      {/* Logo */}
                      <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-white/10 p-1.5 flex items-center justify-center">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>

                      {/* Nom */}
                      <span
                        className={`
                          text-sm font-medium transition-colors duration-700
                          ${
                            isPurple
                              ? isDarkMode
                                ? "text-pink-300"
                                : "text-purple-300"
                              : isDarkMode
                                ? "text-rose-400"
                                : "text-[#5B9BD5]"
                          }
                        `}
                      >
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sous-catégories */}
            {category.subCategories && (
              <div className="space-y-4">
                {category.subCategories.map((sub: any, i: number) => (
                  <div key={i}>
                    {/* Label */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`
                          w-1.5 h-1.5 rounded-full transition-colors duration-700
                          ${
                            isPurple
                              ? isDarkMode
                                ? "bg-pink-400"
                                : "bg-purple-400"
                              : isDarkMode
                                ? "bg-rose-400"
                                : "bg-[#5B9BD5]"
                          }
                        `}
                      ></div>
                      <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                        {sub.name}
                      </span>
                    </div>

                    {/* Items */}
                    <div className="flex flex-wrap gap-2">
                      {sub.items.map((item: string, j: number) => (
                        <span
                          key={j}
                          className={`
                            px-3 py-2 rounded-lg text-sm font-medium transition-all duration-700 hover:scale-105
                            ${
                              isPurple
                                ? isDarkMode
                                  ? "bg-pink-500/10 text-pink-300 border border-pink-400/20 hover:bg-pink-500/20 hover:border-pink-400/40"
                                  : "bg-purple-500/10 text-purple-300 border border-purple-400/20 hover:bg-purple-500/20 hover:border-purple-400/40"
                                : isDarkMode
                                  ? "bg-rose-400/10 text-rose-400 border border-rose-400/20 hover:bg-rose-400/20 hover:border-rose-400/40"
                                  : "bg-[#5B9BD5]/10 text-[#5B9BD5] border border-[#5B9BD5]/20 hover:bg-[#5B9BD5]/20 hover:border-[#5B9BD5]/40"
                            }
                          `}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="technologies" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            <span
              className={`
                inline-flex items-center gap-4 bg-gradient-to-r bg-clip-text text-transparent
                transition-all duration-700
                ${
                  isDarkMode
                    ? "from-[#f1f1f1] via-pink-300 to-[#f1f1f1]"
                    : "from-[#f1f1f1] via-purple-300 to-[#f1f1f1]"
                }
              `}
            >
              <Code2
                className={`
                  w-12 h-12 md:w-14 md:h-14 transition-colors duration-700
                  ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                `}
              />
              Technologies & Compétences
            </span>
          </h2>

          {/* Ligne de séparation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              className={`
                h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent
                transition-colors duration-700
                ${isDarkMode ? "to-rose-400" : "to-[#5B9BD5]"}
              `}
            ></div>
            <div
              className={`
                w-2 h-2 rounded-full shadow-lg transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-pink-400 shadow-pink-400/50"
                    : "bg-purple-400 shadow-purple-400/50"
                }
              `}
            ></div>
            <div
              className={`
                h-[2px] w-32 md:w-48 bg-gradient-to-r transition-colors duration-700
                ${
                  isDarkMode
                    ? "from-rose-400 via-pink-400 to-rose-400"
                    : "from-[#5B9BD5] via-purple-400 to-[#5B9BD5]"
                }
              `}
            ></div>
            <div
              className={`
                w-2 h-2 rounded-full shadow-lg transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-pink-400 shadow-pink-400/50"
                    : "bg-purple-400 shadow-purple-400/50"
                }
              `}
            ></div>
            <div
              className={`
                h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent
                transition-colors duration-700
                ${isDarkMode ? "to-rose-400" : "to-[#5B9BD5]"}
              `}
            ></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Section 1 : Cards grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {sections.large.map((category, index) =>
              renderCard(category, index),
            )}
          </div>

          {/* Section 2 : Cards moyennes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {sections.medium.map((category, index) =>
              renderCard(category, index + 100),
            )}
          </div>

          {/* Section 3 : Cards petites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {sections.small
              .slice(0, 2)
              .map((category, index) => renderCard(category, index + 200))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {sections.small
              .slice(2, 4)
              .map((category, index) => renderCard(category, index + 300))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className={`
              text-center p-6 rounded-2xl bg-gradient-to-br from-transparent border
              transition-all duration-700
              ${
                isDarkMode
                  ? "bg-pink-500/10 border-pink-400/20"
                  : "bg-purple-500/10 border-purple-400/20"
              }
            `}
          >
            <div
              className={`
                text-3xl md:text-4xl font-bold mb-2 transition-colors duration-700
                ${isDarkMode ? "text-pink-400" : "text-purple-400"}
              `}
            >
              5+
            </div>
            <div className="text-sm text-white/70">Langages</div>
          </div>
          <div
            className={`
              text-center p-6 rounded-2xl bg-gradient-to-br from-transparent border
              transition-all duration-700
              ${
                isDarkMode
                  ? "bg-rose-400/10 border-rose-400/20"
                  : "bg-[#5B9BD5]/10 border-[#5B9BD5]/20"
              }
            `}
          >
            <div
              className={`
                text-3xl md:text-4xl font-bold mb-2 transition-colors duration-700
                ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
              `}
            >
              10+
            </div>
            <div className="text-sm text-white/70">Frameworks</div>
          </div>
          <div
            className={`
              text-center p-6 rounded-2xl bg-gradient-to-br from-transparent border
              transition-all duration-700
              ${
                isDarkMode
                  ? "bg-pink-500/10 border-pink-400/20"
                  : "bg-purple-500/10 border-purple-400/20"
              }
            `}
          >
            <div
              className={`
                text-3xl md:text-4xl font-bold mb-2 transition-colors duration-700
                ${isDarkMode ? "text-pink-400" : "text-purple-400"}
              `}
            >
              6+
            </div>
            <div className="text-sm text-white/70">Stacks</div>
          </div>
          <div
            className={`
              text-center p-6 rounded-2xl bg-gradient-to-br from-transparent border
              transition-all duration-700
              ${
                isDarkMode
                  ? "bg-rose-400/10 border-rose-400/20"
                  : "bg-[#5B9BD5]/10 border-[#5B9BD5]/20"
              }
            `}
          >
            <div
              className={`
                text-3xl md:text-4xl font-bold mb-2 transition-colors duration-700
                ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
              `}
            >
              3+
            </div>
            <div className="text-sm text-white/70">DB Types</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
