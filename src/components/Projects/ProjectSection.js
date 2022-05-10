import { Container } from "react-bootstrap-v5";
import "./project.css";
import { ProjectInfo } from "./ProjectInfo";
import ProjectSectionItem from "./ProjectSectionItem";

function ProjectSection() {
  return (
    <div className="project-card-section">
      {ProjectInfo.map((key, i) => {
        return (
          <div className="relative" key={i}>
            <Container>
              {key.ProjectItem.map((item, index) => {
                return <ProjectSectionItem key={index} prop={item} />;
              })}
            </Container>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectSection;
