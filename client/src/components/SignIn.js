import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function SignIn() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Sign-In Below</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="secondary" type="submit">
                    Sign-In
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
