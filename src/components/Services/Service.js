import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import "./service.css";
import ServiceAnimation from "./ServiceAnimation";

function Project() {
  const [words, setWords] = useState("Interactive");
  const [wordCount, setCount] = useState(0);
  const { ref, inView } = useInView();

  const LoopText = () => {
    setTimeout(() => {
      setCount(wordCount + 1);
      if (wordCount >= 2) {
        setCount(0);
      }
    }, 6000);

    const Features = [
      { text: "Interactive" },
      { text: "User-Friendly" },
      { text: "Responsive" },
    ];

    setTimeout(() => {
      if (wordCount === 0) {
        setWords(`${Features[0].text}`);
      } else if (wordCount === 1) {
        setWords(`${Features[1].text}`);
      } else if (wordCount === 2) {
        setWords(`${Features[2].text}`);
      }
    }, 6000);

    const Arr = words.split("");
    return (
      <span>
        {Arr.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </span>
    );
  };

  useEffect(() => {
    if (inView) {
      LoopText();
    }
  });

  const cardVariants = {
    offscreen: {
      opacity: 0.2,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      id="project"
      className="project-section"
      initial="offscreen"
      whileInView="onscreen"
    >
      <motion.div className="project-content" variants={cardVariants}>
        <h1 className="text-content">
          I create{" "}
          <Wrapper className="text-comment" ref={ref}>
            <LoopText />
          </Wrapper>{" "}
          <br />
          Web Site and Application
        </h1>

        <p>
          Beautiful sites with code simplicity <br /> You'd love it.
        </p>

        <Link to={{ pathname: "/", hash: "#latest" }}>
          <ScrollIntoView selector="#latest" className="form-btn check-project">
            Check Out Some
          </ScrollIntoView>
        </Link>

        <ServiceAnimation />
      </motion.div>
    </motion.div>
  );
}

export default Project;

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  75% {
    opacity: 1;
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
    filter: blur(10px);
  }
`;

const Wrapper = styled.span`
  display: inline-block;

  span span {
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

  for (let i = 0; i < 14; i++) {
    styles += `
      span span:nth-child(${i}) {
      animation-delay: calc(0.1s * (${i} +1));
    }
  `;
  }

  return styles;
}
