import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Corps from "./components/Corps";
import Mon_photo from "./components/Mon_photo";
import About from "./pages/About";
import Triage from "./components/Triage";
import Fleche from "./components/Fleche";
import Diplomes from "./components/Diplomes";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-x-hidden"
      //                                                                    ↑ Empêche scroll horizontal
      style={{ backgroundImage: "url('/photos/Design.png')" }}
    >
      {/* Overlay dynamique */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-b
          backdrop-blur-[1px]
          transition-colors duration-500
          ${
            isDarkMode
              ? "from-slate-950/60 via-slate-900/55 to-slate-950/70"
              : "from-black/60 via-black/40 to-black/60"
          }
        `}
      />

      {/* Content */}
      <div className="relative z-40 flex flex-col">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* HERO SECTION - Fullscreen */}
<main id="home" className="min-h-screen flex items-center py-4 md:py-8">
  {/*                                                ↑ Petit padding vertical */}
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
      {/*                                       ↑ Réduit le gap  ↑ Aligne verticalement */}
      <Corps isDarkMode={isDarkMode} />
      <Mon_photo />

      {/* Fleche "Découvrir" */}
      <div className="col-span-full flex justify-center mt-4 md:mt-6">
        {/*                                              ↑ Réduit l'espacement */}
        <Fleche name="Découvrir" />
      </div>
    </div>
  </div>
</main>

        {/* Sections avec IDs pour navigation */}
        <section id="about" className="w-full">
          <About />
        </section>

        <section id="projets" className="w-full mt-8 md:mt-12 lg:mt-16">
          {/*                                  ↑ Espacement responsive */}
          <Triage />
        </section>

        {/* Fleche "DISCUTTONS" */}
        <div className="w-full flex justify-center mt-12 md:mt-16 lg:mt-20">
          <Fleche name="DISCUTTONS DE VOTRE PROJET" />
        </div>

        <section id="parcours" className="w-full mt-8 md:mt-12 lg:mt-16">
          <Diplomes />
          <div className="mt-8 md:mt-12">
            <Experiences />
          </div>
        </section>

        <section id="technologies" className="w-full mt-8 md:mt-12 lg:mt-16">
          <Technologies />
        </section>

        <section id="contact" className="w-full mt-8 md:mt-12 lg:mt-16">
          <Contact />
        </section>

        {/* Espace avant footer */}
        <div className="mt-16 md:mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
