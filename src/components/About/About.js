import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap-v5";
import { useInView } from "react-intersection-observer";
import "./about.css";
import { AboutData } from "./AboutInfo";
import { motion } from "framer-motion";
import Exed from "./Exed";
import {
  cardVariants,
  contentVariants,
  skillVariants,
} from "./AnimationVariant";

function About() {
  const [Experience, Setexperience] = useState("ex");
  const [Education, Seteducation] = useState("ed active");
  const [status, setStatus] = useState(true);
  const [Animate, Setanimate] = useState("about-skills");
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      if (!Animate.includes("animate")) {
        Setanimate("about-skills animate");
      }
    }
  }, [inView, Animate]);

  const handleEd = () => {
    if (Experience.includes("active")) {
      Setexperience("ex");
      Seteducation("ed active");
      setStatus(false);
      setTimeout(() => {
        setStatus(true);
      }, 300);
    }
  };

  const handleEx = () => {
    if (Education.includes("active")) {
      Setexperience("ex active");
      Seteducation("ed");
    }
    setStatus(false);
    setTimeout(() => {
      setStatus(true);
    }, 300);
  };

  return (
    <>
      {AboutData.map((key, index) => {
        return (
          <div id="skill" key={index} className="about-section">
            <motion.div
              className="about-container"
              initial="offscreen"
              whileInView="onscreen"
            >
              <Container>
                <motion.div
                  className="about-content"
                  initial="offscreen"
                  whileInView="onscreen"
                >
                  <motion.div className="text-lg" variants={contentVariants}>
                    <div className="about-text">
                      <h1 className="section-topic">About Myself</h1>
                      <p className="about-p">{key.aboutText}</p>
                    </div>

                    <motion.div
                      className="about-cards"
                      initial="offscreen"
                      whileInView="onscreen"
                    >
                      {key.aboutTag.map((cardItem, index) => {
                        return (
                          <motion.div
                            key={index + 1}
                            className="about-card-item"
                            variants={cardVariants}
                          >
                            {cardItem.icon}
                            <b>{cardItem.text}</b>
                            <p>{cardItem.info}</p>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    ref={ref}
                    className={Animate}
                    variants={skillVariants}
                  >
                    {key.aboutSkill.map((cardItem, index) => {
                      return (
                        <div
                          key={index + 1}
                          className={`about-skills-item skill-${index}`}
                        >
                          <b>{cardItem.tag}</b>
                          <div className="skill-range">
                            <div className="skill-range-item">
                              <div className="skill-fill"></div>
                            </div>
                            <div className="skill-range-item full">
                              <div className="skill-fill"></div>
                            </div>
                            <div className="skill-text">{cardItem.percent}</div>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </Container>
            </motion.div>

            <div className="about-exed">
              <Container>
                <div className="about-exed-control">
                  <span className={Education} id="education" onClick={handleEd}>
                    MY EDUCATION
                  </span>
                  <span
                    className={Experience}
                    id="experience"
                    onClick={handleEx}
                  >
                    MY EXPERIENCES
                  </span>
                </div>

                <div className="exed-data">
                  {Experience.includes("active") ? (
                    <Exed keyProp={key.Experiences} status={status} />
                  ) : (
                    <Exed keyProp={key.Education} status={status} />
                  )}
                </div>
              </Container>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default About;
