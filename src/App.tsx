import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="min-h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photos/Design.png')" }}
      >
        <Navbar />
        <div>bonjour</div>
        <div>
          <span> je suis </span>
          <span>ANDRIAMIARIONS M. Précieux</span>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
