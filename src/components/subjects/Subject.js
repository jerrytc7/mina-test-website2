import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "./Subject.css"


function SubjectDetail({title, description, index}) {
  return (
    <Accordion.Item eventKey={`${index}`}>
      <Accordion.Header>
        <h4>{title}</h4>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          {description}
        </p>
      </Accordion.Body>
    </Accordion.Item>
  );
}

function Subject({ title, openingPara, openingImg, subjectDetails }) {
  return (
    <div>
      <Container>
        <Row className="first-row">
          <Col xs={12} lg={true} className="flex-center flex-column">
            <Card border="secondary">
              <Card.Header>
                <h1>{title}</h1>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="opening-para">{openingPara}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={true} className="flex-center flex-column">
            <img
              className="opening-img"
              src={openingImg}
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
              {subjectDetails.map((subjectDetail, i) => (
                <SubjectDetail {...subjectDetail} index={i} />
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subject;
