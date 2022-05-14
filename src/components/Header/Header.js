import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as DiIcons from "react-icons/di";
import "./header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";

function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const HandleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
  };

  window.addEventListener("scroll", HandleScroll);

  return (
    <>
      <Navbar
        className={scrollPos >= 80 ? "header fixed" : "header"}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Link className="navbar-brand" to="/">
            <DiIcons.DiCssdeck size="3rem" /> <h1>DEV.IO</h1>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-2">
              <Link className="nav-link" to={{ pathname: "/" }}>
                <ScrollIntoView selector="#home">Home</ScrollIntoView>
              </Link>
              <Link className="nav-link" to={{ pathname: "/" }}>
                <ScrollIntoView selector="#skill">About</ScrollIntoView>
              </Link>
              <Link className="nav-link" to={{ pathname: "/" }}>
                <ScrollIntoView selector="#project">Services</ScrollIntoView>
              </Link>
              <Link className="nav-link" to={{ pathname: "/" }}>
                <ScrollIntoView selector="#contact">Contact</ScrollIntoView>
              </Link>
              <NavDropdown title="Project" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to={{ pathname: "/" }}>
                  <ScrollIntoView selector="#latest">
                    Recent Projects
                  </ScrollIntoView>
                </Link>
                <Link className="dropdown-item" to={{ pathname: "/" }}>
                  <ScrollIntoView selector="#ongoing">
                    Ongoing Projects
                  </ScrollIntoView>
                </Link>
                <Link className="dropdown-item" to={{ pathname: "/" }}>
                  <ScrollIntoView selector="#static">Snippets</ScrollIntoView>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar id="home" bg="light" variant="light">
        <Container>
          <Nav className="me-auto header-contact">
            <Nav.Link
              href="https://www.instagram.com/the_dev.io/"
              target="_blank"
            >
              <BsIcons.BsInstagram />
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/Michaelajayi150"
              target="_blank"
            >
              <BsIcons.BsTwitter />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/ajayi-michael-692bb6203/"
              target="_blank"
            >
              <BsIcons.BsLinkedin />
            </Nav.Link>
            <Nav.Link href="mailto: ajayimichael150@gmail.com" target="_blank">
              <FiIcons.FiMail />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
