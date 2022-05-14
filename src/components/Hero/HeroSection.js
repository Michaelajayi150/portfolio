import React, { useState } from "react";
import { Container, Nav, NavLink } from "react-bootstrap-v5";
import Image from "./dev-image.jpg";
import Image2 from "./dev-image-colored.jpg";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import CV from "./Resume.docx";
import "./hero.css";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

function HeroSection() {
  function ImageDev() {
    const [set, setsta] = useState(Image2);
    const fadein = () => {
      setsta(Image);
    };
    const fadeout = () => {
      setsta(Image2);
    };
    return (
      <div
        id="image"
        onMouseOver={fadein}
        onMouseLeave={fadeout}
        className="image-fit"
      >
        <img
          src={set}
          alt="Michael Ajayi (TheDev)"
          width="100%"
          height="100%"
        />
      </div>
    );
  }

  const LoopText = () => {
    const Looking = `Looking`.split("");
    const For = `For`.split("");
    const Frontend = `Frontend`.split("");
    const Dev = `Developer.`.split("");
    return (
      <span>
        <span>
          {Looking.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}{" "}
          {For.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}{" "}
          <span> a </span> <br className="d-sm-none d-lg-block" />
          {Frontend.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}{" "}
          {Dev.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </span>
      </span>
    );
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-bg"></div>
        <Container>
          <div className="hero-container">
            <div className="hero-heading">
              <h1>
                <Wrapper className="text-comment">
                  <LoopText />
                </Wrapper>{" "}
              </h1>
            </div>
            <div className="hero-text">
              <p className="hero-p">
                I craft scalable user interfaces using modern frontend web
                technologies. I like making fun, interactive things with code.
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

              <Link className="btn form-btn" to={{ pathname: "/" }}>
                <ScrollIntoView selector="#contact">Hire Me</ScrollIntoView>
              </Link>
              <div className="btn form-btn clash">
                <NavLink href={CV} download="Resume">
                  Download CV
                </NavLink>
              </div>
            </div>
            <div className="dev-image">
              <ImageDev />
              <span className="art-circle"></span>
            </div>
            <motion.span className="art-circle"></motion.span>
            <span className="art-circle"></span>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeroSection;

const animation = keyframes`
  0% {
    opacity: 0;
    // transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
  25% {
    opacity: 1;
    // transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  75% {
    opacity: 1;
    // transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    // transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
`;

const Wrapper = styled.span`
  display: inline-block;

  span span {
    white-space: nowrap;
  }

  span span span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ${Css()}
`;

function Css() {
  let styles = `
    `;

  for (let i = 0; i < 36; i++) {
    styles += `
      span span:nth-child(${i}) {
      animation-delay: calc(0.1s * (${i} +1));
    }
  `;
  }

  return styles;
}

/* I am a frontend web developer, I am a React Developer and I
                    make use of other frameworks and database such as NodeJs,
                    MongoDB. I specialise in making interactive, responsive web
                    site and web apps using HTML, CSS and JavaScript. I also
                    render web hosting services (WEB ADMINISTRATOR). */
