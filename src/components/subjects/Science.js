import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

function Science() {
  return (
      <div>
        <Container>
          <Row className="first-row">
            <Col xs={12} lg={true}>
              <Card border="secondary">
                <Card.Header>
                  <h1>Science</h1>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p className="math-opening-para">
                      At our school, the most important aspect of education is
                      learning how to learn. We group children
                      according to their level of understanding and not their
                      current grade level. Students whose science reading and
                      comprehension is at a high level are provided the
                      opportunity to enrich their learning and to move on to a
                      more advanced level of content. In addition to the text
                      book, instruction takes place through several means use
                      physical models, experiments, and educational videos which
                      are incorporated into the curriculum. This provides
                      students the opportunity to learn the material in a
                      variety of ways and improves long-term comprehension.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={true}>
              <img
                className="opening-img"
                src="science-img-1.jpg"
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
                    <h4>GRADES K-2</h4>
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
                    <h4>GRADES 3-5</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Formal science instruction begins with life science.
                      Students learn about plants and animals, classification
                      systems, plant reproduction, adaptations, and
                      characteristics. One of the most significant aspects of
                      instruction at this level is that students become familiar
                      with the study skills needed to understand more complex
                      science topics. This in turn leads to an increase in
                      student interest in science and a better overall grasp of
                      the subject.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h4>GRADES 5-8</h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Students who read with confidence take Introduction to
                      Chemistry. Physical models are utilized to enhance
                      student’s learning. As with other academic subjects, it is
                      imperative students not only read but also comprehend the
                      subject matter. Our teachers ensure students always
                      explain technical concepts using proper scientific
                      vocabulary. At this level we also begin teaching students
                      to write about what they have learned using the scientific
                      method. After chemistry, physics is introduced and then
                      biology.
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

export default Science;
