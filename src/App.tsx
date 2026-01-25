import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Corps from "./components/Corps";

function App() {
  return (
    <>
      <div
        className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photos/Design.png')" }}
      >
        <div
          className=" absolute inset-0
      bg-gradient-to-b
      from-black/50
      via-black/20
      to-black/50"
        ></div>
        <div className="relative z-10">
          <Navbar />
          <div>bonjour</div>
          <Corps />

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
