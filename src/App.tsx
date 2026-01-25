import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div>bonjour</div>
      <div>
        <span> je suis </span>
        <span>ANDRIAMIARIONS M. Précieux</span>

        <div className="bg-red-500 text-white p-10 text-4xl">
          TEST TAILWIND - SI VOUS VOYEZ DU ROUGE, TAILWIND FONCTIONNE
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
