import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Text>Mina's School of Great Falls</Navbar.Text>
            <Nav className="justify-content-end">
              <Button as={Link} to="/contact-form" variant="outline-success">Talk To Us!</Button>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Footer;
