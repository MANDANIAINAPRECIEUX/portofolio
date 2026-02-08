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

const Experiences = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null); // ← Nouveau state pour les stats

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

  // ← Nouvelle fonction pour toggle les cartes stats
  const toggleStatCard = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            <span className="inline-flex items-center gap-4 bg-gradient-to-r from-[#f1f1f1] via-purple-300 to-[#f1f1f1] bg-clip-text text-transparent">
              <Briefcase className="w-12 h-12 md:w-14 md:h-14 text-purple-400" />
              Expériences Professionnelles
            </span>
          </h2>

          {/* Ligne de séparation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#5B9BD5]"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-[#5B9BD5] via-purple-400 to-[#5B9BD5]"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#5B9BD5]"></div>
          </div>

          {/* Sous-titre */}
          <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
            Plus de{" "}
            <span className="text-purple-400 font-semibold">
              13 ans d'expérience
            </span>{" "}
            combinant expertise médicale, gestion de projet et développement
            logiciel
          </p>
        </div>

        {/* Timeline centrale avec cards alternées */}
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-[#5B9BD5] to-purple-400 -translate-x-1/2 hidden lg:block"></div>

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
                    className={`hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full shadow-lg z-20 transition-all duration-300 ${
                      isOpen
                        ? "scale-125 bg-gradient-to-br from-purple-400 to-[#5B9BD5]"
                        : "scale-100 bg-white/20"
                    }`}
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
                        className={`absolute -inset-1 bg-gradient-to-r ${
                          isPurple
                            ? "from-purple-500 via-violet-500 to-purple-500"
                            : "from-[#5B9BD5] via-[#4682B4] to-[#5B9BD5]"
                        } rounded-2xl blur-xl transition-opacity duration-500 ${
                          isOpen ? "opacity-40" : "opacity-20"
                        } group-hover:opacity-40`}
                      ></div>

                      {/* Card content */}
                      <div
                        className={`relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "border-white/20"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        {/* En-tête cliquable */}
                        <div className="p-6 md:p-8 flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-3">
                            {/* Badge + Icône */}
                            <div className="flex items-center gap-3 flex-wrap">
                              <div
                                className={`p-2 rounded-lg ${
                                  isPurple
                                    ? "bg-purple-500/20"
                                    : "bg-[#5B9BD5]/20"
                                }`}
                              >
                                <Icon
                                  className={`w-5 h-5 ${
                                    isPurple
                                      ? "text-purple-400"
                                      : "text-[#5B9BD5]"
                                  }`}
                                />
                              </div>
                              <span
                                className={`text-xs font-semibold uppercase tracking-wider ${
                                  isPurple
                                    ? "text-purple-300"
                                    : "text-[#5B9BD5]"
                                }`}
                              >
                                {exp.type}
                              </span>
                            </div>

                            {/* Titre principal */}
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                              {exp.title}
                            </h3>

                            {/* Entreprise */}
                            <p className="text-sm md:text-base font-medium text-white/70">
                              {exp.company}
                            </p>
                          </div>

                          {/* Icône chevron */}
                          <div
                            className={`flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <ChevronDown
                              className={`w-6 h-6 ${
                                isPurple ? "text-purple-400" : "text-[#5B9BD5]"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Détails dépliables */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "max-h-[800px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                            {/* Séparateur */}
                            <div
                              className={`h-[1px] bg-gradient-to-r ${
                                isPurple
                                  ? "from-transparent via-purple-400/30 to-transparent"
                                  : "from-transparent via-[#5B9BD5]/30 to-transparent"
                              }`}
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
                                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                      isPurple
                                        ? "text-purple-400"
                                        : "text-[#5B9BD5]"
                                    } group-hover/mission:scale-110 transition-transform duration-300`}
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
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-[#5B9BD5] rounded-full mx-auto"></div>
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
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCard === 0
                    ? "[transform:rotateY(180deg)]"
                    : "lg:group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 text-center flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4 mx-auto">
                      <Calendar className="w-8 h-8 text-purple-400" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                      13
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Années d'expérience
                    </div>

                    <div className="mt-4 text-xs text-purple-400/60 animate-pulse">
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur-xl opacity-40"></div>

                  <div className="relative h-full bg-gradient-to-br from-purple-900/40 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-purple-400/40 p-6 flex flex-col justify-center">
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2 text-purple-300 mb-3">
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Parcours professionnel
                        </span>
                      </div>

                      <div className="text-white/90 space-y-2 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Total</span>
                          <span className="font-bold text-purple-400">
                            13 ans
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Santé (2013)</span>
                          <span className="font-bold text-purple-400">
                            13 ans
                          </span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">
                            Informatique (2024)
                          </span>
                          <span className="font-bold text-[#5B9BD5]">
                            3 ans
                          </span>
                        </div>
                        <div className="mt-3 text-xs text-white/60 italic">
                          Expertise médicale enrichie par la tech 💻
                        </div>
                      </div>

                      <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden flex">
                        <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-[77%]"></div>
                        <div className="h-full bg-gradient-to-r from-[#5B9BD5] to-[#4682B4] w-[23%]"></div>
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
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCard === 1
                    ? "[transform:rotateY(180deg)]"
                    : "lg:group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5] to-[#4682B4] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-[#5B9BD5]/20 p-8 text-center flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5B9BD5]/20 mb-4 mx-auto">
                      <Briefcase className="w-8 h-8 text-[#5B9BD5]" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-[#5B9BD5] mb-2">
                      4
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Postes clés
                    </div>

                    <div className="mt-4 text-xs text-[#5B9BD5]/60 animate-pulse">
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5] to-[#4682B4] rounded-2xl blur-xl opacity-40"></div>

                  <div className="relative h-full bg-gradient-to-br from-[#5B9BD5]/20 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-[#5B9BD5]/40 p-6 flex flex-col justify-center">
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 text-[#5B9BD5] mb-3">
                        <Briefcase className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Rôles principaux
                        </span>
                      </div>

                      <div className="space-y-2 text-xs text-white/90">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5] mt-1.5 flex-shrink-0"></div>
                          <span>Chirurgien-Dentiste & Manager</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5] mt-1.5 flex-shrink-0"></div>
                          <span>Chef de Projet E-Santé</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5] mt-1.5 flex-shrink-0"></div>
                          <span>Consultant Médical</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5B9BD5] mt-1.5 flex-shrink-0"></div>
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
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCard === 2
                    ? "[transform:rotateY(180deg)]"
                    : "lg:group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-8 text-center flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4 mx-auto">
                      <Target className="w-8 h-8 text-purple-400" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                      3
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Domaines d'expertise
                    </div>

                    <div className="mt-4 text-xs text-purple-400/60 animate-pulse">
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur-xl opacity-40"></div>

                  <div className="relative h-full bg-gradient-to-br from-purple-900/40 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-purple-400/40 p-6 flex flex-col justify-center">
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2 text-purple-300 mb-3">
                        <Target className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Expertise croisée
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-400/20">
                          <div className="font-semibold text-purple-300 text-sm mb-1">
                            🦷 Dentisterie
                          </div>
                          <div className="text-xs text-white/70">
                            Pratique clinique & chirurgie
                          </div>
                        </div>

                        <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-400/20">
                          <div className="font-semibold text-purple-300 text-sm mb-1">
                            🏥 Santé Publique
                          </div>
                          <div className="text-xs text-white/70">
                            Projets communautaires
                          </div>
                        </div>

                        <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-400/20">
                          <div className="font-semibold text-purple-300 text-sm mb-1">
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
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCard === 3
                    ? "[transform:rotateY(180deg)]"
                    : "lg:group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Face avant */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5] to-[#4682B4] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="relative h-full bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-[#5B9BD5]/20 p-8 text-center flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5B9BD5]/20 mb-4 mx-auto">
                      <Code className="w-8 h-8 text-[#5B9BD5]" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-[#5B9BD5] mb-2">
                      35+
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      Projets Informatiques
                    </div>

                    <div className="mt-4 text-xs text-[#5B9BD5]/60 animate-pulse">
                      <span className="hidden lg:inline">
                        Survolez pour détails ›
                      </span>
                      <span className="lg:hidden">Appuyez pour détails ›</span>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5] to-[#4682B4] rounded-2xl blur-xl opacity-40"></div>

                  <div className="relative h-full bg-gradient-to-br from-[#5B9BD5]/20 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-[#5B9BD5]/40 p-6 flex flex-col justify-center">
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2 text-[#5B9BD5] mb-3">
                        <Code className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          Portfolio Tech
                        </span>
                      </div>

                      <div className="text-white/90 space-y-2 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Apps E-Health</span>
                          <span className="font-bold text-[#5B9BD5]">18</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">
                            Systèmes gestion
                          </span>
                          <span className="font-bold text-[#5B9BD5]">14</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-white/10">
                          <span className="text-white/60">Outils collecte</span>
                          <span className="font-bold text-[#5B9BD5]">3</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-white/60 font-semibold">
                            Total
                          </span>
                          <span className="font-bold text-[#5B9BD5] text-xl">
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
