import { Container, NavLink } from "react-bootstrap-v5";
import bgImage2 from "./project-images/bg-project.jpeg";
import "./project.css";
import { ProjectInfo } from "./ProjectInfo";
import ProjectSectionItem from "./ProjectSectionItem";

function ProjectSection() {
  return (
    <div className="project-card-section">
      {ProjectInfo.map((key, i) => {
        return (
          <div id="hero" key={i}>
            <div
              className="project-bg"
              style={{ backgroundImage: `url(${bgImage2})` }}
            ></div>
            <Container>
              <div className="project-hero">
                <h1>Welcome to My Projects</h1>
                <p>I build awesome websites with simple code</p>
                <div className="btn form-btn pro-btn">
                  <NavLink href="#latest">Get Started</NavLink>
                </div>
              </div>
              {key.ProjectItem.map((item) => {
                return <ProjectSectionItem prop={item} />;
              })}
            </Container>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectSection;
