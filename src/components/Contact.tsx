"use client";
import {
  Mail,
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
import emailjs from "@emailjs/browser";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log("🚀 DÉBUT DE L'ENVOI");
    console.log("📝 Données du formulaire:", formData);

    try {
      console.log("📤 Envoi vers EmailJS...");

      const result = await emailjs.send(
        "service_95xdnni",
        "template_o6vnq4e",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "BNkwaqkgFyKfYQVhk",
      );

      console.log("✅ SUCCÈS! Réponse EmailJS:", result);
      console.log("Status:", result.status);
      console.log("Text:", result.text);

      setIsSubmitted(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error("❌ ERREUR COMPLÈTE:", err);
      console.error("Type d'erreur:", typeof err);
      console.error("Détails:", JSON.stringify(err, null, 2));
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      setIsLoading(false);
    }
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
    <div className="w-full py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5B9BD5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#f1f1f1] via-purple-300 to-[#f1f1f1] bg-clip-text text-transparent">
              Me Contacter
            </h2>
            <Sparkles className="w-10 h-10 text-[#5B9BD5] animate-pulse" />
          </div>

          {/* Ligne de séparation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-[2px] w-20 md:w-32 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
            <div className="h-[2px] w-40 md:w-64 bg-gradient-to-r from-purple-400 via-[#5B9BD5] to-purple-400"></div>
            <div className="w-3 h-3 rounded-full bg-[#5B9BD5] shadow-lg shadow-[#5B9BD5]/50"></div>
            <div className="h-[2px] w-20 md:w-32 bg-gradient-to-l from-transparent to-[#5B9BD5]"></div>
          </div>

          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Une question ? Un projet ? N'hésitez pas à me contacter.
            <span className="text-purple-400 font-semibold">
              {" "}
              Je réponds sous 24h
            </span>{" "}
            ⚡
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Colonne gauche - Informations et CTA */}
          <div className="space-y-10">
            {/* Titre */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Restons connectés 🤝
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                Que ce soit pour discuter d'un projet, d'une collaboration ou
                simplement échanger, je suis toujours disponible !
              </p>
            </div>

            {/* Liens sociaux (LinkedIn, GitHub, WhatsApp) */}
            <div className="space-y-5">
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
                      className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/30 p-7 transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                      <div className="flex items-center gap-5">
                        {/* Icône */}
                        <div
                          className={`p-4 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Texte */}
                        <div className="flex-1">
                          <div className="text-sm text-white/50 mb-1.5">
                            {info.label}
                          </div>
                          <div className="text-base md:text-lg text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
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
              className="group relative w-full mt-12"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

              {/* Button */}
              <div className="relative bg-gradient-to-r from-purple-500 to-[#5B9BD5] rounded-2xl px-10 py-6 flex items-center justify-center gap-4 group-hover:scale-105 transition-transform duration-300 shadow-2xl">
                <Mail className="w-7 h-7 text-white" />
                <span className="text-white font-bold text-2xl">
                  Contactez-moi
                </span>
                <Send className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Colonne droite - Image cartoon */}
          <div className="relative group">
            {/* Glow effect subtil */}
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-[#5B9BD5]/20 to-purple-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

            {/* Container image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#172033]/30 to-[#0a1f2e]/30 backdrop-blur-sm border border-white/10 p-4 group-hover:border-white/20 transition-all duration-300">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/photos/cartoon.png"
                  alt="Mandaniaina Precieux - Cartoon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Décorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#5B9BD5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Modal du formulaire */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8">
            {/* Bouton de fermeture - VERSION AMÉLIORÉE */}
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer le formulaire de contact"
              className="absolute -top-3 -right-3 z-20 p-3 bg-white hover:bg-gray-100 rounded-full shadow-2xl transition-all duration-300 group hover:scale-110 border-2 border-gray-200"
            >
              <X className="w-6 h-6 text-gray-800 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Glow effect du formulaire */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-3xl blur-2xl opacity-50"></div>

            {/* Card du formulaire */}
            <div className="relative bg-gradient-to-br from-[#172033] to-[#0a1f2e] backdrop-blur-xl rounded-3xl border border-white/20 p-10 md:p-12">
              {/* Titre du modal */}
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white mb-3">
                  Envoyez-moi un message 📨
                </h3>
                <p className="text-lg text-white/70">
                  Je vous répondrai dans les plus brefs délais
                </p>
              </div>

              {isSubmitted ? (
                // Message de succès
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-500/20 mb-8 animate-bounce">
                    <CheckCircle2 className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Message envoyé avec succès ! 🎉
                  </h3>
                  <p className="text-lg text-white/70">
                    Merci pour votre message. Je vous répondrai dans les plus
                    brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Nom */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-14 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === "name" || formData.name
                          ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                          : "top-5 text-base text-white/50"
                      }`}
                    >
                      Votre nom
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 flex items-center justify-center w-8">
                        <User
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "name"
                              ? "text-purple-400"
                              : "text-white/30"
                          }`}
                        />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white text-base focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-14 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === "email" || formData.email
                          ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                          : "top-5 text-base text-white/50"
                      }`}
                    >
                      Votre email
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 flex items-center justify-center w-8">
                        <AtSign
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-purple-400"
                              : "text-white/30"
                          }`}
                        />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white text-base focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className={`absolute left-14 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === "subject" || formData.subject
                          ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                          : "top-5 text-base text-white/50"
                      }`}
                    >
                      Sujet
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 flex items-center justify-center w-8">
                        <Mail
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "subject"
                              ? "text-purple-400"
                              : "text-white/30"
                          }`}
                        />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white text-base focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-14 transition-all duration-300 pointer-events-none z-10 ${
                        focusedField === "message" || formData.message
                          ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                          : "top-5 text-base text-white/50"
                      }`}
                    >
                      Votre message
                    </label>
                    <div className="relative">
                      <div className="absolute left-5 top-5 flex items-center justify-center w-8">
                        <MessageSquare
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "message"
                              ? "text-purple-400"
                              : "text-white/30"
                          }`}
                        />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-5 py-5 text-white text-base focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Bouton d'envoi */}
                  <button type="submit" className="group relative w-full mt-8">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Button */}
                    <div className="relative bg-gradient-to-r from-purple-500 to-[#5B9BD5] rounded-2xl px-10 py-5 flex items-center justify-center gap-4 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">
                        Envoyer le message
                      </span>
                      <Send className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
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
