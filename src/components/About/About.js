import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap-v5";
import { useInView } from "react-intersection-observer";
import "./about.css";
import { AboutData } from "./AboutInfo";
import Exed from "./Exed";
// import BgImage from "./bg-one.jpg";

function About() {
  const [Experience, Setexperience] = useState("ex active");
  const [Education, Seteducation] = useState("ed");
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
    }
  };

  const handleEx = () => {
    if (Education.includes("active")) {
      Setexperience("ex active");
      Seteducation("ed");
    }
  };

  return (
    <>
      {AboutData.map((key) => {
        return (
          <div id="skill" className="about-section">
            <div className="about-container">
              <Container>
                <div className="about-content">
                  <div className="text-lg">
                    <div className="about-text">
                      <h1 className="section-topic">About Myself</h1>
                      <p className="about-p">{key.aboutText}</p>
                    </div>

                    <div className="about-cards">
                      {key.aboutTag.map((cardItem) => {
                        return (
                          <div className="about-card-item">
                            {cardItem.icon}
                            <b>{cardItem.text}</b>
                            <p>{cardItem.info}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div ref={ref} className={Animate}>
                    {key.aboutSkill.map((cardItem, index) => {
                      return (
                        <div className={`about-skills-item skill-${index}`}>
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
                  </div>
                </div>
              </Container>
            </div>

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
                    <Exed keyProp={key.Experiences} />
                  ) : (
                    <Exed keyProp={key.Education} />
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
