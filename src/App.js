import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Project from "./components/Projects/Project";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <HeroSection />
              <About />
              <Service />
              <Contact />
            </>
          }
        />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
