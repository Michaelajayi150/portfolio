import React from "react";
import { Container } from "react-bootstrap-v5";
import Image from "./dev-image.jpg";
import "./hero.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <div className="hero-container">
          <div className="dev-image">
            <img src={Image} alt="Michael Ajayi (TheDev)" width="100%" />
          </div>
          <Container>
            <div className="hero-content">
              <div className="hero-text">
                Hello employer, I am <h1 className="dev-name">Michael Ajayi</h1>
                <h3>Frontend Web Developer</h3>
                <p className="hero-p">
                  Amet adipisicing reprehenderit cupidatat do velit occaecat
                  laborum exercitation reprehenderit aute irure. Tempor quis
                  quis consequat consectetur exercitation do minim ut id et
                  cillum ex ea incididunt. Esse reprehenderit sit aute proident
                  pariatur velit magna laboris.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
