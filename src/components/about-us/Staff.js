import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Staff.css";

function Staff() {
  return (
    <Container>
      <Row className="staff-row">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="mina-img" variant="top" src="mina-staff.jpg" />
            <Card.Body className="card-body">
              <Card.Title>Mina Kondner</Card.Title>
              <Card.Title>Director, Founder & Principal</Card.Title>
            </Card.Body>
          </Card>
      </Row>
      <Row className="staff-row">
        <Col className="flex-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="jerry-img"
              variant="top"
              src="jerry-staff.jpg"
            />
            <Card.Body className="card-body">
              <Card.Title>Jerry Kondner</Card.Title>
              <Card.Title>Teacher & Software Development Assistant</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="flex-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="paige-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Paige McFarland</Card.Title>
              <Card.Title>Teacher & Director Assistant</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="flex-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="eleeka-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Eleeka</Card.Title>
              <Card.Title>Teacher</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="flex-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="mr-ben-img"
              variant="top"
              src="ben-img.JPG"
            />
            <Card.Body className="card-body">
              <Card.Title>Ben Name</Card.Title>
              <Card.Title>Teacher & Technical Support</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="flex-center">
          <Card style={{ width: "18rem"}}>
            <Card.Img
              className="parvoneh-img"
              variant="top"
              src="par-img.JPEG"
            />
            <Card.Body className="card-body">
              <Card.Title>Par Pazadeh</Card.Title>
              <Card.Title>Teacher</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="flex-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="sarah-img"
              variant="top"
              src="sara-img.jpg"
            />
            <Card.Body className="card-body">
              <Card.Title>Sara Tabik</Card.Title>
              <Card.Title>Teacher</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="flex-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="diana-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Diana</Card.Title>
              <Card.Title>Teacher</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Staff;
