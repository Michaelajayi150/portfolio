import React from "react";
import { Container, Nav, NavLink } from "react-bootstrap-v5";
import Image from "./dev-image.jpg";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import CV from "./My_CV.docx";
import "./hero.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div
          className="hero-bg"
          // style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <div className="hero-container">
          <div className="dev-image">
            <img
              src={Image}
              alt="Michael Ajayi (TheDev)"
              width="100%"
              height="100%"
            />
          </div>
          <Container>
            <div className="hero-content">
              <div className="hero-text">
                Hello employer, I am <h1 className="dev-name">Michael Ajayi</h1>
                <h3>Frontend Web Developer</h3>
                <p className="hero-p">
                  I am a frontend web developer, I am a React Developer and I
                  make use of other frameworks and database such as NodeJs,
                  MongoDB. I specialise in making interactive, responsive web
                  site and web apps using HTML, CSS and JavaScript. I also
                  render web hosting services (WEB ADMINISTRATOR).
                </p>
                <Nav className="me-auto hero-contact">
                  <Nav.Link
                    href="https://www.instagram.com/the_dev.io/"
                    target="_blank"
                  >
                    <BsIcons.BsInstagram />
                    <strong className="hero-contact-tag">Instagram</strong>
                  </Nav.Link>
                  <Nav.Link
                    href="https://twitter.com/Michaelajayi150"
                    target="_blank"
                  >
                    <BsIcons.BsTwitter />
                    <strong className="hero-contact-tag">Twitter</strong>
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.linkedin.com/in/ajayi-michael-692bb6203/"
                    target="_blank"
                  >
                    <BsIcons.BsLinkedin />
                    <strong className="hero-contact-tag">Linkedin</strong>
                  </Nav.Link>
                  <Nav.Link
                    href="mailto: ajayimichael150@gmail.com"
                    target="_blank"
                  >
                    <FiIcons.FiMail />
                    <strong className="hero-contact-tag">Mail</strong>
                  </Nav.Link>
                </Nav>
                <div className="btn form-btn">Hire Me</div>
                <div className="btn form-btn clash">
                  <NavLink href={CV} download="Ajayi Michael Olatunbosun CV">
                    Download CV
                  </NavLink>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
