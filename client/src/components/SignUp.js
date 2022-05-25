import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "./SignUp.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value)
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  };

  return (
    <Container>
      <Row>
        <h1 className="title">Sign-Up</h1>
      </Row>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Sign-Up Below</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      value={firstName}
                      onChange={firstNameChangeHandler}
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      value={lastName}
                      onChange={lastNameChangeHandler}
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={email}
                      onChange={emailChangeHandler}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={password}
                      onChange={passwordChangeHandler}
                      type="password"
                      placeholder="Password"
                    />
                    <Form.Text className="text-muted">
                      Remember your email and password. You will need them to
                      sign-in in the future!
                    </Form.Text>
                  </Form.Group>
                  <Button variant="secondary" type="submit">
                    Sign-Up
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

export default SignUp;
