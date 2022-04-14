import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Fitness() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Physical Education</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Mina's School of Great Falls puts an emphasis on maintaining the
            fitness of all students attending the school. During the day,
            students have at least _____ to play amongst themselves at recess.
            Not only that, but students will have the opportunity to participate
            in organized sporting games administered by the current fitness
            coach. These games include, but are not limited to: soccer, tag,
            kickball, basketball, wiffle-ball, etc. Not only will this keep
            students in healthy physical condition, but it will also foster
            communication and teamwork amongst the students.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Nutrition</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Mina's Elementary School teaches children the importance of eating
            healthy foods instead of processed and "junk foods".
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Yoga Class</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Once each week, we have a yoga instructor visit our school to
            conduct a yoga class.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Fitness;
