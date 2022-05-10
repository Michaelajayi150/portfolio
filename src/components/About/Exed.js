import React from "react";
import { motion } from "framer-motion";

const Exed = ({ keyProp, status }) => {
  const exedVariants = {
    offscreen: {
      opacity: 0,
      visibility: "hidden",
    },
    onscreen: {
      opacity: 1,
      visibility: "visible",
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };

  return (
    <>
      {keyProp.map((key, index) => {
        return (
          <motion.div
            initial="offscreen"
            whileInView={status ? "onscreen" : null}
            key={index + 1}
            className="exed-data-item"
          >
            <span></span>
            <motion.div variants={exedVariants} className="exed-date">
              {key.year}
            </motion.div>
            <motion.div variants={exedVariants} className="exed-info">
              <h1>{key.company}</h1>
              <p>{key.info}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Exed;
