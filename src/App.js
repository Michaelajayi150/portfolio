import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Project />
    </div>
  );
}

export default App;
