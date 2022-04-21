import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
