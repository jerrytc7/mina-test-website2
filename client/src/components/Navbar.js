import React from "react";
import {
  Navbar as BSNavbar,
  Container,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";
import {Link}  from "react-router-dom"
import "./Navbar.css";

function Navbar({subjects, programs}) {
  return (
    <BSNavbar bg="light" expand="lg">
      <Container>
        <BSNavbar.Brand href="/">
          <Image src="minasschoolimg.jpg" alt="mina-logo" fluid />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="School Curricula" id="curricula-dropdown">
              {subjects.map(({path, title})=> <NavDropdown.Item as={Link} to={path}>{title}</NavDropdown.Item>)}
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-form">Enrollment</Nav.Link>
            <NavDropdown title="After-School Programs" id="programs-dropdown">
            {programs.map(({path, title})=> <NavDropdown.Item as={Link} to={path}>{title}</NavDropdown.Item>)}
            </NavDropdown>
            <NavDropdown title="Information" id="information-dropdown">
              <NavDropdown.Item as={Link} to="/school-schedule">
                School Schedule
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/documents">Documents</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/policies">Policies</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="about-us-dropdown">
              <NavDropdown.Item as={Link} to="/staff">Staff</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/philosophies">
                Philosophies
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-form">Contact Us</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
