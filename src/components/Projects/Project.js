import React, { useEffect } from "react";
import { Container } from "react-bootstrap-v5";
import { useInView } from "react-intersection-observer";
import bgImage from "./bg-one.jpg";
import "./project.css";
import { ProjectInfo } from "./ProjectInfo";
// import bgImage2 from "./bg-two.jpeg";

function Project() {
  const { ref, inView, entry } = useInView();

  const TimeAnimation = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };
  const LoopText = async () => {
    for (let i = 0; i < 3; i++) {
      await TimeAnimation(2000);
      entry.target.innerHTML = ProjectInfo.map((key) => {
        return key.Features[i].text;
      });
    }
  };

  useEffect(() => {
    if (inView) {
      LoopText();
    }
  });

  return (
    <div
      id="project"
      className="project-section"
      style={{
        backgroundImage: `url(${bgImage}), linear-gradient(45deg, #eb01a5, #d13531)`,
      }}
    >
      <Container>
        <div className="project-content">
          <h1 className="text-content">
            I create{" "}
            <span className="text-comment" ref={ref}>
              Responsive
            </span>{" "}
            <br />
            Web Site and Application
          </h1>
          <p>
            Beautiful sites with code simplicity <br /> You'd love it.
          </p>
          <div>
            <span className="btn check-project">Check Out Some</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
