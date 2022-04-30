import React from "react";
import { Container } from "react-bootstrap-v5";
import "./contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <Container>
        <div className="contact-container">
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
        </div>
      </Container>
    </div>
  );
}

export default Contact;
