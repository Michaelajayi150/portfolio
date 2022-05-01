import { Container, NavLink } from "react-bootstrap-v5";
import bgImage2 from "./bg-project.jpeg";
import * as BsIcons from "react-icons/bs";
import "./project.css";
import { ProjectInfo } from "./ProjectInfo";

function ProjectSection() {
  return (
    <div className="project-card-section">
      {ProjectInfo.map((key) => {
        return (
          <>
            <div
              className="project-bg"
              style={{ backgroundImage: `url(${bgImage2})` }}
            ></div>
            <Container key={key}>
              <div className="project-hero">
                <h1>Welcome to My Projects</h1>
                <p>I build awesome websites with simple code</p>
                <div className="btn form-btn pro-btn">Get Started</div>
              </div>
              <div id="latest" className="latest-card">
                <h2>Latest Project</h2>
                <h5>Excellence is not a skill, it's an attitude</h5>
                <div className="card-container">
                  {key.LatestProject.map((i, index) => {
                    return (
                      <div key={index + 1} className="project-card">
                        <div className="image">
                          <img src={i.image} alt={i.imageAlt} />
                          <div className="image-gradient">
                            <BsIcons.BsGlobe2 size="3rem" />
                          </div>
                        </div>
                        <div className="card-title">
                          <h5>{i.name}</h5>
                          <hr />
                        </div>
                        <div className="card-info">
                          {i.about}
                          <h5>STACK</h5>
                          <hr />
                          <div className="stacks">
                            {i.stack.map((key, id) => {
                              return (
                                <div key={id} className="stack-tag">
                                  {key.tag}
                                </div>
                              );
                            })}
                          </div>
                          <div className="utility">
                            <div className="btn form-btn pro-btn">Code</div>
                            <div className="btn form-btn clash">
                              <NavLink href={i.url} target="_blank">
                                Live Demo
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </>
        );
      })}
    </div>
  );
}

export default ProjectSection;
