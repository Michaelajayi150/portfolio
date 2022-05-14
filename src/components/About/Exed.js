import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../Animation";

const Exed = ({ keyProp, status }) => {
  return (
    <>
      {keyProp.map((key, index) => {
        return (
          <motion.div
            initial="offscreen"
            whileInView={status ? "onscreen" : null}
            viewport={{ amount: 0.7 }}
            key={index + 1}
            className="exed-data-item"
          >
            <span></span>
            <motion.div variants={sectionVariants} className="exed-date">
              {key.year}
            </motion.div>
            <motion.div variants={sectionVariants} className="exed-info">
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
