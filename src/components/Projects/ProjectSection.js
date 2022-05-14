import { NavLink } from "react-bootstrap-v5";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectSection({ prop }) {
  const cardVariants = {
    offscreen: {
      opacity: 0,
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
    <div id={prop.name} className="latest-card">
      <h2>{prop.heading}</h2>
      <h5>{prop.quote}</h5>
      <motion.div className="card-container">
        {prop.item.map((i, index) => {
          return (
            <motion.div
              key={index + 1}
              className="project-card"
              initial="offscreen"
              whileInView="onscreen"
            >
              <motion.div variants={cardVariants}>
                <div className="image">
                  <img src={i.image} alt={i.imageAlt} />
                  {i.to ? (
                    <Link to={i.to}>
                      <div className="image-gradient">
                        <BsIcons.BsGlobe2 size="3rem" />
                      </div>
                    </Link>
                  ) : (
                    <NavLink href={i.url} target="_blank">
                      <div className="image-gradient">
                        <BsIcons.BsGlobe2 size="3rem" />
                      </div>
                    </NavLink>
                  )}
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
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default ProjectSection;
