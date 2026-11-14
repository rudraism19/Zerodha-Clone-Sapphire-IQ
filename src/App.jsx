import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Sections from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </>
  );
}

export default App;