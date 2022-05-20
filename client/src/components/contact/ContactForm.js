import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function ContactForm({ addToast }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_v41hm7l", form.current, "XRHlsNIyRts0YTcX6")
      .then(
        (result) => {
          addToast({
            title: "Thanks",
            message: "Your email has been sent. We will respond shortly.",
          });
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact Us!</h1>
        </Col>
      </Row>
      <Row>
      <Col>
          <p>
            If you are interested in enrolling in our school, getting more
            information regarding our after-school programs, or have some questions about our summer camps,
            please send a contact request below and we will respond shortly!
          </p>
        </Col>
      </Row>
      <Form onSubmit={sendEmail} ref={form}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control name="firstName" required />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" name="phoneNumber" required />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" required />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
