import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectSection from "./components/Projects/ProjectSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/portfolio"
          element={
            <>
              <HeroSection />
              <About />
              <Project />
              <Contact />
            </>
          }
        />
        <Route path="/portfolio/projects" element={<ProjectSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;