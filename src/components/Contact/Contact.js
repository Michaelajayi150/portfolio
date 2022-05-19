import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap-v5";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { PopModal, sectionVariants } from "../Animation";
// import axios from "axios";
import "./contact.css";

function Contact() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [Status, setStatus] = useState(false);
  const [state, handleSubmit] = useForm("xknykedo");

  useEffect(() => {
    if (state.succeeded) {
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 2000);
    }
  }, [setForm, state.succeeded]);

  const handleChange = (inputSpec) => (e) => {
    setForm({ ...Form, [inputSpec]: e.target.value });
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.7 }}
      id="contact"
      className="contact-section"
    >
      <Container>
        <motion.div variants={sectionVariants} className="contact-container">
          <hgroup className="text-content-header">
            <h3 className="section-topic">Contact Me</h3>
            <h1 className="section-topic">Have a Project?</h1>
            <h3 className="section-topic">I'd love to hear from you</h3>
          </hgroup>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={Form.name}
              onChange={handleChange("name")}
              required
            />
            {/* Name Error */}
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* Email */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={Form.email}
              onChange={handleChange("email")}
              required
            />
            {/* Email Error */}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* Subject */}
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={Form.subject}
              onChange={handleChange("subject")}
              required
            />
            {/* Subject Error */}
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />

            {/* Text area */}
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              value={Form.message}
              onChange={handleChange("message")}
              required
            />
            {/* Text Message Error */}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              className="btn form-btn"
              type="submit"
              value="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div initial="offscreen" animate={Status ? "popIn" : "popOut"}>
          <motion.div variants={PopModal} className="pop-modal">
            <span>
              {" "}
              Your Message has been sent, We will get back to you shortly.
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Contact;
