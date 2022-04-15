import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

function SocialStudies() {
  return (
    <div>
      <Container>
        <Row className="first-row">
          <Col xs={12} lg={true}>
            <Card border="secondary">
              <Card.Header>
                <h1>Social Studies</h1>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="math-opening-para">
                    We follow an integrated approach to provide a conceptual
                    framework for history, geography and civics. Oral
                    presentations, research projects and field trips reinforce
                    historical knowledge. The textbooks which the school
                    utilizes have been written by Joy Hakim, a venerable author
                    who writes historical facts in a subtle fictional style. The
                    content is multifaceted in that it not only presents data
                    but also offers explanatory material to teach contextual
                    associations among the facts. This helps students learn to
                    identify significant facts from trivial ones. Our goal is to
                    aid students in becoming proficient junior historians.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={true}>
            <img
              className="opening-img"
              src="socialstudies-img-1.jpg"
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
                  <h4>History</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We introduce the Pearson Education Interactive Science
                    textbook to students once they reach a minimum critical
                    reading level.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>Geography</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Formal science instruction begins with life science.
                    Students learn about plants and animals, classification
                    systems, plant reproduction, adaptations, and
                    characteristics. One of the most significant aspects of
                    instruction at this level is that students become familiar
                    with the study skills needed to understand more complex
                    science topics. This in turn leads to an increase in student
                    interest in science and a better overall grasp of the
                    subject.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>Civics</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Students who read with confidence take Introduction to
                    Chemistry. Physical models are utilized to enhance student’s
                    learning. As with other academic subjects, it is imperative
                    students not only read but also comprehend the subject
                    matter. Our teachers ensure students always explain
                    technical concepts using proper scientific vocabulary. At
                    this level we also begin teaching students to write about
                    what they have learned using the scientific method. After
                    chemistry, physics is introduced and then biology.
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

export default SocialStudies;
