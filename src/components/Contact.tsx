"use client";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Github,
  MessageSquare,
  User,
  AtSign,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire ici
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mandaniainaprecieux@gmail.com",
    href: "mailto:mandaniainaprecieux@gmail.com",
    color: "purple"
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 34 61 223 35",
    href: "tel:+261346122335",
    color: "blue"
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Tuléar, Madagascar",
    href: "#",
    color: "purple"
  }
];


 const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/andriamiarison-mandaniaina-precieux",
    color: "from-[#0077B5] to-[#00A0DC]"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MANDANIAINAPRECIEUX",
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    href: "https://wa.me/261346122335",
    color: "from-[#25D366] to-[#128C7E]"
  }
];


  return (
    <div className="w-full py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5B9BD5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#f1f1f1] via-purple-300 to-[#f1f1f1] bg-clip-text text-transparent">
              Me Contacter
            </h2>
            <Sparkles className="w-8 h-8 text-[#5B9BD5] animate-pulse" />
          </div>
          
          {/* Ligne de séparation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
            <div className="h-[2px] w-32 md:w-48 bg-gradient-to-r from-purple-400 via-[#5B9BD5] to-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-[#5B9BD5] shadow-lg shadow-[#5B9BD5]/50"></div>
            <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#5B9BD5]"></div>
          </div>
          
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter. 
            <span className="text-purple-400 font-semibold"> Je réponds sous 24h</span> ⚡
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne gauche - Informations de contact */}
          <div className="space-y-8">
            
            {/* Titre */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Restons connectés 🤝
              </h3>
              <p className="text-white/70">
                Que ce soit pour discuter d'un projet, d'une collaboration ou simplement échanger, 
                je suis toujours disponible !
              </p>
            </div>

            {/* Cartes d'information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isPurple = info.color === "purple";
                
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group block relative"
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${
                      isPurple 
                        ? "from-purple-500 to-violet-500" 
                        : "from-[#5B9BD5] to-[#4682B4]"
                    } rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Card */}
                    <div className={`relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-xl border ${
                      isPurple 
                        ? "border-purple-400/20 group-hover:border-purple-400/40" 
                        : "border-[#5B9BD5]/20 group-hover:border-[#5B9BD5]/40"
                    } p-6 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1`}>
                      <div className="flex items-center gap-4">
                        {/* Icône */}
                        <div className={`p-3 rounded-lg ${
                          isPurple 
                            ? "bg-purple-500/20 group-hover:bg-purple-500/30" 
                            : "bg-[#5B9BD5]/20 group-hover:bg-[#5B9BD5]/30"
                        } transition-colors duration-300`}>
                          <Icon className={`w-6 h-6 ${
                            isPurple ? "text-purple-400" : "text-[#5B9BD5]"
                          }`} />
                        </div>
                        
                        {/* Texte */}
                        <div className="flex-1">
                          <div className="text-sm text-white/60 mb-1">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                            {info.value}
                          </div>
                        </div>
                        
                        {/* Flèche */}
                        <Send className={`w-5 h-5 ${
                          isPurple ? "text-purple-400" : "text-[#5B9BD5]"
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Suivez-moi également sur
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      {/* Glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      
                      {/* Button */}
                      <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-white/30 p-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                        <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Badge de disponibilité */}
         
          </div>

          {/* Colonne droite - Formulaire de contact */}
          <div className="relative">
            {/* Glow effect du formulaire */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-2xl blur-xl opacity-20"></div>
            
            {/* Card du formulaire */}
            <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              
              {isSubmitted ? (
                // Message de succès
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message envoyé avec succès ! 🎉
                  </h3>
                  <p className="text-white/70">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nom */}
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "name" || formData.name 
                          ? "-top-2 text-xs bg-[#0a1f2e] px-2 text-purple-400" 
                          : "top-4 text-sm text-white/50"
                      }`}
                    >
                      Votre nom
                    </label>
                    <div className="relative">
                      <User className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "name" ? "text-purple-400" : "text-white/30"
                      }`} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "email" || formData.email 
                          ? "-top-2 text-xs bg-[#0a1f2e] px-2 text-purple-400" 
                          : "top-4 text-sm text-white/50"
                      }`}
                    >
                      Votre email
                    </label>
                    <div className="relative">
                      <AtSign className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "email" ? "text-purple-400" : "text-white/30"
                      }`} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="relative">
                    <label 
                      htmlFor="subject" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "subject" || formData.subject 
                          ? "-top-2 text-xs bg-[#0a1f2e] px-2 text-purple-400" 
                          : "top-4 text-sm text-white/50"
                      }`}
                    >
                      Sujet
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "subject" ? "text-purple-400" : "text-white/30"
                      }`} />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "message" || formData.message 
                          ? "-top-2 text-xs bg-[#0a1f2e] px-2 text-purple-400" 
                          : "top-4 text-sm text-white/50"
                      }`}
                    >
                      Votre message
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                        focusedField === "message" ? "text-purple-400" : "text-white/30"
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    className="group relative w-full"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Button */}
                    <div className="relative bg-gradient-to-r from-purple-500 to-[#5B9BD5] rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-semibold text-lg">Envoyer le message</span>
                      <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
