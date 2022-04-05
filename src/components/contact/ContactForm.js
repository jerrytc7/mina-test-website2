import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { Button, Form } from "react-bootstrap";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_v41hm7l",
        form.current,
        "XRHlsNIyRts0YTcX6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form onSubmit={sendEmail} ref={form}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName"/>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName"/>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phoneNumber" />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
