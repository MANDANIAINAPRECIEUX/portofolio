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

interface ContactProps {
  isDarkMode: boolean;
  language: "fr" | "en";
}

const Contact = ({ isDarkMode, language }: ContactProps) => {
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

  // Traductions
  const translations = {
    fr: {
      title: "Me Contacter",
      subtitle: "Une question ? Un projet ? N'hésitez pas à me contacter.",
      response: "Je réponds sous 24h",
      stayConnected: "Restons connectés 🤝",
      description:
        "Que ce soit pour discuter d'un projet, d'une collaboration ou simplement échanger, je suis toujours disponible !",
      contactMe: "Contactez-moi",
      modalTitle: "Envoyez-moi un message 📨",
      modalSubtitle: "Je vous répondrai dans les plus brefs délais",
      successTitle: "Message envoyé avec succès ! 🎉",
      successMessage:
        "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      errorMessage:
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      form: {
        name: "Votre nom",
        email: "Votre email",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message",
      },
      contactInfo: {
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
      },
    },
    en: {
      title: "Contact Me",
      subtitle: "A question? A project? Don't hesitate to contact me.",
      response: "I respond within 24h",
      stayConnected: "Let's stay connected 🤝",
      description:
        "Whether to discuss a project, a collaboration or simply exchange, I am always available!",
      contactMe: "Contact Me",
      modalTitle: "Send me a message 📨",
      modalSubtitle: "I will respond to you as soon as possible",
      successTitle: "Message sent successfully! 🎉",
      successMessage:
        "Thank you for your message. I will respond to you as soon as possible.",
      errorMessage: "An error occurred while sending. Please try again.",
      form: {
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Your message",
        send: "Send message",
      },
      contactInfo: {
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
      },
    },
  };

  const t = translations[language];

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

    try {
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

      console.log("✅ Email sent successfully:", result.status);

      setIsSubmitted(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error("❌ Email sending error:", err);
      setError(t.errorMessage);
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Linkedin,
      label: t.contactInfo.linkedin,
      value: "Andriamiarison Mandaniaina",
      href: "https://linkedin.com/in/andriamiarison-mandaniaina-precieux",
      color: "from-[#0077B5] to-[#00A0DC]",
    },
    {
      icon: Github,
      label: t.contactInfo.github,
      value: "MANDANIAINAPRECIEUX",
      href: "https://github.com/MANDANIAINAPRECIEUX",
      color: isDarkMode
        ? "from-pink-500 to-rose-600"
        : "from-purple-500 to-violet-600",
    },
    {
      icon: MessageSquare,
      label: t.contactInfo.whatsapp,
      value: "+261 34 61 223 35",
      href: "https://wa.me/261346122335",
      color: "from-[#25D366] to-[#128C7E]",
    },
  ];

  return (
    <div id="contact" className="w-full py-32 relative overflow-hidden">
      {/* Background effects */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-b from-transparent to-transparent
          transition-colors duration-700
          ${isDarkMode ? "via-pink-500/5" : "via-purple-500/5"}
        `}
      ></div>
      <div
        className={`
          absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse
          transition-colors duration-700
          ${isDarkMode ? "bg-pink-500/10" : "bg-purple-500/10"}
        `}
      ></div>
      <div
        className={`
          absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000
          transition-colors duration-700
          ${isDarkMode ? "bg-rose-400/10" : "bg-[#5B9BD5]/10"}
        `}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <Sparkles
              className={`
                w-10 h-10 animate-pulse transition-colors duration-700
                ${isDarkMode ? "text-pink-400" : "text-purple-400"}
              `}
            />
            <h2
              className={`
                text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent
                transition-all duration-700
                ${
                  isDarkMode
                    ? "from-[#f1f1f1] via-pink-300 to-[#f1f1f1]"
                    : "from-[#f1f1f1] via-purple-300 to-[#f1f1f1]"
                }
              `}
            >
              {t.title}
            </h2>
            <Sparkles
              className={`
                w-10 h-10 animate-pulse transition-colors duration-700
                ${isDarkMode ? "text-rose-400" : "text-[#5B9BD5]"}
              `}
            />
          </div>

          {/* Ligne de séparation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div
              className={`
                h-[2px] w-20 md:w-32 bg-gradient-to-r from-transparent
                transition-colors duration-700
                ${isDarkMode ? "to-pink-400" : "to-purple-400"}
              `}
            ></div>
            <div
              className={`
                w-3 h-3 rounded-full shadow-lg transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-pink-400 shadow-pink-400/50"
                    : "bg-purple-400 shadow-purple-400/50"
                }
              `}
            ></div>
            <div
              className={`
                h-[2px] w-40 md:w-64 bg-gradient-to-r transition-colors duration-700
                ${
                  isDarkMode
                    ? "from-pink-400 via-rose-400 to-pink-400"
                    : "from-purple-400 via-[#5B9BD5] to-purple-400"
                }
              `}
            ></div>
            <div
              className={`
                w-3 h-3 rounded-full shadow-lg transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-rose-400 shadow-rose-400/50"
                    : "bg-[#5B9BD5] shadow-[#5B9BD5]/50"
                }
              `}
            ></div>
            <div
              className={`
                h-[2px] w-20 md:w-32 bg-gradient-to-l from-transparent
                transition-colors duration-700
                ${isDarkMode ? "to-rose-400" : "to-[#5B9BD5]"}
              `}
            ></div>
          </div>

          <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
            <span
              className={`
                font-semibold transition-colors duration-700
                ${isDarkMode ? "text-pink-400" : "text-purple-400"}
              `}
            >
              {" "}
              {t.response}
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
                {t.stayConnected}
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                {t.description}
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
                    <div
                      className={`
                        absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl blur-xl
                        opacity-0 group-hover:opacity-40 transition-all duration-700
                      `}
                    ></div>

                    <div className="relative bg-gradient-to-br from-[#172033]/95 to-[#0a1f2e]/95 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/30 p-7 transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
                      <div className="flex items-center gap-5">
                        <div
                          className={`
                            p-4 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-20
                            group-hover:scale-110 transition-transform duration-300
                          `}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="text-sm text-white/50 mb-1.5">
                            {info.label}
                          </div>
                          <div
                            className={`
                              text-base md:text-lg text-white font-medium transition-colors duration-700
                              ${
                                isDarkMode
                                  ? "group-hover:text-pink-300"
                                  : "group-hover:text-purple-300"
                              }
                            `}
                          >
                            {info.value}
                          </div>
                        </div>

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
              <div
                className={`
                  absolute -inset-1 rounded-2xl blur-xl animate-pulse
                  opacity-50 group-hover:opacity-100 transition-all duration-700
                  ${
                    isDarkMode
                      ? "bg-gradient-to-r from-pink-500 via-rose-400 to-red-500"
                      : "bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500"
                  }
                `}
              ></div>

              <div
                className={`
                  relative rounded-2xl px-10 py-6 flex items-center justify-center gap-4
                  group-hover:scale-105 transition-all duration-700 shadow-2xl
                  ${
                    isDarkMode
                      ? "bg-gradient-to-r from-pink-500 to-rose-500"
                      : "bg-gradient-to-r from-purple-500 to-[#5B9BD5]"
                  }
                `}
              >
                <Mail className="w-7 h-7 text-white" />
                <span className="text-white font-bold text-2xl">
                  {t.contactMe}
                </span>
                <Send className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Colonne droite - Image cartoon */}
          <div className="relative group">
            <div
              className={`
                absolute -inset-6 rounded-3xl blur-3xl
                opacity-50 group-hover:opacity-75 transition-all duration-700
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-pink-500/20 via-rose-400/20 to-pink-500/20"
                    : "bg-gradient-to-r from-purple-500/20 via-[#5B9BD5]/20 to-purple-500/20"
                }
              `}
            ></div>

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#172033]/30 to-[#0a1f2e]/30 backdrop-blur-sm border border-white/10 p-4 group-hover:border-white/20 transition-all duration-300">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/photos/cartoon.png"
                  alt="Mandaniaina Precieux - Cartoon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div
              className={`
                absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl animate-pulse
                transition-colors duration-700
                ${isDarkMode ? "bg-pink-500/10" : "bg-purple-500/10"}
              `}
            ></div>
            <div
              className={`
                absolute -bottom-8 -left-8 w-40 h-40 rounded-full blur-3xl animate-pulse delay-1000
                transition-colors duration-700
                ${isDarkMode ? "bg-rose-400/10" : "bg-[#5B9BD5]/10"}
              `}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal du formulaire */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Fermer le formulaire de contact"
              className="absolute -top-3 -right-3 z-20 p-3 bg-white hover:bg-gray-100 rounded-full shadow-2xl transition-all duration-300 group hover:scale-110 border-2 border-gray-200"
            >
              <X className="w-6 h-6 text-gray-800 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div
              className={`
                absolute -inset-2 rounded-3xl blur-2xl opacity-50 transition-colors duration-700
                ${
                  isDarkMode
                    ? "bg-gradient-to-r from-pink-500 via-rose-400 to-red-500"
                    : "bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500"
                }
              `}
            ></div>

            <div className="relative bg-gradient-to-br from-[#172033] to-[#0a1f2e] backdrop-blur-xl rounded-3xl border border-white/20 p-10 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white mb-3">
                  {t.modalTitle}
                </h3>
                <p className="text-lg text-white/70">{t.modalSubtitle}</p>
              </div>

              {/* Affichage de l'erreur */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-400/50 text-red-300 text-sm">
                  {error}
                </div>
              )}

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div
                    className={`
                      inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 animate-bounce
                      transition-colors duration-700
                      ${isDarkMode ? "bg-pink-500/20" : "bg-purple-500/20"}
                    `}
                  >
                    <CheckCircle2
                      className={`
                        w-12 h-12 transition-colors duration-700
                        ${isDarkMode ? "text-pink-400" : "text-purple-400"}
                      `}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {t.successTitle}
                  </h3>
                  <p className="text-lg text-white/70">{t.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Nom */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`
                        absolute left-14 transition-all duration-700 pointer-events-none z-10
                        ${
                          focusedField === "name" || formData.name
                            ? isDarkMode
                              ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-pink-400 font-medium"
                              : "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                            : "top-5 text-base text-white/50"
                        }
                      `}
                    >
                      {t.form.name}
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 flex items-center justify-center w-8">
                        <User
                          className={`
                            w-5 h-5 transition-colors duration-700
                            ${
                              focusedField === "name"
                                ? isDarkMode
                                  ? "text-pink-400"
                                  : "text-purple-400"
                                : "text-white/30"
                            }
                          `}
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
                        className={`
                          w-full bg-white/5 border rounded-2xl pl-14 pr-5 py-5 text-white text-base
                          focus:outline-none focus:bg-white/10 transition-all duration-700
                          ${
                            focusedField === "name"
                              ? isDarkMode
                                ? "border-pink-400/50"
                                : "border-purple-400/50"
                              : "border-white/10"
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`
                        absolute left-14 transition-all duration-700 pointer-events-none z-10
                        ${
                          focusedField === "email" || formData.email
                            ? isDarkMode
                              ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-pink-400 font-medium"
                              : "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                            : "top-5 text-base text-white/50"
                        }
                      `}
                    >
                      {t.form.email}
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 flex items-center justify-center w-8">
                        <AtSign
                          className={`
                            w-5 h-5 transition-colors duration-700
                            ${
                              focusedField === "email"
                                ? isDarkMode
                                  ? "text-pink-400"
                                  : "text-purple-400"
                                : "text-white/30"
                            }
                          `}
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
                        className={`
                          w-full bg-white/5 border rounded-2xl pl-14 pr-5 py-5 text-white text-base
                          focus:outline-none focus:bg-white/10 transition-all duration-700
                          ${
                            focusedField === "email"
                              ? isDarkMode
                                ? "border-pink-400/50"
                                : "border-purple-400/50"
                              : "border-white/10"
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className={`
                        absolute left-14 transition-all duration-700 pointer-events-none z-10
                        ${
                          focusedField === "subject" || formData.subject
                            ? isDarkMode
                              ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-pink-400 font-medium"
                              : "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                            : "top-5 text-base text-white/50"
                        }
                      `}
                    >
                      {t.form.subject}
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-5 flex items-center justify-center w-8">
                        <Mail
                          className={`
                            w-5 h-5 transition-colors duration-700
                            ${
                              focusedField === "subject"
                                ? isDarkMode
                                  ? "text-pink-400"
                                  : "text-purple-400"
                                : "text-white/30"
                            }
                          `}
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
                        className={`
                          w-full bg-white/5 border rounded-2xl pl-14 pr-5 py-5 text-white text-base
                          focus:outline-none focus:bg-white/10 transition-all duration-700
                          ${
                            focusedField === "subject"
                              ? isDarkMode
                                ? "border-pink-400/50"
                                : "border-purple-400/50"
                              : "border-white/10"
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`
                        absolute left-14 transition-all duration-700 pointer-events-none z-10
                        ${
                          focusedField === "message" || formData.message
                            ? isDarkMode
                              ? "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-pink-400 font-medium"
                              : "-top-2.5 text-xs bg-[#0a1f2e] px-3 text-purple-400 font-medium"
                            : "top-5 text-base text-white/50"
                        }
                      `}
                    >
                      {t.form.message}
                    </label>
                    <div className="relative">
                      <div className="absolute left-5 top-5 flex items-center justify-center w-8">
                        <MessageSquare
                          className={`
                            w-5 h-5 transition-colors duration-700
                            ${
                              focusedField === "message"
                                ? isDarkMode
                                  ? "text-pink-400"
                                  : "text-purple-400"
                                : "text-white/30"
                            }
                          `}
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
                        className={`
                          w-full bg-white/5 border rounded-2xl pl-14 pr-5 py-5 text-white text-base
                          focus:outline-none focus:bg-white/10 transition-all duration-700 resize-none
                          ${
                            focusedField === "message"
                              ? isDarkMode
                                ? "border-pink-400/50"
                                : "border-purple-400/50"
                              : "border-white/10"
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    className="group relative w-full mt-8"
                    disabled={isLoading}
                  >
                    <div
                      className={`
                        absolute -inset-1 rounded-2xl blur-xl
                        opacity-50 group-hover:opacity-100 transition-all duration-700
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-pink-500 via-rose-400 to-red-500"
                            : "bg-gradient-to-r from-purple-500 via-[#5B9BD5] to-purple-500"
                        }
                      `}
                    ></div>

                    <div
                      className={`
                        relative rounded-2xl px-10 py-5 flex items-center justify-center gap-4
                        group-hover:scale-105 transition-all duration-700
                        ${
                          isDarkMode
                            ? "bg-gradient-to-r from-pink-500 to-rose-500"
                            : "bg-gradient-to-r from-purple-800 to-[#5B9BD5]"
                        }
                      `}
                    >
                      <span className="text-white font-bold text-xl">
                        {isLoading
                          ? language === "fr"
                            ? "Envoi..."
                            : "Sending..."
                          : t.form.send}
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
