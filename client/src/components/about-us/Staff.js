import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Staff.css";

function Staff({ staffData }) {
  return (
    <Container>
      <Row className="staff-row mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="mina-img" variant="top" src="mina-staff.jpg" />
          <Card.Body className="card-body">
            <Card.Title>Mina Kondner</Card.Title>
            <Card.Title>Director, Founder & Principal</Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row className="staff-row">
        {staffData.map((staff) => (
          <Col className="flex-center">
            <Card style={{ width: "18rem" }} className="mb-2">
              <Card.Img
                className="employee-img"
                variant="top"
                src={staff.img}
              />
              <Card.Body className="card-body">
                <Card.Title>{staff.name}</Card.Title>
                <Card.Title>{staff.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Staff;
