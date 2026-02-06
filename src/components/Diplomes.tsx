import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Diplomes = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
            <span className="inline-flex items-center gap-4 bg-gradient-to-r from-[#f1f1f1] via-purple-300 to-[#f1f1f1] bg-clip-text text-transparent">
              <GraduationCap className="w-12 h-12 md:w-14 md:h-14 text-purple-400" />
              Parcours Académique
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
        </div>

        <div className="space-y-8">
          
          {/* SECTION INFORMATIQUE */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-3xl border border-purple-400/30 shadow-2xl overflow-hidden p-8 md:p-12">
              
              {/* Effet brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Titre section */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-purple-500/20">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Informatique & Technologies
                </h3>
              </div>

              {/* Timeline */}
              <div className="relative space-y-8 ml-6">
                {/* Ligne verticale */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-[#5B9BD5] to-purple-400"></div>

                {/* Licence Informatique */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse"></div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-sm font-semibold">
                        2024
                      </span>
                      <span className="text-xs text-white/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        En cours
                      </span>
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-white">
                      Licence en Informatique
                    </h4>
                    
                    <p className="text-[#5B9BD5] font-medium flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      École Nationale d'Informatique (ENI) - Fianarantsoa
                    </p>
                    
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Formation d'ingénieur en développement logiciel et systèmes informatiques. 
                      Spécialisation en développement full-stack et architecture applicative.
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#5B9BD5] shadow-lg shadow-[#5B9BD5]/50"></div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-purple-400" />
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        Certifications Professionnelles
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Certificat 1 */}
                      <div className="group/cert p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-white">Apprendre Ruby</p>
                            <p className="text-sm text-white/60">Grafikart.fr - CURSA</p>
                          </div>
                        </div>
                      </div>

                      {/* Certificat 2 */}
                      <div className="group/cert p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-white">Getting Started with DevOps on AWS</p>
                            <p className="text-sm text-white/60">AWS Training & Certification</p>
                          </div>
                        </div>
                      </div>

                      {/* Certificat 3 */}
                      <div className="group/cert p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-semibold text-white">Build and Deploy APIs with Serverless CI/CD</p>
                            <p className="text-sm text-white/60">AWS Training & Certification</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION SANTÉ */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5] via-purple-500 to-[#5B9BD5] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-3xl border border-[#5B9BD5]/30 shadow-2xl overflow-hidden p-8 md:p-12">
              
              {/* Effet brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Titre section */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-[#5B9BD5]/20">
                  <BookOpen className="w-8 h-8 text-[#5B9BD5]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Santé & Sciences Médicales
                </h3>
              </div>

              {/* Timeline */}
              <div className="relative space-y-8 ml-6">
                {/* Ligne verticale */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5B9BD5] via-purple-400 to-[#5B9BD5]"></div>

                {/* Master Santé Publique */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#5B9BD5] shadow-lg shadow-[#5B9BD5]/50"></div>
                  
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-lg bg-[#5B9BD5]/20 text-[#5B9BD5] text-sm font-semibold">
                      2022
                    </span>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-white">
                      Master en Santé Publique
                    </h4>
                    
                    <p className="text-purple-300 font-medium flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Institut d'Odontostomatologie Tropicale de Madagascar (IOSTM)
                    </p>
                    
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Spécialisation en gestion des systèmes de santé et politiques sanitaires. 
                      Expertise en épidémiologie et santé communautaire.
                    </p>
                  </div>
                </div>

                {/* Doctorat */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
                  
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-sm font-semibold">
                      2013
                    </span>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-white">
                      Doctorat en Chirurgie Dentaire
                    </h4>
                    
                    <p className="text-purple-300 font-medium flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Institut d'Odontostomatologie Tropicale de Madagascar (IOSTM)
                    </p>
                    
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Formation médicale complète en soins dentaires et chirurgie maxillo-faciale. 
                      Développement de compétences en diagnostic, rigueur scientifique et approche patient.
                    </p>
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

export default Diplomes;
