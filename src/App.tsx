import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Corps from "./components/Corps";
import Mon_photo from "./components/Mon_photo";
import About from "./pages/About";
import Triage from "./components/Triage";
import Fleche from "./components/Fleche";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center bg-no-repeat relative"
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
        ? "from-slate-950/80 via-slate-900/55 to-slate-950/80"
        : "from-black/60 via-black/40 to-black/60"
    }
  `}
      />

      {/* Content */}
      <div className="relative z-40 flex flex-col min-h-screen">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* HERO SECTION */}
        <main className="min-h-screen flex-1 flex items-center">
          <div className=" px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <Corps isDarkMode={isDarkMode} />
            <Mon_photo />
           <div className="col-span-full flex justify-center">
              <Fleche name="Découvrir" />

            </div>
          </div>
           
        </main>

        <About />
        <Triage />
        <Fleche  name="Découvrir"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
