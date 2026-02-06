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
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsModalOpen(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Andriamiarison Mandaniaina",
      href: "https://linkedin.com/in/andriamiarison-mandaniaina-precieux",
      color: "from-[#0077B5] to-[#00A0DC]",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MANDANIAINAPRECIEUX",
      href: "https://github.com/MANDANIAINAPRECIEUX",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+261 34 61 223 35",
      href: "https://wa.me/261346122335",
      color: "from-[#25D366] to-[#128C7E]",
    },
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
            <span className="text-purple-400 font-semibold">
              {" "}
              Je réponds sous 24h
            </span>{" "}
            ⚡
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Informations et CTA */}
          <div className="space-y-8">
            {/* Titre */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Restons connectés 🤝
              </h3>
              <p className="text-white/70">
                Que ce soit pour discuter d'un projet, d'une collaboration ou
                simplement échanger, je suis toujours disponible !
              </p>
            </div>

            {/* Liens sociaux (LinkedIn, GitHub, WhatsApp) */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative"
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-white/30 p-6 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                      <div className="flex items-center gap-4">
                        {/* Icône */}
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${info.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Texte */}
                        <div className="flex-1">
                          <div className="text-sm text-white/60 mb-1">
                            {info.label}
                          </div>
                          <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                            {info.value}
                          </div>
                        </div>

                        {/* Flèche */}
                        <Send className="w-5 h-5 text-white/50 group-hover:text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bouton "Contactez-moi" */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

              {/* Button */}
              <div className="relative bg-gradient-to-r from-purple-500 to-[#5B9BD5] rounded-xl px-8 py-5 flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-xl">
                  Contactez-moi
                </span>
                <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            
          </div>

          {/* Colonne droite - Image cartoon */}
          <div className="relative group">
             {/* Container image */}

            <img
              src="/photos/cartoon.png"
              alt="Mandaniaina Precieux - Cartoon"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Décorations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5B9BD5]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Modal du formulaire */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer le formulaire de contact"
              className="absolute -top-4 -right-4 z-10 p-3 bg-red-500/20 hover:bg-red-500/40 rounded-full border border-red-400/30 hover:border-red-400/60 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-red-400 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Glow effect du formulaire */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-2xl blur-xl opacity-50"></div>

            {/* Card du formulaire */}
            <div className="relative bg-gradient-to-br from-[#172033] to-[#0a1f2e] backdrop-blur-xl rounded-2xl border border-white/20 p-8">
              {/* Titre du modal */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Envoyez-moi un message 📨
                </h3>
                <p className="text-white/70">
                  Je vous répondrai dans les plus brefs délais
                </p>
              </div>

              {isSubmitted ? (
                // Message de succès
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message envoyé avec succès ! 🎉
                  </h3>
                  <p className="text-white/70">
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais.
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
                      <User
                        className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "name"
                            ? "text-purple-400"
                            : "text-white/30"
                        }`}
                      />
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
                      <AtSign
                        className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "email"
                            ? "text-purple-400"
                            : "text-white/30"
                        }`}
                      />
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
                      <Mail
                        className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "subject"
                            ? "text-purple-400"
                            : "text-white/30"
                        }`}
                      />
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
                      <MessageSquare
                        className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "message"
                            ? "text-purple-400"
                            : "text-white/30"
                        }`}
                      />
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
                  <button type="submit" className="group relative w-full">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Button */}
                    <div className="relative bg-gradient-to-r from-purple-500 to-[#5B9BD5] rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-semibold text-lg">
                        Envoyer le message
                      </span>
                      <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
