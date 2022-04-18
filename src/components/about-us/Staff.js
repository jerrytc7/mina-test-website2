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
              <Card.Title>Director & Founder</Card.Title>
              <Card.Text>
                Director and Founder of Mina's School of Great Falls
              </Card.Text>
            </Card.Body>
          </Card>
      </Row>
      <Row className="staff-row">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="jerry-img"
              variant="top"
              src="jerry-staff.jpg"
            />
            <Card.Body className="card-body">
              <Card.Title>Jerry Kondner</Card.Title>
              <Card.Title>Teacher & Software Development Assistant</Card.Title>
              <Card.Text>Teacher and Software Development Assistant</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="paige-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Paige McFarland</Card.Title>
              <Card.Title>Teacher & Director Assistant</Card.Title>
              <Card.Text>Job Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="eleeka-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Eleeka</Card.Title>
              <Card.Title>Teacher</Card.Title>
              <Card.Text>Job Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="mr-ben-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Ben Name</Card.Title>
              <Card.Title>Teacher & Technical Support</Card.Title>
              <Card.Text>Job Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="parvoneh-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Parvoneh</Card.Title>
              <Card.Title>Teacher</Card.Title>
              <Card.Text>Job Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="sarah-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Sarah</Card.Title>
              <Card.Title>Teacher</Card.Title>
              <Card.Text>Job Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="diana-img"
              variant="top"
              src="https://via.placeholder.com/150"
            />
            <Card.Body className="card-body">
              <Card.Title>Diana</Card.Title>
              <Card.Title>Teacher</Card.Title>
              <Card.Text>Job Description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Staff;
