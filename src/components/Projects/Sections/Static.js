import { NavLink } from "react-bootstrap-v5";
import * as BsIcons from "react-icons/bs";

function Static({ prop }) {
  return (
    <div id="static" className="latest-card">
      <h2>Snippet and Landing Page Projects</h2>
      <h5>You'll be amazed how your business got by without them!</h5>
      <div className="card-container">
        {prop.StaticProject.map((i, index) => {
          return (
            <div key={index + 1} className="project-card">
              <div className="image">
                <img src={i.image} alt={i.imageAlt} />
                <NavLink href={i.url} target="_blank">
                  <div className="image-gradient">
                    <BsIcons.BsGlobe2 size="3rem" />
                  </div>
                </NavLink>
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
  );
}

export default Static;
