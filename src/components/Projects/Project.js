import { Container } from "react-bootstrap-v5";
import "./project.css";
import { ProjectInfo } from "./ProjectInfo";
import ProjectSection from "./ProjectSection";

function Project() {
  return (
    <div className="project-card-section">
      {ProjectInfo.map((key, i) => {
        return (
          <div className="relative" key={i}>
            <Container>
              {key.ProjectItem.map((item, index) => {
                return <ProjectSection key={index} prop={item} />;
              })}
            </Container>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
