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
      <Row>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Staff;
