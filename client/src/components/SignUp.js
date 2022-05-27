import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function SignUp() {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const firstNameChangeHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e) => {
    setEnteredLastName(e.target.value)
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword
    }
    axios.post('http://localhost:3001/api/user', userData)
    .then(res => console.log(res.data))
    setEnteredFirstName('')
    setEnteredLastName('')
    setEnteredEmail('')
    setEnteredPassword('')
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Sign-Up Below</Card.Title>
              <Card.Text>
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formFirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      value={enteredFirstName}
                      onChange={firstNameChangeHandler}
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      value={enteredLastName}
                      onChange={lastNameChangeHandler}
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      value={enteredEmail}
                      onChange={emailChangeHandler}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={enteredPassword}
                      onChange={passwordChangeHandler}
                      type="password"
                      placeholder="Password"
                    />
                    <Form.Text className="text-muted">
                      Remember your email and password. You will need them to
                      sign-in in the future!
                    </Form.Text>
                  </Form.Group>
                  <Button variant="secondary" type="submit" className="mb-3">
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
