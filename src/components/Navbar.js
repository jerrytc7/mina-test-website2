import React from "react";
import {
  Navbar as BSNavbar,
  Container,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import "./Navbar.css";

function Navbar({subjects}) {
  return (
    <BSNavbar bg="light" expand="lg">
      <Container>
        <BSNavbar.Brand href="/">
          <Image src="/minasschoolimg.jpg" alt="mina-logo" fluid />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="School Curricula" id="curricula-dropdown">
              {subjects.map(({path, title})=> <NavDropdown.Item href={path}>{title}</NavDropdown.Item>)}
            </NavDropdown>
            <Nav.Link href="/contact-form">Enrollment</Nav.Link>
            <NavDropdown title="Programs" id="programs-dropdown">
              <NavDropdown.Item href="/after-school">
                After School
              </NavDropdown.Item>
              <NavDropdown.Item href="/summer-camps">
                Summer Camps
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Information" id="information-dropdown">
              <NavDropdown.Item href="/school-schedule">
                School Schedule
              </NavDropdown.Item>
              <NavDropdown.Item href="/brochure">Brochure</NavDropdown.Item>
              <NavDropdown.Item href="/policies">Policies</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="about-us-dropdown">
              <NavDropdown.Item href="/staff">Staff</NavDropdown.Item>
              <NavDropdown.Item href="/philosophies">
                Philosophies
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact-form">Contact Us</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
