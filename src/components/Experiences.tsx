"use client";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Code,
  Heart,
  Users,
  Building2,
  ChevronDown,
  Target,
} from "lucide-react";
import { useState } from "react";

interface ExperiencesProps {
  isDarkMode: boolean;
}

const Experiences = ({ isDarkMode }: ExperiencesProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const experiences = [
    {
      period: "2024 - Présent",
      title: "Développeur d'Applications E-Health",
      company: "Bro-Coding & Projets Personnels",
      location: "Madagascar",
      type: "Développement Full-Stack",
      color: "purple",
      icon: Code,
      missions: [
        "Développement et maintenance d'applications full-stack pour les systèmes de santé digitale et administratifs",
        "Participation aux revues de code, débogage et déploiement",
        "Collaboration avec d'autres développeurs pour livrer des solutions logicielles efficaces et conviviales",
      ],
    },
    {
      period: "2022 - Présent",
      title: "Chef de Projet E-Santé & Santé Publique",
      company: "Diocèse de Tuléar - Patriarcat d'Alexandrie",
      location: "Tuléar, Madagascar",
      type: "Gestion de projet & Innovation digitale",
      color: "blue",
      icon: Heart,
      missions: [
        "Mise en œuvre de projets de santé communautaire et numérisation des services hospitaliers",
        "Déploiement d'outils de collecte de données numériques (ODK) et formation du personnel médical",
        "Direction de campagnes humanitaires de santé bucco-dentaire",
      ],
    },
    {
      period: "2021 - 2023",
      title: "Consultant Médical - Coordinateur de Projet",
      company: "ONG ATIA Madagascar",
      location: "Antananarivo & Antsirabe, Madagascar",
      type: "Coordination de projets de santé",
      color: "purple",
      icon: Users,
      missions: [
        "Coordination et supervision de campagnes de santé bucco-dentaire communautaires",
        "Analyse des données de suivi de projet et préparation de rapports pour les donateurs",
        "Formation du personnel à la collecte et saisie de données numériques avec ODK",
      ],
    },
    {
      period: "2013 - Présent",
      title: "Chirurgien-Dentiste & Gestionnaire de Clinique",
      company: "Cabinet Dentaire",
      location: "6, Rue Flayelle, Tuléar, Madagascar",
      type: "Pratique médicale & Management",
      color: "blue",
      icon: Building2,
      missions: [
        "Fourniture de soins dentaires, chirurgicaux et prothétiques aux patients",
        "Gestion des opérations de la clinique, dossiers patients et finances",
        "Introduction d'outils numériques pour le suivi des patients et la gestion administrative",
        "Contrôle qualité des matériaux médicaux et respect des normes d'hygiène",
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleStatCard = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="w-full py-20">
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
              <Briefcase
                className={`
                  w-12 h-12 md:w-14 md:h-14 transition-colors duration-700
                  ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                `}
              />
              Expériences Professionnelles
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

          {/* Sous-titre */}
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
            Plus de{" "}
            <span
              className={`
                font-semibold transition-colors duration-700
                ${isDarkMode ? "text-pink-400" : "text-purple-400"}
              `}
            >
              13 ans d'expérience
            </span>{" "}
            combinant expertise médicale, gestion de projet et développement
            logiciel
          </p>
        </div>

        {/* Timeline centrale avec cards alternées */}
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div
            className={`
              absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b -translate-x-1/2 hidden lg:block
              transition-colors duration-700
              ${
                isDarkMode
                  ? "from-pink-400 via-rose-400 to-pink-400"
                  : "from-purple-400 via-[#5B9BD5] to-purple-400"
              }
            `}
          ></div>

          {/* Expériences */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isPurple = exp.color === "purple";
              const isOpen = openIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative group">
                  {/* Point sur la timeline centrale */}
                  <div
                    className={`
                      hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full shadow-lg z-20
                      transition-all duration-700
                      ${
                        isOpen
                          ? isDarkMode
                            ? "scale-125 bg-gradient-to-br from-pink-400 to-rose-400"
                            : "scale-125 bg-gradient-to-br from-purple-400 to-[#5B9BD5]"
                          : "scale-100 bg-white/20"
                      }
                    `}
                  >
                    <div className="absolute inset-1 rounded-full bg-[#0a1f2e]"></div>
                  </div>

                  {/* Card positionnée gauche ou droite */}
                  <div
                    className={`lg:w-[47%] ${
                      isLeft ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                    }`}
                  >
                    <div
                      onClick={() => toggleAccordion(index)}
                      className="relative cursor-pointer"
                    >
                      {/* Glow effect */}
                      <div
                        className={`
                          absolute -inset-1 rounded-2xl blur-xl transition-all duration-700
                          ${
                            isOpen
                              ? "opacity-40"
                              : "opacity-20 group-hover:opacity-40"
                          }
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

                      {/* Card content */}
                      <div
                        className={`
                          relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl
                          rounded-2xl shadow-xl overflow-hidden transition-all duration-700
                          ${
                            isOpen
                              ? "border-white/20"
                              : "border-white/10 hover:border-white/20"
                          }
                        `}
                      >
                        {/* En-tête cliquable */}
                        <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-3">
                            {/* Badge + Icône */}
                            <div className="flex items-center gap-3 flex-wrap">
                              <div
                                className={`
                                  p-2 rounded-lg transition-colors duration-700
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
                                    w-5 h-5 transition-colors duration-700
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
                              <span
                                className={`
                                  text-xs font-semibold uppercase tracking-wider transition-colors duration-700
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
                                {exp.type}
                              </span>
                            </div>

                            {/* Titre principal */}
                            <h3
                              className={`
                                text-lg md:text-xl font-bold text-white transition-colors duration-700
                                ${
                                  isDarkMode
                                    ? "group-hover:text-pink-300"
                                    : "group-hover:text-purple-300"
                                }
                              `}
                            >
                              {exp.title}
                            </h3>

                            {/* Entreprise */}
                            <p className="text-sm md:text-base font-medium text-white/70">
                              {exp.company}
                            </p>
                          </div>

                          {/* Icône chevron */}
                          <div
                            className={`
                              flex-shrink-0 transition-transform duration-300
                              ${isOpen ? "rotate-180" : "rotate-0"}
                            `}
                          >
                            <ChevronDown
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
                        </div>

                        {/* Détails dépliables */}
                        <div
                          className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${
                              isOpen
                                ? "max-h-[800px] opacity-100"
                                : "max-h-0 opacity-0"
                            }
                          `}
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                            {/* Séparateur */}
                            <div
                              className={`
                                h-[1px] bg-gradient-to-r transition-colors duration-700
                                ${
                                  isPurple
                                    ? isDarkMode
                                      ? "from-transparent via-pink-400/30 to-transparent"
                                      : "from-transparent via-purple-400/30 to-transparent"
                                    : isDarkMode
                                      ? "from-transparent via-rose-400/30 to-transparent"
                                      : "from-transparent via-[#5B9BD5]/30 to-transparent"
                                }
                              `}
                            ></div>

                            {/* Période et lieu */}
                            <div className="flex flex-wrap gap-4 text-sm text-white/60">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>

                            {/* Missions */}
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                                Missions principales
                              </h4>
                              {exp.missions.map((mission, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 group/mission"
                                >
                                  <CheckCircle2
                                    className={`
                                      w-5 h-5 mt-0.5 flex-shrink-0 group-hover/mission:scale-110
                                      transition-all duration-700
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
                                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                    {mission}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats animées avec effet flip 3D */}
        <div className="mt-20">
          {/* Titre des stats */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              En chiffres
            </h3>
            <div
              className={`
                h-1 w-20 rounded-full mx-auto transition-colors duration-700
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-pink-400 to-rose-400"
                    : "bg-gradient-to-r from-purple-400 to-[#5B9BD5]"
                }
              `}
            ></div>
          </div>

          {/* Instruction mobile */}
          <div className="text-center mb-6 lg:hidden">
            <p className="text-sm text-white/60 animate-pulse">
              👆 Appuyez sur une carte pour voir les détails
            </p>
          </div>

          {/* Grille de stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 - Années d'expérience */}
            <div
              className="group relative h-[280px] [perspective:1000px] cursor-pointer"
              onClick={() => toggleStatCard(0)}
            >
              <div
                className={`
                  relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]
                  ${
                    flippedCard === 0
                      ? "[transform:rotateY(180deg)]"
                      : "lg:group-hover:[transform:rotateY(180deg)]"
                  }
                `}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-40
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-pink-500 to-rose-500"
                          : "bg-gradient-to-r from-purple-500 to-violet-500"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl
                      rounded-2xl p-8 text-center flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "border border-pink-400/20"
                          : "border border-purple-400/20"
                      }
                    `}
                  >
                    <div
                      className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
                        transition-colors duration-700
                        ${isDarkMode ? "bg-pink-500/20" : "bg-purple-500/20"}
                      `}
                    >
                      <Calendar
                        className={`
                          w-8 h-8 transition-colors duration-700
                          ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                        `}
                      />
                    </div>

                    <div
                      className={`
                        text-4xl md:text-5xl font-bold mb-2 transition-colors duration-700
                        ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                      `}
                    >
                      13
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Années d'expérience
                    </div>

                    <div
                      className={`
                        mt-4 text-xs animate-pulse transition-colors duration-700
                        ${
                          isDarkMode ? "text-pink-400/60" : "text-purple-400/60"
                        }
                      `}
                    >
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-40 transition-colors duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-pink-500 to-rose-500"
                          : "bg-gradient-to-r from-purple-500 to-violet-500"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-br from-pink-900/40 to-[#0a1f2e]/95 border border-pink-400/40"
                          : "bg-gradient-to-br from-purple-900/40 to-[#0a1f2e]/95 border border-purple-400/40"
                      }
                    `}
                  >
                    <div className="space-y-3 text-left">
                      <div
                        className={`
                          flex items-center gap-2 mb-3 transition-colors duration-700
                          ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                        `}
                      >
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Parcours professionnel
                        </span>
                      </div>

                      <div className="text-white/90 space-y-2 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Total</span>
                          <span
                            className={`
                              font-bold transition-colors duration-700
                              ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                            `}
                          >
                            13 ans
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Santé (2013)</span>
                          <span
                            className={`
                              font-bold transition-colors duration-700
                              ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                            `}
                          >
                            13 ans
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">
                            Informatique (2024)
                          </span>
                          <span
                            className={`
                              font-bold transition-colors duration-700
                              ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                            `}
                          >
                            3 ans
                          </span>
                        </div>
                        <div className="mt-3 text-xs text-white/60 italic">
                          Expertise médicale enrichie par la tech 💻
                        </div>
                      </div>

                      <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden flex">
                        <div
                          className={`
                            h-full w-[77%] transition-colors duration-700
                            ${
                              isDarkMode
                                ? "bg-gradient-to-r from-pink-400 to-pink-500"
                                : "bg-gradient-to-r from-purple-400 to-purple-500"
                            }
                          `}
                        ></div>
                        <div
                          className={`
                            h-full w-[23%] transition-colors duration-700
                            ${
                              isDarkMode
                                ? "bg-gradient-to-r from-rose-400 to-red-400"
                                : "bg-gradient-to-r from-[#5B9BD5] to-[#4682B4]"
                            }
                          `}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2 - Postes clés */}
            <div
              className="group relative h-[280px] [perspective:1000px] cursor-pointer"
              onClick={() => toggleStatCard(1)}
            >
              <div
                className={`
                  relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]
                  ${
                    flippedCard === 1
                      ? "[transform:rotateY(180deg)]"
                      : "lg:group-hover:[transform:rotateY(180deg)]"
                  }
                `}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-40
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-rose-400 to-red-400"
                          : "bg-gradient-to-r from-[#5B9BD5] to-[#4682B4]"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl
                      rounded-2xl p-8 text-center flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "border border-rose-400/20"
                          : "border border-[#5B9BD5]/20"
                      }
                    `}
                  >
                    <div
                      className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
                        transition-colors duration-700
                        ${isDarkMode ? "bg-rose-400/20" : "bg-[#5B9BD5]/20"}
                      `}
                    >
                      <Briefcase
                        className={`
                          w-8 h-8 transition-colors duration-700
                          ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                        `}
                      />
                    </div>

                    <div
                      className={`
                        text-4xl md:text-5xl font-bold mb-2 transition-colors duration-700
                        ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                      `}
                    >
                      4
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Postes clés
                    </div>

                    <div
                      className={`
                        mt-4 text-xs animate-pulse transition-colors duration-700
                        ${isDarkMode ? "text-rose-400/60" : "text-[#5B9BD5]/60"}
                      `}
                    >
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-40 transition-colors duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-rose-400 to-red-400"
                          : "bg-gradient-to-r from-[#5B9BD5] to-[#4682B4]"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-br from-rose-900/30 to-[#0a1f2e]/95 border border-rose-400/40"
                          : "bg-gradient-to-br from-[#5B9BD5]/20 to-[#0a1f2e]/95 border border-[#5B9BD5]/40"
                      }
                    `}
                  >
                    <div className="space-y-2 text-left">
                      <div
                        className={`
                          flex items-center gap-2 mb-3 transition-colors duration-700
                          ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                        `}
                      >
                        <Briefcase className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Rôles principaux
                        </span>
                      </div>

                      <div className="space-y-2 text-xs text-white/90">
                        <div className="flex items-start gap-2">
                          <div
                            className={`
                              w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-700
                              ${isDarkMode ? "bg-rose-400" : "bg-[#5B9BD5]"}
                            `}
                          ></div>
                          <span>Chirurgien-Dentiste & Manager</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div
                            className={`
                              w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-700
                              ${isDarkMode ? "bg-rose-400" : "bg-[#5B9BD5]"}
                            `}
                          ></div>
                          <span>Chef de Projet E-Santé</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div
                            className={`
                              w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-700
                              ${isDarkMode ? "bg-rose-400" : "bg-[#5B9BD5]"}
                            `}
                          ></div>
                          <span>Consultant Médical</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div
                            className={`
                              w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-700
                              ${isDarkMode ? "bg-rose-400" : "bg-[#5B9BD5]"}
                            `}
                          ></div>
                          <span>Développeur Full-Stack</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 3 - Domaines d'expertise */}
            <div
              className="group relative h-[280px] [perspective:1000px] cursor-pointer"
              onClick={() => toggleStatCard(2)}
            >
              <div
                className={`
                  relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]
                  ${
                    flippedCard === 2
                      ? "[transform:rotateY(180deg)]"
                      : "lg:group-hover:[transform:rotateY(180deg)]"
                  }
                `}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-40
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-pink-500 to-rose-500"
                          : "bg-gradient-to-r from-purple-500 to-violet-500"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl
                      rounded-2xl p-8 text-center flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "border border-pink-400/20"
                          : "border border-purple-400/20"
                      }
                    `}
                  >
                    <div
                      className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
                        transition-colors duration-700
                        ${isDarkMode ? "bg-pink-500/20" : "bg-purple-500/20"}
                      `}
                    >
                      <Target
                        className={`
                          w-8 h-8 transition-colors duration-700
                          ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                        `}
                      />
                    </div>

                    <div
                      className={`
                        text-4xl md:text-5xl font-bold mb-2 transition-colors duration-700
                        ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                      `}
                    >
                      3
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Domaines d'expertise
                    </div>

                    <div
                      className={`
                        mt-4 text-xs animate-pulse transition-colors duration-700
                        ${
                          isDarkMode ? "text-pink-400/60" : "text-purple-400/60"
                        }
                      `}
                    >
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-40 transition-colors duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-pink-500 to-rose-500"
                          : "bg-gradient-to-r from-purple-500 to-violet-500"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-br from-pink-900/40 to-[#0a1f2e]/95 border border-pink-400/40"
                          : "bg-gradient-to-br from-purple-900/40 to-[#0a1f2e]/95 border border-purple-400/40"
                      }
                    `}
                  >
                    <div className="space-y-3 text-left">
                      <div
                        className={`
                          flex items-center gap-2 mb-3 transition-colors duration-700
                          ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                        `}
                      >
                        <Target className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Expertise croisée
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div
                          className={`
                            rounded-lg p-3 transition-colors duration-700
                            ${
                              isDarkMode
                                ? "bg-pink-500/10 border border-pink-400/20"
                                : "bg-purple-500/10 border border-purple-400/20"
                            }
                          `}
                        >
                          <div
                            className={`
                              font-semibold text-sm mb-1 transition-colors duration-700
                              ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                            `}
                          >
                            🦷 Dentisterie
                          </div>
                          <div className="text-xs text-white/70">
                            Pratique clinique & chirurgie
                          </div>
                        </div>

                        <div
                          className={`
                            rounded-lg p-3 transition-colors duration-700
                            ${
                              isDarkMode
                                ? "bg-pink-500/10 border border-pink-400/20"
                                : "bg-purple-500/10 border border-purple-400/20"
                            }
                          `}
                        >
                          <div
                            className={`
                              font-semibold text-sm mb-1 transition-colors duration-700
                              ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                            `}
                          >
                            🏥 Santé Publique
                          </div>
                          <div className="text-xs text-white/70">
                            Projets communautaires
                          </div>
                        </div>

                        <div
                          className={`
                            rounded-lg p-3 transition-colors duration-700
                            ${
                              isDarkMode
                                ? "bg-pink-500/10 border border-pink-400/20"
                                : "bg-purple-500/10 border border-purple-400/20"
                            }
                          `}
                        >
                          <div
                            className={`
                              font-semibold text-sm mb-1 transition-colors duration-700
                              ${isDarkMode ? "text-pink-300" : "text-purple-300"}
                            `}
                          >
                            💻 Informatique
                          </div>
                          <div className="text-xs text-white/70">
                            Développement E-Health
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 4 - Projets Tech */}
            <div
              className="group relative h-[280px] [perspective:1000px] cursor-pointer"
              onClick={() => toggleStatCard(3)}
            >
              <div
                className={`
                  relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]
                  ${
                    flippedCard === 3
                      ? "[transform:rotateY(180deg)]"
                      : "lg:group-hover:[transform:rotateY(180deg)]"
                  }
                `}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover:opacity-40
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-rose-400 to-red-400"
                          : "bg-gradient-to-r from-[#5B9BD5] to-[#4682B4]"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl
                      rounded-2xl p-8 text-center flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "border border-rose-400/20"
                          : "border border-[#5B9BD5]/20"
                      }
                    `}
                  >
                    <div
                      className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
                        transition-colors duration-700
                        ${isDarkMode ? "bg-rose-400/20" : "bg-[#5B9BD5]/20"}
                      `}
                    >
                      <Code
                        className={`
                          w-8 h-8 transition-colors duration-700
                          ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                        `}
                      />
                    </div>

                    <div
                      className={`
                        text-4xl md:text-5xl font-bold mb-2 transition-colors duration-700
                        ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                      `}
                    >
                      35+
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Projets Informatiques
                    </div>

                    <div
                      className={`
                        mt-4 text-xs animate-pulse transition-colors duration-700
                        ${isDarkMode ? "text-rose-400/60" : "text-[#5B9BD5]/60"}
                      `}
                    >
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl blur-xl opacity-40 transition-colors duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-r from-rose-400 to-red-400"
                          : "bg-gradient-to-r from-[#5B9BD5] to-[#4682B4]"
                      }
                    `}
                  ></div>

                  <div
                    className={`
                      relative h-full backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center
                      transition-all duration-700
                      ${
                        isDarkMode
                          ? "bg-gradient-to-br from-rose-900/30 to-[#0a1f2e]/95 border border-rose-400/40"
                          : "bg-gradient-to-br from-[#5B9BD5]/20 to-[#0a1f2e]/95 border border-[#5B9BD5]/40"
                      }
                    `}
                  >
                    <div className="space-y-3 text-left">
                      <div
                        className={`
                          flex items-center gap-2 mb-3 transition-colors duration-700
                          ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                        `}
                      >
                        <Code className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Portfolio Tech
                        </span>
                      </div>

                      <div className="text-white/90 space-y-2 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Apps E-Health</span>
                          <span
                            className={`
                              font-bold transition-colors duration-700
                              ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                            `}
                          >
                            18
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">
                            Systèmes gestion
                          </span>
                          <span
                            className={`
                              font-bold transition-colors duration-700
                              ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                            `}
                          >
                            14
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Outils collecte</span>
                          <span
                            className={`
                              font-bold transition-colors duration-700
                              ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                            `}
                          >
                            3
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-white/60 font-semibold">
                            Total
                          </span>
                          <span
                            className={`
                              font-bold text-xl transition-colors duration-700
                              ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
                            `}
                          >
                            35+
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 text-xs text-white/60 italic">
                        🚀 Solutions tech pour la santé
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
