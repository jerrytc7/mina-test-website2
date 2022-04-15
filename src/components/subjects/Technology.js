import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

function Technology() {
  return (
    <div>
      <Container>
        <Row className="first-row">
          <Col xs={12} lg={true}>
            <Card border="secondary">
              <Card.Header>
                <h1>Technology</h1>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="math-opening-para">
                    Technology is an important extension of the math and science
                    instruction. Children learn the connection between the
                    conceptual subjects of math and science and how they become
                    concrete through the physical implementations of practical
                    everyday technology. By exploring and tinkering with
                    technology, students learn to appreciate the necessary
                    foundations provided by math and science.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={true}>
            <img
              className="opening-img"
              src="technology-img-1.jpg"
              alt="happy-math-img"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="accord-title">
              Click on Each Topic For More Information
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>Computer Technology</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Applications (MS Office), programming, and website
                    administration are developed and used by children during the
                    course of study.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>Mechanics & Electronics</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Everyday things like motors, engines, electricity, circuits,
                    plumbing, etc. are explored so that students understand the
                    scientific foundations behind their everyday lives. Contact
                    Ms. Mina for detailed explanation of her methods and
                    program!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Technology;
