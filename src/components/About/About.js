import React from "react";
import { Container } from "react-bootstrap-v5";
import "./about.css";
import * as DiIcons from "react-icons/di";
// import BgImage from "./bg-one.jpg";

function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <Container>
            <div className="about-content">
              <div className="about-text">
                <h1 className="section-topic">About Myself</h1>
                <p className="about-p">
                  Amet adipisicing reprehenderit cupidatat do velit occaecat
                  laborum exercitation reprehenderit aute irure. Tempor quis
                  quis consequat consectetur exercitation do minim ut id et
                  cillum ex ea incididunt. Esse reprehenderit sit aute proident
                  pariatur velit magna laboris.
                </p>
              </div>
              <div className="about-cards">
                <div className="about-card-item">
                  <DiIcons.DiReact size="3rem" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;
