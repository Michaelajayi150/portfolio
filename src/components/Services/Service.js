import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./service.css";
import ServiceAnimation, { Loop } from "./ServiceAnimation";
import { sectionVariants } from "../Animation";

function Service({ hero }) {
  const [words, setWords] = useState("Interactive");
  const [wordCount, setCount] = useState(0);
  const { ref, inView } = useInView();

  const LoopText = () => {
    setTimeout(() => {
      setCount(wordCount + 1);
      if (wordCount >= 2) {
        setCount(0);
      }
    }, 4500);

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
    }, 4500);

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

  return (
    <motion.div
      id="service"
      className={!hero ? "project-section" : `project-section ${hero}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div className="project-content" variants={sectionVariants}>
        <h1 className="text-content">
          I create{" "}
          <Loop className="text-comment" ref={ref}>
            <LoopText />
          </Loop>{" "}
          <br />
          Web Site and Application
        </h1>

        <p>
          Beautiful sites with code simplicity <br /> You'd love it.
        </p>

        <Link to={{ pathname: "/project" }}>
          <span className="form-btn check-project">Check Out Some</span>
        </Link>

        <ServiceAnimation />
      </motion.div>
    </motion.div>
  );
}

export default Service;
