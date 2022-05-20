import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <h3 className="mina-title">Mina's School of Great Falls</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="hero-image"></div>
            
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={true}>
            <h3 className="what-we-do-container">What We Do</h3>
            <p>
              At Mina's School, we concentrate on the core math and science
              subjects. However, there is also a strong emphasis on the other
              traditional basics: language arts (reading, writing, and grammar),
              and civics (history and geography). We also weave into each school
              day Exercise, Art (drawing and/or painting), and/or Technology
              (computer technology and "shop"). To find out more about each
              subject area offered, click on the subject below:
              <li>
                <Link to="/math">Math</Link>
              </li>
              <li>
                <Link to="/language-arts">Language Arts</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/social-studies">Social Studies</Link>
              </li>
              <li>
                <Link to="/fitness">Fitness</Link>
              </li>
              <li>
                <Link to="/art">Art</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </p>
          </Col>
          <Col xs={12} md={true}>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
