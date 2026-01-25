import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      from-black/60
      via-black/20
      to-black/60"
        ></div>
        <div className="relative z-10">
          <Navbar />
          <div>bonjour</div>
          <div>
            <span className="text-white"> je suis </span>
            <span className="text-white">ANDRIAMIARIONS M. Précieux</span>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
