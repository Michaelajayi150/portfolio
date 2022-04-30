import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap-v5";
import * as DiIcons from "react-icons/di";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="footer-container">
            <Navbar.Brand href="#home">
              <DiIcons.DiCssdeck size="3rem" /> <h1>DEV.IO</h1>
            </Navbar.Brand>
            <Nav className="me-auto footer-contact">
              <Nav.Link
                href="https://www.instagram.com/the_dev.io/"
                target="_blank"
              >
                <BsIcons.BsInstagram />
                <strong className="footer-contact-tag">Instagram</strong>
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com/Michaelajayi150"
                target="_blank"
              >
                <BsIcons.BsTwitter />
                <strong className="footer-contact-tag">Twitter</strong>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/ajayi-michael-692bb6203/"
                target="_blank"
              >
                <BsIcons.BsLinkedin />
                <strong className="footer-contact-tag">Linkedin</strong>
              </Nav.Link>
              <Nav.Link
                href="mailto: ajayimichael150@gmail.com"
                target="_blank"
              >
                <FiIcons.FiMail />
                <strong className="footer-contact-tag">Mail</strong>
              </Nav.Link>
            </Nav>
            <div className="copy-right">
              <p>Copyright &copy; 2022 All rights reserved.</p>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
