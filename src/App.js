import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import NewsLetter from "./Components/NewsLetter";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer/>
      
    </div>
  );
}

export default App;
