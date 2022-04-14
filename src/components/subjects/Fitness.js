import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "./Fitness.css";

function Fitness() {
  return (
    <Container>
      <Row className="first-row">
        <Col xs={12} lg={true}>
          <Card border="secondary">
            <Card.Header>
              <h1>Fitness</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="fitness-opening-para">
                  Mina's School of Great Falls puts an emphasis on maintaining
                  the fitness of all students attending the school. During the
                  day, students have at least _____ to play amongst themselves
                  at recess. Not only that, but students will have the
                  opportunity to participate in organized sporting games
                  administered by the current fitness coach. These games
                  include, but are not limited to: soccer, tag, kickball,
                  basketball, wiffle-ball, etc. Not only will this keep students
                  in healthy physical condition, but it will also foster
                  communication and teamwork amongst the students.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={true}>
          <img className="fitness-img" src="fitness.jpg" alt="fitness-img" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4>Nutrition</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Mina's Elementary School teaches children the importance of
                  eating healthy foods instead of processed and "junk foods".
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h4>Yoga Class</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Once each week, we have a yoga instructor visit our school to
                  conduct a yoga class.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Fitness;
