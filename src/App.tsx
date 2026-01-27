import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Corps from "./components/Corps";
import Mon_photo from "./components/Mon_photo";

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
          ${
            isDarkMode
              ? "from-slate-900/60 via-slate-800/40 to-slate-900/60"
              : "from-black/60 via-black/45 to-black/60"
          }
        `}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* HERO SECTION */}
        <main className="flex-1 flex items-center">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Corps />
            <Mon_photo />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
