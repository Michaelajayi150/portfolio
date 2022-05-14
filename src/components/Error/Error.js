import ErrorImg from "./error.png";
import "./error.css";
import { NavLink } from "react-bootstrap-v5";
import ScrolltoTop from "./ScrolltoTop";
import { motion } from "framer-motion";

function Error() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      rotate: -30,
      scale: -0.5,
    },
    onscreen: {
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      },
    },
  };
  return (
    <div className="error">
      <ScrolltoTop />
      <div className="error-bg"></div>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        className="container"
      >
        <motion.div className="error-content" variants={cardVariants}>
          <div className="error-text">
            <h1 className="err-head">4</h1>
            <div className="error-image">
              <img src={ErrorImg} alt="Error" />
            </div>
            <h1 className="err-head">4</h1>
          </div>
          <div className="error-p">
            <h1>Page Not Found</h1>
            <p>
              You either entered a wrong route or this site is still ongoing and
              has not been deployed yet.
            </p>
            <p>
              For Further Enquiry, Contact the owner of the site or{" "}
              <NavLink
                href="mailto: ajayimichael150@gmail.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  padding: "0",
                  display: "inline",
                }}
              >
                TheDev.IO
              </NavLink>
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Error;
