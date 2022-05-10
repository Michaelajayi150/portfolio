import React from "react";
import { Container } from "react-bootstrap-v5";
import { motion } from "framer-motion";
import "./contact.css";

function Contact() {
  const contentVariants = {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      id="contact"
      className="contact-section"
    >
      <Container>
        <motion.div variants={contentVariants} className="contact-container">
          <hgroup className="text-content-header">
            <h3 className="section-topic">Contact Me</h3>
            <h1 className="section-topic">Have a Project?</h1>
            <h3 className="section-topic">I'd love to hear from you</h3>
          </hgroup>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea
              type="text"
              id="text-box"
              placeholder="Message"
              required
            />
            <button className="btn form-btn" type="submit" value="submit">
              Send Message
            </button>
          </form>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Contact;
