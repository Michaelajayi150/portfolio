import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap-v5";
import { Link, useLocation } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import { Links, Project } from "./LinkData";
import Menu from "./Menu";

function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const HandleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
  };

  window.addEventListener("scroll", HandleScroll);

  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
          <Link className="navbar-brand" to={{ pathname: "/", hash: "" }}>
            <ScrollIntoView selector="#home">
              <h1>DEV.IO</h1>
            </ScrollIntoView>
          </Link>
          {!location.pathname === "/" ? (
            <div className="navbar-toggler">
              {isOpen ? (
                <RiIcons.RiMenu4Line onClick={toggle} size="2rem" />
              ) : (
                <RiIcons.RiMenu3Line onClick={toggle} size="2rem" />
              )}
            </div>
          ) : null}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={
              !isOpen ? "justify-content-end" : "justify-content-end show"
            }
          >
            <Nav className="me-2">
              {location.pathname === "/project"
                ? Project.map((item, index) => {
                    return <Menu item={item} toggle={toggle} key={index} />;
                  })
                : location.pathname === "/"
                ? Links.map((item, index) => {
                    return <Menu item={item} toggle={toggle} key={index} />;
                  })
                : null}
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
